import Alert from './alert.js';

export default class AddToDo {
    constructor() {
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
        this.alert = new Alert('alert');
    }
    onClick(callback) {
        this.btn.onclick = () => {
            if (title.value === '' || description.value === '') {
                this.alert.show('Title and description are required');
                return;
            }
            if (this.description.value.length > 100) {
                this.alert.show('Description has exceeded 100 characters');
                return;
            }
            this.alert.hide();
            callback(this.title.value, this.description.value);

        }
    }
}