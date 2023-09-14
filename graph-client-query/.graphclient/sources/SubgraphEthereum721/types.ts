// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace SubgraphEthereum721Types {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  contract?: Maybe<contract>;
  contracts: Array<contract>;
  account?: Maybe<account>;
  accounts: Array<account>;
  collection?: Maybe<collection>;
  collections: Array<collection>;
  token?: Maybe<token>;
  tokens: Array<token>;
  accountCollection?: Maybe<accountCollection>;
  accountCollections: Array<accountCollection>;
  transaction?: Maybe<transaction>;
  transactions: Array<transaction>;
  transfer?: Maybe<transfer>;
  transfers: Array<transfer>;
  sale?: Maybe<sale>;
  sales: Array<sale>;
  currency?: Maybe<currency>;
  currencies: Array<currency>;
  hourlyCollectionSnapshot?: Maybe<hourlyCollectionSnapshot>;
  hourlyCollectionSnapshots: Array<hourlyCollectionSnapshot>;
  dailyCollectionSnapshot?: Maybe<dailyCollectionSnapshot>;
  dailyCollectionSnapshots: Array<dailyCollectionSnapshot>;
  weeklyCollectionSnapshot?: Maybe<weeklyCollectionSnapshot>;
  weeklyCollectionSnapshots: Array<weeklyCollectionSnapshot>;
  wethTransaction?: Maybe<wethTransaction>;
  wethTransactions: Array<wethTransaction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerycontractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<contract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<contract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollectionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<collection_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<collection_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountCollectionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountCollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<accountCollection_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<accountCollection_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysaleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysalesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<sale_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<sale_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycurrencyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycurrenciesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<currency_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<currency_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhourlyCollectionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhourlyCollectionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<hourlyCollectionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<hourlyCollectionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydailyCollectionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydailyCollectionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<dailyCollectionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<dailyCollectionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryweeklyCollectionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryweeklyCollectionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<weeklyCollectionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<weeklyCollectionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywethTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywethTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<wethTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<wethTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  contract?: Maybe<contract>;
  contracts: Array<contract>;
  account?: Maybe<account>;
  accounts: Array<account>;
  collection?: Maybe<collection>;
  collections: Array<collection>;
  token?: Maybe<token>;
  tokens: Array<token>;
  accountCollection?: Maybe<accountCollection>;
  accountCollections: Array<accountCollection>;
  transaction?: Maybe<transaction>;
  transactions: Array<transaction>;
  transfer?: Maybe<transfer>;
  transfers: Array<transfer>;
  sale?: Maybe<sale>;
  sales: Array<sale>;
  currency?: Maybe<currency>;
  currencies: Array<currency>;
  hourlyCollectionSnapshot?: Maybe<hourlyCollectionSnapshot>;
  hourlyCollectionSnapshots: Array<hourlyCollectionSnapshot>;
  dailyCollectionSnapshot?: Maybe<dailyCollectionSnapshot>;
  dailyCollectionSnapshots: Array<dailyCollectionSnapshot>;
  weeklyCollectionSnapshot?: Maybe<weeklyCollectionSnapshot>;
  weeklyCollectionSnapshots: Array<weeklyCollectionSnapshot>;
  wethTransaction?: Maybe<wethTransaction>;
  wethTransactions: Array<wethTransaction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptioncontractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<contract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<contract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollectionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<collection_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<collection_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountCollectionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountCollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<accountCollection_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<accountCollection_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsaleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsalesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<sale_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<sale_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncurrencyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncurrenciesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<currency_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<currency_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhourlyCollectionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhourlyCollectionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<hourlyCollectionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<hourlyCollectionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondailyCollectionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondailyCollectionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<dailyCollectionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<dailyCollectionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionweeklyCollectionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionweeklyCollectionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<weeklyCollectionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<weeklyCollectionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwethTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwethTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<wethTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<wethTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type account = {
  /**  the wallet address  */
  id: Scalars['ID'];
  /**  The NFTs owned by this account  */
  tokens: Array<token>;
  /**  The transfers originating from this account  */
  transfersFrom: Array<transfer>;
  /**  The transfers recevied by this account */
  transfersTo: Array<transfer>;
  /**  M:M relationship for Accounts and Collections  */
  accountCollection: Array<accountCollection>;
};


export type accounttokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<token_filter>;
};


export type accounttransfersFromArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<transfer_filter>;
};


export type accounttransfersToArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<transfer_filter>;
};


export type accountaccountCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<accountCollection_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<accountCollection_filter>;
};

export type accountCollection = {
  /**  Account Id - Collection Id  */
  id: Scalars['ID'];
  /**  Address of the account  */
  account?: Maybe<account>;
  /**  Address of the NFT Collection  */
  collection?: Maybe<collection>;
  /**  Count of NFT's owned in a collection by the Address */
  tokenCount: Scalars['Int'];
};

export type accountCollection_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<account_filter>;
  collection?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_?: InputMaybe<collection_filter>;
  tokenCount?: InputMaybe<Scalars['Int']>;
  tokenCount_not?: InputMaybe<Scalars['Int']>;
  tokenCount_gt?: InputMaybe<Scalars['Int']>;
  tokenCount_lt?: InputMaybe<Scalars['Int']>;
  tokenCount_gte?: InputMaybe<Scalars['Int']>;
  tokenCount_lte?: InputMaybe<Scalars['Int']>;
  tokenCount_in?: InputMaybe<Array<Scalars['Int']>>;
  tokenCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<accountCollection_filter>>>;
  or?: InputMaybe<Array<InputMaybe<accountCollection_filter>>>;
};

