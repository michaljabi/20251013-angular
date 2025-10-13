import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Wnioskowanie typów"
      fileEntry="./app/with-java-compare/similarities/type-inference-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="box my-3">
          <h5 class="title is-5">Porównanie mechanizmów wnioskowania typów</h5>
          <div class="columns my-3">
            <div class="column">
              <div class="panel">
                <h4 class="panel-heading has-background-info-invert">☕ Java</h4>
                <div class="panel-block is-size-7">🎯 <strong>var</strong> (od Java 10, 2018)</div>
                <div class="panel-block is-size-7">📝 Tylko dla zmiennych lokalnych</div>
                <div class="panel-block is-size-7">⚡ Wnioskowanie w czasie kompilacji</div>
                <div class="panel-block is-size-7">🔒 Typ jest niezmienialny</div>
                <div class="panel-block is-size-7">✅ Statyczne typowanie</div>
              </div>
            </div>
            <div class="column">
              <div class="panel">
                <h4 class="panel-heading has-background-warning-invert">🔷 TypeScript</h4>
                <div class="panel-block is-size-7">🎯 Automatyczne wnioskowanie typów</div>
                <div class="panel-block is-size-7">📝 Dla zmiennych, parametrów, zwracanych wartości</div>
                <div class="panel-block is-size-7">⚡ Wnioskowanie w czasie kompilacji</div>
                <div class="panel-block is-size-7">🔒 Typ jest niezmienialny</div>
                <div class="panel-block is-size-7">✅ Statyczne typowanie</div>
              </div>
            </div>
            <div class="column">
              <div class="panel">
                <h4 class="panel-heading has-background-warning-invert">🟨 JavaScript</h4>
                <div class="panel-block is-size-7">❌ Brak wnioskowania typów</div>
                <div class="panel-block is-size-7">📝 Dynamiczne typowanie</div>
                <div class="panel-block is-size-7">⚡ Typ określany w runtime</div>
                <div class="panel-block is-size-7">🔓 Typ może się zmieniać</div>
                <div class="panel-block is-size-7">⚠️ Brak sprawdzania typów</div>
              </div>
            </div>
          </div>
        </div>

        <app-remark [markdown]="basicInference" />

        <div class="columns my-3 is-multiline">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - var keyword</h4>
              <app-remark [markdown]="javaVarExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🔷 TypeScript - Type Inference</h4>
              <app-remark [markdown]="tsInferenceExample" />
            </div>
          </div>
        </div>

        <div class="message is-warning my-5">
          <div class="message-body">
            <strong>💡Uwaga</strong>
            <p>JavaScript nie ma wnioskowania typów, więc nie będzie przykładowego kodu dla JS. Zamiast tego dla łatwiejszego rozróżnienia,
              przykłady <code>TypeScript</code> będą na pomarańczowym tle.</p>
          </div>
        </div>

        <app-remark [markdown]="collectionInference" />

        <div class="columns my-3 is-multiline">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Kolekcje z var</h4>
              <app-remark [markdown]="javaCollectionExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🔷 TypeScript - Tablice i obiekty</h4>
              <app-remark [markdown]="tsCollectionExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="functionInference" />

        <div class="columns my-3 is-multiline">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Metody i var</h4>
              <app-remark [markdown]="javaFunctionExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🔷 TypeScript - Funkcje</h4>
              <app-remark [markdown]="tsFunctionExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="limitations" />

        <div class="columns my-3 is-multiline">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Ograniczenia var</h4>
              <app-remark [markdown]="javaLimitations" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🔷 TypeScript - Ograniczenia</h4>
              <app-remark [markdown]="tsLimitations" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="bestPractices" />

        <div class="columns my-3 is-multiline">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Dobre praktyki</h4>
              <app-remark [markdown]="javaBestPractices" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🔷 TypeScript - Dobre praktyki</h4>
              <app-remark [markdown]="tsBestPractices" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="conclusion" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class TypeInferencePageComponent {

  introduction = `
# Podobieństwa w wnioskowaniu typów

Zarówno **Java** (od wersji 10), jak i **TypeScript** wspierają **wnioskowanie typów** (type inference), które pozwala kompilatorowi automatycznie określić typ zmiennej na podstawie przypisanej wartości.

## Główne podobieństwa:
- 🎯 Kompilator automatycznie określa typ na podstawie wartości
- 📝 Zmniejsza ilość kodu do napisania (mniej boilerplate)
- ✅ Zachowuje bezpieczeństwo typów
- 🔒 Typ jest określany w czasie kompilacji i nie może się zmienić
- 💡 Ułatwia czytanie kodu (zwłaszcza przy długich nazwach typów)

> **JavaScript** nie ma wnioskowania typów, ponieważ jest językiem **dynamicznie typowanym** - typy są określane w runtime, nie w czasie kompilacji.
  `;

  basicInference = `
## 🎯 Podstawowe wnioskowanie typów

W obu językach kompilator może wywnioskować typ zmiennej na podstawie przypisanej wartości.
  `;

  javaVarExample = `
\`\`\`java
public class TypeInferenceExample {
    public static void main(String[] args) {
        // Zamiast: String name = "Jan";
        var name = "Jan";  // Kompilator wnioskuje: String

        // Zamiast: int age = 25;
        var age = 25;  // Kompilator wnioskuje: int

        // Zamiast: double price = 19.99;
        var price = 19.99;  // Kompilator wnioskuje: double

        // Zamiast: boolean isActive = true;
        var isActive = true;  // Kompilator wnioskuje: boolean

        // Typ jest sprawdzany - błąd kompilacji:
        // name = 123;  // ❌ Error: incompatible types

        System.out.println(name);  // Jan
        System.out.println(age);   // 25
    }
}
\`\`\`

**Kluczowe punkty:**
- \`var\` może być używane tylko dla **zmiennych lokalnych**
- Kompilator musi być w stanie wywnioskować typ z inicjalizacji
- Po wywnioskowaniu **typ jest stały** i nie można go zmienić
  `;

  tsInferenceExample = `
\`\`\`typescript
function typeInferenceExample() {
  // TypeScript automatycznie wnioskuje typy
  let name = "Jan";      // Typ: string
  let age = 25;          // Typ: number
  let price = 19.99;     // Typ: number
  let isActive = true;   // Typ: boolean

  // Typ jest sprawdzany - błąd kompilacji:
  // name = 123;  // ❌ Error: Type 'number' is not assignable to type 'string'

  console.log(name);   // Jan
  console.log(age);    // 25

  // Można też jawnie określić typ (opcjonalnie)
  let explicitName: string = "Anna";
  let explicitAge: number = 30;
}
\`\`\`

**Kluczowe punkty:**
- TypeScript **automatycznie wnioskuje** typy dla wszystkich zmiennych
- Nie trzeba używać specjalnego słowa kluczowego jak \`var\`
- Po wywnioskowaniu **typ jest stały** podczas kompilacji
- Jawne określenie typu jest opcjonalne, ale czasem pomocne
  `;

  collectionInference = `
## 📚 Wnioskowanie dla kolekcji i tablic

Oba języki potrafią wywnioskować typy dla kolekcji (tablice, listy, mapy).
  `;

  javaCollectionExample = `
\`\`\`java
import java.util.*;

public class CollectionInference {
    public static void main(String[] args) {
        // Listy
        // Zamiast: List<String> names = new ArrayList<>();
        var names = new ArrayList<String>();  // Typ: ArrayList<String>
        names.add("Jan");
        names.add("Anna");

        // Mapy
        // Zamiast: Map<String, Integer> ages = new HashMap<>();
        var ages = new HashMap<String, Integer>();  // Typ: HashMap<String, Integer>
        ages.put("Jan", 25);
        ages.put("Anna", 30);

        // Tablice
        var numbers = new int[]{1, 2, 3, 4, 5};  // Typ: int[]

        // Iteracja z var
        for (var name : names) {  // Typ: String
            System.out.println(name);
        }

        // Stream API
        var evenNumbers = List.of(1, 2, 3, 4, 5)
            .stream()
            .filter(n -> n % 2 == 0)
            .toList();  // Typ: List<Integer>
    }
}
\`\`\`
  `;

  tsCollectionExample = `
\`\`\`typescript
function collectionInference() {
  // Tablice - wnioskowanie na podstawie elementów
  let names = ["Jan", "Anna"];  // Typ: string[]
  names.push("Piotr");

  // Tablica liczb
  let numbers = [1, 2, 3, 4, 5];  // Typ: number[]

  // Tablica mieszana (union type)
  let mixed = [1, "dwa", 3];  // Typ: (string | number)[]

  // Obiekty - wnioskowanie struktury
  let person = {
    name: "Jan",
    age: 25,
    isActive: true
  };  // Typ: { name: string; age: number; isActive: boolean; }

  // person.name = 123;  // ❌ Error

  // Tablica obiektów
  let users = [
    { id: 1, name: "Jan" },
    { id: 2, name: "Anna" }
  ];  // Typ: { id: number; name: string; }[]

  // Map
  let ages = new Map<string, number>();
  ages.set("Jan", 25);

  // Set
  let uniqueNames = new Set(["Jan", "Anna"]);  // Typ: Set<string>

  // Iteracja - typ jest wywnioskowany
  for (const name of names) {  // name: string
    console.log(name);
  }
}
\`\`\`
  `;

  functionInference = `
## 🔧 Wnioskowanie w funkcjach/metodach

Kompilatory mogą również wnioskować typy zwracane przez funkcje/metody.
  `;

  javaFunctionExample = `
\`\`\`java
public class FunctionInference {
    // var w parametrach lambda (Java 11+)
    public static void main(String[] args) {
        // Typ zwracany metody jest jawny
        String greeting = getGreeting("Jan");

        // var dla wyniku metody
        var result = calculateSum(10, 20);  // Typ: int

        // Lambda z var (Java 11+)
        var numbers = List.of(1, 2, 3, 4, 5);
        numbers.forEach((var n) -> {  // n jest typu Integer
            System.out.println(n * 2);
        });

        // var w stream
        var doubled = numbers.stream()
            .map(n -> n * 2)
            .toList();  // Typ: List<Integer>
    }

    // Typ zwracany musi być jawny w deklaracji metody
    public static String getGreeting(String name) {
        return "Hello, " + name;
    }

    public static int calculateSum(int a, int b) {
        var result = a + b;  // var działa wewnątrz metody
        return result;
    }

    // Generic z var
    public static <T> T getFirst(List<T> list) {
        var first = list.get(0);  // Typ: T
        return first;
    }
}
\`\`\`
  `;

  tsFunctionExample = `
\`\`\`typescript
// TypeScript wnioskuje typ zwracany funkcji
function getGreeting(name: string) {
  return "Hello, " + name;  // Zwraca: string (wywnioskowany)
}

function calculateSum(a: number, b: number) {
  return a + b;  // Zwraca: number (wywnioskowany)
}

// Jawne określenie typu zwracanego (opcjonalne)
function multiply(a: number, b: number): number {
  return a * b;
}

// Arrow functions - wnioskowanie typu zwracanego
const divide = (a: number, b: number) => {
  return a / b;  // Zwraca: number (wywnioskowany)
};

// Wnioskowanie dla parametrów callback
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {  // num: number (wywnioskowany)
  console.log(num * 2);
});

// Wnioskowanie dla metod obiektów
const calculator = {
  add(a: number, b: number) {
    return a + b;  // Zwraca: number
  },

  subtract(a: number, b: number) {
    return a - b;  // Zwraca: number
  }
};

// Generic z wnioskowaniem
function getFirst<T>(list: T[]): T {
  const first = list[0];  // first: T
  return first;
}

const firstNumber = getFirst([1, 2, 3]);  // firstNumber: number
const firstName = getFirst(["Jan", "Anna"]);  // firstName: string

// Typ funkcji jest również wywnioskowany
const greet = (name: string) => \`Hello, \${name}\`;
// greet: (name: string) => string
\`\`\`
  `;

  limitations = `
## ⚠️ Ograniczenia wnioskowania typów

Zarówno Java \`var\`, jak i TypeScript inference mają pewne ograniczenia.
  `;

  javaLimitations = `
\`\`\`java
public class VarLimitations {
    // ❌ BŁĘDY - var nie może być użyte:

    // 1. Dla pól klasy
    // private var name = "Jan";  // ❌ Error

    // 2. Dla parametrów metody
    // public void setName(var name) { }  // ❌ Error (tylko Java 11+ w lambda)

    // 3. Bez inicjalizacji
    // var x;  // ❌ Error: cannot infer type
    // x = 10;

    // 4. Z inicjalizacją null
    // var value = null;  // ❌ Error: cannot infer type

    // 5. Dla tablic bez typu
    // var numbers = {1, 2, 3};  // ❌ Error
    // Poprawnie:
    // var numbers = new int[]{1, 2, 3};  // ✅

    public static void main(String[] args) {
        // ✅ POPRAWNE użycie:

        // Zmienne lokalne z inicjalizacją
        var name = "Jan";
        var age = 25;

        // W pętlach
        for (var i = 0; i < 10; i++) {
            System.out.println(i);
        }

        for (var item : List.of(1, 2, 3)) {
            System.out.println(item);
        }

        // Z wynikami metod
        var result = calculateSomething();
    }

    public static int calculateSomething() {
        return 42;
    }
}
\`\`\`
  `;

  tsLimitations = `
\`\`\`typescript
// TypeScript inference działa bardzo dobrze, ale:

// ❌ PROBLEMY z wnioskowaniem:

// 1. Pusty array - wnioskuje any[]
let emptyArray = [];  // Typ: any[]
emptyArray.push(1);
emptyArray.push("text");  // To działa, ale nie jest bezpieczne

// Lepiej:
let typedArray: number[] = [];  // ✅

// 2. null lub undefined
let value = null;  // Typ: any (w starszych wersjach TS)
// Lepiej:
let betterValue: string | null = null;  // ✅

// 3. Zmienne bez inicjalizacji
let x;  // Typ: any
x = 10;
x = "text";  // Brak błędu!

// Lepiej:
let y: number;  // ✅
y = 10;
// y = "text";  // ❌ Error

// 4. Złożone typy mogą być zbyt wąskie
let config = {
  timeout: 1000,
  retries: 3
};
// config: { timeout: number; retries: number; }

// Jeśli chcesz dodać nowe właściwości później:
// config.newProp = "value";  // ❌ Error

// Lepiej użyć interfejsu:
interface Config {
  timeout: number;
  retries: number;
  [key: string]: any;  // Index signature
}

// ✅ DOBRE praktyki:

// Jawne typy dla parametrów funkcji
function process(data: unknown) {  // ✅ Lepiej niż any
  // Type guard
  if (typeof data === "string") {
    console.log(data.toUpperCase());
  }
}

// Inference dla typu zwracanego działa świetnie
function calculate(a: number, b: number) {
  return { sum: a + b, product: a * b };
}
// Zwraca: { sum: number; product: number; }
\`\`\`
  `;

  bestPractices = `
## 💡 Dobre praktyki wnioskowania typów
  `;

  javaBestPractices = `
\`\`\`java
public class VarBestPractices {
    public static void main(String[] args) {
        // ✅ DOBRE - var czytelny i oczywisty typ
        var name = "Jan";  // Jasne, że String
        var count = 10;    // Jasne, że int
        var list = new ArrayList<String>();  // Typ widoczny z inicjalizacji

        // ✅ DOBRE - długie typy generyczne
        var complexMap = new HashMap<String, List<Map<Integer, String>>>();
        // Lepsze niż:
        // HashMap<String, List<Map<Integer, String>>> complexMap = ...

        // ✅ DOBRE - oczywisty typ z metody
        var users = getUserList();  // Jeśli nazwa jasna

        // ⚠️ UNIKAJ - typ nieoczywisty
        var result = process();  // Co zwraca process()?
        // Lepiej:
        User result = process();  // ✅ Jasne!

        // ⚠️ UNIKAJ - literały numeryczne
        var x = 1;  // int czy long?
        var y = 1L;  // Lepiej - jasno long

        // ✅ DOBRE - w pętlach
        for (var entry : map.entrySet()) {
            System.out.println(entry.getKey());
        }

        // ✅ DOBRE - lambdy i streams
        var evenNumbers = List.of(1, 2, 3, 4, 5)
            .stream()
            .filter(n -> n % 2 == 0)
            .toList();
    }

    private static List<String> getUserList() {
        return List.of("Jan", "Anna");
    }

    private static Object process() {
        return new Object();
    }
}
\`\`\`

**Zasady:**
1. Używaj \`var\`, gdy typ jest **oczywisty**
2. Używaj jawnego typu, gdy zwiększa to **czytelność**
3. \`var\` świetnie sprawdza się z **długimi typami generycznymi**
4. Preferuj \`var\` w **pętlach** i **streamach**
  `;

  tsBestPractices = `
\`\`\`typescript
// ✅ DOBRE - pozwól TypeScript wywnioskować proste typy
let name = "Jan";  // string
let count = 10;    // number
let isActive = true;  // boolean

// ✅ DOBRE - inference dla tablic
let numbers = [1, 2, 3];  // number[]
let names = ["Jan", "Anna"];  // string[]

// ✅ DOBRE - inference dla obiektów
let user = {
  id: 1,
  name: "Jan",
  email: "jan@example.com"
};
// Typ: { id: number; name: string; email: string; }

// ✅ DOBRE - jawne typy dla interfejsów publicznych
interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): User {  // ✅ Jawny typ zwracany
  return {
    id,
    name: "Jan",
    email: "jan@example.com"
  };
}

// ✅ DOBRE - jawne typy dla parametrów (zawsze!)
function processUser(user: User) {  // ✅
  console.log(user.name);
}

// ⚠️ UNIKAJ - any (nawet przez inference)
let data: any;  // ❌ Unikaj any
// Lepiej:
let betterData: unknown;  // ✅ lub konkretny typ

// ✅ DOBRE - type assertions gdy wiesz lepiej
let input = document.getElementById("username") as HTMLInputElement;

// ✅ DOBRE - const assertions dla literałów
const config = {
  timeout: 1000,
  retries: 3
} as const;
// Typ: { readonly timeout: 1000; readonly retries: 3; }

// ✅ DOBRE - inference w callbacks
const numbers = [1, 2, 3, 4, 5];
numbers.map(num => num * 2);  // num: number (wywnioskowany)

// ✅ DOBRE - Generic inference
function identity<T>(value: T): T {
  return value;
}
const num = identity(42);  // T = number (wywnioskowany)
const str = identity("hello");  // T = string (wywnioskowany)
\`\`\`

**Zasady:**
1. **Zawsze** jawne typy dla **parametrów funkcji**
2. Pozwól wywnioskować **typy zwracane** (jeśli oczywiste)
3. Używaj **interfejsów** dla publicznych API
4. Unikaj \`any\`, używaj \`unknown\` gdy typ nieznany
5. Inference świetnie działa dla **zmiennych lokalnych** i **stałych**
  `;

  conclusion = `
## 🎯 Podsumowanie

| Aspekt | Java (var) | TypeScript (inference) | JavaScript |
|--------|------------|------------------------|------------|
| **Kiedy wprowadzono** | Java 10 (2018) | Od początku TypeScript | Brak wnioskowania typów |
| **Zakres** | Tylko zmienne lokalne | Wszystkie zmienne, funkcje, parametry | N/A |
| **Moment wnioskowania** | Czas kompilacji | Czas kompilacji | Runtime (dynamiczne typy) |
| **Zmiana typu** | ❌ Niemożliwa | ❌ Niemożliwa | ✅ Możliwa |
| **Bezpieczeństwo typów** | ✅ Pełne | ✅ Pełne | ❌ Brak |
| **Słowo kluczowe** | \`var\` | Automatyczne | \`let\`, \`const\`, \`var\` |
| **Pola klasy** | ❌ | ✅ | N/A |
| **Parametry** | ❌ (tylko lambda Java 11+) | ⚠️ Wymagane jawne typy | N/A |

### 💡 Kluczowe wnioski:

1. **Java \`var\`** jest ograniczone do zmiennych lokalnych
2. **TypeScript** ma najbardziej zaawansowane wnioskowanie - automatyczne i wszechstronne
3. **Oba zachowują bezpieczeństwo typów** - typ jest określany w czasie kompilacji
4. **JavaScript nie ma wnioskowania** - jest dynamicznie typowany
5. Wnioskowanie **zmniejsza boilerplate** przy zachowaniu type safety
  `;
}
