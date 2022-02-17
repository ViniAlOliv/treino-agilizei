// Implementação dos passos descritos nas features
/// <reference types = "cypress" />

let Chance = require('chance');
let chance = new Chance();

Given(/^não possui registros$/, () => {
	cy.server()
    cy.route({
        method: 'GET',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: 'fixture:webtable-get-vazio'
    }).as('getNewtable')
});

Given(/^possui apenas um registro$/, () => {
	cy.server()
    cy.route({
        method: 'GET',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: 'fixture:webtable-get-unico'
    })
});

When(/^acessar a listagem$/, () => {
	cy.visit('WebTable.html')
});

Then(/^devo visualizar a listagem vazia$/, () => {
	cy.get('div[role=row]').should('have.length', 1)
});

Then(/^devo visualizar a listagem com apenas um registro$/, () => {
	cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone')
    cy.get('@gridCellPhone').should('contain.text', '3129876543')
});


