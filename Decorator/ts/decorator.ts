interface Component{
    getDetail() : string
}

class ProductComponent implements Component{

    protected name: string

    constructor(name: string){
        this.name = name
    }

    getDetail(): string {
        return `${this.name}`
    }
}

abstract class ProductDecorator implements Component{

    protected component: Component

    constructor(component:Component){
        this.component = component
    }

    public getDetail(): string {
        return this.component.getDetail()
    }
}

//decorator 1
class CommercialInfoProductDecorator extends ProductDecorator{
    private tradename: string
    private brand: string

    constructor(component:Component, tradename: string, brand: string){
        super(component)
        this.tradename = tradename
        this.brand = brand
    }

    getDetail(): string {
        return `${this.tradename} ${this.brand} ${super.getDetail()}`
    }
}

//decorator 2 
class StoreProductDecorator extends ProductDecorator{
    private price: number

    constructor(component:Component, price: number){
        super(component)
        this.price = price
    }

    public getDetail(): string {
        return `${super.getDetail()} ${this.price}`
    }

}

class HTMLProductDecorator extends ProductDecorator{

    public getDetail(): string {
        return `<h1>Informacion del product</h1>
        <p>
            ${super.getDetail()}
        </p>`
    }

}

//Ejecucion 
//component

const productComponent = new ProductComponent("Cerveza")
console.log(productComponent.getDetail())

//decorator 1 con component
const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "London Prter", "Fuller's")
console.log(commercialInfoProduct.getDetail())

//deco 2
const storeProduct = new StoreProductDecorator(productComponent, 15.5)
console.log(storeProduct.getDetail())

//deco 2 con deco 1
const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 15.5)
console.log(storeProduct2.getDetail())

//deco 3 con deco 2 con deco 1
const htmlProduct = new HTMLProductDecorator(storeProduct2)
console.log(htmlProduct.getDetail())