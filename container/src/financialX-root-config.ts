import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@financialX/mf-home",
  app: (): any => System.import("@financialX/mf-home"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@financialX/mf-login",
  app: (): any => System.import("@financialX/mf-login"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
