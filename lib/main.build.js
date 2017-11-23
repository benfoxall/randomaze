(function () {
'use strict';

var qs = document.querySelector.bind(document);
var on = function (el, event, fn) { return el.addEventListener(event, fn, false); };
var create = function (name, props, children) {
    if ( props === void 0 ) props={};
    if ( children === void 0 ) children=[];

    return children.reduce(function (p, c) { return (p.appendChild(c), p); } , Object.assign( document.createElement(name), props ));
};


var shuffle = function (array) {
    var tmp, current, top = array.length;

    if(top) { while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    } }

    return array
};


var toListItems = function (text) { return create('ul', {},
    shuffle(
      text
      .split('\n')
      .filter(function (n) { return n; })
    )
      .map(function (textContent) { return create('li', { textContent: textContent }
      ); }
  )
); };

var text = qs('textarea');
var button = qs('button');

var current = text;

on(button, 'click', function () {

  var ul = toListItems(text.value);

  if(!ul.children.length) { return text.focus() }

  current.replaceWith(ul);

  current = ul;

});

}());
