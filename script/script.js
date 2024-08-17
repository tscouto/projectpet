function adicionarPet(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value;
  const descricao = document.getElementById('nome').value;
  const foto = document.getElementById('nome').value;
  const tipo = document.getElementById('tipo').value;

  if (nome === '') {
    // alert("Nome é obrigatório")
    document.getElementById('nome').style.borderColor = 'red';
    document.getElementById('nome').style.borderWidth = '2px';
    document.getElementById('error-nome').innerText = 'Nome é obrigatório';
    document.getElementById('error-nome').style.color = 'red';
  } else {
    document.getElementById('nome').style.borderColor = '';
    document.getElementById('error-nome').innerText = '';
    document.getElementById('error-nome').style.color = '';
  }

  if (foto === '') {
    document.getElementById('foto').style.borderWidth = '2px';
    document.getElementById('foto').style.borderColor = 'red';
    document.getElementById('error-foto').innerText =
      'Foto do Pet é obrigatória';
    document.getElementById('error-foto').style.color = 'red';
  } else {
    document.getElementById('foto').style.borderColor = '';
    document.getElementById('error-foto').innerText = '';
    document.getElementById('error-foto').style.color = '';
  }

  if (descricao === '') {
    document.getElementById('descricao').style.borderWidth = '2px';
    document.getElementById('descricao').style.borderColor = 'red';
    document.getElementById('error-descricao').innerText =
      'Descricao do Pet é obrigatória';
    document.getElementById('error-descricao').style.color = 'red';
  } else {
    document.getElementById('descricao').style.borderColor = '';
    document.getElementById('error-descricao').innerText = '';
    document.getElementById('error-descricao').style.color = '';
  }

  if (tipo === '') {
    document.getElementById('tipo').style.borderWidth = '2px';
    document.getElementById('tipo').style.borderColor = 'red';
    document.getElementById('error-tipo').innerText =
      'Tipo do Pet é obrigatória';
    document.getElementById('error-tipo').style.color = 'red';
  } else {
    document.getElementById('tipo').style.borderColor = '';
    document.getElementById('error-tipo').innerText = '';
    document.getElementById('error-tipo').style.color = '';
  }

  if (nome && foto && descricao && tipo) {
    const pet = {
      id: Date.now(),
      foto: foto,
      nome: nome,
      descricao: descricao,
      tipo: tipo,
    };

    let listaContatos = JSON.parse(localStorage.getItem('pets'));
    if (listaContatos === null) listaContatos = [];
    listaContatos.push(pet);
    localStorage.setItem('pets', JSON.stringify(listaContatos));
    document.getElementById('form-pet').reset();
    console.log(pet);
  }
}

document.addEventListener('submit', adicionarPet);
