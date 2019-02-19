var Shape_Module = (function() {
    var type = 'Any 2D and 3D shape';

    var getType = function() {
        return type;
    }

    return {
        getType: getType
    }
})();

Shape_Module.Polygon = Polygon_Module;
