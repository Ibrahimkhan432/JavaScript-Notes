// console.log("hi");
//     *dicevale
// var a = Math.random();
// var dicevalue = Math.ceil(a * 6);
// console.log(dicevalue);

//     *coinvalue
// var a = Math.random();
// var coinvalue = Math.floor(a * 2);
// console.log(coinvalue); 

// console.log(typeof NaN)

// if ( "NaN"){
//     console.log("true")
// }
// else {
// console.log("false")
// }

    //    * convert string to number
    // var a = "10.5"
    //  var b = +a
    // var b =Number(a)
    // var b =parseFloat(a)
    // var b =parseInt(a)
    // var b =a.toString(); 
    
    //  *seperate like 1,234,567,
//     var a = 1.059328438 
//     var b =a.toLocaleString();    
// console.log(b)
// var brandList

    // *assign loop answer =30
// var a = 0;
// for (var i=0; i<10; i++){
// // a += 3;
// }
// console.log(a)

    //  *Cunstructor function of date and time  
// var currentDate = new Date( );
// console.log(currentDate);

// console.log(currentDate.getDate());
// console.log(currentDate.getMonth()+1);

        //   *set date
        // var a = new Date();
        // // a.setDate(1);
        // a.setMonth(0)
        // a.setFullYear(2000);
        // a.setMilliseconds(54)
        
        // // *Date after 5 days
        // a.setDate(a.getDate()+5);
        // console.log(a);








    

    //  *inverse counting
// for (i=10; i>0; i--){ //or increment value is "i=i-1"
//     console.log(i);
// }

           //*2D or nested array
    //  let matrix = [[1,2,3], [4,5,6,7], [8],]

    //  console.log(matrix);
    //  console.log(matrix[1]);
//  console.log(matrix[2][0]); // 1 is index and 2 is  child index

        //    *matrix lentgh
            //    let matrix = [
            //     [1,6,3],
            //     [4,53,60],
            //      [8,89,90],
            //     ]
            //     for (let i = 0;i < matrix.length;i++){
            //         // console.log(matrix[i]);
            //         for (let j = 0 ; j<matrix[i].length;j++)
            //         console.log(matrix[i][j]);
            //     }




           //*for nested loop
// let column = 20;
// let row = 5;

// for (i=0; i<row; i++){
//  for (j=0; j<column; j++){
//     console.log(`row = ${i+1} column = ${j+1}`)
//  }
// } 

// function
// function message(num1, num2, num3 = 4){
//     // console.log(num1,num2,num3)
//     return num1 + num2 + num3
// }
// result = message(3,6)
// console.log("the result is", result)


// Arrow funct
// const value=(x)=>{
//     console.log("value of x is", x)
// }
// value(20)

// if (true){
// const firstName = "ibrahim"
// if (firstName === "ibrahim"){
// const lastName = " khan"
//     console.log(firstName+lastName)
// }
// } 

// function plusOne(x){
//     // console.log((x)+1)
//     return x + 1
// }
// console.log(plusOne(2));

// *immediately invoked function
// ((key)=> {
//     console.log(key)
// })("oject")


// function square(number) {
//     return number * number;
//   }
//   console.log( square(3))

// *Add element then delete

// var userInput= document.getElementById("userInput");
// var getDiv= document.getElementById("parent");


// // *insert attribute
// function abc(){
//     console.log("Abc work");

// }

// userInput.setAttribute("class", "abc")
// userInput.setAttribute("id", "abc")
// userInput.setAttribute("onfocus", "abc()")

// // *delete button
// function deleteparent(btn){
// console.log(btn.parentNode);
//     btn.parentNode.remove();
// }
// // *edit button
// function editparent(btn){
// console.log(btn.parentNode.childNodes[0]);
//     btn.parentNode.childNodes[0].nodeValue = prompt("Edit your text");
// }

// // *delete all button
// function deleteAll(){
//         parent.innerHTML="";
// }
// function addElement(){
//     var pera = document.createElement("P");
//     var text = document.createTextNode(userInput.value);


//     var editBtn = document.createElement("button");
// var editText = document.createTextNode("edit")
// editBtn.appendChild(editText)
// editBtn.setAttribute("onclick","editparent(this)")
// editBtn.appendChild(editText);


//     var deletBtn = document.createElement("button");
// var deleteText = document.createTextNode("delete")
// deletBtn.appendChild(deleteText);
// deletBtn.setAttribute("onclick","deleteparent(this)")
// deletBtn.appendChild(deleteText);

// pera.appendChild(text);
// pera.appendChild(editBtn)
// pera.appendChild(deletBtn)


// getDiv.appendChild(pera);
// console.log(pera);
// userInput.value=""
// }

// *Objects