export type accountCollection_orderBy =
  | 'id'
  | 'account'
  | 'account__id'
  | 'collection'
  | 'collection__id'
  | 'collection__name'
  | 'collection__symbol'
  | 'collection__totalSupply'
  | 'collection__mintPrice'
  | 'collection__supportsMetadata'
  | 'collection__totalSales'
  | 'collection__totalVolume'
  | 'collection__topSale'
  | 'tokenCount';

export type account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokens_?: InputMaybe<token_filter>;
  transfersFrom_?: InputMaybe<transfer_filter>;
  transfersTo_?: InputMaybe<transfer_filter>;
  accountCollection_?: InputMaybe<accountCollection_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<account_filter>>>;
  or?: InputMaybe<Array<InputMaybe<account_filter>>>;
};

export type account_orderBy =
  | 'id'
  | 'tokens'
  | 'transfersFrom'
  | 'transfersTo'
  | 'accountCollection';

/** replaces TokenRegistry */
export type collection = {
  /**  The address of the collection  */
  id: Scalars['ID'];
  /**  The name of the collection  */
  name?: Maybe<Scalars['String']>;
  /**  The symbol for the collection  */
  symbol?: Maybe<Scalars['String']>;
  /**  Total Supply of Tokens  */
  totalSupply?: Maybe<Scalars['BigInt']>;
  /**  Mint Price  */
  mintPrice?: Maybe<Scalars['BigDecimal']>;
  /**  Tokens for the collection */
  tokens: Array<token>;
  /**  Collection supports metadata  */
  supportsMetadata?: Maybe<Scalars['Boolean']>;
  /**  Total sales  */
  totalSales: Scalars['Int'];
  /**  Total volume  */
  totalVolume: Scalars['BigDecimal'];
  /**  Top Sale ever  */
  topSale: Scalars['BigDecimal'];
  /**  Hourly info about the collection  */
  hourlyCollectionSnapshot: Array<hourlyCollectionSnapshot>;
  /**  Daily info about the collection  */
  dailyCollectionSnapshot: Array<dailyCollectionSnapshot>;
  /**  Weekly info about the collection  */
  weeklyCollectionSnapshot: Array<weeklyCollectionSnapshot>;
  /**  M:M relationship for Accounts and Collections  */
  accountCollection: Array<accountCollection>;
};


/** replaces TokenRegistry */
export type collectiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<token_filter>;
};


/** replaces TokenRegistry */
export type collectionhourlyCollectionSnapshotArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<hourlyCollectionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<hourlyCollectionSnapshot_filter>;
};


/** replaces TokenRegistry */
export type collectiondailyCollectionSnapshotArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<dailyCollectionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<dailyCollectionSnapshot_filter>;
};


/** replaces TokenRegistry */
export type collectionweeklyCollectionSnapshotArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<weeklyCollectionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<weeklyCollectionSnapshot_filter>;
};


/** replaces TokenRegistry */
export type collectionaccountCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<accountCollection_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<accountCollection_filter>;
};

export type collection_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mintPrice?: InputMaybe<Scalars['BigDecimal']>;
  mintPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  mintPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  mintPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  mintPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  mintPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  mintPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  mintPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokens_?: InputMaybe<token_filter>;
  supportsMetadata?: InputMaybe<Scalars['Boolean']>;
  supportsMetadata_not?: InputMaybe<Scalars['Boolean']>;
  supportsMetadata_in?: InputMaybe<Array<Scalars['Boolean']>>;
  supportsMetadata_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  totalSales?: InputMaybe<Scalars['Int']>;
  totalSales_not?: InputMaybe<Scalars['Int']>;
  totalSales_gt?: InputMaybe<Scalars['Int']>;
  totalSales_lt?: InputMaybe<Scalars['Int']>;
  totalSales_gte?: InputMaybe<Scalars['Int']>;
  totalSales_lte?: InputMaybe<Scalars['Int']>;
  totalSales_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSales_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  topSale?: InputMaybe<Scalars['BigDecimal']>;
  topSale_not?: InputMaybe<Scalars['BigDecimal']>;
  topSale_gt?: InputMaybe<Scalars['BigDecimal']>;
  topSale_lt?: InputMaybe<Scalars['BigDecimal']>;
  topSale_gte?: InputMaybe<Scalars['BigDecimal']>;
  topSale_lte?: InputMaybe<Scalars['BigDecimal']>;
  topSale_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  topSale_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyCollectionSnapshot_?: InputMaybe<hourlyCollectionSnapshot_filter>;
  dailyCollectionSnapshot_?: InputMaybe<dailyCollectionSnapshot_filter>;
  weeklyCollectionSnapshot_?: InputMaybe<weeklyCollectionSnapshot_filter>;
  accountCollection_?: InputMaybe<accountCollection_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<collection_filter>>>;
  or?: InputMaybe<Array<InputMaybe<collection_filter>>>;
};

export type collection_orderBy =
  | 'id'
  | 'name'
  | 'symbol'
  | 'totalSupply'
  | 'mintPrice'
  | 'tokens'
  | 'supportsMetadata'
  | 'totalSales'
  | 'totalVolume'
  | 'topSale'
  | 'hourlyCollectionSnapshot'
  | 'dailyCollectionSnapshot'
  | 'weeklyCollectionSnapshot'
  | 'accountCollection';

export type contract = {
  id: Scalars['ID'];
  asERC721?: Maybe<collection>;
};

export type contract_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  asERC721?: InputMaybe<Scalars['String']>;
  asERC721_not?: InputMaybe<Scalars['String']>;
  asERC721_gt?: InputMaybe<Scalars['String']>;
  asERC721_lt?: InputMaybe<Scalars['String']>;
  asERC721_gte?: InputMaybe<Scalars['String']>;
  asERC721_lte?: InputMaybe<Scalars['String']>;
  asERC721_in?: InputMaybe<Array<Scalars['String']>>;
  asERC721_not_in?: InputMaybe<Array<Scalars['String']>>;
  asERC721_contains?: InputMaybe<Scalars['String']>;
  asERC721_contains_nocase?: InputMaybe<Scalars['String']>;
  asERC721_not_contains?: InputMaybe<Scalars['String']>;
  asERC721_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asERC721_starts_with?: InputMaybe<Scalars['String']>;
  asERC721_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asERC721_not_starts_with?: InputMaybe<Scalars['String']>;
  asERC721_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asERC721_ends_with?: InputMaybe<Scalars['String']>;
  asERC721_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asERC721_not_ends_with?: InputMaybe<Scalars['String']>;
  asERC721_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asERC721_?: InputMaybe<collection_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<contract_filter>>>;
  or?: InputMaybe<Array<InputMaybe<contract_filter>>>;
};

export type contract_orderBy =
  | 'id'
  | 'asERC721'
  | 'asERC721__id'
  | 'asERC721__name'
  | 'asERC721__symbol'
  | 'asERC721__totalSupply'
  | 'asERC721__mintPrice'
  | 'asERC721__supportsMetadata'
  | 'asERC721__totalSales'
  | 'asERC721__totalVolume'
  | 'asERC721__topSale';

export type currency = {
  /**  Currency Address  */
  id: Scalars['ID'];
  decimals?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type currency_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  decimals?: InputMaybe<Scalars['Int']>;
  decimals_not?: InputMaybe<Scalars['Int']>;
  decimals_gt?: InputMaybe<Scalars['Int']>;
  decimals_lt?: InputMaybe<Scalars['Int']>;
  decimals_gte?: InputMaybe<Scalars['Int']>;
  decimals_lte?: InputMaybe<Scalars['Int']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<currency_filter>>>;
  or?: InputMaybe<Array<InputMaybe<currency_filter>>>;
};

export type currency_orderBy =
  | 'id'
  | 'decimals'
  | 'name'
  | 'symbol';

export type dailyCollectionSnapshot = {
  /**  The collection address - The day  */
  id: Scalars['ID'];
  /**  Unix Day (Timestamp / 86400 * 86400)  */
  timestamp?: Maybe<Scalars['Int']>;
  /**  The collection address  */
  collection: collection;
  /**  The daily volume  */
  dailyVolume: Scalars['BigDecimal'];
  /**  Number of daily transactions  */
  dailyTransactions?: Maybe<Scalars['Int']>;
  /**  Average sale amount for the day  */
  dailyAvgSale: Scalars['BigDecimal'];
  /**  Daily top sales  */
  topSale: Scalars['BigDecimal'];
  /**  Daily bottom sales  */
  bottomSale: Scalars['BigDecimal'];
};

export type dailyCollectionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  collection?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_?: InputMaybe<collection_filter>;
  dailyVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTransactions?: InputMaybe<Scalars['Int']>;
  dailyTransactions_not?: InputMaybe<Scalars['Int']>;
  dailyTransactions_gt?: InputMaybe<Scalars['Int']>;
  dailyTransactions_lt?: InputMaybe<Scalars['Int']>;
  dailyTransactions_gte?: InputMaybe<Scalars['Int']>;
  dailyTransactions_lte?: InputMaybe<Scalars['Int']>;
  dailyTransactions_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyTransactions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyAvgSale?: InputMaybe<Scalars['BigDecimal']>;
  dailyAvgSale_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyAvgSale_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyAvgSale_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyAvgSale_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyAvgSale_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyAvgSale_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyAvgSale_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  topSale?: InputMaybe<Scalars['BigDecimal']>;
  topSale_not?: InputMaybe<Scalars['BigDecimal']>;
  topSale_gt?: InputMaybe<Scalars['BigDecimal']>;
  topSale_lt?: InputMaybe<Scalars['BigDecimal']>;
  topSale_gte?: InputMaybe<Scalars['BigDecimal']>;
  topSale_lte?: InputMaybe<Scalars['BigDecimal']>;
  topSale_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  topSale_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  bottomSale?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_not?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_gt?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_lt?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_gte?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_lte?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  bottomSale_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<dailyCollectionSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<dailyCollectionSnapshot_filter>>>;
};

