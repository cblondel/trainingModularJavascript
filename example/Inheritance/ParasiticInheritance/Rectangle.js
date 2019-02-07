var Rectangle_Module = (function() {
    function Rectangle() {
        Polygon_Module.Polygon.call(this);
        this.name = 'Rectangle';
        this.side = 4;
    }

    Rectangle.prototype = Polygon_Module.Polygon.prototype;
    Rectangle.prototype.constructor = Rectangle;

    return {
        Rectangle: Rectangle
    }

})();
