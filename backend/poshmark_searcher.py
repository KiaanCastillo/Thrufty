import requests
from bs4 import BeautifulSoup
from util import is_valid_info

def search_poshmark(name):
    base_url = 'https://poshmark.ca'
    base_search_url = 'https://poshmark.ca/search?query='
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
    }
    request_url = f'{base_search_url}{name}'

    request = requests.get(request_url, headers=headers)
    soup = BeautifulSoup(request.content, 'lxml')

    item_container = soup.find('div', class_='tiles_container m--t--1')
    items = item_container.contents

    results = []

    for item in items:
        link = None
        price = None
        img = None

        link = item.find('a')
        href = ''
        if hasattr(link, 'href'):
            href = link.get('href')
        else:
            href = None
        
        try:
            price_container = item.find('div', class_='item__details')
            price = price_container.find('span', class_='p--t--1 fw--bold').text.strip()
        except:
            price = None

        try:
            img = item.find('img')
            img_src = img.get('src')
        except:
            img_src = None

        if is_valid_info(link, price, img):
            results.append({
                'store': 'Poshmark',
                'link': f'{base_url}{href}',
                'price': price,
                'img': img_src
            })
    
    return results
