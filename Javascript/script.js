console.log("Hello world"); //console แสดงคำนี้

document.getElementById("text").innerHTML = "Natnicha Nontraudon"; //แสดงผลข้อมูล text ลงใน browser

document.write("Hello Document Write"); //แสดงข้อความเหมือนกัน

window.alert("Hello Alert Box"); //แสดง pop up กล่อง

// java sc variable
console.log("------");
var x = 5;
var y = 6;
var z = x * y;
console.log(z);

//concat string
console.log("------");
var Firstname = "Natnicha";
var Lastname = "Nontraudon";
var Fullname = Firstname + " " + Lastname;
console.log(Fullname);

// operation
console.log("------");
console.log("4+2 = " + (4 + 2));
console.log("4/2 = " + (4 / 2));
console.log("4**2 = " + (4 ** 2)); //ยกกำลัง
console.log("10%3 = " + (10 % 3)); //mod

console.log("------");
console.log("var x = 10");
var x = 10;
console.log("x++ =" + (x++)); //ให้ค่าก่อนบวก
var x = 10;
console.log("++x =" + (++x)); //ให้ค่าหลังบวก
console.log("var y = 5");
var y = 5;
console.log("y-- =" + (y--));
var y = 5;
console.log("--y =" + (--y));

//comparasion operator

/*
 == , === เท่ากับ
 != , !== ไม่เท่ากับ
 >,<  มากกว่า,น้อยกว่า
 >=,<=  มากกว่าเท่ากับ น้อยกว่าเท่ากับ 
*/
console.log("------");
console.log("1===1 : " + (1 === 1));
console.log("2<=1 : " + (2 <= 1));

//Assignment operators

/*
x = y   x=y
x+=y    x=x+y
x-=y    x=x-y
x*=y    x=x*y
x/=y    x=x/y */
console.log("------");
let a = 10;
console.log("let a = 10");
a += 5;
console.log("a + = 5");
console.log("a =" + a);

//Logical operator

//ส่วนใหญ่ใช้เปรียบเทียบระหว่างค่า boolean มี &&(และ), ||(หรือ)
console.log("------");
console.log("true&&true : " + (true && true));
console.log("true||false :" + (true || false));
//ใช้ซ้อนได้
console.log("false&&true || true : " + (false && true || true));
console.log("false&&(true || true) : " + (false && (true || true)));

// function
console.log("------");
function myFunction(value1, value2) { //สร้างฟังก์ชัน เวลาเรียกใช้ต้องมีค่าตัวในวงเล็บด้วย
    return value1 * value2; //ส่งค่า 1*2 กลับไป
}
console.log("myFunction(15,10) => " + myFunction(15, 10));

//สร้างฟังก์ชันเปลี่ยนสีพื้นหลัง
function changBg() {
    document.body.style.backgroundColor = "red"; //documentหมายถึงทั้งหน้า bodyหมายถึงในส่วนของbody style ในส่วนของ style ทำการเปลี่ยนสี
}
//changBg();

//สร้างโปรแกรมแปลงอุณหภูมิ
function CtoF(celsius) {
    var Ctemp = celsius;
    var CtoFahr = Ctemp * 9 / 5 + 32;
    var message = Ctemp + "\xB0C is " + CtoFahr + "\xB0F";
    console.log(message);
}
CtoF(30);

//object in java
var myCar = {
    brand: "Ford",
    model: "1",
    color: "black"
};

console.log("------");
console.log(myCar.brand);
console.log(myCar["brand"]); //แสดงค่าใช้ได้เหมือนกัน

console.log("------");
var person = {
    Firstname: "Natnicha",
    Lastname: "Nontrudon",
    eyeColor: "black",
    Fullname: function () {
        return this.Firstname + " " + this.Lastname; //อ้างอิง this ถึง person
        // return person.Firstname + " " + person.Lastname;
    }
};
console.log(person.Fullname());

//event เวลากดคลิกที่ปุ่มจะเกิดอะไรขึ้นเป็นต้น
function displayDate() {
    document.getElementById('demo').innerHTML = Date();
}

//การทำงานกับ string
console.log("------");
var x = "Natnicha Nontrudon";
console.log("count string : " + x.length);

console.log("------");
var x = "Natnicha \"bam\" Nontrudon"; //กรณีอยากได้ "" ''
console.log(x);
//var x = 'It\'s me'; =>It's me
//\n = newline

