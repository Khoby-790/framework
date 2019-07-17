

class Model {

    constructor(object){
        this.fillable = {}
    }

    static create(obj){
        this.fillable.push(obj);

        return obj
    }
}


export default Model