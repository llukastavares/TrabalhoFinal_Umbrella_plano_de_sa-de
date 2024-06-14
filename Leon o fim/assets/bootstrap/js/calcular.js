function calcularImc() {    

    const { peso, altura, idade } = getDados();  
    const resultado = (peso/(altura*altura));

    const classificacao = classificacaoOMS (resultado);
    const risco = riscoComobirdade(resultado);

    document.getElementById("resultPeso").innerHTML = peso;
    document.getElementById("resultAltura").innerHTML = altura;
    document.getElementById("resultIdade").innerHTML = idade;
    document.getElementById("resultIMC").innerHTML = resultado.toFixed(2);
    document.getElementById("resultClassificacaoOMS").innerHTML = classificacao;
    document.getElementById("resultRisco").innerHTML = risco;
    compararPlanos();

}

function getDados() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const idade = document.getElementById('idade').value;
    return {peso, altura, idade};
}

function verificarSePodeComprar(dinheiro, totalCompra) {
    if (dinheiro >= totalCompra) {
        return 'Pode comprar';
    } else {
        return 'Não pode comprar';
    }
}

function classificacaoOMS(resultado) {
    if (resultado < 18.5) {
        return 'Peso Baixo';
    }else if (resultado >= 18.5 && resultado <= 24.9) {
        return 'Peso Normal';
    }else if (resultado >= 25 && resultado <= 29.9) {
        return 'Sobrepeso';
    }else if (resultado >= 30 && resultado <= 34.9) {
        return 'Obesidade';
    }else if (resultado >= 35 && resultado <= 39.9) {
        return 'Obesidade Móbida';
    }else if (resultado >= 40) {
        return 'Caixão e vela preta';
    }
}

function riscoComobirdade(resultado) {
    let teste = '';
    if (resultado < 18.5) {
        teste = 'Baixo';
        
        return teste;
        
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        teste = 'Normal';
       
        return teste;
        
    } else if (resultado >= 25 && resultado <= 29.9) {
        teste = 'Aumentado';
        
        return teste;
        
    }else if (resultado >= 30 && resultado <= 34.9) {
        teste = 'Moderado';
        
        return teste;
        
    }else if (resultado >= 35 && resultado <= 39.9) {
        teste = 'Grave';
        
        return teste;
        
    }else if (resultado >= 40) {
       teste = 'Ta é morto';
       
       return teste;
       
    }
}

