import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Opcjonalny średnik"
      fileEntry="./app/with-java-compare/special-features/optional-semicolon-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="box has-background-warning-invert my-3">
          <h4 class="title is-5">🟨 JavaScript/TypeScript - Średnik opcjonalny</h4>
          <app-remark [markdown]="optionalExample" />
        </div>

        <app-remark [markdown]="asi" />

        <div class="box has-background-warning-invert my-3">
          <h4 class="title is-5">⚙️ ASI - Automatic Semicolon Insertion</h4>
          <app-remark [markdown]="asiExample" />
        </div>

        <app-remark [markdown]="pitfalls" />

        <div class="box has-background-warning-invert my-3">
          <h4 class="title is-5">⚠️ Pułapki ASI</h4>
          <app-remark [markdown]="pitfallsExample" />
        </div>

        <app-remark [markdown]="consistency" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class OptionalSemicolonPageComponent {

  introduction = `
# Opcjonalny średnik w JavaScript

**Kluczowa cecha JavaScript:** Średniki są **opcjonalne** - JavaScript automatycznie wstawia je w odpowiednich miejscach (ASI - Automatic Semicolon Insertion). W przeciwieństwie do Java, gdzie średniki są **obowiązkowe**.

## 🔑 Podstawy

**Java:**
- Średniki są **obowiązkowe** po każdej instrukcji
- Brak średnika → błąd kompilacji

**JavaScript:**
- Średniki są **opcjonalne**
- ASI automatycznie wstawia średniki
- Możesz pisać kod bez średników
- Możesz pisać kod ze średnikami

  `;

  optionalExample = `
\`\`\`javascript
// Ze średnikami (tradycyjny styl)
const name = "Jan";
const age = 25;
console.log(name);
console.log(age);

// Bez średników (nowoczesny styl)
const name = "Jan"
const age = 25
console.log(name)
console.log(age)

// Oba kody są poprawne i działają identycznie!

// Funkcje
function greet(name) {
  return "Hello, " + name;  // Ze średnikiem
}

function greet(name) {
  return "Hello, " + name   // Bez średnika
}

// Obiekty
const user = {
  name: "Jan",
  age: 25
};  // Średnik po obiekcie (opcjonalny)

const user = {
  name: "Jan",
  age: 25
}  // Bez średnika
\`\`\`

\`\`\`typescript
// TypeScript - średnik też opcjonalny
interface User {
  name: string;  // Ze średnikiem
  age: number;
}

interface User {
  name: string   // Bez średnika
  age: number
}
\`\`\`

**Oba style są poprawne - wybierz jeden i trzymaj się go!**
  `;

  asi = `
## ⚙️ ASI - Automatic Semicolon Insertion

JavaScript automatycznie wstawia średniki według określonych reguł (ASI - Automatic Semicolon Insertion).
  `;

  asiExample = `
\`\`\`javascript
// Kod bez średników
const a = 1
const b = 2
console.log(a + b)

// ASI automatycznie interpretuje jako:
const a = 1;
const b = 2;
console.log(a + b);

// Nowa linia = nowa instrukcja
function sum(a, b) {
  return a + b
}

// ASI dodaje średnik:
function sum(a, b) {
  return a + b;
}

// Bloki kodu nie wymagają średników
if (true) {
  console.log("Hello")
}  // Brak średnika po bloku

for (let i = 0; i < 5; i++) {
  console.log(i)
}  // Brak średnika po bloku
\`\`\`

**Reguły ASI:**
1. Nowa linia po instrukcji → wstaw średnik
2. Znak \`}\` kończy blok → brak średnika
3. \`return\`, \`break\`, \`continue\` → wstaw średnik na końcu linii
  `;

  pitfalls = `
## ⚠️ Pułapki ASI

ASI działa dobrze w większości przypadków, ale są sytuacje gdzie może wprowadzić błąd.
  `;

  pitfallsExample = `
\`\`\`javascript
// ❌ Problem 1: return na nowej linii
function getUser() {
  return
  {
    name: "Jan"
  }
}

// ASI interpretuje jako:
function getUser() {
  return;  // ⚠️ Średnik dodany!
  {
    name: "Jan"
  }
}
console.log(getUser());  // undefined (zamiast obiektu)

// ✅ Rozwiązanie: return i { w tej samej linii
function getUser() {
  return {
    name: "Jan"
  }
}

// ❌ Problem 2: Wywołanie funkcji na nowej linii
const result = someFunction()
[1, 2, 3].forEach(x => console.log(x))

// ASI interpretuje jako:
const result = someFunction()[1, 2, 3].forEach(x => console.log(x))
// ⚠️ Próbuje wywołać someFunction()[1, 2, 3]!

// ✅ Rozwiązanie: Dodaj średnik lub użyj ;[ na początku linii
const result = someFunction();
[1, 2, 3].forEach(x => console.log(x))

// ❌ Problem 3: Operator na nowej linii
const total = a + b
+ c + d

// ASI interpretuje jako:
const total = a + b;
+c + d;
// ⚠️ Drugie wyrażenie jest ignorowane!

// ✅ Rozwiązanie: Operator na końcu poprzedniej linii
const total = a + b +
c + d

// ❌ Problem 4: IIFE (Immediately Invoked Function Expression)
const result = getUser()

(function() {
  console.log("IIFE")
})()

// ASI interpretuje jako:
const result = getUser()(function() { ... })()
// ⚠️ Próbuje wywołać getUser() jako funkcję!

// ✅ Rozwiązanie: Dodaj średnik przed IIFE
const result = getUser()

;(function() {
  console.log("IIFE")
})()
\`\`\`

**Pułapki występują rzadko, ale warto o nich wiedzieć!**
  `;

  consistency = `
## 🛠️ Narzędzia do wymuszania stylu

Używaj narzędzi automatycznych do wymuszania spójnego stylu w projekcie:

### Prettier - code formatter
\`\`\`json
// .prettierrc
{
  "semi": true,        // Wymuś średniki
  "singleQuote": true,
  "trailingComma": "es5"
}

// lub

{
  "semi": false,       // Wymuś brak średników
  "singleQuote": true
}
\`\`\`

### ESLint - linter
\`\`\`json
// .eslintrc
{
  "rules": {
    "semi": ["error", "always"]    // Wymuś średniki
    // lub
    "semi": ["error", "never"]     // Wymuś brak średników
  }
}
\`\`\`

## 🎯 Podsumowanie

| Aspekt | Java | JavaScript |
|--------|------|------------|
| **Średnik** | Obowiązkowy | Opcjonalny |
| **ASI** | Nie istnieje | ✅ Automatic Semicolon Insertion |
| **Błąd kompilacji bez ;** | ✅ TAK | ❌ NIE (ASI wstawia) |
| **Styl** | Jeden (ze średnikami) | Dwa (ze średnikami lub bez) |

### 💡 Kluczowe zasady:

**1. Wybierz styl i trzymaj się go:**
\`\`\`javascript
// Styl A: ze średnikami (tradycyjny)
const name = "Jan";
console.log(name);

// Styl B: bez średników (nowoczesny)
const name = "Jan"
console.log(name)
\`\`\`

**2. Użyj Prettier do automatycznego formatowania:**
\`\`\`bash
npm install --save-dev prettier
npx prettier --write "src/**/*.{js,ts}"
\`\`\`

**3. Unikaj pułapek ASI:**
- \`return\` i \`{\` w tej samej linii
- Operator na końcu linii (nie na początku)
- Średnik przed IIFE: \`;(function() { })()\`

> **Wniosek:** Średniki w JavaScript są **opcjonalne** dzięki ASI. Wybierz styl (ze średnikami lub bez) i użyj Prettier do wymuszania spójności w projekcie. Oba style są poprawne!
  `;
}
