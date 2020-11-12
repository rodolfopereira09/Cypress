const buildEnv = () => {
    cy.server()
    cy.route({
        method: 'POST',
        url: '/signin',
        response: {
            id: '1000',
            nome: 'Usuario Falso',
            token: 'Uma string muito grande que não deveria ser aceito pelo sistema'
        }
    }).as('signin')

    cy.route({
        method: 'GET',
        url: '/saldo',
        response: [{
            conta_id: 999,
            conta: "Carteira",
            saldo: "100.00"
        },
        {
            conta_id: 9909,
            conta: "Banco",
            saldo: "1000000.00"
        }
    ]
    }).as('saldo')

    cy.route({
        method: 'GET',
        url: '/contas',
        response: [
           {id: 1, nome: 'Carteira', visivel: true, usuario_id: 1},
           {id: 2, nome: 'Banco', visivel: true, usuario_id: 1},
        ]
    }).as('contas')

    cy.route({
        method: 'GET',
        url: '/extrato/**',
        response: [
            {"conta":"Conta para movimentacoes","id":252472,"descricao":"Movimentacao para exclusao","envolvido":"AAA","observacao":null,"tipo":"DESP","data_transacao":"2020-10-05T03:00:00.000Z","data_pagamento":"2020-10-05T03:00:00.000Z","valor":"-1500.00","status":true,"conta_id":279730,"usuario_id":11637,"transferencia_id":null,"parcelamento_id":null},
            {"conta":"Conta com movimentacao","id":252473,"descricao":"Movimentacao de conta","envolvido":"BBB","observacao":null,"tipo":"DESP","data_transacao":"2020-10-05T03:00:00.000Z","data_pagamento":"2020-10-05T03:00:00.000Z","valor":"-1500.00","status":true,"conta_id":279731,"usuario_id":11637,"transferencia_id":null,"parcelamento_id":null},
            {"conta":"Conta para saldo","id":252474,"descricao":"Movimentacao 1, calculo saldo","envolvido":"CCC","observacao":null,"tipo":"REC","data_transacao":"2020-10-05T03:00:00.000Z","data_pagamento":"2020-10-05T03:00:00.000Z","valor":"3500.00","status":false,"conta_id":279732,"usuario_id":11637,"transferencia_id":null,"parcelamento_id":null},
            {"conta":"Conta para saldo","id":252475,"descricao":"Movimentacao 2, calculo saldo","envolvido":"DDD","observacao":null,"tipo":"DESP","data_transacao":"2020-10-05T03:00:00.000Z","data_pagamento":"2020-10-05T03:00:00.000Z","valor":"-1000.00","status":true,"conta_id":279732,"usuario_id":11637,"transferencia_id":null,"parcelamento_id":null},
            {"conta":"Conta para saldo","id":252475,"descricao":"Movimentacao 2, calculo saldo","envolvido":"DDD","observacao":null,"tipo":"DESP","data_transacao":"2020-10-05T03:00:00.000Z","data_pagamento":"2020-10-05T03:00:00.000Z","valor":"-1000.00","status":true,            "conta_id":279732,"usuario_id":11637,"transferencia_id":null,"parcelamento_id":null},
            {"conta":"Conta para saldo","id":252476,"descricao":"Movimentacao 3, calculo saldo","envolvido":"EEE","observacao":null,"tipo":"REC","data_transacao":"2020-10-05T03:00:00.000Z","data_pagamento":"2020-10-05T03:00:00.000Z","valor":"1534.00","status":true,"conta_id":279732,"usuario_id":11637,"transferencia_id":null,"parcelamento_id":null},
            {"conta":"Conta para extrato","id":252477,"descricao":"Desc","envolvido":"FFF","observacao":null,"tipo":"DESP","data_transacao":"2020-10-05T03:00:00.000Z","data_pagamento":"2020-10-05T03:00:00.000Z","valor":"123.00","status":true}
        ]  
    })
}

export default buildEnv