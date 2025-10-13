import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Działanie typów"
      fileEntry="./app/with-java-compare/similarities/types-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="box my-3">
          <h5 class="title is-5">Typy proste w Java i JavaScript</h5>
          <div class="columns my-3">
            <div class="column">
              <div class="panel">
                <h4 class="panel-heading has-background-info-invert">☕ Java</h4>
                <div class="panel-block is-size-7"><code>byte</code> (8-bit)</div>
                <div class="panel-block is-size-7"><code>short</code> (16-bit)</div>
                <div class="panel-block is-size-7"><code>int</code> (32-bit)</div>
                <div class="panel-block is-size-7"><code>long</code> (64-bit)</div>
                <div class="panel-block is-size-7"><code>float</code> (32-bit)</div>
                <div class="panel-block is-size-7"><code>double</code> (64-bit)</div>
                <div class="panel-block is-size-7"><code>boolean</code></div>
                <div class="panel-block is-size-7"><code>char</code> (16-bit)</div>
              </div>
            </div>
            <div class="column">
              <div class="panel">
                <h4 class="panel-heading has-background-warning-invert">🟨 JavaScript</h4>
                <div class="panel-block is-size-7"><code>number</code> (64-bit float)</div>
                <div class="panel-block is-size-7"><code>bigint</code> </div>
                <div class="panel-block is-size-7"><code>string</code> -- Uwaga - w JS - string to typ prosty!</div>
                <div class="panel-block is-size-7"><code>boolean</code></div>
                <div class="panel-block is-size-7"><code>undefined</code></div>
                <div class="panel-block is-size-7"><code>null</code></div>
                <div class="panel-block is-size-7"><code>symbol</code></div>
              </div>
            </div>
          </div>
          <a href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive" target="_blank" rel="noopener">
            📃 MDN: Primitive Values
          </a>
        </div>

        <div class="message is-info my-5">
          <div class="message-body">
            <code>TypeScript</code> nie zmienia tego stanu rzeczy, tzn. pomimo wprowadzenia kilku własnych typów. Finalnie obowiązuje zasada "TypeScript nie ma nic do runtime"
            i musi stać się <code>JavaScript</code>'em. Więc rozpatrujemy tylko typy prymitywne z <code>JS</code>.
          </div>
        </div>

        <app-remark [markdown]="passingByValue" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">Java - Przekazywanie przez wartość</h4>
              <app-remark  [markdown]="javaValueExample"/>
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert" >
              <h4 class="title is-5">JavaScript - Przekazywanie przez wartość</h4>
              <app-remark  [markdown]="jsValueExample"/>
            </div>
          </div>
        </div>

        <app-remark  [markdown]="passingByReference" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">Java - Przekazywanie przez referencję</h4>
              <app-remark [markdown]="javaReferenceExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">JavaScript - Przekazywanie przez referencję</h4>
              <app-remark  [markdown]="jsReferenceExample" />
            </div>
          </div>
        </div>

        <app-remark  [markdown]="conclusion" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class TypesPageComponent {

  introduction = `
# Podobieństwa w działaniu typów

Zarówno **Java**, jak i **JavaScript** dzielą typy danych na dwie główne kategorie:

- **Typy proste** - przekazywane przez wartość
- **Typy złożone (referencyjne/obiekty)** - przekazywane przez referencję

To fundamentalne rozróżnienie wpływa na sposób, w jaki dane są przechowywane w pamięci i przekazywane między funkcjami / metodami.
  `;

  passingByValue = `
## 📦 Przekazywanie przez wartość (typy prymitywne)

W obu językach **typy prymitywne są przekazywane przez wartość**. Oznacza to, że gdy przekazujesz zmienną prymitywną do funkcji, tworzysz **kopię** tej wartości. Zmiany dokonane wewnątrz funkcji **nie wpływają** na oryginalną zmienną.

### Charakterystyka:
- ✅ Tworzona jest kopia wartości
- ✅ Zmiany w funkcji (metodzie) nie wpływają na oryginał
- ✅ Każda zmienna ma własną przestrzeń w pamięci
  `;

  javaValueExample = `
\`\`\`java
public class Main {
    public static void main(String[] args) {
        int x = 10;
        modifyValue(x);
        System.out.println(x); // Wypisze: 10
    }

    static void modifyValue(int num) {
        num = 20;
        System.out.println(num); // Wypisze: 20
    }
}
\`\`\`
  `;

  jsValueExample = `
\`\`\`javascript
function modifyValue(num) {
    num = 20;
    console.log(num); // Wypisze: 20
}

let x = 10;
modifyValue(x);
console.log(x); // Wypisze: 10
\`\`\`
  `;

  passingByReference = `
## 🔗 Przekazywanie przez referencję (obiekty)

W obu językach **obiekty są przekazywane przez referencję**. Gdy przekazujesz obiekt do funkcji, przekazujesz **referencję** (adres w pamięci) do tego obiektu, a nie jego kopię. Zmiany dokonane na obiekcie wewnątrz funkcji **wpływają** na oryginalny obiekt.

### Charakterystyka:
- ✅ Przekazywana jest referencja (adres w pamięci)
- ✅ Zmiany w funkcji (metodzie)  wpływają na oryginał
- ✅ Wiele zmiennych (identyfikatorów) może wskazywać na ten sam obiekt
  `;

  javaReferenceExample = `
\`\`\`java
class Person {
    String name;

    Person(String name) {
        this.name = name;
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person("Jan");
        modifyObject(person);
        System.out.println(person.name); // Wypisze: Anna
    }

    static void modifyObject(Person p) {
        p.name = "Anna";
        System.out.println(p.name); // Wypisze: Anna
    }
}
\`\`\`
  `;

  jsReferenceExample = `
\`\`\`javascript
function modifyObject(obj) {
    obj.name = "Anna";
    console.log(obj.name); // Wypisze: Anna
}

const person = { name: "Jan" };
modifyObject(person);
console.log(person.name); // Wypisze: Anna
\`\`\`
  `;

  conclusion = `
## 🎯 Podsumowanie

| Aspekt | Java | JavaScript |
|--------|------|------------|
| **Typy proste** | Przekazywane przez wartość | Przekazywane przez wartość |
| **Obiekty** | Przekazywane przez referencję | Przekazywane przez referencję |
| **Liczba typów prymitywnych** | 8 typów | 7 typów |
| **Typowanie** | Statyczne (typ określony przy kompilacji) | Dynamiczne (typ określony w runtime) |

### 💡 Kluczowe wnioski:

1. **Oba języki stosują ten sam mechanizm**: typy prymitywne przez wartość, obiekty przez referencję
2. **Java ma więcej typów prostych** - różne rozmiary liczb całkowitych i zmiennoprzecinkowych
3. **JavaScript ma prostszą strukturę** - jeden typ \`number\` dla wszystkich liczb (oprócz \`bigint\` _2020_)
4. W **JavaScript** typ \`string\` jest typem prostym, a nie typem obiektowym jak w **Java**!

> **Uwaga:** W praktyce różnica polega głównie na ilości i specyfice typów prostych, ale fundamentalny mechanizm przekazywania wartości vs. referencji działa identycznie w obu językach!
  `;
}