export type dailyCollectionSnapshot_orderBy =
  | 'id'
  | 'timestamp'
  | 'collection'
  | 'collection__id'
  | 'collection__name'
  | 'collection__symbol'
  | 'collection__totalSupply'
  | 'collection__mintPrice'
  | 'collection__supportsMetadata'
  | 'collection__totalSales'
  | 'collection__totalVolume'
  | 'collection__topSale'
  | 'dailyVolume'
  | 'dailyTransactions'
  | 'dailyAvgSale'
  | 'topSale'
  | 'bottomSale';

export type hourlyCollectionSnapshot = {
  /**  The collection address - The hour  */
  id: Scalars['ID'];
  /**  Unix Hour (Timestamp / 3600 * 3600)  */
  timestamp?: Maybe<Scalars['Int']>;
  /**  The collection address  */
  collection: collection;
  /**  The hourly volume  */
  hourlyVolume: Scalars['BigDecimal'];
  /**  Number of hourly transactions  */
  hourlyTransactions?: Maybe<Scalars['Int']>;
  /**  Average sale amount for the day  */
  hourlyAvgSale: Scalars['BigDecimal'];
  /**  Hourly top sales  */
  topSale: Scalars['BigDecimal'];
  /**  Hourly bottom sales  */
  bottomSale: Scalars['BigDecimal'];
};

export type hourlyCollectionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  collection?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_?: InputMaybe<collection_filter>;
  hourlyVolume?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyTransactions?: InputMaybe<Scalars['Int']>;
  hourlyTransactions_not?: InputMaybe<Scalars['Int']>;
  hourlyTransactions_gt?: InputMaybe<Scalars['Int']>;
  hourlyTransactions_lt?: InputMaybe<Scalars['Int']>;
  hourlyTransactions_gte?: InputMaybe<Scalars['Int']>;
  hourlyTransactions_lte?: InputMaybe<Scalars['Int']>;
  hourlyTransactions_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyTransactions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyAvgSale?: InputMaybe<Scalars['BigDecimal']>;
  hourlyAvgSale_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyAvgSale_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyAvgSale_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyAvgSale_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyAvgSale_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyAvgSale_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyAvgSale_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  topSale?: InputMaybe<Scalars['BigDecimal']>;
  topSale_not?: InputMaybe<Scalars['BigDecimal']>;
  topSale_gt?: InputMaybe<Scalars['BigDecimal']>;
  topSale_lt?: InputMaybe<Scalars['BigDecimal']>;
  topSale_gte?: InputMaybe<Scalars['BigDecimal']>;
  topSale_lte?: InputMaybe<Scalars['BigDecimal']>;
  topSale_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  topSale_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  bottomSale?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_not?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_gt?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_lt?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_gte?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_lte?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  bottomSale_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<hourlyCollectionSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<hourlyCollectionSnapshot_filter>>>;
};

export type hourlyCollectionSnapshot_orderBy =
  | 'id'
  | 'timestamp'
  | 'collection'
  | 'collection__id'
  | 'collection__name'
  | 'collection__symbol'
  | 'collection__totalSupply'
  | 'collection__mintPrice'
  | 'collection__supportsMetadata'
  | 'collection__totalSales'
  | 'collection__totalVolume'
  | 'collection__topSale'
  | 'hourlyVolume'
  | 'hourlyTransactions'
  | 'hourlyAvgSale'
  | 'topSale'
  | 'bottomSale';

export type sale = {
  /**  Block Number and Event Id in which the sale event occured */
  id: Scalars['ID'];
  /**  tx that the sale occured in  */
  transaction: transaction;
  /**  the currency that the sale occred in  */
  currency?: Maybe<currency>;
  /**  Timestamp for block  */
  timestamp: Scalars['Int'];
  /**  Block Number  */
  blockNumber: Scalars['Int'];
  /**  the amount of the sale  */
  amount: Scalars['BigDecimal'];
  /**  The marketplace  */
  platform?: Maybe<Scalars['String']>;
};

export type sale_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<transaction_filter>;
  currency?: InputMaybe<Scalars['String']>;
  currency_not?: InputMaybe<Scalars['String']>;
  currency_gt?: InputMaybe<Scalars['String']>;
  currency_lt?: InputMaybe<Scalars['String']>;
  currency_gte?: InputMaybe<Scalars['String']>;
  currency_lte?: InputMaybe<Scalars['String']>;
  currency_in?: InputMaybe<Array<Scalars['String']>>;
  currency_not_in?: InputMaybe<Array<Scalars['String']>>;
  currency_contains?: InputMaybe<Scalars['String']>;
  currency_contains_nocase?: InputMaybe<Scalars['String']>;
  currency_not_contains?: InputMaybe<Scalars['String']>;
  currency_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currency_starts_with?: InputMaybe<Scalars['String']>;
  currency_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currency_not_starts_with?: InputMaybe<Scalars['String']>;
  currency_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currency_ends_with?: InputMaybe<Scalars['String']>;
  currency_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currency_not_ends_with?: InputMaybe<Scalars['String']>;
  currency_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currency_?: InputMaybe<currency_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  platform?: InputMaybe<Scalars['String']>;
  platform_not?: InputMaybe<Scalars['String']>;
  platform_gt?: InputMaybe<Scalars['String']>;
  platform_lt?: InputMaybe<Scalars['String']>;
  platform_gte?: InputMaybe<Scalars['String']>;
  platform_lte?: InputMaybe<Scalars['String']>;
  platform_in?: InputMaybe<Array<Scalars['String']>>;
  platform_not_in?: InputMaybe<Array<Scalars['String']>>;
  platform_contains?: InputMaybe<Scalars['String']>;
  platform_contains_nocase?: InputMaybe<Scalars['String']>;
  platform_not_contains?: InputMaybe<Scalars['String']>;
  platform_not_contains_nocase?: InputMaybe<Scalars['String']>;
  platform_starts_with?: InputMaybe<Scalars['String']>;
  platform_starts_with_nocase?: InputMaybe<Scalars['String']>;
  platform_not_starts_with?: InputMaybe<Scalars['String']>;
  platform_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  platform_ends_with?: InputMaybe<Scalars['String']>;
  platform_ends_with_nocase?: InputMaybe<Scalars['String']>;
  platform_not_ends_with?: InputMaybe<Scalars['String']>;
  platform_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<sale_filter>>>;
  or?: InputMaybe<Array<InputMaybe<sale_filter>>>;
};

