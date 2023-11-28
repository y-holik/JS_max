1. from item-list.json get list of links - iterate over those links every minute and get price for something and parse the price
2. save prices in prices.json
3. check if current price lower then last saved, if yes - post request in TG 'price is changed to ... link : '


1.1 read item-list.json and validate that object contains links (no links - error) / link validation
1.2 GET request for first object in array and parse data + get class 'product-price-current__value' - parse and save in prices.json
1.3 send new GET request and compare prices : if current price lower then last saved one - post request in TG
