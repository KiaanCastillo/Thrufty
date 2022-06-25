import requests
from bs4 import BeautifulSoup

base_url = 'https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw='
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
}

req = requests.get('https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=shirt', headers=headers)
soup = BeautifulSoup(req.content, 'lxml')

item_container = soup.find('ul', class_='srp-results srp-grid clearfix')
items = item_container.find_all('li', class_='s-item s-item__pl-on-bottom')

for item in items:
    links = item.find_all('a')
    link = links[0].get('href')

    price = item.find('span', class_='s-item__price').text.strip()
    
    img = item.find('img')
    img_src = img.get('src')

    print({
        'link': link,
        'price': price,
        'img': img_src
    })
