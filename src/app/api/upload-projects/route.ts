import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/options";

export async function POST(req: NextRequest) {
  try {
    const { title, description, imageUrl, githubUrl, liveUrl } =
      await req.json();
    // check if the user is authenticated or not
    const session = await getServerSession(authOptions);

    const user = session?.user;

    if (!user || !user.id) {
      return NextResponse.json(
        {
          message: "User is not authenticated",
        },
        {
          status: 403,
        }
      );
    }

    if (user.role !== "ADMIN") {
      return NextResponse.json(
        {
          message: "Only ADMIN can add the projects",
        },
        { status: 403 }
      );
    }
    // get user id
    const userId = user.id;
    //   create new project
    const newProject = await prisma.projects.create({
      data: {
        title,
        description,
        imageUrl,
        userId,
        githubUrl,
        liveUrl,
      },
    });
    return NextResponse.json(
      { message: "Project created successfully", projectId: newProject.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
