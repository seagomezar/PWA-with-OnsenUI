//////////////////////////
// Tabbar Page Controller //
//////////////////////////
if (!window.controllers)
    window.controllers = {};

window.controllers.splitterPage = (page) => {
    // Set button functionality to open/close the menu.

    setTimeout(() => {
        page.querySelector('[component="button/menu"]').onclick = function () {
            document.querySelector('#mySplitter').left.toggle();
        };
    }, 1000);
    
    console.log("TABBAR_PAGE_LOADED");
};