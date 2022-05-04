# reach-sample-react-app

This is a sample React app that uses Reach to generate, deploy, and interact with a smart contract on Algorand.

Inspired by https://github.com/reach-sh/reach-sample-react-app.

Prerequisites:

* Install the MyAlgoConnect wallet extension on both [Chrome](https://www.google.com/chrome/) and [Firefox](https://www.mozilla.org/en-US/firefox/).
* Switch to testnet.
* Get some ALGO at a faucet for both accounts.

To see the demo in action:

```bash
npm install   # this may take 5-15 mins to install
npm run start # this may take a minute to compile
```

Open http://localhost:3000 in both Firefox and Chrome;
run the app as Alice on one, and Bob on the other.

If you modify `src/index.rsh`, you must run the `compile-rsh` script so that React will pick up the changes:

```bash
npm run compile-rsh
```
