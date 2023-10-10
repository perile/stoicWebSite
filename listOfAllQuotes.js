/*
Nesta nova versão do list of all quotes 2, ao invês de se criar de forma dinâmica cenas de table, o melhor é utilizar divs e colocar dentro de cada um o texto adequado.

Pode-se usar o mesmo sistema que que os divs que ficam tudo à esquerda são os nomes dos autores, e tudo o que ficar à direita deles, serão as próprias citações. 

Ver o projecto dos hipercarros em que isto acontece.

*/

$(document).ready(() => {
    let numAutores = array1.objCitacao.length;
    
    let cod = "<div class = 'totalBox'>";

    for (let i = 0; i < numAutores; i++){
        let column = "1 / 2";
        let row = `${i+1} / ${i+2}`;

        cod += "<div class = 'autorEsq' style = 'grid-column:" + column + "; grid-row:" + row + ";'>" + array1.objCitacao[i].autor + "</div>";

        for(let y = 0; y < array1.objCitacao[i].citacoes.length; y++){
            
                cod += "<div class = 'citacaoDir'>" + array1.objCitacao[i].citacoes[y] + "</div>";

        };

    };
    cod += "</div>";

    $('body').append(cod);
});