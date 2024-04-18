export default class Team {
    constructor() {
        this.members = new Set();
    }
    add(newuser){
            if(this.members.has(newuser)){
                throw new Error('user already exists');
            } else {
                this.members.add(newuser);
            }
    }
    addAll(...users){
        users.forEach(user => {
            this.members.add(user);
        });
    }
    toArray(){
        const array = [];
        this.members.forEach(user => {
            array.push(user);
        });
        return array;
    }
}