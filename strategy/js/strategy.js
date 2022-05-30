class SaleContext{

    constructor(strategy){
        this.strategy = strategy
    }

    setStrategy(strategy){
        this.strategy = strategy
    }

    calaculate(amount){
        return this.strategy.calaculate(amount)
    }

}

class RegularSaleStrategy{
    
    constructor(tax){
        this.tax = tax
    }

    calaculate(amount){
        return amount + (amount * this.tax)
    }
}

class DiscountSaleStrategy{
    constructor(tax, discount){
            this.tax = tax
            this.discount = discount
    }

    calaculate(amount){
        return amount + (amount*this.tax) - this.discount
    }
}

class ForeignSalesStrategy{
    
    calaculate(amount){
        return amount * this.getDollarPrice()
    }

    getDollarPrice(){
        return 20
    }


}

const regularSale = new RegularSaleStrategy(0.16);
const discountSale = new DiscountSaleStrategy(0.16, 3)
const foreignSale = new ForeignSalesStrategy()

const sale = new SaleContext(regularSale);

console.log(sale.calaculate(10))

sale.setStrategy(discountSale)

console.log(sale.calaculate(10))

sale.setStrategy(foreignSale)

console.log(sale.calaculate(10))