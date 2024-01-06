class Box<T>{
    private boxes = [];

    get count: number {
        return this.boxes.length
    }

    add(element: T){
        this.boxes.push(element)
    }

    remove(){
        this.boxes.pop();
    }
}