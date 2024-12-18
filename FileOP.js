//1) Read & Write

FileWrite.js

var f = require("fs");
f.writeFileSync("TestFile.txt","Peonies are beloved perennials known for their large, fragrant blooms and lush foliage."+"\nWelcome to File Handling!!");
f.readFile("TestFile.txt",function(err,data)
{
    if(err)
        console.log(err);
    else
    {
        console.log(data.toString());
        console.log("Read Operation Completed!!");
    }
});
f.appendFile("TestFile.txt","\nAppending Data into the File........",
    function(error)
    {
        if(error)
            console.log(error);
        else
        {
            console.log("Appending Data Operation Completed!!");
        }
    }
);


f.readFile("TestFile.txt",function(err,data)
{
    if(err)
        console.log(err);
    else
    {
        console.log(data.toString());
        console.log("Read Operation Completed!!");
    }
});




//2) Append

FileAppend.js

var f = require("fs");
data=f.readFileSync("TestFile.txt");
console.log("Before Appending : "+data.toString());


f.appendFileSync("TestFile.txt","\nAppending Data into the File........",
    function(error)
    {
        if(error)
            console.log(error);
        else
        {
            console.log("Appending Data Operation Completed!!");
        }
    }
);


f.readFile("TestFile.txt",function(err,data)
{
    if(err)
        console.log(err);
    else
    {
        console.log("After Appending : "+data.toString());
    }
});




//3) Rename

FileRename.js

var f = require("fs");
f.mkdirSync('./MCA_WEB_TECH');
f.renameSync('TestFile.txt','NewFile.txt');
f.readFile('TestFile.txt',
    function(err,data)
    {
        if(err)
            return console.error(err);
        else
        {
            console.log("Reading File..\n");
            console.log(data.toString());
        }
    });
