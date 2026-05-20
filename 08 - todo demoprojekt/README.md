# TODO

Todo är ett demo-projekt för att visa JAVA25 hur man skulle kunna organisera en Node express app som använder SQLite.

Projektet håller koll på en att-göra-lista. Det innehåller en backend-del med ett API för att hämta alla todos, lägga till en ny, uppdatera en todo från done till icke done samt radera en todo. 
Det innehåller även en frontend-del som hämtar och visar alla todos i en lista.

## Installation
Använd npm för att installera alla dependencies och för att starta servern

```bash
npm install
npm start
```

## Filer
Här är en överblick över filstrukturen.
Högst upp i varje ts-fil finns en kommentar som förklarar vad filen innehåller. 

```text
root/
├── package.json
├── tsconfig.json
├── .gitignore
├── app.db
├── dist/                # Transpilerad JavaScript (build-output)
├── public/              # Frontend-filer
└── src/                 # Källkod i TypeScript
    ├── app.ts
    ├── server.ts
    ├── database/
    │   ├── database.controller.ts
    │   ├── database.statements.ts
    │   └── database.config.ts
    ├── models/
    │   ├── todos.types.ts
    │   └── todos.validation.ts
    └── routes/
        ├── page.route.ts
        └── todo.route.ts
```
## Bibliotek som används
-[Express](https://expressjs.com/en/)
-[Express-validator](https://express-validator.github.io/docs/)
