let fs = require('fs');

fs.readFile('08.json', 'utf8', (err,data)=>{
    if(err) throw err;
    console.log(data);
})