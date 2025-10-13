import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Składnia i konwencje"
      fileEntry="./app/with-java-compare/similarities/syntax-and-conventions-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="box my-3">
          <h5 class="title is-5">Konwencje nazewnictwa - Podobieństwa</h5>
          <div class="columns my-3">
            <div class="column">
              <div class="panel">
                <h4 class="panel-heading has-background-info-invert">☕ Java</h4>
                <div class="panel-block is-size-7">✅ <strong>PascalCase</strong> dla klas</div>
                <div class="panel-block is-size-7">✅ <strong>camelCase</strong> dla metod i zmiennych</div>
                <div class="panel-block is-size-7">✅ <strong>UPPER_CASE</strong> dla stałych</div>
                <div class="panel-block is-size-7">✅ Pliki nazwane jak klasy</div>
                <div class="panel-block is-size-7">✅ Pakiety w lowercase</div>
              </div>
            </div>
            <div class="column">
              <div class="panel">
                <h4 class="panel-heading has-background-info-invert">🔷 TypeScript</h4>
                <div class="panel-block is-size-7">✅ <strong>PascalCase</strong> dla klas i interfejsów</div>
                <div class="panel-block is-size-7">✅ <strong>camelCase</strong> dla funkcji i zmiennych</div>
                <div class="panel-block is-size-7">✅ <strong>UPPER_CASE</strong> dla stałych</div>
                <div class="panel-block is-size-7">✅ Pliki w kebab-case lub camelCase</div>
                <div class="panel-block is-size-7">✅ Moduły w camelCase</div>
              </div>
            </div>
            <div class="column">
              <div class="panel">
                <h4 class="panel-heading has-background-warning-invert">🟨 JavaScript</h4>
                <div class="panel-block is-size-7">✅ <strong>PascalCase</strong> dla konstruktorów/klas</div>
                <div class="panel-block is-size-7">✅ <strong>camelCase</strong> dla funkcji i zmiennych</div>
                <div class="panel-block is-size-7">✅ <strong>UPPER_CASE</strong> dla stałych</div>
                <div class="panel-block is-size-7">✅ Pliki w kebab-case lub camelCase</div>
                <div class="panel-block is-size-7">✅ Moduły w camelCase</div>
              </div>
            </div>
          </div>
        </div>

        <app-remark [markdown]="namingConventions" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Konwencje nazewnictwa</h4>
              <app-remark [markdown]="javaNamingExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">🔷 TypeScript - Konwencje nazewnictwa</h4>
              <app-remark [markdown]="tsNamingExample" />
            </div>
          </div>
        </div>

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 JavaScript - Konwencje nazewnictwa</h4>
              <app-remark [markdown]="jsNamingExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="blockStructure" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Struktura bloków</h4>
              <app-remark [markdown]="javaBlockExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">🔷 TypeScript - Struktura bloków</h4>
              <app-remark [markdown]="tsBlockExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="comments" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Komentarze</h4>
              <app-remark [markdown]="javaCommentExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 JavaScript / 🔷 TypeScript - Komentarze</h4>
              <app-remark [markdown]="jsCommentExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="controlStructures" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Struktury kontrolne</h4>
              <app-remark [markdown]="javaControlExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 JavaScript / 🔷 TypeScript - Struktury kontrolne</h4>
              <app-remark [markdown]="jsControlExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="stringLiterals" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Literały tekstowe</h4>
              <app-remark [markdown]="javaStringExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 JavaScript / 🔷 TypeScript - Literały tekstowe</h4>
              <app-remark [markdown]="jsStringExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="conclusion" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class SyntaxAndConventionsPageComponent {

  introduction = `
# Podobieństwa w składni i konwencjach

**Java**, **TypeScript** i **JavaScript** mają wiele wspólnych konwencji nazewnictwa i składniowych. Wszystkie trzy języki wywodzą się z rodziny języków C-like, co sprawia, że ich podstawowa składnia jest bardzo podobna.

## Główne podobieństwa:
- 🔤 **PascalCase** dla klas
- 🔤 **camelCase** dla metod/funkcji i zmiennych
- 🔤 **UPPER_CASE** dla stałych
- 🔧 Nawiasy klamrowe \`{}\` dla bloków kodu
- 🔧 Średniki \`;\` do zakończenia instrukcji
- 💬 Identyczna składnia komentarzy
  `;

  namingConventions = `
## 🔤 Konwencje nazewnictwa

Wszystkie trzy języki stosują podobne konwencje nazewnictwa, które pomagają w czytelności kodu i organizacji projektu.

### PascalCase (UpperCamelCase):
- Pierwsza litera każdego słowa jest wielka
- Używane dla: **klas**, **interfejsów**, **typów**
- Przykład: \`UserAccount\`, \`HttpClient\`, \`OrderService\`

### camelCase (lowerCamelCase):
- Pierwsza litera jest mała, następne słowa zaczynają się wielką literą
- Używane dla: **metod**, **funkcji**, **zmiennych**, **parametrów**
- Przykład: \`getUserName\`, \`calculateTotal\`, \`firstName\`

### UPPER_CASE (SCREAMING_SNAKE_CASE):
- Wszystkie litery wielkie, słowa oddzielone podkreślnikami
- Używane dla: **stałych**, **wartości konfiguracyjnych**
- Przykład: \`MAX_SIZE\`, \`API_URL\`, \`DEFAULT_TIMEOUT\`
  `;

  javaNamingExample = `
\`\`\`java
// PascalCase dla klas
public class UserAccount {
    // UPPER_CASE dla stałych
    private static final int MAX_LOGIN_ATTEMPTS = 3;
    private static final String DEFAULT_ROLE = "USER";

    // camelCase dla pól
    private String userName;
    private int loginAttempts;

    // camelCase dla metod
    public String getUserName() {
        return userName;
    }

    public void incrementLoginAttempts() {
        loginAttempts++;
    }

    // camelCase dla parametrów
    public boolean validatePassword(String inputPassword) {
        return inputPassword.length() >= 8;
    }
}

// PascalCase dla interfejsów
interface UserRepository {
    void saveUser(UserAccount user);
}
\`\`\`
  `;

  tsNamingExample = `
\`\`\`typescript
// PascalCase dla klas i interfejsów
interface UserRepository {
  saveUser(user: UserAccount): void;
}

class UserAccount {
  // UPPER_CASE dla stałych
  private static readonly MAX_LOGIN_ATTEMPTS = 3;
  private static readonly DEFAULT_ROLE = "USER";

  // camelCase dla właściwości
  private userName: string;
  private loginAttempts: number;

  constructor(userName: string) {
    this.userName = userName;
    this.loginAttempts = 0;
  }

  // camelCase dla metod
  getUserName(): string {
    return this.userName;
  }

  incrementLoginAttempts(): void {
    this.loginAttempts++;
  }

  // camelCase dla parametrów
  validatePassword(inputPassword: string): boolean {
    return inputPassword.length >= 8;
  }
}

// PascalCase dla typów
type UserId = string | number;
\`\`\`
  `;

  jsNamingExample = `
\`\`\`javascript
// PascalCase dla klas (konstruktorów)
class UserAccount {
  // UPPER_CASE dla stałych
  static MAX_LOGIN_ATTEMPTS = 3;
  static DEFAULT_ROLE = "USER";

  // camelCase dla właściwości
  constructor(userName) {
    this.userName = userName;
    this.loginAttempts = 0;
  }

  // camelCase dla metod
  getUserName() {
    return this.userName;
  }

  incrementLoginAttempts() {
    this.loginAttempts++;
  }

  // camelCase dla parametrów
  validatePassword(inputPassword) {
    return inputPassword.length >= 8;
  }
}

// camelCase dla funkcji
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// UPPER_CASE dla stałych na poziomie modułu
const MAX_ITEMS = 100;
const API_URL = "https://api.example.com";
\`\`\`
  `;

  blockStructure = `
## 🏗️ Struktura bloków kodu

Wszystkie trzy języki używają nawiasów klamrowych \`{}\` do definiowania bloków kodu. Konwencja umieszczania nawiasów jest praktycznie identyczna.

### Styl K&R (Kernighan & Ritchie):
- Otwierający nawias \`{\` na tej samej linii co deklaracja
- Zamykający nawias \`}\` na osobnej linii
- To najpopularniejszy styl w JavaScript/TypeScript i powszechny w Javie
  `;

  javaBlockExample = `
\`\`\`java
public class Calculator {
    // Styl K&R - najczęściej stosowany
    public int add(int a, int b) {
        return a + b;
    }

    public void printResult(int result) {
        if (result > 0) {
            System.out.println("Wynik dodatni");
        } else {
            System.out.println("Wynik ujemny lub zero");
        }
    }

    // Bloki w pętlach
    public void printNumbers() {
        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }
    }
}
\`\`\`
  `;

  tsBlockExample = `
\`\`\`typescript
class Calculator {
  // Styl K&R - standardowy w TypeScript/JavaScript
  add(a: number, b: number): number {
    return a + b;
  }

  printResult(result: number): void {
    if (result > 0) {
      console.log("Wynik dodatni");
    } else {
      console.log("Wynik ujemny lub zero");
    }
  }

  // Bloki w pętlach
  printNumbers(): void {
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
  }
}

// Funkcje ze strzałkami (arrow functions)
const multiply = (a: number, b: number): number => {
  return a * b;
};
\`\`\`
  `;

  semicolons = `
## ❓ Średniki - podobieństwo z różnicami

Średniki \`;\` są używane do zakończenia instrukcji, ale są między językami istotne różnice.

### Charakterystyka:
- **Java**: Średniki są **obowiązkowe** (błąd kompilacji bez nich)
- **JavaScript/TypeScript**: Średniki są **opcjonalne** (ASI - Automatic Semicolon Insertion)
- ⚠️ W JavaScript/TypeScript zaleca się używanie średników dla uniknięcia problemów z ASI
  `;

  javaSemicolonExample = `
\`\`\`java
public class Example {
    public void demo() {
        int x = 10;        // Średnik OBOWIĄZKOWY
        String name = "Jan"; // Średnik OBOWIĄZKOWY

        System.out.println(x);    // Średnik OBOWIĄZKOWY

        // Brak średnika = błąd kompilacji ❌
    }
}
\`\`\`
  `;

  jsSemicolonExample = `
\`\`\`javascript
// Z średnikami (zalecane w wielu style guides)
function demo() {
  let x = 10;
  let name = "Jan";

  console.log(x);
}

// Bez średników (działa przez ASI)
function demo() {
  let x = 10
  let name = "Jan"

  console.log(x)
}

// ⚠️ Problemy bez średników:
const a = 1
[1, 2, 3].forEach(n => console.log(n))
// Zostanie zinterpretowane jako: const a = 1[1, 2, 3].forEach...
// To spowoduje błąd! ❌

// Rozwiązanie ze średnikiem:
const a = 1;
[1, 2, 3].forEach(n => console.log(n)); // ✅
\`\`\`
  `;

  comments = `
## 💬 Komentarze - identyczna składnia

Wszystkie trzy języki używają dokładnie takiej samej składni dla komentarzy.

### Typy komentarzy:
- \`//\` - komentarz jednoliniowy
- \`/* */\` - komentarz wieloliniowy
- \`/** */\` - komentarz dokumentacyjny (JavaDoc, JSDoc, TSDoc)
  `;

  javaCommentExample = `
\`\`\`java
public class Example {
    // Komentarz jednoliniowy

    /*
     * Komentarz wieloliniowy
     * może obejmować wiele linii
     */

    /**
     * Komentarz JavaDoc dla dokumentacji
     * @param name Imię użytkownika
     * @return Wiadomość powitalna
     */
    public String greet(String name) {
        return "Cześć, " + name + "!";
    }
}
\`\`\`
  `;

  jsCommentExample = `
\`\`\`javascript
// Komentarz jednoliniowy

/*
 * Komentarz wieloliniowy
 * może obejmować wiele linii
 */

/**
 * Komentarz JSDoc dla dokumentacji
 * @param {string} name - Imię użytkownika
 * @returns {string} Wiadomość powitalna
 */
function greet(name) {
  return \`Cześć, \${name}!\`;
}

// TypeScript z TSDoc
/**
 * Dodaje dwie liczby
 * @param a - Pierwsza liczba
 * @param b - Druga liczba
 * @returns Suma liczb
 */
function add(a: number, b: number): number {
  return a + b;
}
\`\`\`
  `;

  controlStructures = `
## 🎮 Struktury kontrolne

Struktury kontrolne (\`if\`, \`for\`, \`while\`, \`switch\`) mają niemal identyczną składnię we wszystkich trzech językach.

### Podobieństwa:
- Identyczna składnia \`if\`/\`else\`
- Identyczna składnia pętli \`for\`, \`while\`, \`do-while\`
- Identyczna składnia \`switch\`/\`case\`
- Identyczne operatory porównania: \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\`
- Identyczne operatory logiczne: \`&&\`, \`||\`, \`!\`
  `;

  javaControlExample = `
\`\`\`java
public class ControlFlow {
    public void demo() {
        // if-else
        int x = 10;
        if (x > 5) {
            System.out.println("Większe od 5");
        } else {
            System.out.println("Mniejsze lub równe 5");
        }

        // for loop
        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }

        // while loop
        int count = 0;
        while (count < 3) {
            System.out.println(count);
            count++;
        }

        // switch
        String day = "Monday";
        switch (day) {
            case "Monday":
                System.out.println("Start tygodnia");
                break;
            case "Friday":
                System.out.println("Koniec tygodnia");
                break;
            default:
                System.out.println("Środek tygodnia");
        }
    }
}
\`\`\`
  `;

  jsControlExample = `
\`\`\`javascript
function demo() {
  // if-else
  let x = 10;
  if (x > 5) {
    console.log("Większe od 5");
  } else {
    console.log("Mniejsze lub równe 5");
  }

  // for loop
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  // while loop
  let count = 0;
  while (count < 3) {
    console.log(count);
    count++;
  }

  // switch
  const day = "Monday";
  switch (day) {
    case "Monday":
      console.log("Start tygodnia");
      break;
    case "Friday":
      console.log("Koniec tygodnia");
      break;
    default:
      console.log("Środek tygodnia");
  }

  // JavaScript ma też === (strict equality)
  if (x === 10) { // Sprawdza wartość I typ
    console.log("Dokładnie 10");
  }
}
\`\`\`
  `;

  stringLiterals = `
## 📝 Literały tekstowe

Składnia stringów jest podobna, ale JavaScript/TypeScript oferują dodatkowe możliwości z template literals.

### Charakterystyka:
- **Java**: Tylko podwójne cudzysłowy \`"\` dla stringów
- **JavaScript**: Pojedyncze \`'\`, podwójne \`"\` lub backticki \`\\\`\` (template literals)
- **TypeScript**: Tak samo jak JavaScript
  `;

  javaStringExample = `
\`\`\`java
public class StringExample {
    public void demo() {
        // Tylko podwójne cudzysłowy
        String name = "Jan";
        String greeting = "Cześć";

        // Konkatenacja z +
        String message = greeting + ", " + name + "!";
        System.out.println(message); // Cześć, Jan!

        // Text Blocks (Java 15+) - wieloliniowe stringi
        String html = """
            <html>
                <body>
                    <h1>Witaj!</h1>
                </body>
            </html>
            """;

        // Formatowanie
        String formatted = String.format("Witaj, %s!", name);
    }
}
\`\`\`
  `;

  jsStringExample = `
\`\`\`javascript
function demo() {
  // Pojedyncze lub podwójne cudzysłowy
  const name = 'Jan';
  const greeting = "Cześć";

  // Konkatenacja z +
  const message = greeting + ", " + name + "!";
  console.log(message); // Cześć, Jan!

  // Template literals (backticks) - interpolacja
  const messageTemplate = \`\${greeting}, \${name}!\`;
  console.log(messageTemplate); // Cześć, Jan!

  // Template literals - wieloliniowe stringi
  const html = \`
    <html>
      <body>
        <h1>Witaj, \${name}!</h1>
      </body>
    </html>
  \`;

  // Wyrażenia w template literals
  const sum = \`2 + 2 = \${2 + 2}\`; // "2 + 2 = 4"
}
\`\`\`
  `;

  conclusion = `
## 🎯 Podsumowanie

| Aspekt | Java | TypeScript | JavaScript |
|--------|------|------------|------------|
| **PascalCase dla klas** | ✅ | ✅ | ✅ |
| **camelCase dla metod/funkcji** | ✅ | ✅ | ✅ |
| **UPPER_CASE dla stałych** | ✅ | ✅ | ✅ |
| **Nawiasy klamrowe \`{}\`** | ✅ | ✅ | ✅ |
| **Średniki** | Obowiązkowe | Opcjonalne (zalecane) | Opcjonalne (zalecane) |
| **Komentarze \`//\` i \`/* */\`** | ✅ Identyczne | ✅ Identyczne | ✅ Identyczne |
| **Struktury \`if/for/while\`** | ✅ Identyczne | ✅ Identyczne | ✅ Identyczne |
| **Template literals** | ❌ (Text Blocks od Java 15) | ✅ | ✅ |
| **Styl bloków (K&R)** | ✅ Powszechny | ✅ Standard | ✅ Standard |

### 💡 Kluczowe wnioski:

1. **Konwencje nazewnictwa są praktycznie identyczne** - ułatwia to przejście między językami
2. **Składnia podstawowych struktur jest taka sama** - \`if\`, \`for\`, \`while\`, \`switch\`
3. **Komentarze używają identycznej składni** - \`//\`, \`/* */\`, \`/** */\`
4. **JavaScript/TypeScript oferują więcej elastyczności** - template literals, opcjonalne średniki
5. **Styl K&R jest standardem** we wszystkich trzech językach

> **Uwaga:** Znajomość konwencji Java znacznie ułatwia naukę TypeScript/JavaScript, ponieważ podstawowa składnia i style kodowania są bardzo podobne!
  `;
}
