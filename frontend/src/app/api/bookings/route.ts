import { NextResponse } from 'next/server';
import { db } from '../../../../../lib/firebase-admin';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      customerType,
      frequency, // Daily, Weekly, Monthly
      logistics, // Pickup and Delivery, Walk-in
      location, // { lat, lng } or manual string
    } = body;

    if (!name || !phone || !customerType || !frequency || !logistics) {
      return NextResponse.json(
        { error: 'Please provide all required fields' },
        { status: 400 }
      );
    }

    if (!db) {
      return NextResponse.json(
        { error: 'Database not initialized' },
        { status: 500 }
      );
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

    return NextResponse.json(
      {
        message: 'Booking created successfully',
        bookingId: docRef.id,
        data: newBooking,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Server error while creating booking' },
      { status: 500 }
    );
  }
}
