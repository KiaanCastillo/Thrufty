from unittest import result
import requests
import time
from bs4 import BeautifulSoup
from util import is_valid_info, get_currency_symbol

def search_depop(name):
    base_url = 'https://www.depop.com'
    base_search_url = 'https://www.depop.com/search/?q='
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
    }
    request_url = f'{base_search_url}{name}'
    depop_api_search_url = f'https://webapi.depop.com/api/v2/search/products/?what={name}'
    request = requests.get(depop_api_search_url, headers=headers)
    items = request.json()['products']

    results = []
    
    for item in items:
        link = None
        price = None
        img = None

        try:
            suffix = item['slug']
            link = f'{base_url}/products/{suffix}'
        except:
            link = None

        try:
            price_amount = item['price']['priceAmount']
            currency = item['price']['currencyName']
            currency_symbol = get_currency_symbol(currency)
            price = f'{currency_symbol}{price_amount}'
        except:
            price = None

        try:
            img = item['preview']['960']
        except:
            img = None

        if is_valid_info(link, price, img):
            results.append({
                'link': link,
                'price': price,
                'img': img
            })

    return results