function compararPlanos() {

    const { peso, altura, idade } = getDados(); 
    const imc = (peso/(altura*altura));    

    
    const precoA = {
        basic: 100 + (idade * 10 * (imc / 10)),
        standard: (150 + (idade * 15)) * (imc / 10),
        premium: (200 - (imc * 10) + (idade * 20)) * (imc / 10)
    };

    
    const fatorComorbidade = (imc < 18.5) ? 10 : (imc < 24.9) ? 1 : (imc < 29.9) ? 6 : (imc < 34.9) ? 10 : (imc < 39.9) ? 20 : 30;

    
    const precoB = {
        basic: 100 + (fatorComorbidade * 10 * (imc / 10)),
        standard: (150 + (fatorComorbidade * 15)) * (imc / 10),
        premium: (200 - (imc * 10) + (fatorComorbidade * 20)) * (imc / 10)
    };
    
    
    const resultado = `
            
            <table class="table">
            <thead>
            <tr>
                <th scope="col">Pacote do Plano</th>
                <th scope="col">Tricell</th>
                <th scope="col">Umbrella</th>
                <th scope="col">Extrato</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td> Basic </td>
                <td>R$ ${precoA.basic.toFixed(2)} </td>
                <td>R$ ${precoB.basic.toFixed(2)} </td>
                <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#extrBasic"> Abrir </button> </td>
            </tr>
            <tr>
                <td> Standard </td>
                <td>R$ ${precoA.standard.toFixed(2)} </td>
                <td>R$ ${precoB.standard.toFixed(2)} </td>
                <td> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#extrStandard"> Abrir  </button> </td>
            </tr> 
            <tr>
                <td> Premium </td>
                <td>R$ ${precoA.premium.toFixed(2)} </td>
                <td>R$ ${precoB.premium.toFixed(2)} </td>
                <td> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#extrPremium"> Abrir  </button> </td>
            </tr>                        
            </tbody>
        </table>
    `;
    document.getElementById("resultPlanos").innerHTML = resultado;

    
    document.getElementById("extrIdadePlanoABasic").innerHTML = idade;
    document.getElementById("extrAlturaPlanoABasic").innerHTML = altura;
    document.getElementById("extrImcPlanoABasic").innerHTML = imc.toFixed(2);
    document.getElementById("extrTotalPlanoABasic").innerHTML = precoA.basic.toFixed(2);

    
    document.getElementById("extrIdadePlanoBBasic").innerHTML = idade;
    document.getElementById("extrAlturaPlanoBBasic").innerHTML = altura;
    document.getElementById("extrImcPlanoBBasic").innerHTML = imc.toFixed(2);
    document.getElementById("extrComorbidadePlanoBBasic").innerHTML = fatorComorbidade;
    document.getElementById("extrTotalPlanoBBasic").innerHTML = precoB.basic.toFixed(2);

    
    document.getElementById("extrIdadePlanoAStandard").innerHTML = idade;
    document.getElementById("extrAlturaPlanoAStandard").innerHTML = altura;
    document.getElementById("extrImcPlanoAStandard").innerHTML = imc.toFixed(2);
    document.getElementById("extrTotalPlanoAStandard").innerHTML = precoA.standard.toFixed(2);

    
    document.getElementById("extrIdadePlanoBStandard").innerHTML = idade;
    document.getElementById("extrAlturaPlanoBStandard").innerHTML = altura;
    document.getElementById("extrImcPlanoBStandard").innerHTML = imc.toFixed(2);
    document.getElementById("extrComorbidadePlanoBStandard").innerHTML = fatorComorbidade;
    document.getElementById("extrTotalPlanoBStandard").innerHTML = precoB.standard.toFixed(2);

    
    document.getElementById("extrIdadePlanoAPremium").innerHTML = idade;
    document.getElementById("extrAlturaPlanoAPremium").innerHTML = altura;
    document.getElementById("extrImcPlanoAPremium").innerHTML = imc.toFixed(2);
    document.getElementById("extrTotalPlanoAPremium").innerHTML = precoA.premium.toFixed(2);

    
    document.getElementById("extrIdadePlanoBPremium").innerHTML = idade;
    document.getElementById("extrAlturaPlanoBPremium").innerHTML = altura;
    document.getElementById("extrImcPlanoBPremium").innerHTML = imc.toFixed(2);
    document.getElementById("extrComorbidadePlanoBPremium").innerHTML = fatorComorbidade;
    document.getElementById("extrTotalPlanoBPremium").innerHTML = precoB.premium.toFixed(2);

    const valorABasic = precoA.basic.toFixed(2);
    const valorAStandard = precoA.standard.toFixed(2);
    const valorAPremium = precoA.premium.toFixed(2);

    const valorBBasic = precoB.basic.toFixed(2);
    const valorBStandard = precoB.standard.toFixed(2);
    const valorBPremium = precoB.premium.toFixed(2);

    const melhorPlano = sugerirPlano(valorABasic, valorAStandard, valorAPremium, valorBBasic, valorBStandard, valorBPremium);
    

    document.getElementById("melhorPlano").innerHTML = (' O plano mais barato custa R$'+ melhorPlano);
    
}

function sugerirPlano(valorABasic, valorAStandard, valorAPremium, valorBBasic, valorBStandard, valorBPremium) {
    
    const valores = [valorABasic, valorAStandard, valorAPremium, valorBBasic, valorBStandard, valorBPremium];

    
    const menorValor = Math.min(...valores);

    
    const indiceMenorValor = valores.indexOf(menorValor);

    
    const sugestao = `Sugira o Plano ${String.fromCharCode(65 + indiceMenorValor)}`;

    return menorValor;

}
