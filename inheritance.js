class Parent{
    constructor(){
        this.fatherName="Mahiuddin";
    }
}


class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
        
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }

}
const babu=new Child("Arnold");
const babu1=new Child("Tom");
console.log(babu1.getFullName());
console.log(babu.getFullName());