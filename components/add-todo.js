export default class AddToDo {
    constructor() {
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
    }
    onClick(callback) {
        this.btn.onclick = () => {
            if (title.value === '' || description.value === '') {
                // ALERT.classList.remove('d-none');
                // ALERT.innerText = 'Title and description are required'
                // return;
                console.error('Incorrect');
            } else {
                callback(this.title.value, this.description.value);
            }
        }
    }
}