//arrayเหมือนobjectเลย แต่จะใช้ตัวเลขเข้าถึง แต่ object ใช้ตัวอักษร
console.log("------");
// arra literal
var myArr = [
    "BMW",
    "Ford",
    "honda"
];
// array constructor แบบนี้ไม่ค่อยคือ ใช้แบบแรกดีกว่า
var myArr2 = new Array("BMW", "Ford", "Honda");
console.log(myArr);
console.log(myArr2);
//การเข้าถึงข้อมูลในarray
console.log(myArr.length);
console.log(myArr[0]);

//array method
console.log("------");
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo2").innerHTML = fruits.toString(); //แสดงข้อความใน array
document.getElementById("demo3").innerHTML = fruits.join(" - "); //เชื่อม array ด้วย -
fruits.pop(); //แสดงfruitsจะเห็นว่าจะลบข้อมูลตัวสุดท้ายในarrayออก
console.log(fruits);
fruits.push("Kiwi"); //เป็นการเพิม่กีสี่ลงใน array
console.log(fruits);
fruits.shift(); //เป็นการลบตัวล่าสุด
console.log(fruits);
fruits.unshift("Lemon"); //เป็นการเพิ่มข้อมูลด้านหน้า
console.log(fruits);
fruits[0] = "Cherry"; //เป็นการเปลี่ยนข้อมูลในarray
console.log(fruits);
delete fruits[0]; //ลบข้อมูลตามตำแหน่ง array
console.log(fruits);
fruits.splice(2, 0, "lychee", "Durian"); //2-ข้อมูลที่ต้องการเพิ่มในตำแหน่งที่2 0-ข้อมูลที่ต้องการลบ
console.log(fruits);
fruits.splice(0, 1)//เพิ่ม0ลบ1
console.log(fruits);
//concat array
var fruits2 = fruits.concat(["value1", "value2"]);
console.log(fruits2);
var concatArr = fruits.concat(fruits2);
console.log(concatArr);
var myNewArr = concatArr.slice(1); //ตัดตั้งแต่ตัวที่1 ตัวที่เหลือยังอยู่
console.log(myNewArr);
var myNewArr = concatArr.slice(1, 5); //เอาตัวช่วง 2-4
console.log(myNewArr);

//data type in javascript
//primative type
var num = 10; //number
var name = "Natnicha" //string
var booleantrue = true; //boolean
var booleanfalse = false;
var nulll = null; //null
var underfined; //กำหนดให้ไม่มีค่า
//object type
var objects = {}; //เก็บค่าได้หลายตัว

//math object
Math.PI; //3.14159...
Math.round(4.5); //ปัดขึ้นเป็นจำนวนเต็ม น้อยกว่าจุด5ปัดลง
Math.pow(5, 5); //5ยกกำลัง5 =3125
Math.sqrt(64); //หารูท64 = 8
Math.abs(-4); //absolute = 4
Math.ceil(4.1); //ปัดให้เป็นจำนวนเต็มที่มากกว่า = 5
Math.floor(3.6); //ปัดให้เป็นจำนวนเต็มน้อยลง = 3
Math.random(); //randomตัวเลขระหว่าง 0-1 ได้เป็นค่าทศนิยม

//if-else
// if(condition){

// }
console.log("------");
console.log("var time = 20;");
var time = 20;
if (time < 12) {
    console.log("output : Good morning");
} else if (time < 18) {
    console.log("Good Afternoon");
} else {
    console.log("Good evening");
}

//switch เช็กว่าค่าหรือผลลัพธ์ ตรงกับเคสไหนหรือเปล่า ถ้าตรงก็ทำตามคำสั่งของเคสนั้นๆ
// switch(expression){ //ข้างในตัวผลลัพธ์ที่จะให้ตรงกับตัว case
//     case x :
//         //codeblock
//         break;
//     case y :
//         break;
//     default : //กรณีไม่ตรงกับอะไรเลย
//         //code block
// }
console.log("------");
switch (new Date().getDay()) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 0:
        console.log("Friday");
        break;
    case 0:
        console.log("Saturday");
        break;
}

console.log("------");
var myphone = "OPPO";
switch (myphone) {
    case "iphone":
        console.log("30000");
        break;
    case "sumsung":
        console.log("25000");
        break;
    default:
        console.log("We dont have phone");
}
//We dont have phone

