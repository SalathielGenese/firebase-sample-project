import { https } from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';



const app = express();

app.use( cors({ origin: true }) );
app.use( ( request, response ) => {
    response.json({ ...request.body, timestamp: Date.now() });
});

export const api = https.onRequest( ( request, response ) => {
    if ( !request.path ) {
        request.url = `/${ request.url }`;
    }
});
