// document.querySelector("#mudar__cor").addEventListener("click",() => {
//     document.body.classList.toggle(".dark__mode");
//     document.body.classList.toggle(".light__mode");
// })

const mudarTema = document.querySelector('#mudar__tema');
const modo = JSON.parse(localStorage.getItem("darkAtivo"))

mudarTema.addEventListener("click", () => {
    document.body.classList.toggle("light__mode");
    document.body.classList.toggle("dark__mode");
    console.log("oi")
})

