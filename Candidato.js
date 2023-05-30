class Candidato {
    constructor(id, nome, nota){
        this.id = id;
        this.nome = nome;
	this.nota = nota;
    }
}

const NOTA_CORTE = 6;
var aprovados = [];
var candidatos = [];
candidatos.push(new Candidato(001, 'Fulano', 8));
candidatos.push(new Candidato(002, 'Beltrano', 7.5));
candidatos.push(new Candidato(003, 'Ciclano', 5.9));

msg('Todos os candidatos');
exibeTodos(candidatos);
msg('Valida os aprovados');
validarNotas(candidatos);
msg('Exibe somente os aprovados');
exibeAprovados();

function exibeTodos(lista){
    for(let c in lista){
	console.log(lista[c].id +
      ' '+ lista[c].nome +
      ', nota: '+ lista[c].nota);
    }
}

function exibeAprovados(){
  for(let a in aprovados){
    console.log(aprovados[a]);
  }
}

function validarNotas(lista){
   for(let c in lista){
      if (lista[c].nota > NOTA_CORTE){
         aprovados.push(lista[c]);
      } else {
         delete candidatos[c];
      }
   }
}

function msg(msg){
  console.log(msg);
}
