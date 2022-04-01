const playGame = (data) => {
    let uChoice;
    const cChoice = data.options[Math.floor(Math.random() * data.options.length)]
    const handleResult = (key) => !(alert(`you chose ${uChoice} & computer chose ${cChoice}`)) && !(alert(key === 'tie' ? 'its a tie!' : `you ${key}!`)) && !(data[key]++) && data.rounds++
    while (!data.options.includes(uChoice)) uChoice = prompt(`choose ${data.options}`)?.toLowerCase()
    if (cChoice === uChoice) handleResult('tie')
    else if (uChoice === 'rock' && cChoice === 'scissors' || uChoice === 'paper' && cChoice === 'rock' || uChoice === 'scissors' && cChoice === 'paper') handleResult('win')
    else handleResult('lose')
    return !(alert(`${JSON.stringify(data, null, 4)}`)) && confirm('play again?') && playGame(data)
}
document.querySelector('#r-p-s').addEventListener('click', () => !(alert('welcome to rock, paper, scissors!')) && playGame({ rounds: 0, win: 0, lose: 0, tie: 0, options: ['rock', 'paper', 'scissors'] }));