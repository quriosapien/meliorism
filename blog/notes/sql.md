# SQL Notes

## MYSQL

### Data Types

#### **🔢 Numeric Types**

| Type           | Range/Use Case                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------ |
| `TINYINT`      | -128 to 127 (or 0-255 unsigned). Ideal for booleans (0/1) or small enums.                        |
| `SMALLINT`     | -32,768 to 32,767 (0-65,535 unsigned). Small counters/IDs.                                       |
| `MEDIUMINT`    | -8.3M to 8.3M (0-16M unsigned). Middle-ground integers.                                          |
| `INT`          | -2.1B to 2.1B (0-4.2B unsigned). Default for most whole numbers (e.g., user IDs).                |
| `BIGINT`       | ±9.2 quintillion (0-18 quintillion unsigned). Large IDs (e.g., Twitter tweets).                  |
| `FLOAT`        | Approximate decimals (7 digits). Scientific data, less precise.                                  |
| `DOUBLE`       | Approximate decimals (15 digits). Larger/more precise than `FLOAT`.                              |
| `DECIMAL(p,s)` | Exact decimals (e.g., `DECIMAL(10,2)` for currency). Precision = total digits, scale = decimals. |

#### **📅 Date & Time**

| Type        | Use Case                                                             |
| ----------- | -------------------------------------------------------------------- |
| `DATE`      | YYYY-MM-DD (no time). Birthdates, events.                            |
| `TIME`      | HH:MM:SS (or -838:59:59 to 838:59:59). Durations.                    |
| `DATETIME`  | YYYY-MM-DD HH:MM:SS (no timezone). Local events (e.g., user signup). |
| `TIMESTAMP` | Unix epoch (1970-2038, timezone-aware). Auto-updates on row change.  |
| `YEAR`      | 1901-2155 (or 4-digit format). Rarely used.                          |

#### **📜 String Types**

| Type           | Max Size/Use Case                                                                    |
| -------------- | ------------------------------------------------------------------------------------ |
| `CHAR(n)`      | Fixed-length (1-255 chars). Fast for **exact-length** strings (e.g., country codes). |
| `VARCHAR(n)`   | Variable-length (1-65,535 chars). Default for most text (e.g., usernames, emails).   |
| `TINYTEXT`     | 255 chars. Short text (rarely needed over `VARCHAR`).                                |
| `TEXT`         | 65KB. Articles, comments.                                                            |
| `MEDIUMTEXT`   | 16MB. Large documents (e.g., JSON blobs).                                            |
| `LONGTEXT`     | 4GB. Massive text (e.g., logs, books).                                               |
| `BINARY(n)`    | Fixed-length binary (e.g., hashes).                                                  |
| `VARBINARY(n)` | Variable binary (e.g., encrypted data).                                              |
| `ENUM`         | Predefined list (e.g., `ENUM('red','green','blue')`). Limited options.               |
| `SET`          | Multiple values from a list (e.g., `SET('a','b','c')`). Rarely used.                 |

#### **🌀 Other Types**

| Type      | Use Case                                                                  |
| --------- | ------------------------------------------------------------------------- |
| `BOOLEAN` | Alias for `TINYINT(1)` (0=false, 1=true).                                 |
| `JSON`    | Store/query JSON data (MySQL 5.7+). Semi-structured data (e.g., configs). |
| `BLOB`    | Binary data (images, files). Prefer `TEXT` for UTF-8.                     |

#### **⚡ Quick Rules of Thumb**

- **Integers**: Use `INT` unless space/size demands otherwise.
- **Decimals**: `DECIMAL` for money (exact), `FLOAT/DOUBLE` for scientific.
- **Strings**: `VARCHAR` for most text, `TEXT` for large content.
- **Dates**: `DATETIME` for general use, `TIMESTAMP` for auto-updates.
