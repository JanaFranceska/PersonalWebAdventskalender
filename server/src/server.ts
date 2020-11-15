import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello Adventskalendar!');
});
app.post('/user',(req,res) =>{
    //
    res.send('Accepted');
});
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );