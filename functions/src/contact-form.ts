import { https } from 'firebase-functions';
import * as CORS from 'cors';



const cors = CORS({ origin: true });
export const contactForm = https.onRequest((request, response) => {
    cors( request, response, () => {
        response.json( request.body );
    });
});
