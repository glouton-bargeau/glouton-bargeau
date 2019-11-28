/*********************************************************************/
var pokemons = ["pokemon bug","Bulbizarre", "Herbizarre","Florizarre","Salameche","Reptincel","Dracaufeu","Carapuce","Carabaffe","Tortank","Chenipan","Chrysacier","Papillusion","Aspicot","Coconfort","Dardargnan","Roucool","Roucoups","Roucarnage","Rattata","Rattatac","Piafabec","Rapasdepic","Abo","Arbok","Pikachu","Raichu","Sabelette","Sablaireau","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Melofee","Melodelfe","Goupix","Feunard","Rondoudou","Grodoudou","Nosferapti","Nosferalto","Mystherbe","Ortide","Rafflesia","Paras","Parasect","Mimitoss","Aeromite","Taupiqueur","Triopikeur","Miaouss","Persian","Psykokwak","Akwakwak","Ferosinge","Colossinge","Caninos","Arcanin","Ptitard","Tetarte","Tartard","Abra","Kadabra","Alakazam","Machoc","Machopeur","Mackogneur","Chetiflor","Boustiflor","Empiflor","Tentacool","Tentacruel","Racaillou","Gravalanch","Grolem","Ponyta","Galopa","Ramoloss","Flagadoss","Magneti","Magneton","Canarticho","Doduo","Dodrio","Otaria","Lamantine","Tadmorv","Grotadmorv","Kokiyas","Crustabri","Fantominus","Spectrum","Ectoplasma","Onix","Soporifik","Hypnomade","Kraby","Krabboss","Voltorbe","Electrode","Noeunoeuf","Noadkoko","Osselait","Ossatueur","Kicklee","Tygnon","Excelangue","Smogo","Smogogo","Rhinocorne","Rhinoferos","Leveinard","Saquedeneu","Kangourex","Hypotrempe","Hypocean","Poissirene","Poissoroy","Stari","Staross","M. Mime","Insecateur","Lippoutou","Elektek","Magmar","Scarabrute","Tauros","Magicarpe","Leviator","Lokhlass","Metamorph","Evoli","Aquali","Voltali","Pyroli","Porygon","Amonita","Amonistar","Kabuto","Kabutops","Ptera","Ronflex","Artikodin","Electhor","Sulfura","Minidraco","Draco","Dracolosse","Mewtwo","Mew"];
/*********************************************************************/
$('#go').click(function (dopokemon) {
    /************var*et*random*********/
    var nombre =  Number($('#pkenumber').val().toUpperCase());
    var shiny = Math.round(Math.random()*5);
    var alola = Math.round(Math.random()*5);
    /***********************************/
    $('#bgpokedex').css("background-image","url(\"pokemon/pokedex ouvert.png\")")
        .css("height","900px");
    $('#margineset').css("margin-top","350px");
    if (nombre===19||nombre===20||nombre===26||nombre===27){

        if (alola === 1) {
            if (shiny === 1) {
                $('#nom').html("#"+ nombre + "   " + pokemons[nombre]);
                $('#pokemonimg').attr("src", "pokemon/" + nombre + "as.gif");
            } else {
                $('#nom').html("#"+ nombre + "   " + pokemons[nombre]);
                $('#pokemonimg').attr("src", "pokemon/" + nombre + "a.gif");
            }

        }
        else {
            if (shiny === 1) {
                $('#nom').html("#"+ nombre + "   " + pokemons[nombre]);
                $('#pokemonimg').attr("src", "pokemon/" + nombre + "s.gif");
            } else {
                $('#nom').html("#"+ nombre + "   " + pokemons[nombre]);
                $('#pokemonimg').attr("src", "pokemon/" + nombre + ".png");
            }

        }
    }
    else {
        if (shiny === 1) {
            $('#nom').html("#"+ nombre + "   " + pokemons[nombre]);
            $('#pokemonimg').attr("src", "pokemon/" + nombre +"s.gif");
        }
        else {
            $('#nom').html("#"+ nombre + "   " + pokemons[nombre]);
            $('#pokemonimg').attr("src", "pokemon/" + nombre + ".png");
        }
    }
});
