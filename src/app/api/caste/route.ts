import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { v4 as uuidv4 } from 'uuid'; // To generate unique UUID

// Helper function to generate certificate number
function generateCertificateNumber(applicantName: string): string {
  const randomString = uuidv4().split('-')[0]; // Generate a short unique string
  const initials = applicantName.split(' ').map(name => name[0]).join('').toUpperCase();
  const date = new Date().getFullYear(); // Add current year for better uniqueness

  // Combine initials, random string, and year
  return `${initials}-${randomString}-${date}`;
}

// Generate caste certificate
export async function POST(request: Request) {
  const requestBody = await request.json();
  console.log('Received request body:', requestBody);
  const {
    applicantName,
    fatherName,
    motherName,
    husbandName,
    gender,
    mobileNumber,
    email,
    state,
    district,
    subDivision,
    block,
    wardNo,
    villageTown,
    postOffice,
    policeStation,
    pinCode,
    aadhaarNumber,
    residenceType,
    purpose,
    selfDeclaration,
    expiryDate
  } = requestBody;

  if (!applicantName) {
    return NextResponse.json({ error: 'Applicant name is required' }, { status: 400 });
  }
  try {
    // Auto-generate certificate number
    const certificateNumber = generateCertificateNumber(applicantName);

    // Create a new caste certificate
    const certificate = await prisma.casteCertificate.create({
      data: {
        applicantName,
        fatherName,
        motherName,
        husbandName,
        gender,
        mobileNumber,
        email,
        state,
        district,
        subDivision,
        block,
        wardNo,
        villageTown,
        postOffice,
        policeStation,
        pinCode,
        aadhaarNumber,
        residenceType,
        purpose,
        selfDeclaration,
        certificateNumber,  // Auto-generated certificate number
        expiryDate: expiryDate ? new Date(expiryDate) : null,
        status: 'PENDING',
      },
    });

    return NextResponse.json({ success: true, certificate }, { status: 201 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error: 'Failed to generate certificate' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const certificateNumber = url.searchParams.get('certificateNumber');

  if (!certificateNumber) {
    return NextResponse.json({ error: 'Certificate number is required' }, { status: 400 });
  }

  try {
    const certificate = await prisma.casteCertificate.findUnique({
      where: { certificateNumber },
    });

    if (!certificate) {
      return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });
    }

    // Check if the certificate has expired
    const isExpired = certificate.expiryDate && new Date() > certificate.expiryDate;
    const status = isExpired ? 'EXPIRED' : certificate.status;

    return NextResponse.json({ certificate, status }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Error fetching certificate data' }, { status: 500 });
  }
}