var rules = require('./countriesRules');

function validateEmail(email) {
    /* Formats: address can't start or end with non alphanumeric char, allows symbols before @;
     only 2 to 6 alphanumeric chars between dots after @. Allows hyphen.
     Official allowed formats regEx: http://www.ex-parrot.com/~pdw/Mail-RFC822-Address.html */
    var regExpEmail = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@([-0-9a-zA-Z]+[.])+[a-zA-Z]+$", "g");
    return regExpEmail.test(email);
}

function validateTel(country, tel, callback) {
    /* Brasilian formats: all possible combinations to: 2 or 3 digits DDD, with or without brackets, with a
     white space after it; with or without hyphen in the middle of the number (includes SP numbers). */
    rules.countryIndex(country, function returnCountryIndex(index){
        if(index != -1){
            rules.getCountrysTelRules(index, function returnTelRules(error, res){
                if(!error) {
                    var testResult = false;
                    for(var rule in res) {
                        var regExpTel = new RegExp(res[rule], "g");
                        if(regExpTel.test(tel)) {
                            testResult = true;
                            break;
                        }
                    }
                    callback(testResult);
                } else {
                    callback(false);
                }
            });
        } else {
            callback(false);
        }
    });
}

function validateCEP(country, cep, callback) {
    //Brasilian formats: xxxxx-xxx ou xxxxxxxx.
    rules.countryIndex(country, function returnCountryIndex(index){
        if(index != -1){
            rules.getCountrysPostalRules(index, function returnPostalRules(error, res){
                if(!error) {
                    var testResult = false;
                    for(var rule in res) {
                        var regExpPostal = new RegExp(res[rule], "g");
                        if(regExpPostal.test(cep)) {
                            testResult = true;
                            break;
                        }
                    }
                    callback(testResult);
                } else {
                    callback(false);
                }
            });
        } else {
            callback(false);
        }
    });
}

function validateCPF(campo) {
    //Returns true to valid CPF.
    if(!(campo.length > 14)){
        var cpf = campo.replace(/\./g, "").replace(/-/g, "");
        var j = 0, k = 0, dig1 = 0, dig2 = 0, aux = 0, i = 10;
        for (var l = 0; l < 9; l++) {
            j += cpf[l] * i;
            i--;
        }
        dig1 = j % 11;
        if (dig1 > 1) {
            aux = dig1;
            dig1 = 11 - aux;
        } else dig1 = 0;
        if (dig1 != cpf[9]) {
            return false;
        }
        i = 11;
        for (var m = 0; m < 10; m++) {
            k += cpf[m] * i;
            i--;
        }
        dig2 = k % 11;
        if (dig2 > 1) {
            aux = dig2;
            dig2 = 11 - aux;
        } else dig2 = 0;
        if (dig2 != cpf[10]) {
            return false;
        }
        return true;
    } else {
        return false;
    }
}

function validateCNPJ(campo) {
    //Returns true to valid CNPJ.
    if(!(campo.length > 18)) {
        var cnpj = campo.replace(/\./g, "").replace(/\//g, "").replace(/-/g, "");
        var j = 0, k = 0, dig1 = 0, dig2 = 0, aux1 = 0, aux2 = 0, i = 5;
        for (var l = 0; l < 12; l++) {
            j = cnpj[l] * i;
            i--;
            if (i == 1) i = 9;
            aux1 += j;
        }
        dig1 = aux1 % 11;
        if (dig1 >= 2) {
            aux2 = dig1;
            dig1 = 11 - aux2;
        } else dig1 = 0;
        if (dig1 != cnpj[12]) {
            return false;
        }
        i = 6;
        for (var l = 0; l < 13; l++) {
            k += cnpj[l] * i;
            i--;
            if (i == 1) i = 9;
            aux2 += k;
        }
        dig2 = k % 11;
        if (dig2 >= 2) {
            aux2 = dig2;
            dig2 = 11 - aux2;
        } else dig2 = 0;
        if (dig2 != cnpj[13]) {
            return false;
        }
        return true;
    } else {
        return false;
    }
}

function isNull(value) {
    //Returns true for NULL value.
    return (value.length == 0 || value == undefined);
}

function limitField(limit, exact){
    //Format of possible length limitations of values for the regEx.
    if(exact) {
        return ("{" + limit + "}");
    } else {
        if(limit <= 1) {
            return "+";
        } else {
            return "{1," + limit + "}";
        }
    }
}

/* function f(value, limit, exact) must be filled with its value, an integer limit for the value's
 length and a boolean that indicates whether the length is exact or not */

function validateNumericField(value, limit, exact) {
    //Format: at least one digit, possible length limitations, allows negative numbers.
    var result = limitField(limit, exact);
    var regExpNumeric = new RegExp("^-?\\d" + result + "$", "g");
    return regExpNumeric.test(value);
}

function validateDecimalField(value, limit, exact) {
    /* Format: at least one digit, possible length limitations, allows negative numbers.
     Allows 1 or 2 decimals after a dot or comma. */
    var result = limitField(limit, exact);
    var regExpNumeric = new RegExp("^-?\\d" + result + "([.,]\\d{1,2})?$", "g");
    return regExpNumeric.test(value);
}

function validateAlphanumericField(value, limit, exact) {
    //Format: at least one char, possible length limitations, case insensitive.
    var result = limitField(limit, exact);
    var regExpNumeric = new RegExp("^\\w" + result + "$", "ig");
    return regExpNumeric.test(value);
}

exports.validateEmail = validateEmail;
exports.isNull = isNull;
exports.validateAlphanumericField = validateAlphanumericField;
exports.validateDecimalField = validateDecimalField;
exports.validateNumericField = validateNumericField;
exports.limitField = limitField;
exports.validateCNPJ = validateCNPJ;
exports.validateCPF = validateCPF;
exports.validateCEP = validateCEP;
exports.validateTel = validateTel;