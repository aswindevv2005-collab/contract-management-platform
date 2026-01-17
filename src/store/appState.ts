import type{ Blueprint, Contract } from "../types";

export interface AppState {
  blueprints: Blueprint[];
  contracts: Contract[];
}
