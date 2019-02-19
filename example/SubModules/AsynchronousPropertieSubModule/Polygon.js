var Polygon_Module = (function() {
    var type = '2D';
    var side = 6;
    var name = "Polygon";

    function getType() {
        return type;
    }

    function getSide() {
        return side;
    }

    function getName() {
        return name;
    }

    return {
        getType: getType,
        getSide: getSide,
        getName: getName
    }
})();