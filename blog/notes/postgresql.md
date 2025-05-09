# PostgreSQL

## PostgreSQL Data Types

### **🔢 Numeric Types**

| Type               | Range/Use Case                                     | Storage  |
| ------------------ | -------------------------------------------------- | -------- |
| `SMALLINT`         | -32,768 to 32,767                                  | 2 bytes  |
| `INT` / `INTEGER`  | -2.1B to 2.1B                                      | 4 bytes  |
| `BIGINT`           | ±9.2 quintillion                                   | 8 bytes  |
| `DECIMAL(p,s)`     | Exact decimal (e.g., `DECIMAL(10,2)` for currency) | Variable |
| `NUMERIC(p,s)`     | Same as `DECIMAL` (synonym)                        | Variable |
| `REAL`             | 6-digit precision (float)                          | 4 bytes  |
| `DOUBLE PRECISION` | 15-digit precision (double)                        | 8 bytes  |
| `SERIAL`           | Auto-incrementing `INT` (1 to 2.1B)                | 4 bytes  |
| `BIGSERIAL`        | Auto-incrementing `BIGINT` (1 to 9.2 quintillion)  | 8 bytes  |

---

### **📅 Date/Time Types**

| Type          | Range/Use Case                     | Storage  |
| ------------- | ---------------------------------- | -------- |
| `DATE`        | 4713 BC to 5874897 AD              | 4 bytes  |
| `TIME`        | 00:00:00 to 24:00:00 (no timezone) | 8 bytes  |
| `TIMESTAMP`   | 4713 BC to 294276 AD (no timezone) | 8 bytes  |
| `TIMESTAMPTZ` | `TIMESTAMP` with timezone          | 8 bytes  |
| `INTERVAL`    | Time intervals (e.g., `'1 day'`)   | 16 bytes |

---

### **📜 String Types**

| Type         | Max Size/Use Case                 | Storage                |
| ------------ | --------------------------------- | ---------------------- |
| `CHAR(n)`    | Fixed-length (padded with spaces) | 1 byte/char            |
| `VARCHAR(n)` | Variable-length (up to 1GB)       | 1 byte/char + overhead |
| `TEXT`       | Unlimited length                  | Variable               |
| `BYTEA`      | Binary data (e.g., images)        | Variable               |

---

### **🌀 Other Types**

| Type      | Use Case                                     | Storage  |
| --------- | -------------------------------------------- | -------- |
| `BOOLEAN` | `TRUE`/`FALSE`/`NULL`                        | 1 byte   |
| `JSON`    | JSON data (plain text)                       | Variable |
| `JSONB`   | Binary JSON (indexable, faster query)        | Variable |
| `UUID`    | Universally Unique Identifier                | 16 bytes |
| `ENUM`    | Predefined list (e.g., `ENUM('red','blue')`) | 4 bytes  |
| `ARRAY`   | Stores arrays (e.g., `INT[]`)                | Variable |

---

### **Key Notes:**

- **`SERIAL` vs `IDENTITY`**: Prefer `IDENTITY` (SQL-standard) in modern PG:

  ```sql
  CREATE TABLE users (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      name TEXT
  );
  ```

- **`JSONB` > `JSON`**: Use `JSONB` for indexing/querying; `JSON` for literal storage.
- **`TEXT` over `VARCHAR`**: `TEXT` is preferred for unbounded strings (no performance difference).

## UUID

**UUIDv7 in PostgreSQL 17.5: Use Cases & Implementation**

### **🔹 Key Features of UUIDv7**

✅ **Time-Ordered** – First 48 bits = Unix timestamp (milliseconds).  
✅ **Efficient Indexing** – Reduces fragmentation vs. random UUIDv4.  
✅ **No MAC Exposure** – Unlike UUIDv1, it doesn’t leak hardware info.  
✅ **Collision Resistant** – Remaining bits are random/sequential.

**Example UUIDv7:**

```
018f0a24-1e6b-7f00-9c3d-2f4e5d6c7b8a
^^^^^^^^ (timestamp prefix)
```

### **🔹 How to Use UUIDv7 in PostgreSQL 17.5**

#### **1. Enable `uuid-ossp` Extension**

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

#### **2. Generate UUIDv7**

```sql
SELECT uuid_generate_v7();  -- Time-ordered UUID
```

#### **3. Use as Default Primary Key**

```sql
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v7(),
    user_id UUID,
    amount DECIMAL(10,2)
);
```

### **🔹 Performance Considerations**

- **Indexing**: ~16% larger than `BIGINT` but better than random UUIDv4.
- **Storage**: 16 bytes (same as other UUIDs).
- **Benchmark**: Inserts are ~2x faster than UUIDv4 in indexed tables.
