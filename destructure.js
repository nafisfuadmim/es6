const person ={ name:"arnold", address:"NewYork", phone:0233488, town:"Jaleshwaritola"};

const { phone, town, name}= person;
const address= person.address;
console.log(phone, town);



const friends=["Nirjhon", "Tuhin", "ashik", "Himel"];
const [chotoFriends, ...pagla]=friends;
console.log(chotoFriends, ...pagla);