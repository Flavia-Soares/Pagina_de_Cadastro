function pegarNome(){
    let nomes = document.getElementById('nome').value;
    let nomeMaisculo = nomes.toUpperCase();
    console.log(nomeMaisculo);
    return nomeMaisculo;
    }

function pegarCpf(){
     let cpf = document.getElementById('cpf').value;
     let cpfVerificado = verificaCPF(cpf);
     cpfInvalido(cpfVerificado);
     console.log(cpfVerificado);
     return cpf;
    }

function cpfInvalido(cpfBoolean){
    if(cpfBoolean == false){
        document.getElementById('cpf').style.backgroundColor = 'red';
    }else{
        document.getElementById('cpf').style.backgroundColor = 'white';
    }
    return;
}


function verificaCPF(strCpf){

        var soma;
        var resto;
        soma = 0;
        if (strCpf == "00000000000") {
            return false;
        }
        
        for (i = 1; i <= 9; i++) {
            soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
        }
        
        resto = soma % 11;
        
        if (resto == 10 || resto == 11 || resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        }
        
        if (resto != parseInt(strCpf.substring(9, 10))) {
            return false;
        }
        
        soma = 0;
        
        for (i = 1; i <= 10; i++) {
            soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
        }
        resto = soma % 11;
        
        if (resto == 10 || resto == 11 || resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        }
        
        if (resto != parseInt(strCpf.substring(10, 11))) {
            return false;
        }
        return true;
        }  
  
function pegarIdade(){
    
    let idadeBoolean = validaIdade();
    if(idadeBoolean){
        return calculaIdade();
    }
    return;
}


function validaIdade(){
    let valido;
    let idade = calculaIdade();

    if(idade >= 130 || idade < 0) {
        document.getElementById('ano').style.backgroundColor = "#FB5C5C";
        valido = false;
    } else{
        document.getElementById('ano').style.backgroundColor = "white";
        valido = true;
    }    
        return valido;
}  

function calculaIdade(){
    let ano = document.getElementById('ano').value;
    let mes = document.getElementById('mes').value;
    let dia = document.getElementById('dia').value;
    let anoAtual = 2021;
    let diaAtual = 16;
    let mesAtual = 3;
    let idadeFinal;

    let idade = (anoAtual - ano)-1;
    console.log(idade)
    idadeFinal = idade;

    if(mes > mesAtual){
        idade = idade;
        console.log(idade + "-");
        idadeFinal = idade;
      } else if(mes == mesAtual){
        if(dia >= diaAtual){
          idade = idade + 1;
          console.log(idade + "segunda opção");
          idadeFinal = idade;
        }
    }
    return idadeFinal;    
}


function pegarDia(){
    let dia = document.getElementById('dia').value;
    return dia;
}

function pegarMes() {
    let mes = document.getElementById('mes').value;
    return mes;
}

function pegarEmail(){
    let email = document.getElementById('email').value;
    let emailBoolean = validateEmail(email);
    if(emailBoolean){
        document.getElementById('email').style.backgroundColor = 'white';  
        return email;
    }else{
        document.getElementById('email').style.backgroundColor = 'red';
    }
       
    console.log(email);  
    return; 
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function pegarGenero(){
    let genero = document.getElementById('genero').value;
    return genero;
}

function exibe(){
    
    let nome = pegarNome();
    let cpf = pegarCpf();
    //let dia = pegarDia();
    //let mes = pegarMes();
    let idade = pegarIdade();
    //let ano = pegarAno();
    let email = pegarEmail();
    let genero = pegarGenero();

    let texto = `Olá ${nome}, seu login é ${email}. Você tem ${idade} anos, e seu gênero é ${genero}. Pode usar seu CPF: ${cpf} como senha.`;

    let emailBoolean = validateEmail(email);
    let cpfBoolean = verificaCPF(cpf);
    let idadeBoolean = validaIdade();
    console.log(emailBoolean);
    console.log(cpfBoolean);
    console.log(idadeBoolean);


    if(emailBoolean && cpfBoolean && idadeBoolean) {
        document.getElementById('exibicao').className = "exibicao";
        document.getElementById('exibicao').innerHTML = texto;
    }

}

