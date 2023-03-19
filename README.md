# Nodejs_webTravel

## ขั้นตอนการสร้าง Web ด้วย Node.Js+Express

ขั้นตอนแรกให้ติดตั้ง Node.js และ Express  โดย Node.js สามารถดาวโหลดจากเว็บ [Node.js](https://nodejs.org/en)
ส่วน Exprees นั้นติดตั้งด้วยการพิมพ์ Command Line ใน Terminal ของ Directory ที่สร้างเว็บ
สร้าง ไฟล์ package.js โดยใช้คำสั่งลงใน Command Line เพื่อ generate
Command Line 
Express : npm install express
package.js : npm init -y
เมื่อทำการติดตั้งจะได้ ไฟล์ดังนี้
<p align="center">
  <img src="/img/1.png)" />
</p>

สร้างไฟล์ index.js ใน main directory
<p align="center">
  <img src="/img/2.png" />
</p>

เพิ่มโค้ด express
const express = require("express"); //นำ module express เข้ามาทำงาน
//const morgan = require("morgan");
const contentRouter = require('./content');
//contentRouter เพื่อรับ export จากไฟล์ index.js ที่อยู่ใน content หรือ เรียกใช้งาน router ในไฟล์ Index.js ที่อยู่ใน content

สร้าง Folder content สำหรับเก็บ ไฟล์ .js ที่เป็น interface
index.js ใน folder content
<p align="center">
  <img src="/img/3.png" />
</p>

ต่อไปเป็นการทำ routing เพื่อรับส่งข้อมูล ระหว่าง content กับ main directory
const express = require("express"); //นำ module express เข้ามาทำงาน
const router = express.Router(); 
//เรียกใช้งาน class Router ใช้เป็นตัวรับส่งข้อมูลหรือ roting system และให้ express เรียกใช้งานตัว router อีกที
const listContent = require('./controller'); //เรียกใช้โฟล์เดอร์ controller เข้ามาทำงานและเก็บไว้ในตัวเเปร listContent
router.get('/', listContent); // ส่ง router parameter ไปพร้อมกับ path('/)ในที่นี้คือไฟล์ index.js 
module.exports = router; //export router ออกไปใช้งาน

controller.js ใน folder content
<p align="center">
  <img src="/img/4.png" />
</p>

รับค่าจาก Model กับ  View และ ทำการรันฟังก์ชัน listAction ที่เป้นการทำงานแบบ async await โดยให้ await รอรับข้อมูลจาก const data = await getAll
เมื่อได้รับข้อมูลแล้วจะนำมา render เป็นเว็บ และรันตัวแปร data ผ่าน body 
จากนั้นจึงจะทำการส่ง response body ออกไป

model.js
<p align="center">
  <img src="/img/5.png" />
</p>

ไฟล์นี้ใช้เก็บข้อมูล สำหรับแสดงผลข้อมูลโดยเก็บข้อมูลแบบ array และส่งข้อมูลไปให้ controller.js ผ่าน fucntion getAll() และทำงานเบบ Async จนกว่าจะเสร็จสมบูรณ์

view.js และ index.html ใน content
<p align="center">
  <img src="/img/6.png" />
</p>

View คือ ส่วนที่ใช้ในการแสดงเนื้อหาใน Web Browser ส่วน index.html ใช้เป็น template โดยหน้าเว็บนี้นำมาจาก [Site OverFlow](www.youtube.com/watch?v=P7iB6nvfnR8&t=1s)
เพื่อใช้เป็น ref และทำการดัดแปลงเพื่อสอดคล้องกับข้อมูลที่อยู่ใน Model ขึ้นหน้าเว็บได้ โดยการแสดงข้อมูลจาก Model

ขึ้นเว็บ 
โดย render ลงgithub และ soucetree เพื่อขึนเว็บไซต์ 
 