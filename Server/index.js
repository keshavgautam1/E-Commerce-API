import dotenv from 'dotenv';  // we have edited the dev scripts in package.json to include the dotenv config using import dotenv from 'dotenv'; otherwise we have to use require method to import dotenv
import connectDB from './db/index.js';
import app from './app.js';

dotenv.config({ path: './.env'});


connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000,() => {
        console.log(`Server is listening on port: ${process.env.PORT}`);
    })
})
.catch((err)=> {console.log("mongodb connection failed !!!",err)});

