const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const min = Math.ceil(Number(form.min.value))
    const max = Math.floor(Number(form.max.value))

    if(max <= min) {
        alert('O segundo número deve ser MAIOR que o primeiro')
    }
    else {
        const result = Math.floor(Math.random() * (max - min + 1 )) + min
        alert(`Número sorteado: ${result}`)
    }
})