// var std1 = {
// fname:"ibrahim",
// lname:"khan",
// age:"55",
// cell:"00005"
// }
// var std2 = {
// fname:"kaif",
// lname:"kha",
// age:"45",
// cell:"00004"
// }
// var std3 = {
// fname:"salman",
// lname:"kan",
// age:"40",
// cell:"00003"
// }
// var std4 = {
// fname:"kh",
// lname:"k",
// age:"65",
// cell:"00002"
// }
// var std5 = {
// fname:"sultan",
// lname:"pathan",
// age:"75",
// cell:"00001",
// }

// var  students= [
    //     std1,std2,std3,std4,std5,
    // ]
    
    // std1.age=20
    // var checkValue = "phone" in std2;
    // console.log(checkValue);
    
    // var obj = {
        
    // }
// var students=[
// {
//     age:"10",
//     result:50,
// },
// {
//     age:"20",
//     result:50,
// },
// {
//     age:"30",
//     result:50,
// },
// {
//     age:"40",
//     result:50,
// }

// ]

// var inp = document.getElementById("inp")

// function searchAge(){
// for (var i = 0; i < students.length; i++) {
//     var std = students[i];
//     if(std.age==inp.value){
//     console.log(std);
// }
// }
// }

// object constructor 
// function CreateObject(name,age,address) {
//    this.name = name;
//    this.age= age;
//    this.address = address;
// }
// createObject.prototype.school ="city school";

// var obj = new createObject("ibrahim",20,"khi")
// console.log(obj);

// var a = ["a","b","c",[1,2,3,["A","B","C"]]]

// var b = a.flat(Infinity);
// console.log(b);

// var obj={
//     id:1,
//     name:"ibrahim",
// }

// var keys = Object.keys(obj);
// console.log(keys);


// var value = Object.values(obj);
// console.log(value);

// window.location.href = "http://www.facebook.com"

// *Object
// const arr = ["js","cpp","python"]
// for (const key in arr) {
// console.log(arr[key]);   
//     }

// const nums = [1,2,3,4,5,6,7]

// console.log(nums.filter((num)=> num>3));
// console.log(a);
// console.log(a);
// let a = 10;
// let b = true;

// a > 12 ? console.log("a se zyada") 
// : b ? console.log("b chal gaya") 
// : console.log( "  nhi chala");

// short code 
// a>12 || b ? console.log("chal gaya")
// : console.log("nhi chala");

// let condition = true;
// let a = condition && 1;
// console.log(a);

// function abc(a,b,...abc){
// console.log("🚀 ~ abc ~ b:",a, b)

//     console.log("🚀 ~ abc:", abc)
// }
//     abc(1,2,3,4,5,6,7,8,9)

    // destructure of array and object
//array
    // let a = [1,2,3,4,5];
    
    // let [index6,index2,Index3,index4] = a;
    // console.log("🚀 ~ index6:", index6)
    // console.log("🚀 ~ index2:", index2)
  
//object
// let b ={
//     id:1,
//     name:"name",
//     age:12,
// }    
// let {id,name,age} = b;
// console.log("🚀 ~ age:", age)
// console.log("🚀 ~ name:", name)
// console.log("🚀 ~ id:", id)

//lexical scoping

// var a = "xyz";
// function abc() {
// var a ="abc";  //op> abc
// console.log(a);
// }
// abc();

// default parameters

// function abc(b=1){  //if b=0 in argument the default value will be 1 
//     let a = 200;
//     console.log("🚀 ~ abc ~ b*a:",b* a)
// }
// abc()

// *filter
// let a = [1,2,3,4,5]
// const value = a.filter((num)=>{
//     return num>2
// })

// or
// const value = []
// a.forEach((num)=>{
//     if(num>2){
//         value.push(num);
//     }
// })
// console.log("🚀 ~ value ~ value:", value)

// *map
// let num = [1,2,3,4,5]

// num.map((loop)=>{
//     console.log(loop);
// });

// let newNum = num
// .map((num)=> num +5)   //chaining rule
// .map((num)=> num +10)
// .filter((num)=>  num >18)
// console.log("🚀 ~ newNum:", newNum)

// *reduce
// let points = [1,2,3,4]
// let totalPoints= points.reduce(function (a,add){ //a>acc, add>calculate
//     console.log(`a ${a}and add ${add}`);

// return a + add
// })
// console.log("🚀 ~ totalPoints ~ totalPoints:", totalPoints)

// foreach method 
// let totalPoints= points.reduce((a,add)=> a+add,)
// console.log("🚀 ~ totalPoints:", totalPoints)

// reduce in object
// let bills =[
//     {
// billName:"light",
// bill:10
// },
// {
// billName:"gas",
// bill:20
// },
// {
// billName:"water",
// bill:30
// },
// ]
// const totalBill = bills.reduce((acc,calculate) =>  acc + calculate.bill);

// console.log("🚀 ~ totalBill:", totalBill)


// arrow Function with one perimeter
// let fun = a =>{
//     console.log(a);
// }
// fun("run");

// let fun = (a,b)=>
//     "return"

// let a =fun()
// console.log(a);

// let a = _ => _
// let abc = a ("this is arrow")
// console.log("🚀 ~ abc:", abc)



