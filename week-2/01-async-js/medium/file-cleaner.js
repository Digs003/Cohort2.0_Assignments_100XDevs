const fs=require("fs");

const content=fs.readFileSync("b.txt","utf-8");

const cleancontent=content.replace(/\s+/g,' ');

fs.writeFileSync("b.txt",cleancontent);


