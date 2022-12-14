import Alert from "./alert.js";

export default class Modal {
    constructor() {
        this.alert = new Alert('modal-alert');
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.btn = document.getElementById('modal-btn');
        this.completed = document.getElementById('modal-completed');
        this.toDo = null;
    }

    onClick(callback) {
        this.btn.onclick = () => {
            if (!this.title.value || !this.description.value) {
                this.alert.show('Title and description are required');
                return;
            }
            if (this.description.value.length > 100) {
                this.alert.show('Description has exceeded 100 characters');
                return;
            }

            $('#modal').modal('toggle');

            callback(this.toDo.id, {
                title: this.title.value,
                description: this.description.value,
                completed: this.completed.checked
            });
        }
    }

    setValues(toDo) {
        this.toDo = toDo;
        this.title.value = toDo.title;
        this.description.value = toDo.description;
        this.completed.checked = toDo.completed;
    }
}