import requests
from bs4 import BeautifulSoup
from util import is_valid_info

def search_ebay(name):
    base_search_url = 'https://www.ebay.com/sch/i.html?_nkw='
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
    }
    request_url = f'{base_search_url}{name}'

    request = requests.get(request_url, headers=headers)
    soup = BeautifulSoup(request.content, 'lxml')

    item_container = soup.find('ul', class_='srp-results srp-grid clearfix')

    try:
        items = item_container.find_all('li', class_='s-item s-item__pl-on-bottom')
    except:
        items = []

    results = []

    for item in items:
        link = None
        price = None
        img = None

        try:
            links = item.find_all('a')
            link = links[0].get('href')
        except:
            link = None

        try:
            price = item.find('span', class_='s-item__price').text.strip()
        except:
            price = None
        
        try:
            img = item.find('img')
            img_src = img.get('src')
        except:
            img = None

        if is_valid_info(link, price, img):
            results.append({
                'link': link,
                'price': price,
                'img': img_src
            })

    return results
