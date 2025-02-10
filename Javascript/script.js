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
function CtoF(celsius){
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
    Fullname: function(){
        return this.Firstname + " " + this.Lastname; //อ้างอิง this ถึง person
        // return person.Firstname + " " + person.Lastname;
    }
};
console.log(person.Fullname());

//event เวลากดคลิกที่ปุ่มจะเกิดอะไรขึ้นเป็นต้น
function displayDate(){
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
var myArr2 = new Array("BMW","Ford","Honda");
console.log(myArr);
console.log(myArr2);
//การเข้าถึงข้อมูลในarray
console.log(myArr.length);
console.log(myArr[0]);

//array method
console.log("------");
var fruits = ["Banana","Orange","Apple","Mango"];
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
fruits.splice(2,0,"lychee","Durian"); //2-ข้อมูลที่ต้องการเพิ่มในตำแหน่งที่2 0-ข้อมูลที่ต้องการลบ
console.log(fruits);
fruits.splice(0,1)//เพิ่ม0ลบ1
console.log(fruits);
//concat array
var fruits2 = fruits.concat(["value1","value2"]);
console.log(fruits2);
var concatArr = fruits.concat(fruits2);
console.log(concatArr);
var myNewArr = concatArr.slice(1); //ตัดตั้งแต่ตัวที่1 ตัวที่เหลือยังอยู่
console.log(myNewArr);
var myNewArr = concatArr.slice(1,5); //เอาตัวช่วง 2-4
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