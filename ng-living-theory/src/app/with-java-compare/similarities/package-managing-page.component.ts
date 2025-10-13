import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
    <app-page-layout
      pageTitle="Zarządzanie projektem i  paczkami"
      fileEntry="./app/with-java-compare/similarities/package-managing-page.component.ts"
    >
      <section class="container content">
        <app-remark [markdown]="introduction" />

        <div class="box my-3">
          <h5 class="title is-5">Porównanie narzędzi do zarządzania zależnościami</h5>
          <div class="columns my-3">
            <div class="column">
              <div class="panel">
                <h4 class="panel-heading has-background-info-invert">☕ Java</h4>
                <div class="panel-block is-size-7">📦 <strong>Maven</strong> (najpopularniejszy)</div>
                <div class="panel-block is-size-7">📦 <strong>Gradle</strong> (nowszy, elastyczny)</div>
                <div class="panel-block is-size-7">📄 Plik: <code>pom.xml</code> lub <code>build.gradle</code></div>
                <div class="panel-block is-size-7">🗂️ Repozytorium: Maven Central</div>
                <div class="panel-block is-size-7">⚙️ Runtime: JVM (Java Virtual Machine)</div>
              </div>
            </div>
            <div class="column">
              <div class="panel">
                <h4 class="panel-heading has-background-warning-invert">🟨 JavaScript/TypeScript</h4>
                <div class="panel-block is-size-7">📦 <strong>npm</strong> (najpopularniejszy)</div>
                <div class="panel-block is-size-7">📦 <strong>yarn</strong>, <strong>pnpm</strong> (alternatywy)</div>
                <div class="panel-block is-size-7">📄 Plik: <code>package.json</code></div>
                <div class="panel-block is-size-7">🗂️ Repozytorium: npm Registry</div>
                <div class="panel-block is-size-7">⚙️ Runtime: Node.js</div>
              </div>
            </div>
          </div>
        </div>

        <app-remark [markdown]="compilationFlow" />

        <div class="box my-3">
          <h5 class="title is-5">Proces kompilacji i uruchomienia - Java</h5>
          <app-remark [markdown]="javaCompilationDiagram" />
        </div>

        <div class="box my-3">
          <h5 class="title is-5">Proces kompilacji i uruchomienia - TypeScript</h5>
          <app-remark [markdown]="tsCompilationDiagram" />
        </div>

        <app-remark [markdown]="packageManagers" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Maven - <code>pom.xml</code></h4>
              <app-remark [markdown]="mavenExample" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 npm - <code>package.json</code></h4>
              <app-remark [markdown]="npmExample" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="buildProcess" />

        <div class="columns my-3 is-multiline">
          <div class="column is-full">
            <h5 class="title is-5">Proces budowania projektu</h5>
          </div>
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Maven Build Process</h4>
              <app-remark [markdown]="buildDiagramJava" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🔷🟨 NPM Build Process</h4>
              <app-remark [markdown]="buildDiagramJS" />
            </div>
          </div>
          <div class="column is-full">
            <app-remark [markdown]="buildSummary" />
          </div>
        </div>

        <app-remark [markdown]="commands" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Maven - Komendy</h4>
              <app-remark [markdown]="mavenCommands" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 npm - Komendy</h4>
              <app-remark [markdown]="npmCommands" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="scripts" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Maven - Skrypty (Plugins)</h4>
              <app-remark [markdown]="mavenScripts" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 npm - Skrypty</h4>
              <app-remark [markdown]="npmScripts" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="dependencies" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ Maven - Zarządzanie zależnościami</h4>
              <app-remark [markdown]="mavenDependencies" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 npm - Zarządzanie zależnościami</h4>
              <app-remark [markdown]="npmDependencies" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="runtimes" />

        <div class="columns my-3">
          <div class="column">
            <div class="box has-background-info-invert">
              <h4 class="title is-5">☕ JVM - Java Virtual Machine</h4>
              <app-remark [markdown]="jvmDescription" />
            </div>
          </div>
          <div class="column">
            <div class="box has-background-warning-invert">
              <h4 class="title is-5">🟨 Node.js Runtime</h4>
              <app-remark [markdown]="nodeDescription" />
            </div>
          </div>
        </div>

        <app-remark [markdown]="conclusion" />
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class PackageManagingPageComponent {

  introduction = `
# Podobieństwa w zarządzaniu paczkami i budowaniu projektów

Zarówno **Java**, jak i **JavaScript/TypeScript** mają zaawansowane systemy zarządzania zależnościami i budowania projektów. Choć narzędzia są różne, koncepcje są bardzo podobne.

## Główne podobieństwa:
- 📦 Centralne repozytorium pakietów
- 📄 Plik konfiguracyjny z zależnościami
- 🔧 Narzędzia CLI do zarządzania projektem
- 🏗️ Automatyzacja procesu budowania
- ⚙️ Runtime do uruchamiania skompilowanego kodu
  `;

  compilationFlow = `
## 🔄 Proces kompilacji i uruchomienia

Oba języki przechodzą przez podobny proces: **kod źródłowy → kompilacja → runtime**.
  `;

  javaCompilationDiagram = `
\`\`\`mermaid
graph LR
    A[📝 Java Code<br/>.java] --> B[☕ javac<br/>Java Compiler]
    B --> C[📦 Bytecode<br/>.class]
    C --> D[⚙️ JVM<br/>Java Virtual Machine]
    D --> E[🚀 Running Application]

\`\`\`

**Wyjaśnienie:**
1. Kod Java (\`.java\`) jest kompilowany przez \`javac\`
2. Powstaje bytecode (\`.class\`) - pośrednia reprezentacja
3. JVM interpretuje i uruchamia bytecode
4. Bytecode jest **niezależny od platformy** (Write Once, Run Anywhere)
  `;

  tsCompilationDiagram = `
\`\`\`mermaid
graph LR
    A[📝 TypeScript<br/>.ts] --> B[🔷 tsc<br/>TypeScript Compiler]
    B --> C[📦 JavaScript<br/>.js]
    C --> D[⚙️ Node.js<br/>Runtime]
    D --> E[🚀 Running Application]

\`\`\`

**Wyjaśnienie:**
1. Kod TypeScript (\`.ts\`) jest kompilowany przez \`tsc\`
2. Powstaje JavaScript (\`.js\`) - język zrozumiały dla przeglądarek i Node.js
3. Node.js interpretuje i uruchamia JavaScript
4. JavaScript jest **interpretowany**, ale V8 (silnik Node.js) kompiluje do kodu maszynowego (JIT)
  `;

  packageManagers = `
## 📦 Menedżery pakietów - Maven vs npm

**Maven** to najpopularniejszy menedżer pakietów dla Java, podczas gdy **npm** dominuje w ekosystemie JavaScript/TypeScript.
  `;

  mavenExample = `
\`\`\`xml
<!-- pom.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0">
    <modelVersion>4.0.0</modelVersion>

    <!-- Identyfikacja projektu -->
    <groupId>com.example</groupId>
    <artifactId>my-app</artifactId>
    <version>1.0.0</version>
    <packaging>jar</packaging>

    <name>My Application</name>

    <!-- Właściwości -->
    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
    </properties>

    <!-- Zależności -->
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <version>3.2.0</version>
        </dependency>

        <!-- Zależności testowe -->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13.2</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <!-- Pluginy do budowania -->
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.11.0</version>
            </plugin>
        </plugins>
    </build>
</project>
\`\`\`
  `;

  npmExample = `
\`\`\`json
// package.json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "My Application",
  "main": "dist/index.js",
  "type": "module",

  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts",
    "test": "jest",
    "lint": "eslint src/**/*.ts"
  },

  "dependencies": {
    "express": "^4.18.2",
    "dotenv": "^16.3.1"
  },

  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/express": "^4.17.21",
    "typescript": "^5.3.0",
    "jest": "^29.7.0",
    "eslint": "^8.55.0",
    "ts-node": "^10.9.2"
  },

  "engines": {
    "node": ">=18.0.0"
  }
}
\`\`\`
  `;

  buildProcess = `
## 🏗️ Proces budowania projektu

Oba narzędzia automatyzują proces budowania: od pobrania zależności, przez kompilację, aż do utworzenia artefaktu do wdrożenia.
  `;

  buildDiagramJava = `
\`\`\`mermaid
graph TB
  J1[📄 pom.xml] --> J2[mvn clean install]
  J2 --> J3[📥 Download Dependencies]
  J3 --> J4[🔨 Compile .java → .class]
  J4 --> J5[🧪 Run Tests]
  J5 --> J6[📦 Package → .jar/.war]
  J6 --> J7[📁 target/]

\`\`\`
  `;

  buildDiagramJS = `\`\`\`mermaid
graph TB
  N1[📄 package.json] --> N2[npm run build]
  N2 --> N3[📥 node_modules/]
  N3 --> N4[🔨 Compile .ts → .js]
  N4 --> N5[🧪 Run Tests]
  N5 --> N6[📦 Bundle & Minify]
  N6 --> N7[📁 dist/]
\`\`\``

  buildSummary = `
  **Podobieństwa:**
- Oba zaczynają od pliku konfiguracyjnego
- Oba pobierają zależności automatycznie
- Oba kompilują kod źródłowy
- Oba uruchamiają testy
- Oba tworzą artefakt gotowy do wdrożenia w folderze wyjściowym
  `


  commands = `
## 💻 Podstawowe komendy CLI

Komendy Maven i npm są bardzo podobne w swoim przeznaczeniu.
  `;

  mavenCommands = `
\`\`\`bash
# Czyszczenie poprzedniego buildu
mvn clean

# Kompilacja projektu
mvn compile

# Uruchomienie testów
mvn test

# Stworzenie paczki (JAR/WAR)
mvn package

# Instalacja do lokalnego repo
mvn install

# Pełny cykl: clean + compile + test + package
mvn clean install

# Uruchomienie aplikacji Spring Boot
mvn spring-boot:run

# Dodanie zależności
# (ręcznie edytuj pom.xml)

# Aktualizacja zależności
mvn versions:display-dependency-updates
\`\`\`

**Struktura folderów Maven:**
\`\`\`
project/
├── pom.xml
├── src/
│   ├── main/
│   │   └── java/          # Kod źródłowy
│   └── test/
│       └── java/          # Testy
└── target/                # Wyniki buildu
    └── my-app-1.0.0.jar
\`\`\`
  `;

  npmCommands = `
\`\`\`bash
# Instalacja wszystkich zależności
npm install

# Kompilacja projektu (uruchamia script "build")
npm run build

# Uruchomienie testów
npm test  # lub: npm run test

# Uruchomienie w trybie deweloperskim
npm run dev

# Uruchomienie aplikacji
npm start  # lub: npm run start

# Dodanie nowej zależności
npm install express

# Dodanie dev dependency
npm install --save-dev typescript

# Aktualizacja zależności
npm update

# Sprawdzenie przestarzałych pakietów
npm outdated

# Czyszczenie cache
npm cache clean --force
\`\`\`

**Struktura folderów npm:**
\`\`\`
project/
├── package.json
├── package-lock.json
├── node_modules/          # Zainstalowane zależności
├── src/                   # Kod źródłowy
│   └── index.ts
├── tests/                 # Testy
└── dist/                  # Wyniki buildu
    └── index.js
\`\`\`
  `;

  scripts = `
## 📜 Skrypty i automatyzacja

Maven używa pluginów, npm używa sekcji \`scripts\` w \`package.json\`.
  `;

  mavenScripts = `
\`\`\`xml
<!-- pom.xml - Pluginy -->
<build>
    <plugins>
        <!-- Plugin do kompilacji -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.11.0</version>
            <configuration>
                <source>17</source>
                <target>17</target>
            </configuration>
        </plugin>

        <!-- Plugin do uruchomienia aplikacji -->
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>

        <!-- Plugin do testów -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>3.0.0</version>
        </plugin>
    </plugins>
</build>
\`\`\`

**Uruchomienie:**
\`\`\`bash
mvn clean install          # Uruchamia wszystkie skonfigurowane pluginy
mvn spring-boot:run        # Uruchamia konkretny plugin
\`\`\`
  `;

  npmScripts = `
\`\`\`json
{
  "scripts": {
    "build": "tsc",
    "build:prod": "tsc && webpack --mode production",
    "start": "node dist/index.js",
    "dev": "nodemon --exec ts-node src/index.ts",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src/**/*.ts",
    "lint:fix": "eslint src/**/*.ts --fix",
    "format": "prettier --write 'src/**/*.ts'",
    "clean": "rm -rf dist",
    "prebuild": "npm run clean",
    "postbuild": "echo 'Build complete!'",
    "deploy": "npm run build && npm run deploy:prod"
  }
}
\`\`\`

**Uruchomienie:**
\`\`\`bash
npm run build              # Uruchamia script "build"
npm run dev                # Uruchamia script "dev"
npm test                   # Alias dla "npm run test"
\`\`\`

**Hooki:**
- \`prebuild\` - uruchamia się PRZED \`build\`
- \`postbuild\` - uruchamia się PO \`build\`
  `;

  dependencies = `
## 📚 Zarządzanie zależnościami

Oba systemy automatycznie pobierają i zarządzają zależnościami projektu oraz ich wersjami.
  `;

  mavenDependencies = `
\`\`\`xml
<dependencies>
    <!-- Zależność produkcyjna -->
    <dependency>
        <groupId>com.google.guava</groupId>
        <artifactId>guava</artifactId>
        <version>32.1.3-jre</version>
    </dependency>

    <!-- Zależność tylko do testów -->
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter</artifactId>
        <version>5.10.0</version>
        <scope>test</scope>
    </dependency>

    <!-- Zależność opcjonalna -->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.0.33</version>
        <optional>true</optional>
    </dependency>
</dependencies>
\`\`\`

**Scope'y zależności:**
- \`compile\` (domyślny) - dostępne wszędzie
- \`test\` - tylko w testach
- \`runtime\` - tylko w runtime, nie w kompilacji
- \`provided\` - dostarczone przez kontener (np. Tomcat)
  `;

  npmDependencies = `
\`\`\`json
{
  "dependencies": {
    "express": "^4.18.2",      // ^ = kompatybilne z 4.x.x
    "lodash": "~4.17.21",      // ~ = kompatybilne z 4.17.x
    "react": "18.2.0"          // dokładna wersja
  },

  "devDependencies": {
    "typescript": "^5.3.0",
    "jest": "^29.7.0",
    "@types/node": "^20.10.0"
  }
}
\`\`\`

**Semantyczne wersjonowanie (SemVer):**
- \`^4.18.2\` - instaluje najnowszą wersję minor/patch (np. 4.20.5, ale NIE 5.0.0)
- \`~4.18.2\` - instaluje najnowszą wersję patch (np. 4.18.9, ale NIE 4.19.0)
- \`4.18.2\` - dokładnie ta wersja
  `;

  runtimes = `
## ⚙️ Środowiska uruchomieniowe - JVM vs Node.js

Oba języki potrzebują specjalnego środowiska do uruchomienia skompilowanego kodu.
  `;

  jvmDescription = `
**Java Virtual Machine (JVM)**

\`\`\`bash
# Uruchomienie aplikacji Java
java -jar target/my-app-1.0.0.jar

# Z opcjami JVM
java -Xmx512m -Xms256m -jar my-app.jar
\`\`\`

**Charakterystyka:**
- ✅ **Bytecode** - kompilacja do pośredniego formatu
- ✅ **Niezależność od platformy** - "Write Once, Run Anywhere"
- ✅ **JIT Compilation** - kompilacja Just-In-Time do kodu maszynowego
- ✅ **Garbage Collection** - automatyczne zarządzanie pamięcią
- ✅ **Bezpieczeństwo** - sandbox, weryfikacja bytecode
- 🔧 Wymaga zainstalowania JRE (Java Runtime Environment)

**Wersje JVM:**
\`\`\`bash
java -version
# Wynik: openjdk version "17.0.9" 2023-10-17
\`\`\`
  `;

  nodeDescription = `
**Node.js Runtime**

\`\`\`bash
# Uruchomienie aplikacji Node.js
node dist/index.js

# Z opcjami Node.js
node --max-old-space-size=4096 dist/index.js
\`\`\`

**Charakterystyka:**
- ✅ **JavaScript Engine (V8)** - kompilacja JIT do kodu maszynowego
- ✅ **Asynchroniczne I/O** - model event-driven, non-blocking
- ✅ **Single-threaded** z event loop (ale z worker threads)
- ✅ **Garbage Collection** - automatyczne zarządzanie pamięcią
- ✅ **Cross-platform** - działa na Windows, Linux, macOS
- 🔧 Wymaga zainstalowania Node.js

**Wersje Node.js:**
\`\`\`bash
node --version
# Wynik: v20.10.0

npm --version
# Wynik: 10.2.3
\`\`\`
  `;

  conclusion = `
## 🎯 Podsumowanie

| Aspekt | Maven (Java) | npm (JavaScript/TypeScript) |
|--------|--------------|------------------------------|
| **Plik konfiguracyjny** | \`pom.xml\` (XML) | \`package.json\` (JSON) |
| **Lokalne repo** | \`~/.m2/repository\` | \`node_modules/\` |
| **Globalne repo** | Maven Central | npm Registry |
| **Instalacja zależności** | \`mvn install\` | \`npm install\` |
| **Budowanie** | \`mvn package\` | \`npm run build\` |
| **Uruchomienie** | \`java -jar\` | \`node\` |
| **Testy** | \`mvn test\` | \`npm test\` |
| **Runtime** | JVM (bytecode) | Node.js (JavaScript) |
| **Folder wyjściowy** | \`target/\` | \`dist/\` lub \`build/\` |
| **Wersjonowanie** | \`1.0.0-SNAPSHOT\` | SemVer: \`^1.0.0\` |

### 💡 Kluczowe wnioski:

1. **Podobna filozofia** - oba narzędzia automatyzują zarządzanie zależnościami i budowanie
2. **Centralny rejestr pakietów** - [Maven Central](https://mvnrepository.com/repos/central) vs [npm Registry](https://www.npmjs.com/)
3. **Deklaratywna konfiguracja** - wszystko opisane w jednym pliku
4. **Automatyzacja** - od instalacji zależności po deployment
5. **Podobne etapy budowania** - clean → compile → test → package
6. **Runtime wymagany** - JVM dla Java, Node.js dla JavaScript

> **Uwaga:** Znajomość Maven znacznie ułatwia zrozumienie npm i vice versa. Koncepcje są bardzo podobne, różni się głównie składnia i ekosystem!
  `;
}
