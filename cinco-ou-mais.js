function solucao(precos) {

    let soma = 0;
    let menorAteAgora = precos[0];

    for (let item of precos) {
        if (item < menorAteAgora) {
            menorAteAgora = item;
        }
    }

    for (let item of precos) {
        soma = soma + item;
    }

    if(precos.length >=5) {
        console.log(soma - menorAteAgora);
      
    } else {
     console.log(soma);
    }

}