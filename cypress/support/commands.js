// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Keep localStorage data
let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorageCache", () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorageCache", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

Cypress.Commands.add("clearLocalStorage", () => {
  Object.keys(localStorage).forEach((key) => {
    localStorage.removeItem(key);
  });
});

// Keep sessionStorage data
let SESSION_STORAGE_MEMORY = {};

Cypress.Commands.add("saveSessionStorageCache", () => {
  Object.keys(sessionStorage).forEach((key) => {
    SESSION_STORAGE_MEMORY[key] = sessionStorage[key];
  });
});

Cypress.Commands.add("restoreSessionStorageCache", () => {
  Object.keys(SESSION_STORAGE_MEMORY).forEach((key) => {
    sessionStorage.setItem(key, SESSION_STORAGE_MEMORY[key]);
  });
});

Cypress.Commands.add("clearSessionStorage", () => {
  Object.keys(sessionStorage).forEach((key) => {
    sessionStorage.removeItem(key);
  });
});

// Keep cookies data
Cypress.Commands.add("preserveCookies", () => {
  Cypress.Cookies.preserveOnce("DOCPLANNER_SESSION");
});

// Additional commands
Cypress.Commands.add("login", () => {
  cy.visit("http://www.cda.pl");
  cy.get('[class="loginuser"]').click();
  cy.get('input#username.usernameLogin').type(Cypress.env("loginCda"));
  cy.get('input#password.passwordLogin').type(Cypress.env("passwordCda"));
  cy.get('#login_submit').contains("Zaloguj").click;
 

});

