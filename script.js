let nomeDoBanco = 'guiaPreferencia/'
let lista = []
obterLista()
function marcarItem(item) {
  let idDoItem = item.id;

  firebase.database().ref(nomeDoBanco + item.id).set({
    marcado: true,
    id: idDoItem
  });

  let excluirItem;
  let itemParaSerExcluido = item.id.split('-')
  if (item.id.includes("sim")) {
    excluirItem = itemParaSerExcluido[0] + '-nao';
  } else {
    excluirItem = itemParaSerExcluido[0] + '-sim';
  }

  firebase.database().ref(nomeDoBanco + excluirItem).set(null);
}

function obterLista() {
  firebase.database().ref(nomeDoBanco).once('value').then((snapshot) => {
    lista = (snapshot.val() && snapshot.val());
  })
}

