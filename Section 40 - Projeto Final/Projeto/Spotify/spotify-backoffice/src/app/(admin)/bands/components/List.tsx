import Button from "@/app/components/Button";

interface Band {
  name: string;
  status: string;
}

const TableRow = ({ name, status }: Band) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-rowwrap text-gray-800">{name}</td>
      <td className="px-6 py-4 whitespace-rowwrap">
        <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-green-100 text-green-800">
          {status}
        </span>
      </td>
      <td className="text-right font-sm space-x-4 whitespace-nowrap">
        <Button>Editar</Button>
        <Button>Excluir</Button>
      </td>
    </tr>
  );
};

export default function List() {
  return (
    <section className="overflow-x-auto p-4">
      <header className="flex justify-end mb-4">
        <Button>Adcionar</Button>
      </header>
      <table className="min-w-full border border-gray-200 rounded-sm overflow-hidden">
        <thead className="bg-gray-800 text-gray-50 uppercase text-left">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nome
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <TableRow name="The Dead Pirates" status="Ativo"></TableRow>
          <TableRow name="Flying Lotus" status="Ativo"></TableRow>
        </tbody>
      </table>
    </section>
  );
}
