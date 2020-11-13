describe("Text input, topping selections, and submit functionality", ()=>{
  beforeEach(()=>{
    crypto.visit("http://localhost:3000/");
  });

  const firstNameInput = () => cy.get('input[name="first_name"]');
  const lastNameInput = () => cy.get('input[name="last_name"]');
  const toppingSelection = () => cy.get('input[name="size"]');
  // ^ how to select checkboxes?
  // do I need to select them all
  // would have tried / researched but I ran out of time
  const sizeInput = () => cy.get('input[name="size"]');
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
    toppingSelection()
      
  });

  it("can submit order", () => {
    firstNameInput().type("bob");
    lastNameInput().type("bob");
    sizeInput() // how to check selections?
    toppingSelection() // how to check check boxes?
    submitButton().click();
    // check if it exists

  })





})