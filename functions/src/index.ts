import { https } from 'firebase-functions';
import * as CORS from 'cors';



const cors = CORS({ origin: true });
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = https.onRequest((request, response) => {
    cors( request, response, () => {
        response.send("Hello from Firebase!");
    });
});
