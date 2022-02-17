//Comandos em comum a várias steps

Given(/^que acesso o site$/, () => {
	cy.server()
        cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**')
          .as('postNewtable')

        cy.route('POS', '**/api/1/databases/userdetails/collections/usertable?**')
          .as('postUsertable')  
        
        cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**')
          .as('getNewtable')


        //baseurl + Register.html
    cy.visit('Register.html')

    
});