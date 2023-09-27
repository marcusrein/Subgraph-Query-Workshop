import { getBuiltGraphSDK } from "./.graphclient";

const { GetAccountCollections } = getBuiltGraphSDK();

async function main(): Promise<void> {
	try {
		const response = await GetAccountCollections();
		console.log(response.collections);
	} catch (error) {
		console.error(error);
	}
}

main().catch((err) => {
	console.error({ err });
	process.exit(1);
});
