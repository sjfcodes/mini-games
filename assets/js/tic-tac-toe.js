const tttBoard = document.querySelector('#t-t-t')
tttBoard.setAttribute('style', 'display:flex; flex-wrap:wrap; width:10em;')

const buildBoard = () => {
    tttBoard.innerHTML = ''
    for (let i = 0; i < 9; i++) {
        const divEl = document.createElement('div')
        divEl.setAttribute('style', 'width:3em; height: 3em; display:flex; align-items:center; justify-content:center; border: solid black 1px')
        divEl.setAttribute('data-id', i)
        tttBoard.appendChild(divEl)
    }
}

tttBoard.addEventListener('click', ({ target: { textContent, dataset: { id } } }) => {
    if (textContent) return
    const el = document.querySelector(`div[data-id='${id}']`)
    el.textContent = 'X'
    const remaining = [...tttBoard.children].filter(({ textContent }) => !textContent)
    if (!remaining.length) {
        const resetBtn = document.createElement('button')
        resetBtn.innerText = 'play again'
        resetBtn.addEventListener('click', buildBoard)
        tttBoard.appendChild(resetBtn)
        return
    }
    remaining[Math.floor(Math.random() * remaining.length)].textContent = 'O'
})
buildBoard()