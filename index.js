document.addEventListener('DOMContentLoaded', function () {
    const TITLE = document.getElementById('title');
    const BTN = document.getElementById('add');
    const DESCRIPTION = document.getElementById('description');
    const TABLE = document.getElementById('table');
    const ALERT = document.getElementById('alert');
    let key = 1;

    function addToDo() {
        if (TITLE.value === '' || DESCRIPTION.value === '') {
            ALERT.classList.remove('d-none');
            ALERT.innerText = 'Title and description are required'
            return;
        }

        function removeToDo(key) {
            document.getElementById(key).remove();
        }

        ALERT.classList.add('d-none');
        const ROW = TABLE.insertRow();
        ROW.setAttribute('id', key++);
        ROW.innerHTML = `
            <td>${TITLE.value}</td>
            <td>${DESCRIPTION.value}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;
        const REMOVE_BTN = document.createElement('button');
        REMOVE_BTN.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        REMOVE_BTN.innerHTML = '<i class="fa fa-trash"></i>'
        REMOVE_BTN.onclick = function (e) {
            removeToDo(ROW.getAttribute('id'));
        }
        ROW.children[3].appendChild(REMOVE_BTN);
    }

    BTN.onclick = addToDo;

})
