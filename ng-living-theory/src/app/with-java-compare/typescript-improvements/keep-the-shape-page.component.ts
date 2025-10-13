import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Pilnowanie kształtu"
      fileEntry="./app/with-java-compare/typescript-improvements/keep-the-shape-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="columns my-3 is-multiline">
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 JavaScript - Brak sprawdzania kształtu</h4>
              <app-remark [markdown]="jsNoShape" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">🔷 TypeScript - Automatyczne wnioskowanie</h4>
              <app-remark [markdown]="tsInference" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="inferenceWorks" />

        <div class="box has-background-info-invert my-3">
          <h4 class="title is-5">🔷 TypeScript pilnuje kształtu automatycznie</h4>
          <app-remark [markdown]="inferenceExample" />
        </div>

        <app-remark [markdown]="conclusion" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class KeepTheShapePageComponent {

  introduction = `
# Pilnowanie kształtu (Type Inference)

**Kluczowa zaleta TypeScript:** Nawet bez jawnego deklarowania typów, TypeScript **automatycznie wnioskuje typy** i pilnuje kształtu obiektów. JavaScript nie ma żadnego sprawdzania - błędy ujawniają się w runtime.

## 🔑 Problem JavaScript

W JavaScript możesz:
- Przypisać dowolną wartość do zmiennej
- Wywołać metodę, która nie istnieje
- Przekazać błędną liczbę argumentów
- **Błędy wykryjesz dopiero w runtime!**
  `;

  jsNoShape = `
\`\`\`javascript
// JavaScript - BRAK sprawdzania
const user = {
  name: "Jan",
  age: 25
};

// ❌ Błąd: user.adress (literówka!)
console.log(user.adress);  // undefined (brak błędu!)

// ❌ Zmiana kształtu obiektu
user.salary = 5000;        // OK
user.age = "dwadzieścia";  // OK (zmiana typu!)

// ❌ Funkcja bez kontroli
function greet(user) {
  return "Hello, " + user.name;
}

greet({ name: "Anna" });      // OK
greet({ firstName: "Anna" }); // undefined (brak błędu!)
greet(null);                   // Crash w runtime!

// Wszystkie błędy wykryjesz dopiero w runtime!
\`\`\`
  `;

  tsInference = `
\`\`\`typescript
// TypeScript - automatyczne wnioskowanie
const user = {
  name: "Jan",
  age: 25
};
// TypeScript wie: user: { name: string; age: number }

// ✅ Błąd w czasie kompilacji!
console.log(user.adress);  // ❌ Error: Property 'adress' does not exist

// ✅ TypeScript pilnuje kształtu
user.salary = 5000;        // ❌ Error: Property 'salary' does not exist
user.age = "dwadzieścia";  // ❌ Error: Type 'string' is not assignable to type 'number'

// ✅ Funkcja z wnioskowanym typem
function greet(user: { name: string }) {
  return "Hello, " + user.name;
}

greet({ name: "Anna" });      // ✅ OK
greet({ firstName: "Anna" }); // ❌ Error: Property 'name' is missing
greet(null);                   // ❌ Error: Argument of type 'null'

// Błędy wykryte PRZED uruchomieniem!
\`\`\`
  `;

  inferenceWorks = `
## ✅ Type Inference działa automatycznie

TypeScript **nie wymaga** jawnego deklarowania typów - wnioskuje je automatycznie!
  `;

  inferenceExample = `
\`\`\`typescript
// 1. Wnioskowanie z literału
const name = "Jan";        // TypeScript wie: name: "Jan" (string "Jan" i nigdy się nie zmieni - bo const)
let age = 25;            // TypeScript wie: age: number
let isActive = true;     // TypeScript wie: isActive: boolean

// age = "Jan";             // ❌ Error: Type 'string' is not assignable to type 'number'

// 2. Wnioskowanie z obiektu
const user = {
  name: "Jan",
  age: 25,
  address: {
    city: "Warsaw"
  }
};
// TypeScript wie dokładny kształt:
// user: { name: string; age: number; address: { city: string } }

user.address.city = "Kraków";  // ✅ OK
// user.address.postal = "00-000";  // ❌ Error: Property 'postal' does not exist

// 3. Wnioskowanie z tablicy
const numbers = [1, 2, 3, 4, 5];  // TypeScript wie: numbers: number[]
// numbers.push("6");              // ❌ Error: Argument of type 'string'

const mixed = [1, "two", true];   // TypeScript wie: mixed: (string | number | boolean)[]

// 4. Wnioskowanie z funkcji
function add(a: number, b: number) {
  return a + b;  // TypeScript wie: zwraca number
}

const result = add(5, 3);  // TypeScript wie: result: number
// result.toUpperCase();    // ❌ Error: Property 'toUpperCase' does not exist on type 'number'

// 5. Wnioskowanie z metod tablicy
const users = [
  { name: "Jan", age: 25 },
  { name: "Anna", age: 30 }
];

const names = users.map(u => u.name);  // TypeScript wie: names: string[]
// names.push(123);                     // ❌ Error: Argument of type 'number'

// 6. Wnioskowanie w desestructuring
const { name: userName, age: userAge } = user;
// TypeScript wie: userName: string, userAge: number

// 7. Wnioskowanie w arrow functions
const double = (n: number) => n * 2;  // TypeScript wie: zwraca number
const doubled = double(5);             // TypeScript wie: doubled: number
\`\`\`

**Kluczowe:** TypeScript pilnuje kształtu **automatycznie** - nie musisz pisać typów wszędzie!
  `;

  conclusion = `
## 🎯 Podsumowanie

| Aspekt | JavaScript | TypeScript |
|--------|------------|------------|
| **Type inference** | ❌ Brak | ✅ Automatyczne |
| **Sprawdzanie kształtu** | ❌ Brak (runtime) | ✅ Compile-time |
| **Literówki w nazwach** | Undefined w runtime | ❌ Błąd kompilacji |
| **Zmiana typu** | ✅ Możliwa | ❌ Błąd kompilacji |
| **Brakujące właściwości** | Undefined w runtime | ❌ Błąd kompilacji |

### 💡 Kluczowe zalety:

**1. Nie musisz pisać typów wszędzie:**
\`\`\`typescript
// TypeScript wnioskuje automatycznie
const user = { name: "Jan", age: 25 };  // Typ wnioskowany
const numbers = [1, 2, 3];              // number[] wnioskowany
\`\`\`

**2. Błędy wykrywane PRZED uruchomieniem:**
\`\`\`typescript
user.adress;  // ❌ Błąd kompilacji (literówka)
// Zamiast undefined w runtime
\`\`\`

**3. IntelliSense w IDE:**
\`\`\`typescript
user.  // IDE podpowiada: name, age
\`\`\`

**4. Refactoring jest bezpieczny:**
\`\`\`typescript
// Zmień nazwę właściwości - TypeScript znajdzie wszystkie użycia
\`\`\`

> **Wniosek:** TypeScript **automatycznie pilnuje kształtu** obiektów dzięki type inference. Nie musisz pisać typów wszędzie - TypeScript wnioskuje je z kontekstu i chroni przed błędami!
  `;
}
