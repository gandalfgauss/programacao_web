function muda_imagem()
{
    let imagem = document.querySelector("img");
    const w = imagem.width;
    const h = imagem.height;

    if(imagem.src.indexOf("html5") == -1) // Se nao achou html5 no caminho
    {
        imagem.src = "html5.png"; // muda para html
        imagem.alt = "Logo do HTML5";
        
    }
    else
    {
        imagem.src = "css3.png"; // caso contrario muda para imagem css
        imagem.alt = "Logo do CSS3";
    }

    imagem.width = w;
    imagem.height = h;
}


let botao = document.querySelector("button");
botao.addEventListener("click", muda_imagem)
