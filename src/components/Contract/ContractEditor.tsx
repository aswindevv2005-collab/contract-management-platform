import type { Contract, Field } from "../../types";

interface Props {
  contract: Contract;
  onUpdate: (updated: Contract) => void;
}

export default function ContractEditor({ contract, onUpdate }: Props) {
  const updateFieldValue = (fieldId: string, value: any) => {
    const updatedFields = contract.fields.map((f) =>
      f.id === fieldId ? { ...f, value } : f
    );

    onUpdate({ ...contract, fields: updatedFields });
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Fill Contract Fields</h3>

      {contract.fields.map((field: Field) => (
        <div key={field.id} style={{ marginBottom: "10px" }}>
          <label>{field.label}</label>
          <br />

          {field.type === "Text" && (
            <input
              type="text"
              value={field.value || ""}
              onChange={(e) =>
                updateFieldValue(field.id, e.target.value)
              }
            />
          )}

          {field.type === "Date" && (
            <input
              type="date"
              value={field.value || ""}
              onChange={(e) =>
                updateFieldValue(field.id, e.target.value)
              }
            />
          )}

          {field.type === "Checkbox" && (
            <input
              type="checkbox"
              checked={field.value || false}
              onChange={(e) =>
                updateFieldValue(field.id, e.target.checked)
              }
            />
          )}

          {field.type === "Signature" && (
            <input
              type="text"
              placeholder="Type signature"
              value={field.value || ""}
              onChange={(e) =>
                updateFieldValue(field.id, e.target.value)
              }
            />
          )}
        </div>
      ))}
    </div>
  );
}