//for loop
console.log("------");
for (var i = 0; i < 5; i++) { //สร้างตัวแปร i ตัวที่2กำหนดเงื่อนไข ถ้าเป็นจริงจะหยุด ตัวที่3เพิ่ม/ลดยังไง
    console.log(i);
}

console.log("------");
var cars = ["BMW", "Ford", "Honda", "Audi"];

for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);

}

//for in loop
console.log("------");
var person = {
    fname: "Natnicha",
    lname: "Nontraudon",
    age: 21
};
for (var x in person) {
    console.log(person[x]);
}

//for off loop ผ่านค่าobject
console.log("------");
var cars = ["BMW", "Ford", "Honda", "Audi"];
var x;
for (var x of cars) {
    console.log(x);
}

console.log("------");
var person = "Natnicha"
var y;
for (y of person) {
    console.log(y);
}

//แปลงชนิดข้อมูลเป็นชนิดใหม่
// ชนิดของข้อมูล(String,Number,Boolean,object,function)
// มี object ที่ต่างกัน (object,Date,Array,String,Number,Boolean)
// มี 2 ค่าที่เก็บข้อมูลไม่ได้ (null,underfined)
String(123); //"123"
Number("324"); //324
String(Date()); //"Wednesday Feb 12 2025 11:08:45 ..."
Number(true); //1
Number(false); //0

//scope
//local scope ไม่สามารถดรียกใช้ได้นอกฟังก์ชัน
console.log("------");
function myname(){
    var myname = "Natnicha"
    console.log(myname);
}
myname();
// console.log(myname); เรียกใช้ตรงนี้ไม่ได้เพราะเป็น local

//global scope
console.log("------");
var mylast = "Nontraudon"
function myname(){
    var myname = "Natnicha" //ถ้าอยากให้เรียกใช้ได้ข้างนอกต้องลบ var ออกจะเป็น global อัตโนมัติ
    console.log(mylast);
}
myname();

//hoisting
console.log("------");
x=5;
console.log(x);
var x; //ประกาศใช้ทีหลังได้ จะตบขึ้นไปด้านบน
var y = 10; //ไม่เหมือนกัน ไม่ hoistiong ไปด้านบนถ้ามีการเรียกใช้ก่อน

//strict mode
"use strict"; //ประกาศ error ต้องเขียนให้ถูก เขียนผิดนิดเดียวไม่ได้

//what is this
console.log("------");
var person = {
    fname: "Natnicha",
    lname: "Nontraudon",
    fullname: function(){
        return this.fname + " " + this.lname;
    }
}
console.log(person.fullname());

//let const var
//var ประกาศค่าได้เรื่อยๆ แต่ถ้าตัวแปรเหมือนกันจะเอาตัวแปรล่าสุด
//let ประกาศค่าตัวแปรซ้ำกันไม่ได้ เป็น block scope
// let y = 6;
// y = 7; //แสดงผลค่า y ออกมาได้ 6,7 กรณีอยากให้ประกาศได้

//const ค่าคงที่ ไม่สามารถกำหนดค่าให้มันใหม่ได้ เปลี่ยนแปลงไม่ได้เลย กำหนดค่าได้ครั้งเดียวคือตั้งแต่แรกเลย block scope

//template string no concat(+)
console.log("------");
var myname = "Natnicha";
console.log(`My name is ${myname} nice to meet you.`); //`เปลี่ยนภาษาค้างไว้

//arrow func
console.log("------");
var hello = () => "Hello World"; //สร้างฟังชัน
console.log(hello());

var hello = (value) => "Hello " + value;
console.log(hello("Natnicha"));

//class
class Myclass{
    constructor(name){ //ทำงานทันทีหลังจากเรียกใช้
            this.myname = name;
    }
    fulName(greeding) {
        return greeding + " My name is : " + this.myname;
    }
}
var person = new Myclass("Natnicha");
console.log(person.fulName("Hello"));

//class inheritance
console.log("------");
class car{ //mother class
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return "I have a " + this.carname;
    }
}

class Model extends car{ //son class
    constructor(brand,model){
        super(brand); //เรียกของในclassแม่ได้หมดเลย
        this.model = model;
    }
    show(){
        return this.present()+ ", its a " + this.model;
    }
}
var mycar = new Model("Ford","Mustang");
console.log(mycar.show());
