/** In this example only interface have access to the internals of the modules
 * and their internal scope.
 * You can look at module interfaces as contracts among modules, which enables them
 * to interact with each other regardless of how the internals of such contracts are
 * implemented.
 */

var ApplicationInitModule = (function(){

    //private variable
    var registeredModules = [];

    return {
        registerModule: function(module) {
            registeredModules.push(module);
        },
        getAppModulesCount: function() {
            return registeredModules.length;
        },
        removeRegisteredModule: function(index) {
            registeredModules.splice(index, 1);
        },
        initializeAllModules: function() {
            for(var module in registeredModules) {
                registeredModules[module].initialize();
            }
        }
    };
})();

/** GlobalApp is based on sandbox pattern **/
var GlobalApp = (function() {

    return {
        registerModule: ApplicationInitModule.registerModule
    }
})();

var testModule1 = (function() {
    //private variable
    var moduleName = 'module 1';
    var self = {};

    self.initialize = function() {
        console.log('module 1 has been initialized');
        console.log('module name is : ' + moduleName);
    };

    (function() {
        GlobalApp.registerModule(self);
    })();

    return {
        initialize : self.initialize,
        getName: function() {
            return moduleName;
        }
    };

})();

/** testModule2 is based as revealing module pattern **/
var testModule2 = (function() {
    //private variable
    var moduleName = 'module 2';

    function initialize() {
      console.log('module 2 has been initialized');
    };

    return {
      initialize: initialize
    };
})();

GlobalApp.registerModule(testModule2);
ApplicationInitModule.initializeAllModules();