import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Jednowątkowość"
      fileEntry="./app/with-java-compare/differences/single-threaded-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="columns my-6">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Java - Multi-threading</h4>
              <app-remark [markdown]="javaThreading" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 JavaScript - Single-threaded + Event Loop</h4>
              <app-remark [markdown]="jsThreading" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="eventLoop" />

        <div class="box my-6">
          <h5 class="title is-5">⚡ Event Loop - Jak działa JavaScript</h5>
          <app-remark [markdown]="eventLoopDiagram" />
        </div>

        <app-remark [markdown]="conclusion" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class SingleThreadedPageComponent {

  introduction = `
# Jednowątkowość JavaScript vs wielowątkowość Java

**Kluczowa różnica:** Java jest **wielowątkowy** (multi-threaded) - może wykonywać wiele operacji równocześnie na różnych wątkach. JavaScript (w przeglądarce i Node.js) jest **jednowątkowy** (single-threaded) - wykonuje kod sekwencyjnie na jednym wątku głównym.

## 🔑 Podstawy

**Java (Multi-threading):**
- ✅ Wiele wątków może działać **równolegle** (parallel)
- ✅ Prawdziwa współbieżność na procesorach wielordzeniowych
- ⚠️ Wymaga synchronizacji dostępu do współdzielonych zasobów
- ⚠️ Ryzyko race conditions, deadlocków

**JavaScript (Single-threaded):**
- 🔄 Jeden wątek główny + **Event Loop**
- 🔄 Asynchroniczne I/O (non-blocking)
- ✅ Prostsze - brak problemów z synchronizacją
- ⚠️ Blokujący kod blokuje całą aplikację

> **Uwaga:** JavaScript ma Web Workers (przeglądarka) i Worker Threads (Node.js), ale to oddzielne izolowane konteksty - nie standardowe wątki!
  `;

  javaThreading = `
\`\`\`java
public class JavaThreading {
    public static void main(String[] args) {
        // Tworzenie i uruchamianie wątków
        Thread thread1 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("Thread 1: " + i);
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        Thread thread2 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("Thread 2: " + i);
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        // Oba wątki działają RÓWNOLEGLE
        thread1.start();
        thread2.start();

        System.out.println("Main thread continues...");

        // Wynik: Thread 1, Thread 2 i Main mogą się przeplatać!
    }
}
\`\`\`

**Java może uruchomić prawdziwe równoległe wątki!**
  `;

  jsThreading = `
\`\`\`javascript
// JavaScript - JEDEN wątek główny

async function task1() {
  for (let i = 0; i < 5; i++) {
    console.log("Task 1:", i);
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

async function task2() {
  for (let i = 0; i < 5; i++) {
    console.log("Task 2:", i);
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

// NIE działają równolegle - wykonują się sekwencyjnie!
task1();
task2();

console.log("Main continues...");

// Wynik: Main najpierw, potem Task 1 i Task 2 NAPRZEMIENNIE
// (ale nie równolegle - event loop przełącza między nimi)
\`\`\`

**JavaScript przełącza się między zadaniami, ale NIE wykonuje ich równolegle!**

### 🔄 Event Loop - Kluczowa różnica:

JavaScript wykorzystuje **event loop** do obsługi asynchronicznych operacji bez blokowania wątku głównego.

**Jak to działa:**
1. Kod synchroniczny wykonuje się na głównym wątku
2. Operacje async (setTimeout, fetch, etc.) trafiają do kolejki
3. Event loop sprawdza kolejkę gdy call stack jest pusty
4. Callback z kolejki jest wykonywany na głównym wątku
  `;

  eventLoop = `
## ⚡ Event Loop - Serce JavaScript

Event Loop to mechanizm, który pozwala JavaScript na asynchroniczne operacje mimo jednowątkowości.
  `;

  eventLoopDiagram = `
\`\`\`mermaid
graph TB
    A[Call Stack<br/>Main Thread] -->|Empty?| B{Event Loop}
    B -->|Yes| C[Callback Queue]
    C --> D[Task Queue<br/>Microtasks]
    D --> A
    E[Web APIs<br/>setTimeout, fetch, etc.] --> C
    F[I/O Operations] --> C

    style A fill:#90caf9
    style B fill:#64b5f6
    style C fill:#42a5f5
    style E fill:#ffcc80
    style F fill:#ffa726
\`\`\`

**Proces:**
1. **Call Stack** - wykonuje kod synchroniczny
2. Gdy napotka async operację (setTimeout, fetch) - przekazuje do **Web APIs**
3. Web APIs obsługują operację (w tle!)
4. Gdy gotowe - callback trafia do **Callback Queue**
5. **Event Loop** sprawdza czy Call Stack jest pusty
6. Jeśli tak - przenosi callback z kolejki do Call Stack
7. Proces się powtarza

**Kluczowe:** Tylko JEDEN callback jest wykonywany naraz na Call Stack!
  `;

  conclusion = `
## 🎯 Podsumowanie

| Aspekt | Java | JavaScript |
|--------|------|------------|
| **Model** | Multi-threaded | Single-threaded + Event Loop |
| **Równoległość** | ✅ Prawdziwe parallel execution | ❌ Tylko concurrent (naprzemienne) |
| **Wątki** | Wiele wątków OS | Jeden wątek główny |
| **Async I/O** | Blokujące (domyślnie) | Non-blocking (domyślnie) |
| **Synchronizacja** | Wymagana (locks, synchronized) | Nie potrzebna (jeden wątek) |
| **Race conditions** | ✅ Możliwe | ❌ Niemożliwe (w jednym wątku) |
| **Deadlocki** | ✅ Możliwe | ❌ Niemożliwe |
| **Blokujący kod** | Blokuje tylko jeden wątek | Blokuje całą aplikację! |

### 💡 Kluczowe różnice:

**Java (Multi-threading):**
- Prawdziwe **równoległe wykonanie** na wielu rdzeniach CPU
- Wymaga **synchronizacji** dostępu do współdzielonych zasobów
- Bardziej skomplikowane - race conditions, deadlocki
- Lepsze dla **CPU-intensive** operacji
- Threads, ExecutorService, CompletableFuture

**JavaScript (Single-threaded):**
- **Event Loop** + asynchroniczne I/O
- Brak problemów z synchronizacją (jeden wątek)
- Prostsze w użyciu - Promises, async/await
- Idealne dla **I/O-intensive** operacji (serwery, API)
- **Blokujący kod jest zabójczy** - blokuje cały event loop!


> **Praktyczny wniosek:** JavaScript jest single-threaded **by design** - to nie wada, to cecha! Event loop sprawia, że obsługa tysięcy równoczesnych połączeń (np. serwer HTTP) jest prostsza niż w Java. Ale intensywne obliczenia CPU to domena Java lub Worker Threads w Node.js.
  `;
}
