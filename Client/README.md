# CLIENT INSTRUCTIONS

## Requirements

- Node v16.15.1

## Steps

1. Open the client directory inside a terminal.
2. Execute `npm install`.
3. Execute `npm run dev`.
4. Open Google Chrome and navigate to `http://localhost:3000/`

- After the preceding steps a development server will host the front-end logic on port 3000.

## Errors

- If the port is already occupied run command `npx kill-port 3000` on any terminal.
- If you receive the following response after sending a hitting submit then ensure a server instance is running and listening on port 5000.

```
Error occurred while trying to proxy: localhost:3000/api/user_data
```

## Notes

- The current system setup is a true [client / server model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model). The server and client's resoruces are completely indepedent from each other and only interact via HTTP requests.
