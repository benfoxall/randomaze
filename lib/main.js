const qs = document.querySelector.bind(document)
const on = (el, event, fn) => el.addEventListener(event, fn, false)
const create = (name, props={}, children=[]) =>
  children.reduce((p, c) => (p.appendChild(c), p) , Object.assign( document.createElement(name), props ))


const shuffle = (array) => {
    var tmp, current, top = array.length

    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1))
        tmp = array[current]
        array[current] = array[top]
        array[top] = tmp
    }

    return array
}


const toListItems = (text) =>
  create('ul', {},
    shuffle(
      text
      .split('\n')
      .filter(n => n)
    )
      .map(textContent =>
        create('li', { textContent }
      )
  )
)

const text = qs('textarea')
const button = qs('button')

let current = text

on(button, 'click', () => {

  const ul = toListItems(text.value)

  if(!ul.children.length) return text.focus()

  current.replaceWith(ul)

  current = ul

})
