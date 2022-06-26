def is_valid_info(link, price, img):
    if link is not None and price is not None and img is not None:
        return True
    else:
        return False

def get_currency_symbol(currency):
    symbols = {
        'USD': '$',
        'CAD': '$',
        'GBP': '£',
        'EUR': '€',
        'IDR': 'Rp',
        'KRW': '₩',
        'PHP': '₱',
    }

    return symbols[currency]
