import React from "react";
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	useQuery,
} from "@apollo/client";
import { gql } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://gateway-arbitrum.network.thegraph.com/api/<API_KEY>/subgraphs/id/CBf1FtUKFnipwKVm36mHyeMtkuhjmh4KHzY3uWNNq5ow",

	cache: new InMemoryCache(),
});

const QUERY = gql`
	query MyQuery {
		collections(first: 10, where: { totalSupply_gt: "500" }) {
			id
			name
			symbol
			totalSupply
		}
	}
`;

function MyComponent() {
	const { data, error, loading } = useQuery(QUERY);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {JSON.stringify(error)}</p>;

	console.log(JSON.stringify(data, null, 2));
	return (
		<div>
			<p>Data fetched successfully</p>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
}

function App() {
	return (
		<ApolloProvider client={client}>
			<MyComponent />
		</ApolloProvider>
	);
}

export default App;
