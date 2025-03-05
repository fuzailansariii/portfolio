import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/utils/prisma";

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.json();
    if (
      !formData ||
      !formData.fullName ||
      !formData.email ||
      !formData.password
    ) {
      return NextResponse.json(
        {
          message: "Invalid Inputs: Full name, email and password are required",
        },
        { status: 400 }
      );
    }

    const { fullName, email, password } = formData;

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // console.log(existingUser);

    if (existingUser) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        userId: newUser.id,
        userRole: newUser.role,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Something went wrong while signing up", error);
    return NextResponse.json(
      {
        message: "Internel Server Error",
        error: error,
      },
      { status: 500 }
    );
  }
};
