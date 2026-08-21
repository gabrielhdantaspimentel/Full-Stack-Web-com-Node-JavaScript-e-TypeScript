import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="border-2 border-green-500">
      <h1>Teste bands</h1>
      {children}
    </div>
  );
}
