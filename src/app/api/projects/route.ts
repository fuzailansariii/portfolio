import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET() {
  try {
    const projects = await prisma.projects.findMany({
      orderBy: { createdAt: "desc" },
    });

    if (projects.length > 0) {
      return NextResponse.json(
        {
          message: "Projects fetched successfully",
          projects,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        message: "No projects found",
        projects: [],
      },
      { status: 404 }
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
