describe("Text input, topping selections, and submit functionality", ()=>{
  beforeEach(()=>{
    crypto.visit("http://localhost:3000/");
  });

  const firstNameInput = () => cy.get('input[name="first_name"]');
  const lastNameInput = () => cy.get('input[name="last_name"]');
  const toppingSelection = () => cy.get('input[name="size"]');
  const sizeInput = () => cy.get('input[name="size"]');
  const submitButton = () => cy.get("#submitButton");

  it("can type in input", () => {
    firstNameInput()
      .should("have.value", "")
      .type("Rob")
      .should("have.value", "Rob");
  });

  it("can select multiple toppings", () => {
    toppingSelection()
      .should("have.value")
  });

  it("can submit order", () => {

  })





})