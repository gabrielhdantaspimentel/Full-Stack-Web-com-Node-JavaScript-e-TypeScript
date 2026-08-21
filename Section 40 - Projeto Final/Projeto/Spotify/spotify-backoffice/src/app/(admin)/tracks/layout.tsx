import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="border-2 border-red-500">
      <h1>Teste Musicas</h1>
      {children}
    </div>
  );
}
