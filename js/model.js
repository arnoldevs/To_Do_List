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
        return this.toDos;
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

    removeToDo(id) {
        // const index = this.toDos.findIndex((toDo) => toDo.id === id);
        this.toDos.splice(this.findToDo(id), 1);
        this.save();
    }

    toggleCompleted(id) {
        console.log(id)
        // const index = this.findToDo(id);
        // const toDo = this.toDos[index];
        // toDo.completed = !toDo.completed;
        // console.log(this.toDos);
    }
} 