describe("Testing our form inputs", function () {
    beforeEach(function () {
        cy.visit("http://localhost:3000/Form");
    });
    it("Adds text to inputs and submits form", function () {
        cy.get('input[name="name"]').type("Liam").should("have.value", "Liam");
        cy.get('input[name="topping"]').click();
        cy.get('input[name="topping2"]').click();

        cy.get("button").click();
    });
});
