// 1) Temos que referenciar o input, pois o usuario informa o texto nele

// Pegar input pelo name
let input = document.querySelector("input[name=tarefa]")



// 2) Temos que referenciar o button, pois precisamos colocar o evento de adicionar

//Pegar button pelo id -> botao

let btn = document.querySelector("#botao");

// 3) Temos que referenciar a lista de tarefas, para o usuario poder apagar

// Pegar lista pelo id -> lista
let lista = document.querySelector("#lista");


// recupera o card
let card = document.querySelector(".card");

//Redenrizar tarefas

//let tarefas = ["Estudar JS", "Estudar React Native"];
//Caso o banco de dados nao existir coloque []
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []; // Iniciamente nao tem tarefas

function rendenrizar_tarefas()
{
    // Limpar conteudo da lista antes de redenrizar novamente a tela
    lista.innerHTML = "";

    //E atualizar a tela
    for(let tarefa of tarefas)
    {
        //Criar item da lista
        let itemLista = document.createElement("li");

         //Adicionar evento de clique no item da lista
         itemLista.onclick = function(){
            deletarTarefa(this);
        }

        // Adicionar classe ao item da lista
        itemLista.setAttribute("class", "list-group-item list-group-item-action");

        //Criar um elemento texto, com o texto da tarefa
        let itemTexto = document.createTextNode(tarefa);

        //Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);

        //Adicionar o item da lista na lista
        lista.appendChild(itemLista);

    }
}

rendenrizar_tarefas();


// Inserindo dados

// Escutar botao ao clicar
btn.onclick = function()
{
    // Remover todos os spans se tiver
    removerSpans();
    

    // Ler do input
    let novaTarefa = input.value;

    // Conferir se a Tarefa nao esta vazia
    if(novaTarefa !== "")
    {
        // Adicionar nas tarefas
        tarefas.push(novaTarefa);


        // Redenrizar tela
        rendenrizar_tarefas();

        //Limpa input
        input.value = "";

        // Salvar no banco de dados
        salvarDadosNoStorage();
    }
    else // Caso o usuario insira errado imprime alerta de erro
    {

        // Crio um elemento span
        let span = document.createElement("span");

        // Estilizo ele com o Bootstrap ao atribuir ma classe 
        span.setAttribute("class", "alert alert-warning");

        //Crio a menssagem
        let msg = document.createTextNode("Você precisa informa a tarefa!");

        // Adiciono a mensagem ao span
        span.appendChild(msg);

        card.appendChild(span);
    }
}


function removerSpans()
{
    // Busca todos os spans
    let spans = document.querySelectorAll("span");

    for(let span of spans)
    {
        card.removeChild(span);
    }

}

// Removendo dados
// Quando clicar em um item da lista ele deve ser removido

let itens_da_lista



function deletarTarefa(tar)
{
    // Remove a tarefa do array(vetor)
    tarefas.splice(tarefas.indexOf(tar.textContent), 1);

    // Depois manda atualizar a tela
    rendenrizar_tarefas();

    //Salva os novos dados no banco de dados
    salvarDadosNoStorage();

}

// Salvar dados no banco de dados do navegador (Storage)
// Podemos usar para gravar e ler dados de forma offline
// Banco de dados armazena dados no formato chave e valor

function salvarDadosNoStorage()
{
    // Todo navegador web possui essa funcionalidade

    // Recebe: nome_do_banco, dados

    // JSON.stringify(tarefas) se tarefas = [2,4] -> '[2,4]'
    localStorage.setItem("tarefas", JSON.stringify(tarefas));


}

