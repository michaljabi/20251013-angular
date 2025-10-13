import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Lukier składniowy"
      fileEntry="./app/with-java-compare/special-features/syntactic-sugar-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <app-remark [markdown]="objectLiterals" />
        <div class="box has-background-warning-invert my-3">
          <h4 class="title is-5">{{'{}'}} - Object Literal</h4>
          <app-remark [markdown]="objectExample" />
        </div>

        <app-remark [markdown]="arrayLiterals" />
        <div class="box has-background-warning-invert my-3">
          <h4 class="title is-5">[] - Array Literal</h4>
          <app-remark [markdown]="arrayExample" />
        </div>

        <app-remark [markdown]="regexLiterals" />
        <div class="box has-background-warning-invert my-3">
          <h4 class="title is-5">/pattern/ - RegExp Literal</h4>
          <app-remark [markdown]="regexExample" />
        </div>

        <app-remark [markdown]="summary" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class SyntacticSugarPageComponent {

  introduction = `
# Lukier składniowy - Literały w JavaScript

JavaScript oferuje **wygodne skróty składniowe** (syntactic sugar) do tworzenia popularnych typów obiektów. Zamiast używać konstruktorów (\`new Object()\`, \`new Array()\`), możesz użyć **literałów**.

## Kluczowe literały:
- \`{}\` - Object literal (zamiast \`new Object()\`)
- \`[]\` - Array literal (zamiast \`new Array()\`)
- \`/pattern/\` - RegExp literal (zamiast \`new RegExp()\`)

Te literały to **preferowany sposób** tworzenia obiektów w JavaScript - są krótsze, czytelniejsze i wydajniejsze.
  `;

  objectLiterals = `
## 📦 Object Literal - {}
  `;

  objectExample = `
\`\`\`javascript
// ❌ Stary sposób - konstruktor
const person1 = new Object();
person1.name = "Jan";
person1.age = 25;
person1.greet = function() {
  console.log("Hello!");
};

// ✅ Nowoczesny sposób - object literal
const person2 = {
  name: "Jan",
  age: 25,
  greet: function() {
    console.log("Hello!");
  }
};

// ✅ Jeszcze lepiej - skrócona składnia metod (ES6)
const person3 = {
  name: "Jan",
  age: 25,
  greet() {
    console.log("Hello!");
  }
};

// ✅ Property shorthand (ES6)
const name = "Anna";
const age = 30;

const person4 = {
  name,    // Zamiast: name: name
  age      // Zamiast: age: age
};

// ✅ Computed property names (ES6)
const propName = "email";
const person5 = {
  name: "Piotr",
  [propName]: "piotr@example.com"  // email: "piotr@example.com"
};

// ✅ Nested objects
const user = {
  name: "Jan",
  address: {
    city: "Warsaw",
    street: "Main St",
    coordinates: {
      lat: 52.23,
      lng: 21.01
    }
  }
};
\`\`\`

\`\`\`typescript
// TypeScript - object literal z typem
interface Person {
  name: string;
  age: number;
  greet(): void;
}

const person: Person = {
  name: "Jan",
  age: 25,
  greet() {
    console.log(\`Hello, I'm \${this.name}\`);
  }
};
\`\`\`

**Dlaczego \`{}\` zamiast \`new Object()\`?**
- ✅ Krótszy i czytelniejszy
- ✅ Szybszy (nie wywołuje konstruktora)
- ✅ To standard w JavaScript
- ✅ Obsługuje wszystkie nowe feature (shorthand, computed properties)
  `;

  arrayLiterals = `
## 📋 Array Literal - []
  `;

  arrayExample = `
\`\`\`javascript
// ❌ Stary sposób - konstruktor
const numbers1 = new Array(1, 2, 3, 4, 5);
const empty1 = new Array();
const sized = new Array(5);  // ⚠️ Pułapka: tworzy pustą tablicę długości 5!

console.log(sized);  // [ <5 empty items> ]

// ✅ Nowoczesny sposób - array literal
const numbers2 = [1, 2, 3, 4, 5];
const empty2 = [];

// ✅ Spread operator (ES6)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

// ✅ Array destructuring (ES6)
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(rest);   // [3, 4, 5]

// ✅ Nested arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
\`\`\`

\`\`\`typescript
// TypeScript - array literal z typem
const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["Jan", "Anna", "Piotr"];

// Generic array type - ten zapis jest rzadziej stosowany - ale poprawny
const users: Array<User> = [
  { id: 1, name: "Jan" },
  { id: 2, name: "Anna" }
];

// Tuple (fixed length, specific types)
const tuple: [string, number] = ["Jan", 25];

// ReadonlyArray
const readonly: readonly number[] = [1, 2, 3];
// readonly.push(4);  // ❌ Error: push does not exist on readonly array
\`\`\`

**Dlaczego \`[]\` zamiast \`new Array()\`?**
- ✅ Krótszy i czytelniejszy
- ✅ Unika pułapki z \`new Array(5)\` (tworzy dziury, nie wartości)
- ✅ To standard w JavaScript
- ✅ Obsługuje spread operator, destructuring
  `;

  regexLiterals = `
## 🔍 RegExp Literal - /pattern/
  `;

  regexExample = `
\`\`\`javascript
// ❌ Stary sposób - konstruktor
const regex1 = new RegExp("\\d+", "g");  // ⚠️ Podwójne escapowanie!
const regex2 = new RegExp("\\\\w+");     // ⚠️ Bardzo trudne do czytania

// ✅ Nowoczesny sposób - regex literal
const regex3 = /\\d+/g;      // Znajdź wszystkie cyfry
const regex4 = /\\w+/;       // Znajdź słowo

// ✅ Popularne wzorce
const email = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
const phone = /^\\d{3}-\\d{3}-\\d{3}$/;
const url = /https?:\\/\\/[^\\s]+/;

// Użycie
const text = "My email is john@example.com";
const match = text.match(email);

if (email.test("test@example.com")) {
  console.log("Valid email!");
}

// ✅ Flags
const caseInsensitive = /hello/i;   // i - ignore case
const global = /\\d+/g;             // g - global (wszystkie)
const multiline = /^start/m;        // m - multiline

// ✅ Replace z regex
const str = "Hello World 123";
const cleaned = str.replace(/\\d+/g, "");  // "Hello World "

// ✅ Split z regex
const sentence = "one,two;three four";
const words = sentence.split(/[,;\\s]+/);  // ["one", "two", "three", "four"]
\`\`\`

\`\`\`typescript
// TypeScript - regex literal (typ: RegExp)
const pattern: RegExp = /\\d{3}-\\d{2}-\\d{4}/;

function validateSSN(ssn: string): boolean {
  return pattern.test(ssn);
}

// Type guard z regex
function isEmail(input: string): input is string {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(input);
}
\`\`\`

**Kiedy użyć konstruktora \`new RegExp()\`?**

Konstruktor jest potrzebny gdy wzorzec jest **dynamiczny** (np. z zmiennej):

\`\`\`javascript
// ✅ Użycie konstruktora - dynamiczny wzorzec
const searchTerm = "hello";
const dynamicRegex = new RegExp(searchTerm, "gi");

const text = "Hello world, hello there!";
console.log(text.match(dynamicRegex));  // ["Hello", "hello"]

// ❌ Literal nie zadziała z dynamiczną wartością
// const wrong = /searchTerm/gi;  // Szuka dosłownie "searchTerm"
\`\`\`

**Dlaczego \`/pattern/\` zamiast \`new RegExp()\`?**
- ✅ Krótszy i czytelniejszy
- ✅ Nie trzeba podwójnie escapować (\\d zamiast \\\\d)
- ✅ To standard w JavaScript
- ⚠️ Ale użyj konstruktora dla dynamicznych wzorców!
  `;

  summary = `
## 🎯 Podsumowanie

| Typ | Literal (Zalecany) | Konstruktor (Rzadko) | Kiedy użyć konstruktora? |
|-----|-------------------|----------------------|--------------------------|
| **Object** | \`{}\` | \`new Object()\` | Praktycznie nigdy |
| **Array** | \`[]\` | \`new Array()\` | Praktycznie nigdy |
| **RegExp** | \`/pattern/\` | \`new RegExp()\` | ✅ Gdy wzorzec jest dynamiczny |

### 💡 Kluczowe zasady:

**1. Zawsze używaj literałów:**
\`\`\`javascript
// ✅ DOBRZE
const obj = {};
const arr = [];
const regex = /\\d+/;

// ❌ ŹLE (stary kod)
const obj = new Object();
const arr = new Array();
const regex = new RegExp("\\\\d+");
\`\`\`

**2. Wyjątek: Dynamiczne RegExp**
\`\`\`javascript
const userInput = "hello";
const regex = new RegExp(userInput, "gi");  // ✅ OK - dynamiczny
\`\`\`

**3. Literały obsługują wszystkie nowoczesne feature:**
\`\`\`javascript
// Shorthand properties
const name = "Jan";
const person = { name };  // { name: "Jan" }

// Spread operator
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];  // [1, 2, 3, 4]

// Destructuring
const [a, b] = [1, 2];
const { name: userName } = { name: "Jan" };
\`\`\`

### 🚀 Dodatkowe literały JavaScript:

\`\`\`javascript
// String literal (template literal)
const greeting = \`Hello, \${name}!\`;  // ✅ Lepsze niż konkatenacja

// Boolean literals
const isTrue = true;
const isFalse = false;

// Null literal
const empty = null;

// Undefined literal
const notDefined = undefined;

// Number literals
const decimal = 42;
const hex = 0x2A;      // Hexadecimal
const octal = 0o52;    // Octal
const binary = 0b101010; // Binary

// BigInt literal (ES2020)
const bigNumber = 123456789012345678901234567890n;
\`\`\`

> **Wniosek:** Literały to idiomatyczny JavaScript - używaj \`{}\`, \`[]\`, \`/pattern/\` zamiast konstruktorów. Są krótsze, czytelniejsze i to standard w kodzie \`JavaScript\`/\`TypeScript\`!
  `;
}
