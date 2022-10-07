const myFuncs = require('./stocks.js');

beforeEach(() => {
    //portfolio = new myFuncs.Stock_Portfolio({});
});

test('Testing creation -- success', () => {portfolio = new myFuncs.Stock_Portfolio({});});

test('Testing if empty -- success', () => {
    //const portfolio = new myFuncs.Stock_Portfolio();
    portfolio = new myFuncs.Stock_Portfolio({});
    target = 0;  
    result = 0;
    dict = portfolio.stocks;
    for (var key in dict){
        if (dict[key] != 0){
            result++;
        }
    } 
    expect(target).toBe(result);
    
});

test('Testing key levels -- success', () => {
    //const portfolio = new myFuncs.Stock_Portfolio();
    portfolio = new myFuncs.Stock_Portfolio({"RBLX" : 5, "GME" : 2});
    console.log(portfolio.stocks)
    target = 2;  
    result = 0;
    //dict = portfolio.stocks;
   for (let k in portfolio.stocks){
    result++;
   }
   expect(target).toBe(result);
    
});

test('Testing adding shares -- success', () => {
    //const portfolio = new myFuncs.Stock_Portfolio();
    portfolio = new myFuncs.Stock_Portfolio({"RBLX" : 5});
    //console.log(portfolio.stocks)
    target = {"APPL" : 8, "RBLX" : 5};
    //dict = portfolio.stocks;
    portfolio.purchase(["APPL", 8]);
    result = portfolio.stocks;
   
   expect(target).toStrictEqual(result);
});

test('Testing adding shares to existing ticker -- success', () => {
    portfolio = new myFuncs.Stock_Portfolio({"RBLX" : 5});
    target = {"RBLX" : 8};
    portfolio.purchase(["RBLX", 3]);
    result = portfolio.stocks;
   
   expect(target).toStrictEqual(result);
});

test('Testing making a sale -- success', () => {
    portfolio = new myFuncs.Stock_Portfolio({"RBLX" : 5});
    target = {"RBLX" : 2};
    portfolio.sell(["RBLX", 3]);
    result = portfolio.stocks;
   
   expect(target).toStrictEqual(result);
});

test('Testing share count -- success', () => {
    portfolio = new myFuncs.Stock_Portfolio({"RBLX" : 5});
    target = 5;
    result = portfolio.shareCount("RBLX");
   
   expect(target).toBe(result);
});

test('Testing one minimum -- success', () => {
    portfolio = new myFuncs.Stock_Portfolio({"RBLX" : 5, "APPL" : 6});
    target = {"RBLX" : 5};
    portfolio.sell(["APPL", 6]);
    result = portfolio.stocks;
   
   expect(target).toStrictEqual(result);
});

test("Testing add zero -- success", () => {
    portfolio = new myFuncs.Stock_Portfolio({"RBLX" : 5})
    target = {"RBLX" : 5};
    portfolio.purchase(["APPL", 0]);
    result = portfolio.stocks;

    expect(target).toStrictEqual(result);
});

test('Testing selling more than allowed -- success', () => {
    portfolio = new myFuncs.Stock_Portfolio({"RBLX" : 5});
   expect(() => {portfolio.sell(["RBLX", 10]);}).toThrowError("ShareSaleException")
});



