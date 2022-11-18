import AddToDo from "../components/add-todo.js";
export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('table');
        this.addToDoForm = new AddToDo();

        this.addToDoForm.onClick((title, description) => this.addToDo(title, description));
    }
    setModel(model) {
        this.model = model;
    }

    render() {
        const toDos = this.model.getToDos();
        for (const toDo of toDos) {
            this.createRow(toDo);
        }
    }

    toggleCompleted(id) {
        this.model.toggleCompleted(id);
        console.log(id);
    }
    addToDo(title, description) {
        const toDo = this.model.addToDo(title, description);
        this.createRow(toDo);
    }

    removeToDo(id) {
        this.model.removeToDo(id);
        document.getElementById(id).remove();
    }

    createRow(toDo) {
        const row = table.insertRow();
        row.setAttribute('id', toDo.id);
        row.innerHTML = `
            <td>${toDo.title}</td>
            <td>${toDo.description}</td>
            <td class="text-center">
            
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.checked = toDo.completed;
        checkBox.onClick = () => this.toggleCompleted(toDo.id)
        row.children[2].appendChild(checkBox);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>'
        // removeBtn.onclick = () => this.removeToDo(row.getAttribute('id'));
        removeBtn.onclick = () => this.removeToDo(toDo.id);
        row.children[3].appendChild(removeBtn);
    }
}