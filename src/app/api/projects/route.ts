import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET() {
  try {
    const projects = await prisma.projects.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(
      {
        message:
          projects.length > 0
            ? "Projects fetched successfully"
            : "No projects found",
        projects,
      },
      { status: 200 }
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
