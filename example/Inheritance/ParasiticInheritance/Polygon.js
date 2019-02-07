var Polygon_Module = (function() {
    function Polygon() {
        this.name = 'Polygon';
        this.side = 6;
        this.type = '2D';
    }

    Polygon.prototype.getName = function() {
        return this.name;
    }

    Polygon.prototype.getSide = function() {
        return this.side;
    }

    Polygon.prototype.getType = function() {
        return this.type;
    }

    return {
        Polygon: Polygon
    }
})();
