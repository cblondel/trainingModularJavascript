(function(originalModule) {
    if(!originalModule) {
        ImagesInc_LoggingHandler.logError('orginal ImagesInc_GlobalData was not found to be augmented');
        return fals;
    }

    //object definition for the index.html content area
    originalModule.mainContentContainerDef = {
        sectionHTML: (function() {
            var htmlStr = "";
            for (var i = 0; i <= 15; i++) {
                htmlStr += '<div class="productDiv"></div>';
            }
            return htmlStr;
        })()
    };
    originalModule.getContentAreaHTMLTxt = function() {
        return originalModule.mainContentContainerDef.sectionHTML;
    };

    return originalModule;
})(ImagesInc_GlobalData);

ImagesInc_PageUpdater.updateElement('mainPageContainer',ImagesInc_GlobalData.getContentAreaHTMLTxt());