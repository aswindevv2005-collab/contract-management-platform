// src/components/Contract/ContractLifecycle.tsx

import type { ContractStatus } from "../../types";

const transitions: Record<ContractStatus, ContractStatus[]> = {
  Created: ["Approved", "Revoked"],
  Approved: ["Sent"],
  Sent: ["Signed", "Revoked"],
  Signed: ["Locked"],
  Locked: [],
  Revoked: [],
};

interface Props {
  status: ContractStatus;
  onChange: (status: ContractStatus) => void;
}

export default function ContractLifecycle({ status, onChange }: Props) {
  return (
    <div style={{ marginTop: "16px" }}>
      <h3>Contract Status: {status}</h3>

      {transitions[status].map((next) => (
        <button
          key={next}
          onClick={() => onChange(next)}
          style={{ marginRight: "8px" }}
        >
          {next}
        </button>
      ))}
    </div>
  );
}
