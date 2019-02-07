var AppTester = (function() {
    try {
       ImagesInc_PageUpdater.updateElement('headerContainer', ImagesInc_GlobalData.getHeaderHTMLTxt());
       ImagesInc_PageUpdater.updateElement('footerContainer', ImagesInc_GlobalData.getFooterHTMLTxt());
       ImagesInc_PageUpdater.updateElement('mainPageContainer',ImagesInc_GlobalData.getContentAreaHTMLTxt());
    } catch(e) {
       ImagesInc_LoggingHandler.error('Module ' + ImagesInc_LoggingHandler.name + ' not found.');
    }

    ImagesInc_LoggingHandler.lofInfo(TestModule);
    var CloneTestModule = TestModule.clone(true);
    CloneTestModule.testArray.push(5);
    ImagesInc_LoggingHandler.lofInfo(CloneTestModule);
    CloneTestModule.changePrivateVar();
    ImagesInc_LoggingHandler.lofInfo(TestModule.getPrivateValue());
    ImagesInc_LoggingHandler.lofInfo(CloneTestModule.getPrivateValue());
})();