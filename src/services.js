/***********************************************************************************
 * App Services. This contains the logic of the application organised in modules/objects. *
 ***********************************************************************************/

const user = {
  id : "XXXX-XXXX"
};

window.services = {
  current: -1,

  next: () => {
    if (window.services.current < window.services.options.length-1) {
      window.services.current++;
      return window.services.options[window.services.current];
    }
    return null;   
  },

  last: () => {
    if (window.services.current > 0) {
      current--;
      return window.services.options[window.services.current];
    }
    return null;  
  },

  addLike : (option) => {
    option.user = user;
    window.services.likes.push(option);
  },

  addDislike : (option)=>{
    option.user = user;
    window.services.dislikes.push(option);
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
