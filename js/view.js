export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('table');
        const btn = document.getElementById('add');
        btn.onclick = () => this.addToDo('Title', 'Desc')
    }
    setModel(model) {
        this.model = model;
    }
    addToDo(title, description) {
        console.log(title, description)
    }
}