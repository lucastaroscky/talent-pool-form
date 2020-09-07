window.onload = () => {
  // states of brazil array to make a loop and show then on the select input 
  const selecState = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', ' SP', 'SE', 'TO'];

  // input values constants to resum an validate all data 
  let nameValue = document.getElementById('name');
  let emailValue = document.getElementById('email');
  let cpfValue = document.getElementById('cpf');
  let adressValue = document.getElementById('adress');
  let cityValue = document.getElementById('city');
  let stateValue = document.getElementById('state');
  let aboutMeValue = document.getElementById('about');
  let lastPositionValue = document.getElementById('last-position');
  let dateValue = document.getElementById('date');
  const sectionValidation = document.getElementById('validation');
  const data = [nameValue, emailValue, cpfValue, adressValue, cityValue, stateValue, aboutMeValue, lastPositionValue, dateValue];
  const submit = document.getElementById('submit');
  const clear = document.getElementById("clear");

  // trigger email validation
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const email = document.getElementById('email')
  email.addEventListener('change', () => {
    const result = regexEmail.test(email.value);
    if (result === false) {
      email.style.color = "rgb(216, 34, 47)"
      setTimeout(() => alert('Campo e-mail inválido'), 1000)
    } else {
      email.style.border = "none"
    }
  })

  // including states of Brazil
  for (let i = 0; i < selecState.length; i += 1) {
    let state = document.getElementById("state");
    let index = document.createElement('option');
    index.setAttribute('value', selecState[i]);
    index.innerHTML = selecState[i];
    state.appendChild(index);
  }

  // clear inputs
  clear.addEventListener('click', () => {
    let input = document.getElementsByTagName('input');
    let textarea = document.getElementsByTagName('textarea')[0];
    textarea.value = '';
    for (let i = 0; i <= 8; i += 1) {
      let index = input[i];
      index.value = '';
    }
  })

  const validationTitle = document.createElement('h1');
  validationTitle.setAttribute('class', 'title is-3');
  validationTitle.style.paddingTop = "30px"
  validationTitle.innerText = "Validação de dados"

  // validation data function
  const validationData = () => {
    sectionValidation.style.backgroundColor = "whitesmoke";
    sectionValidation.appendChild(validationTitle)
    for (let i = 0; i <= data.length; i += 1) {
      const p = document.createElement('p');
      p.innerHTML = data[i].value;
      sectionValidation.appendChild(p)
    }
  }

  //trigger submit to resum inputs
  submit.addEventListener('click', validationData);
}
