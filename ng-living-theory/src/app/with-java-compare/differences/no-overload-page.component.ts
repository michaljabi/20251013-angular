import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Brak przeładowań"
      fileEntry="./app/with-java-compare/differences/no-overload-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <app-remark [markdown]="methodOverloading" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Przeładowanie metod</h4>
              <app-remark [markdown]="javaMethodExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 JavaScript - Brak przeładowań</h4>
              <app-remark [markdown]="jsMethodExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="constructorOverloading" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Przeładowanie konstruktorów</h4>
              <app-remark [markdown]="javaConstructorExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 JavaScript - Jeden konstruktor</h4>
              <app-remark [markdown]="jsConstructorExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="tsWorkaround" />

        <div class="box has-background-warning-invert my-3">
          <h4 class="title is-5">🔷 TypeScript - Function Overload Signatures</h4>
          <app-remark [markdown]="tsOverloadExample" />
        </div>

        <app-remark [markdown]="conclusion" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class NoOverloadPageComponent {

  introduction = `
# Brak przeładowań w JavaScript

**Kluczowa różnica:** Java wspiera **przeładowanie metod i konstruktorów** (method/constructor overloading) - możesz mieć wiele metod o tej samej nazwie z różnymi sygnaturami. JavaScript **nie wspiera przeładowań** - może istnieć tylko jedna funkcja o danej nazwie.

## 🔑 Co to jest przeładowanie (overloading)?

Przeładowanie pozwala na zdefiniowanie wielu wersji tej samej metody/konstruktora z **różnymi parametrami**:
- ✅ **Java**: Kompilator wybiera odpowiednią wersję na podstawie liczby i typów argumentów
- ❌ **JavaScript**: Późniejsza definicja nadpisuje wcześniejszą
- ⚠️ **TypeScript**: Ma składnię przeładowań, ale to tylko type checking - w runtime działa jak JS
  `;

  methodOverloading = `
## 🔧 Przeładowanie metod
  `;

  javaMethodExample = `
\`\`\`java
public class Calculator {
    // ✅ Trzy różne metody o tej samej nazwie!

    // 1. Dodawanie dwóch liczb int
    public int add(int a, int b) {
        System.out.println("add(int, int)");
        return a + b;
    }

    // 2. Dodawanie trzech liczb int
    public int add(int a, int b, int c) {
        System.out.println("add(int, int, int)");
        return a + b + c;
    }

    // 3. Dodawanie dwóch liczb double
    public double add(double a, double b) {
        System.out.println("add(double, double)");
        return a + b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();

        calc.add(5, 3);           // Wywołuje add(int, int)
        calc.add(5, 3, 2);        // Wywołuje add(int, int, int)
        calc.add(5.5, 3.2);       // Wywołuje add(double, double)
    }
}
\`\`\`

**Kompilator wybiera odpowiednią wersję na podstawie argumentów!**
  `;

  jsMethodExample = `
\`\`\`javascript
class Calculator {
  // ❌ Tylko jedna metoda może istnieć o danej nazwie!

  add(a, b) {
    console.log("add(a, b)");
    return a + b;
  }

  // To NADPISUJE poprzednią metodę add!
  add(a, b, c) {
    console.log("add(a, b, c)");
    return a + b + c;
  }
}

const calc = new Calculator();

// Istnieje tylko ostatnia definicja!
calc.add(5, 3);        // add(a, b, c) -> wynik: NaN (c jest undefined)
calc.add(5, 3, 2);     // add(a, b, c) -> wynik: 10

// ✅ ROZWIĄZANIE: Parametry opcjonalne i sprawdzanie
class CalculatorFixed {
  add(a, b, c) {
    if (c !== undefined) {
      console.log("Three numbers");
      return a + b + c;
    }
    console.log("Two numbers");
    return a + b;
  }
}

const calc2 = new CalculatorFixed();
calc2.add(5, 3);       // Two numbers -> 8
calc2.add(5, 3, 2);    // Three numbers -> 10
\`\`\`

**Późniejsza definicja nadpisuje wcześniejszą!**
  `;

  constructorOverloading = `
## 🏗️ Przeładowanie konstruktorów
  `;

  javaConstructorExample = `
\`\`\`java
public class Person {
    private String name;
    private int age;
    private String city;

    // ✅ Konstruktor 1 - tylko imię
    public Person(String name) {
        this.name = name;
        this.age = 0;
        this.city = "Unknown";
        System.out.println("Constructor(String)");
    }

    // ✅ Konstruktor 2 - imię i wiek
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
        this.city = "Unknown";
        System.out.println("Constructor(String, int)");
    }

    // ✅ Konstruktor 3 - wszystkie pola
    public Person(String name, int age, String city) {
        this.name = name;
        this.age = age;
        this.city = city;
        System.out.println("Constructor(String, int, String)");
    }

    public static void main(String[] args) {
        Person p1 = new Person("Jan");              // Konstruktor 1
        Person p2 = new Person("Anna", 25);         // Konstruktor 2
        Person p3 = new Person("Piotr", 30, "Warsaw"); // Konstruktor 3
    }
}
\`\`\`

**Kompilator wybiera odpowiedni konstruktor!**
  `;

  jsConstructorExample = `
\`\`\`javascript
class Person {
  // ❌ Tylko JEDEN konstruktor może istnieć!

  constructor(name) {
    this.name = name;
    this.age = 0;
    this.city = "Unknown";
    console.log("Constructor(name)");
  }

  // To NADPISUJE poprzedni konstruktor!
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    console.log("Constructor(name, age, city)");
  }
}

// Istnieje tylko ostatnia definicja konstruktora!
const p1 = new Person("Jan");              // age=undefined, city=undefined
const p2 = new Person("Anna", 25);         // city=undefined
const p3 = new Person("Piotr", 30, "Warsaw"); // Działa poprawnie

// ✅ ROZWIĄZANIE: Parametry opcjonalne z wartościami domyślnymi
class PersonFixed {
  constructor(name, age = 0, city = "Unknown") {
    this.name = name;
    this.age = age;
    this.city = city;
    console.log(\`Created: \${name}, \${age}, \${city}\`);
  }
}

const p4 = new PersonFixed("Jan");              // Jan, 0, Unknown
const p5 = new PersonFixed("Anna", 25);         // Anna, 25, Unknown
const p6 = new PersonFixed("Piotr", 30, "Warsaw"); // Piotr, 30, Warsaw

// ✅ ALTERNATYWA: Obiekt konfiguracyjny
class PersonConfig {
  constructor({ name, age = 0, city = "Unknown" }) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

const p7 = new PersonConfig({ name: "Jan" });
const p8 = new PersonConfig({ name: "Anna", age: 25 });
const p9 = new PersonConfig({ name: "Piotr", age: 30, city: "Warsaw" });
\`\`\`

**JavaScript ma tylko jeden konstruktor - używamy parametrów opcjonalnych!**
  `;

  tsWorkaround = `
## 🔷 TypeScript - Function Overload Signatures

TypeScript ma składnię przeładowań, ale to **tylko type checking** - w runtime działa jak JavaScript!
  `;

  tsOverloadExample = `
\`\`\`typescript
class Calculator {
  // Overload signatures (tylko typy!)
  add(a: number, b: number): number;
  add(a: number, b: number, c: number): number;
  add(a: string, b: string): string;

  // Implementation signature (jedyna rzeczywista implementacja!)
  add(a: number | string, b: number | string, c?: number): number {
    if (typeof a === "string" && typeof b === "string") {
      return Number(a) + Number(b);  // Rzutowanie i dodanie do siebie liczb
    }

    if (typeof a === "number" && typeof b === "number") {
      if (c !== undefined) {
        return a + b + c;  // dodanie trzech liczb
      }
      return a + b;  // dodanie dwóch liczby
    }

    throw new Error("Invalid arguments");
  }
}

const calc = new Calculator();

// TypeScript sprawdza typy w czasie kompilacji
calc.add(5, 3);           // ✅ number
calc.add(5, 3, 2);        // ✅ number
calc.add("Hello", "World"); // ✅ string

// calc.add(5, "test");   // ❌ Error: No overload matches

// Ale w skompilowanym JS jest tylko JEDNA metoda add!
\`\`\`

**Uwaga:** Overload signatures w TypeScript to tylko adnotacje typów. W JavaScript jest tylko jedna implementacja metody, która musi obsłużyć wszystkie przypadki!
  `;

  conclusion = `
## 🎯 Podsumowanie

| Aspekt | Java | JavaScript | TypeScript |
|--------|------|------------|------------|
| **Przeładowanie metod** | ✅ TAK - wiele metod o tej samej nazwie | ❌ NIE - tylko jedna definicja | ⚠️ Tylko type checking |
| **Przeładowanie konstruktorów** | ✅ TAK - wiele konstruktorów | ❌ NIE - tylko jeden konstruktor | ⚠️ Tylko type checking |
| **Wybór wersji** | Kompilator wybiera na podstawie argumentów | N/A | TypeScript sprawdza typy |
| **Runtime** | Różne metody w bytecode | Tylko jedna funkcja | Tylko jedna funkcja (jak JS) |
| **Alternatywy** | - | Parametry opcjonalne, rest parameters, sprawdzanie typów | Overload signatures + implementacja, union types |

### 💡 Kluczowe różnice:

**Java:**
- **Prawdziwe przeładowanie** - kompilator tworzy osobne metody
- Wybór metody w czasie kompilacji na podstawie typów i liczby argumentów
- Bardzo wygodne dla tworzenia czytelnego API

**JavaScript:**
- **Brak przeładowań** - późniejsza definicja nadpisuje wcześniejszą
- Używamy **parametrów opcjonalnych** z wartościami domyślnymi
- Używamy **rest parameters** (\`...args\`) dla zmiennej liczby argumentów
- Możemy sprawdzać typy i liczbę argumentów wewnątrz funkcji

**TypeScript:**
- **Overload signatures** zapewniają type safety w czasie kompilacji
- W runtime kompiluje się do **jednej funkcji** JavaScript
- Implementacja musi obsłużyć wszystkie przypadki z signatures
- To tylko "ładna fasada" dla type checkera

### 📚 Praktyczne wzorce w JavaScript/TypeScript:

\`\`\`typescript
// 1. Parametry z wartościami domyślnymi
function greet(name: string, greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

// 2. Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

// 3. Obiekt konfiguracyjny
function createUser({ name, age = 18, role = "user" }: { name: string; age?: number; role?: 'user' | 'admin' }) {
  return { name, age, role };
}

// 4. Sprawdzanie typu/liczby argumentów
function process(data: string | string[] | null) {
  if (typeof data === "string") {
    return data.toUpperCase();
  }
  if (Array.isArray(data)) {
    return data.length;
  }
  return null;
}
\`\`\`

> **Wniosek:** Brak przeładowań w JavaScript to nie problem - idiomatyczne wzorce (opcjonalne parametry, rest parameters, destructuring) są często bardziej elastyczne niż Java overloading!
  `;
}
