import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Słowo kluczowe class"
      fileEntry="./app/with-java-compare/es-next-news/class-keyword-and-improvements-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="box has-background-info-invert my-6">
          <h4 class="title is-5">🏛️ Class - ES6</h4>
          <app-remark [markdown]="classBasics" />
        </div>

        <div class="box has-background-info-invert my-6">
          <h4 class="title is-5">🔒 Private fields - ES2022</h4>
          <app-remark [markdown]="privateFields" />
        </div>

        <div class="box has-background-info-invert my-6">
          <h4 class="title is-5">⚡ Static members</h4>
          <app-remark [markdown]="staticMembers" />
        </div>
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class ClassKeywordAndImprovementsPageComponent {

  introduction = `
# Słowo kluczowe class - ES6

**Class** w JavaScript (ES6) to lukier składniowy nad prototypami. Upraszcza tworzenie obiektów i dziedziczenie.
  `;

  classBasics = `
\`\`\`typescript
// Stara składnia - function constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return \`Hello, I'm \${this.name}\`;
};

// ✅ Class - ES6
class Person {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return \`Hello, I'm \${this.name}\`;
  }
}

const person = new Person("Jan", 25);
console.log(person.greet());  // "Hello, I'm Jan"

// Dziedziczenie - extends
class Student extends Person {
  constructor(name: string, age: number, studentId: string) {
    super(name, age);  // Wywołanie konstruktora rodzica
    this.studentId = studentId;
  }

  study(): void {
    console.log(\`\${this.name} is studying\`);
  }
}

const student = new Student("Anna", 20, "S12345");
student.greet();  // Metoda z Person
student.study();  // Własna metoda

// Getters i setters
class Rectangle {
  constructor(private width: number, private height: number) {}

  get area(): number {
    return this.width * this.height;
  }

  set dimensions(value: { width: number; height: number }) {
    this.width = value.width;
    this.height = value.height;
  }
}

const rect = new Rectangle(10, 20);
console.log(rect.area);  // 200 (getter)
rect.dimensions = { width: 15, height: 25 };  // setter
\`\`\`

📚 **MDN:** [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
  `;

  privateFields = `
\`\`\`typescript
// Private fields - ES2022 (# prefix)
class BankAccount {
  #balance = 0;  // Private field

  deposit(amount: number): void {
    this.#balance += amount;
  }

  withdraw(amount: number): boolean {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      return true;
    }
    return false;
  }

  getBalance(): number {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());  // 100
// console.log(account.#balance);   // ❌ Error: Private field

// Private methods
class Counter {
  #count = 0;

  increment(): void {
    this.#count++;
    this.#log();  // Wywołanie private method
  }

  #log(): void {
    console.log(\`Count: \${this.#count}\`);
  }
}

const counter = new Counter();
counter.increment();
// counter.#log();  // ❌ Error: Private method

// TypeScript - private keyword (compile-time only)
class TypeScriptPrivate {
  private value = 0;  // TypeScript private

  getValue(): number {
    return this.value;
  }
}

const obj = new TypeScriptPrivate();
// obj.value;  // ❌ TypeScript error (ale działa w runtime!)
\`\`\`

**Różnica # vs private:**
- \`#field\` - prawdziwe private (runtime) - ES2022
- \`private field\` - tylko TypeScript (compile-time)

📚 **MDN:** [Private class features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
  `;

  staticMembers = `
\`\`\`typescript
// Static properties i methods
class MathUtils {
  static PI = 3.14159;

  static circleArea(radius: number): number {
    return this.PI * radius * radius;
  }

  static max(...numbers: number[]): number {
    return Math.max(...numbers);
  }
}

console.log(MathUtils.PI);  // 3.14159
console.log(MathUtils.circleArea(5));  // 78.53975

// Static NIE jest dostępne w instancji
const utils = new MathUtils();
// console.log(utils.PI);  // ❌ undefined

// Static initialization blocks - ES2022
class Database {
  static connection: any;
  static config: any;

  static {
    // Kod wykonywany przy ładowaniu klasy
    this.config = loadConfig();
    this.connection = createConnection(this.config);
    console.log('Database initialized');
  }
}

// Private static
class Singleton {
  static #instance: Singleton;

  private constructor() {}

  static getInstance(): Singleton {
    if (!this.#instance) {
      this.#instance = new Singleton();
    }
    return this.#instance;
  }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2);  // true
\`\`\`

📚 **MDN:** [Static members](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)

### 💡 Praktyczne przykłady

\`\`\`typescript
// 1. Angular component (uproszczony)
@Component({
  selector: 'app-user',
  template: '<div>{{name}}</div>'
})
class UserComponent {
  name = 'Jan';

  ngOnInit(): void {
    console.log('Component initialized');
  }
}

// 2. Service pattern
@Injectable({
  providedIn: 'root'
})
export class UserService {}
class UserService {
  private apiUrl = '/api/users';

  async getUsers(): Promise<User[]> {
    const response = await fetch(this.apiUrl);
    return response.json();
  }

  async createUser(user: User): Promise<User> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify(user)
    });
    return response.json();
  }
}

// 3. Builder pattern
class UserBuilder {
  #user: Partial<User> = {};

  setName(name: string): this {
    this.#user.name = name;
    return this;
  }

  setAge(age: number): this {
    this.#user.age = age;
    return this;
  }

  build(): User {
    return this.#user as User;
  }
}

const user = new UserBuilder()
  .setName("Jan")
  .setAge(25)
  .build();

// 4. Abstract class (TypeScript)
abstract class Animal {
  constructor(protected name: string) {}

  abstract makeSound(): void;

  move(): void {
    console.log(\`\${this.name} is moving\`);
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

// const animal = new Animal("Generic");  // ❌ Cannot create instance of abstract class
const dog = new Dog("Rex");
dog.makeSound();  // "Woof!"
\`\`\`

📚 **MDN:** [Classes overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
  `;
}
