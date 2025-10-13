import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Typowanie strukturalne"
      fileEntry="./app/with-java-compare/differences/structurally-typed-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <app-remark [markdown]="basicExample" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Nominal Typing</h4>
              <app-remark [markdown]="javaNominalExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🔷 TypeScript - Structural Typing</h4>
              <app-remark [markdown]="tsStructuralExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="interfaceCompatibility" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Explicit implements</h4>
              <app-remark [markdown]="javaInterfaceExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🔷 TypeScript - Duck Typing</h4>
              <app-remark [markdown]="tsInterfaceExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="practicalExample" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Klasy muszą być powiązane</h4>
              <app-remark [markdown]="javaPracticalExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🔷 TypeScript - Liczy się struktura</h4>
              <app-remark [markdown]="tsPracticalExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="conclusion" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class StructurallyTypedPageComponent {

  introduction = `
# Typowanie nominalne vs strukturalne

**Kluczowa różnica:** Java używa **typowania nominalnego** (nominal typing), gdzie zgodność typów zależy od **nazwy i hierarchii klas**. TypeScript używa **typowania strukturalnego** (structural typing, "duck typing"), gdzie zgodność zależy od **struktury obiektu**.

## 🔑 Co to oznacza?

**Typowanie nominalne (Java):**
- Zgodność typów oparta na **jawnej deklaracji** (extends, implements)
- Dwa typy są zgodne, jeśli mają **wspólnego przodka** lub **jawnie implementują interfejs**
- Nazwa typu ma **kluczowe znaczenie**

**Typowanie strukturalne (TypeScript):**
- Zgodność typów oparta na **kształcie obiektu** (shape, structure)
- Dwa typy są zgodne, jeśli mają **te same właściwości i metody**
- Nazwa typu **nie ma znaczenia** - liczy się struktura

> **"If it walks like a duck and quacks like a duck, it's a duck"** - duck typing
  `;

  basicExample = `
## 📐 Podstawowy przykład
  `;

  javaNominalExample = `
\`\`\`java
// Java - Nominal Typing
class Point2D {
    public int x;
    public int y;

    public Point2D(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

class Vector2D {
    public int x;  // Identyczna struktura jak Point2D!
    public int y;

    public Vector2D(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

public class NominalTyping {
    public static void printPoint(Point2D point) {
        System.out.println("x: " + point.x + ", y: " + point.y);
    }

    public static void main(String[] args) {
        Point2D point = new Point2D(10, 20);
        Vector2D vector = new Vector2D(10, 20);

        printPoint(point);   // ✅ OK
        // printPoint(vector);  // ❌ ERROR! Incompatible types

        // Mimo że Vector2D ma identyczną strukturę,
        // Java patrzy na NAZWĘ typu, nie na strukturę!
    }
}
\`\`\`

**Java wymaga jawnej zgodności typów przez nazwę/hierarchię!**
  `;

  tsStructuralExample = `
\`\`\`typescript
// TypeScript - Structural Typing
class Point2D {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Vector2D {
  x: number;  // Identyczna struktura jak Point2D!
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

function printPoint(point: Point2D) {
  console.log(\`x: \${point.x}, y: \${point.y}\`);
}

const point = new Point2D(10, 20);
const vector = new Vector2D(10, 20);

printPoint(point);   // ✅ OK
printPoint(vector);  // ✅ OK! TypeScript patrzy na strukturę

// Vector2D ma tę samą strukturę co Point2D (x i y),
// więc TypeScript uznaje je za zgodne!

// Nawet zwykły obiekt działa!
const plainObject = { x: 30, y: 40 };
printPoint(plainObject);  // ✅ OK!
\`\`\`

**TypeScript sprawdza strukturę, nie nazwę typu!**
  `;

  interfaceCompatibility = `
## 🔌 Zgodność z interfejsami
  `;

  javaInterfaceExample = `
\`\`\`java
interface Drawable {
    void draw();
}

// Klasa MUSI jawnie zadeklarować implements
class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing circle");
    }
}

// Ta klasa ma metodę draw(), ale NIE implementuje Drawable
class Square {
    public void draw() {
        System.out.println("Drawing square");
    }
}

public class InterfaceExample {
    public static void render(Drawable drawable) {
        drawable.draw();
    }

    public static void main(String[] args) {
        Circle circle = new Circle();
        Square square = new Square();

        render(circle);  // ✅ OK - Circle implements Drawable
        // render(square);  // ❌ ERROR! Square nie implementuje Drawable

        // Mimo że Square ma metodę draw(),
        // Java wymaga jawnego "implements Drawable"
    }
}
\`\`\`

**Java wymaga jawnej deklaracji \`implements\`!**
  `;

  tsInterfaceExample = `
\`\`\`typescript
interface Drawable {
  draw(): void;
}

// Klasa NIE deklaruje implements, ale ma odpowiednią strukturę
class Circle {
  draw(): void {
    console.log("Drawing circle");
  }
}

// Ta klasa też ma metodę draw()
class Square {
  draw(): void {
    console.log("Drawing square");
  }
}

function render(drawable: Drawable) {
  drawable.draw();
}

const circle = new Circle();
const square = new Square();

render(circle);  // ✅ OK - ma metodę draw()
render(square);  // ✅ OK - ma metodę draw()

// Nawet zwykły obiekt z metodą draw() działa!
const triangle = {
  draw: () => console.log("Drawing triangle")
};
render(triangle);  // ✅ OK!

// TypeScript nie wymaga jawnego "implements"
// - wystarczy, że obiekt ma odpowiednią strukturę!
\`\`\`

**TypeScript sprawdza czy obiekt ma wymaganą strukturę (duck typing)!**
  `;

  practicalExample = `
## 🏭 Praktyczny przykład

Zobaczmy jak różnica w typowaniu wpływa na możliwość ponownego użycia kodu.
  `;

  javaPracticalExample = `
\`\`\`java
// Java - trzeba jawnie utworzyć hierarchię typów

interface Named {
    String getName();
}

class Person implements Named {
    private String name;

    public Person(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return name;
    }
}

class Company implements Named {
    private String name;

    public Company(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return name;
    }
}

// Ta klasa ma getName(), ale NIE implementuje Named
class Product {
    private String name;

    public Product(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

public class NamedExample {
    public static void printName(Named entity) {
        System.out.println("Name: " + entity.getName());
    }

    public static void main(String[] args) {
        Person person = new Person("Jan");
        Company company = new Company("Acme Corp");
        Product product = new Product("Widget");

        printName(person);    // ✅ OK
        printName(company);   // ✅ OK
        // printName(product);   // ❌ ERROR!

        // Product musi być zmieniony, żeby dodać "implements Named"
    }
}
\`\`\`
  `;

  tsPracticalExample = `
\`\`\`typescript
// TypeScript - wystarczy odpowiednia struktura

interface Named {
  getName(): string;
}

class Person {
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }
}

class Company {
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }
}

// Ta klasa NIE deklaruje implements Named, ale ma odpowiednią strukturę
class Product {
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }
}

function printName(entity: Named) {
  console.log(\`Name: \${entity.getName()}\`);
}

const person = new Person("Jan");
const company = new Company("Acme Corp");
const product = new Product("Widget");

printName(person);    // ✅ OK
printName(company);   // ✅ OK
printName(product);   // ✅ OK!

// Wszystkie trzy klasy działają, bo mają metodę getName()!
// Nie trzeba ich modyfikować ani deklarować implements.

// Nawet zwykły obiekt działa!
const book = {
  title: "TypeScript Guide",
  getName: function() { return this.title; }
};
printName(book);  // ✅ OK!
\`\`\`
  `;

  conclusion = `
## 🎯 Podsumowanie

| Aspekt | Java (Nominal) | TypeScript (Structural) |
|--------|----------------|-------------------------|
| **Podstawa zgodności** | Nazwa typu i hierarchia | Struktura obiektu (shape) |
| **Wymóg implements** | ✅ TAK - jawna deklaracja | ❌ NIE - wystarczy struktura |
| **Kompatybilność typów** | Przez dziedziczenie/interfejsy | Przez kształt obiektu |
| **Duck typing** | ❌ NIE | ✅ TAK |
| **Elastyczność** | Mniejsza - wymaga jawnych deklaracji | Większa - liczy się struktura |
| **Bezpieczeństwo** | Wyższe - jawne kontrakty | Niższe - może być zbyt elastyczne |

### 💡 Kluczowe różnice:

**Java (Nominal Typing):**
- Typ określony przez **nazwę i hierarchię**
- Wymaga **jawnych deklaracji** (extends, implements)
- Dwa obiekty są zgodne, jeśli mają **wspólnego przodka**
- Silniejsze ograniczenia, ale **bardziej przewidywalne**
- Refactoring jest **bezpieczniejszy** - kompilator wykryje niezgodności

**TypeScript (Structural Typing):**
- Typ określony przez **strukturę** (właściwości i metody)
- **Nie wymaga** jawnych deklaracji implements
- Dwa obiekty są zgodne, jeśli mają **ten sam kształt**
- Bardziej **elastyczne** i wygodne dla JavaScript
- Pozwala na łatwiejszą i etapową migrację projektów z \`JS\` do \`TS\`
- **Duck typing** - "jeśli wygląda jak kaczka i kwacze jak kaczka..."
- Może być **zbyt permisywne** - przypadkowe zgodności

### ⚠️ Potencjalne pułapki structural typing:

\`\`\`typescript
interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
}

function printUser(user: User) {
  console.log(\`User: \${user.name}\`);
}

const product: Product = { id: 1, name: "Widget" };
printUser(product);  // ✅ Kompiluje się! (ale może to nie być zamierzone)

// User i Product mają identyczną strukturę,
// więc TypeScript uznaje je za zgodne!
// W Java byłby to błąd kompilacji.
\`\`\`

> **Praktyczny wniosek:** Typowanie strukturalne TypeScript jest **wygodniejsze i bardziej elastyczne**, ale wymaga większej ostrożności - łatwo o przypadkowe zgodności typów. Typowanie nominalne Java jest **bardziej rygorystyczne**, ale bezpieczniejsze i lepsze dla dużych projektów.
  `;
}
