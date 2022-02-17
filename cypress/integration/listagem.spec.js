/// <reference types="cypress" />

context('Listagem', () => {
    it('Listagem sem registros', () => {
        //'GET', '**/api/1/databases/userdetails/collections/newtable?**'
        cy.server()
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: 'fixture:webtable-get-vazio'
        }).as('getNewtable')
        
        cy.visit('WebTable.html')

        cy.get('div[role=row]').should('have.length', 1)
    })

    it('Listagem com registros', () => {
        cy.server()
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: 'fixture:webtable-get-unico'
        })
        
        cy.visit('WebTable.html')

        cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone')
        cy.get('@gridCellPhone').should('contain.text', '3129876543')
    });
});