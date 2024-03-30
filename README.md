## Available Commands

In the project folder, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Configs

You can find the configurations file at the `config` folder, inside `src` folder.
Open the `config.ts` file, where you may:

### Change the status update time:

Change the variable `defaultQueryIntervalTime` to a number in seconds multiplied by 1000. Currently it has the value of `15 seconds => 15 * 1000 => 15000`.

### Change the API list

Change the variable `APIEndpoints`. Add a new API name between double quotes to the list, or change a name currently on the list.