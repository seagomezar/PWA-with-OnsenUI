/***********************************************************************************
 * App Services. This contains the logic of the application organised in modules/objects. *
 ***********************************************************************************/

const user = {
  id : "XXXX-XXXX"
};

myApp.services = {
  current: -1,

  next: () => {
    if (myApp.services.current < myApp.services.options.length-1) {
      myApp.services.current++;
      return myApp.services.options[myApp.services.current];
    }
    return null;   
  },

  last: () => {
    if (myApp.services.current > 0) {
      current--;
      return myApp.services.options[myApp.services.current];
    }
    return null;  
  },

  addLike : (option) => {
    option.user = user;
    myApp.services.likes.push(option);
  },

  addDislike : (option)=>{
    option.user = user;
    myApp.services.dislikes.push(option);
  },

  likes : [],
  dislikes : [],

  ////////////////////////
  // Initial Data Service //
  ////////////////////////
  options: [
    {
      title: 'Amelie Rose',
      image: 'http://via.placeholder.com/350x350'
    },
    {
      title: 'Juan Perez',
      image: 'http://via.placeholder.com/300x300'
    },
    {
      title: 'Pedro Matias',
      image: 'http://via.placeholder.com/200x200'
    },
    {
      title: 'Rose Rose',
      image: 'http://via.placeholder.com/100x100'
    },
  ]
};
