async function getPriceFeeds() {
    let results = await fetch('https://gateway.thegraph.com/api/API_KEY_HERE/subgraphs/id/5FtLxrTD7T2pwxUMeR94pGmJGT2evpE9UiweHpMcioNW', {
      method: 'POST',
  
      headers: {
        "Content-Type": "application/json"
      },
  
      body: JSON.stringify({
        query: `{
            priceFeeds(first: 5) {
              id
              priceFeedProxy
              tokenAddress
              tokenSymbol
            }
          }`
      })
    })
    let priceFeeds = await results.json();
    console.log(priceFeeds.data)
  }
  
  getPriceFeeds()