/** This module was responsible for storing and caching application-level data.
 * Module augmentation allows us to do just that in a very robust way. As the name
 * implies, this concept is about adding functionality (properties) to the original
 * module, without changing the original module's code directly.
 * **/
var GlobalData = (function() {
    var headerContainerDef = {
        sectionHTML: '<div class="logo_titleClass" >' +
        '<a href=""><img src="img/ImagesIncLogo.png" alt="Company Logo" style="max-height:100%;"></a>' +
        '<div class="siteTitleClass">Images Inc.</div>' +
        '</div>' +
        '<nav role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">' +
        '<h1 class="hiddenClass">Main Navigation</h1>' +
        '<ul class="navmenuClass" >' +
        '<li><a href="#" class="active">Home</a></li>' +
        '<li><a href="#">Our Company</a></li>' +
        '<li><a href="#">Pricing</a></li>' +
        '<li><a href="#">Contact Us</a></li>' + '</ul>' +
        '</nav>'
    };
    var footerContainerDef = {
        sectionHTML: '<div>' + '<a href="#">Latest News</a>' +
        '</div>' + '<div>' + '<a href="#">Services</a>' +
        '</div>' + '<div>' + '<a href="#">Support</a>' +
        '</div>'
    };
    return {
        getHeaderHTMLTxt: function() {
            return headerContainerDef.sectionHTML;
        },
        getFooterHTMLTxt: function() {
            return footerContainerDef.sectionHTML;
        }
    };
})();

var PageUpdater = (function() {

    //module private functions
    var insertHTMLText = function(containerID, newStructure) {
        var element = document.getElementById(containerID);
        element.innerHTML = newStructure;
    }

    var applyClassToElement = function(containerID, className) {
        var element = document.getElementById(containerID);
        element.className = className;
    }

    return {
        updateElement: function(elemID, htmlTxt) {
            insertHTMLText(elemID, htmlTxt);
        },
        updateElementClass: function(elmeID, className) {
            if(!className) {
                LoggingHandler.logError('No class name has been provided, exiting module !');
            }
            applyClassToElement(elmeID, className);
        }
    }
})();

PageUpdater.updateElement('headerContainer', GlobalData.getHeaderHTMLTxt());
PageUpdater.updateElement('footerContainer', GlobalData.getFooterHTMLTxt());

/** Logginghandler use module pattern and return a named interface **/
var LoggingHandler = (function() {
    //private variables
    var defaultInfoMessage = 'Logging\'s core handler';
    var theInterface = {};

    //privileged methods
    theInterface.logError = function(errorMsg) {
        console.error(errorMsg);
    };

    theInterface.lofInfo = function(infoMsg) {
        if(!infoMsg) {
            infoMsg = defaultInfoMessage;
        }

        console.info(infoMsg);
    };

    return theInterface;

})();

LoggingHandler.lofInfo();