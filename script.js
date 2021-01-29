var fs = require('fs')

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

var versao = localStorage.getItem('versao');
var funcionalidades = localStorage.getItem('funcionalidades');
funcionalidadesArray = funcionalidades.split('|');
var impactos = localStorage.getItem("impactos");
impactosArray = impactos.split('|');
console.log(impactosArray)
var plataforma = localStorage.getItem("plataforma");

var release = "<div>"+ 
"<img src='./assets/Release.svg'>"+
"<div>"+
"<a>Versão"+versao+"</a>"+
"</div>"+
"</div>"

var novasFuncionalidades = "<div>"+ 
"<ul>"+
funcionalidadesArray.map(function(item){
  return "<li>" + item + "</li>" 
}).join('');
+"</ul>"+
"</div>"

var Novosimpactos = "<div>"+ 
"<ul>"+
impactosArray.map(function(item){
  return "<li>" + item + "</li>"
}).join('');
+"</ul>"+
"</div>"


var Novaplataforma = "<a>" +
 plataforma + 
 "</a>"

fileList = './publish/template-web.html'; 
fs.readFile(fileList, function(err, data) { if(err) throw err; data = data.toString(); data = data.replace('<div id="Release"></div>', release), data = data.replace('<div id="Funcionalidades"></div>', novasFuncionalidades), data = data.replace('<div id="Impactos"></div>', Novosimpactos), data = data.replace('<a id="Plataforma"></a>', Novaplataforma)
console.log("replace", data)
fs.writeFile('./complete/index.html', data, function(err) { err || console.log('Data replaced \n', data); })});