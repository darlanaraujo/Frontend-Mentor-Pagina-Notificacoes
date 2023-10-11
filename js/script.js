// Lista dados Array
const dados = [
    {
        'status': '',
        'perfil': './assets/img/avatar-mark-webber.webp',
        'usuario': 'Mark Webber',
        'acao': 'reacted to your recent post',
        'tag': '',
        'link': 'My first tournament today!',
        'tempo': '1m ago',
        'comentario': '',
        'foto': ''
    },
    {
        'status': '',
        'perfil': './assets/img/avatar-angela-gray.webp',
        'usuario': 'Angela Gray',
        'acao': 'followed you',
        'tag': '',
        'link': '',
        'tempo': '5m ago',
        'comentario': '',
        'foto': ''
    },
    {
        'status': '',
        'perfil': './assets/img/avatar-jacob-thompson.webp',
        'usuario': 'Jacob Thompson',
        'acao': 'has joined your group',
        'tag': 'Chess Club',
        'link': '',
        'tempo': '1 day ago',
        'comentario': '',
        'foto': ''
    },
    {
        'status': 'checked',
        'perfil': './assets/img/avatar-rizky-hasanuddin.webp',
        'usuario': 'Rizky Hasanuddin',
        'acao': 'sent you a private message',
        'tag': '',
        'link': '',
        'tempo': '5 day ago',
        'comentario': 'Hello, thanks for setting up the Chess Club. I ve been a member for a few weeks now and Im already having lots of fun and improcing my game.',
        'foto': ''
    },
    {
        'status': 'checked',
        'perfil': './assets/img/avatar-kimberly-smith.webp',
        'usuario': 'Kimberly Smith',
        'acao': 'commented on your picture',
        'tag': '',
        'link': '',
        'tempo': '1 weeks ago',
        'comentario': '',
        'foto': './assets/img/image-chess.webp'
    },
    {
        'status': 'checked',
        'perfil': './assets/img/avatar-nathan-peterson.webp',
        'usuario': 'Nathan Peterson',
        'acao': 'reacted to your recent post',
        'tag': '',
        'link': '5 end-game strategies to increase your win rate',
        'tempo': '2 weeks ago',
        'comentario': '',
        'foto': ''
    },
    {
        'status': 'checked',
        'perfil': './assets/img/avatar-anna-kim.webp',
        'usuario': 'Anna Kim',
        'acao': 'left the group',
        'tag': 'Chess Club',
        'link': '',
        'tempo': '2 weeks ago',
        'comentario': '',
        'foto': ''
    },

]

// Elementos DOM
const listaNotificacoes = document.querySelector('#listaNotificacoes');

const criarElemento = (tag, classe, atributo = null, tipo = null) => {
    const elemento = document.createElement(tag);
    elemento.classList.add(classe);
    elemento.setAttribute(atributo, tipo);

    return elemento;
};

const criarCheck = (status) => {
    const atributo = status;
    const check = document.createElement('input');

    check.setAttribute('type', 'checkbox');
    // check.classList.add('check-notificacao');

    if(atributo === 'checked') {
        check.setAttribute('checked', '');
    }

    return check;
};

const criarEstrutura = () => {
    dados.forEach((item, index) => {
        const notificacao = criarElemento('div', 'notificacao')
        const input = criarCheck(item.status);
        input.setAttribute('id', `checkNotificacao${index}`)
        const label = criarElemento('label', 'label-notificacao', 'for', `checkNotificacao${index}`);

        
        // Insere os elementos filhos no elemento notificacao
        notificacao.appendChild(input);
        notificacao.appendChild(label);
        
        // Insere os elementos filhos no elemento label
        const perfil = criarElemento('img', 'perfil', 'src', item.perfil);
        const conteudo = criarElemento('div', 'conteudo')
        
        label.appendChild(perfil);
        label.appendChild(conteudo);

        // Insere os elementos filhos no elemento conteudo
        const linha = criarElemento('div', 'linha');
        
        conteudo.appendChild(linha);
        
        // Insere os elementos filhos no elemento linha
        const usuario = criarElemento('a', 'usuario', 'href', '#');
        usuario.innerHTML = item.usuario;

        const acao = criarElemento('p', 'acao');
        acao.innerHTML = item.acao;

        
        linha.appendChild(usuario);
        linha.appendChild(acao);

        if(!item.link == ''){
            const link = criarElemento('a', 'link', 'href', '#');
            link.innerHTML = item.link;

            linha.appendChild(link);
        } else if(!item.tag == '') {
            const tag = criarElemento('a', 'tag', 'href', '#');
            tag.innerHTML = item.tag;

            linha.appendChild(tag);
        }

        // Insere todos os elementos no elemento principal
        listaNotificacoes.appendChild(notificacao);
    });
};

criarEstrutura();