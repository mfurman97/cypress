
describe("Log in - with using correct user", () => {
  it("Visit cda.pl", () => {
    cy.login();
  });

  it("Check if user is log-in", () => {
    const userName = cy.get('#topusername > span');
    userName.should("be.visible");
    userName.click();
  });

});