import { AngularFireModule } from 'angularfire2';

const firebase_config = {
    apiKey: "AIzaSyAiNNle1GCWBfpHkI4sulE_KrRFFW32rj0",
    authDomain: "project-984421963420235825.firebaseapp.com",
    databaseURL: "https://project-984421963420235825.firebaseio.com",
    storageBucket: "project-984421963420235825.appspot.com",
    messagingSenderId: "828822141294"
};

export const AppFirebase = AngularFireModule.initializeApp(firebase_config);
