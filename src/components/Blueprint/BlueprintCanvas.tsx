import type{ Blueprint } from "../../types";

export default function BlueprintCanvas({ blueprint }: { blueprint: Blueprint }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10 }}>
      <h4>{blueprint.name}</h4>
      {blueprint.fields.map((f) => (
        <div key={f.id}>
          {f.label} ({f.type})
        </div>
      ))}
    </div>
  );
}
