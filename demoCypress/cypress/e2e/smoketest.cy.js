describe("conjunto de pruebas", () => {
    it("validar pagina de inicio", () => {
        cy.visit("http://zero.webappsecurity.com/") //abre la pagina
        cy.get('.active > img').should('be.visible') //busca el elemento img y verifica que sea visible
        cy.get('#online_banking_features > :nth-child(1) > h4').contains('Online Banking') //busca el elemento h4 y verifica que contenga el texto Online Banking
    })

    it("transacción, transferencia", () => { //esto es una funcion de cypress que se ejecuta cuando se corre el test 
        cy.visit("http://zero.webappsecurity.com/")
        cy.get('#signin_button').click() //busca el elemento signin_button y hace click
        cy.get('#user_login').type('username') //busca el elemento user_login y escribe username
        cy.get('#user_password').type('password') //busca el elemento user_password y escribe password
        cy.get('#user_remember_me').click() //busca el elemento user_remember_me y hace click
        cy.get('.btn').click() //busca el elemento btn y hace click
        cy.get('#transfer_funds_tab > a').click() //busca el elemento transfer_funds_tab y hace click
        cy.get('#tf_fromAccountId').select('2') //busca el elemento tf_fromAccountId y selecciona la opcion 2
        cy.get('#tf_toAccountId').select('3') //busca el elemento tf_toAccountId y selecciona la opcion 3 
        cy.get('#tf_amount').type('500') //busca el elemento tf_amount y escribe 500
        cy.get('#tf_description').type('prueba') //busca el elemento tf_description y escribe prueba
        cy.get('#btn_submit').click() //busca el elemento btn_submit y hace click
        cy.get('#btn_submit').click() //busca el elemento btn_submit y hace click
        cy.get('.alert').contains('You successfully submitted your transaction.') //busca el elemento alert y verifica que contenga el texto The funds were successfully transferred.
    })

    it.only("validación grafico", () => { //only es para que solo se ejecute este test
        cy.visit("http://zero.webappsecurity.com/")
        cy.get('#signin_button').click() //busca el elemento signin_button y hace click
        cy.get('#user_login').type('username') //busca el elemento user_login y escribe username
        cy.get('#user_password').type('password') //busca el elemento user_password y escribe password
        cy.get('#user_remember_me').click() //busca el elemento user_remember_me y hace click
        cy.get('.btn').click()
        cy.get('#money_map_tab > a').click() //busca el elemento money_map_tab y hace click
        cy.get('#ext-sprite-1276 > tspan').should('be.visible') //busca el elemento ext-sprite-1276 y verifica que sea visible
        cy.get('#ext-sprite-1275 > tspan').should('be.visible') //busca el elemento ext-sprite-1275 y verifica que sea visible
        cy.get('#ext-sprite-1151').click() //busca el elemento ext-sprite-1151 y hace click
    })

})