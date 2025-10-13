import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Funkcje jako obywatele pierwszej kategorii"
      fileEntry="./app/with-java-compare/differences/functions-first-class-citizens-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Metody NIE są obiektami</h4>
              <app-remark [markdown]="javaExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 JavaScript/TypeScript - Funkcje SĄ obiektami</h4>
              <app-remark [markdown]="jsExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="passingFunctions" />

        <div class="columns my-3 is-multiline">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Interfejsy funkcyjne</h4>
              <app-remark [markdown]="javaPassingExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 JS/TS - Funkcje jako wartości</h4>
              <app-remark [markdown]="jsPassingExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="storingFunctions" />

        <div class="columns my-3 is-multiline">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Referencje do metod</h4>
              <app-remark [markdown]="javaStoringExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 JS/TS - Funkcje w zmiennych i strukturach</h4>
              <app-remark [markdown]="jsStoringExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="conclusion" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class FunctionsFirstClassCitizensPageComponent {

  introduction = `
# Funkcje jako obywatele pierwszej kategorii

**Kluczowa różnica:** W JavaScript i TypeScript **funkcje są obiektami** i mogą być traktowane jak każda inna wartość. W Javie metody **nie są obiektami** - są częścią klas i nie mogą istnieć samodzielnie.

## 🔑 Co to oznacza "First-Class Citizen"?

Funkcja jest obywatelem pierwszej kategorii, gdy może być:
- ✅ Przypisana do zmiennej
- ✅ Przekazana jako argument do innej funkcji
- ✅ Zwrócona z funkcji jako wynik
- ✅ Przechowywana w strukturach danych (tablice, obiekty)

**JavaScript/TypeScript:** Funkcje są obiektami i mają wszystkie te możliwości.

**Java:** Metody nie są obiektami. Od Java 8 można używać method references i lambd, ale to tylko syntactic sugar - w tle są interfejsy funkcyjne.
  `;

  javaExample = `
\`\`\`java
public class JavaMethods {
    // Metoda jest częścią klasy, NIE jest obiektem
    public static void greet() {
        System.out.println("Hello!");
    }

    public static void main(String[] args) {
        // ❌ Nie można przypisać metody do zmiennej
        // var fn = greet;  // Błąd kompilacji!

        // Metoda może być tylko wywołana
        greet();  // ✅

        // Java 8+: Method reference (to NIE jest obiekt funkcji!)
        Runnable r = JavaMethods::greet;  // Interfejs funkcyjny
        r.run();
    }
}
\`\`\`

**Kluczowy punkt:** Metoda \`greet\` nie istnieje jako niezależny obiekt. \`JavaMethods::greet\` to tylko składnia dla utworzenia instancji interfejsu \`Runnable\`.
  `;

  jsExample = `
\`\`\`javascript
// Funkcja JEST obiektem
function greet() {
  console.log("Hello!");
}

// ✅ Funkcja może być przypisana do zmiennej
const fn = greet;
fn();  // Hello!

// ✅ Funkcja ma właściwości (bo to obiekt!)
console.log(greet.name);  // "greet"
console.log(greet.length);  // 0 (liczba parametrów)

// ✅ Możemy dodać własne właściwości
greet.customProperty = "I'm a function object!";
console.log(greet.customProperty);
\`\`\`
\`\`\`typescript
// TypeScript
const greetTs: () => void = function() {
  console.log("Hello from TS!");
};
\`\`\`

**Kluczowy punkt:** Funkcja \`greet\` to pełnoprawny obiekt typu \`Function\`. Możemy ją przypisać, przekazać, przechowywać i modyfikować jak każdy inny obiekt.
  `;

  passingFunctions = `
## 📤 Przekazywanie funkcji jako argumenty

To jedna z najważniejszych różnic - w JS/TS funkcje są naturalnie przekazywane jako wartości.
  `;

  javaPassingExample = `
\`\`\`java
import java.util.function.*;

public class PassingMethods {
    // Metoda przyjmująca interfejs funkcyjny
    public static void executeOperation(Function<Integer, Integer> operation, int value) {
        int result = operation.apply(value);
        System.out.println("Result: " + result);
    }

    public static int double(int x) {
        return x * 2;
    }

    public static void main(String[] args) {
        // Musimy użyć method reference lub lambdy
        executeOperation(PassingMethods::double, 5);  // Result: 10

        // Lub lambda
        executeOperation(x -> x * 3, 5);  // Result: 15

        // W tle tworzone są obiekty interfejsów funkcyjnych
    }
}
\`\`\`
  `;

  jsPassingExample = `
\`\`\`javascript
// Funkcja przyjmująca funkcję jako argument
function executeOperation(operation, value) {
  const result = operation(value);
  console.log(\`Result: \${result}\`);
}

// Nazwana funkcja
function double(x) {
  return x * 2;
}

// ✅ Przekazanie funkcji przez referencję (to obiekt!)
executeOperation(double, 5);  // Result: 10

// ✅ Funkcja anonimowa
executeOperation(function(x) { return x * 3; }, 5);  // Result: 15

// ✅ Arrow function
executeOperation(x => x * 4, 5);  // Result: 20
\`\`\`
\`\`\`typescript
// TypeScript z typami
type Operation = (x: number) => number;

function executeOperationTs(operation: Operation, value: number): void {
  console.log(operation(value));
}

executeOperationTs(x => x * 5, 5);  // 25
\`\`\`
  `;

  storingFunctions = `
## 💾 Przechowywanie funkcji w strukturach danych

W JS/TS funkcje można przechowywać w tablicach, obiektach, mapach - jak każdy obiekt.
  `;

  javaStoringExample = `
\`\`\`java
import java.util.*;
import java.util.function.*;

public class StoringMethods {
    public static void main(String[] args) {
        // Lista interfejsów funkcyjnych (nie funkcji!)
        List<Supplier<String>> operations = new ArrayList<>();

        operations.add(() -> "First");
        operations.add(() -> "Second");
        operations.add(() -> "Third");

        // Wywołanie
        for (Supplier<String> op : operations) {
            System.out.println(op.get());
        }

        // Mapa z method references
        Map<String, Function<Integer, Integer>> mathOps = new HashMap<>();
        mathOps.put("double", x -> x * 2);
        mathOps.put("triple", x -> x * 3);

        System.out.println(mathOps.get("double").apply(5));  // 10
    }
}
\`\`\`
  `;

  jsStoringExample = `
\`\`\`javascript
// ✅ Tablice funkcji (to są obiekty!)
const operations = [
  function() { return "First"; },
  function() { return "Second"; },
  () => "Third"
];

operations.forEach(op => console.log(op()));

// ✅ Obiekt z funkcjami jako właściwościami
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

console.log(calculator.add(5, 3));  // 8
console.log(calculator.multiply(4, 2));  // 8

// ✅ Mapa z funkcjami
const mathOps = new Map();
mathOps.set("double", x => x * 2);
mathOps.set("triple", x => x * 3);
mathOps.set("square", x => x * x);

console.log(mathOps.get("double")(5));  // 10
console.log(mathOps.get("square")(5));  // 25
\`\`\`
\`\`\`typescript
// TypeScript - funkcje jako właściwości typu
interface Calculator {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
}

const calc: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};
\`\`\`
  `;

  conclusion = `
## 🎯 Podsumowanie

| Aspekt | Java | JavaScript/TypeScript |
|--------|------|----------------------|
| **Metody/Funkcje jako obiekty** | ❌ NIE - metody są częścią klas | ✅ TAK - funkcje są obiektami typu \`Function\` |
| **Przypisanie do zmiennej** | ❌ Bezpośrednio nie (tylko przez interfejs) | ✅ TAK - naturalnie |
| **Przekazywanie jako argument** | ⚠️ Przez interfejsy funkcyjne/lambdy | ✅ TAK - bezpośrednio |
| **Zwracanie z funkcji** | ⚠️ Przez interfejsy funkcyjne/lambdy | ✅ TAK - bezpośrednio |
| **Przechowywanie w kolekcjach** | ⚠️ Kolekcje interfejsów funkcyjnych | ✅ TAK - kolekcje funkcji |
| **Dodawanie właściwości** | ❌ NIE | ✅ TAK - funkcje to obiekty |

### 💡 Kluczowe różnice:

**Java:**
- Metody **NIE są obiektami** - są częścią definicji klasy
- Od Java 8: lambdy i method references to **syntactic sugar** dla interfejsów funkcyjnych
- Potrzebujesz interfejsu funkcyjnego (\`Function\`, \`Consumer\`, \`Supplier\`, itp.) aby pracować z "funkcjami"

**JavaScript/TypeScript:**
- Funkcje **SĄ obiektami** typu \`Function\`
- Lukier składniowy od \`ES6\` (\`2015\`) dla \`function\` to strzałka: \`=>\` tzw. **arrow function**
- Mogą być traktowane jak **każda inna wartość**
- Funkcje mogą mieć właściwości i metody (bo to obiekty!)
- To fundamentalna cecha języka - stąd wzorce jak callbacks, higher-order functions, closures

> **Praktyczna implikacja:** W JS/TS programowanie funkcyjne jest naturalne i wbudowane w język. W Javie programowanie funkcyjne jest możliwe od Java 8, ale przez warstwę abstrakcji (interfejsy funkcyjne).
  `;
}
