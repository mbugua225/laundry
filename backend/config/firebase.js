const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();

// Assuming service account key is available in environment variables
// Or path to service account key file
let serviceAccount;

try {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    // Fix private key formatting if it has literal \n from dotenv
    if (serviceAccount.private_key) {
      serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
    }
    
    // Explicitly override projectId to match the Firebase console
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: "laundry-215a3"
    });
    console.log("Firebase initialized successfully with project laundry-215a3");
  } else {
    console.warn("FIREBASE_SERVICE_ACCOUNT env var not found. Firebase not initialized.");
  }
} catch (error) {
  console.error("Firebase initialization error:", error);
}

const db = admin.apps.length > 0 ? admin.firestore() : null;

module.exports = { db };
