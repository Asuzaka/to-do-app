"use strict"
const ul = document.querySelector('#tasks')
const button = document.querySelector('#push')
const warning = document.getElementById('modal')
const overlay = document.getElementById('overlay')
const closeBtn = document.getElementById('closebtn')
button.addEventListener('click', () => {
    if (document.querySelector('input').value == '') {
        removeHidden()
    }
    else {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.textContent = document.querySelector('input').value
        ul.prepend(li)
        document.querySelector('input').value = ''
        const spanDelete = document.createElement('span')
        const spanEdit = document.createElement('span')
        li.prepend(a)
        li.append(spanEdit, spanDelete)
        spanEdit.className = 'edit fa-solid fa-pen'
        spanDelete.className = 'delete fa-solid fa-trash'
    }
})


ul.addEventListener('click', (e) => {
    if (e.target.nodeName == 'LI') {
        e.target.classList.toggle('completed')
    }
    else if (e.target.className == 'edit fa-solid fa-pen') {
        document.querySelector('input').value = e.target.parentElement.textContent
        const save = document.querySelector('#save')
        save.classList.toggle('hide')
        button.classList.toggle('hide')
        save.onclick = function () {
            e.target.previousElementSibling.textContent = document.querySelector('input').value
            document.querySelector('input').value = ''
            save.classList.toggle('hide')
            button.classList.toggle('hide')
        }
    }
    else if (e.target.className == 'delete fa-solid fa-trash') {
        e.target.parentElement.remove()
    }
})

const addHiden = () => {
    warning.classList.add('hidden')
    overlay.classList.add('hidden')
}

closeBtn.addEventListener('click', (e) => {
    addHiden()
})

overlay.addEventListener('click', (e) => {
    addHiden()
})
document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        addHiden()
    }
})
const removeHidden = () => {
    warning.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

