var novasFuncionalidades = [1,2,3];
var impactos = [1,2,3];
var funcionalidade = '';
var impact = '';



localStorage.setItem('impactos', 'myFirstValue');

function adicionarImpactos(impacto){
    impactos.push(impacto)

}

function escreverArquivo() {  

    var fso  = new ActiveXObject("Scripting.FileSystemObject");
    
    var fh = fso.CreateTextFile(".\\Teste.txt", true); 
    
    fh.WriteLine("Coloque todo o conteudo que voce deseja nesse trecho...");
    
    fh.Close(); 
    
    }

async function adicionarFuncionalidades(funcionalidade){
    escreverArquivo()

    GravaArquivo("",impactos);
    novasFuncionalidades.push(funcionalidade)
    document.getElementById('novasFuncionalidades').innerHTML = novasFuncionalidades;
    funcionalidade = '';
}

async function adicionarImpactos(impact){

    impactos.push(impact)
    document.getElementById('impactos').innerHTML = impactos;
    impact = '';
}

function onChangeFunc() {
     funcionalidade = document.getElementById('novaFuncionalidade').value
}

function onChangeImpact() {
    impact = document.getElementById('impacto').value
}