export type sale_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__blockNumber'
  | 'transaction__transactionFrom'
  | 'transaction__unmatchedTransferCount'
  | 'transaction__gasPrice'
  | 'currency'
  | 'currency__id'
  | 'currency__decimals'
  | 'currency__name'
  | 'currency__symbol'
  | 'timestamp'
  | 'blockNumber'
  | 'amount'
  | 'platform';

export type token = {
  /**  Ethereum / Collection Addrress - Token Id  */
  id: Scalars['ID'];
  /**  The collection address  */
  collection: collection;
  /**  The id of the NFT */
  identifier: Scalars['BigInt'];
  /**  The address the currently owns the token  */
  owner?: Maybe<account>;
  /**  Transfers involving this token  */
  transfers: Array<transfer>;
};


export type tokentransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<transfer_filter>;
};

export type token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  collection?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_?: InputMaybe<collection_filter>;
  identifier?: InputMaybe<Scalars['BigInt']>;
  identifier_not?: InputMaybe<Scalars['BigInt']>;
  identifier_gt?: InputMaybe<Scalars['BigInt']>;
  identifier_lt?: InputMaybe<Scalars['BigInt']>;
  identifier_gte?: InputMaybe<Scalars['BigInt']>;
  identifier_lte?: InputMaybe<Scalars['BigInt']>;
  identifier_in?: InputMaybe<Array<Scalars['BigInt']>>;
  identifier_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<account_filter>;
  transfers_?: InputMaybe<transfer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<token_filter>>>;
};

export type token_orderBy =
  | 'id'
  | 'collection'
  | 'collection__id'
  | 'collection__name'
  | 'collection__symbol'
  | 'collection__totalSupply'
  | 'collection__mintPrice'
  | 'collection__supportsMetadata'
  | 'collection__totalSales'
  | 'collection__totalVolume'
  | 'collection__topSale'
  | 'identifier'
  | 'owner'
  | 'owner__id'
  | 'transfers';

export type transaction = {
  /**  the hash of the tx */
  id: Scalars['ID'];
  /**  Timestamp for block  */
  timestamp: Scalars['Int'];
  /**  Block Number  */
  blockNumber: Scalars['Int'];
  /**  Address who initiated the transaction  */
  transactionFrom: Scalars['Bytes'];
  /**  Count of how many transfers were not matched to a sale  */
  unmatchedTransferCount: Scalars['Int'];
  /**  Transfers that occured within the transaction  */
  transfers: Array<transfer>;
  /**  Sale events that occured within the transaction  */
  sales?: Maybe<Array<sale>>;
  /**  Gas Spent  */
  gasPrice?: Maybe<Scalars['BigInt']>;
};


export type transactiontransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<transfer_filter>;
};


export type transactionsalesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<sale_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<sale_filter>;
};

export type transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionFrom?: InputMaybe<Scalars['Bytes']>;
  transactionFrom_not?: InputMaybe<Scalars['Bytes']>;
  transactionFrom_gt?: InputMaybe<Scalars['Bytes']>;
  transactionFrom_lt?: InputMaybe<Scalars['Bytes']>;
  transactionFrom_gte?: InputMaybe<Scalars['Bytes']>;
  transactionFrom_lte?: InputMaybe<Scalars['Bytes']>;
  transactionFrom_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionFrom_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionFrom_contains?: InputMaybe<Scalars['Bytes']>;
  transactionFrom_not_contains?: InputMaybe<Scalars['Bytes']>;
  unmatchedTransferCount?: InputMaybe<Scalars['Int']>;
  unmatchedTransferCount_not?: InputMaybe<Scalars['Int']>;
  unmatchedTransferCount_gt?: InputMaybe<Scalars['Int']>;
  unmatchedTransferCount_lt?: InputMaybe<Scalars['Int']>;
  unmatchedTransferCount_gte?: InputMaybe<Scalars['Int']>;
  unmatchedTransferCount_lte?: InputMaybe<Scalars['Int']>;
  unmatchedTransferCount_in?: InputMaybe<Array<Scalars['Int']>>;
  unmatchedTransferCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transfers?: InputMaybe<Array<Scalars['String']>>;
  transfers_not?: InputMaybe<Array<Scalars['String']>>;
  transfers_contains?: InputMaybe<Array<Scalars['String']>>;
  transfers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  transfers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  transfers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  transfers_?: InputMaybe<transfer_filter>;
  sales_?: InputMaybe<sale_filter>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<transaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<transaction_filter>>>;
};

