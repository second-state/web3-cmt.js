# SecondState Javascript API

[![Build Status](https://travis-ci.org/second-state/web3-ss.js.svg?branch=master)](https://travis-ci.org/second-state/web3-ss.js)

## Requirement

- node `^8.0.0`
- yarn `^1.0.0` or npm `^5.0.0`

## Installation

```bash
yarn add web3-ss  # or npm install web3-ss
```

## Package linking (for development only)

```bash
# get latest version of web3-ss.js
git clone https://github.com/second-state/web3-ss.js /path_to/web3-ss.js
cd /path_to/web3-ss.js
git checkout master
yarn install    # (or `npm install`)

# prepare for web3-ss package linking
yarn link       # (or `npm link`)

# goes to directory of your project
cd /path_to/your_project

# link to local version of web3-ss package
yarn link "web3-ss"  # (or `npm link "web3-ss"`)
```

[Documentation](https://second-state.github.io/web3-ss.js/api/)
