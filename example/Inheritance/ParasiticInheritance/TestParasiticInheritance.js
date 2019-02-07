var TestParasiticInheritance = (function() {
    try {
        var Polygon = new Polygon_Module.Polygon();
        console.log(Polygon.getName());
        console.log(Polygon.getSide());
        console.log(Polygon.getType());

        var Rectangle = new Rectangle_Module.Rectangle();
        console.log(Rectangle.getName());
        console.log(Rectangle.getSide());
        console.log(Rectangle.getType());

    } catch(e) {

    }
})();