
//The variables below will be used to store the indexes of authors, quotes and pictures for the event listener underneath them
let numAleatAutor = 0;

let numAleatCitacao = 0;

//this event will work as soon as the user clicks on the buttonQuote button on the main page. It will then output a quote associated with an author, then the name of the author and a picture
$("#buttonQuote").click(() => {

    //generate a number between 0 and the total number of authors, so that one of the four authors can be picked. The 'array1.objCitacao.length' is the number of the authors
    numAleatAutor = Math.floor(Math.random() * array1.objCitacao.length);

    //generates a number between 0 and the total number of quotes that a specific author has
    numAleatCitacao = Math.floor(Math.random() * array1.objCitacao[numAleatAutor].citacoes.length);

    //regardless if there is a quote/name/picture on screen, they will fadeout
    $("#quote").fadeOut(1);
    $("#descrAutor").fadeOut(1);
    $("#imagemAutor").fadeOut(1);

    //places the text on the div with the id 'quote', where the text will appear in italic.
    $("#quote").html("<em>" + array1.objCitacao[numAleatAutor].citacoes[numAleatCitacao] + "</em>");
    //fadein to appear with an effect
    $("#quote").fadeIn();

    //places the text on the div with the id 'descrAutor'
    $("#descrAutor").text(array1.objCitacao[numAleatAutor].autor);
    //fadein to appear with an effect
    $("#descrAutor").fadeIn();

    //places an author image on the div with the id 'imagemAutor'
    $("#imagemAutor").attr("src", array1.objCitacao[numAleatAutor].imagem_do_autor);
    //fadein to appear with an effect
    $("#imagemAutor").fadeIn();
    //fills in the 'alt' attribute of the image with the name of the author
    $("#imagemAutor").attr("alt", array1.objCitacao[numAleatAutor].autor)
});