import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello Adventskalendar!');
});
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );