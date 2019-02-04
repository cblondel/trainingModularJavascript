/**
 * This module use tight augmentation
 * In this version of the augmenting code, we are no longer passing in a reference to an
 * empty anonymous object to our IIFE. Therefore, if ImagesInc_GlobalData module
 * has not been already loaded, we cannot augment it with any new properties.
 */
var ImagesInc_GlobalData = (function(coreModule) {
    if(!coreModule) {
        console.error('coreModule was not found to be augmented');
        return false;
    }
    coreModule.someText = 'overriding someText Module_2 properties';

    return coreModule;
})(ImagesInc_GlobalData) //tight augmentation
