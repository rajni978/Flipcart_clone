import { auth } from "./firebase.js";
import {
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const sendOtpBtn = document.getElementById("sendOtpBtn");


const handleAuth = async () => {
 const userEmail = emailInput.value.trim();
 const userPassword = passwordInput.value.trim();


 if (!userEmail || !userPassword) {
   alert("Bhai, Email aur Password toh dalo! ✍️");
   return;
 }


 console.log("Process Start...");


 try {
 
   const userCredential = await signInWithEmailAndPassword(auth, userEmail, userPassword);
   const user = userCredential.user;


   if (!user.emailVerified) {
     alert("Email verify nahi hai. Inbox check karo! 📩");
     return;
   }


   alert("Login Successful! 🎉 Welcome to Flipkart Clone");
   console.log("Logged in:", user);


 } catch (error) {
   console.log("Error Code:", error.code);
   if (error.code === "auth/invalid-credential" || error.code === "auth/user-not-found" || error.code === "auth/user-not-found") {
     try {
       const newUserCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
       await sendEmailVerification(newUserCredential.user);
       alert("Naya account ban gaya! Email verify karo phir login karna. 📩");
     } catch (regError) {
       alert("Registration Fail: " + regError.message);
     }
   } else if (error.code === "auth/wrong-password") {
     alert("Password galat hai bhai! ❌");
   } else {
     alert("Error: " + error.message);
   }
 }
};


if(loginBtn) loginBtn.addEventListener("click", handleAuth);
if(sendOtpBtn) sendOtpBtn.addEventListener("click", handleAuth);


console.log("Script fully loaded! ✅");

