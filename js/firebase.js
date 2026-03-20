import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

getDatabase,
ref,
get

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {

apiKey: "AIzaSyBRFfsMtyzwG0xbLI9k90perHJeSdJPAhU",

authDomain: "healthnarrative-c4af3.firebaseapp.com",

databaseURL:
"https://healthnarrative-c4af3-default-rtdb.firebaseio.com",

projectId: "healthnarrative-c4af3",

storageBucket:
"healthnarrative-c4af3.firebasestorage.app",

messagingSenderId: "637852726804",

appId:
"1:637852726804:web:ea41a628ff1cef57341901"

};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export {database,ref,get};