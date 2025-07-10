class user {
    constructor(name) {
        //involves the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("name is too short.");
            return;
        }
        this._name = value;
    }
}
let user = new User("ramu");
console.log(user.name);

// user = new User("");
user.name = "jhandu"
console.log(user)
console.log(user.name)