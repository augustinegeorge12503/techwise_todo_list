describe('To-Do List Application', () => {
    beforeEach(() => {
      cy.visit('http://localhost:80');
    });
  
    it('should add a new to-do item', () => {
      const newItem = 'Learn Cypress';
  
      cy.get('[data-testid="new-todo-input"]').type(`${newItem}{enter}`);
  
      cy.get('[data-testid="todo-item"]').should('contain', newItem);
    });
  
    it('should mark a to-do item as completed', () => {
      const newItem = 'Learn Cypress';

      cy.get('[data-testid="todo-item"]').contains(newItem).parent().find('[data-testid="checkbox"]').check();

      cy.get('[data-testid="todo-item"]').contains(newItem).parent().should('have.class', 'completed');
    });
  
    it('should delete a to-do item', () => {
      const newItem = 'Learn Cypress';

      cy.get('[data-testid="todo-item"]').contains(newItem).parent().find('[data-testid="delete-button"]').click();

      cy.get('[data-testid="todo-item"]').should('not.contain', newItem);
    });
  });
  