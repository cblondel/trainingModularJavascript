var ImagesInc_GlobalData = (function(module) {
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

    module.getHeaderHTMLTxt = function() {
        return headerContainerDef.sectionHTML;
    };

    module.getFooterHTMLTxt = function() {
        return footerContainerDef.sectionHTML;
    };

    return module;
})(ImagesInc_GlobalData || {}); //loose augmentation mean the ability to create or augment our module in a non-strict order