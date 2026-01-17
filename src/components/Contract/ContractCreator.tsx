import { useState } from "react";
import type { Blueprint, Contract } from "../../types";

interface Props {
  blueprints: Blueprint[];
  onCreate: (contract: Contract) => void;
}

export default function ContractCreator({ blueprints, onCreate }: Props) {
  const [name, setName] = useState("");
  const [selectedBlueprintId, setSelectedBlueprintId] = useState("");

  const createContract = () => {
    const blueprint = blueprints.find(
      (b) => b.id === selectedBlueprintId
    );

    if (!blueprint) {
      alert("Select a blueprint");
      return;
    }

    const contract: Contract = {
      id: Date.now().toString(),
      name: name || `${blueprint.name} Contract`,
      blueprintId: blueprint.id,
      blueprintName: blueprint.name,
      status: "Created",
      createdAt: new Date().toLocaleDateString(),
      fields: blueprint.fields.map((f) => ({ ...f })),
    };

    onCreate(contract);
    setName("");
  };

  return (
    <div>
      <h2>Create Contract</h2>

      <select
        value={selectedBlueprintId}
        onChange={(e) => setSelectedBlueprintId(e.target.value)}
      >
        <option value="">Select Blueprint</option>
        {blueprints.map((b) => (
          <option key={b.id} value={b.id}>
            {b.name}
          </option>
        ))}
      </select>

      <input
        placeholder="Contract Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={createContract}>Create</button>
    </div>
  );
}
