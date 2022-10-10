const myFuncs = require('./stocks.js');

beforeEach(() => {
    portfolio = new myFuncs.Stock_Portfolio();
});

test('Testing creation -- success', () => {});

test('Testing if empty -- success', () => {
    expect(portfolio.isEmpty()).toBeTruthy();
    
});

test('Testing if not empty -- success', () => {
    portfolio.purchase(["RBLX", 10])
    expect(portfolio.isEmpty()).toBeFalsy();
    
});

test('Testing key levels -- success', () => {
    portfolio.purchase(["RBLX", 5]);
    portfolio.purchase(["GME", 2])
    target = 2;
    result = portfolio.uniqueTickers();
   expect(target).toBe(result);
    
});

test('Testing adding shares -- success', () => {
    portfolio.purchase(["RBLX", 5]);
    target = {"RBLX" : 5};
    result = portfolio.stocks;
   
   expect(target).toStrictEqual(result);
});

test('Testing adding 0 shares -- success', () => {
    portfolio.purchase(["RBLX", 0]);
    target = {};
    result = portfolio.stocks;
   
   expect(target).toStrictEqual(result);
});

test('Testing adding shares to existing ticker -- success', () => {
    portfolio.purchase(["RBLX", 5]);
    target = {"RBLX" : 8};
    portfolio.purchase(["RBLX", 3]);
    result = portfolio.stocks;
   
   expect(target).toStrictEqual(result);
});

test('Testing making a sale -- success', () => {
    portfolio.purchase(["RBLX", 5]);
    target = {"RBLX" : 2};
    portfolio.sell(["RBLX", 3]);
    result = portfolio.stocks;
   
   expect(target).toStrictEqual(result);
});

test('Testing sale from no ticker-- success', () => {
    portfolio.purchase(["RBLX", 5]);
    expect(() => {portfolio.sell(["APPL", 10]);}).toThrowError("ShareSaleException")
});

test('Testing share count -- success', () => {
    portfolio.purchase(["RBLX", 5]);
    target = 5;
    result = portfolio.shareCount("RBLX");

   expect(target).toBe(result);
});

test('Testing getting nonexistant ticker -- success', () => {
    portfolio.purchase(["RBLX", 5]);
    target = 0;
    result = portfolio.shareCount("APPL");

   expect(target).toBe(result);
});



test('Testing one minimum -- success', () => {
    portfolio.purchase(["RBLX", 5]);
    portfolio.purchase(["APPL", 6]);
    target = {"RBLX" : 5};
    portfolio.sell(["APPL", 6]);
    result = portfolio.stocks;
   
   expect(target).toStrictEqual(result);
});

test("Testing add zero -- success", () => {
    portfolio.purchase(["RBLX", 5]);
    target = {"RBLX" : 5};
    portfolio.purchase(["APPL", 0]);
    result = portfolio.stocks;

    expect(target).toStrictEqual(result);
});

test('Testing selling more than allowed -- success', () => {
    portfolio = new myFuncs.Stock_Portfolio();
    portfolio.purchase(["RBLX", 5]);
   expect(() => {portfolio.sell(["RBLX", 10]);}).toThrowError("ShareSaleException")
});