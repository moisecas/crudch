describe('Agregar Referencia', () => {
    it('Agregar una nueva referencia', () => {
      cy.visit('/agregar-referencia'); // visitar la página de agregar referencia
  
      // seleccionar el tipo de referencia
      cy.get('#tipo-referencia').select('Amigo');
  
      // ingresar los datos de la nueva referencia
      cy.get('#nombre1').type('Juan');
      cy.get('#nombre2').type('Pablo');
      cy.get('#apellido1').type('Rodriguez');
      cy.get('#apellido2').type('Garcia');
      cy.get('#parentesco').select('Hermano');
      cy.get('#celular').type('3123456789');
      cy.get('#telefono-fijo').type('25874150');
  
      // hacer clic en el botón guardar
      cy.get('#guardar').click();
  
      // verificar que la referencia se haya guardado correctamente
      cy.get('.mensaje-exito').contains('Registro guardado exitosamente');
    });
  });
  