export type transaction_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'transactionFrom'
  | 'unmatchedTransferCount'
  | 'transfers'
  | 'sales'
  | 'gasPrice';

export type transfer = {
  /**  Block Number and Event Id in which the transfers event occured */
  id: Scalars['ID'];
  /**  Transaction hash in which the transfer event occured */
  transaction: transaction;
  /**  The collection address  */
  collection: collection;
  /**  The collection addrress - The token id  */
  token: token;
  /**  The sender address  */
  senderAddress?: Maybe<account>;
  /**  The receiver address  */
  receiverAddress?: Maybe<account>;
  /**  Timestamp for block  */
  timestamp: Scalars['Int'];
  /**  Block Number  */
  blockNumber: Scalars['Int'];
  /**  The amount of ETH paid */
  amount: Scalars['BigDecimal'];
  /**  matched sale event for the transfer  */
  matchedSale?: Maybe<sale>;
};

export type transfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<transaction_filter>;
  collection?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_?: InputMaybe<collection_filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<token_filter>;
  senderAddress?: InputMaybe<Scalars['String']>;
  senderAddress_not?: InputMaybe<Scalars['String']>;
  senderAddress_gt?: InputMaybe<Scalars['String']>;
  senderAddress_lt?: InputMaybe<Scalars['String']>;
  senderAddress_gte?: InputMaybe<Scalars['String']>;
  senderAddress_lte?: InputMaybe<Scalars['String']>;
  senderAddress_in?: InputMaybe<Array<Scalars['String']>>;
  senderAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  senderAddress_contains?: InputMaybe<Scalars['String']>;
  senderAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  senderAddress_not_contains?: InputMaybe<Scalars['String']>;
  senderAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  senderAddress_starts_with?: InputMaybe<Scalars['String']>;
  senderAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  senderAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  senderAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  senderAddress_ends_with?: InputMaybe<Scalars['String']>;
  senderAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  senderAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  senderAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  senderAddress_?: InputMaybe<account_filter>;
  receiverAddress?: InputMaybe<Scalars['String']>;
  receiverAddress_not?: InputMaybe<Scalars['String']>;
  receiverAddress_gt?: InputMaybe<Scalars['String']>;
  receiverAddress_lt?: InputMaybe<Scalars['String']>;
  receiverAddress_gte?: InputMaybe<Scalars['String']>;
  receiverAddress_lte?: InputMaybe<Scalars['String']>;
  receiverAddress_in?: InputMaybe<Array<Scalars['String']>>;
  receiverAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  receiverAddress_contains?: InputMaybe<Scalars['String']>;
  receiverAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  receiverAddress_not_contains?: InputMaybe<Scalars['String']>;
  receiverAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receiverAddress_starts_with?: InputMaybe<Scalars['String']>;
  receiverAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiverAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  receiverAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiverAddress_ends_with?: InputMaybe<Scalars['String']>;
  receiverAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiverAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  receiverAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiverAddress_?: InputMaybe<account_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  matchedSale?: InputMaybe<Scalars['String']>;
  matchedSale_not?: InputMaybe<Scalars['String']>;
  matchedSale_gt?: InputMaybe<Scalars['String']>;
  matchedSale_lt?: InputMaybe<Scalars['String']>;
  matchedSale_gte?: InputMaybe<Scalars['String']>;
  matchedSale_lte?: InputMaybe<Scalars['String']>;
  matchedSale_in?: InputMaybe<Array<Scalars['String']>>;
  matchedSale_not_in?: InputMaybe<Array<Scalars['String']>>;
  matchedSale_contains?: InputMaybe<Scalars['String']>;
  matchedSale_contains_nocase?: InputMaybe<Scalars['String']>;
  matchedSale_not_contains?: InputMaybe<Scalars['String']>;
  matchedSale_not_contains_nocase?: InputMaybe<Scalars['String']>;
  matchedSale_starts_with?: InputMaybe<Scalars['String']>;
  matchedSale_starts_with_nocase?: InputMaybe<Scalars['String']>;
  matchedSale_not_starts_with?: InputMaybe<Scalars['String']>;
  matchedSale_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  matchedSale_ends_with?: InputMaybe<Scalars['String']>;
  matchedSale_ends_with_nocase?: InputMaybe<Scalars['String']>;
  matchedSale_not_ends_with?: InputMaybe<Scalars['String']>;
  matchedSale_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  matchedSale_?: InputMaybe<sale_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<transfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<transfer_filter>>>;
};

export type transfer_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__blockNumber'
  | 'transaction__transactionFrom'
  | 'transaction__unmatchedTransferCount'
  | 'transaction__gasPrice'
  | 'collection'
  | 'collection__id'
  | 'collection__name'
  | 'collection__symbol'
  | 'collection__totalSupply'
  | 'collection__mintPrice'
  | 'collection__supportsMetadata'
  | 'collection__totalSales'
  | 'collection__totalVolume'
  | 'collection__topSale'
  | 'token'
  | 'token__id'
  | 'token__identifier'
  | 'senderAddress'
  | 'senderAddress__id'
  | 'receiverAddress'
  | 'receiverAddress__id'
  | 'timestamp'
  | 'blockNumber'
  | 'amount'
  | 'matchedSale'
  | 'matchedSale__id'
  | 'matchedSale__timestamp'
  | 'matchedSale__blockNumber'
  | 'matchedSale__amount'
  | 'matchedSale__platform';

