import prisma from "../../../lib/prisma";

export async function GET() {
  const bands = await prisma.band.findMany();
  return Response.json(bands);
}

export async function POST() {
  return Response.json({ msg: "API Rest - Método POST" });
}

export async function PUT() {
  return Response.json({ msg: "API Rest - Método PUT" });
}

export async function PATCH() {
  return Response.json({ msg: "API Rest - Método PATCH" });
}

export async function DELETE() {
  return Response.json({ msg: "API Rest - Método DELETE" });
}

export async function HEAD() {
  return Response.json({ msg: "API Rest - Método HEAD" });
}

export async function OPTIONS() {
  return Response.json({ msg: "API Rest - Método OPTIONS" });
}
