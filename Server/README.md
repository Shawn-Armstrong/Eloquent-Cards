# SERVER INSTRUCTIONS

## Requirements

- Node v16.15.1

## Steps

1. Open the server directory inside a terminal.
2. Execute `npm install`.
3. Execute `node app.js`

- After the preceding steps the server will be listening for HTTP request messages on port 5000.
- See cleint's `README.md` for instructions on sending a request.

## Errors

- If the port is already occupied run command `npx kill-port 5000` on any terminal.

## Notes

- The current Server abstraction is just a prototype. Ideally the generation functionality will be partitioned into its own JavaScript file and each template will be handled independently inside its own function.
