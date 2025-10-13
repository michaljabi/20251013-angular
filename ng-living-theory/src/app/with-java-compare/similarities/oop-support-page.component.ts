import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Wsparcie OOP"
      fileEntry="./app/with-java-compare/similarities/oop-support-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="box my-3">
          <h5 class="title is-5">Podstawowe koncepcje OOP</h5>
          <div class="columns my-3">
            <div class="column">
              <div class="panel">
                <h4 class="panel-heading has-background-info-invert">☕ Java</h4>
                <div class="panel-block is-size-7">✅ Klasy i obiekty</div>
                <div class="panel-block is-size-7">✅ Dziedziczenie (extends)</div>
                <div class="panel-block is-size-7">✅ Enkapsulacja (public/private/protected)</div>
                <div class="panel-block is-size-7">✅ Polimorfizm</div>
                <div class="panel-block is-size-7">✅ Interfejsy (implements)</div>
                <div class="panel-block is-size-7">✅ Klasy abstrakcyjne</div>
              </div>
            </div>
            <div class="column">
              <div class="panel">
                <h4 class="panel-heading has-background-info-invert">🔷 TypeScript</h4>
                <div class="panel-block is-size-7">✅ Klasy i obiekty</div>
                <div class="panel-block is-size-7">✅ Dziedziczenie (extends)</div>
                <div class="panel-block is-size-7">✅ Enkapsulacja (public/private/protected)</div>
                <div class="panel-block is-size-7">✅ Polimorfizm</div>
                <div class="panel-block is-size-7">✅ Interfejsy (implements)</div>
                <div class="panel-block is-size-7">✅ Klasy abstrakcyjne</div>
              </div>
            </div>
            <div class="column">
              <div class="panel">
                <h4 class="panel-heading has-background-warning-invert">🟨 JavaScript</h4>
                <div class="panel-block is-size-7">✅ Klasy i obiekty (ES6+)</div>
                <div class="panel-block is-size-7">✅ Dziedziczenie (extends)</div>
                <div class="panel-block is-size-7">⚠️ Enkapsulacja (# dla private od ES2022)</div>
                <div class="panel-block is-size-7">✅ Polimorfizm</div>
                <div class="panel-block is-size-7">❌ Brak interfejsów</div>
                <div class="panel-block is-size-7">❌ Brak klas abstrakcyjnych</div>
              </div>
            </div>
          </div>
        </div>

        <app-remark [markdown]="classesAndObjects" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">TypeScript - Klasy i obiekty</h4>
              <app-remark [markdown]="tsClassExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">JavaScript - Klasy i obiekty</h4>
              <app-remark [markdown]="jsClassExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="inheritance" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">TypeScript - Dziedziczenie</h4>
              <app-remark [markdown]="tsInheritanceExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">JavaScript - Dziedziczenie</h4>
              <app-remark [markdown]="jsInheritanceExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="encapsulation" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">TypeScript - Enkapsulacja</h4>
              <app-remark [markdown]="tsEncapsulationExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">JavaScript - Enkapsulacja</h4>
              <app-remark [markdown]="jsEncapsulationExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="polymorphism" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">TypeScript - Polimorfizm</h4>
              <app-remark [markdown]="tsPolymorphismExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">JavaScript - Polimorfizm</h4>
              <app-remark [markdown]="jsPolymorphismExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="interfaces" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">TypeScript - Interfejsy</h4>
              <app-remark [markdown]="tsInterfaceExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">JavaScript - Brak interfejsów</h4>
              <app-remark [markdown]="jsInterfaceExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="abstractClasses" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">TypeScript - Klasy abstrakcyjne</h4>
              <app-remark [markdown]="tsAbstractExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">JavaScript - Workaround</h4>
              <app-remark [markdown]="jsAbstractExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="conclusion" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class OopSupportPageComponent {

  introduction = `
# Podobieństwa w wsparciu OOP

**Java**, **TypeScript** i **JavaScript** wspierają programowanie obiektowe, choć w różnym stopniu:

- **Java** - pełne wsparcie OOP od samego początku
- **TypeScript** - pełne wsparcie OOP z dodatkowymi funkcjami jak interfejsy i typy
- **JavaScript** - wsparcie OOP od ES6 (2015), ale z pewnymi ograniczeniami

Wszystkie trzy języki implementują główne zasady programowania obiektowego, choć różnią się w szczegółach implementacji.
  `;

  classesAndObjects = `
## 📦 Klasy i obiekty

W **TypeScript** i **JavaScript** (od ES6) klasy działają bardzo podobnie do **Java**. Definiujesz klasę za pomocą słowa kluczowego \`class\`, tworząc szablon dla obiektów.

### Charakterystyka:
- ✅ Konstruktory do inicjalizacji obiektów
- ✅ Pola (properties) do przechowywania stanu
- ✅ Metody do definiowania zachowań
- ✅ Słowo kluczowe \`new\` do tworzenia instancji
  `;

  tsClassExample = `
\`\`\`typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(\`Cześć, jestem \${this.name}\`);
  }
}

const person = new Person("Jan", 25);
person.greet(); // Wypisze: Cześć, jestem Jan
\`\`\`
  `;

  jsClassExample = `
\`\`\`javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\`Cześć, jestem \${this.name}\`);
  }
}

const person = new Person("Jan", 25);
person.greet(); // Wypisze: Cześć, jestem Jan
\`\`\`
  `;

  inheritance = `
## 🧬 Dziedziczenie

Wszystkie trzy języki wspierają dziedziczenie za pomocą słowa kluczowego \`extends\`. Klasa potomna dziedziczy właściwości i metody klasy bazowej.

### Charakterystyka:
- ✅ Słowo kluczowe \`extends\` do dziedziczenia
- ✅ \`super\` do wywołania konstruktora/metod klasy bazowej
- ✅ Możliwość nadpisywania metod (override)
- ✅ Dostęp do dziedziczonych pól i metod
  `;

  tsInheritanceExample = `
\`\`\`typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Zwierzę wydaje dźwięk");
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // Wywołanie konstruktora klasy bazowej
    this.breed = breed;
  }

  makeSound(): void {
    console.log("Hau hau!");
  }
}

const dog = new Dog("Burek", "Owczarek");
dog.makeSound(); // Wypisze: Hau hau!
\`\`\`
  `;

  jsInheritanceExample = `
\`\`\`javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Zwierzę wydaje dźwięk");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Wywołanie konstruktora klasy bazowej
    this.breed = breed;
  }

  makeSound() {
    console.log("Hau hau!");
  }
}

const dog = new Dog("Burek", "Owczarek");
dog.makeSound(); // Wypisze: Hau hau!
\`\`\`
  `;

  encapsulation = `
## 🔒 Enkapsulacja

### Charakterystyka:
- **TypeScript**: \`public\`, \`private\`, \`protected\` (tylko w czasie kompilacji!)
- **JavaScript**: \`#\` dla prywatnych pól (prawdziwa prywatność w runtime od ES2022)
- ⚠️ W **TypeScript** modyfikatory dostępu są usuwane podczas kompilacji do JS
  `;

  tsEncapsulationExample = `
\`\`\`typescript
class BankAccount {
  private balance: number;
  public owner: string;

  constructor(owner: string, initialBalance: number) {
    this.owner = owner;
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount("Jan", 1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
// account.balance; // ❌ Błąd kompilacji
\`\`\`
  `;

  jsEncapsulationExample = `
\`\`\`javascript
class BankAccount {
  #balance; // Prywatne pole (ES2022)
  owner;

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Jan", 1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
// console.log(account.#balance); // ❌ Błąd runtime
\`\`\`
  `;

  polymorphism = `
## 🎭 Polimorfizm

**Polimorfizm** pozwala obiektom różnych klas być traktowanym jako obiekty wspólnej klasy bazowej, przy czym każdy obiekt może zaimplementować metody na swój sposób.

### Charakterystyka:
- ✅ Nadpisywanie metod (method overriding)
- ✅ Dynamiczne wiązanie (dynamic binding)
- ✅ Ta sama metoda, różne zachowania
  `;

  tsPolymorphismExample = `
\`\`\`typescript
abstract class Shape {
  abstract calculateArea(): number;

  describe(): void {
    console.log(\`Pole: \${this.calculateArea()}\`);
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 6)
];

shapes.forEach(shape => shape.describe());
// Pole: 78.54
// Pole: 24
\`\`\`
  `;

  jsPolymorphismExample = `
\`\`\`javascript
class Shape {
  calculateArea() {
    throw new Error("Metoda abstrakcyjna!");
  }

  describe() {
    console.log(\`Pole: \${this.calculateArea()}\`);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const shapes = [
  new Circle(5),
  new Rectangle(4, 6)
];

shapes.forEach(shape => shape.describe());
// Pole: 78.54
// Pole: 24
\`\`\`
  `;

  interfaces = `
## 📋 Interfejsy

**Interfejsy** definiują kontrakt, który klasy muszą spełnić. **TypeScript** wspiera interfejsy podobnie jak **Java**, ale w **JavaScript** nie ma ich wcale!

### Charakterystyka:
- **TypeScript**: Pełne wsparcie interfejsów z \`implements\`
- **JavaScript**: ❌ Brak interfejsów (tylko konwencje i dokumentacja)
- ⚠️ Interfejsy w **TypeScript** są usuwane podczas kompilacji
  `;

  tsInterfaceExample = `
\`\`\`typescript
interface Drawable {
  draw(): void;
  getColor(): string;
}

class Circle implements Drawable {
  constructor(private color: string) {}

  draw(): void {
    console.log("Rysuję koło");
  }

  getColor(): string {
    return this.color;
  }
}

class Square implements Drawable {
  constructor(private color: string) {}

  draw(): void {
    console.log("Rysuję kwadrat");
  }

  getColor(): string {
    return this.color;
  }
}

const shapes: Drawable[] = [
  new Circle("czerwony"),
  new Square("niebieski")
];
\`\`\`
  `;

  jsInterfaceExample = `
\`\`\`javascript
// Brak interfejsów - używamy konwencji i dokumentacji

/**
 * "Interfejs" Drawable (tylko konwencja)
 * @interface
 * @method draw()
 * @method getColor()
 */

class Circle {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log("Rysuję koło");
  }

  getColor() {
    return this.color;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log("Rysuję kwadrat");
  }

  getColor() {
    return this.color;
  }
}

// Brak wymuszenia implementacji w czasie kompilacji
\`\`\`
  `;

  abstractClasses = `
## 🏗️ Klasy abstrakcyjne

**Klasy abstrakcyjne** to klasy, które nie mogą być bezpośrednio instancjonowane i służą jako szablony dla klas pochodnych.

### Charakterystyka:
- **TypeScript**: Pełne wsparcie z \`abstract class\` i \`abstract\` methods
- **JavaScript**: ❌ Brak klas abstrakcyjnych (można symulować przez rzucanie błędów)
- ⚠️ W **TypeScript** abstrakcyjność jest sprawdzana tylko w czasie kompilacji
  `;

  tsAbstractExample = `
\`\`\`typescript
abstract class Vehicle {
  constructor(protected brand: string) {}

  abstract startEngine(): void;

  stop(): void {
    console.log(\`\${this.brand} zatrzymany\`);
  }
}

class Car extends Vehicle {
  startEngine(): void {
    console.log(\`\${this.brand} - silnik uruchomiony\`);
  }
}

// const v = new Vehicle("Test"); // ❌ Błąd kompilacji
const car = new Car("Toyota");
car.startEngine(); // Toyota - silnik uruchomiony
car.stop();        // Toyota zatrzymany
\`\`\`
  `;

  jsAbstractExample = `
\`\`\`javascript
class Vehicle {
  constructor(brand) {
    if (new.target === Vehicle) {
      throw new Error("Nie można instancjonować klasy abstrakcyjnej");
    }
    this.brand = brand;
  }

  startEngine() {
    throw new Error("Metoda abstrakcyjna musi być zaimplementowana");
  }

  stop() {
    console.log(\`\${this.brand} zatrzymany\`);
  }
}

class Car extends Vehicle {
  startEngine() {
    console.log(\`\${this.brand} - silnik uruchomiony\`);
  }
}

// const v = new Vehicle("Test"); // ❌ Błąd runtime
const car = new Car("Toyota");
car.startEngine(); // Toyota - silnik uruchomiony
car.stop();        // Toyota zatrzymany
\`\`\`
  `;

  conclusion = `
## 🎯 Podsumowanie

| Aspekt | Java | TypeScript | JavaScript |
|--------|------|------------|------------|
| **Klasy i obiekty** | ✅ Pełne wsparcie | ✅ Pełne wsparcie | ✅ Pełne wsparcie (ES6+) |
| **Dziedziczenie** | ✅ \`extends\` | ✅ \`extends\` | ✅ \`extends\` |
| **Enkapsulacja** | ✅ public/private/protected | ✅ public/private/protected (compile-time) | ⚠️ \`#\` dla private (ES2022) |
| **Polimorfizm** | ✅ Pełne wsparcie | ✅ Pełne wsparcie | ✅ Pełne wsparcie |
| **Interfejsy** | ✅ \`interface\` | ✅ \`interface\` | ❌ Brak |
| **Klasy abstrakcyjne** | ✅ \`abstract class\` | ✅ \`abstract class\` | ❌ Brak (workaround) |

### 💡 Kluczowe wnioski:

1. **TypeScript** oferuje najbardziej zbliżone doświadczenie do **Java** w zakresie OOP
2. **JavaScript** wspiera podstawowe koncepcje OOP, ale brakuje mu interfejsów i klas abstrakcyjnych
3. **TypeScript** dodaje bezpieczeństwo typów w czasie kompilacji, ale w runtime działa jak JavaScript
4. Enkapsulacja w **TypeScript** jest tylko sprawdzana w czasie kompilacji, prawdziwa prywatność jest tylko w **JavaScript** (ES2022+).
Jednak można jej używać w **TypeScript**! Polega na dopisaniu znaku \`#\` przed polem, które ma być prywatne (syntax).

\`\`\`typescript
class Person {
  #name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.#name = name;
    this.#age = age;
  }
}
\`\`\`

> **Uwaga:** \`TypeScript\` kompiluje się do \`JavaScript\`, więc wszystkie jego funkcje OOP (interfejsy, modyfikatory dostępu, klasy abstrakcyjne) istnieją tylko w czasie kompilacji i są usuwane w wersji runtime!
  `;
}
