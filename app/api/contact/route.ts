import { NextRequest, NextResponse } from "next/server";
import prisma  from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, phone, email, details } = data;

    if (!name || !phone || !email || !details) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await prisma.contact.create({
      data: { name, phone, email, details },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
