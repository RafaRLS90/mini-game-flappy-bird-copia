function novoElemento(tagName, className){
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false){
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')

    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

//const b = new Barreira(true)
//b.setAltura(200)
//document.querySelector('[tp-flappy]').appendChild(b.elemento)

function ParDeBarreira(altura, abertura, x){
    this.elemento = novoElemento('div', 'par-de-barreira')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)
}