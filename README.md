```md
# Contract Management Platform (Frontend)

## Overview
This project is a **frontend-based Contract Management Platform** built using **React + TypeScript**.  
It allows users to create reusable contract blueprints, generate contracts from those blueprints, manage contract lifecycles, and persist data using browser **Local Storage**.

No backend is used; all data is stored and restored locally.

---

## Features

### 1. Blueprint Creation
- Create reusable contract blueprints
- Supported field types:
  - Text
  - Date
  - Signature
  - Checkbox
- Each blueprint stores:
  - Blueprint name
  - Field definitions
- Blueprints persist after page refresh

---

### 2. Contract Creation
- Create contracts from existing blueprints
- Each contract inherits all blueprint fields
- Stores:
  - Contract name
  - Blueprint reference
  - Creation date
  - Field values

---

### 3. Contract Lifecycle
Each contract follows a controlled lifecycle:

```

Created → Approved → Sent → Signed → Locked
Revoked (can occur after Created or Sent)

```

Rules enforced:
- No skipping lifecycle steps
- Locked contracts cannot be edited
- Revoked contracts cannot proceed further
- UI displays valid actions based on current status

---

### 4. Contract Dashboard
- Table view of all contracts
- Displays:
  - Contract name
  - Blueprint name
  - Status
  - Created date
  - Action button
- Update action disabled for Locked and Revoked contracts

---

### 5. Field Input Handling
- Fields are dynamically rendered based on blueprint definition
- Supported inputs:
  - Text input
  - Date picker
  - Signature (text-based)
  - Checkbox
- Field values are saved per contract
- Values persist after page refresh

---

### 6. Local Storage Persistence
- Data stored in browser Local Storage:
  - `localStorage["blueprints"]`
  - `localStorage["contracts"]`
- Automatic save when state changes
- Automatic restore on app load
- Refresh-safe (no data loss)

---

## Tech Stack
- React (Vite)
- TypeScript
- HTML / CSS
- Browser Local Storage




## Setup Instructions

### 1. Install dependencies
```bash
npm install
````

### 2. Run the application

```bash
npm run dev
```

### 3. Open in browser

```
http://localhost:5173
```

---

## How to Verify Local Storage

1. Create a blueprint and a contract
2. Fill contract fields
3. Open **DevTools → Application → Local Storage**
4. Verify keys:

   * `blueprints`
   * `contracts`
5. Refresh the page and confirm data persists

---

## Assumptions & Limitations

* No backend or authentication
* Single-user browser-based storage
* No drag-and-drop field positioning
* Minimal UI styling (focus on functionality)

---

## Author

Aswin Dev V

