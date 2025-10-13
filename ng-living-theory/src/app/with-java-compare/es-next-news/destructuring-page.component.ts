import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Destrukturyzacja"
      fileEntry="./app/with-java-compare/es-next-news/destructuring-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="box has-background-info-invert my-6">
          <h4 class="title is-5">📦 Destrukturyzacja obiektów</h4>
          <app-remark [markdown]="objectDestructuring" />
        </div>

        <div class="box has-background-info-invert my-6">
          <h4 class="title is-5">📋 Destrukturyzacja tablic</h4>
          <app-remark [markdown]="arrayDestructuring" />
        </div>

        <app-remark [markdown]="advanced" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class DestructuringPageComponent {

  introduction = `
# Destrukturyzacja (Destructuring) - ES6

**Destructuring** pozwala na wyciąganie wartości z obiektów i tablic do osobnych zmiennych w zwięzły sposób.
  `;

  objectDestructuring = `
\`\`\`typescript
// Klasyczny sposób
const user = { name: "Jan", age: 25, city: "Warsaw" };
const name = user.name;
const age = user.age;

// ✅ Destrukturyzacja obiektu
const { name, age } = user;
console.log(name);  // "Jan"
console.log(age);   // 25

// Zmiana nazwy zmiennej
const { name: userName, age: userAge } = user;
console.log(userName);  // "Jan"

// Wartości domyślne
const { name, role = "user" } = user;
console.log(role);  // "user" (brak w obiekcie)

// Zagnieżdżone obiekty
const user = {
  name: "Jan",
  address: {
    city: "Warsaw",
    street: "Main St"
  }
};

const { address: { city, street } } = user;
console.log(city);  // "Warsaw"

// Rest w destrukturyzacji
const { name, ...rest } = user;
console.log(rest);  // { age: 25, city: "Warsaw" }
\`\`\`

**Praktyczne użycie:**

\`\`\`typescript
// Parametry funkcji
function greet({ name, age }: { name: string; age: number }) {
  console.log(\`Hello \${name}, you are \${age} years old\`);
}

greet({ name: "Jan", age: 25 });

// Import modułów
import { Component, OnInit } from '@angular/core';

// Props w React/Angular
const UserCard = ({ name, age }: User) => {
  return \`<div>\${name} - \${age}</div>\`;
};
\`\`\`

📚 **MDN:** [Destructuring assignment - Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring)
  `;

  arrayDestructuring = `
\`\`\`typescript
// Klasyczny sposób
const numbers = [1, 2, 3, 4, 5];
const first = numbers[0];
const second = numbers[1];

// ✅ Destrukturyzacja tablicy
const [first, second] = numbers;
console.log(first);   // 1
console.log(second);  // 2

// Pomijanie elementów
const [first, , third] = numbers;
console.log(third);  // 3

// Rest w destrukturyzacji
const [first, second, ...rest] = numbers;
console.log(rest);  // [3, 4, 5]

// Wartości domyślne
const [a, b, c = 0] = [1, 2];
console.log(c);  // 0

// Zamiana wartości (swap)
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);  // 2, 1
\`\`\`

**Praktyczne użycie:**

\`\`\`typescript
// useState w React
const [count, setCount] = useState(0);

// Iteracja po entries
const entries = Object.entries({ name: "Jan", age: 25 });
for (const [key, value] of entries) {
  console.log(\`\${key}: \${value}\`);
}

// Promise.all
const [users, posts] = await Promise.all([
  fetchUsers(),
  fetchPosts()
]);

// Tuple w TypeScript
const point: [number, number] = [10, 20];
const [x, y] = point;
\`\`\`

📚 **MDN:** [Destructuring assignment - Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring)
  `;

  advanced = `
## 🚀 Zaawansowane przykłady

\`\`\`typescript
// Mieszane destrukturyzacji
const response = {
  data: {
    users: [
      { id: 1, name: "Jan" },
      { id: 2, name: "Anna" }
    ]
  },
  meta: { page: 1, total: 10 }
};

const { data: { users: [firstUser] }, meta: { total } } = response;
console.log(firstUser);  // { id: 1, name: "Jan" }
console.log(total);      // 10

// Funkcja zwracająca wiele wartości
function getUserData() {
  return {
    user: { name: "Jan", age: 25 },
    error: null
  };
}

const { user, error } = getUserData();

// Destrukturyzacja w pętli
const users = [
  { name: "Jan", age: 25 },
  { name: "Anna", age: 30 }
];

for (const { name, age } of users) {
  console.log(\`\${name} is \${age} years old\`);
}

// TypeScript - type-safe destructuring
interface User {
  name: string;
  age: number;
  email?: string;
}

const user: User = { name: "Jan", age: 25 };
const { name, age, email = "no-email" } = user;
\`\`\`

📚 **MDN:** [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  `;
}
