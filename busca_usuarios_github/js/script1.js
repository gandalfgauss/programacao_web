// Axios
// Biblioteca mais utilizada atualmente
// Tanto para parte web em JS
// Quanto para Mobile

// Para instalar
// Acessar site: https://github.com/axios/axios
// copiar <script> em html e colar no html


let btn = document.querySelector("#btn");

let div = document.querySelector("#app");

btn.onclick = function()
{
    //Limpa a div
    div.innerHTML = "";

    //criar span
    let span = document.createElement("span");

    //Cria o txtNome
    let txtNome = "";

    // Recupera o input
    let github_user = document.querySelector("input[name=github_user").value;


    //GET, POST, PUT, DELETE
    axios.get(`https://api.github.com/users/${github_user}`)
        .then(function(response){
            if(response.data.name !== null) // Se o nome for diferente de null 
            {
                txtNome = document.createTextNode(response.data.name);

                let img = document.createElement("img");
                img.setAttribute("src", response.data.avatar_url);
                img.setAttribute("alt", response.data.name);
                img.setAttribute("width", "90px");
                img.setAttribute("height", "90px");

                div.appendChild(img);
            }
            else
            {
                txtNome = document.createTextNode("O usuário não possui nome.");
            }

            // Adiciona o conteudo na div
            span.append(txtNome);
            div.appendChild(span);
        })
        .catch(function(error){
            txtNome = document.createTextNode("Não foi possível realizar a requisição.");
            // Adiciona o conteudo na div
            span.append(txtNome);
            div.appendChild(span);
        })
}

