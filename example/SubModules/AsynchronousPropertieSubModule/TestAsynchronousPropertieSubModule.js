var testAsynchronousPropertieSubModule = (function() {
    try {
        console.log('début du test');
        console.log(Shape_Module.getType());
        console.log(Shape_Module.Polygon.getName());
        console.log(Shape_Module.Polygon.getSide());
        console.log(Shape_Module.Polygon.getType());
    } catch (e) {

    }

})();