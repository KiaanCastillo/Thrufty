from unittest import result
import flask
import random
from flask import request, jsonify
from ebay_searcher import search_ebay
from poshmark_searcher import search_poshmark
from depop_searcher import search_depop

app = flask.Flask(__name__)
app.config['DEBUG'] = True

@app.route('/', methods=['GET'])
def home():
    return "<h1>Flask</h1>"

@app.route('/api/search', methods=['GET'])
def search():
    query_parameters = request.args
    name = query_parameters.get('name')
    name = "+".join(name.split())
    
    ebay_results = search_ebay(name)
    poshmark_results = search_poshmark(name)
    depop_results = search_depop(name)

    results = ebay_results + poshmark_results + depop_results
    randomized_indices = random.sample(range(len(results)), len(results))
    randomized_results = []

    for index in randomized_indices:
        randomized_results.append(results[index])

    return jsonify(randomized_results)
