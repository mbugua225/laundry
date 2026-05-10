const { db } = require('../config/firebase');

const createBooking = async (req, res) => {
  try {
    const {
      name,
      phone,
      customerType,
      frequency, // Daily, Weekly, Monthly
      logistics, // Pickup and Delivery, Walk-in
      location, // { lat, lng } or manual string
    } = req.body;

    if (!name || !phone || !customerType || !frequency || !logistics) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    if (!db) {
      return res.status(500).json({ error: 'Database not initialized' });
    }

    const newBooking = {
      name,
      phone,
      customerType,
      frequency,
      logistics,
      location,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    const docRef = await db.collection('bookings').add(newBooking);

    res.status(201).json({
      message: 'Booking created successfully',
      bookingId: docRef.id,
      data: newBooking,
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Server error while creating booking' });
  }
};

module.exports = {
  createBooking,
};
