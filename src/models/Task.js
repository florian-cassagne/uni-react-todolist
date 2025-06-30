export class Task {
    constructor({
                    title     = '',
                    date      = new Date().toISOString().slice(0,10),
                    priority  = 5,
                    done      = false,
                    color     = '#101010'
                } = {}
    ) {
        this.id = Math.random().toString(36).slice(2);
        this.title = title;
        this.date = date;
        this.priority = priority;
        this.done = done;
        this.color = color;
    }

    toggleDone() {
        this.done = !this.done;
    }
}