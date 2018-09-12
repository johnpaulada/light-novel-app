# Light Novel App

## Temporary Instructions

1. Install [json-server](https://github.com/typicode/json-server) to create a
   temporary server.
2. Copy `temp-server/sample-db.json` to `temp-server/db.json`.
3. Run
   `json-server --watch temp-server/db.json --port 4000 --routes temp-server/routes.json`
   to start the server on port `4000`.
4. Open another terminal window and go to the `client` folder.
5. Run `yarn` to install dependencies.
6. Run `yarn start` to start the server on port `3000`.
