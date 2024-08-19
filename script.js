const box = document.querySelector('.div')
const body = document.querySelector('body')

const color = prompt('dark or light')


if (color ==='dark'){
    box.classList.add('dark')
    body.classList.add('dark-body')
} else {
    box.classList.add('light')
    body.classList.add('light-body')
}
