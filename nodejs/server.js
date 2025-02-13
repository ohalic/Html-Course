// let http = require('http'); //module buildin
// let dt = require('./firstmodule'); //create module with yourself
// let url = require('url');
// let fs = require('fs');
// let uc = require('upper-case');
// let rs = fs.createReadStream('./demo.txt');
// let events = require('events');
// let eventEmitter = new events.EventEmitter();

// //url module
// let adr = 'http://localhost:8000/defualt.html?year=2020&month=november';
// let q = url.parse(adr,true);

// console.log(q.host); //returns localhost:8000
// console.log(q.pathname);
// console.log(q.search);

// let qdata = q.query;
// console.log(qdata.month);

// http.createServer(function (req, res) { //การเรียกใช้งาน
//     let q = url.parse(req.url,true);
//     let filename = "." + q.pathname; // ./somepath
//res.writeHead(200, { 'Content-Type': 'text/html' });
// res.write('The date and time are currently : ' + dt.myDateTime());
// //res.write(req.url); //การเข้าถึงpageต่างๆผ่าน / 
// // res.end('Hello World!');

// //พิมพ์ต่อ url ว่า /?year=2020&month=november
// let q  = url.parse(req.url, true).query;
// let txt = q.year + " " + q.month;
// res.end(txt);

//อ่านไฟล์ html
// fs.readFile(filename , function (err, data) {
//         if(err){
//             res.writeHead(404 , {'Content-Type' : 'text/html'});
//             return res.end('404 Not Found');
//         }

//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         return res.end();
//     })
// }).listen(8000);

// http.createServer(function(req,res){
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(uc.upperCase('natnicha nontrudon'));
//     res.end();
// }).listen(8000);


// fs.appendFile('mynewFile.txt' , 'Hello, World', function(err){ //สร้างไฟล์.txt มีข้อความข้างในว่า hello world , add error ใช้updateเนื้อหาได้
//     if (err) throw err;
//     console.log('Saved!');
// })
// fs.open('mynewFile2.txt' , 'w', function(err,file){ //สร้างไฟล์.txt2
//     if (err) throw err;
//     console.log('Saved!');
// })
// fs.writeFile('mynewFile2.txt' , 'w', function(err,file){ //สร้างไฟล์.txt2
//     if (err) throw err;
//     console.log('Saved!');
// })
// fs.unlink('mynewFile2.txt' , function(err){ //สร้างไฟล์.txt2
//      if (err) throw err;
//      console.log('Delete complete');
// })
// fs.rename('mynewFile.txt' ,'myrenamefile.txt', function(err){ //สร้างไฟล์.txt2
//      if (err) throw err;
//      console.log('Rename complete');
// })
//.writefileเป็นการเขียนแทนที่ไฟล์
//.unlink เป็นการลบไฟล์

// //Crete an event handler
// let myEventHandler = function(){
//     console.log('I hear scream');
// }
// //Assign the event handler to an event:
// eventEmitter.on('scream', myEventHandler);
// //fire the 'scream' event:
// eventEmitter.emit('scream');

//การupload file
//>npm i formidable
let formidable = require('formidable');
let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        let form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            let oldpath = files.fileupload.path;
            let newpath = 'C:\Users\Admin\Documents\GitHub\Html-Course\nodejs\img' + files.fileupload;
            fs.rename(oldpath, newpath, function(err) {
                if (err) throw err;
                res.write('File uploaded and moved');
                res.end();
            })
            // res.write('File uploaded');
            // res.end();
        })
    } else {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8000);
