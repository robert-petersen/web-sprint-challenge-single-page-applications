
describe("Text input, topping selections, and submit functionality", ()=>{
  
  beforeEach(()=>{
    cy.visit("http://localhost:3000/");
    cy.get("[href='/order']").click();
  });

  const firstNameInput = () => cy.get('input[name="first_name"]');
  const lastNameInput = () => cy.get('input[name="last_name"]');
  const toppingPepperoni = () => cy.get('input[name="pepperoni"]');
  const toppingsausage = () => cy.get('input[name="sausage"]');
  // ^ how to select checkboxes?
  // do I need to select them all
  // would have tried / researched but I ran out of time
  const sizeInput = () => cy.get('select[name="size"]');
  const submitButton = () => cy.get("#submitButton");

  it("can type in first name input", () => {
    firstNameInput()
      .should("have.value", "")
      .type("Rob")
      .should("have.value", "Rob");
  });

  it("can type in last name input", () => {
    lastNameInput()
      .should("have.value", "")
      .type("Rob")
      .should("have.value", "Rob");
  });

  it("can select multiple toppings", () => {
    toppingPepperoni()
      .check()
      .should("be.checked");
      
  });

  it("can submit order", () => {
    cy.contains("bob").should("not.exist");
    firstNameInput().type("bob");
    lastNameInput().type("bob");
    sizeInput().should("exist");
    sizeInput().select("Small"); 
      // how to check selections? // how to check check boxes?
    submitButton().click();
    // check if it exists

  })





})