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
  holding?: Maybe<holding>;
  holdings: Array<holding>;
  transfer?: Maybe<transfer>;
  transfers: Array<transfer>;
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


export type QueryholdingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryholdingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<holding_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<holding_filter>;
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
  holding?: Maybe<holding>;
  holdings: Array<holding>;
  transfer?: Maybe<transfer>;
  transfers: Array<transfer>;
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


export type SubscriptionholdingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionholdingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<holding_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<holding_filter>;
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
  holdings: Array<holding>;
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


export type accountholdingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<holding_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<holding_filter>;
};

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
  holdings_?: InputMaybe<holding_filter>;
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
  | 'holdings';

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
  /**  Tokens for the collection */
  tokens: Array<token>;
  /**  M:M relationship for Accounts and Collections  */
  holdings: Array<holding>;
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
export type collectionholdingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<holding_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<holding_filter>;
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
  tokens_?: InputMaybe<token_filter>;
  holdings_?: InputMaybe<holding_filter>;
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
  | 'tokens'
  | 'holdings';

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
  | 'asERC721__totalSupply';

export type holding = {
  /**  Account Id - Collection Id  */
  id: Scalars['ID'];
  /**  Address of the account  */
  account?: Maybe<account>;
  /**  Address of the NFT Collection  */
  collection?: Maybe<collection>;
  /**  Count of NFT's owned in a collection by the Address */
  tokenCount: Scalars['Int'];
};

export type holding_filter = {
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
  and?: InputMaybe<Array<InputMaybe<holding_filter>>>;
  or?: InputMaybe<Array<InputMaybe<holding_filter>>>;
};

export type holding_orderBy =
  | 'id'
  | 'account'
  | 'account__id'
  | 'collection'
  | 'collection__id'
  | 'collection__name'
  | 'collection__symbol'
  | 'collection__totalSupply'
  | 'tokenCount';

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
  | 'identifier'
  | 'owner'
  | 'owner__id'
  | 'transfers';

export type transfer = {
  /**  Block Number and Event Id in which the transfers event occured */
  id: Scalars['ID'];
  /**  Transaction hash in which the transfer event occured */
  transaction: Scalars['Bytes'];
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
  transaction?: InputMaybe<Scalars['Bytes']>;
  transaction_not?: InputMaybe<Scalars['Bytes']>;
  transaction_gt?: InputMaybe<Scalars['Bytes']>;
  transaction_lt?: InputMaybe<Scalars['Bytes']>;
  transaction_gte?: InputMaybe<Scalars['Bytes']>;
  transaction_lte?: InputMaybe<Scalars['Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['Bytes']>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<transfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<transfer_filter>>>;
};

export type transfer_orderBy =
  | 'id'
  | 'transaction'
  | 'collection'
  | 'collection__id'
  | 'collection__name'
  | 'collection__symbol'
  | 'collection__totalSupply'
  | 'token'
  | 'token__id'
  | 'token__identifier'
  | 'senderAddress'
  | 'senderAddress__id'
  | 'receiverAddress'
  | 'receiverAddress__id'
  | 'timestamp'
  | 'blockNumber';

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
  holding: InContextSdkMethod<Query['holding'], QueryholdingArgs, MeshContext>,
  /** null **/
  holdings: InContextSdkMethod<Query['holdings'], QueryholdingsArgs, MeshContext>,
  /** null **/
  transfer: InContextSdkMethod<Query['transfer'], QuerytransferArgs, MeshContext>,
  /** null **/
  transfers: InContextSdkMethod<Query['transfers'], QuerytransfersArgs, MeshContext>,
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
  holding: InContextSdkMethod<Subscription['holding'], SubscriptionholdingArgs, MeshContext>,
  /** null **/
  holdings: InContextSdkMethod<Subscription['holdings'], SubscriptionholdingsArgs, MeshContext>,
  /** null **/
  transfer: InContextSdkMethod<Subscription['transfer'], SubscriptiontransferArgs, MeshContext>,
  /** null **/
  transfers: InContextSdkMethod<Subscription['transfers'], SubscriptiontransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["SubgraphEthereum721"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
