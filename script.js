const botoes = document.querySelectorAll('.link')
const conteudo = document.querySelector('.conteudo')
const cursos = document.querySelector('.cursos')
const linguagens = document.querySelector('.linguagens')
const certificados = document.querySelector('.certificados')
const redesSociais = document.querySelector('.redesSociais')
const programacao = document.querySelector('.programacao')

botoes.forEach(btn => {
    btn.addEventListener('click', link => {

        someTudo()
        
        switch(link.target.id) {
            case 'redesSociais': elementoSurge(conteudo); break
            case 'certificados': elementoSurge(cursos); break
            case 'programacao': elementoSurge(linguagens); break
        }
    })
})

function someTudo() {
    elementoSome(conteudo)
    elementoSome(cursos)
    elementoSome(linguagens)
}

function elementoSome(elemento) {
    elemento.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-1000px)' }], 
        { duration: 280 })

    setTimeout(function(){
        elemento.hidden=true
    }, 260)
}

function elementoSurge(elemento) {
    setTimeout(function() {
        elemento.hidden=false,
        elemento.animate([
            { transform: 'translateX(-1000px)' },
            { transform: 'translateX(0px)' }],
            { duration: 280, })
    }, 260)
}