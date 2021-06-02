const coinData = [
        {
            "id": "41024760",
            "uuid": "ckp8ib09300010lxfbp7v7s6f",
            "symbol": "ADA",
            "buyPrice": 1.5,
            "buyAmount": 100,
            "sellAmount": 100,
            "exchange": "binance"
        },
        {
            "id": "41024761",
            "uuid": "ckp8ibgmv00020lxfbuh9eloj",
            "symbol": "ADA",
            "buyPrice": 1.2,
            "buyAmount": 100,
            "sellAmount": 100,
            "exchange": "binance"
        },
        {
            "id": "41024806",
            "uuid": "ckp8ikv8g00030lxf6xc80e6e",
            "symbol": "TRX",
            "buyPrice": 1.6,
            "buyAmount": 200,
            "sellAmount": 200,
            "exchange": "binance"
        },
        {
            "id": "41024807",
            "uuid": "ckp8il3lp00040lxf565s2glo",
            "symbol": "TRX",
            "buyPrice": 1.2,
            "buyAmount": 200,
            "sellAmount": 200,
            "exchange": "binance"
        },
        {
            "id": "41026113",
            "uuid": "ckp8mp78o00070lxfdtvh1wjz",
            "symbol": "ADA",
            "buyPrice": 1.8,
            "buyAmount": 40,
            "sellAmount": 1.8,
            "exchange": "binance"
        },
        {
            "id": "41314093",
            "uuid": "ckpec67rl00000lsqeodec4kv",
            "symbol": "BNB",
            "buyPrice": 330,
            "buyAmount": 2,
            "sellAmount": 2,
            "exchange": "binance"
        }
    ]
const getCoin = coinData.filter(e => e.symbol === "ADA")
const BuyCoinsAmount = getCoin.map(e => e.buyAmount)
const BoyCoinsAP = getCoin.map(e => e.buyAmount * e.buyPrice)

console.log(BoyCoinsAP.reduce((a, b) => a + b, 0) / BuyCoinsAmount.reduce((a, b) => a + b, 0))


// function costPerCoinAverage (purchases, coin){
//     const coinPurchases = purchases.filter(e => e.symbol === coin.symbol)

//     const BuyCoinsAmount = sum(coinPurchases.map(({buyAmount}) => buyAmount))
//     const BuyCoinsAP = sum(coinPurchases.map(({buyPrice, buyAmount}) => buyAmount * buyPrice))

//     return Number(BuyCoinsAP / BuyCoinsAmount)
// }

// console.log(costPerCoinAverage(coinData, { symbol: "ADA"}))


