import z from "zod/v4";
import { BandArraySchema } from "../../../schemas/band.schema";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (Array.isArray(data)) {
      const validatedData = BandArraySchema.parse(data);
      //TODO: Armazenar os dados no banco de dados
      return Response.json({ msg: "JSON (array)", validatedData });
    } else {
      return Response.json(
        { error: "Dados encaminhados em um formato inválido" },
        { status: 400 },
      );
    }

    return Response.json({ msg: "Dados recebidos com sucesso!", data });
  } catch (error: unknown) {
    console.log("Erro capturado", error);
    if (error instanceof SyntaxError) {
      console.error(
        "Erro de sintaxe ao ler o JSON do body da requisição",
        error.message,
      );
      return Response.json(
        { error: "Conteúdo (body) da requisição está inválido!" },
        { status: 400 },
      );
    }
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: "Erro de validação", details: error.issues },
        { status: 400 },
      );
    }

    console.log("Erro desconhecido: ", error);
    return Response.json(
      { error: "Erro desconhecido (erro interno do servidor)" },
      { status: 500 },
    );
  }
}
