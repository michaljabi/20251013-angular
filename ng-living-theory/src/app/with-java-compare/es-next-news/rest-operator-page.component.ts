import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Operator rest"
      fileEntry="./app/with-java-compare/es-next-news/rest-operator-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="box has-background-info-invert my-6">
          <h4 class="title is-5">🔢 Rest parameters w funkcjach</h4>
          <app-remark [markdown]="restParameters" />
        </div>

        <div class="box has-background-info-invert my-6">
          <h4 class="title is-5">📦 Rest w destrukturyzacji</h4>
          <app-remark [markdown]="restDestructuring" />
        </div>

        <app-remark [markdown]="useCases" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class RestOperatorPageComponent {

  introduction = `
# Operator rest (...) - ES6

**Rest operator** (\`...\`) zbiera pozostałe elementy do tablicy. Używany w:
- Parametrach funkcji (rest parameters)
- Destrukturyzacji obiektów i tablic
- Przeciwieństwo spread - zbiera zamiast rozpako wywać
  `;

  restParameters = `
\`\`\`typescript
// Rest parameters - zbiera wszystkie argumenty
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5));  // 15
console.log(sum());                // 0

// Rest musi być ostatnim parametrem
function greet(greeting: string, ...names: string[]) {
  return \`\${greeting}, \${names.join(" and ")}!\`;
}

console.log(greet("Hello", "Jan"));              // "Hello, Jan!"
console.log(greet("Hello", "Jan", "Anna"));      // "Hello, Jan and Anna!"
console.log(greet("Hello", "Jan", "Anna", "Piotr")); // "Hello, Jan and Anna and Piotr!"

// Różnica od arguments (stare API)
function oldWay() {
  // arguments to array-like object, NIE tablica!
  console.log(arguments);  // ⚠️ Nie ma metod tablicowych
  // const arr = Array.from(arguments);  // Konwersja potrzebna
}

function newWay(...args: number[]) {
  // args to prawdziwa tablica!
  console.log(args);       // ✅ Ma wszystkie metody tablicowe
  args.map(n => n * 2);    // ✅ Działa
}

// TypeScript - type-safe rest parameters
function combine(separator: string, ...items: string[]): string {
  return items.join(separator);
}

console.log(combine(", ", "apple", "banana", "orange"));
// "apple, banana, orange"

// Rest z różnymi typami (tuple)
function logInfo(
  message: string,
  ...details: [number, boolean]
): void {
  console.log(message, details);
}

logInfo("Status", 200, true);
\`\`\`

📚 **MDN:** [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
  `;

  restDestructuring = `
\`\`\`typescript
// Rest w destrukturyzacji tablicy
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);   // 1
console.log(second);  // 2
console.log(rest);    // [3, 4, 5]

const [head, ...tail] = [1, 2, 3, 4];
console.log(head);  // 1
console.log(tail);  // [2, 3, 4]

// Rest w destrukturyzacji obiektu
const user = {
  name: "Jan",
  age: 25,
  city: "Warsaw",
  country: "Poland"
};

const { name, age, ...address } = user;
console.log(name);     // "Jan"
console.log(age);      // 25
console.log(address);  // { city: "Warsaw", country: "Poland" }

// Usuwanie właściwości z obiektu
const user = { name: "Jan", age: 25, password: "secret" };
const { password, ...publicUser } = user;
console.log(publicUser);  // { name: "Jan", age: 25 }

// Rest w parametrach funkcji z destrukturyzacją
interface User {
  name: string;
  age: number;
  email: string;
  role: string;
}

function createUser({ name, age, ...rest }: User) {
  console.log(name, age);    // Wyodrębnione
  console.log(rest);         // Reszta: { email, role }
}

// Łączenie rest i spread
const obj1 = { a: 1, b: 2, c: 3 };
const { a, ...restObj } = obj1;
const obj2 = { ...restObj, d: 4 };
console.log(obj2);  // { b: 2, c: 3, d: 4 }
\`\`\`

📚 **MDN:** [Rest in destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property)
  `;

  useCases = `
## 💡 Praktyczne zastosowania

\`\`\`typescript
// 1. Funkcje o zmiennej liczbie argumentów
function average(...numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return sum(...numbers) / numbers.length;
}

console.log(average(1, 2, 3, 4, 5));  // 3

// 2. Logger przyjmujący wiele argumentów
function log(level: string, ...messages: string[]): void {
  console.log(\`[\${level}]\`, ...messages);
}

log("INFO", "User logged in", "from IP:", "192.168.1.1");

// 3. Props forwarding (React/Angular)
interface ButtonProps {
  color: string;
  size: string;
  onClick: () => void;
}

function Button({ color, ...restProps }: ButtonProps) {
  return <button style={{ color }} {...restProps} />;
}

// 4. Usuwanie wrażliwych danych
interface UserData {
  id: number;
  name: string;
  email: string;
  password: string;
  token: string;
}

function sanitizeUser(user: UserData) {
  const { password, token, ...safeUser } = user;
  return safeUser;
}

// 5. Funkcja pomocnicza max/min
function max(...numbers: number[]): number {
  return Math.max(...numbers);
}

console.log(max(5, 2, 8, 1, 9));  // 9

// 6. Middleware pattern
function compose(...fns: Function[]) {
  return (x: any) => fns.reduceRight((acc, fn) => fn(acc), x);
}

const addOne = (x: number) => x + 1;
const double = (x: number) => x * 2;
const pipeline = compose(addOne, double);
console.log(pipeline(3));  // 7 (3 * 2 + 1)
\`\`\`

## ⚠️ Rest vs Spread - różnica:

\`\`\`typescript
// Spread - rozpakowanie (rozszerza)
const arr = [1, 2, 3];
console.log(...arr);  // 1 2 3 (spread)

// Rest - zbieranie (kompresuje)
function fn(...args) {  // rest
  console.log(args);  // [1, 2, 3]
}
fn(1, 2, 3);

// Ta sama składnia (...), ale różne zastosowanie!
\`\`\`

📚 **MDN:** [Rest syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
  `;
}
