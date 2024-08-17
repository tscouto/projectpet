function carregarDados() {
  const petsNaMemoria = JSON.parse(localStorage.getItem('pets'));
  const lista = document
    .getElementById('lista-pets')
    .getElementsByTagName('tbody')[0];

  // Verifica se o elemento lista-pets foi encontrado
  if (!lista) {
    console.error('Elemento com ID "lista-pets" não encontrado.');
    return;
  }

  // Limpa a tabela antes de adicionar os dados
  lista.innerHTML = '';

  // Verifica se há pets armazenados
  if (petsNaMemoria && petsNaMemoria.length > 0) {
    // Utiliza o forEach para iterar sobre cada pet no localStorage
    petsNaMemoria.forEach(pet => {
      // Cria uma nova linha (tr)
      const tr = document.createElement('tr');
      tr.dataset.id = pet.id; // Define o ID da linha para identificação posterior

      // Cria as células da linha (td) e insere os dados
      const tdNome = document.createElement('td');
      tdNome.innerText = pet.nome;

      const tdDescricao = document.createElement('td');
      tdDescricao.innerText = pet.descricao;

      const tdTipo = document.createElement('td');
      tdTipo.innerText = pet.tipo;

      const tdData = document.createElement('td');
      const dataCriacao = new Date(pet.id); // Usando o ID como data de criação
      tdData.innerText = dataCriacao.toISOString().split('T')[0];

      const tdAcoes = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.innerHTML = '🗑️ Delete';
      deleteButton.onclick = () => deletar(pet.id); // Configura a função de exclusão

      tdAcoes.appendChild(deleteButton);

      // Adiciona as células à linha
      tr.appendChild(tdNome);
      tr.appendChild(tdDescricao);
      tr.appendChild(tdTipo);
      tr.appendChild(tdData);
      tr.appendChild(tdAcoes);

      // Adiciona a linha à tabela
      lista.appendChild(tr);
    });
  }
}

function deletar(idRecebido) {
  // 1 - Ir no local e buscar o array de pets
  const petsAtuaisNaMemoria = JSON.parse(localStorage.getItem('pets'));
  const petsFiltrados = petsAtuaisNaMemoria.filter(
    item => item.id !== idRecebido
  );

  localStorage.setItem('pets', JSON.stringify(petsFiltrados));

  // Atualiza a tabela após a exclusão
  carregarDados();
}

// Espera o DOM carregar antes de executar a função
document.addEventListener('DOMContentLoaded', carregarDados);
