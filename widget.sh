#!/bin/bash

# https://www.reddit.com/r/xfce/comments/5mrqy3/bitcoin_price_ticker_widget/

#currentbtc=$(curl -s https://www.bitstamp.net/api/ticker/ | json last)
#currentbtc=$(curl -s https://www.bitstamp.net/api/v2/ticker/btceur | json last)
#echo -e "€"$currentbtc" "

output=$(node /home/reda/dev/js/bitcoin/index.js);
echo -e "$output";


# TODO
# continue with http://goodies.xfce.org/projects/panel-plugins/xfce4-genmon-plugin
# publish on github
