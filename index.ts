import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: Express = express();
app.use(express.json());
app.use(bodyParser.urlencoded());
const port = 8080; // default port to listen

const authRouter = require('./src/routes/authenticator.router')

// define a route handler for the default home page
app.get( "/", ( req: Request, res:Response ) => {
    res.send( "Hello world! We are live" );
} );

app.use('/auth', authRouter);

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );