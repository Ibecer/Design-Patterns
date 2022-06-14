//component
class ProductComponent{
    constructor(name){
        this.name = name
    }

    getDetail(){
        return `${this.name}`
    }
}

//decorator
class ProductDecorator{
    constructor(productComponent){
        this.productComponent = productComponent
    }

    getDetail(){
       return this.productComponent.getDetail()
    }
}

class CommercialInfoProductDecorator extends ProductDecorator{
    constructor(productComponent, tradname, brand){
        super(productComponent)
        this.tradname = tradname
        this.brand = brand
    }

    getDetail(){
        return `${this.tradname} ${this.brand} ${super.getDetail()}`
    }
}

//decorator 2
class StoreProductDecorator extends ProductDecorator {
    constructor(productComponent, price){
        super(productComponent)
        this.price = price
    }

    getDetail(){
        return `${super.getDetail()} $ ${this.price}`
    }
}

//decorator 3
class HTMLProductDecorator extends ProductDecorator{

    getDetail(){
        return `<h1>Informacion del product </h1>
        <p>
            ${super.getDetail()}
        </p>`
    }
}

//Ejecucion 
//component

const productComponent = new ProductComponent("Cerveza")
console.log(productComponent.getDetail())
const commercialInfoProduct =
    new CommercialInfoProductDecorator(productComponent, "London Porter", "Fuller's")

console.log(commercialInfoProduct.getDetail())

//decorator 2 con component 
const storeProduct = 
    new StoreProductDecorator(productComponent, 15.5)

console.log(storeProduct.getDetail())

// decorator 2 con decorator 1
const product = new StoreProductDecorator(commercialInfoProduct, 15.5)
console.log(product.getDetail())

//deco3 con deco2 con deco1
const htmlProductDecorator = new HTMLProductDecorator(product)
myDiv.innerHTML = htmlProductDecorator.getDetail()
