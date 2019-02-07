var Rectangle_Module = (function() {
    var Rectangle = Object.create(Polygon_Module);
    var name = 'Rectangle';
    var side = 4;

    Rectangle.getName = function() {
        return name;
    }

    Rectangle.getSide = function() {
        return side;
    }

    return {
        getName: Rectangle.getName,
        getSide: Rectangle.getSide,
        getType: Rectangle.getType
    }

})();
