import prisma from "../../../../lib/prisma";

export async function GET() {
  const items = await prisma.track.findMany();
  return Response.json(items);
}

export function POST(request: Request) {
  console.log(request);
  return Response.json({ msg: "API Rest - Método Post" });
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
