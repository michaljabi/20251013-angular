import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Cokolwiek jako warunek"
      fileEntry="./app/with-java-compare/special-features/anything-to-condition-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="box has-background-warning-invert my-3">
          <h4 class="title is-5">🟨 JavaScript/TypeScript - Dowolna wartość jako warunek</h4>
          <app-remark [markdown]="jsConditionExample" />
        </div>

        <app-remark [markdown]="falsyValues" />

        <div class="box has-background-warning-invert my-3">
          <h4 class="title is-5">📋 Lista wartości falsy</h4>
          <app-remark [markdown]="falsyList" />
        </div>

        <app-remark [markdown]="practicalUsage" />

        <div class="box has-background-warning-invert my-3">
          <h4 class="title is-5">✅ Praktyczne zastosowania</h4>
          <app-remark [markdown]="practicalExamples" />
        </div>

        <app-remark [markdown]="conclusion" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class AnythingToConditionPageComponent {

  introduction = `
# Dowolna wartość jako warunek

**Kluczowa cecha:** W JavaScript/TypeScript można użyć **dowolnej wartości** w warunkach if, while, for - nie tylko boolean. W przeciwieństwie do Java, która wymaga ściśle typu boolean.

## 🔑 Podstawy

**Java:**
- Warunek **MUSI** zwracać \`boolean\` (true/false)
- \`if (0)\` → błąd kompilacji!
- \`if (null)\` → błąd kompilacji!

**JavaScript/TypeScript:**
- Warunek może być **dowolnego typu**
- Wartość zostanie automatycznie skonwertowana do boolean
- **Falsy values** → false
- **Truthy values** → true
  `;

  jsConditionExample = `
\`\`\`javascript
// ❌ Java - tylko boolean!
if (true) { }          // ✅ OK
if (5 > 3) { }         // ✅ OK (zwraca boolean)
// if (0) { }          // ❌ ERROR: incompatible types

// ✅ JavaScript - DOWOLNA wartość!
if (true) { }          // ✅ true
if (1) { }             // ✅ truthy (liczba)
if ("text") { }        // ✅ truthy (string)
if ([]) { }            // ✅ truthy (pusta tablica)
if ({}) { }            // ✅ truthy (pusty obiekt)

if (false) { }         // ❌ false
if (0) { }             // ❌ falsy (liczba)
if ("") { }            // ❌ falsy (pusty string)
if (null) { }          // ❌ falsy
if (undefined) { }     // ❌ falsy
if (NaN) { }           // ❌ falsy
\`\`\`

**JavaScript automatycznie konwertuje wartość do boolean!**
  `;

  falsyValues = `
## ❌ Wartości falsy

W JavaScript istnieje **dokładnie 8 wartości falsy** - wszystko inne jest truthy!
  `;

  falsyList = `
\`\`\`javascript
// 8 wartości falsy w JavaScript:

if (false) { }      // 1. false - boolean
if (0) { }          // 2. zero (liczba)
if (-0) { }         // 3. ujemne zero (liczba)
if (0n) { }         // 4. zero BigInt
if ("") { }         // 5. pusty string
if (null) { }       // 6. null
if (undefined) { }  // 7. undefined
if (NaN) { }        // 8. NaN (Not a Number)

// Wszystkie powyższe są FALSY - kod w bloku if nie wykona się!

// Wszystko inne jest TRUTHY:
if (true) { }       // ✅ truthy
if (1) { }          // ✅ truthy (dowolna liczba != 0)
if (-1) { }         // ✅ truthy
if ("0") { }        // ✅ truthy (string "0", nie liczba!)
if ("false") { }    // ✅ truthy (string "false", nie boolean!)
if ([]) { }         // ✅ truthy (pusta tablica)
if ({}) { }         // ✅ truthy (pusty obiekt)
if (function(){}) { } // ✅ truthy (funkcja)
\`\`\`

**Uwaga:** Pusta tablica \`[]\` i pusty obiekt \`{}\` są **truthy**, nie falsy!
  `;

  practicalUsage = `
## 💡 Praktyczne zastosowania

Wartości falsy pozwalają na zwięzły kod - bez jawnego porównania z \`null\`, \`undefined\`, czy \`0\`.
  `;

  practicalExamples = `
\`\`\`javascript
// ✅ 1. Guard clauses - sprawdzanie czy wartość istnieje
function processUser(user) {
  // Zamiast: if (user === null || user === undefined)
  if (!user) {
    console.log("Brak użytkownika");
    return;
  }
  console.log("Przetwarzam:", user.name);
}

processUser(null);      // Brak użytkownika
processUser(undefined); // Brak użytkownika
processUser({ name: "Jan" }); // Przetwarzam: Jan

// ✅ 2. Wartości domyślne (przed ES6)
function greet(name) {
  // Jeśli name jest falsy, użyj "Guest"
  name = name || "Guest";
  console.log(\`Hello, \${name}!\`);
}

greet("Jan");      // Hello, Jan!
greet("");         // Hello, Guest! (pusty string to falsy)
greet(null);       // Hello, Guest!
greet(undefined);  // Hello, Guest!

// ✅ 3. Sprawdzanie długości tablicy/stringa
function isEmpty(arr) {
  // arr.length === 0 → falsy
  if (!arr.length) {
    console.log("Pusta tablica/string");
  }
}

isEmpty([]);      // Pusta tablica/string
isEmpty("");      // Pusta tablica/string
isEmpty([1, 2]);  // (nie wypisze nic)

// ✅ 4. Walidacja danych formularza
function validateForm(formData) {
  // Sprawdź czy wszystkie pola są wypełnione
  if (!formData.name || !formData.email || !formData.age) {
    console.log("Wypełnij wszystkie pola!");
    return false;
  }
  return true;
}

validateForm({ name: "Jan", email: "jan@example.com", age: 25 }); // ✅
validateForm({ name: "", email: "jan@example.com", age: 25 });    // ❌ (pusty string)
validateForm({ name: "Jan", email: null, age: 25 });               // ❌ (null)

// ✅ 5. Iteracja z warunkiem
let items = ["apple", "", "banana", null, "cherry"];

// Przefiltruj tylko truthy wartości
items = items.filter(item => item);
console.log(items); // ["apple", "banana", "cherry"]

// ✅ 6. Łączenie z operatorem ||
function getConfig(customConfig) {
  // Użyj customConfig lub domyślnego
  const config = customConfig || { theme: "dark", lang: "en" };
  return config;
}

getConfig({ theme: "light" }); // { theme: "light" }
getConfig(null);                // { theme: "dark", lang: "en" }

// ✅ 7. Łączenie z operatorem && (guard)
function processData(data) {
  // Jeśli data istnieje, wywołaj .process()
  data && data.process();

  // Zamiast:
  // if (data) {
  //   data.process();
  // }
}

// ✅ 8. Sprawdzanie czy liczba jest różna od zera
function divide(a, b) {
  if (!b) {
    console.log("Nie można dzielić przez zero!");
    return null;
  }
  return a / b;
}

divide(10, 2);  // 5
divide(10, 0);  // Nie można dzielić przez zero!
\`\`\`

\`\`\`typescript
// TypeScript - strict null checks
function processUser(user: User | null | undefined) {
  // TypeScript sprawdza czy user może być null/undefined
  if (!user) {
    return;
  }

  // TypeScript wie, że tutaj user NIE jest null/undefined
  console.log(user.name); // ✅ Safe - type narrowing
}
\`\`\`

**Korzyści:**
- ✅ Zwięzły kod - mniej porównań
- ✅ Łatwe sprawdzanie \`null\`, \`undefined\`, pustych stringów
- ✅ Wygodne guard clauses
- ✅ TypeScript narrow types automatycznie

**Uwaga:**
- ⚠️ Pusta tablica \`[]\` i pusty obiekt \`{}\` to **truthy**!
- ⚠️ String \`"0"\` i \`"false"\` to **truthy** (to stringi, nie liczby/boolean)
- ⚠️ Czasami lepiej użyć \`??\` (nullish coalescing) zamiast \`||\` (szczególnie gdy \`0\` jest poprawną wartością)
  `;

  conclusion = `
## 🎯 Podsumowanie

| Aspekt | Java | JavaScript/TypeScript |
|--------|------|----------------------|
| **Typ warunku** | Tylko \`boolean\` | Dowolny typ |
| **Wartości falsy** | Nie dotyczy | 8 wartości: false, 0, -0, 0n, "", null, undefined, NaN |
| **Wartości truthy** | Nie dotyczy | Wszystko inne (w tym \`[]\`, \`{}\`, \`"0"\`, \`"false"\`) |
| **Automatyczna konwersja** | ❌ NIE | ✅ TAK |
| **Guard clauses** | Wymaga \`!= null\` | Wystarczy \`!value\` |

### 💡 Kluczowe zasady:

**1. Dokładnie 8 wartości falsy:**
\`\`\`javascript
false, 0, -0, 0n, "", null, undefined, NaN
\`\`\`

**2. Wszystko inne jest truthy:**
\`\`\`javascript
true, 1, -1, "0", "false", [], {}, function(){}, ...
\`\`\`

**3. Praktyczne użycie:**
\`\`\`javascript
// Guard clause
if (!user) return;

// Wartość domyślna
const name = userName || "Guest";

// Walidacja
if (!email || !password) {
  console.log("Wypełnij wszystkie pola!");
}

// Nullish coalescing (lepsze dla 0)
const count = value ?? 0;  // Tylko null/undefined → 0
const count = value || 0;   // null/undefined/0/"" → 0
\`\`\`

> **Wniosek:** JavaScript pozwala na zwięzły kod dzięki automatycznej konwersji do boolean. Zapamiętaj 8 wartości falsy - wszystko inne jest truthy!
  `;
}
