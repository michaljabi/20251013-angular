import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Zabranie dynamiki"
      fileEntry="./app/with-java-compare/typescript-improvements/take-away-the-dynamics-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="columns my-3 is-multiline">
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 JavaScript - Zbyt dynamiczny</h4>
              <app-remark [markdown]="jsDynamic" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">🔷 TypeScript - Kontrola parametrów</h4>
              <app-remark [markdown]="tsStatic" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="parameterChecking" />

        <div class="box has-background-info-invert my-3">
          <h4 class="title is-5">🔷 TypeScript sprawdza liczbę i typy parametrów</h4>
          <app-remark [markdown]="parameterExample" />
        </div>

        <app-remark [markdown]="conclusion" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class TakeAwayTheDynamicsPageComponent {

  introduction = `
# Zabranie dynamiki - kontrola parametrów

**Kluczowy problem JavaScript:** Funkcje są **zbyt dynamiczne** - możesz przekazać dowolną liczbę argumentów, dowolne typy, a JavaScript nie zgłosi błędu. TypeScript to naprawia!

## 🔑 Problem JavaScript

JavaScript pozwala na:
- Wywołanie funkcji z **za dużą liczbą** argumentów
- Wywołanie funkcji z **za małą liczbą** argumentów
- Przekazanie **złych typów** argumentów
- **Brak błędów** - wszystko wykryjesz w runtime!
  `;

  jsDynamic = `
\`\`\`javascript
// JavaScript - zbyt dynamiczny
function greet(name, age) {
  return \`Hello, \${name}! You are \${age} years old.\`;
}

// ✅ Prawidłowe wywołanie
greet("Jan", 25);  // "Hello, Jan! You are 25 years old."

// ❌ Za dużo argumentów - JavaScript ignoruje nadmiarowe
greet("Jan", 25, "extra", "params");  // Działa!

// ❌ Za mało argumentów - undefined
greet("Jan");      // "Hello, Jan! You are undefined years old."
greet();           // "Hello, undefined! You are undefined years old."

// ❌ Złe typy - JavaScript nie sprawdza
greet(123, "dwadzieścia");  // "Hello, 123! You are dwadzieścia years old."
greet(null, [1, 2, 3]);     // "Hello, null! You are 1,2,3 years old."

// ❌ Możesz wywołać funkcję która nie istnieje
const user = { name: "Jan" };
user.greet();  // Runtime error: user.greet is not a function

// Wszystkie błędy wykryjesz dopiero w runtime!
\`\`\`
  `;

  tsStatic = `
\`\`\`typescript
// TypeScript - kontrola parametrów
function greet(name: string, age: number): string {
  return \`Hello, \${name}! You are \${age} years old.\`;
}

// ✅ Prawidłowe wywołanie
greet("Jan", 25);  // OK

// ❌ Za dużo argumentów - błąd kompilacji!
// greet("Jan", 25, "extra");  // Error: Expected 2 arguments, but got 3

// ❌ Za mało argumentów - błąd kompilacji!
// greet("Jan");  // Error: Expected 2 arguments, but got 1
// greet();       // Error: Expected 2 arguments, but got 0

// ❌ Złe typy - błąd kompilacji!
// greet(123, "dwadzieścia");  // Error: Argument of type 'number' is not assignable
// greet(null, [1, 2, 3]);     // Error: Argument of type 'null' is not assignable

// ❌ Wywołanie nieistniejącej metody - błąd kompilacji!
const user = { name: "Jan" };
// user.greet();  // Error: Property 'greet' does not exist

// Wszystkie błędy wykryte PRZED uruchomieniem!
\`\`\`
  `;

  parameterChecking = `
## ✅ TypeScript sprawdza parametry

TypeScript pilnuje:
- **Liczby parametrów** (muszą się zgadzać)
- **Typów parametrów** (muszą się zgadzać)
- **Opcjonalnych parametrów** (można pominąć)
- **Domyślnych wartości** (używane gdy brak argumentu)
  `;

  parameterExample = `
\`\`\`typescript
// 1. Wymagane parametry
function add(a: number, b: number): number {
  return a + b;
}

add(5, 3);     // ✅ OK
// add(5);     // ❌ Error: Expected 2 arguments, but got 1
// add(5, "3"); // ❌ Error: Argument of type 'string'

// 2. Opcjonalne parametry (?)
function greet(name: string, age?: number): string {
  if (age !== undefined) {
    return \`Hello, \${name}! You are \${age} years old.\`;
  }
  return \`Hello, \${name}!\`;
}

greet("Jan", 25);  // ✅ OK
greet("Jan");      // ✅ OK (age jest opcjonalne)
// greet();        // ❌ Error: Expected 1-2 arguments, but got 0

// 3. Domyślne wartości
function greetWithDefault(name: string, greeting: string = "Hello"): string {
  return \`\${greeting}, \${name}!\`;
}

greetWithDefault("Jan", "Hi");  // "Hi, Jan!"
greetWithDefault("Jan");        // "Hello, Jan!" (użyto domyślnej wartości)

// 4. Rest parameters (...)
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3);           // ✅ OK - 6
sum(1, 2, 3, 4, 5);     // ✅ OK - 15
sum();                  // ✅ OK - 0
// sum(1, "2", 3);      // ❌ Error: Argument of type 'string'

// 5. Overload signatures (tylko type checking)
function getValue(key: string): string;
function getValue(key: number): number;
function getValue(key: string | number): string | number {
  if (typeof key === "string") {
    return "string value";
  }
  return 123;
}

getValue("name");  // TypeScript wie: zwraca string
getValue(1);       // TypeScript wie: zwraca number
// getValue(true); // ❌ Error: No overload matches

// 6. Callback parameters
function processData(data: string, callback: (result: string) => void): void {
  const processed = data.toUpperCase();
  callback(processed);
}

processData("hello", (result) => {
  console.log(result);  // TypeScript wie: result: string
});

// processData("hello", (result: number) => { });  // ❌ Error: Types mismatch
\`\`\`

**Kluczowe:** TypeScript wymusza **zgodność parametrów** w czasie kompilacji!
  `;

  conclusion = `
## 🎯 Podsumowanie

| Aspekt | JavaScript | TypeScript |
|--------|------------|------------|
| **Sprawdzanie liczby parametrów** | ❌ Brak | ✅ Compile-time |
| **Sprawdzanie typów parametrów** | ❌ Brak | ✅ Compile-time |
| **Za dużo argumentów** | Ignorowane | ❌ Błąd kompilacji |
| **Za mało argumentów** | \`undefined\` | ❌ Błąd kompilacji |
| **Złe typy** | Nieprzewidywalne | ❌ Błąd kompilacji |
| **Opcjonalne parametry** | Wszystkie opcjonalne | \`?\` oznacza opcjonalne |

### 💡 Kluczowe zalety:

**1. Liczba parametrów musi się zgadzać:**
\`\`\`typescript
function greet(name: string, age: number) { }

greet("Jan", 25);  // ✅ OK
// greet("Jan");   // ❌ Error: Expected 2 arguments, but got 1
\`\`\`

**2. Typy parametrów muszą się zgadzać:**
\`\`\`typescript
function add(a: number, b: number) { }

add(5, 3);      // ✅ OK
// add(5, "3"); // ❌ Error: Argument of type 'string'
\`\`\`

**3. Opcjonalne parametry z ?:**
\`\`\`typescript
function greet(name: string, age?: number) { }

greet("Jan", 25);  // ✅ OK
greet("Jan");      // ✅ OK (age opcjonalne)
\`\`\`

**4. Domyślne wartości:**
\`\`\`typescript
function greet(name: string, greeting = "Hello") { }

greet("Jan", "Hi");  // ✅ "Hi, Jan!"
greet("Jan");        // ✅ "Hello, Jan!"
\`\`\`

> **Wniosek:** TypeScript **zabiera nadmiarową dynamikę** JavaScript poprzez sprawdzanie liczby i typów parametrów w czasie kompilacji. To eliminuje całą klasę błędów runtime!
  `;
}
