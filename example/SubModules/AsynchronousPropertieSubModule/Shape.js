var Shape_Module = (function(mainModule) {
    var type = 'Any 2D and 3D shape';

    mainModule.getType = function() {
        return type;
    }

    return mainModule;

})(Shape_Module || {});