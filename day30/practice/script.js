let DATA = "secret information";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("website data = ", DATA);
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        DATA = "New edited Data";
    }
}


let student1 = new User("shristi", "shr@gmail.com");
let student2 = new User("suyan", "suy@gmail.com");

let admin1 = new Admin("admin", "admin@email.com");
