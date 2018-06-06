import ons from 'onsenui';
import './services';
import './splitter/splitter';
import './menu/menu';
import './content/content';

document.addEventListener('DOMContenLoaded', function (event) {

  var div = document.createElement('div');
  div.innerHTML = '';
  while (div.children.length > 0) {
    document.body.appendChild(div.children[0]);
  }

  var page = event.target;

  // Each page calls its own initialization controller.
  if (window.controllers.hasOwnProperty(page.id)) {
    window.controllers[page.id](page);
  }

});
