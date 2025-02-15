# web3.ss

The `web3.ss` contains the SecondState blockchain related methods. Refer to Ethereum's [web3.eth](https://github.com/ethereum/wiki/wiki/JavaScript-API#web3eth) for detailed information.

---

## web3.ss.syncing

```js
web3.ss.syncing
// or async
web3.ss.getSyncing(callback(error, result){ ... })
```

This property is read only and returns the sync object. JSON RPC method: [ss_syncing].

### Returns

- Object - A sync object as follows:

  - latest_block_hash: Number - The hash of the latest block.
  - latest_app_hash: Number - The hash of latest application state.
  - latest_block_height: Number - The latest block number.
  - latest_block_time: Number - The latest block time.
  - syncing: Boolean - Whether the node is syncing or not.

### Example

```js
var sync = web3.ss.syncing
console.log(sync)
/*
{
  latest_block_hash: '3F84EF726F19DF528620DD745FC6C2251CAE2673',
  latest_app_hash: '64BA27DCACAB23EBF4CF7ACE3604285F66739226',
  latest_block_height: 635,
  latest_block_time: '2018-06-20T08:01:31.061402192Z',
  syncing: false
}
*/
```

---

## web3.ss.getSSBlock

```js
web3.ss.getSSBlock(blockNumber [, callback])
```

Returns a block matching the block number. JSON RPC method: [ss_getBlockByNumber].

#### Parameters

