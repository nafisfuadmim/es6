class student{
    constructor(Roll, Name, section){
        this.Roll =Roll;
        
        this.Name =Name;
        
        this.Home = "Chattogram";
        this.Village = "Melagachi";
        this.section = section;

    }
}
const student1 =new student (12, "NaFis", "kokil" );
const student2 =new student (15, "Afridi", "Tiya");
const student3 =new student(23, "Rakib", "Doel");
console.log(student1, student2, student3);



// this.section = section;