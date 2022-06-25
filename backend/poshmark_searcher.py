import requests
from bs4 import BeautifulSoup

base_url = 'https://poshmark.ca/search?query='
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
}

req = requests.get('https://poshmark.ca/search?query=jeans', headers=headers)
soup = BeautifulSoup(req.content, 'lxml')

item_container = soup.find('div', class_='tiles_container m--t--1')
items = item_container.contents

for item in items:
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

    print({
        'link': href,
        'price': price,
        'img': img_src
    })
