# Subgraph Query Workshop 2023

## [Workshop Slides](https://docs.google.com/presentation/d/1U64NOtOCXJEi9J3jmM0DhpuozgZg-eXoGE8KCZ2cczQ/edit?usp=sharing)

[![slide1](./Slide1.png)](https://docs.google.com/presentation/d/1U64NOtOCXJEi9J3jmM0DhpuozgZg-eXoGE8KCZ2cczQ/edit?usp=sharing)

## Steps to send queries

1. Create an API key in [Subgraph Studio](https://www.thegraph.com/studio)
2. Search `<API_KEY>` in this repo and replace all `<API_KEY>`'s' with your new API Key
3. Send your demo queries!

---

## Subgraph Being Queried

[![tracker](./Tracker.png)](https://thegraph.com/explorer/subgraphs/CBf1FtUKFnipwKVm36mHyeMtkuhjmh4KHzY3uWNNq5ow?view=Overview&chain=arbitrum-one)

## Subgraph's Endpoint

`https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/CBf1FtUKFnipwKVm36mHyeMtkuhjmh4KHzY3uWNNq5ow`

## Demo Query

The demo query retrieves the top 10 accounts where the total supply is greater than 500.

```graphql
{
	collections(first: 10, where: { totalSupply_gt: "500" }) {
		id
		name
		symbol
		totalSupply
	}
}
```

## Send Query using Vanilla JS

1. `cd vanilla-js-query`
2. `open javascriptQuery.html`

## Send Query Using Python

1. `cd flask-query`
2. `pip install Flask requests`
3. `python app.py`
4. Open the development server that appears in the terminal to see the query response: (http://127.0.0.1:5000)

## Send Query Using `graph-client`

-   See this excellent [walkthrough video](https://www.youtube.com/watch?v=ZsRAmyUtvwg) for an overview of [graph-client](https://github.com/graphprotocol/graph-client)

1. `cd graph-client-query`
2. `npm install`
3. `npm run start` to send our test query and see responses in the terminal.
4. To send test queries through our browser, run `npm run dev` to set up GraphQL explorer.
5. To integrate graph-client into our dapp, run `npm run codegen` to build an a new SDK.

## Send Query Using React Apollo

1. `cd react-apollo-query`
2. `npm install`
3. `npm run start` to send test query and see responses at http://localhost:3000

## More Querying Options

### Playgrounds for Subgraph Data Analytics

[![playgrounds](./Playgrounds.png)](https://playgrounds.network/)

### DappLooker for No-Code Dashboards

[![dapplooker](./DappLooker.png)](https://dapplooker.com/home)
