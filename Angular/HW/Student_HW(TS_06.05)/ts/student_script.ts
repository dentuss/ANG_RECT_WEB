
class Student {

    private _name: string;
    private _surname: string;
    private _patronym: string;
    private _age: string;
    private _phoneNum: string;
    private _city: string;
    private _uni: string;
    private _group: number;

    constructor(inpName: string, inpSur: string, inpPat: string, inpAge: string, inpPhone: string, inpCity: string, inpUni: string, inpGroup: number) {

        this._name = inpName;
        this._surname = inpSur;
        this._patronym = inpPat;
        this._age = inpAge;
        this._phoneNum = inpPhone;
        this._city = inpCity;
        this._uni = inpUni;
        this._group = inpGroup;
    }
    get name(): string {

        return this._name;
    }
    get age(): string {

        return this._age;
    }
    get phoneNum(): string {

        return "+38" + this._phoneNum;
    }
    get uni(): string {

        return this._uni;
    }
    get group(): number {

        return this._group;
    }
}

let student: Student;
student = new Student("Ivan", "Ivanov", "Ivanovich",  "25", "663385070", "Odessa", "Step", 221);

var elemnt = document.getElementById("Name");
elemnt!.innerText = student.name;

elemnt = document.getElementById("Age");
elemnt!.innerText = student.age;

elemnt = document.getElementById("Phone");
elemnt!.innerHTML = student.phoneNum;

elemnt = document.getElementById("Uni");
elemnt!.innerHTML = student.uni;