const { db } = require('./config/firebase');

async function testDB() {
  console.log("Testing database connection...");
  if (!db) {
    console.error("Database not initialized! Check .env formatting.");
    process.exit(1);
  }

  try {
    const docRef = await db.collection('bookings').add({
      name: "Test Backend Script",
      phone: "0712345678",
      customerType: "Schools or Events",
      frequency: "Once",
      logistics: "Pickup & Delivery",
      location: { address: "Test location from script" },
      status: 'pending',
      createdAt: new Date().toISOString()
    });
    console.log("Successfully created test booking with ID:", docRef.id);
  } catch (error) {
    console.error("Failed to write to database:", error);
  }
}

testDB();
