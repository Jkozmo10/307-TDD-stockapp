class Stock_Portfolio{
    constructor(){
        this.stocks = {};
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
        if(ticker in this.stocks){
            return this.stocks[ticker];
        }
        else{
            return 0;
        }
    }

    isEmpty(){
        if (JSON.stringify({}) == JSON.stringify(this.stocks)){
            return true;
        }
        else{
            return false;
        }
    }

    uniqueTickers(){
        this.result = 0;
        for (let k in portfolio.stocks){
            this.result++;
           }
        return this.result;
    }
}



exports.Stock_Portfolio = Stock_Portfolio;