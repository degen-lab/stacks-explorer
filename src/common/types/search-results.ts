'use client';

import { Block, Transaction } from '@stacks/stacks-blockchain-api-types';

export enum SearchResultType {
  TxId = 'tx_id',
  MempoolTxId = 'mempool_tx_id',
  BlockHash = 'block_hash',
  StandardAddress = 'standard_address',
  BnsAddress = 'bns_address',
  ContractAddress = 'contract_address',
  UnknownHash = 'unknown_hash',
  InvalidTerm = 'invalid_term',
  TxList = 'tx_list',
}

export interface FoundResult {
  found: true;
  result:
    | AddressSearchResult
    | BnsSearchResult
    | ContractSearchResult
    | TxSearchResult
    | MempoolTxSearchResult
    | BlockSearchResult
    | TxListResult;
}

export interface NotFoundResult {
  found: false;
  result: {
    entity_type:
      | SearchResultType.StandardAddress
      | SearchResultType.BnsAddress
      | SearchResultType.ContractAddress
      | SearchResultType.UnknownHash
      | SearchResultType.InvalidTerm;
  };
  error: string;
}

export type SearchResult = FoundResult | NotFoundResult;

export interface AddressSearchResult {
  entity_type: SearchResultType.StandardAddress;
  entity_id: string;
  display_name?: string;
  metadata?: any;
}

export interface BnsSearchResult {
  entity_type: SearchResultType.BnsAddress;
  entity_id: string;
  display_name: string;
  metadata?: any;
}

export interface ContractSearchResult {
  entity_type: SearchResultType.ContractAddress;
  entity_id: string;
  tx_data?: Partial<Transaction>;
  metadata?: any;
}

export interface TxSearchResult {
  entity_type: SearchResultType.TxId;
  entity_id: string;
  tx_data: Transaction;
  metadata?: any;
}

export interface MempoolTxSearchResult {
  entity_type: SearchResultType.MempoolTxId;
  entity_id: string;
  tx_data: Partial<Transaction>;
  metadata?: any;
}

export interface BlockSearchResult {
  entity_type: SearchResultType.BlockHash;
  entity_id: string;
  block_data: Partial<Block>;
  tx_count: number;
  metadata?: any;
}

export interface TxListResult {
  entity_type: SearchResultType.TxList;
  entity_id: string;
  txs: Transaction[];
  metadata?: any;
}
