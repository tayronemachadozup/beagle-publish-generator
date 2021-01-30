const functionalitiesListElement = document.querySelector('#functionalities-list');
const impactslistElement = document.querySelector('#impacts-list');
const toastElement = document.querySelector("#toast");

let functionalitiseList = [] 
let impactsList = []

function creatToast(type,status){
    const toast = `
      <div>
        <i class="fas fa-exclamation-triangle"></i>
        <span>${status}</span>
      </div>
    `;
    toastElement.innerHTML = toast;
    toastElement.className = type;
    setTimeout(function(){toastElement.className ='content__toast' }, 3000);
}

function addElementoToList(elementId){
    let functionalityValue = document.getElementById('functionalities-input').value
    let impactValue = document.getElementById('impacts-input').value

    if(elementId === 'functionalities'){
        if (functionalityValue === '') return creatToast('toast_warning', 'Insert a value of input')

        functionalitiseList.push(functionalityValue)
        console.log('lista ->',functionalitiseList)
        const listItem = ` ${functionalitiseList.map(item => `<li class="news__functionalities__item">${item}</li>` ).join('')}`  
        functionalitiesListElement.innerHTML = listItem;
       
    }else if (elementId === 'impacts'){
        if (functionalityValue === '') return creatToast('toast_warning', 'Insert a value of input')
        impactsList.push(impactValue)
        const listItem = ` ${impactsList.map(item => `<li class="news__impacts__item">${item}</li>` ).join('')}`  
        impactslistElement.innerHTML = listItem;
       
    }

    // impactValue = '';
    // functionalityValue = '';
    
}

