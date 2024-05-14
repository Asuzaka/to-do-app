"use strict"
const ul = document.querySelector('#tasks')
const button = document.querySelector('#push')
const warning = document.getElementById('modal')
const overlay = document.getElementById('overlay')
const closeBtn = document.getElementById('closebtn')
const input = document.querySelector('input')

// To save every tasks in array before uploadting to LocalStorage
const list = []

// Add function 
button.addEventListener('click', () => {
    addlist()
})

input.addEventListener('keydown', (e) => {
    if (e.code == 'Enter') {
        addlist()
    }
})

function addlist() {
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
        list.push(a.textContent) //Local 
        li.append(spanEdit, spanDelete)
        spanEdit.className = 'edit fa-solid fa-pen'
        spanDelete.className = 'delete fa-solid fa-trash'
    }
}

//  Interacting abilities of task
ul.addEventListener('click', (e) => {
    if (e.target.nodeName == 'LI') {
        e.target.classList.toggle('completed')
    }
    // Editing Process
    else if (e.target.className == 'edit fa-solid fa-pen') {
        document.querySelector('input').value = e.target.parentElement.textContent
        const save = document.querySelector('#save')
        save.classList.toggle('hide')
        button.classList.toggle('hide')
        // Save button click after writing something into input
        save.onclick = function () {
            const oldinf = e.target.previousElementSibling.textContent
            e.target.previousElementSibling.textContent = document.querySelector('input').value
            const newinf = e.target.previousElementSibling.textContent
            if (list.includes(oldinf)) {
                const oldinfLocation = list.indexOf(oldinf)
                list[oldinfLocation] = newinf
            } else {
                console.log('Problem is in Editing process of LocalStorage')
            }
            document.querySelector('input').value = ''
            save.classList.toggle('hide')
            button.classList.toggle('hide')
        }
    }
    // Deletion Process
    else if (e.target.className == 'delete fa-solid fa-trash') {
        e.target.parentElement.remove()
        const infdeletion = e.target.previousElementSibling.previousElementSibling.textContent
        if (list.includes(infdeletion)) {
            const infdelLocation = list.indexOf(infdeletion)
            list[infdelLocation].remove
        }
        else {
            console.log('Problem is in Deleting process of LocalStorage')
        }
    }
})

// Saving data to LocalStorage
setInterval(SaveData, 3000)
// Iterval givus us opportunity to make a function work repeatedly
function SaveData() {
    // uploading the data to LocalStorage
    localStorage.setItem('list', JSON.stringify(list))
}

// Show up saved tasks
function recoverPreviousData() {
    // Getting the data from local Stroge
    const recoverList = JSON.parse(localStorage.getItem('list'))
    console.log(recoverList)
    for (let i = recoverList.length - 1; i >= 0; i--) {
        console.log(recoverList[i])
        ul.innerHTML += `<li><a>${recoverList[i]}</a><span class="edit fa-solid fa-pen"></span><span class="delete fa-solid fa-trash"></span></li>`
    }
    //     recoverList.forEach((savedtask) => {
    //         // I was just too lazy...
    //         ul.innerHTML += `<li><a>${savedtask}</a><span class="edit fa-solid fa-pen"></span><span class="delete fa-solid fa-trash"></span></li>`
    //     });
}
// Calling it to Show the saved data after opening
recoverPreviousData()

// Modal-settings
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