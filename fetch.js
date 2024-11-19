const promise=fetch("https://api.github.com/users/shashankk6241");
promise.then(
    (res)=>{
        return res.json();
    }
).then(
    (data)=>console.log(data)
).catch(
    err=>console.log("Error: ",err)
);