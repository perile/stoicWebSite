//the code below will dinamically generate a table. As of now, it looks a bit janky, but in the future I will fix it

$(document).ready(function () {

    //gets the number of authors in array1 (see the javascript page 'citacoes')
    let numAutores = array1.objCitacao.length;
    
    let tabela = $("<table>");
    tabela.attr("width", "100%");
    tabela.attr("border", "2px solid white");
    tabela.attr("font-style", "italic");

    for(let i = 0; i < numAutores; i++){
        let linha = $("<tr>");
        linha.append("<td>" + array1.objCitacao[i].autor)
        

        for(let j = 0; j < array1.objCitacao[i].citacoes.length; j++){
            
            let celulaTexto = $("<td>").text("\'" + array1.objCitacao[i].citacoes[j] + "\'");
            linha.append(celulaTexto);
        }
        

        tabela.append(linha);
    }

    $(".tabelAuthQuo").append(tabela)


});