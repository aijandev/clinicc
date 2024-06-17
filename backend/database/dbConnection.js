import mongoose from 'mongoose';

export const dbConnection = ()=>{
    mongoose
.connect('mongodb+srv://nebojitel:ximangranwan.1@nebojitel.4qoypjd.mongodb.net/blog?retryWrites=true&w=majority&appName=Nebojitel')
.then(()=> console.log('База работает'))
.catch((err)=> console.log('Неа, база не работает', err))
}