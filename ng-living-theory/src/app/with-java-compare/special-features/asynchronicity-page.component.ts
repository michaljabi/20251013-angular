import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Asynchroniczność"
      fileEntry="./app/with-java-compare/special-features/asynchronicity-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <app-remark [markdown]="level1" />
        <div class="box has-background-warning-invert my-3">
          <h4 class="title is-5">Poziom 1: Callbacks</h4>
          <app-remark [markdown]="callbacksExample" />
        </div>

        <app-remark [markdown]="level2" />
        <div class="box has-background-warning-invert my-3">
          <h4 class="title is-5">Poziom 2: Promises</h4>
          <app-remark [markdown]="promisesExample" />
        </div>

        <app-remark [markdown]="level3" />
        <div class="box has-background-warning-invert my-3">
          <h4 class="title is-5">Poziom 3: Observables (RxJS)</h4>
          <app-remark [markdown]="observablesExample" />
        </div>

        <app-remark [markdown]="comparison" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class AsynchronicityPageComponent {

  introduction = `
# Asynchroniczność w JavaScript/TypeScript

JavaScript ma trzy główne poziomy obsługi operacji asynchronicznych, które ewoluowały wraz z rozwojem języka:

1. **Callbacks** - klasyczny wzorzec (od początku JS)
2. **Promises** - ES6 (2015) - lepsze zarządzanie async
3. **Observables** - RxJS - zaawansowane operacje na strumieniach danych

Każdy poziom rozwiązuje problemy poprzedniego i dodaje nowe możliwości.
  `;

  level1 = `
## 📞 Poziom 1: Callbacks

**Callback** to funkcja przekazana jako argument, która zostanie wywołana po zakończeniu operacji asynchronicznej.

### Problem: Callback Hell 🔥
  `;

  callbacksExample = `
\`\`\`javascript
// Callback - funkcja przekazana jako argument
function fetchUser(userId, callback) {
  setTimeout(() => {
    const user = { id: userId, name: "Jan" };
    callback(null, user);  // (error, result)
  }, 1000);
}

function fetchPosts(userId, callback) {
  setTimeout(() => {
    const posts = [{ id: 1, title: "Post 1" }];
    callback(null, posts);
  }, 1000);
}

// Użycie - proste
fetchUser(1, (error, user) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("User:", user);
});

// ❌ Problem: Callback Hell - zagnieżdżone callbacki
fetchUser(1, (error, user) => {
  if (error) return console.error(error);

  fetchPosts(user.id, (error, posts) => {
    if (error) return console.error(error);

    fetchComments(posts[0].id, (error, comments) => {
      if (error) return console.error(error);

      // Coraz głębsze zagnieżdżenie...
      console.log(comments);
    });
  });
});

// Kod staje się nieczytelny - "piramida zagłady"
\`\`\`

**Wady callbacks:**
- 🔥 Callback Hell - trudne do czytania
- ❌ Trudna obsługa błędów
- ❌ Brak sposobu na czekanie na wiele operacji
  `;

  level2 = `
## 🎁 Poziom 2: Promises

**Promise** to obiekt reprezentujący przyszły wynik operacji asynchronicznej. Ma 3 stany: pending, fulfilled, rejected.

### Rozwiązuje: Callback Hell
  `;

  promisesExample = `
\`\`\`javascript
// Promise - obiekt reprezentujący przyszły wynik
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: userId, name: "Jan" };
      resolve(user);  // Sukces
      // reject(new Error("Failed"));  // Błąd
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [{ id: 1, title: "Post 1" }];
      resolve(posts);
    }, 1000);
  });
}

// ✅ Chainowanie - płaskie, czytelne
fetchUser(1)
  .then(user => {
    console.log("User:", user);
    return fetchPosts(user.id);
  })
  .then(posts => {
    console.log("Posts:", posts);
  })
  .catch(error => {
    console.error("Error:", error);  // Jeden catch dla wszystkich
  });

// ✅ async/await - jeszcze lepsze (ES2017)
async function loadUserData() {
  try {
    const user = await fetchUser(1);
    console.log("User:", user);

    const posts = await fetchPosts(user.id);
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error:", error);
  }
}

// ✅ Promise.all - równoczesne wykonanie
async function loadMultiple() {
  const [user, posts] = await Promise.all([
    fetchUser(1),
    fetchPosts(1)
  ]);
  console.log(user, posts);
}

// ✅ Promise.race - pierwszy wynik
const fastest = await Promise.race([
  fetchUser(1),
  fetchUser(2)
]);
\`\`\`

\`\`\`typescript
// TypeScript - typy dla Promises
function fetchUser(userId: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: userId, name: "Jan" });
    }, 1000);
  });
}

async function loadData(): Promise<void> {
  const user = await fetchUser(1);  // user: User
  console.log(user.name);
}
\`\`\`

**Zalety Promises:**
- ✅ Płaskie chainowanie (\`.then()\`)
- ✅ Jeden \`.catch()\` dla wszystkich błędów
- ✅ \`Promise.all\`, \`Promise.race\`, \`Promise.allSettled\`
- ✅ async/await - synchroniczna składnia
  `;

  level3 = `
## 🌊 Poziom 3: Observables (RxJS)

**Observable** to strumień wartości w czasie. Może emitować wiele wartości (w przeciwieństwie do Promise, który emituje jedną).

### Rozwiązuje: Obsługa strumieni danych, operatory transformacji
  `;

  observablesExample = `
\`\`\`typescript
import { Observable, of, interval, from } from 'rxjs';
import { map, filter, take, debounceTime } from 'rxjs/operators';

// Observable - strumień wartości w czasie
function fetchUser$(userId: number): Observable<User> {
  return new Observable(observer => {
    setTimeout(() => {
      observer.next({ id: userId, name: "Jan" });
      observer.complete();  // Koniec strumienia
    }, 1000);
  });
}

// Subskrypcja - obsługa wartości
fetchUser$(1).subscribe({
  next: user => console.log("User:", user),
  error: err => console.error("Error:", err),
  complete: () => console.log("Complete!")
});

// ✅ Operatory - potężne transformacje
const numbers$ = of(1, 2, 3, 4, 5);

numbers$
  .pipe(
    filter(n => n % 2 === 0),  // Tylko parzyste
    map(n => n * 10)           // Pomnóż przez 10
  )
  .subscribe(n => console.log(n));  // 20, 40

// ✅ Interval - emitowanie wartości co X ms
const timer$ = interval(1000).pipe(take(5));  // 0, 1, 2, 3, 4

timer$.subscribe(n => console.log("Tick:", n));

// ✅ Debounce - opóźnienie (np. search input)
const search$ = new Observable<string>(observer => {
  // Symulacja wpisywania
  observer.next("a");
  setTimeout(() => observer.next("ab"), 100);
  setTimeout(() => observer.next("abc"), 200);
});

search$
  .pipe(
    debounceTime(300)  // Czekaj 300ms po ostatnim evencie
  )
  .subscribe(query => console.log("Search:", query));
// Wynik: tylko "abc" (po 300ms od ostatniego)

// ✅ HTTP Request w Angular
import { HttpClient } from '@angular/common/http';

@Component({...})
export class MyComponent {
  constructor(private http: HttpClient) {}

  loadUsers() {
    this.http.get<User[]>('/api/users')
      .pipe(
        map(users => users.filter(u => u.active)),
        map(users => users.length)
      )
      .subscribe(count => {
        console.log("Active users:", count);
      });
  }
}

// ✅ Kombinowanie strumieni
import { combineLatest } from 'rxjs';

const name$ = of("Jan");
const age$ = of(25);

combineLatest([name$, age$]).subscribe(([name, age]) => {
  console.log(\`\${name} is \${age} years old\`);
});

// ✅ switchMap - przełączanie między Observables
searchInput$.pipe(
  debounceTime(300),
  switchMap(query => this.http.get(\`/api/search?q=\${query}\`))
).subscribe(results => console.log(results));
\`\`\`

**Zalety Observables:**
- ✅ Wiele wartości w czasie (stream)
- ✅ Zaawansowane operatory (\`map\`, \`filter\`, \`debounceTime\`, \`switchMap\`, etc.)
- ✅ Anulowanie subskrypcji (\`unsubscribe()\`)
- ✅ Ideal dla: HTTP requests, user input, WebSockets, events
- ✅ Angular używa RxJS domyślnie
  `;

  comparison = `
## 🎯 Porównanie poziomów

| Aspekt | Callbacks | Promises | Observables |
|--------|-----------|----------|-------------|
| **Wartości** | Jedna callback | Jedna wartość | Strumień wartości |
| **Czytelność** | ❌ Callback Hell | ✅ Chainowanie | ✅ Operatory |
| **Obsługa błędów** | ❌ W każdym callback | ✅ Jeden \`.catch()\` | ✅ \`error\` callback |
| **Anulowanie** | ❌ Trudne | ❌ Niemożliwe | ✅ \`unsubscribe()\` |
| **Leniwe wykonanie** | ❌ Natychmiastowe | ❌ Natychmiastowe | ✅ Dopiero przy \`subscribe()\` |
| **Operatory** | ❌ Brak | ⚠️ Podstawowe | ✅ Setki operatorów |

### 💡 Kiedy co używać?

**Callbacks:**
- Proste, jednorazowe operacje
- Stare API (np. Node.js fs.readFile)
- W przypadku \`.addEventListener()\` dla natywnego kodu JS w przeglądarce

**Promises (async/await):**
- Standardowy wybór dla większości \`async\` operacji
- HTTP requests (fetch API)
- Jednorazowe operacje \`async\`
- Łatwe w użyciu i zrozumieniu (coś się uda, albo NIE uda :smile:)

**Observables (RxJS):**
- Strumienie danych
- Aplikacje Angular (wbudowane)
- Zaawansowane transformacje danych
- Potrzeba anulowania operacji
- Operacje zależne od czasu (debounce, throttle)

### 🚀 Poziomy asynchroniczności:

\`\`\`javascript
// 1. Callback (nadal wykorzystywane np. w addEventListener)
button.addEventListener('click', (ev) => {
  console.log(ev);
});

// 2. Promise (jeśli operacja może się nie udać...)
getData(id)
  .then(data => processData(data))
  .catch(err => handleError(err));

// 3. async/await (lukier składniowy - TYLKO do Promise), dla czytelniejszego kodu
try {
  const data = await getData(id);
  processData(data);
} catch (err) {
  handleError(err);
}

// 4. Observable (dla strumieni)
getData$(id)
  .pipe(
    map(data => processData(data)),
    catchError(err => handleError(err))
  )
  .subscribe((ev) => {
    console.log(ev);
  });
\`\`\`
`;
}
