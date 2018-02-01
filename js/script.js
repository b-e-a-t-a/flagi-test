var url = 'https://restcountries.eu/rest/v1/name/';
var url1 = 'https://restcountries.eu/rest/v2/alpha/';
var countriesList = $('#countries');
var capitalsList = $('#capitals');
var flagsList = $('#flags');

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = "Poland";
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    capitalsList.empty();
    flagsList.empty();
    resp.forEach(function(item) {
        $('<li>').text(item.name).appendTo(countriesList);
        $('<li>').text(item.capital).appendTo(capitalsList);
        var flagCode = $('<li>').text(item.alpha3Code).appendTo(flagsList);
        searchCodes();
    });
}



/////////////////////

function searchCodes() {
    var flagCode = $('#flags').val();
    var countryName = $('#country-name').val();
    //var code = $(flagsList).val().toLowerCase();
    $.ajax({
        url: url1 + countryName,
        method: 'GET',
        success: showCountriesFlags
    });
    console.log('done');
}




function showCountriesFlags(resp) {
    flagsList.empty();
    resp.forEach(function(item) {
        //var flagWithPhoto = $('<img src="">');
        $('<img>').attr("src", item.flag).appendTo(flagsList);
    });
}




/////////////
