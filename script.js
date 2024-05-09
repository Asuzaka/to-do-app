
document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Ma'lumot bo'sh bo'lishi mumkin emas!")
    }

    else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
                <button class="edit">
                    <i class="fa-solid fa-pen"></i>
                </button>
            </div>
        `;
        var new_tasks = document.querySelectorAll('.edit');
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < new_tasks.length; i++) {
            new_tasks[i].onclick = function () {
                newData = prompt()
                let c = current_tasks
                if (newData === '') {
                    alert("Ma'lumot bo'sh bo'lishi mumkin emas!")
                    return;
                }
                else {
                    this.parentNode.innerHTML = `
                <span id="taskname">
                    ${newData}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
                <button class="edit">
                    <i class="fa-solid fa-pen"></i>
                </button>`
                }
            }
        }
    }
    for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
            this.parentNode.remove();
        }
    }

}



