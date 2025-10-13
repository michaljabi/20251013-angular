import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Funkcje strzałkowe"
      fileEntry="./app/with-java-compare/es-next-news/arrow-functions-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="box has-background-info-invert my-6">
          <h4 class="title is-5">➡️ Składnia arrow function</h4>
          <app-remark [markdown]="syntaxExample" />
        </div>

        <app-remark [markdown]="thisBinding" />

        <div class="box has-background-info-invert my-6">
          <h4 class="title is-5">🔗 Leksykalne this</h4>
          <app-remark [markdown]="thisExample" />
        </div>

        <app-remark [markdown]="useCases" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class ArrowFunctionsPageComponent {

  introduction = `
# Funkcje strzałkowe (Arrow Functions) - ES6

**Arrow functions** to krótka składnia funkcji wprowadzona w ES6. Główne zalety:
- Zwięzła składnia
- Leksykalne \`this\` (nie tworzy własnego \`this\`)
- Idealne do callbacków i funkcji wyższego rzędu
  `;

  syntaxExample = `
\`\`\`typescript
// Klasyczna funkcja
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

// Arrow function - skrócona (implicit return)
const add = (a: number, b: number): number => a + b;

// Jeden parametr - bez nawiasów
const double = (n: number) => n * 2;

// Brak parametrów - puste nawiasy
const greet = () => "Hello!";

// Zwracanie obiektu - użyj nawiasów
const createUser = (name: string) => ({ name, age: 25 });
\`\`\`

**Przykłady użycia:**

\`\`\`typescript
// Callbacki w array methods
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

// setTimeout
setTimeout(() => {
  console.log("Hello after 1 second");
}, 1000);

// Promise chains
fetch('/api/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

📚 **MDN:** [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
  `;

  thisBinding = `
## 🔗 Leksykalne \`this\` - kluczowa różnica

Arrow functions **nie mają własnego \`this\`** - używają \`this\` z otaczającego kontekstu (leksykalnie).
  `;

  thisExample = `
\`\`\`typescript
// Klasyczna funkcja - własne this
class Counter {
  count = 0;

  increment() {
    // ❌ Problem: this w setTimeout to window/undefined
    setTimeout(function() {
      this.count++;  // Error! this nie wskazuje na Counter
      console.log(this.count);
    }, 1000);
  }
}

// Rozwiązanie 1: Arrow function
class Counter {
  count = 0;

  increment() {
    // ✅ Arrow function używa this z increment()
    setTimeout(() => {
      this.count++;  // Działa! this wskazuje na Counter
      console.log(this.count);
    }, 1000);
  }
}

// Rozwiązanie 2 (stare): bind
class Counter {
  count = 0;

  increment() {
    setTimeout(function() {
      this.count++;
    }.bind(this), 1000);  // Ręczne bindowanie
  }
}

// Event handlers - użycie arrow function
class MyComponent {
  name = "Component";

  handleClick = () => {
    console.log(this.name);  // Działa! this wskazuje na MyComponent
  }

  render() {
    return \`<button onclick="\${this.handleClick}">Click</button>\`;
  }
}
\`\`\`

**Kiedy NIE używać arrow functions:**

\`\`\`typescript
// ❌ Jako metody obiektu (jeśli potrzebujesz dynamicznego this)
const obj = {
  name: "Object",
  greet: () => {
    console.log(this.name);  // undefined! this to window/global
  }
};

// ✅ Użyj klasycznej funkcji lub skróconej składni metody
const obj = {
  name: "Object",
  greet() {
    console.log(this.name);  // "Object"
  }
};

// ❌ Jako konstruktory
const Person = (name: string) => {
  this.name = name;  // Error: arrow functions nie mogą być konstruktorami
};

// ✅ Użyj class lub function
class Person {
  constructor(public name: string) {}
}
\`\`\`

📚 **MDN:** [this in arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#no_separate_this)
  `;

  useCases = `
## 💡 Kiedy używać arrow functions?

✅ **Używaj:**
- Callbacki (map, filter, reduce, forEach)
- Event handlers w klasach
- setTimeout/setInterval
- Promise chains
- Krótkie funkcje pomocnicze
- **Musisz:** jako metody obiektu jeśli używasz \`.subscribe()\` z \`RxJS\` (wtedy \`this\` ma wskazywać na instancję komponentu/serwisu)

❌ **Nie używaj:**
- Konstruktory
- Nie nadużywaj (celowe użycie nawet _topmost scope_ w pliku(_module_) dla wszystkich funkcji, nawet takich multiline)
- Metody obiektu (jeśli potrzebujesz dynamicznego \`this\`)

📚 **MDN:** [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#description)
  `;
}
