const functionalitiesListElement = document.querySelector('#functionalities-list');
const impactslistElement = document.querySelector('#impacts-list');
const toastElement = document.querySelector("#toast");

let functionalitiseList = []
let impactsList = []
let numberFunction = 0
let numberImpact = 0

function creatToast(type, status) {
  const toast = `
      <div>
        <i class="fas fa-exclamation-triangle"></i>
        <span>${status}</span>
      </div>
    `;
  toastElement.innerHTML = toast;
  toastElement.className = type;
  setTimeout(function () { toastElement.className = 'content__toast' }, 3000);
}

function onSubmit() {

  //   console.log(functionalitiseList.toString())
  //   var xhr = new XMLHttpRequest();
  // xhr.open("POST", 'http://localhost:3333/form', true);
  // xhr.send(  
  //     document.getElementById('version').value +
  //     document.getElementById('plataform').value +
  //     functionalitiseList +
  //     impactsList
  // );
  // console.log(xhr.response)

  $.ajax({
    type: "POST",
    url: 'http://localhost:3333/form',
    data: functionalitiseList,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    error: function () {
      alert("Error");
    },
    success: function () {
      alert("OK");
    }
  });

}

function addElementoToList(elementId) {
  let functionalityValue = document.getElementById('functionalities-input').value
  let functionalityLink = document.getElementById('functionalities-link-input').value
  let impactValue = document.getElementById('impacts-input').value
  let impactsLink = document.getElementById('impacts-link-input').value
  let versionLink = document.getElementById('version-link-input').value

  if (elementId === 'functionalities') {
    if (functionalityValue === '') return creatToast('toast_warning', 'Insert a value of input')
    if (functionalityLink) {
      functionalitiseList.push(functionalityValue + "<" + functionalityLink + ">")
    } else {
      functionalitiseList.push(functionalityValue)
    }
    const listItem = ` ${functionalitiseList.map(item => `<input class="news__functionalities__item" value="${item}" name="newFuncionalities"/>`).join('')}`
    functionalitiesListElement.innerHTML = listItem;

  } else if (elementId === 'impacts') {
    if (impactValue === '') return creatToast('toast_warning', 'Insert a value of input')
    if (impactsLink) {
      impactsList.push(impactValue + "<" + impactsLink + ">")
    } else {
      impactsList.push(impactValue)
    }
    const listItem = ` ${impactsList.map(item => `<input class="news__impacts__item" value="${item}" name="newImpacts"/>`).join('')}`
    impactslistElement.innerHTML = listItem;
  }

  // impactValue = '';
  // functionalityValue = '';

}
