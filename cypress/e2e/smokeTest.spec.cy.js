describe('TodoMVC', () => {
    it('Test home activa', () => {
      cy.visit('https://todomvc.com/examples/react/dist/#/');
  
       //Verificar que la aplicación carga mostrando el elemento correcto
      cy.contains('todos').should('be.visible');
    });
  
    it('should allow adding a new todo', () => {
      cy.visit('https://todomvc.com/examples/react/dist/#/');
      cy.get('[data-testid="text-input"]').type("Tarea 1{enter}")
      cy.contains('Tarea 1').should('be.visible');
    });

    it('click en la tarea', () => {
      cy.visit('https://todomvc.com/examples/react/dist/#/');
      cy.get('[data-testid="text-input"]').type("Tarea 1{enter}")
      cy.get('[data-testid="todo-item-toggle"]').click()
    });
  });