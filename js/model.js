export default class Model {
    constructor() {
        this.view = null;
        this.toDos = JSON.parse(localStorage.getItem('toDos'));
        if (!this.toDos || this.toDos.length < 1) {
            this.toDos = [
                {
                    id: 0,
                    title: 'example',
                    description: 'description example',
                    completed: false
                }
            ]
            this.currentId = 1;
        } else {
            this.currentId = this.toDos[this.toDos.length - 1].id + 1;
        }
    }
    setView(view) {
        this.view = view;
    }
    getToDos() {
        return this.toDos.map((toDo) => ({ ...toDo }));
    }

    save() {
        localStorage.setItem('toDos', JSON.stringify(this.toDos));
    }

    addToDo(title, description) {
        const toDo = {
            id: this.currentId++,
            title,
            description,
            completed: false
        }
        this.toDos.push(toDo);
        console.log(this.toDos)
        this.save();
        return { ...toDo };
    }

    findToDo(id) {
        return this.toDos.findIndex((toDo) => toDo.id === id);
    }

    editToDo(id, values) {
        Object.assign(this.toDos[this.findToDo(id)], values);
        this.save();
    }

    removeToDo(id) {
        this.toDos.splice(this.findToDo(id), 1);
        this.save();
    }

    toggleCompleted(id) {
        const toDo = this.toDos[this.findToDo(id)];
        toDo.completed = !toDo.completed;
        this.save();
    }
} 