import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
app.use(require('body-parser').urlencoded({extended: true}));

app.get('/', (req, res) => {
    //TODO response with sth else?
  res.send('Hello Adventskalendar!');
});

app.post('/adminData',(req,res) =>{
    console.log("posted data:" + JSON.stringify(req.body));
    //TODO validate input

    //##This is added to reduce the warnings on client side
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //##

    //Response:
    res.status(200);
    res.send('OK');
});

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );