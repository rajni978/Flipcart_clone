
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
 apiKey: "AIzaSyC44FgCnStBFsEbBlGnFzQIyv_sdAsP8FE",
 authDomain: "micro-agency-495610-u4.firebaseapp.com",
 projectId: "micro-agency-495610-u4",
 storageBucket: "micro-agency-495610-u4.appspot.com",
 messagingSenderId: "222783205717",
 appId: "1:222783205717:web:8bf9890e1327106dca3fdc"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };



