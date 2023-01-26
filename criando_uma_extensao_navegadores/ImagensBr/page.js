let imagens = document.querySelectorAll("img");  // vetor de imagens
let quantidade_de_imagens = imagens.length;  // Quantidade de imagens

let body = document.querySelector("body");  // body



for(let imagem of imagens)  // Para cada imagem
{
    let width = imagem.width;  // Recebe sua largura
    let height = imagem.height;  // Recebe sua altura

    imagem.src="https://marcas-logos.net/wp-content/uploads/2020/11/JavaScript-logo.png";  // Muda a imagem
    imagem.width = width; // Altera a largura da imagem para a largura da imagem original
    imagem.height = height;  // Altera a altura da imagem para a imagem original
}

// Inserir texto -> Quantidade de imagens

let paragrafo = document.createElement("h1");
let texto = document.createTextNode("Number of images:"+quantidade_de_imagens);
paragrafo.appendChild(texto);
paragrafo.style.color = "purple";
body.insertBefore(paragrafo, body.childNodes[0]); // Insere no body




