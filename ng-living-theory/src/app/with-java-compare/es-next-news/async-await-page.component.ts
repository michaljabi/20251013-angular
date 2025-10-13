import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Async/Await"
      fileEntry="./app/with-java-compare/es-next-news/async-await-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="box has-background-info-invert my-6">
          <h4 class="title is-5">⏳ Async/await - składnia</h4>
          <app-remark [markdown]="syntax" />
        </div>

        <div class="box has-background-info-invert my-6">
          <h4 class="title is-5">⚡ Równoległe wykonanie</h4>
          <app-remark [markdown]="parallel" />
        </div>

        <div class="box has-background-info-invert my-6">
          <h4 class="title is-5">⚠️ Obsługa błędów</h4>
          <app-remark [markdown]="errorHandling" />
        </div>

        <div class="message is-info">
          <div class="message-body">
            <strong>💡 Uwaga</strong>, składnia <code>async</code>/<code>await</code> zadziała jedynie z <code>Promise</code>!
          </div>
        </div>

      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class AsyncAwaitPageComponent {

  introduction = `
# Async/Await - ES2017

 **Async/await** to lukier składniowy (syntactic sugar) nad \`Promises\`, który zmienia zapis tak, że kod asynchroniczny wygląda jak synchroniczny.
  `;

  syntax = `
\`\`\`typescript
// Promise - tradycyjna składnia
function fetchUser(): Promise<User> {
  return fetch('/api/user')
    .then(response => response.json())
    .then(data => data.user);
}

fetchUser()
  .then(user => console.log(user))
  .catch(error => console.error(error));

// ✅ Async/await - czytelniejsza składnia
async function fetchUser(): Promise<User> {
  const response = await fetch('/api/user');
  const data = await response.json();
  return data.user;
}

try {
  const user = await fetchUser();
  console.log(user);
} catch (error) {
  console.error(error);
}

// Async function zawsze zwraca Promise
async function getName(): Promise<string> {
  return "Jan";  // Automatycznie opakowane w Promise.resolve("Jan")
}

const namePromise = getName();  // Promise<string>
const name = await getName();   // string

// Await działa tylko w async function
async function loadData() {
  const data = await fetchData();  // ✅ OK
}

// await fetchData();  // ❌ Error: await only valid in async function
\`\`\`
\`\`\`typescript
// plik sample.ts

// Top-level await (ES2022) - w modułach
await fetchData();  // ✅ OK w module

// używanie import/export potwierdza, że to moduł (ESM)
export {}
\`\`\`


🗃️ **MDN:** [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

🗃️ **MDN:** [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

🗃️ **MDN:** [ESM modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
  `;

  parallel = `
\`\`\`typescript
// ❌ Sekwencyjne wykonanie - wolne!
async function loadDataSequential() {
  const users = await fetchUsers();    // Czeka 1s
  const posts = await fetchPosts();    // Czeka 1s
  const comments = await fetchComments(); // Czeka 1s
  // Łącznie: 3s
  return { users, posts, comments };
}

// 😎 To wyżej to "Matrix" na prawdziwy zapis:
function loadDataSequential() {
  return fetchUsers()
    .then(users => fetchPosts(users))
    .then(posts => fetchComments(posts))
    .then(comments => ({ users, posts, comments }));
}

// ✅ Równoległe wykonanie - szybkie!
async function loadDataParallel() {
  const [users, posts, comments] = await Promise.all([
    fetchUsers(),    // Wszystkie wykonują się równolegle
    fetchPosts(),
    fetchComments()
  ]);
  // Łącznie: 1s (najdłuższe)
  return { users, posts, comments };
}

// Promise.all - czeka na wszystkie
async function loadAll() {
  try {
    const results = await Promise.all([
      fetch('/api/users'),
      fetch('/api/posts'),
      fetch('/api/comments')
    ]);
    return results;
  } catch (error) {
    // Jeśli KTÓREKOLWIEK się nie powiedzie, cały Promise.all failuje
    console.error(error);
  }
}

// Promise.allSettled - czeka na wszystkie, nawet jeśli failują
async function loadAllSettled() {
  const results = await Promise.allSettled([
    fetch('/api/users'),
    fetch('/api/posts'),
    fetch('/api/invalid')  // Może failnąć
  ]);

  results.forEach(result => {
    if (result.status === 'fulfilled') {
      console.log(result.value);
    } else {
      console.error(result.reason);
    }
  });
}

// Promise.race - pierwszy wynik
async function loadFastest() {
  const result = await Promise.race([
    fetchFromServer1(),
    fetchFromServer2(),
    fetchFromServer3()
  ]);
  return result;  // Pierwszy który się skończy
}
\`\`\`

🗃️ **MDN:** [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

🗃️ **MDN:** [Promise.allSettled()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
  `;

  errorHandling = `
\`\`\`typescript
// Try-catch dla async/await
async function loadUser(id: number) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Failed to load user:', error);
    throw error;  // Re-throw dla wyższego poziomu
  }
}

// Finally
async function loadData() {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    console.log('Cleanup');  // Zawsze się wykona
  }
}

// Multiple try-catch
async function processUser(id: number) {
  let user;
  try {
    user = await fetchUser(id);
  } catch (error) {
    console.error('Failed to fetch user');
    return;
  }

  try {
    await updateUser(user);
  } catch (error) {
    console.error('Failed to update user');
  }
}

// TypeScript - type-safe error handling
async function fetchUser(id: number): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  if (!response.ok) {
    throw new Error('User not found');
  }
  return response.json();
}
\`\`\`
`;
}
