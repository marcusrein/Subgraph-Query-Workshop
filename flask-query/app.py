from flask import Flask, render_template
import requests

app = Flask(__name__)

@app.route('/')
def home():
    query = """
       			{
  collections(first: 10, where: {totalSupply_gt: "500"}) {
    id
    name
    symbol
    totalSupply
  }
}
    """
    
    url = "https://gateway-arbitrum.network.thegraph.com/api/<API_KEY>/subgraphs/id/CBf1FtUKFnipwKVm36mHyeMtkuhjmh4KHzY3uWNNq5ow"
    response = requests.post(url, json={'query': query})
    data = response.json()
    
    return render_template('index.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
