$('#vertueux').hide();
$('#cours').hide();
$('#long').hide();
$('#nonpossible').hide();
$('#11').hide();
$('#12').hide();
/**************************boutongo*************************************/
$('#boutongo').click(function () {
    var tableau = $('#nom').val().toUpperCase();
    var compteur = tableau.length;
    /*****************************************/
    for (a=0;a<=12;a++){
        $('#'+a+'').hide();
    }
    /*****************************************/
    if (compteur<3){
        $('#nonpossible').show();
    }
    /*****************************************/
    else if (compteur>12){
        $('#nonpossible').show();
    }
    /********************3********************/
    else if (compteur === 3) {
        $('#nonpossible').hide();
        for (a=0;a<=compteur;a++){
            $('#'+a+'').show();
            if (tableau[a-1]==="*"){
                $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
            }
            else {
                $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
            }
        }
        $('.1').attr('class', 'col-4 1');
    }
    /********************4********************/
    else if (compteur === 4) {
        $('#nonpossible').hide();
        for (a = 0; a <= compteur; a++) {
            $('#' + a + '').show();
            if (tableau[a-1]==="*"){
                $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
            }
            else {
                $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
            }
        }
        $('.1').attr('class', 'col-3 1');
    }
    /********************5********************/
    else if (compteur===5){
        for (a=0;a<=compteur;a++){
            $('#'+a+'').show();
            if (tableau[a-1]==="*"){
                $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
            }
            else {
                $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
            }
        }
        $('.1').attr('class', 'col-2 1');
    }
    /********************6********************/
    else if (compteur===6){
        for (a=0;a<=compteur;a++){
            $('#'+a+'').show();
            if (tableau[a-1]==="*"){
                $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
            }
            else {
                $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
            }
        }
        $('.1').attr('class', 'col-2 1');
    }
    /********************7********************/
    else if (compteur===7){
        for (a=0;a<=compteur;a++){
            $('#'+a+'').show();
            if (tableau[a-1]==="*"){
                $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
            }
            else {
                $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
            }
        }
        $('.1').attr('class', 'col-1 1');
    }
    /********************8********************/
    else if (compteur===8){
        for (a=0;a<=compteur;a++){
            $('#'+a+'').show();
            if (tableau[a-1]==="*"){
                $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
            }
            else {
                $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
            }
        }
        $('.1').attr('class', 'col-1 1');
    }
    /********************9********************/
    else if (compteur===9){
        for (a=0;a<=compteur;a++){
            $('#'+a+'').show();
            if (tableau[a-1]==="*"){
                $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
            }
            else {
                $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
            }
        }
        $('.1').attr('class', 'col-1 1');
    }
    /********************10********************/
    else if (compteur===10){
        for (a=0;a<=compteur;a++){
            $('#'+a+'').show();
            if (tableau[a-1]==="*"){
                $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
            }
            else {
                $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
            }
        }
        $('.1').attr('class', 'col-1 1');
    }
    /********************11********************/
    else if (compteur===11){
        for (a=0;a<=compteur;a++){
            $('#'+a+'').show();
            if (tableau[a-1]==="*"){
                $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
            }
            else {
                $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
            }
        }
        $('.1').attr('class', 'col-1 1');
    }
    /********************12********************/
    else if (compteur===12) {
        for (a = 0; a <= compteur; a++) {
            $('#' + a + '').show();
            if (tableau[a-1]==="*"){
                $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
            }
            else {
                $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
            }
        }
        $('.1').attr('class', 'col-1 1');
    }
    else {
        $('#nonpossible').show();
    }
});
/**************************enter****************************************/
$(document).on('keyup',function (e) {
    var tableau = $('#nom').val().toUpperCase();
    var compteur = tableau.length;
    if (e.which===13){
        /*****************************************/
        for (a=0;a<=12;a++){
            $('#'+a+'').hide();
        }
        /*****************************************/
        if (compteur<3){
            $('#nonpossible').show();
        }
        /*****************************************/
        else if (compteur>12){
            $('#nonpossible').show();
        }
        /********************3********************/
        else if (compteur === 3) {
            $('#nonpossible').hide();
            for (a=0;a<=compteur;a++){
                $('#'+a+'').show();
                if (tableau[a-1]==="*"){
                    $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
                }
                else {
                    $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
                }
            }
            $('.1').attr('class', 'col-4 1');
        }
        /********************4********************/
        else if (compteur === 4) {
            $('#nonpossible').hide();
            for (a = 0; a <= compteur; a++) {
                $('#' + a + '').show();
                if (tableau[a-1]==="*"){
                    $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
                }
                else {
                    $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
                }
            }
            $('.1').attr('class', 'col-3 1');
        }
        /********************5********************/
        else if (compteur===5){
            for (a=0;a<=compteur;a++){
                $('#'+a+'').show();
                if (tableau[a-1]==="*"){
                    $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
                }
                else {
                    $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
                }
            }
            $('.1').attr('class', 'col-2 1');
        }
        /********************6********************/
        else if (compteur===6){
            for (a=0;a<=compteur;a++){
                $('#'+a+'').show();
                if (tableau[a-1]==="*"){
                    $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
                }
                else {
                    $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
                }
            }
            $('.1').attr('class', 'col-2 1');
        }
        /********************7********************/
        else if (compteur===7){
            for (a=0;a<=compteur;a++){
                $('#'+a+'').show();
                if (tableau[a-1]==="*"){
                    $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
                }
                else {
                    $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
                }
            }
            $('.1').attr('class', 'col-1 1');
        }
        /********************8********************/
        else if (compteur===8){
            for (a=0;a<=compteur;a++){
                $('#'+a+'').show();
                if (tableau[a-1]==="*"){
                    $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
                }
                else {
                    $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
                }
            }
            $('.1').attr('class', 'col-1 1');
        }
        /********************9********************/
        else if (compteur===9){
            for (a=0;a<=compteur;a++){
                $('#'+a+'').show();
                if (tableau[a-1]==="*"){
                    $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
                }
                else {
                    $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
                }
            }
            $('.1').attr('class', 'col-1 1');
        }
        /********************10********************/
        else if (compteur===10){
            for (a=0;a<=compteur;a++){
                $('#'+a+'').show();
                if (tableau[a-1]==="*"){
                    $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
                }
                else {
                    $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
                }
            }
            $('.1').attr('class', 'col-1 1');
        }
        /********************11********************/
        else if (compteur===11){
            for (a=0;a<=compteur;a++){
                $('#'+a+'').show();
                if (tableau[a-1]==="*"){
                    $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
                }
                else {
                    $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
                }
            }
            $('.1').attr('class', 'col-1 1');
        }
        /********************12********************/
        else if (compteur===12) {
            for (a = 0; a <= compteur; a++) {
                $('#' + a + '').show();
                if (tableau[a-1]==="*"){
                    $('#' + a).attr('src', 'Letters/CS/CS1.jpg')
                }
                else {
                    $('#' + a).attr('src', 'Letters/' + tableau[a - 1] + '/' + tableau[a - 1] + '1.jpg')
                }
            }
            $('.1').attr('class', 'col-1 1');
        }
        else {
            $('#nonpossible').show();
        }
});

/****************************couleur**********************************/

$('#blanc').click(function () {
    $('#bgchange').css("background-image","url(\"background/blanc.jpg\")")
});
$('#bleu').click(function () {
    $('#bgchange').css("background-image","url(\"background/bleu.jpg\")")
});
$('#bleufonce').click(function () {
    $('#bgchange').css("background-image","url(\"background/bleufonce.jpg\")")
});
$('#gris').click(function () {
    $('#bgchange').css("background-image","url(\"background/gris.jpg\")")
});
$('#noir').click(function () {
    $('#bgchange').css("background-image","url(\"background/noir.jpg\")")
});
$('#rose').click(function () {
    $('#bgchange').css("background-image","url(\"background/rose.jpg\")")
});
$('#rouge').click(function () {
    $('#bgchange').css("background-image","url(\"background/rouge.jpg\")")
});
/**********************************************************************/
$('#1').click();{

}