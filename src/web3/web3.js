var Web3 = require("web3")

var version = require("./version.json")
var SS = require("./methods/ss.js")
var Net = require("./methods/net.js")
var HttpProvider = require("./httpprovider")

var MyWeb3 = function(provider) {
  Web3.call(this, provider)

  this.ss = new SS(this)
  this.ss.version = version.version

  this.net = new Net(this)

  delete this.eth
}

MyWeb3.providers = Web3.providers
MyWeb3.providers.HttpProvider = HttpProvider

MyWeb3.prototype = Object.create(Web3.prototype)
MyWeb3.prototype.constructor = MyWeb3

module.exports = MyWeb3
