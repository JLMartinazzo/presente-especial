const botNao = document.getElementById("nao");
const botSim = document.getElementById("sim");
const seta = document.getElementById("seta");
const seta2 = document.getElementById("seta2");

const tela1 = document.getElementById("tela1");
const tela2 = document.getElementById("tela2");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalLegenda = document.getElementById("modal-legenda");
const fechar = document.querySelector(".fechar");

const fotos = document.querySelectorAll(".foto img");

const imagemLegenda = document.getElementById("img-legenda")

var quantNao = 0;

//quando a tela é carrgada
window.onload = () => {
    const simRect = botSim.getBoundingClientRect();

    seta2.style.right = `${simRect.right +10}px`
    seta.style.left = `${simRect.right +9}px`
    botNao.style.top = `${simRect.top + 75}px`;
}
//função fugir 
botNao.addEventListener("mouseover", () => {

    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;

    const maxX = larguraTela - botNao.offsetWidth;
    const maxY = alturaTela - botNao.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    botNao.style.left = `${randomX}px`;
    botNao.style.top = `${randomY}px`;

    quantNao++;

    //adicionar a setinha
    if (quantNao >= 10) {
        seta.classList.remove("hidden");
        seta2.classList.remove("hidden")
    }
})

//caso esteja no mobile
botNao.addEventListener("touchstart", () => {
    botNao.dispatchEvent(new Event("mouseover"));
});


//"trocar" de tela quando clicar no sim
botSim.addEventListener("click", ()=>{
    tela1.classList.add("hidden");
    tela2.classList.remove("hidden");

    soltarConfete();
})

//teste se da para clicar
botNao.addEventListener("click", () => {
    console.log("click")
});

//confete quando sim
function soltarConfete() {
    const cores = ["#b7e4c7", "#fbc4d9", "#ffd6a5", "#cdb4db"];

    for (let i = 0; i < 240; i++) {
        const confete = document.createElement("div");
        confete.classList.add("confete");

        confete.style.left = Math.random() * window.innerWidth + "px";
        confete.style.backgroundColor =
            cores[Math.floor(Math.random() * cores.length)];
        confete.style.animationDuration = (Math.random() * 2 + 2) + "s";

        document.body.appendChild(confete);

        // remover depois da animação
        setTimeout(() => {
            confete.remove();
        }, 4000);
    }
}

//aparecer o modal quando clicar na foto
fotos.forEach((img) => {
    img.addEventListener("click", () => {
        modalImg.src = img.src;

        if(img.src == "http://127.0.0.1:5500/fotos/foto2.jpg"){
            imagemLegenda.textContent = "09/11/25 nós comendo no mamute"

        }else if(img.src == "http://127.0.0.1:5500/fotos/foto1.jpg"){
            imagemLegenda.textContent = "15/11/25 show do Gio juntos"

        }else if(img.src == "http://127.0.0.1:5500/fotos/foto3.jpg"){
            imagemLegenda.textContent = "26/09/25 juntos no sheik"

        }else if(img.src == "http://127.0.0.1:5500/fotos/foto4.jpg"){
            imagemLegenda.textContent = "13/09/25 o dia mais feliz da minnha vida"

        }else if(img.src == "http://127.0.0.1:5500/fotos/foto5.jpg"){
            imagemLegenda.textContent = "23/11/25 cataratas park hotel juntos"

        }else if(img.src == "http://127.0.0.1:5500/fotos/foto6.jpg"){
            imagemLegenda.textContent = "05/10/25 fomos ao DNJ"

        }else if(img.src == "http://127.0.0.1:5500/fotos/foto7.jpg"){
            imagemLegenda.textContent = "03/08/25 nosso segundo encontro no levelUp"

        }else if(img.src == "http://127.0.0.1:5500/fotos/foto8.jpg"){
            imagemLegenda.textContent = "01/02/26 fomos no aquaFoz"

        }else if(img.src == "http://127.0.0.1:5500/fotos/foto9.jpg"){
            imagemLegenda.textContent = "10/01/26 sua festa de aniversário"

        }

        modalLegenda.textContent = img.nextElementSibling.textContent;

        modal.classList.remove("hidden");
    });
});

//fechar o modal
fechar.addEventListener("click", () => {
    modal.classList.add("hidden");
});

//feecha clicando fora da imagem
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});
