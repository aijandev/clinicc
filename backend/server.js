import app from "./app.js";



app.listen(process.env.PORT,  (err) => {
    if(err){
        return console.log(err);
    }
    console.log('С сервером 5174 все ОК');
});