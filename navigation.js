// Inicializa os ícones da biblioteca Lucide
lucide.createIcons();

function showSection(sectionId) {
    // 1. Seleciona todas as seções de conteúdo do sistema
    const sections = document.querySelectorAll('.content-section');
    
    // 2. Esconde todas elas
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // 3. Mostra apenas a seção que o usuário clicou
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    // 4. Atualiza o título no topo da página (Header)
    const titles = {
        'vendas': 'Registro de Vendas',
        'estoque': 'Controle de Estoque (Camisetas)',
        'clientes': 'Cadastro de Clientes e Vendedores',
        'trocas': 'Gestão de Trocas e Devoluções'
    };
    document.getElementById('section-title').innerText = titles[sectionId];

    // 5. Destaca visualmente o botão clicado na Sidebar
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
}