export type weeklyCollectionSnapshot = {
  /**  The collection address - The week  */
  id: Scalars['ID'];
  /**  Unix Week (Timestamp / 604800 * 604800)  */
  timestamp?: Maybe<Scalars['Int']>;
  /**  The collection address  */
  collection: collection;
  /**  The monthly volume  */
  weeklyVolume: Scalars['BigDecimal'];
  /**  Number of monthly transactions  */
  weeklyTransactions?: Maybe<Scalars['Int']>;
  /**  Average sale amount for the day  */
  weeklyAvgSale: Scalars['BigDecimal'];
  /**  Weekly top sales  */
  topSale: Scalars['BigDecimal'];
  /**  Weekly bottom sales  */
  bottomSale: Scalars['BigDecimal'];
};

export type weeklyCollectionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  collection?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_?: InputMaybe<collection_filter>;
  weeklyVolume?: InputMaybe<Scalars['BigDecimal']>;
  weeklyVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  weeklyVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  weeklyVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  weeklyVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  weeklyVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  weeklyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  weeklyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  weeklyTransactions?: InputMaybe<Scalars['Int']>;
  weeklyTransactions_not?: InputMaybe<Scalars['Int']>;
  weeklyTransactions_gt?: InputMaybe<Scalars['Int']>;
  weeklyTransactions_lt?: InputMaybe<Scalars['Int']>;
  weeklyTransactions_gte?: InputMaybe<Scalars['Int']>;
  weeklyTransactions_lte?: InputMaybe<Scalars['Int']>;
  weeklyTransactions_in?: InputMaybe<Array<Scalars['Int']>>;
  weeklyTransactions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  weeklyAvgSale?: InputMaybe<Scalars['BigDecimal']>;
  weeklyAvgSale_not?: InputMaybe<Scalars['BigDecimal']>;
  weeklyAvgSale_gt?: InputMaybe<Scalars['BigDecimal']>;
  weeklyAvgSale_lt?: InputMaybe<Scalars['BigDecimal']>;
  weeklyAvgSale_gte?: InputMaybe<Scalars['BigDecimal']>;
  weeklyAvgSale_lte?: InputMaybe<Scalars['BigDecimal']>;
  weeklyAvgSale_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  weeklyAvgSale_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  topSale?: InputMaybe<Scalars['BigDecimal']>;
  topSale_not?: InputMaybe<Scalars['BigDecimal']>;
  topSale_gt?: InputMaybe<Scalars['BigDecimal']>;
  topSale_lt?: InputMaybe<Scalars['BigDecimal']>;
  topSale_gte?: InputMaybe<Scalars['BigDecimal']>;
  topSale_lte?: InputMaybe<Scalars['BigDecimal']>;
  topSale_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  topSale_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  bottomSale?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_not?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_gt?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_lt?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_gte?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_lte?: InputMaybe<Scalars['BigDecimal']>;
  bottomSale_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  bottomSale_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<weeklyCollectionSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<weeklyCollectionSnapshot_filter>>>;
};

export type weeklyCollectionSnapshot_orderBy =
  | 'id'
  | 'timestamp'
  | 'collection'
  | 'collection__id'
  | 'collection__name'
  | 'collection__symbol'
  | 'collection__totalSupply'
  | 'collection__mintPrice'
  | 'collection__supportsMetadata'
  | 'collection__totalSales'
  | 'collection__totalVolume'
  | 'collection__topSale'
  | 'weeklyVolume'
  | 'weeklyTransactions'
  | 'weeklyAvgSale'
  | 'topSale'
  | 'bottomSale';

export type wethTransaction = {
  /**  Hash for weth contained transaction  */
  id: Scalars['ID'];
};

export type wethTransaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<wethTransaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<wethTransaction_filter>>>;
};

