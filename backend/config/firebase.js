const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();

try {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    if (serviceAccount.private_key) {
      serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
    }
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: "laundry-215a3"
    });
    console.log("Firebase initialized successfully using local service account key.");
  } else {
    // If running on Cloud Run, use Application Default Credentials
    admin.initializeApp({
      projectId: "laundry-215a3"
    });
    console.log("Firebase initialized using Google Application Default Credentials.");
  }
} catch (error) {
  console.error("Firebase initialization error:", error);
}

const db = admin.apps.length > 0 ? admin.firestore() : null;

module.exports = { db };
