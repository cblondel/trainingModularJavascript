/**
 * ImagesInc_GlobalData
 * This module was responsible for storing and caching application-level data.
 * Module augmentation allows us to do just that in a very robust way. As the name
 * implies, this concept is about adding functionality (properties) to the original
 * module, without changing the original module's code directly.
 * **/
var ImagesInc_GlobalData = (function() {
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

var ImagesInc_PageUpdater = (function() {

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
                ImagesInc_LoggingHandler.logError('No class name has been provided, exiting module !');
            }
            applyClassToElement(elmeID, className);
        }
    }
})();

/** Logginghandler use module pattern and return a named interface **/
var ImagesInc_LoggingHandler = (function() {
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

var ImagesInc_Utilities = (function() {

    var clone = function clone (deep) {
        var cloneObj = Object.create(Object.getPrototypeOf(this));

        Object.getOwnPropertyNames(this).forEach(function(propKey) {
           if(!deep) {
               cloneObj[propKey] = this[propKey];
           } else if (typeof this[propKey] == 'object') {
               cloneObj[propKey] = this[propKey].clone(true);
           } else {
               cloneObj[propKey] = this[propKey];
           }
        }, this);

        return cloneObj;
    };

    (function() {
       Object.prototype.clone = clone;
    })();
})();

var TestModule = (function() {
    var privateTestValue = "Test for cloning, this property is hidden";
    return {
        publicTestValue: privateTestValue +
        " but now showing it publicly",
        testFunc: function() {
            var anotherTest = "This property will be cloned";
            return anotherTest;
        },
        getPrivateValue: function() {
            return privateTestValue;
        },
        changePrivateVar: function() {
            privateTestValue = "the private value has been changed";
            return privateTestValue;
        },
        testArray: [1, 2, 3]
    };
})();