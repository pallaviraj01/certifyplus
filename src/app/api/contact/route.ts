import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma';
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    // Save the contact form data into the database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    })

    console.log(name, email, message);
    
    return NextResponse.json({ success: true, contact }, { status: 201 })
  } catch (error) {
    console.error(error); //log the error for debugging
    return NextResponse.json({ error: 'Failed to submit the form' }, { status: 500 })
  }
}
