var getPersonName = function (person) {
    console.log(person.name);
};
var setPersonName = function (person, name) {
    person.name = name;
};
var person = {
    name: 'Jenny',
    sex: 'male',
    say: function () {
        return 'say hello';
    },
    teach: function () {
        return 'teach';
    }
};
getPersonName(person);
setPersonName(person, 'lee');
var User = /** @class */ (function () {
    function User() {
        this.name = 'jenny';
    }
    User.prototype.say = function () {
        return 'hello';
    };
    return User;
}());
var say = function (word) {
    return 'word';
};
