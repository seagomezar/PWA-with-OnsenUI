import ons from 'onsenui';
/***********************************************************************
 * App Controllers. These controllers will be called on page initialization. *
 ***********************************************************************/

myApp.controllers = {

  //////////////////////////
  // Tabbar Page Controller //
  //////////////////////////
  tabbarPage: (page) => {
    // Set button functionality to open/close the menu.
    page.querySelector('[component="button/menu"]').onclick = function() {
      document.querySelector('#mySplitter').left.toggle();
    };
    console.log("TABBAR_PAGE_LOADED");
  },

  ////////////////////////
  // Menu Page Controller //
  ////////////////////////
  menuPage: (page) => {
    // Change splitter animation depending on platform.
    document.querySelector('#mySplitter').left.setAttribute('animation', ons.platform.isAndroid() ? 'overlay' : 'reveal');
  },

  ////////////////////////////
  // Main Page Controller //
  ////////////////////////////
  mainPage: (page) => {
    // First time
    let currentOption = myApp.services.next();
    myApp.controllers.render(currentOption);

    // Clic Handler dislike
    document.querySelector('#dislike').onclick = ()=>{
      myApp.services.addDislike(myApp.services.current);
      currentOption = myApp.services.next();
      myApp.controllers.render(currentOption);
    };

    // Click Handler like
    document.querySelector('#like').onclick = ()=>{
      myApp.services.addLike(myApp.services.current);
      currentOption = myApp.services.next();
      myApp.controllers.render(currentOption);
    };
  },

  render: (option)=>{
    if (option) {
      document.querySelector('figcaption').innerText = option.title;
      document.querySelector('img').src = option.image;
    } else {
      document.querySelector('figcaption').style.display = "none";
      document.querySelector('img').style.display = "none";
      document.querySelector('#like').style.display = "none";
      document.querySelector('#dislike').style.display = "none";
      document.querySelector('h2').style.display = "block";
    }
    
  }

};
