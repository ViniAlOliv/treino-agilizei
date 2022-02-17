#language: pt
Feature: Listagem

    Como usuário, desejo desejo acessar a listagem
    Para que possa visualizar meus dados de cadastro

Scenario: Listagem sem registros
    Dado não possui registros
    Quando acessar a listagem
    Entao devo visualizar a listagem vazia


Scenario: Listagem com apenas um registro
    Dado possui apenas um registro
    Quando acessar a listagem
    Entao devo visualizar a listagem com apenas um registro