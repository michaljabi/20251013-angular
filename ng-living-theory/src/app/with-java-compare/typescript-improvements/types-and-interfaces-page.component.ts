import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Typy i interfejsy"
      fileEntry="./app/with-java-compare/typescript-improvements/types-and-interfaces-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="columns my-3 is-multiline">
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 JavaScript - Brak typów</h4>
              <app-remark [markdown]="jsNoTypes" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">🔷 TypeScript - Typy i interfejsy</h4>
              <app-remark [markdown]="tsTypes" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="interfaces" />

        <div class="box has-background-info-invert my-3">
          <h4 class="title is-5">📦 Interface - dla obiektów</h4>
          <app-remark [markdown]="interfaceExample" />
        </div>

        <app-remark [markdown]="typeAliases" />

        <div class="box has-background-info-invert my-3">
          <h4 class="title is-5">🔀 Type - dla union types</h4>
          <app-remark [markdown]="typeExample" />
        </div>

        <app-remark [markdown]="interchangeable" />

        <app-remark [markdown]="conclusion" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class TypesAndInterfacesPageComponent {

  introduction = `
# Typy i interfejsy w TypeScript

**Kluczowa zaleta TypeScript:** Dodaje **typy i interfejsy** do JavaScript, co pozwala na:
- Definiowanie kształtu obiektów (**interface**)
- Tworzenie typów złożonych i union types (**type**)
- Sprawdzanie poprawności w czasie kompilacji

JavaScript nie ma żadnych typów - wszystko jest sprawdzane w runtime.
  `;

  jsNoTypes = `
\`\`\`javascript
// JavaScript - brak typów
function createUser(name, age, role) {
  return { name, age, role };
}

// Brak kontroli - możesz przekazać cokolwiek
const user1 = createUser("Jan", 25, "admin");
const user2 = createUser(123, "dwadzieścia", null);
const user3 = createUser();  // undefined, undefined, undefined

// Brak informacji o kształcie obiektu
user1.roles;  // undefined (literówka - powinno być 'role')

// Funkcja może zwrócić różne typy
function getUser(id) {
  if (id > 0) return { name: "Jan", age: 25 };
  return null;  // Lub string, lub cokolwiek...
}
\`\`\`
  `;

  tsTypes = `
\`\`\`typescript
// określenie obiektowego kształtu
interface User {
  name: string;
  age: number;
  role: string;
}

function createUser(name: string, age: number, role: string): User {
  return { name, age, role };
}

// ✅ Kontrola typów
const user1 = createUser("Jan", 25, "admin");  // ✅ OK
// const user2 = createUser(123, "dwadzieścia", null);  // ❌ Error
// const user3 = createUser();  // ❌ Error: Expected 3 arguments

// ✅ TypeScript zna kształt
user1.role;   // ✅ OK
// user1.roles;  // ❌ Error: Property 'roles' does not exist

// ✅ Funkcja z jawnym typem zwracanym
function getUser(id: number): User | null {
  if (id > 0) {
    return { name: "Jan", age: 25, role: "admin" };
  }
  return null;
}
\`\`\`
  `;

  interfaces = `
## 📦 Interface - dla obiektów

**Interface** definiuje **kształt obiektu** - jakie właściwości i metody ma mieć.
  `;

  interfaceExample = `
\`\`\`typescript
// ✅ Interface - dla obiektów
interface User {
  name: string;
  age: number;
  email?: string;           // Opcjonalna właściwość
  readonly id: number;      // Tylko do odczytu
  greet(): void;            // Metoda
}

const user: User = {
  id: 1,
  name: "Jan",
  age: 25,
  greet() {
    console.log(\`Hello, \${this.name}!\`);
  }
};

// user.id = 2;              // ❌ Error: Cannot assign to 'id' (readonly)
// user.salary = 5000;       // ❌ Error: Property 'salary' does not exist

// ✅ Extending interfaces
interface Admin extends User {
  permissions: string[];
}

const admin: Admin = {
  id: 2,
  name: "Anna",
  age: 30,
  permissions: ["read", "write"],
  greet() {
    console.log("Admin greeting");
  }
};

// ✅ Interface dla funkcji
interface GreetFunction {
  (name: string): string;
}

const greet: GreetFunction = (name) => \`Hello, \${name}!\`;
\`\`\`

**Zasada:** Interface zawsze opisuje **obiekt** (lub funkcję jako obiekt).
  `;

  typeAliases = `
## 🔀 Type - dla union types i aliasów

**Type alias** może definiować:
- Union types (A | B)
- Intersection types (A & B)
- Primitive types
- Tuple types
- **Również obiekty** (jak interface)
  `;

  typeExample = `
\`\`\`typescript
// ✅ Type - dla union types
type Status = "pending" | "success" | "error";

const status1: Status = "pending";   // ✅ OK
// const status2: Status = "loading";  // ❌ Error: Type '"loading"' is not assignable

// ✅ Type - dla primitive unions
type ID = string | number;

const id1: ID = 123;       // ✅ OK
const id2: ID = "abc-123"; // ✅ OK

// ✅ Type - dla obiektów (jak interface)
type User = {
  name: string;
  age: number;
};

// ✅ Type - intersection
type Admin = User & {
  permissions: string[];
};

const admin: Admin = {
  name: "Anna",
  age: 30,
  permissions: ["read", "write"]
};

// ✅ Type - tuple
type Point = [number, number];
const point: Point = [10, 20];

// ✅ Type - complex union
type Response =
  | { status: "success"; data: string }
  | { status: "error"; message: string };

function handleResponse(res: Response) {
  if (res.status === "success") {
    console.log(res.data);    // TypeScript wie: res.data istnieje
  } else {
    console.log(res.message); // TypeScript wie: res.message istnieje
  }
}
\`\`\`

**Zasada:** Type używaj dla **union types**, primitive aliases, i złożonych typów.
  `;

  interchangeable = `
## 🔄 Interface vs Type - wymienne dla obiektów

Interface i Type można używać **zamiennie dla obiektów**, ale:
- **Interface** - preferowany dla obiektów (można extend, łatwiejszy merge)
- **Type** - preferowany dla union types i aliasów

\`\`\`typescript
// Oba są OK dla obiektów
interface UserInterface {
  name: string;
  age: number;
}

type UserType = {
  name: string;
  age: number;
};

// Oba działają identycznie
const user1: UserInterface = { name: "Jan", age: 25 };
const user2: UserType = { name: "Anna", age: 30 };

// Ale interface ma extends
interface Admin extends UserInterface {
  role: string;
}

// Type ma intersection (&)
type AdminType = UserType & {
  role: string;
};

// ✅ Type MUSI być dla union
type Status = "pending" | "success";  // ✅ OK
// interface Status = "pending" | "success";  // ❌ Nie można!
\`\`\`

**Praktyczna zasada:**
- Obiekt? → **Interface** (preferowane)
- Union type? → **Type** (wymagane)
- Alias dla primitive? → **Type**
  `;

  conclusion = `
## 🎯 Podsumowanie

| Aspekt | JavaScript | TypeScript |
|--------|------------|------------|
| **Typy** | ❌ Brak | ✅ TAK |
| **Interface** | ❌ Brak | ✅ TAK (dla obiektów) |
| **Type alias** | ❌ Brak | ✅ TAK (union, intersection) |
| **Union types** | ❌ Brak | ✅ TAK (A \\| B) |
| **Sprawdzanie w czasie** | Runtime | Compile-time |

### 💡 Kluczowe zasady:

**1. Interface - dla obiektów:**
\`\`\`typescript
interface User {
  name: string;
  age: number;
}
\`\`\`

**2. Type - dla union types:**
\`\`\`typescript
type Status = "pending" | "success" | "error";
type ID = string | number;
\`\`\`

**3. Oba działają dla obiektów:**
\`\`\`typescript
// Interface (preferowane)
interface User { name: string; }

// Type (też działa)
type User = { name: string; };
\`\`\`

**4. Interface może extend, Type używa &:**
\`\`\`typescript
interface Admin extends User { role: string; }
type Admin = User & { role: string; };
\`\`\`

> **Wniosek:** TypeScript dodaje **typy i interfejsy** do JavaScript. Interface dla obiektów, Type dla union types - ale oba można używać zamiennie dla obiektów. TypeScript pilnuje poprawności w czasie kompilacji!
  `;
}