export type wethTransaction_orderBy =
  | 'id';

  export type QuerySdk = {
      /** null **/
  contract: InContextSdkMethod<Query['contract'], QuerycontractArgs, MeshContext>,
  /** null **/
  contracts: InContextSdkMethod<Query['contracts'], QuerycontractsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Query['account'], QueryaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Query['accounts'], QueryaccountsArgs, MeshContext>,
  /** null **/
  collection: InContextSdkMethod<Query['collection'], QuerycollectionArgs, MeshContext>,
  /** null **/
  collections: InContextSdkMethod<Query['collections'], QuerycollectionsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  accountCollection: InContextSdkMethod<Query['accountCollection'], QueryaccountCollectionArgs, MeshContext>,
  /** null **/
  accountCollections: InContextSdkMethod<Query['accountCollections'], QueryaccountCollectionsArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<Query['transaction'], QuerytransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<Query['transactions'], QuerytransactionsArgs, MeshContext>,
  /** null **/
  transfer: InContextSdkMethod<Query['transfer'], QuerytransferArgs, MeshContext>,
  /** null **/
  transfers: InContextSdkMethod<Query['transfers'], QuerytransfersArgs, MeshContext>,
  /** null **/
  sale: InContextSdkMethod<Query['sale'], QuerysaleArgs, MeshContext>,
  /** null **/
  sales: InContextSdkMethod<Query['sales'], QuerysalesArgs, MeshContext>,
  /** null **/
  currency: InContextSdkMethod<Query['currency'], QuerycurrencyArgs, MeshContext>,
  /** null **/
  currencies: InContextSdkMethod<Query['currencies'], QuerycurrenciesArgs, MeshContext>,
  /** null **/
  hourlyCollectionSnapshot: InContextSdkMethod<Query['hourlyCollectionSnapshot'], QueryhourlyCollectionSnapshotArgs, MeshContext>,
  /** null **/
  hourlyCollectionSnapshots: InContextSdkMethod<Query['hourlyCollectionSnapshots'], QueryhourlyCollectionSnapshotsArgs, MeshContext>,
  /** null **/
  dailyCollectionSnapshot: InContextSdkMethod<Query['dailyCollectionSnapshot'], QuerydailyCollectionSnapshotArgs, MeshContext>,
  /** null **/
  dailyCollectionSnapshots: InContextSdkMethod<Query['dailyCollectionSnapshots'], QuerydailyCollectionSnapshotsArgs, MeshContext>,
  /** null **/
  weeklyCollectionSnapshot: InContextSdkMethod<Query['weeklyCollectionSnapshot'], QueryweeklyCollectionSnapshotArgs, MeshContext>,
  /** null **/
  weeklyCollectionSnapshots: InContextSdkMethod<Query['weeklyCollectionSnapshots'], QueryweeklyCollectionSnapshotsArgs, MeshContext>,
  /** null **/
  wethTransaction: InContextSdkMethod<Query['wethTransaction'], QuerywethTransactionArgs, MeshContext>,
  /** null **/
  wethTransactions: InContextSdkMethod<Query['wethTransactions'], QuerywethTransactionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  contract: InContextSdkMethod<Subscription['contract'], SubscriptioncontractArgs, MeshContext>,
  /** null **/
  contracts: InContextSdkMethod<Subscription['contracts'], SubscriptioncontractsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Subscription['account'], SubscriptionaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Subscription['accounts'], SubscriptionaccountsArgs, MeshContext>,
  /** null **/
  collection: InContextSdkMethod<Subscription['collection'], SubscriptioncollectionArgs, MeshContext>,
  /** null **/
  collections: InContextSdkMethod<Subscription['collections'], SubscriptioncollectionsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  accountCollection: InContextSdkMethod<Subscription['accountCollection'], SubscriptionaccountCollectionArgs, MeshContext>,
  /** null **/
  accountCollections: InContextSdkMethod<Subscription['accountCollections'], SubscriptionaccountCollectionsArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<Subscription['transaction'], SubscriptiontransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<Subscription['transactions'], SubscriptiontransactionsArgs, MeshContext>,
  /** null **/
  transfer: InContextSdkMethod<Subscription['transfer'], SubscriptiontransferArgs, MeshContext>,
  /** null **/
  transfers: InContextSdkMethod<Subscription['transfers'], SubscriptiontransfersArgs, MeshContext>,
  /** null **/
  sale: InContextSdkMethod<Subscription['sale'], SubscriptionsaleArgs, MeshContext>,
  /** null **/
  sales: InContextSdkMethod<Subscription['sales'], SubscriptionsalesArgs, MeshContext>,
  /** null **/
  currency: InContextSdkMethod<Subscription['currency'], SubscriptioncurrencyArgs, MeshContext>,
  /** null **/
  currencies: InContextSdkMethod<Subscription['currencies'], SubscriptioncurrenciesArgs, MeshContext>,
  /** null **/
  hourlyCollectionSnapshot: InContextSdkMethod<Subscription['hourlyCollectionSnapshot'], SubscriptionhourlyCollectionSnapshotArgs, MeshContext>,
  /** null **/
  hourlyCollectionSnapshots: InContextSdkMethod<Subscription['hourlyCollectionSnapshots'], SubscriptionhourlyCollectionSnapshotsArgs, MeshContext>,
  /** null **/
  dailyCollectionSnapshot: InContextSdkMethod<Subscription['dailyCollectionSnapshot'], SubscriptiondailyCollectionSnapshotArgs, MeshContext>,
  /** null **/
  dailyCollectionSnapshots: InContextSdkMethod<Subscription['dailyCollectionSnapshots'], SubscriptiondailyCollectionSnapshotsArgs, MeshContext>,
  /** null **/
  weeklyCollectionSnapshot: InContextSdkMethod<Subscription['weeklyCollectionSnapshot'], SubscriptionweeklyCollectionSnapshotArgs, MeshContext>,
  /** null **/
  weeklyCollectionSnapshots: InContextSdkMethod<Subscription['weeklyCollectionSnapshots'], SubscriptionweeklyCollectionSnapshotsArgs, MeshContext>,
  /** null **/
  wethTransaction: InContextSdkMethod<Subscription['wethTransaction'], SubscriptionwethTransactionArgs, MeshContext>,
  /** null **/
  wethTransactions: InContextSdkMethod<Subscription['wethTransactions'], SubscriptionwethTransactionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["SubgraphEthereum721"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
