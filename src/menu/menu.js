////////////////////////
// Menu Page Controller //
////////////////////////
if (!window.controllers) 
    window.controllers = {};

window.controllers.menuPage = (page) => {
    // Change splitter animation depending on platform.
    document.querySelector('#mySplitter').left.setAttribute('animation', ons.platform.isAndroid() ? 'overlay' : 'reveal');
};