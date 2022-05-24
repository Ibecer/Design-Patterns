class Singleton {
    constructor(){
        this.random = Math.random()

        if(Singleton.instance){
            
            return Singleton.instance
        }
        
        Singleton.instance = this
    }
}

const singleton = new Singleton()
const singleton2 = new Singleton()

console.log(singleton.random)
console.log(singleton2.random)
console.log(singleton === singleton2)