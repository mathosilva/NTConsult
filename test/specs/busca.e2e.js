const Busca = require('../pageobjects/busca.page')
const dataErro = require('../data/erroBusca.json')

describe('Busca', () => {
    it('Validar visualização da lupa', async () => {
        await Busca.open();
        await expect(Busca.btnLupa).toBeExisting()
    });

    it('Validar busca por Transações', async () => {
        let item = 'transações'
        await Busca.open();
        await Busca.realizarBusca(item)
        await expect(Busca.h1Busca).toHaveTextContaining(`Resultados da busca por: ${item}`)
    });

    it('Validar Busca inválida', async () => {
        let item = 'jdhs'
        await Busca.open();
        await Busca.realizarBusca(item)
        await expect(Busca.h1Erro).toBeExisting()
        await expect(Busca.h1Erro).toHaveTextContaining(dataErro.h1)
        await expect(Busca.pErro).toHaveTextContaining(dataErro.p)
    });
});


