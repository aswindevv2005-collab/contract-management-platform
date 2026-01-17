import { useEffect, useState } from "react";

import BlueprintCreator from "./components/Blueprint/BlueprintCreator";
import ContractCreator from "./components/Contract/ContractCreator";
import ContractTable from "./components/Dashboard/ContractTable";
import ContractLifecycle from "./components/Contract/ContractLifecycle";
import ContractEditor from "./components/Contract/ContractEditor";

import type { Blueprint, Contract, ContractStatus } from "./types";

export default function App() {
  const [blueprints, setBlueprints] = useState<Blueprint[]>([]);
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [selectedContract, setSelectedContract] =
    useState<Contract | null>(null);

  const [loaded, setLoaded] = useState(false);

  
  useEffect(() => {
    try {
      const bp = localStorage.getItem("blueprints");
      const ct = localStorage.getItem("contracts");

      if (bp) setBlueprints(JSON.parse(bp));
      if (ct) setContracts(JSON.parse(ct));
    } catch (e) {
      console.error("Failed to load from localStorage", e);
    } finally {
      setLoaded(true);
    }
  }, []);

 
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("blueprints", JSON.stringify(blueprints));
  }, [blueprints, loaded]);

 
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("contracts", JSON.stringify(contracts));
  }, [contracts, loaded]);

  const updateStatus = (id: string, status: ContractStatus) => {
    setContracts((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status } : c
      )
    );

    setSelectedContract((prev) =>
      prev && prev.id === id ? { ...prev, status } : prev
    );
  };

  const updateContract = (updated: Contract) => {
    setContracts((prev) =>
      prev.map((c) =>
        c.id === updated.id ? updated : c
      )
    );
    setSelectedContract(updated);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Contract Management Platform</h1>

      <BlueprintCreator
        onSave={(bp) =>
          setBlueprints((prev) => [...prev, bp])
        }
      />

      <h3>Saved Blueprints</h3>
      <ul>
        {blueprints.map((b) => (
          <li key={b.id}>
            {b.name} ({b.fields.length} fields)
          </li>
        ))}
      </ul>

      <ContractCreator
        blueprints={blueprints}
        onCreate={(c) =>
          setContracts((prev) => [...prev, c])
        }
      />

      <ContractTable
        contracts={contracts}
        onSelect={(c) => {
          if (c.status !== "Locked" && c.status !== "Revoked") {
            setSelectedContract(c);
          }
        }}
      />

      {selectedContract && (
        <>
          <ContractLifecycle
            status={selectedContract.status}
            onChange={(s) =>
              updateStatus(selectedContract.id, s)
            }
          />

          {selectedContract.status !== "Locked" &&
            selectedContract.status !== "Revoked" && (
              <ContractEditor
                contract={selectedContract}
                onUpdate={updateContract}
              />
            )}
        </>
      )}
    </div>
  );
}
