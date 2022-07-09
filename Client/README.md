# CLIENT INSTRUCTIONS

## Requirements

- Node v16.15.1

## Steps

1. Open the `Client` directory inside a terminal.
2. Execute `npm install --force`.
3. Execute `npm run serve`.
4. Open Google Chrome and navigate to `http://localhost:8080/`

- After the preceding steps a development server will host the front-end logic on port 8080.

## Errors

- If the port is already occupied run command `npx kill-port 8080` on any terminal.
- The current `package.json` is experiencing build issues related to the vuetify library due to an npm update. Ignore the warnings issued by npm after `npm install --force` for the time being.

## Notes

- The current Client abstraction is a prototype designed to test our server's logic using the Vuejs framework.
- The client successfully sends an HTTP request.
- The server successfully receives the HTTP request with correct data.
- The current design illustrates how to properly assign variables with user input. The related logic is implemented within `../Client/components/Shawn_Form.vue`.

## USAGE

![Example](https://i.imgur.com/f5tJJ0z.gif)
