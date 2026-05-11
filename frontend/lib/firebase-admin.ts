import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK if it hasn't been initialized yet
if (!admin.apps.length) {
  try {
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
      // Fix private key formatting if it has literal \n from dotenv
      if (serviceAccount.private_key) {
        serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
      }
      
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        projectId: "laundry-215a3"
      });
      console.log("Firebase initialized successfully using local service account key.");
    } else {
      // If running on Firebase App Hosting / Cloud Run, use Application Default Credentials
      admin.initializeApp({
        projectId: "laundry-215a3"
      });
      console.log("Firebase initialized using Google Application Default Credentials.");
    }
  } catch (error) {
    console.error("Firebase initialization error:", error);
  }
}

export const db = admin.apps.length > 0 ? admin.firestore() : null;
