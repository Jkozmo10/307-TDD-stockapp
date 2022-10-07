class Stock_Portfolio{
    constructor(stocks){
        this.stocks = stocks;
    }

    purchase(stock){
        if(stock[1] == 0){
            return
        }
        if(stock[0] in this.stocks){
            this.stocks[stock[0]] = this.stocks[stock[0]] + stock[1];
        }
        else{
            this.stocks[stock[0]] = stock[1];
        }
    }

    sell(stock){
        if (stock[1] < this.stocks[stock[0]]){
            this.stocks[stock[0]] = this.stocks[stock[0]] - stock[1];
        }
        else if (stock[1] == this.stocks[stock[0]]){
            delete this.stocks[stock[0]]
        }
        else{
            throw new Error("ShareSaleException");
        }
    }

    shareCount(ticker){
        return this.stocks[ticker];
    }
}



exports.Stock_Portfolio = Stock_Portfolio;