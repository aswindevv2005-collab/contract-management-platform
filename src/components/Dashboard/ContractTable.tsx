// src/components/Dashboard/ContractTable.tsx

import type { Contract } from "../../types";

interface Props {
  contracts: Contract[];
  onSelect: (contract: Contract) => void;
}

export default function ContractTable({ contracts, onSelect }: Props) {
  return (
    <table border={1} cellPadding={6}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Blueprint</th>
          <th>Status</th>
          <th>Created</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contracts.map((c) => (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.blueprintName}</td>
            <td>{c.status}</td>
            <td>{c.createdAt}</td>
            <td>
              <button
                disabled={c.status === "Revoked" || c.status === "Locked"}
                onClick={() => onSelect(c)}
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
