const fs = require("fs")

class Car {
    constructor(text, color, shape){
        this.text= text
        this.wheels = color
        this.sound = "vroom"
        this.cost = "expensive"
    }
}




//const myCar = new SVG("honda",2)
const yourCar = new Car("tesla",4)
const herCar = new Car("tesla",4)
const hisCar = new Car("hundai",1)



//fs.watchFile(NAMEOFFILE, DATA, ErrHandlingFunction)
fs.writeFile("fun.svg", "Hello there", err => console.log(err))

 
inquirer.prompt(question).then((answer)=> {
    console.log(answer)