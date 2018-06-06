//////////////////////////
// Tabbar Page Controller //
//////////////////////////
if (!window.controllers)
    window.controllers = {};

window.controllers.splitterPage = (page) => {
    // Set button functionality to open/close the menu.
    page.querySelector('[component="button/menu"]').onclick = function () {
        document.querySelector('#mySplitter').left.toggle();
    };
    console.log("TABBAR_PAGE_LOADED");
};