// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD2arr6m9_7ObKIr5Y2n99CK-IF4GZHiOo",
	authDomain: "ride-track-p.firebaseapp.com",
	projectId: "ride-track-p",
	storageBucket: "ride-track-p.firebasestorage.app",
	messagingSenderId: "553013301374",
	appId: "1:553013301374:web:54ced8c7ef3cb3cec9082f",
	measurementId: "G-427YKKGL6Q"
};

const rideTrackApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(rideTrackApp);
const analytics = getAnalytics(rideTrackApp);

export { rideTrackApp, analytics, db }
