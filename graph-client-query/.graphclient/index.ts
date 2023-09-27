// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { SubgraphEthereum721Types } from './sources/SubgraphEthereum721/types';
import * as importedModule$0 from "./sources/SubgraphEthereum721/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']>;
  OrderDirection: OrderDirection;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  account: ResolverTypeWrapper<account>;
  account_filter: account_filter;
  account_orderBy: account_orderBy;
  collection: ResolverTypeWrapper<collection>;
  collection_filter: collection_filter;
  collection_orderBy: collection_orderBy;
  contract: ResolverTypeWrapper<contract>;
  contract_filter: contract_filter;
  contract_orderBy: contract_orderBy;
  holding: ResolverTypeWrapper<holding>;
  holding_filter: holding_filter;
  holding_orderBy: holding_orderBy;
  token: ResolverTypeWrapper<token>;
  token_filter: token_filter;
  token_orderBy: token_orderBy;
  transfer: ResolverTypeWrapper<transfer>;
  transfer_filter: transfer_filter;
  transfer_orderBy: transfer_orderBy;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Int8: Scalars['Int8'];
  Query: {};
  String: Scalars['String'];
  Subscription: {};
  _Block_: _Block_;
  _Meta_: _Meta_;
  account: account;
  account_filter: account_filter;
  collection: collection;
  collection_filter: collection_filter;
  contract: contract;
  contract_filter: contract_filter;
  holding: holding;
  holding_filter: holding_filter;
  token: token;
  token_filter: token_filter;
  transfer: transfer;
  transfer_filter: transfer_filter;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  contract?: Resolver<Maybe<ResolversTypes['contract']>, ParentType, ContextType, RequireFields<QuerycontractArgs, 'id' | 'subgraphError'>>;
  contracts?: Resolver<Array<ResolversTypes['contract']>, ParentType, ContextType, RequireFields<QuerycontractsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: Resolver<Maybe<ResolversTypes['account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['account']>, ParentType, ContextType, RequireFields<QueryaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  collection?: Resolver<Maybe<ResolversTypes['collection']>, ParentType, ContextType, RequireFields<QuerycollectionArgs, 'id' | 'subgraphError'>>;
  collections?: Resolver<Array<ResolversTypes['collection']>, ParentType, ContextType, RequireFields<QuerycollectionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: Resolver<Maybe<ResolversTypes['token']>, ParentType, ContextType, RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>>;
  tokens?: Resolver<Array<ResolversTypes['token']>, ParentType, ContextType, RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  holding?: Resolver<Maybe<ResolversTypes['holding']>, ParentType, ContextType, RequireFields<QueryholdingArgs, 'id' | 'subgraphError'>>;
  holdings?: Resolver<Array<ResolversTypes['holding']>, ParentType, ContextType, RequireFields<QueryholdingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transfer?: Resolver<Maybe<ResolversTypes['transfer']>, ParentType, ContextType, RequireFields<QuerytransferArgs, 'id' | 'subgraphError'>>;
  transfers?: Resolver<Array<ResolversTypes['transfer']>, ParentType, ContextType, RequireFields<QuerytransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  contract?: SubscriptionResolver<Maybe<ResolversTypes['contract']>, "contract", ParentType, ContextType, RequireFields<SubscriptioncontractArgs, 'id' | 'subgraphError'>>;
  contracts?: SubscriptionResolver<Array<ResolversTypes['contract']>, "contracts", ParentType, ContextType, RequireFields<SubscriptioncontractsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: SubscriptionResolver<Maybe<ResolversTypes['account']>, "account", ParentType, ContextType, RequireFields<SubscriptionaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  collection?: SubscriptionResolver<Maybe<ResolversTypes['collection']>, "collection", ParentType, ContextType, RequireFields<SubscriptioncollectionArgs, 'id' | 'subgraphError'>>;
  collections?: SubscriptionResolver<Array<ResolversTypes['collection']>, "collections", ParentType, ContextType, RequireFields<SubscriptioncollectionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: SubscriptionResolver<Maybe<ResolversTypes['token']>, "token", ParentType, ContextType, RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>>;
  tokens?: SubscriptionResolver<Array<ResolversTypes['token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  holding?: SubscriptionResolver<Maybe<ResolversTypes['holding']>, "holding", ParentType, ContextType, RequireFields<SubscriptionholdingArgs, 'id' | 'subgraphError'>>;
  holdings?: SubscriptionResolver<Array<ResolversTypes['holding']>, "holdings", ParentType, ContextType, RequireFields<SubscriptionholdingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transfer?: SubscriptionResolver<Maybe<ResolversTypes['transfer']>, "transfer", ParentType, ContextType, RequireFields<SubscriptiontransferArgs, 'id' | 'subgraphError'>>;
  transfers?: SubscriptionResolver<Array<ResolversTypes['transfer']>, "transfers", ParentType, ContextType, RequireFields<SubscriptiontransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type accountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['account'] = ResolversParentTypes['account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['token']>, ParentType, ContextType, RequireFields<accounttokensArgs, 'skip' | 'first'>>;
  transfersFrom?: Resolver<Array<ResolversTypes['transfer']>, ParentType, ContextType, RequireFields<accounttransfersFromArgs, 'skip' | 'first'>>;
  transfersTo?: Resolver<Array<ResolversTypes['transfer']>, ParentType, ContextType, RequireFields<accounttransfersToArgs, 'skip' | 'first'>>;
  holdings?: Resolver<Array<ResolversTypes['holding']>, ParentType, ContextType, RequireFields<accountholdingsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type collectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['collection'] = ResolversParentTypes['collection']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalSupply?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['token']>, ParentType, ContextType, RequireFields<collectiontokensArgs, 'skip' | 'first'>>;
  holdings?: Resolver<Array<ResolversTypes['holding']>, ParentType, ContextType, RequireFields<collectionholdingsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type contractResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['contract'] = ResolversParentTypes['contract']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  asERC721?: Resolver<Maybe<ResolversTypes['collection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type holdingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['holding'] = ResolversParentTypes['holding']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  account?: Resolver<Maybe<ResolversTypes['account']>, ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['collection']>, ParentType, ContextType>;
  tokenCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type tokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['token'] = ResolversParentTypes['token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  collection?: Resolver<ResolversTypes['collection'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['account']>, ParentType, ContextType>;
  transfers?: Resolver<Array<ResolversTypes['transfer']>, ParentType, ContextType, RequireFields<tokentransfersArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type transferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['transfer'] = ResolversParentTypes['transfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  collection?: Resolver<ResolversTypes['collection'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['token'], ParentType, ContextType>;
  senderAddress?: Resolver<Maybe<ResolversTypes['account']>, ParentType, ContextType>;
  receiverAddress?: Resolver<Maybe<ResolversTypes['account']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Int8?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  account?: accountResolvers<ContextType>;
  collection?: collectionResolvers<ContextType>;
  contract?: contractResolvers<ContextType>;
  holding?: holdingResolvers<ContextType>;
  token?: tokenResolvers<ContextType>;
  transfer?: transferResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = SubgraphEthereum721Types.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/SubgraphEthereum721/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const subgraphEthereum721Transforms = [];
const additionalTypeDefs = [] as any[];
const subgraphEthereum721Handler = new GraphqlHandler({
              name: "SubgraphEthereum721",
              config: {"endpoint":"https://gateway-arbitrum.network.thegraph.com/api/<API_KEY>/subgraphs/id/CBf1FtUKFnipwKVm36mHyeMtkuhjmh4KHzY3uWNNq5ow"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("SubgraphEthereum721"),
              logger: logger.child("SubgraphEthereum721"),
              importFn,
            });
sources[0] = {
          name: 'SubgraphEthereum721',
          handler: subgraphEthereum721Handler,
          transforms: subgraphEthereum721Transforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: GetAccountCollectionsDocument,
        get rawSDL() {
          return printWithCache(GetAccountCollectionsDocument);
        },
        location: 'GetAccountCollectionsDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type GetAccountCollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountCollectionsQuery = { collections: Array<Pick<collection, 'id' | 'name' | 'symbol' | 'totalSupply'>> };


export const GetAccountCollectionsDocument = gql`
    query GetAccountCollections {
  collections(first: 10, where: {totalSupply_gt: "500"}) {
    id
    name
    symbol
    totalSupply
  }
}
    ` as unknown as DocumentNode<GetAccountCollectionsQuery, GetAccountCollectionsQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetAccountCollections(variables?: GetAccountCollectionsQueryVariables, options?: C): Promise<GetAccountCollectionsQuery> {
      return requester<GetAccountCollectionsQuery, GetAccountCollectionsQueryVariables>(GetAccountCollectionsDocument, variables, options) as Promise<GetAccountCollectionsQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;