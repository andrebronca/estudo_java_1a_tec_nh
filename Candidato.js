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

function exibeTodos(lista){
    for(let c in lista){
	console.log(c.id +' '+ c.nome +', nota: '+ c.nota);
    }
}

