const fs1=require('fs')

// Read the file -readFile()
fs1.readFile('operation.txt','utf8',(err,f1)=>
{
    if(err)
    {
        console.error('Error reading file :',err)
    }
    console.log(f1);
})

// write-->writeFile()
fs1.writeFile('operation.txt','HelloWorld!',(err)=>
{
    if(err)
    {
        console.error(err)
    }
    console.log('file written successfully');

    
})
fs1.readFile('operation.txt','utf8',(err,data)=>
    {
        if(err)
        {
            console.error('Error reading file :',err)
        }
        console.log(data);
    })
// appened-->appendFile()
fs1.appendFile('operation.txt','\nAppened textworld',(err)=>
{
    if(err)
    {
        console.err(err)
    }
    console.log("data append")
})
// Delete-->unlink()
fs1.unlink('operation.txt',(err)=>
    {
        if(err)
        {
            console.error(err);
        }
        console.log("data deleted");
    })