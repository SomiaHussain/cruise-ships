function Ship (ship) {
    this.startingPort = "Dover"
    this.setsail = function(){
        this.startingPort = false;
    }
};

module.exports = Ship;