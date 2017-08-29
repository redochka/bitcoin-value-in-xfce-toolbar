#!/bin/bash

#currentbtc=$(curl -s https://www.bitstamp.net/api/ticker/ | json last)
#currentbtc=$(curl -s https://www.bitstamp.net/api/v2/ticker/btceur | json last)
#echo -e "€"$currentbtc" "

#
# Change this below
#
output=$(node /home/reda/dev/js/bitcoin/index.js);

echo -e "$output";