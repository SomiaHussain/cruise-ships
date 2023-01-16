class Ship{
    constructor(startingPort){
        this.startingPort = startingPort
    }
    setsail(){
        this.startingPort = null
    }
    dock(port){
        this.currentPort = port 

    }
}



module.exports = Ship;
