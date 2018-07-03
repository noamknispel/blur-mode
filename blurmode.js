const CLASSNAME = 'blur-mode'
var body = document.querySelector('body')
window.addEventListener('focus', function(event) { body.classList.remove(CLASSNAME) })
window.addEventListener('blur', function(event) { body.classList.add(CLASSNAME) })
