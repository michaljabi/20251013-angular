import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Operator spread"
      fileEntry="./app/with-java-compare/es-next-news/spread-operator-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="box has-background-info-invert my-6">
          <h4 class="title is-5">📋 Spread w tablicach</h4>
          <app-remark [markdown]="arraySpread" />
        </div>

        <div class="box has-background-info-invert my-6">
          <h4 class="title is-5">📦 Spread w obiektach</h4>
          <app-remark [markdown]="objectSpread" />
        </div>

        <app-remark [markdown]="useCases" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class SpreadOperatorPageComponent {

  introduction = `
# Operator spread (...) - ES6/ES2018

**Spread operator** (\`...\`) rozpakowuje elementy tablicy lub właściwości obiektu. Używany do:
- Kopiowania tablic/obiektów
- Łączenia tablic/obiektów
- Przekazywania argumentów do funkcji
  `;

  arraySpread = `
\`\`\`typescript
// Kopiowanie tablicy
const numbers = [1, 2, 3];
const copy = [...numbers];
console.log(copy);  // [1, 2, 3]

// Łączenie tablic
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);  // [1, 2, 3, 4, 5, 6]

// Dodawanie elementów
const numbers = [2, 3, 4];
const extended = [1, ...numbers, 5];
console.log(extended);  // [1, 2, 3, 4, 5]

// Spread jako argumenty funkcji
function sum(a: number, b: number, c: number) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));  // 6

// Znajdowanie max/min
const numbers = [5, 2, 8, 1, 9];
console.log(Math.max(...numbers));  // 9
console.log(Math.min(...numbers));  // 1

// Konwersja string na tablicę znaków
const str = "Hello";
const chars = [...str];
console.log(chars);  // ["H", "e", "l", "l", "o"]

// Usuwanie duplikatów
const numbers = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(numbers)];
console.log(unique);  // [1, 2, 3, 4]
\`\`\`

📚 **MDN:** [Spread in arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals)
  `;

  objectSpread = `
\`\`\`typescript
// Kopiowanie obiektu (shallow copy)
const user = { name: "Jan", age: 25 };
const copy = { ...user };
console.log(copy);  // { name: "Jan", age: 25 }

// Łączenie obiektów
const user = { name: "Jan", age: 25 };
const address = { city: "Warsaw", country: "Poland" };
const fullUser = { ...user, ...address };
console.log(fullUser);
// { name: "Jan", age: 25, city: "Warsaw", country: "Poland" }

// Nadpisywanie właściwości
const user = { name: "Jan", age: 25 };
const updated = { ...user, age: 26 };
console.log(updated);  // { name: "Jan", age: 26 }

// Dodawanie nowych właściwości
const user = { name: "Jan", age: 25 };
const extended = { ...user, email: "jan@example.com" };
console.log(extended);
// { name: "Jan", age: 25, email: "jan@example.com" }

// Kolejność ma znaczenie - późniejsze nadpisują wcześniejsze
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log({ ...obj1, ...obj2 });  // { a: 1, b: 3, c: 4 }
console.log({ ...obj2, ...obj1 });  // { a: 1, b: 2, c: 4 }

// Warunkowe właściwości
const includeEmail = true;
const user = {
  name: "Jan",
  age: 25,
  ...(includeEmail && { email: "jan@example.com" })
};
console.log(user);  // { name: "Jan", age: 25, email: "jan@example.com" }
\`\`\`

**⚠️ Uwaga - shallow copy:**

\`\`\`typescript
// Spread robi shallow copy - zagnieżdżone obiekty są współdzielone!
const user = {
  name: "Jan",
  address: { city: "Warsaw" }
};

const copy = { ...user };
copy.address.city = "Kraków";  // Modyfikuje oryginalny obiekt!

console.log(user.address.city);  // "Kraków" ⚠️

// Dla deep copy użyj:
const deepCopy = structuredClone(user);  // ES2022
// lub
const deepCopy = JSON.parse(JSON.stringify(user));  // stary sposób
\`\`\`

📚 **MDN:** [Spread in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals)
  `;

  useCases = `
## 💡 Praktyczne zastosowania

\`\`\`typescript
// 1. Immutable updates (React/Redux)
const state = { users: [], loading: false };
const newState = { ...state, loading: true };

// 2. Dodawanie elementów do tablicy immutably
const todos = ["Learn JS", "Learn TS"];
const newTodos = [...todos, "Learn Angular"];

// 3. Pomijanie elementów z tablicy i wrzucanie w nową
const numbers = [1, 2, 3, 4, 5];
const withoutThree = numbers.filter(n => n !== 3);
const result = [...withoutThree, 6, 7];

// 4. Props spreading w React/Angular
interface ButtonProps {
  color: string;
  size: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return <button {...props}>Click</button>;
};

// 5. Merging konfiguracji
const defaultConfig = { timeout: 5000, retries: 3 };
const userConfig = { timeout: 10000 };
const config = { ...defaultConfig, ...userConfig };
// { timeout: 10000, retries: 3 }

// 6. Kopiowanie z modyfikacją w TypeScript
interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = { name: "Jan", age: 25, email: "jan@example.com" };
const updated: User = { ...user, age: 26 };
\`\`\`

📚 **MDN:** [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
  `;
}
