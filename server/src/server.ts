import express from 'express';
import {log} from "util";

const app = express();
const port = 3000;

app.use(express.json());
app.use(require('body-parser').urlencoded({extended: true}));

app.get('/', (req, res) => {
    //TODO response with sth else?
  res.send('Hello Adventskalendar!');
});

app.post('/adminData',(req,res) => {
    console.log("posted data:" + JSON.stringify(req.body));
    //TODO validate input


    let clickedDayInt = clickedDayAsInt({dataClient: JSON.stringify(req.body)});

    let resBool = checkDate({clicked_dd: clickedDayInt});

    let path = "";
    if (resBool == true) {
        //get Filepath
        path = getPictureFilePath({clickedDayInt: clickedDayInt});
    }

    //##This is added to reduce the warnings on client side
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //##

    //Response:
    res.status(200);
    //res.send(res_text);
    res.sendFile(path, function (err) {
        if (err) {
            console.error(err);
            res.status(401);
        }
    });
});


app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );



function checkDate({clicked_dd}: { clicked_dd: any }){

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    //let yyyy = today.getFullYear();

    // if(mm != "11"){
    //     return false;
    // }


    // check date
    if(parseInt(clicked_dd) <= parseInt(dd) ){
        return true;
    }
    return false;
}


function clickedDayAsInt({dataClient}: { dataClient: any }) {

    let jsonDataClient = JSON.parse(dataClient);

    let clicked_dayId = jsonDataClient.dayID;
    let clicked_dayInt = clicked_dayId.substring(3);

    return clicked_dayInt;
}

function getPictureFilePath({clickedDayInt}: { clickedDayInt: any }) {
    return "/Users/universitat/WebstormProjects/PersonalWebAdventskalender/server/src/pictures/"+ clickedDayInt +".jpeg";

}