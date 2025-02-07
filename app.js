let amigos = [];

function reiniciar() {
    amigos = []; // Limpa o array de amigos
    listaAmigos.innerHTML = ""; // Limpa a lista de amigos na tela
    resultado.innerHTML = ""; // Limpa a lista de resultados
}

// Função para adicionar um amigo
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco

    // Valida a entrada
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.'); 
    } else {
        amigos.push(nomeAmigo); // Atualiza o array de amigos
        inputAmigo.value = '';  // Limpa o campo de entrada   
        atualizarListaAmigos(amigos); // Atualiza a lista na interface
    }
}

// Atualizar a lista de amigos na interface
function atualizarListaAmigos(amigos) {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de adicionar novos elementos

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    // Verifica se há amigos no array
    if (amigos.length === 0) {
        alert('Não há amigos para sortear.');
        return; // Sai da função se não houver amigos  
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Seleciona o amigo correspondente ao índice aleatório
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o amigo sorteado
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
    listaAmigos.innerHTML = '';
 
}