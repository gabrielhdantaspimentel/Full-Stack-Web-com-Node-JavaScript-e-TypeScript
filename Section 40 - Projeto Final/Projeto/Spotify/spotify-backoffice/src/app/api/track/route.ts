import prisma from "../../../../lib/prisma";

export async function GET() {
  const items = await prisma.track.findMany();
  return Response.json(items);
}

export async function POST(request: Request) {
  const bodyText = await request.text();
  console.log(bodyText);
  const params = new URLSearchParams(bodyText);
  const name = params.get("name");
  const slug = params.get("slug");
  const description = params.get("description");
  const status = params.get("status");

  //TODO: Armazenar os dados no banco de dados
  return Response.json({
    msg: "Dados recebidos com sucesso!",
    data: { name, slug, description, status },
  });
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
