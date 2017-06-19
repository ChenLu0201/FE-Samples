#!/bin/sh
export PATH=$PATH:/Users/luchen/.nvm/versions/node/v7.8.0/bin
yarn install
yarn lint && yarn test
