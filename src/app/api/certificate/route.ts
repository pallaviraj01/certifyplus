import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const certificates = await prisma.certificate.findMany({
    include: {
      user: true,
    },
  });

  return NextResponse.json(certificates);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newCertificate = await prisma.certificate.create({
    data: {
      certificateId: body.certificateId,
      userId: body.userId,
      status: body.status,
    },
  });

  return NextResponse.json(newCertificate);
}
