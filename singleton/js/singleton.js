class Singleton {
    constructor(){
        this.random = Math.random()

        if(Singleton.instance){
            
            return Singleton.instance
        }
        
        Singleton.instance = this
    }
}

class WeekDays{
    daysEs = ["Lunes",
    "Martes", 
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"]

    daysEn = ["Monday",
    "Tuesday", 
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"]

    constructor(lang){
        this.lang = lang

        if(WeekDays.instance){
            return WeekDays.instance
        }

        WeekDays.instance = this
    }

    getDays(){
        return this.lang === "es" ? 
        this.daysEs :
        this.daysEn
    }
}

const weekdays = new WeekDays("en")
const weekdays2 = new WeekDays("es")
console.log(weekdays.getDays())
console.log(weekdays2.getDays())



