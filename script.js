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
    botNao.style.top = `${simRect.top + 75}px`;
}

function posicionarSetas() {
    const simRect = botSim.getBoundingClientRect();
    const buttonsRect = document.querySelector(".buttons").getBoundingClientRect();

    const offsetLeft = simRect.left - buttonsRect.left;
    const offsetRight = buttonsRect.right - simRect.right;

    seta2.style.left = `${offsetLeft - 40}px`;
    seta2.style.top = `${simRect.top - buttonsRect.top + 5}px`;

    seta.style.right = `${offsetRight - 40}px`;
    seta.style.top = `${simRect.top - buttonsRect.top + 5}px`;
}

window.addEventListener("load", posicionarSetas);
window.addEventListener("resize", posicionarSetas);


//função fugir 
function moverBotao() {
    const margem = 20; // distância mínima das bordas

    const maxX = window.innerWidth - botNao.offsetWidth - margem;
    const maxY = window.innerHeight - botNao.offsetHeight - margem;

    const minX = margem;
    const minY = margem;

    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    botNao.style.left = `${randomX}px`;
    botNao.style.top = `${randomY}px`;

    quantNao++;

    if (quantNao >= 5) {
        seta.classList.remove("hidden");
        seta2.classList.remove("hidden");
    }
}

// Desktop
botNao.addEventListener("mouseover", moverBotao);

// Mobile
botNao.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moverBotao();
});


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

        const data = img.dataset.data;
        const desc = img.dataset.desc;

        imagemLegenda.textContent = data ? `${data} — ${desc}` : "";
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
