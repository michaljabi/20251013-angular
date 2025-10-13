import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Skrócona składnia właściwości"
      fileEntry="./app/with-java-compare/es-next-news/object-property-shorthand-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="box has-background-info-invert my-6">
          <h4 class="title is-5">📦 Property shorthand</h4>
          <app-remark [markdown]="propertyShorthand" />
        </div>

        <div class="box has-background-info-invert my-6">
          <h4 class="title is-5">🔧 Method shorthand</h4>
          <app-remark [markdown]="methodShorthand" />
        </div>

        <div class="box has-background-info-invert my-6">
          <h4 class="title is-5">🔑 Computed property names</h4>
          <app-remark [markdown]="computedProperties" />
        </div>
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class ObjectPropertyShorthandPageComponent {

  introduction = `
# Skrócona składnia właściwości obiektów - ES6

ES6 wprowadziło skróty składniowe dla obiektów, które czynią kod bardziej zwięzłym i czytelnym.
  `;

  propertyShorthand = `
\`\`\`typescript
// Stara składnia
const name = "Jan";
const age = 25;

const user = {
  name: name,
  age: age
};

// ✅ Property shorthand (ES6)
const user = {
  name,  // Zamiast name: name
  age    // Zamiast age: age
};

console.log(user);  // { name: "Jan", age: 25 }

// Praktyczny przykład
function createUser(name: string, age: number, email: string) {
  return {
    name,
    age,
    email,
    createdAt: new Date()
  };
}

const user = createUser("Jan", 25, "jan@example.com");

// Mieszanie shorthand i pełnej składni
const id = 1;
const name = "Jan";
const user = {
  id,
  name,
  role: "admin",  // Pełna składnia
  active: true
};

// TypeScript - type inference działa!
const name = "Jan";
const age = 25;
const user = { name, age };  // TypeScript wie: { name: string, age: number }
\`\`\`

📚 **MDN:** [Property shorthand](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#property_definitions)
  `;

  methodShorthand = `
\`\`\`typescript
// Stara składnia
const calculator = {
  add: function(a: number, b: number) {
    return a + b;
  },
  subtract: function(a: number, b: number) {
    return a - b;
  }
};

// ✅ Method shorthand (ES6)
const calculator = {
  add(a: number, b: number) {
    return a + b;
  },
  subtract(a: number, b: number) {
    return a - b;
  }
};

console.log(calculator.add(5, 3));  // 8

// Getter i setter
const user = {
  firstName: "Jan",
  lastName: "Kowalski",

  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  },

  set fullName(value: string) {
    [this.firstName, this.lastName] = value.split(" ");
  }
};

console.log(user.fullName);  // "Jan Kowalski"
user.fullName = "Anna Nowak";
console.log(user.firstName);  // "Anna"

// Async methods
const api = {
  async fetchUsers() {
    const response = await fetch('/api/users');
    return response.json();
  },

  async fetchPosts() {
    const response = await fetch('/api/posts');
    return response.json();
  }
};

await api.fetchUsers();

// Generator methods
const numbers = {
  *range(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }
};

for (const n of numbers.range(1, 5)) {
  console.log(n);  // 1, 2, 3, 4, 5
}
\`\`\`

📚 **MDN:** [Method definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
  `;

  computedProperties = `
\`\`\`typescript
// Computed property names - dynamiczne nazwy właściwości
const propName = "email";
const user = {
  name: "Jan",
  [propName]: "jan@example.com"  // Wartość z zmiennej jako nazwa
};

console.log(user);  // { name: "Jan", email: "jan@example.com" }

// Z wyrażeniami
const prefix = "user";
const obj = {
  [\`\${prefix}Name\`]: "Jan",
  [\`\${prefix}Age\`]: 25
};

console.log(obj);  // { userName: "Jan", userAge: 25 }

// Dynamiczne API
function createAction(type: string, payload: any) {
  return {
    type,
    payload,
    [\`\${type}_timestamp\`]: Date.now()
  };
}

const action = createAction("USER_LOGIN", { id: 1 });
// { type: "USER_LOGIN", payload: { id: 1 }, USER_LOGIN_timestamp: 1234567890 }

// Z Symbol
const sym = Symbol("id");
const obj = {
  [sym]: 123,
  name: "Jan"
};

console.log(obj[sym]);  // 123

// TypeScript - computed properties z type safety
type ActionType = "ADD" | "REMOVE" | "UPDATE";

function createState(action: ActionType, value: number) {
  return {
    [\`\${action.toLowerCase()}Count\`]: value
  };
}

// Dynamiczne tworzenie obiektów
const keys = ["name", "age", "email"];
const values = ["Jan", 25, "jan@example.com"];

const user = keys.reduce((obj, key, index) => ({
  ...obj,
  [key]: values[index]
}), {});

console.log(user);  // { name: "Jan", age: 25, email: "jan@example.com" }
\`\`\`

📚 **MDN:** [Computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names)

## 💡 Praktyczne zastosowania

\`\`\`typescript
// 1. Budowanie obiektów z parametrów
function createConfig(env: string, debug: boolean, port: number) {
  return {
    env,
    debug,
    port,
    timestamp: Date.now()
  };
}

// 2. Redux actions
const createUser = (name: string, age: number) => ({
  type: 'CREATE_USER',
  payload: { name, age }
});

// 3. API responses
async function getUser(id: number) {
  const user = await fetchUserFromDB(id);
  return {
    ...user,
    fetchedAt: new Date()
  };
}

// 4. Formularz do obiektu
function formToObject(formData: FormData) {
  const obj: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    obj[key] = value.toString();
  }
  return obj;
}

// 5. Conditional properties
function createUser(name: string, email?: string) {
  return {
    name,
    ...(email && { email })  // Tylko jeśli email istnieje
  };
}
\`\`\`

📚 **MDN:** [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
  `;
}
