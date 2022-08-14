const URL = 'https://xp41-soundgarden-api.herokuapp.com/events'

const inputNome = document.querySelector('#nome')
const inputPoster = document.querySelector('#poster')
const inputAtracoes = document.querySelector('#atracoes')
const inputDescricao = document.querySelector('#descricao')
const inputData = document.querySelector('#data')
const inputLotacao = document.querySelector('#lotacao')
const inputForm =  document.querySelector('form')


inputForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const novoShow = {
        name: inputNome.value,
        poster: inputPoster.value,
        attractions: [inputAtracoes.value],
        description: inputDescricao.value,
        scheduled:inputData.value,
        number_tickets: inputLotacao.value,

    }
    
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoShow)    
    }


    const response = await fetch(URL)
    const dataResponse = await response.json()

    console.log(response)

    if (response.status == 201){
        window.alert('success')
    }

})
  



