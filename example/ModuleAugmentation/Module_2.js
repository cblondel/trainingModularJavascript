var ImagesInc_GlobalData = (function(coreModule) {

    coreModule.someText = 'this is a test for module augmentation';
    coreModule.getExtendedMessage = function() {
        console.log(coreModule.someText);
    };

    return coreModule;

})(ImagesInc_GlobalData || {}); //loose augmentation