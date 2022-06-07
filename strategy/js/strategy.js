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

// const regularSale = new RegularSaleStrategy(0.16);
// const discountSale = new DiscountSaleStrategy(0.16, 3)
// const foreignSale = new ForeignSalesStrategy()

// const sale = new SaleContext(regularSale);
// console.log(sale.calaculate(10))
// sale.setStrategy(discountSale)
// console.log(sale.calaculate(10))
// sale.setStrategy(foreignSale)
// console.log(sale.calaculate(10))
// Explicacion practica

const data = [
    {
        name: "El camino de los Reyes",
        autor: "Brandon Sanderson",
        saga: "El archivo de las tormentas"
    },
    {
        name: "Harry Potter y la piedra Filosofal",
        autor: "JK Rowling",
        saga: "Harry Potter"
    },
    {
        name: "La rueda del tiempo: El ojo del mundo",
        autor: "Robert Jordan",
        saga: "La rueda del tiempo"
    }
]

class InfoContext{

    constructor(strategy, data, element){
        this.setStrategy(strategy)
        this.data = data
        this.element = element
    }

    setStrategy(strategy){
        this.strategy = strategy
    }

    show(){
        this.strategy.show(this.data, this.element)
    }
}

class ListStrategy{
    show(data, element){
        element.innerHTML = data.reduce((ac, libro)=>{
            return ac + `<div>
            <h2>${libro.name}</h2>
            <p>${libro.autor}</p>
        </div>
        <hr>`
        }, "")
    }
}


class DetailedListStrategy{
    show(data, element){
        element.innerHTML = data.reduce((ac, libro)=>{
            return ac + `<div>
            <h2>${libro.name}</h2>
            <p>${libro.autor}</p>
            <p>${libro.saga}</p>
        </div>
        <hr>`
        }, "")
    }
}

const strategies = [
    new ListStrategy(),
    new DetailedListStrategy()
]
const info = new InfoContext(new ListStrategy(), data, content)
info.show()

slcOptions.addEventListener("change", (event)=> {
    const op = event.target.value
    info.setStrategy(strategies[op])
    info.show()
})