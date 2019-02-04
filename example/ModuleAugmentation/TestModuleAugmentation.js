/**
 * What if we could come up with a way which would enable each developer to add
 * the required functionality to the original module without the need to modify or
 * require the original module's code?
 * Module augmentation allows us to do just that in a very robust way. As the name
 * implies, this concept is about adding functionality (properties) to the original
 * module, without changing the original module's code directly. The general idea is
 * that we can create a namespace which imports the original module at runtime and
 * then adds new functionality to it as required.
 */
var TestModuleAugmentation = (function() {
   try {
       console.log(ImagesInc_GlobalData);
       ImagesInc_GlobalData.getExtendedMessage();
   } catch(e) {
       console.error(e);
   }
})();
