import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, password } = await req.json();
    if (!fullName || !email || !password) {
      return NextResponse.json(
        {
          message: "Invalid inputs",
        },
        {
          status: 400,
        }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return NextResponse.json(
        {
          message: "User already exist with this email",
        },
        {
          status: 409,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await prisma.user.create({
      data: {
        email,
        fullName,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        emal: newUser.email,
        name: newUser.fullName,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Error while creating new user",
      },
      {
        status: 500,
      }
    );
  }
}
