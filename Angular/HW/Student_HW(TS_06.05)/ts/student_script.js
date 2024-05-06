var Student = /** @class */ (function () {
    function Student(inpName, inpSur, inpPat, inpAge, inpPhone, inpCity, inpUni, inpGroup) {
        this._name = inpName;
        this._surname = inpSur;
        this._patronym = inpPat;
        this._age = inpAge;
        this._phoneNum = inpPhone;
        this._city = inpCity;
        this._uni = inpUni;
        this._group = inpGroup;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "phoneNum", {
        get: function () {
            return "+38" + this._phoneNum;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "uni", {
        get: function () {
            return this._uni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "group", {
        get: function () {
            return this._group;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student;
student = new Student("Ivan", "Ivanov", "Ivanovich", "25", "663385070", "Odessa", "Step", 221);
var elemnt = document.getElementById("Name");
elemnt.innerText = student.name;
elemnt = document.getElementById("Age");
elemnt.innerText = student.age;
elemnt = document.getElementById("Phone");
elemnt.innerHTML = student.phoneNum;
elemnt = document.getElementById("Uni");
elemnt.innerHTML = student.uni;