- `blockNumber`: `Number` - The block number.
- `callback`: `Function` - (optional) If you pass a callback the HTTP request is made asynchronous. See [this note](https://github.com/ethereum/wiki/wiki/JavaScript-API#using-callbacks) for details.

### Returns

- Object - The block object

### Example

```js
var block = web3.ss.getSSBlock(78)
console.log(block)
/*
{
  block: {
    data: {
      txs: ["+G0BhHc1lACDAV+QlFtioeBKJ5lir0kGiveMeoVqmrCyiTY1ya3F3qAAAIBKoGOOykLYMRqQhWdQYTpV2/RbrJTk/qKIrCTGpk/ynb8QoA94Eh4xyCJqISSKZ8o1p7sG9sSygewRAqL9vm23Vc+Y", "+KkChHc1lACDAV+QlLaynvkBIL7Fl5OeDtpripFk913rgLhEqQWcuwAAAAAAAAAAAAAAAFtioeBKJ5lir0kGiveMeoVqmrCyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2Ncmtxd6gAABKoN4cREt393BKAcfMd5dbZFkB7EBxDZxXvxyU2+PX1cF8oHmTcrOusclRLWM/J5A21Av12fhZ8mkRlbor1i2UthWv"]
    },
    evidence: {
      evidence: null
    },
    header: {
      app_hash: "238921D04565CCE1B2F80649CDB9D8AB7BDCB4A1",
      chain_id: "testnet",
      consensus_hash: "D6B74BB35BDFFD8392340F2A379173548AE188FE",
      data_hash: "D120672BFD507D2EE2BD93F7283B834C8E0087A4",
      evidence_hash: "",
      height: 78,
      last_block_id: {
        hash: "827171AE763A84C374E23F053AB3F33A1013CA64",
        parts: {...}
      },
      last_commit_hash: "902C280EC13022A9AE529D48B1758A88CD77C57A",
      last_results_hash: "",
      num_txs: 2,
      time: "2018-08-23T09:18:02.28584833Z",
      total_txs: 3,
      validators_hash: "7A5B285BB43C501B6A96C4885DF07C909AA55961"
    },
    last_commit: {
      block_id: {
        hash: "827171AE763A84C374E23F053AB3F33A1013CA64",
        parts: {...}
      },
      precommits: [{...}, {...}, {...}, {...}, {...}, {...}, {...}]
    }
  },
  block_meta: {
    block_id: {
      hash: "B9FBEF27950A1F2D769C30B2E589715B9CB11270",
      parts: {
        hash: "74865AE76C750B876D334091D67D7A1473EB87F2",
        total: 1
      }
    },
    header: {
      app_hash: "238921D04565CCE1B2F80649CDB9D8AB7BDCB4A1",
      chain_id: "testnet",
      consensus_hash: "D6B74BB35BDFFD8392340F2A379173548AE188FE",
      data_hash: "D120672BFD507D2EE2BD93F7283B834C8E0087A4",
      evidence_hash: "",
      height: 78,
      last_block_id: {
        hash: "827171AE763A84C374E23F053AB3F33A1013CA64",
        parts: {...}
      },
      last_commit_hash: "902C280EC13022A9AE529D48B1758A88CD77C57A",
      last_results_hash: "",
      num_txs: 2,
      time: "2018-08-23T09:18:02.28584833Z",
      total_txs: 3,
      validators_hash: "7A5B285BB43C501B6A96C4885DF07C909AA55961"
    }
  }
}
*/
```

---

## web3.ss.getSSTransaction

```js
web3.ss.getSSTransaction(transactionHash [, callback])
```

Returns a transaction matching the given transaction hash. JSON RPC method: [ss_getTransactionByHash].

#### Parameters

- `transactionHash`: `Number` - The transaction hash.
- `callback`: `Function` - (optional) If you pass a callback the HTTP request is made asynchronous. See [this note](https://github.com/ethereum/wiki/wiki/JavaScript-API#using-callbacks) for details.

### Returns

- Object - The transaction object.

### Example

```js
// eth compatible transaction
var transaction = web3.ss.getSSTransaction("A3C6073BE1BE0E52B1333F467CF2FD23E96028C5")
console.log(transaction)
/*
{
  blockNumber: 78,
  ssHash: "A3C6073BE1BE0E52B1333F467CF2FD23E96028C5",
  ssInput: null,
  from: "0x7eff122b94897ea5b0e2a9abf47b86337fafebdc",
  gas: 90000,
  gasPrice: 2000000000,
  hash: "0x15e40d808bb7dfe73477482a48818424ad8145dbf98f8c33d21265d7d853de58",
  input: "0x",
  nonce: 1,
  r: "0x638eca42d8311a90856750613a55dbf45bac94e4fea288ac24c6a64ff29dbf10",
  s: "0xf78121e31c8226a21248a67ca35a7bb06f6c4b281ec1102a2fdbe6db755cf98",
  to: "0x5b62a1e04a279962af49068af78c7a856a9ab0b2",
  transactionIndex: 0,
  txResult: {
    fee: {}
  },
  v: "0x4a",
  value: 1e+21
}
*/

// ss transaction
var transaction = web3.ss.getSSTransaction("E577068933111104EB5FA7927648A231FFFB96C6")
console.log(transaction)
/*
{
  blockNumber: 7086,
  ssHash: "E577068933111104EB5FA7927648A231FFFB96C6",
  ssInput: {
    data: {
      description: {
        email: "sample@secondstate.io",
        location: "CN,ASIA",
        name: "Sample",
        profile: "Donec rutrum congue leo eget malesuada. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.",
        website: "https://sample.secondstate.io"
      },
      max_amount: ""
    },
    type: "stake/updateCandidacy"
  },
  from: "0x7eff122b94897ea5b0e2a9abf47b86337fafebdc",
  gas: 0,
  gasPrice: 0,
  hash: "0x8075e5d05723a928fdbbc9f080dba2dac482f747405ed544d844b2b3220a32a0",
  input: "0x7b2274797065223a227374616b652f75706461746543616e646964616379222c2264617461223a7b226d61785f616d6f756e74223a22222c226465736372697074696f6e223a7b226e616d65223a224161726f6e222c2277656273697465223a2268747470733a2f2f637562652d6170692d746573742e63796265726d696c65732e696f222c226c6f636174696f6e223a22434e2c41534941222c22656d61696c223a226161726f6e40776573706f6b652e636f6d222c2270726f66696c65223a22446f6e65632072757472756d20636f6e677565206c656f2065676574206d616c6573756164612e20446f6e65632072757472756d20636f6e677565206c656f2065676574206d616c6573756164612e204e756c6c612071756973206c6f72656d207574206c696265726f206d616c65737561646120666575676961742e20446f6e656320736f6c6c696369747564696e206d6f6c6573746965206d616c6573756164612e204c6f72656d20697073756d20646f6c6f722073697420616d65742c20636f6e73656374657475722061646970697363696e6720656c69742e2050726f696e206567657420746f72746f722072697375732e227d7d7d",
  nonce: 51,
  r: "0x82be6e5a25e1d58ff3bdd7649be5295fce1852ef4404c8848ffda9e528d7fc68",
  s: "0x1746427b7fb25ebce685e47b87a47c680cd27c88c974d29ca3a612cd2a959bb7",
  to: null,
  transactionIndex: 0,
  txResult: {
    fee: {
      key: "R2FzRmVl",
      value: "2000000000000000"
    },
    gasUsed: "1000000"
  },
  v: "0x4a",
  value: 0
}
*/
```

---

## web3.ss.getSSTransactionFromBlock

```js
web3.ss.getSSTransactionFromBlock(blockNumber, indexNumber [, callback])
```

Returns a transaction based on a block hash or number and the transactions index position. JSON RPC method: [ss_getTransactionFromBlock].

#### Parameters

- `blockNumber`: `Number` - The block number.
- `indexNumber`: `Number` - The transactions index position.
- `callback`: `Function` - (optional) If you pass a callback the HTTP request is made asynchronous. See [this note](https://github.com/ethereum/wiki/wiki/JavaScript-API#using-callbacks) for details.

### Returns

- Object - The transaction object.

### Example

```js
// eth compatible transaction
var transaction = web3.ss.getSSTransactionFromBlock(78, 0)
console.log(transaction)
/*
{
  blockNumber: 78,
  ssHash: "A3C6073BE1BE0E52B1333F467CF2FD23E96028C5",
  ssInput: null,
  from: "0x7eff122b94897ea5b0e2a9abf47b86337fafebdc",
  gas: 90000,
  gasPrice: 2000000000,
  hash: "0x15e40d808bb7dfe73477482a48818424ad8145dbf98f8c33d21265d7d853de58",
  input: "0x",
  nonce: 1,
  r: "0x638eca42d8311a90856750613a55dbf45bac94e4fea288ac24c6a64ff29dbf10",
  s: "0xf78121e31c8226a21248a67ca35a7bb06f6c4b281ec1102a2fdbe6db755cf98",
  to: "0x5b62a1e04a279962af49068af78c7a856a9ab0b2",
  transactionIndex: 0,
  txResult: {
    fee: {}
  },
  v: "0x4a",
  value: 1e+21
}
*/

// ss transaction
var transaction = web3.ss.getSSTransactionFromBlock(7086, 0)
console.log(transaction)
/*
{
  blockNumber: 7086,
  ssHash: "E577068933111104EB5FA7927648A231FFFB96C6",
  ssInput: {
    data: {
      description: {
        email: "sample@secondstate.io",
        location: "CN,ASIA",
        name: "Sample",
        profile: "Donec rutrum congue leo eget malesuada. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.",
        website: "https://sample.secondstate.io"
      },
      max_amount: ""
    },
    type: "stake/updateCandidacy"
  },
  from: "0x7eff122b94897ea5b0e2a9abf47b86337fafebdc",
  gas: 0,
  gasPrice: 0,
  hash: "0x8075e5d05723a928fdbbc9f080dba2dac482f747405ed544d844b2b3220a32a0",
  input: "0x7b2274797065223a227374616b652f75706461746543616e646964616379222c2264617461223a7b226d61785f616d6f756e74223a22222c226465736372697074696f6e223a7b226e616d65223a224161726f6e222c2277656273697465223a2268747470733a2f2f637562652d6170692d746573742e63796265726d696c65732e696f222c226c6f636174696f6e223a22434e2c41534941222c22656d61696c223a226161726f6e40776573706f6b652e636f6d222c2270726f66696c65223a22446f6e65632072757472756d20636f6e677565206c656f2065676574206d616c6573756164612e20446f6e65632072757472756d20636f6e677565206c656f2065676574206d616c6573756164612e204e756c6c612071756973206c6f72656d207574206c696265726f206d616c65737561646120666575676961742e20446f6e656320736f6c6c696369747564696e206d6f6c6573746965206d616c6573756164612e204c6f72656d20697073756d20646f6c6f722073697420616d65742c20636f6e73656374657475722061646970697363696e6720656c69742e2050726f696e206567657420746f72746f722072697375732e227d7d7d",
  nonce: 51,
  r: "0x82be6e5a25e1d58ff3bdd7649be5295fce1852ef4404c8848ffda9e528d7fc68",
  s: "0x1746427b7fb25ebce685e47b87a47c680cd27c88c974d29ca3a612cd2a959bb7",
  to: null,
  transactionIndex: 0,
  txResult: {
    fee: {
      key: "R2FzRmVl",
      value: "2000000000000000"
    },
    gasUsed: "1000000"
  },
  v: "0x4a",
  value: 0
}
*/
```

---

## web3.ss.pendingTransactionCount

```js
web3.ss.pendingTransactionCount
// or async
web3.ss.getPendingTransactionCount(callback(error, result){ ... })
```

This property is read only and returns the number of unconfirmed transactions in the mempool. JSON RPC method: [ss_pendingTransactionCount].

### Returns

- Number - The number of unconfirmed transactions in the mempool.

### Example

```js
var count = web3.ss.pendingTransactionCount
console.log(count)
/*
1
*/
```

---

## web3.ss.getPendingTransactions

```js
web3.ss.getPendingTransactions([limit], [callback])
```

Get unconfirmed transactions in the mempool. JSON RPC method: [ss_getPendingTransactions].

#### Parameters

- `limit`: `Number` - (optional) The maximum number of transactions returned in the response body. Default: 30, maximum: 100.
- `callback`: `Function` - (optional) If you pass a callback the HTTP request is made asynchronous. See [this note](https://github.com/ethereum/wiki/wiki/JavaScript-API#using-callbacks)

### Returns

- Object - An array of unconfirmed transaction objects in the mempool.

### Example

```js
var txs = web3.ss.getPendingTransactions()
console.log(JSON.stringify(txs, null, 2))
/*
[
  {
    "blockNumber": 0,
    "from": "0x7eff122b94897ea5b0e2a9abf47b86337fafebdc",
    "gas": 90000,
    "gasPrice": "0",
    "hash": "0x1d58d5d58f9432b52bab593da7d83e3fa2aaf309879ac7693744f3bbaf90aa46",
    "ssHash": "",
    "input": "0x",
    "ssInput": null,
    "nonce": 10,
    "to": "0x38d7b32e7b5056b297baf1a1e950abbaa19ce948",
    "transactionIndex": 0,
    "value": "62437500000000000000",
    "v": "0x9c8",
    "r": "0x1893ac16bd96f64ab8d6eceae7c2d48287700747e33d9f2ed6846afa86e5d47b",
    "s": "0x78df5b10d4388f7f64e73a3d42f16af03525d240d7b9821b38d7ec79736c9536",
    "txResult": {
      "fee": {}
    }
  }
]
*/
```
