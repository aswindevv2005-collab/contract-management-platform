import { useState } from "react";
import type { Blueprint, FieldType } from "../../types";

interface Props {
  onSave: (bp: Blueprint) => void;
}

export default function BlueprintCreator({ onSave }: Props) {
  const [name, setName] = useState("");
  const [fields, setFields] = useState<any[]>([]);

  const addField = (type: FieldType) => {
    setFields((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        type,
        label: `${type} Field`,
        x: 20,
        y: 20,
      },
    ]);
  };

  const saveBlueprint = () => {
    if (!name) return alert("Enter blueprint name");

    const blueprint: Blueprint = {
      id: Date.now().toString(),
      name,
      fields,
    };

    onSave(blueprint);
    setName("");
    setFields([]);
  };

  return (
    <div>
      <h2>Create Blueprint</h2>

      <input
        placeholder="Blueprint Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div>
        <button onClick={() => addField("Text")}>Text</button>
        <button onClick={() => addField("Date")}>Date</button>
        <button onClick={() => addField("Signature")}>Signature</button>
        <button onClick={() => addField("Checkbox")}>Checkbox</button>
      </div>

      <button onClick={saveBlueprint}>Save Blueprint</button>
    </div>
  );
}
