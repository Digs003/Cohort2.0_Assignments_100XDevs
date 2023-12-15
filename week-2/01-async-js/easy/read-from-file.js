const fs=require("fs");
fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data);
})
console.log("Hi There");
//Takes very long time then file readin but still prints first becuase Javascript is single threaded
let a=0;
for(let i=0;i<10000000;i++){
 a++;
}
console.log("Hello");