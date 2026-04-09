const btnAdicionar = document.querySelector('.btn-adicionar');

if (btnAdicionar) {
    btnAdicionar.addEventListener('click', () => {
        const produto = document.getElementById('produto').value;
        const tamanho = document.querySelector('select').value;
        
        if (produto === "") {
            alert("Por favor, selecione ou digite um produto.");
            return;
        }

        // Simulação: Adiciona visualmente um novo item na lista de resumo
        const listaItens = document.querySelector('.lista-itens');
        const novoItem = document.createElement('div');
        novoItem.className = 'item-carrinho';
        novoItem.innerHTML = `
            <span>1x ${produto} (${tamanho})</span>
            <strong>R$ 59,90</strong>
        `;
        listaItens.appendChild(novoItem);
        
        console.log(`Produto ${produto} adicionado com sucesso!`);
    });
}