import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Potrójny znak równości"
      fileEntry="./app/with-java-compare/special-features/triple-equality-sign-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="box has-background-warning-invert my-3">
          <h4 class="title is-5">🟨 === vs == w JavaScript/TypeScript</h4>
          <app-remark [markdown]="comparisonExample" />
        </div>

        <app-remark [markdown]="howItWorks" />

        <div class="box has-background-warning-invert my-3">
          <h4 class="title is-5">⚙️ Jak działa == (type coercion)</h4>
          <app-remark [markdown]="coercionExample" />
        </div>

        <app-remark [markdown]="whyAvoid" />

        <div class="box has-background-warning-invert my-3">
          <h4 class="title is-5">⚠️ Problemy z == (unikaj tego!)</h4>
          <app-remark [markdown]="problemsExample" />
        </div>

        <app-remark [markdown]="conclusion" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class TripleEqualitySignPageComponent {

  introduction = `
# Potrójny znak równości (=== vs ==)

**Kluczowa różnica:** JavaScript ma **dwa operatory porównania** dla typów prymitywnych:
- \`===\` (strict equality) - porównuje **typ i wartość**
- \`==\` (loose equality) - porównuje **tylko wartość** (z automatyczną konwersją typu)

## 🔑 Podstawy

**\`===\` (zalecany):**
- Porównuje **typ i wartość**
- Brak automatycznej konwersji typów
- Przewidywalne zachowanie
- **ZAWSZE używaj tego operatora!**

**\`==\` (unikaj):**
- Porównuje **tylko wartość** (ignoruje typ)
- Automatyczna konwersja typów (type coercion)
- Nieprzewidywalne i dziwne wyniki
- Może prowadzić do trudnych do znalezienia bugów

> **Zasada:** Zawsze używaj \`===\` i \`!==\` zamiast \`==\` i \`!=\`
  `;

  comparisonExample = `
\`\`\`javascript
// === (strict equality) - sprawdza typ I wartość
5 === 5;        // ✅ true (ten sam typ i wartość)
5 === "5";      // ❌ false (różne typy: number vs string)
true === 1;     // ❌ false (różne typy: boolean vs number)
null === undefined;  // ❌ false (różne typy)

// == (loose equality) - konwertuje typy!
5 == 5;         // ✅ true (ten sam typ i wartość)
5 == "5";       // ✅ true ⚠️ (string "5" konwertowany na number 5)
true == 1;      // ✅ true ⚠️ (true konwertowany na 1)
null == undefined;   // ✅ true ⚠️ (specjalny przypadek)

// Niezgodność operatorów (!== vs !=)
5 !== "5";      // ✅ true (różne typy)
5 != "5";       // ❌ false (string "5" konwertowany na 5)
\`\`\`

\`\`\`typescript
// TypeScript ostrzega przed użyciem ==
const a: number = 5;
const b: string = "5";

if (a === b) { }  // ✅ TypeScript: Error - types are not comparable
if (a == b) { }   // ⚠️ TypeScript: Warning - use ===
\`\`\`

**Zawsze używaj \`===\` i \`!==\` dla przewidywalności!**
  `;

  howItWorks = `
## ⚙️ Jak działa type coercion w ==

Operator \`==\` automatycznie konwertuje typy według skomplikowanych reguł:
  `;

  coercionExample = `
\`\`\`javascript
// Konwersja string → number
"5" == 5;           // ✅ true ("5" → 5)
"10" == 10;         // ✅ true
"" == 0;            // ✅ true ⚠️ (pusty string → 0)

// Konwersja boolean → number
true == 1;          // ✅ true (true → 1)
false == 0;         // ✅ true (false → 0)

// null i undefined są "równe" tylko sobie
null == undefined;  // ✅ true (specjalny przypadek)
null == 0;          // ❌ false
undefined == 0;     // ❌ false

// Obiekty i tablice
[] == false;        // ✅ true ⚠️ ([] → "" → 0, false → 0)
[] == 0;            // ✅ true ⚠️ ([] → "" → 0)
[1] == 1;           // ✅ true ⚠️ ([1] → "1" → 1)

// Bardzo dziwne przypadki!
"0" == false;       // ✅ true ⚠️ ("0" → 0, false → 0)
"\n" == 0;          // ✅ true ⚠️ (whitespace → 0)
\`\`\`

**Reguły konwersji są skomplikowane i nieprzewidywalne!**
  `;

  whyAvoid = `
## ⚠️ Dlaczego unikać ==

Operator \`==\` prowadzi do trudnych do zrozumienia bugów i nieprzewidywalnego kodu.
  `;

  problemsExample = `
\`\`\`javascript
// ❌ Problem 1: Niespójne zachowanie
"" == 0;            // ✅ true (pusty string == 0)
"" == false;        // ✅ true (pusty string == false)
0 == false;         // ✅ true (0 == false)
// Ale:
false == "false";   // ❌ false ⚠️ (Dlaczego?!)

// ❌ Problem 2: Tablice i obiekty
[] == [];           // ❌ false (różne referencje)
[] == false;        // ✅ true ⚠️ (tablica konwertowana na false?!)
[] == "";           // ✅ true ⚠️
[] == 0;            // ✅ true ⚠️

// ❌ Problem 3: Specjalne wartości
null == 0;          // ❌ false
null >= 0;          // ✅ true ⚠️ (operator >= działa inaczej!)
undefined == 0;     // ❌ false
NaN == NaN;         // ❌ false (NaN nie jest równy samemu sobie)

// ❌ Problem 4: Łatwo o bug
function checkAge(age) {
  // ⚠️ Niebezpieczne! Co jeśli age = "18" (string)?
  if (age == 18) {
    console.log("Możesz głosować!");
  }
}

checkAge(18);       // ✅ Działa
checkAge("18");     // ✅ Działa (ale może to nie być zamierzone!)

// ✅ Lepiej użyć ===
function checkAgeSafe(age) {
  if (age === 18) {  // Tylko number 18, nie string "18"
    console.log("Możesz głosować!");
  }
}

checkAgeSafe(18);   // ✅ Działa
checkAgeSafe("18"); // ❌ Nie działa (wymusza poprawny typ!)

// ❌ Problem 5: Trudne do debugowania
const value = getUserInput();  // Może zwrócić różne typy

// Źle - ukrywa błędy typów
if (value == 100) {
  // Wykona się dla value = 100, "100", true (jeśli true == 1)
}

// Dobrze - wymusza poprawny typ
if (value === 100) {
  // Wykona się TYLKO dla value = 100 (number)
}
\`\`\`

**Używanie \`==\` ukrywa błędy typów i prowadzi do bugów!**
  `;

  conclusion = `
## 🎯 Podsumowanie

| Aspekt | \`===\` (strict) | \`==\` (loose) |
|--------|----------------|---------------|
| **Porównanie typu** | ✅ TAK | ❌ NIE (konwersja) |
| **Porównanie wartości** | ✅ TAK | ✅ TAK |
| **Automatyczna konwersja** | ❌ NIE | ✅ TAK (nieprzewidywalna) |
| **Przewidywalność** | ✅ Wysoka | ❌ Niska |
| **Rekomendacja** | ✅ ZAWSZE używaj | ❌ UNIKAJ |

### 💡 Kluczowe zasady:

**1. ZAWSZE używaj \`===\` i \`!==\`:**
\`\`\`javascript
// ✅ DOBRZE
if (value === 5) { }
if (name !== "") { }
if (user === null) { }

// ❌ ŹLE
if (value == 5) { }
if (name != "") { }
if (user == null) { }
\`\`\`

**2. Wyjątki - prawie nie ma:**
\`\`\`javascript
// Jedyny przypadek gdzie == może być OK:
// Sprawdzanie czy wartość jest null LUB undefined
if (value == null) {
  // Równoważne: value === null || value === undefined
}

// Ale lepiej użyć jawnego porównania:
if (value === null || value === undefined) { }

// Lub nullish coalescing:
const result = value ?? defaultValue;
\`\`\`

**3. TypeScript pomaga:**
\`\`\`typescript
// ESLint może wymuszać ===
{
  "rules": {
    "eqeqeq": ["error", "always"]  // Wymusza === i !==
  }
}
\`\`\`

> **Wniosek:** \`===\` zapewnia **type safety** i **przewidywalność**. Operator \`==\` to przeżytek z wczesnych dni JavaScript - unikaj go! Używaj \`===\` i \`!==\` we wszystkich przypadkach.
  `;
}
