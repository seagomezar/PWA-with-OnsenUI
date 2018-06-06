import ons from 'onsenui';
import './services';
import './splitter/splitter';
import './menu/menu';
import './content/content';
import 'onsenui/css/onsen-css-components.min.css';
import 'onsenui/css/onsenui.min.css';
import './css/style.css';

document.addEventListener('init', function (event) {

  var div = document.createElement('div');
  div.innerHTML = '';
  while (div.children.length > 0) {
    document.body.appendChild(div.children[0]);
  }

  var page = event.target;

  // Each page calls its own initialization controller.
  console.log("Entro 1", window.controllers)
  if (window.controllers.hasOwnProperty(page.id)) {
    console.log("Entro 2", window.controllers)
    window.controllers[page.id](page);
  }

});
