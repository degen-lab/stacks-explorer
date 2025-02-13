
export const txTableSampleData = {
  "txs": [
      {
          "tx_id": "0xca85ac121953ead526a3ca4bad5dfe011dbe253ba1b76c63c0ba3e784a55d2b1",
          "nonce": 3,
          "fee_rate": "3000",
          "sender_address": "SPB4276WPN6DCP1F758M032583E2J4TCVP7ZQ2NX",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [],
          "anchor_mode": "any",
          "block_hash": "0x7a2e707af7bc0def0955cad3978f998ddfb7119e520643ea6b9320c89d9c5249",
          "block_height": 610719,
          "block_time": 1739468184,
          "block_time_iso": "2025-02-13T17:36:24.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 0,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x070c0000000401610d0000000c6c6973742d696e2d757374780a636f6d6d697373696f6e06162bcf9762d5b90bc36dc1b4759b1727690f92ddd31367616d6d612d636f6d6d697373696f6e2d763102696401000000000000000000000000000170b805707269636501000000000000000000000005b4e5ed92",
              "repr": "(ok (tuple (a \"list-in-ustx\") (commission 'SPNWZ5V2TPWGQGVDR6T7B6RQ4XMGZ4PXTEE0VQ0S.gamma-commission-v1) (id u94392) (price u24509803922)))"
          },
          "event_count": 1,
          "parent_block_hash": "0xc611e155fe00c895cdf03b1c0d4e6ea30f027090a0948b600593ca96752be644",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 10,
          "execution_cost_read_length": 93551,
          "execution_cost_runtime": 139949,
          "execution_cost_write_count": 1,
          "execution_cost_write_length": 100,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SP2QEZ06AGJ3RKJPBV14SY1V5BBFNAW33D96YPGZF.BNS-V2",
              "function_name": "list-in-ustx",
              "function_signature": "(define-public (list-in-ustx (id uint) (price uint) (comm-trait trait_reference)))",
              "function_args": [
                  {
                      "hex": "0x01000000000000000000000000000170b8",
                      "repr": "u94392",
                      "name": "id",
                      "type": "uint"
                  },
                  {
                      "hex": "0x01000000000000000000000005b4e5ed92",
                      "repr": "u24509803922",
                      "name": "price",
                      "type": "uint"
                  },
                  {
                      "hex": "0x06162bcf9762d5b90bc36dc1b4759b1727690f92ddd31367616d6d612d636f6d6d697373696f6e2d7631",
                      "repr": "'SPNWZ5V2TPWGQGVDR6T7B6RQ4XMGZ4PXTEE0VQ0S.gamma-commission-v1",
                      "name": "comm-trait",
                      "type": "trait_reference"
                  }
              ]
          }
      },
      {
          "tx_id": "0x2ef172b123b1872772c66250c936885e4621d0a7715ff67f44b051b0cd2e8802",
          "nonce": 15667,
          "fee_rate": "180",
          "sender_address": "SP3XXK8BG5X7CRH7W07RRJK3JZJXJ799WX3Y0SMCR",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [],
          "anchor_mode": "on_chain_only",
          "block_hash": "0xc611e155fe00c895cdf03b1c0d4e6ea30f027090a0948b600593ca96752be644",
          "block_height": 610718,
          "block_time": 1739468171,
          "block_time_iso": "2025-02-13T17:36:11.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 0,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 1,
          "parent_block_hash": "0x4df730d2fdeb110ed322c404a5d6fc3d7d808540727d792fdc7783fed3f10a94",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 0,
          "execution_cost_read_length": 0,
          "execution_cost_runtime": 0,
          "execution_cost_write_count": 0,
          "execution_cost_write_length": 0,
          "events": [],
          "tx_type": "token_transfer",
          "token_transfer": {
              "recipient_address": "SP3SBQ9PZEMBNBAWTR7FRPE3XK0EFW9JWVX4G80S2",
              "amount": "1",
              "memo": "0x00000000000000000000000000000000000000000000000000000000000000000000"
          }
      },
      {
          "tx_id": "0x18559cf285a7a74f38595b40c080f383a9cfb00df19b99743086f4c445346121",
          "nonce": 14587,
          "fee_rate": "3000",
          "sender_address": "SP3WMZH4GCH820YP3XHD6GX5TKQ411MHSKPJ9H22R",
          "sponsored": false,
          "post_condition_mode": "allow",
          "post_conditions": [],
          "anchor_mode": "on_chain_only",
          "block_hash": "0x4df730d2fdeb110ed322c404a5d6fc3d7d808540727d792fdc7783fed3f10a94",
          "block_height": 610717,
          "block_time": 1739468158,
          "block_time_iso": "2025-02-13T17:35:58.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 1,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 14,
          "parent_block_hash": "0x99adee49f06fbc8836eeadc1e992ce29c5136eb255fd270b517065fed5dac642",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 950,
          "execution_cost_read_length": 1170583,
          "execution_cost_runtime": 3071015,
          "execution_cost_write_count": 77,
          "execution_cost_write_length": 160,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SPGYCP878RYFVT03ZT8TWGPKNYTSQB1578VVXHGE.powerful-farmer",
              "function_name": "execute-both",
              "function_signature": "(define-public (execute-both ))",
              "function_args": []
          }
      },
      {
          "tx_id": "0x1e8fe1e6f9a46ee0be9229d1b1cfde2293b5902c54f17cc9221dc3835cbdd180",
          "nonce": 52,
          "fee_rate": "298",
          "sender_address": "SP30YXRTQ4GJE64RDWY8K5ZN38C8W24PG6VP8B093",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [
              {
                  "principal": {
                      "type_id": "principal_standard",
                      "address": "SP30YXRTQ4GJE64RDWY8K5ZN38C8W24PG6VP8B093"
                  },
                  "condition_code": "sent_equal_to",
                  "amount": "19800000000",
                  "type": "fungible",
                  "asset": {
                      "asset_name": "usdh",
                      "contract_address": "SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG",
                      "contract_name": "usdh-token-v1"
                  }
              }
          ],
          "anchor_mode": "any",
          "block_hash": "0x4df730d2fdeb110ed322c404a5d6fc3d7d808540727d792fdc7783fed3f10a94",
          "block_height": 610717,
          "block_time": 1739468158,
          "block_time_iso": "2025-02-13T17:35:58.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 0,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 3,
          "parent_block_hash": "0x99adee49f06fbc8836eeadc1e992ce29c5136eb255fd270b517065fed5dac642",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 7,
          "execution_cost_read_length": 3707,
          "execution_cost_runtime": 24458,
          "execution_cost_write_count": 2,
          "execution_cost_write_length": 1,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG.usdh-token-v1",
              "function_name": "transfer",
              "function_signature": "(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34)))))",
              "function_args": [
                  {
                      "hex": "0x010000000000000000000000049c2c0600",
                      "repr": "u19800000000",
                      "name": "amount",
                      "type": "uint"
                  },
                  {
                      "hex": "0x0516c1eee3572424e3130de79132fea34311c112d036",
                      "repr": "'SP30YXRTQ4GJE64RDWY8K5ZN38C8W24PG6VP8B093",
                      "name": "sender",
                      "type": "principal"
                  },
                  {
                      "hex": "0x051679944056d24287a0ef2611636f2e8c386168839d",
                      "repr": "'SP1WS8G2PT918F87F4R8P6VSEHGW62T43KP6TPG6E",
                      "name": "recipient",
                      "type": "principal"
                  },
                  {
                      "hex": "0x09",
                      "repr": "none",
                      "name": "memo",
                      "type": "(optional (buff 34))"
                  }
              ]
          }
      },
      {
          "tx_id": "0x7fad61def135b8bab42014edafb1f5088b1f181e973d8c71ce89e1400213bd87",
          "nonce": 15666,
          "fee_rate": "180",
          "sender_address": "SP3SBQ9PZEMBNBAWTR7FRPE3XK0EFW9JWVX4G80S2",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [],
          "anchor_mode": "on_chain_only",
          "block_hash": "0x99adee49f06fbc8836eeadc1e992ce29c5136eb255fd270b517065fed5dac642",
          "block_height": 610716,
          "block_time": 1739468144,
          "block_time_iso": "2025-02-13T17:35:44.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 1,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 1,
          "parent_block_hash": "0x46642e522c8d51442cedf117dc179557b41df3f4fab2fcd7c744a0311427c220",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 0,
          "execution_cost_read_length": 0,
          "execution_cost_runtime": 0,
          "execution_cost_write_count": 0,
          "execution_cost_write_length": 0,
          "events": [],
          "tx_type": "token_transfer",
          "token_transfer": {
              "recipient_address": "SP3XXK8BG5X7CRH7W07RRJK3JZJXJ799WX3Y0SMCR",
              "amount": "1",
              "memo": "0x00000000000000000000000000000000000000000000000000000000000000000000"
          }
      },
      {
          "tx_id": "0x0aa379197ed2644992c9c60c994edd27cb9be1664d10827f7f7807676fe66f3f",
          "nonce": 3,
          "fee_rate": "3000",
          "sender_address": "SP1M88SZW4639PT8KEEYH882Q8X9J2P9FWKZPR3ZJ",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [],
          "anchor_mode": "any",
          "block_hash": "0x99adee49f06fbc8836eeadc1e992ce29c5136eb255fd270b517065fed5dac642",
          "block_height": 610716,
          "block_time": 1739468144,
          "block_time_iso": "2025-02-13T17:35:44.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 0,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x070c0000000401610d0000000c6c6973742d696e2d757374780a636f6d6d697373696f6e06162bcf9762d5b90bc36dc1b4759b1727690f92ddd31367616d6d612d636f6d6d697373696f6e2d763102696401000000000000000000000000000312a3057072696365010000000000000000000000036c89f4f1",
              "repr": "(ok (tuple (a \"list-in-ustx\") (commission 'SPNWZ5V2TPWGQGVDR6T7B6RQ4XMGZ4PXTEE0VQ0S.gamma-commission-v1) (id u201379) (price u14705882353)))"
          },
          "event_count": 1,
          "parent_block_hash": "0x46642e522c8d51442cedf117dc179557b41df3f4fab2fcd7c744a0311427c220",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 10,
          "execution_cost_read_length": 93535,
          "execution_cost_runtime": 139933,
          "execution_cost_write_count": 1,
          "execution_cost_write_length": 100,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SP2QEZ06AGJ3RKJPBV14SY1V5BBFNAW33D96YPGZF.BNS-V2",
              "function_name": "list-in-ustx",
              "function_signature": "(define-public (list-in-ustx (id uint) (price uint) (comm-trait trait_reference)))",
              "function_args": [
                  {
                      "hex": "0x01000000000000000000000000000312a3",
                      "repr": "u201379",
                      "name": "id",
                      "type": "uint"
                  },
                  {
                      "hex": "0x010000000000000000000000036c89f4f1",
                      "repr": "u14705882353",
                      "name": "price",
                      "type": "uint"
                  },
                  {
                      "hex": "0x06162bcf9762d5b90bc36dc1b4759b1727690f92ddd31367616d6d612d636f6d6d697373696f6e2d7631",
                      "repr": "'SPNWZ5V2TPWGQGVDR6T7B6RQ4XMGZ4PXTEE0VQ0S.gamma-commission-v1",
                      "name": "comm-trait",
                      "type": "trait_reference"
                  }
              ]
          }
      },
      {
          "tx_id": "0x2bb97a0ded0ebd513681456c979a286f134af5f57a56a0dbe75bf932f285f3af",
          "nonce": 3,
          "fee_rate": "392",
          "sender_address": "SPB44NKC554NHT2XT83B2DEA39M0F6003Q0EQPP9",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [
              {
                  "principal": {
                      "type_id": "principal_standard",
                      "address": "SPB44NKC554NHT2XT83B2DEA39M0F6003Q0EQPP9"
                  },
                  "condition_code": "sent_equal_to",
                  "amount": "132872487",
                  "type": "fungible",
                  "asset": {
                      "asset_name": "usdh",
                      "contract_address": "SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG",
                      "contract_name": "usdh-token-v1"
                  }
              }
          ],
          "anchor_mode": "any",
          "block_hash": "0x46642e522c8d51442cedf117dc179557b41df3f4fab2fcd7c744a0311427c220",
          "block_height": 610715,
          "block_time": 1739468131,
          "block_time_iso": "2025-02-13T17:35:31.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 1,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 11,
          "parent_block_hash": "0x251e704db91090301c52d4702233dc079153d1661d9a8871684c92fd3f68921f",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 339,
          "execution_cost_read_length": 1841130,
          "execution_cost_runtime": 4207326,
          "execution_cost_write_count": 11,
          "execution_cost_write_length": 3250,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SP2VCQJGH7PHP2DJK7Z0V48AGBHQAW3R3ZW1QF4N.borrow-helper-v2-0-0",
              "function_name": "supply",
              "function_signature": "(define-public (supply (lp trait_reference) (pool-reserve principal) (asset trait_reference) (amount uint) (owner principal) (referral (optional principal))))",
              "function_args": [
                  {
                      "hex": "0x061605b65e5089ed1b09b299fe0d910a82e37570781f0a7a757364682d76322d30",
                      "repr": "'SP2VCQJGH7PHP2DJK7Z0V48AGBHQAW3R3ZW1QF4N.zusdh-v2-0",
                      "name": "lp",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x061605b65e5089ed1b09b299fe0d910a82e37570781f13706f6f6c2d302d726573657276652d76322d30",
                      "repr": "'SP2VCQJGH7PHP2DJK7Z0V48AGBHQAW3R3ZW1QF4N.pool-0-reserve-v2-0",
                      "name": "pool-reserve",
                      "type": "principal"
                  },
                  {
                      "hex": "0x06162a554e032dff998a8882a98229fd214c54e2516f0d757364682d746f6b656e2d7631",
                      "repr": "'SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG.usdh-token-v1",
                      "name": "asset",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x0100000000000000000000000007eb7927",
                      "repr": "u132872487",
                      "name": "amount",
                      "type": "uint"
                  },
                  {
                      "hex": "0x05161642566c294958e85dd206b135ca1a680798001d",
                      "repr": "'SPB44NKC554NHT2XT83B2DEA39M0F6003Q0EQPP9",
                      "name": "owner",
                      "type": "principal"
                  },
                  {
                      "hex": "0x09",
                      "repr": "none",
                      "name": "referral",
                      "type": "(optional principal)"
                  }
              ]
          }
      },
      {
          "tx_id": "0xd9b2fcc3482bb481481db2a73263a734405a59a7529a0712d7bfee26730de739",
          "nonce": 2,
          "fee_rate": "390",
          "sender_address": "SPB44NKC554NHT2XT83B2DEA39M0F6003Q0EQPP9",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [
              {
                  "principal": {
                      "type_id": "principal_standard",
                      "address": "SPB44NKC554NHT2XT83B2DEA39M0F6003Q0EQPP9"
                  },
                  "condition_code": "sent_equal_to",
                  "amount": "1317142",
                  "type": "fungible",
                  "asset": {
                      "asset_name": "ststx",
                      "contract_address": "SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG",
                      "contract_name": "ststx-token"
                  }
              }
          ],
          "anchor_mode": "any",
          "block_hash": "0x46642e522c8d51442cedf117dc179557b41df3f4fab2fcd7c744a0311427c220",
          "block_height": 610715,
          "block_time": 1739468131,
          "block_time_iso": "2025-02-13T17:35:31.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 0,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 12,
          "parent_block_hash": "0x251e704db91090301c52d4702233dc079153d1661d9a8871684c92fd3f68921f",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 343,
          "execution_cost_read_length": 1904259,
          "execution_cost_runtime": 3853212,
          "execution_cost_write_count": 12,
          "execution_cost_write_length": 3502,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SP2VCQJGH7PHP2DJK7Z0V48AGBHQAW3R3ZW1QF4N.borrow-helper-v2-0-0",
              "function_name": "supply",
              "function_signature": "(define-public (supply (lp trait_reference) (pool-reserve principal) (asset trait_reference) (amount uint) (owner principal) (referral (optional principal))))",
              "function_args": [
                  {
                      "hex": "0x061605b65e5089ed1b09b299fe0d910a82e37570781f0b7a73747374782d76322d30",
                      "repr": "'SP2VCQJGH7PHP2DJK7Z0V48AGBHQAW3R3ZW1QF4N.zststx-v2-0",
                      "name": "lp",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x061605b65e5089ed1b09b299fe0d910a82e37570781f13706f6f6c2d302d726573657276652d76322d30",
                      "repr": "'SP2VCQJGH7PHP2DJK7Z0V48AGBHQAW3R3ZW1QF4N.pool-0-reserve-v2-0",
                      "name": "pool-reserve",
                      "type": "principal"
                  },
                  {
                      "hex": "0x0616099fb88926d82f30b2f40eaf3ee423cb725bdb3b0b73747374782d746f6b656e",
                      "repr": "'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststx-token",
                      "name": "asset",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x0100000000000000000000000000141916",
                      "repr": "u1317142",
                      "name": "amount",
                      "type": "uint"
                  },
                  {
                      "hex": "0x05161642566c294958e85dd206b135ca1a680798001d",
                      "repr": "'SPB44NKC554NHT2XT83B2DEA39M0F6003Q0EQPP9",
                      "name": "owner",
                      "type": "principal"
                  },
                  {
                      "hex": "0x09",
                      "repr": "none",
                      "name": "referral",
                      "type": "(optional principal)"
                  }
              ]
          }
      },
      {
          "tx_id": "0xbcb0dc4b7e469db1aca59533cd0d9805f833ab94c47fcdb50d67724989ad3f51",
          "nonce": 15666,
          "fee_rate": "180",
          "sender_address": "SP3XXK8BG5X7CRH7W07RRJK3JZJXJ799WX3Y0SMCR",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [],
          "anchor_mode": "on_chain_only",
          "block_hash": "0x251e704db91090301c52d4702233dc079153d1661d9a8871684c92fd3f68921f",
          "block_height": 610714,
          "block_time": 1739468117,
          "block_time_iso": "2025-02-13T17:35:17.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 2,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 1,
          "parent_block_hash": "0x0a96613d86641e42aed09389317c32effe284be0c583944a74fb308ef988e2c0",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 0,
          "execution_cost_read_length": 0,
          "execution_cost_runtime": 0,
          "execution_cost_write_count": 0,
          "execution_cost_write_length": 0,
          "events": [],
          "tx_type": "token_transfer",
          "token_transfer": {
              "recipient_address": "SP3SBQ9PZEMBNBAWTR7FRPE3XK0EFW9JWVX4G80S2",
              "amount": "1",
              "memo": "0x00000000000000000000000000000000000000000000000000000000000000000000"
          }
      },
      {
          "tx_id": "0x802e5b748f361e322eb6d39b7cd2f70414eafd74b3c6dc72c02f684b1a0e891e",
          "nonce": 118,
          "fee_rate": "3000",
          "sender_address": "SPRTGGX3PRNP6MVCHX3P486JZHCFXZRQ8YS5QJ7K",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [
              {
                  "principal": {
                      "type_id": "principal_standard",
                      "address": "SPRTGGX3PRNP6MVCHX3P486JZHCFXZRQ8YS5QJ7K"
                  },
                  "condition_code": "sent_equal_to",
                  "amount": "331524852",
                  "type": "fungible",
                  "asset": {
                      "asset_name": "alex",
                      "contract_address": "SP102V8P0F7JX67ARQ77WEA3D3CFB5XW39REDT0AM",
                      "contract_name": "token-alex"
                  }
              },
              {
                  "principal": {
                      "type_id": "principal_standard",
                      "address": "SPRTGGX3PRNP6MVCHX3P486JZHCFXZRQ8YS5QJ7K"
                  },
                  "condition_code": "sent_greater_than_or_equal_to",
                  "amount": "0",
                  "type": "fungible",
                  "asset": {
                      "asset_name": "auto-alex-v3",
                      "contract_address": "SP102V8P0F7JX67ARQ77WEA3D3CFB5XW39REDT0AM",
                      "contract_name": "auto-alex-v3"
                  }
              },
              {
                  "principal": {
                      "type_id": "principal_contract",
                      "address": "SP102V8P0F7JX67ARQ77WEA3D3CFB5XW39REDT0AM",
                      "contract_name": "amm-vault-v2-01"
                  },
                  "condition_code": "sent_greater_than_or_equal_to",
                  "amount": "0",
                  "type": "fungible",
                  "asset": {
                      "asset_name": "amm-pool-v2-01-token",
                      "contract_address": "SP102V8P0F7JX67ARQ77WEA3D3CFB5XW39REDT0AM",
                      "contract_name": "token-amm-pool-v2-01"
                  }
              }
          ],
          "anchor_mode": "any",
          "block_hash": "0x251e704db91090301c52d4702233dc079153d1661d9a8871684c92fd3f68921f",
          "block_height": 610714,
          "block_time": 1739468117,
          "block_time_iso": "2025-02-13T17:35:17.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 1,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x070c000000030264780100000000000000000000000013c2aaf402647901000000000000000000000000144ef1c606737570706c790100000000000000000000000024f41033",
              "repr": "(ok (tuple (dx u331524852) (dy u340718022) (supply u619974707)))"
          },
          "event_count": 6,
          "parent_block_hash": "0x0a96613d86641e42aed09389317c32effe284be0c583944a74fb308ef988e2c0",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 57,
          "execution_cost_read_length": 111108,
          "execution_cost_runtime": 334340,
          "execution_cost_write_count": 9,
          "execution_cost_write_length": 734,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SP102V8P0F7JX67ARQ77WEA3D3CFB5XW39REDT0AM.amm-pool-v2-01",
              "function_name": "add-to-position",
              "function_signature": "(define-public (add-to-position (token-x-trait trait_reference) (token-y-trait trait_reference) (factor uint) (dx uint) (max-dy (optional uint))))",
              "function_args": [
                  {
                      "hex": "0x0616402da2c079e5d31d58b9cfc7286d1b1eb2f7834e0a746f6b656e2d616c6578",
                      "repr": "'SP102V8P0F7JX67ARQ77WEA3D3CFB5XW39REDT0AM.token-alex",
                      "name": "token-x-trait",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x0616402da2c079e5d31d58b9cfc7286d1b1eb2f7834e0d746f6b656e2d776c69616c6578",
                      "repr": "'SP102V8P0F7JX67ARQ77WEA3D3CFB5XW39REDT0AM.token-wlialex",
                      "name": "token-y-trait",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x01000000000000000000000000004c4b40",
                      "repr": "u5000000",
                      "name": "factor",
                      "type": "uint"
                  },
                  {
                      "hex": "0x0100000000000000000000000013c2aaf4",
                      "repr": "u331524852",
                      "name": "dx",
                      "type": "uint"
                  },
                  {
                      "hex": "0x0a01000000000000000000000000151ee6f7",
                      "repr": "(some u354346743)",
                      "name": "max-dy",
                      "type": "(optional uint)"
                  }
              ]
          }
      },
      {
          "tx_id": "0x5855038478c5755999997e9148e768800a14d06cf958ec7e52bcd518ca39ef2a",
          "nonce": 11900,
          "fee_rate": "3000",
          "sender_address": "SP3FKC11Z78NH9RCPN87EVN49GM9W7QF3KYC51605",
          "sponsored": false,
          "post_condition_mode": "allow",
          "post_conditions": [],
          "anchor_mode": "any",
          "block_hash": "0x251e704db91090301c52d4702233dc079153d1661d9a8871684c92fd3f68921f",
          "block_height": 610714,
          "block_time": 1739468117,
          "block_time_iso": "2025-02-13T17:35:17.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 0,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 1,
          "parent_block_hash": "0x0a96613d86641e42aed09389317c32effe284be0c583944a74fb308ef988e2c0",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 28,
          "execution_cost_read_length": 25490,
          "execution_cost_runtime": 84274,
          "execution_cost_write_count": 1,
          "execution_cost_write_length": 367,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SP2XD7417HGPRTREMKF748VNEQPDRR0RMANB7X1NK.btc-peg-out-endpoint-v2-01",
              "function_name": "claim-peg-out",
              "function_signature": "(define-public (claim-peg-out (request-id uint) (fulfilled-by (buff 128))))",
              "function_args": [
                  {
                      "hex": "0x0100000000000000000000000000000b55",
                      "repr": "u2901",
                      "name": "request-id",
                      "type": "uint"
                  },
                  {
                      "hex": "0x02000000160014630ca21dc8865bf5bfd1553b7d6eb9b719d4327f",
                      "repr": "0x0014630ca21dc8865bf5bfd1553b7d6eb9b719d4327f",
                      "name": "fulfilled-by",
                      "type": "(buff 128)"
                  }
              ]
          }
      },
      {
          "tx_id": "0x37cc0c3b32abf721d1c3eb54ac7e362ead4d4147bae50f39cc2fefeea15a3869",
          "nonce": 1,
          "fee_rate": "767",
          "sender_address": "SPB44NKC554NHT2XT83B2DEA39M0F6003Q0EQPP9",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [
              {
                  "principal": {
                      "type_id": "principal_standard",
                      "address": "SPB44NKC554NHT2XT83B2DEA39M0F6003Q0EQPP9"
                  },
                  "condition_code": "sent_equal_to",
                  "amount": "1400000",
                  "type": "stx"
              },
              {
                  "principal": {
                      "type_id": "principal_contract",
                      "address": "SP102V8P0F7JX67ARQ77WEA3D3CFB5XW39REDT0AM",
                      "contract_name": "amm-vault-v2-01"
                  },
                  "condition_code": "sent_greater_than_or_equal_to",
                  "amount": "0",
                  "type": "fungible",
                  "asset": {
                      "asset_name": "aeUSDC",
                      "contract_address": "SP3Y2ZSH8P7D50B0VBTSX11S7XSG24M1VB9YFQA4K",
                      "contract_name": "token-aeusdc"
                  }
              },
              {
                  "principal": {
                      "type_id": "principal_standard",
                      "address": "SPB44NKC554NHT2XT83B2DEA39M0F6003Q0EQPP9"
                  },
                  "condition_code": "sent_greater_than_or_equal_to",
                  "amount": "0",
                  "type": "fungible",
                  "asset": {
                      "asset_name": "aeUSDC",
                      "contract_address": "SP3Y2ZSH8P7D50B0VBTSX11S7XSG24M1VB9YFQA4K",
                      "contract_name": "token-aeusdc"
                  }
              },
              {
                  "principal": {
                      "type_id": "principal_contract",
                      "address": "SM1793C4R5PZ4NS4VQ4WMP7SKKYVH8JZEWSZ9HCCR",
                      "contract_name": "stableswap-pool-aeusdc-usdh-v-1-2"
                  },
                  "condition_code": "sent_greater_than_or_equal_to",
                  "amount": "127814854",
                  "type": "fungible",
                  "asset": {
                      "asset_name": "usdh",
                      "contract_address": "SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG",
                      "contract_name": "usdh-token-v1"
                  }
              }
          ],
          "anchor_mode": "any",
          "block_hash": "0x0a96613d86641e42aed09389317c32effe284be0c583944a74fb308ef988e2c0",
          "block_height": 610713,
          "block_time": 1739468102,
          "block_time_iso": "2025-02-13T17:35:02.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 2,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x070100000000000000000000000007eb7927",
              "repr": "(ok u132872487)"
          },
          "event_count": 18,
          "parent_block_hash": "0x5cdfa2ac0c9ba89f06a6a29967280ac78adb839d2befb6b8ed66fb3bf1cdfe67",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 205,
          "execution_cost_read_length": 371622,
          "execution_cost_runtime": 24662082,
          "execution_cost_write_count": 14,
          "execution_cost_write_length": 721,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SPQC38PW542EQJ5M11CR25P7BS1CA6QT4TBXGB3M.router-stableswap-alex-v-1-2",
              "function_name": "swap-helper-a",
              "function_signature": "(define-public (swap-helper-a (amount uint) (min-received uint) (swaps-reversed bool) (stableswap-tokens (tuple (a trait_reference) (b trait_reference))) (stableswap-pools (tuple (a trait_reference))) (alex-tokens (tuple (a trait_reference) (b trait_reference))) (alex-factors (tuple (a uint)))))",
              "function_args": [
                  {
                      "hex": "0x0100000000000000000000000008583b00",
                      "repr": "u140000000",
                      "name": "amount",
                      "type": "uint"
                  },
                  {
                      "hex": "0x01000000000000000000000000079e4cc6",
                      "repr": "u127814854",
                      "name": "min-received",
                      "type": "uint"
                  },
                  {
                      "hex": "0x03",
                      "repr": "true",
                      "name": "swaps-reversed",
                      "type": "bool"
                  },
                  {
                      "hex": "0x0c0000000201610616fc2fe628b1da502c1b5eb3d08727ee6022503b5a0c746f6b656e2d616575736463016206162a554e032dff998a8882a98229fd214c54e2516f0d757364682d746f6b656e2d7631",
                      "repr": "(tuple (a 'SP3Y2ZSH8P7D50B0VBTSX11S7XSG24M1VB9YFQA4K.token-aeusdc) (b 'SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG.usdh-token-v1))",
                      "name": "stableswap-tokens",
                      "type": "(tuple (a trait_reference) (b trait_reference))"
                  },
                  {
                      "hex": "0x0c00000001016106144e91b0982dbe4ae49bb9394b1f339fb7144beee621737461626c65737761702d706f6f6c2d6165757364632d757364682d762d312d32",
                      "repr": "(tuple (a 'SM1793C4R5PZ4NS4VQ4WMP7SKKYVH8JZEWSZ9HCCR.stableswap-pool-aeusdc-usdh-v-1-2))",
                      "name": "stableswap-pools",
                      "type": "(tuple (a trait_reference))"
                  },
                  {
                      "hex": "0x0c0000000201610616402da2c079e5d31d58b9cfc7286d1b1eb2f7834e0d746f6b656e2d777374782d763201620616402da2c079e5d31d58b9cfc7286d1b1eb2f7834e0d746f6b656e2d77616575736463",
                      "repr": "(tuple (a 'SP102V8P0F7JX67ARQ77WEA3D3CFB5XW39REDT0AM.token-wstx-v2) (b 'SP102V8P0F7JX67ARQ77WEA3D3CFB5XW39REDT0AM.token-waeusdc))",
                      "name": "alex-tokens",
                      "type": "(tuple (a trait_reference) (b trait_reference))"
                  },
                  {
                      "hex": "0x0c0000000101610100000000000000000000000005f5e100",
                      "repr": "(tuple (a u100000000))",
                      "name": "alex-factors",
                      "type": "(tuple (a uint))"
                  }
              ]
          }
      },
      {
          "tx_id": "0xfdcb4043b97fc3769b04a5e8d5462a048fd70b9b69fd443fa84db28834dab6ac",
          "nonce": 31,
          "fee_rate": "360",
          "sender_address": "SP30A0ASP3SWRS64E29971MJ33VWMX2AW2ENGAEED",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [],
          "anchor_mode": "any",
          "block_hash": "0x0a96613d86641e42aed09389317c32effe284be0c583944a74fb308ef988e2c0",
          "block_height": 610713,
          "block_time": 1739468102,
          "block_time_iso": "2025-02-13T17:35:02.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 1,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 1,
          "parent_block_hash": "0x5cdfa2ac0c9ba89f06a6a29967280ac78adb839d2befb6b8ed66fb3bf1cdfe67",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 0,
          "execution_cost_read_length": 0,
          "execution_cost_runtime": 0,
          "execution_cost_write_count": 0,
          "execution_cost_write_length": 0,
          "events": [],
          "tx_type": "token_transfer",
          "token_transfer": {
              "recipient_address": "SP27ANV45PCAG98PGFA2GVN9K7QYY1KWWS1V6RFSX",
              "amount": "5000000",
              "memo": "0x31303032393432330000000000000000000000000000000000000000000000000000"
          }
      },
      {
          "tx_id": "0xcc96e87923d58857f7db794719a7151a1fca1b1540089861c03593d793226b1f",
          "nonce": 3,
          "fee_rate": "3000",
          "sender_address": "SP11QGVZF7HW32J7TAXDQCFRHYF8ZVSFQGYKETBTT",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [],
          "anchor_mode": "any",
          "block_hash": "0x0a96613d86641e42aed09389317c32effe284be0c583944a74fb308ef988e2c0",
          "block_height": 610713,
          "block_time": 1739468102,
          "block_time_iso": "2025-02-13T17:35:02.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 0,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x070c0000000401610d0000000c6c6973742d696e2d757374780a636f6d6d697373696f6e06162bcf9762d5b90bc36dc1b4759b1727690f92ddd31367616d6d612d636f6d6d697373696f6e2d7631026964010000000000000000000000000001e248057072696365010000000000000000000000e443ed1ebf",
              "repr": "(ok (tuple (a \"list-in-ustx\") (commission 'SPNWZ5V2TPWGQGVDR6T7B6RQ4XMGZ4PXTEE0VQ0S.gamma-commission-v1) (id u123464) (price u980392156863)))"
          },
          "event_count": 1,
          "parent_block_hash": "0x5cdfa2ac0c9ba89f06a6a29967280ac78adb839d2befb6b8ed66fb3bf1cdfe67",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 10,
          "execution_cost_read_length": 93541,
          "execution_cost_runtime": 139939,
          "execution_cost_write_count": 1,
          "execution_cost_write_length": 100,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SP2QEZ06AGJ3RKJPBV14SY1V5BBFNAW33D96YPGZF.BNS-V2",
              "function_name": "list-in-ustx",
              "function_signature": "(define-public (list-in-ustx (id uint) (price uint) (comm-trait trait_reference)))",
              "function_args": [
                  {
                      "hex": "0x010000000000000000000000000001e248",
                      "repr": "u123464",
                      "name": "id",
                      "type": "uint"
                  },
                  {
                      "hex": "0x010000000000000000000000e443ed1ebf",
                      "repr": "u980392156863",
                      "name": "price",
                      "type": "uint"
                  },
                  {
                      "hex": "0x06162bcf9762d5b90bc36dc1b4759b1727690f92ddd31367616d6d612d636f6d6d697373696f6e2d7631",
                      "repr": "'SPNWZ5V2TPWGQGVDR6T7B6RQ4XMGZ4PXTEE0VQ0S.gamma-commission-v1",
                      "name": "comm-trait",
                      "type": "trait_reference"
                  }
              ]
          }
      },
      {
          "tx_id": "0x09e42ffda6108ada4f1c3a3fcf541d04072abf7e0c9e3fd9223602a3bb34e336",
          "nonce": 0,
          "fee_rate": "426",
          "sender_address": "SPB44NKC554NHT2XT83B2DEA39M0F6003Q0EQPP9",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [
              {
                  "principal": {
                      "type_id": "principal_standard",
                      "address": "SPB44NKC554NHT2XT83B2DEA39M0F6003Q0EQPP9"
                  },
                  "condition_code": "sent_equal_to",
                  "amount": "1400000",
                  "type": "stx"
              },
              {
                  "principal": {
                      "type_id": "principal_contract",
                      "address": "SPQC38PW542EQJ5M11CR25P7BS1CA6QT4TBXGB3M",
                      "contract_name": "stableswap-stx-ststx-v-1-2"
                  },
                  "condition_code": "sent_greater_than_or_equal_to",
                  "amount": "1263826",
                  "type": "fungible",
                  "asset": {
                      "asset_name": "ststx",
                      "contract_address": "SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG",
                      "contract_name": "ststx-token"
                  }
              }
          ],
          "anchor_mode": "any",
          "block_hash": "0x5cdfa2ac0c9ba89f06a6a29967280ac78adb839d2befb6b8ed66fb3bf1cdfe67",
          "block_height": 610712,
          "block_time": 1739468086,
          "block_time_iso": "2025-02-13T17:34:46.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 1,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x070100000000000000000000000000141916",
              "repr": "(ok u1317142)"
          },
          "event_count": 4,
          "parent_block_hash": "0x7ba060ea62170aae6338f13632dc1ae326491752786a43cf0b87dd25a8e0293d",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 1174,
          "execution_cost_read_length": 84355,
          "execution_cost_runtime": 21056218,
          "execution_cost_write_count": 5,
          "execution_cost_write_length": 498,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SPQC38PW542EQJ5M11CR25P7BS1CA6QT4TBXGB3M.stableswap-stx-ststx-v-1-2",
              "function_name": "swap-x-for-y",
              "function_signature": "(define-public (swap-x-for-y (y-token trait_reference) (lp-token trait_reference) (x-amount uint) (min-y-amount uint)))",
              "function_args": [
                  {
                      "hex": "0x0616099fb88926d82f30b2f40eaf3ee423cb725bdb3b0b73747374782d746f6b656e",
                      "repr": "'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststx-token",
                      "name": "y-token",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x06162ec1a2dc2904ebc8b408598116c75e42c51afa26187374782d73747374782d6c702d746f6b656e2d762d312d32",
                      "repr": "'SPQC38PW542EQJ5M11CR25P7BS1CA6QT4TBXGB3M.stx-ststx-lp-token-v-1-2",
                      "name": "lp-token",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x0100000000000000000000000000155cc0",
                      "repr": "u1400000",
                      "name": "x-amount",
                      "type": "uint"
                  },
                  {
                      "hex": "0x01000000000000000000000000001348d2",
                      "repr": "u1263826",
                      "name": "min-y-amount",
                      "type": "uint"
                  }
              ]
          }
      },
      {
          "tx_id": "0xc94e7138ef21ef29d41d8e4723df5a829c1a7a95bafe04f8a559aa99671cf7ee",
          "nonce": 15665,
          "fee_rate": "180",
          "sender_address": "SP3SBQ9PZEMBNBAWTR7FRPE3XK0EFW9JWVX4G80S2",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [],
          "anchor_mode": "on_chain_only",
          "block_hash": "0x5cdfa2ac0c9ba89f06a6a29967280ac78adb839d2befb6b8ed66fb3bf1cdfe67",
          "block_height": 610712,
          "block_time": 1739468086,
          "block_time_iso": "2025-02-13T17:34:46.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 0,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 1,
          "parent_block_hash": "0x7ba060ea62170aae6338f13632dc1ae326491752786a43cf0b87dd25a8e0293d",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 0,
          "execution_cost_read_length": 0,
          "execution_cost_runtime": 0,
          "execution_cost_write_count": 0,
          "execution_cost_write_length": 0,
          "events": [],
          "tx_type": "token_transfer",
          "token_transfer": {
              "recipient_address": "SP3XXK8BG5X7CRH7W07RRJK3JZJXJ799WX3Y0SMCR",
              "amount": "1",
              "memo": "0x00000000000000000000000000000000000000000000000000000000000000000000"
          }
      },
      {
          "tx_id": "0xc68c2af0c0da0e48542122e6849e11c93f49d2bebba05cd4647cfafed238c8cf",
          "nonce": 14586,
          "fee_rate": "3000",
          "sender_address": "SP3WMZH4GCH820YP3XHD6GX5TKQ411MHSKPJ9H22R",
          "sponsored": false,
          "post_condition_mode": "allow",
          "post_conditions": [],
          "anchor_mode": "on_chain_only",
          "block_hash": "0x7ba060ea62170aae6338f13632dc1ae326491752786a43cf0b87dd25a8e0293d",
          "block_height": 610711,
          "block_time": 1739468072,
          "block_time_iso": "2025-02-13T17:34:32.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 1,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 12,
          "parent_block_hash": "0x25ccb5f074d1d677d7377c06e868a4f9c0e7d825abe6e2f424bf2807f2a6eb07",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 945,
          "execution_cost_read_length": 1168351,
          "execution_cost_runtime": 3063310,
          "execution_cost_write_count": 75,
          "execution_cost_write_length": 159,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SPGYCP878RYFVT03ZT8TWGPKNYTSQB1578VVXHGE.powerful-farmer",
              "function_name": "execute-both",
              "function_signature": "(define-public (execute-both ))",
              "function_args": []
          }
      },
      {
          "tx_id": "0x65ce35cb7f9775396bfc05b96d6e4e47e0b14f8607267f65c1329a61cbefa7c3",
          "nonce": 271,
          "fee_rate": "271881",
          "sender_address": "SMG15YV7YPTP14MJ1PSC9RJ00FEE53M15W3Q47W2",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [
              {
                  "principal": {
                      "type_id": "principal_standard",
                      "address": "SMG15YV7YPTP14MJ1PSC9RJ00FEE53M15W3Q47W2"
                  },
                  "condition_code": "sent_equal_to",
                  "amount": "1000000000",
                  "type": "fungible",
                  "asset": {
                      "asset_name": "ststx",
                      "contract_address": "SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG",
                      "contract_name": "ststx-token"
                  }
              },
              {
                  "principal": {
                      "type_id": "principal_contract",
                      "address": "SP20X3DC5R091J8B6YPQT638J8NR1W83KN6TN5BJY",
                      "contract_name": "curve-pool-v1_0_0_ststx-0001"
                  },
                  "condition_code": "sent_greater_than_or_equal_to",
                  "amount": "0",
                  "type": "fungible",
                  "asset": {
                      "asset_name": "ststx",
                      "contract_address": "SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG",
                      "contract_name": "ststx-token"
                  }
              },
              {
                  "principal": {
                      "type_id": "principal_contract",
                      "address": "SP20X3DC5R091J8B6YPQT638J8NR1W83KN6TN5BJY",
                      "contract_name": "curve-pool-v1_0_0_ststx-0001"
                  },
                  "condition_code": "sent_greater_than_or_equal_to",
                  "amount": "1013255351",
                  "type": "stx"
              },
              {
                  "principal": {
                      "type_id": "principal_contract",
                      "address": "SP20X3DC5R091J8B6YPQT638J8NR1W83KN6TN5BJY",
                      "contract_name": "curve-pool-v1_0_0_ststx-0001"
                  },
                  "condition_code": "sent_greater_than_or_equal_to",
                  "amount": "0",
                  "type": "stx"
              }
          ],
          "anchor_mode": "any",
          "block_hash": "0x7ba060ea62170aae6338f13632dc1ae326491752786a43cf0b87dd25a8e0293d",
          "block_height": 610711,
          "block_time": 1739468072,
          "block_time_iso": "2025-02-13T17:34:32.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 0,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x07010000000000000000000000003ee7e4cf",
              "repr": "(ok u1055384783)"
          },
          "event_count": 7,
          "parent_block_hash": "0x25ccb5f074d1d677d7377c06e868a4f9c0e7d825abe6e2f424bf2807f2a6eb07",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 57,
          "execution_cost_read_length": 71643,
          "execution_cost_runtime": 2079238,
          "execution_cost_write_count": 6,
          "execution_cost_write_length": 361,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SPQC38PW542EQJ5M11CR25P7BS1CA6QT4TBXGB3M.wrapper-velar-path-v-1-1",
              "function_name": "swap-ststx",
              "function_signature": "(define-public (swap-ststx (amt-in uint) (token-in trait_reference) (token-out trait_reference) (ststx-pool trait_reference) (curve-fees trait_reference) (ststx-proxy trait_reference)))",
              "function_args": [
                  {
                      "hex": "0x010000000000000000000000003b9aca00",
                      "repr": "u1000000000",
                      "name": "amt-in",
                      "type": "uint"
                  },
                  {
                      "hex": "0x0616099fb88926d82f30b2f40eaf3ee423cb725bdb3b0b73747374782d746f6b656e",
                      "repr": "'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststx-token",
                      "name": "token-in",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x06167c5f674a8fd08efa61dd9b11121e046dd2c892730477737478",
                      "repr": "'SP1Y5YSTAHZ88XYK1VPDH24GY0HPX5J4JECTMY4A1.wstx",
                      "name": "token-out",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x061681d1b585c012192166f5afa30d1245701e2073a91c63757276652d706f6f6c2d76315f305f305f73747374782d30303031",
                      "repr": "'SP20X3DC5R091J8B6YPQT638J8NR1W83KN6TN5BJY.curve-pool-v1_0_0_ststx-0001",
                      "name": "ststx-pool",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x061681d1b585c012192166f5afa30d1245701e2073a91c63757276652d666565732d76315f305f305f73747374782d30303031",
                      "repr": "'SP20X3DC5R091J8B6YPQT638J8NR1W83KN6TN5BJY.curve-fees-v1_0_0_ststx-0001",
                      "name": "curve-fees",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x061681d1b585c012192166f5afa30d1245701e2073a91d63757276652d70726f78792d76315f305f305f73747374782d30303031",
                      "repr": "'SP20X3DC5R091J8B6YPQT638J8NR1W83KN6TN5BJY.curve-proxy-v1_0_0_ststx-0001",
                      "name": "ststx-proxy",
                      "type": "trait_reference"
                  }
              ]
          }
      },
      {
          "tx_id": "0xd0a3251f4bd5be8f666d2a8031b19491377bcab822057d0054679fb0b2cba5ad",
          "nonce": 15665,
          "fee_rate": "180",
          "sender_address": "SP3XXK8BG5X7CRH7W07RRJK3JZJXJ799WX3Y0SMCR",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [],
          "anchor_mode": "on_chain_only",
          "block_hash": "0x25ccb5f074d1d677d7377c06e868a4f9c0e7d825abe6e2f424bf2807f2a6eb07",
          "block_height": 610710,
          "block_time": 1739468059,
          "block_time_iso": "2025-02-13T17:34:19.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 0,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 1,
          "parent_block_hash": "0x16175f3d5521a7a5032ed1ee0876c97f97e501f1af49ab6ff17564e12670545d",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 0,
          "execution_cost_read_length": 0,
          "execution_cost_runtime": 0,
          "execution_cost_write_count": 0,
          "execution_cost_write_length": 0,
          "events": [],
          "tx_type": "token_transfer",
          "token_transfer": {
              "recipient_address": "SP3SBQ9PZEMBNBAWTR7FRPE3XK0EFW9JWVX4G80S2",
              "amount": "1",
              "memo": "0x00000000000000000000000000000000000000000000000000000000000000000000"
          }
      },
      {
          "tx_id": "0x6ced99d891b47da2461a34fb9c3df261b9396330dad527860bdfe8cbdd413f1c",
          "nonce": 5,
          "fee_rate": "390",
          "sender_address": "SP1J2D1RXK105NRJP9GHXTHFCJNAGJC6ZP3M11QKG",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [
              {
                  "principal": {
                      "type_id": "principal_standard",
                      "address": "SP1J2D1RXK105NRJP9GHXTHFCJNAGJC6ZP3M11QKG"
                  },
                  "condition_code": "sent_equal_to",
                  "amount": "1448858",
                  "type": "fungible",
                  "asset": {
                      "asset_name": "ststx",
                      "contract_address": "SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG",
                      "contract_name": "ststx-token"
                  }
              }
          ],
          "anchor_mode": "any",
          "block_hash": "0x16175f3d5521a7a5032ed1ee0876c97f97e501f1af49ab6ff17564e12670545d",
          "block_height": 610709,
          "block_time": 1739468046,
          "block_time_iso": "2025-02-13T17:34:06.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 1,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 12,
          "parent_block_hash": "0x2dacbe06d3224f14ba919da12773fb1f5d51583b9d351a4e833da85d1e6bd64d",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 355,
          "execution_cost_read_length": 1952822,
          "execution_cost_runtime": 4308439,
          "execution_cost_write_count": 12,
          "execution_cost_write_length": 3538,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SP2VCQJGH7PHP2DJK7Z0V48AGBHQAW3R3ZW1QF4N.borrow-helper-v2-0-0",
              "function_name": "supply",
              "function_signature": "(define-public (supply (lp trait_reference) (pool-reserve principal) (asset trait_reference) (amount uint) (owner principal) (referral (optional principal))))",
              "function_args": [
                  {
                      "hex": "0x061605b65e5089ed1b09b299fe0d910a82e37570781f0b7a73747374782d76322d30",
                      "repr": "'SP2VCQJGH7PHP2DJK7Z0V48AGBHQAW3R3ZW1QF4N.zststx-v2-0",
                      "name": "lp",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x061605b65e5089ed1b09b299fe0d910a82e37570781f13706f6f6c2d302d726573657276652d76322d30",
                      "repr": "'SP2VCQJGH7PHP2DJK7Z0V48AGBHQAW3R3ZW1QF4N.pool-0-reserve-v2-0",
                      "name": "pool-reserve",
                      "type": "principal"
                  },
                  {
                      "hex": "0x0616099fb88926d82f30b2f40eaf3ee423cb725bdb3b0b73747374782d746f6b656e",
                      "repr": "'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststx-token",
                      "name": "asset",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x0100000000000000000000000000161b9a",
                      "repr": "u1448858",
                      "name": "amount",
                      "type": "uint"
                  },
                  {
                      "hex": "0x05166426871d98405ae2564c23dd45ec95550930dfb0",
                      "repr": "'SP1J2D1RXK105NRJP9GHXTHFCJNAGJC6ZP3M11QKG",
                      "name": "owner",
                      "type": "principal"
                  },
                  {
                      "hex": "0x09",
                      "repr": "none",
                      "name": "referral",
                      "type": "(optional principal)"
                  }
              ]
          }
      },
      {
          "tx_id": "0xb3b856a3c08baf1ea2f6ddf5cc32da703816cc48866a0e022f24f76334a9adb2",
          "nonce": 3,
          "fee_rate": "3000",
          "sender_address": "SP2JFE1FZ90GQ2Z4F9AXAHGDMS8D0J50GKP2F0MDZ",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [],
          "anchor_mode": "any",
          "block_hash": "0x16175f3d5521a7a5032ed1ee0876c97f97e501f1af49ab6ff17564e12670545d",
          "block_height": 610709,
          "block_time": 1739468046,
          "block_time_iso": "2025-02-13T17:34:06.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 0,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x070c0000000401610d0000000c6c6973742d696e2d757374780a636f6d6d697373696f6e06162bcf9762d5b90bc36dc1b4759b1727690f92ddd31367616d6d612d636f6d6d697373696f6e2d7631026964010000000000000000000000000001e8c705707269636501000000000000000000000016d397b647",
              "repr": "(ok (tuple (a \"list-in-ustx\") (commission 'SPNWZ5V2TPWGQGVDR6T7B6RQ4XMGZ4PXTEE0VQ0S.gamma-commission-v1) (id u125127) (price u98039215687)))"
          },
          "event_count": 1,
          "parent_block_hash": "0x2dacbe06d3224f14ba919da12773fb1f5d51583b9d351a4e833da85d1e6bd64d",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 10,
          "execution_cost_read_length": 93541,
          "execution_cost_runtime": 139939,
          "execution_cost_write_count": 1,
          "execution_cost_write_length": 100,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SP2QEZ06AGJ3RKJPBV14SY1V5BBFNAW33D96YPGZF.BNS-V2",
              "function_name": "list-in-ustx",
              "function_signature": "(define-public (list-in-ustx (id uint) (price uint) (comm-trait trait_reference)))",
              "function_args": [
                  {
                      "hex": "0x010000000000000000000000000001e8c7",
                      "repr": "u125127",
                      "name": "id",
                      "type": "uint"
                  },
                  {
                      "hex": "0x01000000000000000000000016d397b647",
                      "repr": "u98039215687",
                      "name": "price",
                      "type": "uint"
                  },
                  {
                      "hex": "0x06162bcf9762d5b90bc36dc1b4759b1727690f92ddd31367616d6d612d636f6d6d697373696f6e2d7631",
                      "repr": "'SPNWZ5V2TPWGQGVDR6T7B6RQ4XMGZ4PXTEE0VQ0S.gamma-commission-v1",
                      "name": "comm-trait",
                      "type": "trait_reference"
                  }
              ]
          }
      },
      {
          "tx_id": "0x8c7354e2cc7e0ef1a14d70c3dc9818c8cb758f155c0b71fdc5cbb6e0831e5599",
          "nonce": 264,
          "fee_rate": "307",
          "sender_address": "SP12R1YBVRXPNY44RWHYWPG522GVSGXTV8WH803BM",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [
              {
                  "principal": {
                      "type_id": "principal_standard",
                      "address": "SP12R1YBVRXPNY44RWHYWPG522GVSGXTV8WH803BM"
                  },
                  "condition_code": "sent_equal_to",
                  "amount": "60540",
                  "type": "fungible",
                  "asset": {
                      "asset_name": "bridged-btc",
                      "contract_address": "SP2XD7417HGPRTREMKF748VNEQPDRR0RMANB7X1NK",
                      "contract_name": "token-abtc"
                  }
              }
          ],
          "anchor_mode": "any",
          "block_hash": "0x2dacbe06d3224f14ba919da12773fb1f5d51583b9d351a4e833da85d1e6bd64d",
          "block_height": 610708,
          "block_time": 1739468032,
          "block_time_iso": "2025-02-13T17:33:52.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 3,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x070100000000000000000000000000000b55",
              "repr": "(ok u2901)"
          },
          "event_count": 2,
          "parent_block_hash": "0x11349a78968baf37a5f992be6ac055a427e5b00e19d39a48dd9ce2fb27330bf2",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 26,
          "execution_cost_read_length": 19363,
          "execution_cost_runtime": 81657,
          "execution_cost_write_count": 4,
          "execution_cost_write_length": 364,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SP2XD7417HGPRTREMKF748VNEQPDRR0RMANB7X1NK.btc-peg-out-endpoint-v2-01",
              "function_name": "request-peg-out-0",
              "function_signature": "(define-public (request-peg-out-0 (peg-out-address (buff 128)) (amount uint)))",
              "function_args": [
                  {
                      "hex": "0x0200000017a91456029a596417d62d59c1f8e0c7e2def6d11a835287",
                      "repr": "0xa91456029a596417d62d59c1f8e0c7e2def6d11a835287",
                      "name": "peg-out-address",
                      "type": "(buff 128)"
                  },
                  {
                      "hex": "0x010000000000000000000000000000ec7c",
                      "repr": "u60540",
                      "name": "amount",
                      "type": "uint"
                  }
              ]
          }
      },
      {
          "tx_id": "0x1ce180df27e4a952b7d313a391bc25e62b2adb47973f2ea519d33e79d02f28f8",
          "nonce": 15664,
          "fee_rate": "180",
          "sender_address": "SP3SBQ9PZEMBNBAWTR7FRPE3XK0EFW9JWVX4G80S2",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [],
          "anchor_mode": "on_chain_only",
          "block_hash": "0x2dacbe06d3224f14ba919da12773fb1f5d51583b9d351a4e833da85d1e6bd64d",
          "block_height": 610708,
          "block_time": 1739468032,
          "block_time_iso": "2025-02-13T17:33:52.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 2,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 1,
          "parent_block_hash": "0x11349a78968baf37a5f992be6ac055a427e5b00e19d39a48dd9ce2fb27330bf2",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 0,
          "execution_cost_read_length": 0,
          "execution_cost_runtime": 0,
          "execution_cost_write_count": 0,
          "execution_cost_write_length": 0,
          "events": [],
          "tx_type": "token_transfer",
          "token_transfer": {
              "recipient_address": "SP3XXK8BG5X7CRH7W07RRJK3JZJXJ799WX3Y0SMCR",
              "amount": "1",
              "memo": "0x00000000000000000000000000000000000000000000000000000000000000000000"
          }
      },
      {
          "tx_id": "0x625aae673d6a0f9d32a83383b53f4914aaf989eff1ba6c64b46e9262445856bc",
          "nonce": 51,
          "fee_rate": "298",
          "sender_address": "SP30YXRTQ4GJE64RDWY8K5ZN38C8W24PG6VP8B093",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [
              {
                  "principal": {
                      "type_id": "principal_standard",
                      "address": "SP30YXRTQ4GJE64RDWY8K5ZN38C8W24PG6VP8B093"
                  },
                  "condition_code": "sent_equal_to",
                  "amount": "200000000",
                  "type": "fungible",
                  "asset": {
                      "asset_name": "usdh",
                      "contract_address": "SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG",
                      "contract_name": "usdh-token-v1"
                  }
              }
          ],
          "anchor_mode": "any",
          "block_hash": "0x2dacbe06d3224f14ba919da12773fb1f5d51583b9d351a4e833da85d1e6bd64d",
          "block_height": 610708,
          "block_time": 1739468032,
          "block_time_iso": "2025-02-13T17:33:52.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 1,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 3,
          "parent_block_hash": "0x11349a78968baf37a5f992be6ac055a427e5b00e19d39a48dd9ce2fb27330bf2",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 7,
          "execution_cost_read_length": 3707,
          "execution_cost_runtime": 24458,
          "execution_cost_write_count": 2,
          "execution_cost_write_length": 1,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG.usdh-token-v1",
              "function_name": "transfer",
              "function_signature": "(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34)))))",
              "function_args": [
                  {
                      "hex": "0x010000000000000000000000000bebc200",
                      "repr": "u200000000",
                      "name": "amount",
                      "type": "uint"
                  },
                  {
                      "hex": "0x0516c1eee3572424e3130de79132fea34311c112d036",
                      "repr": "'SP30YXRTQ4GJE64RDWY8K5ZN38C8W24PG6VP8B093",
                      "name": "sender",
                      "type": "principal"
                  },
                  {
                      "hex": "0x051679944056d24287a0ef2611636f2e8c386168839d",
                      "repr": "'SP1WS8G2PT918F87F4R8P6VSEHGW62T43KP6TPG6E",
                      "name": "recipient",
                      "type": "principal"
                  },
                  {
                      "hex": "0x09",
                      "repr": "none",
                      "name": "memo",
                      "type": "(optional (buff 34))"
                  }
              ]
          }
      },
      {
          "tx_id": "0xb6db03f3acd193d4ee170d3911be9101c8b2efb7a475e822a9539906d6a2c790",
          "nonce": 2022,
          "fee_rate": "10000",
          "sender_address": "SP2EQP7X0WCJ70ZMQYGPXAD0S9T76JH1CDZMEMQES",
          "sponsored": false,
          "post_condition_mode": "allow",
          "post_conditions": [],
          "anchor_mode": "any",
          "block_hash": "0x2dacbe06d3224f14ba919da12773fb1f5d51583b9d351a4e833da85d1e6bd64d",
          "block_height": 610708,
          "block_time": 1739468032,
          "block_time_iso": "2025-02-13T17:33:52.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 0,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 1,
          "parent_block_hash": "0x11349a78968baf37a5f992be6ac055a427e5b00e19d39a48dd9ce2fb27330bf2",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 34,
          "execution_cost_read_length": 33333,
          "execution_cost_runtime": 86000,
          "execution_cost_write_count": 4,
          "execution_cost_write_length": 55,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SP1Y5YSTAHZ88XYK1VPDH24GY0HPX5J4JECTMY4A1.farming-send",
              "function_name": "send",
              "function_signature": "(define-public (send (token trait_reference) (amt uint) (to trait_reference)))",
              "function_args": [
                  {
                      "hex": "0x061668acd1e30371824db82ea04c7dcedc573c87fd260f6d726265616e732d73747863697479",
                      "repr": "'SP1MASMF30DRR4KDR5TG4RZEEVHBKS1ZX4TJZ8P06.mrbeans-stxcity",
                      "name": "token",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x0100000000000000000000000cc1db9200",
                      "repr": "u54792000000",
                      "name": "amt",
                      "type": "uint"
                  },
                  {
                      "hex": "0x061681d1b585c012192166f5afa30d1245701e2073a927756e6976322d6661726d696e672d6469737472696275746f722d312d76315f315f312d30303330",
                      "repr": "'SP20X3DC5R091J8B6YPQT638J8NR1W83KN6TN5BJY.univ2-farming-distributor-1-v1_1_1-0030",
                      "name": "to",
                      "type": "trait_reference"
                  }
              ]
          }
      },
      {
          "tx_id": "0x0f582c9d28b8f6f7b6b145c7560e0bab767aeea24a51a3ae997e31c431d5c7c2",
          "nonce": 17887,
          "fee_rate": "276",
          "sender_address": "SP3CTX8Z61CBR2E8FMFV4895EHJ2N5SMVVDVSEZYS",
          "sponsored": false,
          "post_condition_mode": "allow",
          "post_conditions": [],
          "anchor_mode": "any",
          "block_hash": "0x11349a78968baf37a5f992be6ac055a427e5b00e19d39a48dd9ce2fb27330bf2",
          "block_height": 610707,
          "block_time": 1739468016,
          "block_time_iso": "2025-02-13T17:33:36.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 4,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 0,
          "parent_block_hash": "0x69ad2a04f07ddce42f74952921e55a5f547bd9a01ae0b22474e600510c105295",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 63,
          "execution_cost_read_length": 104323,
          "execution_cost_runtime": 345848,
          "execution_cost_write_count": 2,
          "execution_cost_write_length": 380,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SP1Z92MPDQEWZXW36VX71Q25HKF5K2EPCJ304F275.farming-v3b-logic",
              "function_name": "updateCurrentRoundStatus",
              "function_signature": "(define-public (updateCurrentRoundStatus (pool trait_reference) (oracle trait_reference)))",
              "function_args": [
                  {
                      "hex": "0x06167e9152cdbbb9fef066df4e1b88b19bcb313acc901b6c69717569646974792d746f6b656e2d76356b757039663332636b",
                      "repr": "'SP1Z92MPDQEWZXW36VX71Q25HKF5K2EPCJ304F275.liquidity-token-v5kup9f32ck",
                      "name": "pool",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x06167e9152cdbbb9fef066df4e1b88b19bcb313acc9013737461636b7761702d6f7261636c652d763163",
                      "repr": "'SP1Z92MPDQEWZXW36VX71Q25HKF5K2EPCJ304F275.stackwap-oracle-v1c",
                      "name": "oracle",
                      "type": "trait_reference"
                  }
              ]
          }
      },
      {
          "tx_id": "0x52bc0d943d3221970e05e55712df6b8ad79b5eae13b1bfc996baf899b639e0ff",
          "nonce": 17886,
          "fee_rate": "276",
          "sender_address": "SP3CTX8Z61CBR2E8FMFV4895EHJ2N5SMVVDVSEZYS",
          "sponsored": false,
          "post_condition_mode": "allow",
          "post_conditions": [],
          "anchor_mode": "any",
          "block_hash": "0x11349a78968baf37a5f992be6ac055a427e5b00e19d39a48dd9ce2fb27330bf2",
          "block_height": 610707,
          "block_time": 1739468016,
          "block_time_iso": "2025-02-13T17:33:36.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 3,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 0,
          "parent_block_hash": "0x69ad2a04f07ddce42f74952921e55a5f547bd9a01ae0b22474e600510c105295",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 63,
          "execution_cost_read_length": 104314,
          "execution_cost_runtime": 345799,
          "execution_cost_write_count": 2,
          "execution_cost_write_length": 380,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SP1Z92MPDQEWZXW36VX71Q25HKF5K2EPCJ304F275.farming-v3b-logic",
              "function_name": "updateCurrentRoundStatus",
              "function_signature": "(define-public (updateCurrentRoundStatus (pool trait_reference) (oracle trait_reference)))",
              "function_args": [
                  {
                      "hex": "0x06167e9152cdbbb9fef066df4e1b88b19bcb313acc901b6c69717569646974792d746f6b656e2d76356b626f796e32373733",
                      "repr": "'SP1Z92MPDQEWZXW36VX71Q25HKF5K2EPCJ304F275.liquidity-token-v5kboyn2773",
                      "name": "pool",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x06167e9152cdbbb9fef066df4e1b88b19bcb313acc9013737461636b7761702d6f7261636c652d763163",
                      "repr": "'SP1Z92MPDQEWZXW36VX71Q25HKF5K2EPCJ304F275.stackwap-oracle-v1c",
                      "name": "oracle",
                      "type": "trait_reference"
                  }
              ]
          }
      },
      {
          "tx_id": "0xd8be31eea82c8b078e497d8c8dee0b7228a6f8903731489dbdc6d705454b8833",
          "nonce": 36,
          "fee_rate": "73126",
          "sender_address": "SP2XGT4XMKGB6DBN6FGZAVAXHBQT18F3G3WJ4TTTW",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [
              {
                  "principal": {
                      "type_id": "principal_standard",
                      "address": "SP2XGT4XMKGB6DBN6FGZAVAXHBQT18F3G3WJ4TTTW"
                  },
                  "condition_code": "sent_equal_to",
                  "amount": "5000000",
                  "type": "stx"
              },
              {
                  "principal": {
                      "type_id": "principal_contract",
                      "address": "SPQC38PW542EQJ5M11CR25P7BS1CA6QT4TBXGB3M",
                      "contract_name": "stableswap-stx-ststx-v-1-2"
                  },
                  "condition_code": "sent_greater_than_or_equal_to",
                  "amount": "4513661",
                  "type": "fungible",
                  "asset": {
                      "asset_name": "ststx",
                      "contract_address": "SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG",
                      "contract_name": "ststx-token"
                  }
              }
          ],
          "anchor_mode": "any",
          "block_hash": "0x11349a78968baf37a5f992be6ac055a427e5b00e19d39a48dd9ce2fb27330bf2",
          "block_height": 610707,
          "block_time": 1739468016,
          "block_time_iso": "2025-02-13T17:33:36.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 2,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x07010000000000000000000000000047c753",
              "repr": "(ok u4704083)"
          },
          "event_count": 4,
          "parent_block_hash": "0x69ad2a04f07ddce42f74952921e55a5f547bd9a01ae0b22474e600510c105295",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 1174,
          "execution_cost_read_length": 84355,
          "execution_cost_runtime": 21056218,
          "execution_cost_write_count": 5,
          "execution_cost_write_length": 498,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SPQC38PW542EQJ5M11CR25P7BS1CA6QT4TBXGB3M.stableswap-stx-ststx-v-1-2",
              "function_name": "swap-x-for-y",
              "function_signature": "(define-public (swap-x-for-y (y-token trait_reference) (lp-token trait_reference) (x-amount uint) (min-y-amount uint)))",
              "function_args": [
                  {
                      "hex": "0x0616099fb88926d82f30b2f40eaf3ee423cb725bdb3b0b73747374782d746f6b656e",
                      "repr": "'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststx-token",
                      "name": "y-token",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x06162ec1a2dc2904ebc8b408598116c75e42c51afa26187374782d73747374782d6c702d746f6b656e2d762d312d32",
                      "repr": "'SPQC38PW542EQJ5M11CR25P7BS1CA6QT4TBXGB3M.stx-ststx-lp-token-v-1-2",
                      "name": "lp-token",
                      "type": "trait_reference"
                  },
                  {
                      "hex": "0x01000000000000000000000000004c4b40",
                      "repr": "u5000000",
                      "name": "x-amount",
                      "type": "uint"
                  },
                  {
                      "hex": "0x010000000000000000000000000044df7d",
                      "repr": "u4513661",
                      "name": "min-y-amount",
                      "type": "uint"
                  }
              ]
          }
      },
      {
          "tx_id": "0x2976079f70e7d7332927dd887cdc1e137051dce32959074da5c9c37efd0a5074",
          "nonce": 3,
          "fee_rate": "3000",
          "sender_address": "SP3446XZWYD3YAYC029K6S7DFR11NPTHE5R96PBY0",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [],
          "anchor_mode": "any",
          "block_hash": "0x11349a78968baf37a5f992be6ac055a427e5b00e19d39a48dd9ce2fb27330bf2",
          "block_height": 610707,
          "block_time": 1739468016,
          "block_time_iso": "2025-02-13T17:33:36.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 1,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x070c0000000401610d0000000c6c6973742d696e2d757374780a636f6d6d697373696f6e06162bcf9762d5b90bc36dc1b4759b1727690f92ddd31367616d6d612d636f6d6d697373696f6e2d76310269640100000000000000000000000000011a06057072696365010000000000000000000000223d63916a",
              "repr": "(ok (tuple (a \"list-in-ustx\") (commission 'SPNWZ5V2TPWGQGVDR6T7B6RQ4XMGZ4PXTEE0VQ0S.gamma-commission-v1) (id u72198) (price u147058823530)))"
          },
          "event_count": 1,
          "parent_block_hash": "0x69ad2a04f07ddce42f74952921e55a5f547bd9a01ae0b22474e600510c105295",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 10,
          "execution_cost_read_length": 93543,
          "execution_cost_runtime": 139941,
          "execution_cost_write_count": 1,
          "execution_cost_write_length": 100,
          "events": [],
          "tx_type": "contract_call",
          "contract_call": {
              "contract_id": "SP2QEZ06AGJ3RKJPBV14SY1V5BBFNAW33D96YPGZF.BNS-V2",
              "function_name": "list-in-ustx",
              "function_signature": "(define-public (list-in-ustx (id uint) (price uint) (comm-trait trait_reference)))",
              "function_args": [
                  {
                      "hex": "0x0100000000000000000000000000011a06",
                      "repr": "u72198",
                      "name": "id",
                      "type": "uint"
                  },
                  {
                      "hex": "0x010000000000000000000000223d63916a",
                      "repr": "u147058823530",
                      "name": "price",
                      "type": "uint"
                  },
                  {
                      "hex": "0x06162bcf9762d5b90bc36dc1b4759b1727690f92ddd31367616d6d612d636f6d6d697373696f6e2d7631",
                      "repr": "'SPNWZ5V2TPWGQGVDR6T7B6RQ4XMGZ4PXTEE0VQ0S.gamma-commission-v1",
                      "name": "comm-trait",
                      "type": "trait_reference"
                  }
              ]
          }
      },
      {
          "tx_id": "0x47b3a37dd9d72077a23b8d8305a1182701f10cd57e32a39d41d5fbf74ad8be18",
          "nonce": 8965,
          "fee_rate": "0",
          "sender_address": "SP2GFTC849NTM5ZC1PVBFHG3MMFYHR5RMYS4TEJGH",
          "sponsored": false,
          "post_condition_mode": "deny",
          "post_conditions": [],
          "anchor_mode": "on_chain_only",
          "block_hash": "0x11349a78968baf37a5f992be6ac055a427e5b00e19d39a48dd9ce2fb27330bf2",
          "block_height": 610707,
          "block_time": 1739468016,
          "block_time_iso": "2025-02-13T17:33:36.000Z",
          "burn_block_time": 1739467681,
          "burn_block_height": 883606,
          "burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "parent_burn_block_time": 1739467681,
          "parent_burn_block_time_iso": "2025-02-13T17:28:01.000Z",
          "canonical": true,
          "tx_index": 0,
          "tx_status": "success",
          "tx_result": {
              "hex": "0x0703",
              "repr": "(ok true)"
          },
          "event_count": 0,
          "parent_block_hash": "0x69ad2a04f07ddce42f74952921e55a5f547bd9a01ae0b22474e600510c105295",
          "is_unanchored": false,
          "microblock_hash": "0x",
          "microblock_sequence": 2147483647,
          "microblock_canonical": true,
          "execution_cost_read_count": 0,
          "execution_cost_read_length": 0,
          "execution_cost_runtime": 0,
          "execution_cost_write_count": 0,
          "execution_cost_write_length": 0,
          "events": [],
          "tx_type": "tenure_change",
          "tenure_change_payload": {
              "tenure_consensus_hash": "0xa6c8700648204f7fcd73ca6eba13270bae14be5a",
              "prev_tenure_consensus_hash": "0xa6c8700648204f7fcd73ca6eba13270bae14be5a",
              "burn_view_consensus_hash": "0xa6c8700648204f7fcd73ca6eba13270bae14be5a",
              "previous_tenure_end": "0x90e95168d928d41ea73efe9c211daddf438776f19cddc924656dd527c7ecf22b",
              "previous_tenure_blocks": 17,
              "cause": "extended",
              "pubkey_hash": "0xa0fd31044d7542fd81b6d6f8c074a3fd1c1714f6"
          }
      }
  ]
}