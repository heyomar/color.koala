import { read } from "fs";

export default function () {

  function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState != 'loading')
          fn();
      });
    }
  }

  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('ref');
  
  ready(function(){
    console.log('loaded');
    
    if(myParam === 'producthunt') {
      document.querySelector('.greeting').classList.add('show');
    }else {
      document.querySelector('.greeting').classList.remove('show');
    }

  })
    
  // function getParameterByName(name, url) {
  //   if (!url) url = window.location.href;
  //   name = name.replace(/[\[\]]/g, '\\$&');
  //   var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
  //       results = regex.exec(url);
  //   if (!results) return null;
  //   if (!results[2]) return '';
  //   return decodeURIComponent(results[2].replace(/\+/g, ' '));
  // }

  // query string: ?foo=lorem&bar=&baz
  // var foo = getParameterByName('foo'); // "lorem"
  // var bar = getParameterByName('bar'); // "" (present with empty value)
  // var baz = getParameterByName('baz'); // "" (present with no value)
  // var qux = getParameterByName('qux'); // null (absent)
  // TODO - add feature that lets you copy the url of the colors display to show later
}
