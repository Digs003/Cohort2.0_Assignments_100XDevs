const fs=require("fs");
const content="I am writing to file";
fs.writeFile("a.txt",content,err=>{
    if(err){
        console.error(err);
    }
});