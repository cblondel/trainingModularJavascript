/** example combined Factory and Module Pattern **/

var myCarFactoryModule = (function() {

    // private variable
    var createdCars = [];

    function carFactory()
    {
        var newCar = {};
        newCar.type = arguments[0];
        newCar.color = arguments[1];
        newCar.gearType = arguments[2];
        newCar.cylinder = arguments[3];

        createdCars.push(newCar);
        return newCar;
    }

    return {
        createCar: function(type, color, gearType, cylinder) {
            return carFactory(type, color, gearType, cylinder);
        },
        getCarCount: function() {
            return createdCars.length;
        },
        removeCar: function(index) {
            createdCars.splice(index, 1);
        }
    }
})();

/** code example **/
var MyCarObj = myCarFactoryModule.createCar('2008', 'blue', 'Peugeot', '5');
console.log(MyCarObj); // { type: '2008',color: 'blue', gearType: 'Peugeot', cylinder: '5' }
console.log(myCarFactoryModule.getCarCount()); // 1
myCarFactoryModule.removeCar(0);
console.log(myCarFactoryModule.getCarCount()); // 0
console.log(myCarFactoryModule.createdCar); // undefined
