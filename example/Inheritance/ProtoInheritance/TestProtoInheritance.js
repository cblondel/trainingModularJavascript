var TestProtoInheritance = (function() {
    try {
        console.log(Polygon_Module.getName());
        console.log(Polygon_Module.getSide());
        console.log(Polygon_Module.getType());

        console.log(Rectangle_Module.getName());
        console.log(Rectangle_Module.getSide());
        console.log(Rectangle_Module.getType());
    } catch(e) {

    }
})();