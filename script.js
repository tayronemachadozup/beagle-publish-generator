// var fs = require('fs')
// if (typeof localStorage === "undefined" || localStorage === null) {
//   var LocalStorage = require('node-localstorage').LocalStorage;
//   localStorage = new LocalStorage('./scratch');
// }

// var versao = localStorage.getItem('versao');
// var funcionalidades = localStorage.getItem('funcionalidades');
// funcionalidadesArray = funcionalidades.split('|');
// var impactos = localStorage.getItem("impactos");
// impactosArray = impactos.split('|');
// console.log(impactosArray)
// var plataforma = localStorage.getItem("plataforma");

// var release = "<div>" +
//   "<img src='./assets/Release.svg'>" +
//   "<div>" +
//   "<a>Versão" + versao + "</a>" +
//   "</div>" +
//   "</div>"

// var novasFuncionalidades = "<div>" +
//   "<ul>" +
//   funcionalidadesArray.map(function (item) {
//     return "<li>" + item + "</li>"
//   }).join('') 
//   + "</ul>" +
//   "</div>"

// var novosimpactos = "<div>" +
//   "<ul>" +
//   impactosArray.map(function (item) {
//     return "<li>" + item + "</li>"
//   }).join('')
//   + "</ul>" +
//   "</div>"

// if (plataforma === "ios")
//   var novoIcon = "<img src='./assets/IOS.svg'/>"

// else if (plataforma === "android")
//   var novoIcon = "<img src='./assets/Android.svg'/>"

// else if (plataforma === "web")
//   var novoIcon = "<img src='./assets/Web.svg'/>"

// var novaPlataforma = "<a>" +
//   plataforma + "</a>" + novoIcon

// fileList = './publish/template-web.html';

// fs.readFile(fileList, function (err, data) {
//   if (err) throw err; data = data.toString(); data = data.replace('<div id="Release"></div>', release), data = data.replace('<div id="Funcionalidades"></div>', novasFuncionalidades), data = data.replace('<div id="Impactos"></div>', novosimpactos), data = data.replace('<a id="Plataforma"></a>', novaPlataforma)
//   console.log("replace", data)
//   fs.writeFile('./complete/index.html', data, function (err) { err || console.log('Data replaced \n', data)})
// });