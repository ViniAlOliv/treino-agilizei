/// <reference types = "cypress" />

let Chance = require('chance');
let chance = new Chance();

context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {
        cy.server()
        cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**')
          .as('postNewtable')

        cy.route('POS', '**/api/1/databases/userdetails/collections/usertable?**')
          .as('postUsertable')  
        
        cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**')
          .as('getNewtable')


        //baseurl + Register.html
        cy.visit('Register.html')
        cy.get('input[placeholder="First Name"]').type(chance.first())
        cy.get('input[ng-model="LastName"]').type(chance.last())
        cy.get('input[ng-model^="Email"]').type(chance.email())
        cy.get('input[ng-model^="Phone"]').type(chance.phone({ formatted: false}))
        
        //checks
        cy.get('input[value="Male"]').check()
        cy.get('input[type="checkbox"]').check('Cricket')
        cy.get('input[type="checkbox"]').check('Hockey')

        //Select e Select 2 (Combos)
        cy.get('select#Skills').select('Javascript')
        cy.get('select#countries').select('Select Country')
        cy.get('select#country').select('Australia' , { force: true })

        cy.get('select#yearbox').select('1990');
        cy.get('select[ng-model^=month]').select('March');
        cy.get('select[id=daybox]').select('2')

        cy.get('#firstpassword').type('eita');
        cy.get('#secondpassword').type('eita');

        cy.get('input#imagesrc').attachFile('imagem-foto.png')

        cy.get('button#submitbtn').click()

        
        //Rotas
        //cy.wait('@postNewtable').then((resNewtable) => {
        //    console.log(resNewtable.status)
        //    cy.log(resNewtable.status)
        //})
        cy.wait('@postNewtable').then((resNewtable) => {
            expect(resNewtable.status).to.eq(200)
        })

        cy.wait('@postNewtable').then((resUsertable) => {
            expect(resUsertable.status).to.eq(200)
        })

        cy.wait('@getNewtable').then((resNewtable) => {
            expect(resNewtable.status).to.eq(200)
        })

        cy.url().should('contain' , 'WebTable')
    });    
});

//input[placeholder="First Name"]
//input[ng-model="LastName"]
//input[ng-model^="Email"]
//input[ng-model^="Phone"]
//input[value="Male"]
//input[value="FeMale"]
//select#Skills
//select#countries
//select#country
//select#daybox
//select#yearbox
//select[ng-model^=month]
//select[id=daybox]