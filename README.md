# Working with [Hydrolife](https://hydrolife.co.za)

### Installation steps
1. Clone the repo.
2. Run `npm install`.

### Run the app in the development mode
1. Run `npm start`.
2. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Run tests
1. Run `npm test` to launch the test runner in the interactive watch mode.

### Getting code deployed to test environment
1. Open `package.json` and make sure the homepage is `https://richph9531.github.io/hydrolife/`.
2. Run `npm run build` to build the code.
3. Run `npm run deploy-test` to deploy the code.
4. Wait for build job to complete in Github (~2 mins).
5. Navigate to [test site](https://richph9531.github.io/hydrolife/).
6. Verify.

### Getting code deployed to PRODUCTION
1. Open `package.json` and make sure the homepage is `https://hydrolife.co.za/`.
2. Run `npm run prebuild` to test and build the code.
3. Commit changes and push.
4. Login to Afrihost and navigate to `Git Version Control` >> `Manage` >> `Pull or Deploy`.
5. Click `Update from Remote`.
6. Click `Deploy HEAD commit`.
7. Verify.