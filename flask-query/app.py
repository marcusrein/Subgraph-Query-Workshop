from flask import Flask, render_template
import requests

app = Flask(__name__)

@app.route('/')
def home():
    query = """
        {
  accountCollections(orderBy: tokenCount, orderDirection: desc, first: 5) {
    account {
      id
      tokens(first: 1) {
        collection {
          name
          symbol
          totalVolume
        }
      }
    }
    tokenCount
  }
}

    """
    
    url = "https://gateway-arbitrum.network.thegraph.com/api/0ab7a83b03a36ac8a536cd8fa19a8ad4/subgraphs/id/CBf1FtUKFnipwKVm36mHyeMtkuhjmh4KHzY3uWNNq5ow"
    response = requests.post(url, json={'query': query})
    data = response.json()
    
    return render_template('index.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
