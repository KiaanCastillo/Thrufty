import requests
from bs4 import BeautifulSoup

base_url = 'https://www.depop.com/search/?q='
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
}

req = requests.get('https://www.depop.com/search/?q=jeans', headers=headers)
soup = BeautifulSoup(req.content, 'lxml')

items = soup.find_all('li', class_='styles__ProductCardContainer-sc-__sc-13q41bc-8 fcntxO')

for item in items:
    links = item.find_all('a')
    link = links[0].get('href')

    price_container = item.find('div', class_='styles__ProductPrice-sc-__sc-13q41bc-7 dTRPCT')
    prices = price_container.find_all('p')
    price = ''
    if len(prices) == 2:
        price = prices[1].text.strip()
    else:
        price = prices[0].text.strip()

    print({
        'link': link,
        'price': price
    })
