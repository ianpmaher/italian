// https://libretranslate.com/docs/
// https://www.collinsdictionary.com/collins-api
// BASE URL:
// https://api.collinsdictionary.com/api/v1
// English to Italian:
// http://api.collinsdictionary.com/api/v1/dictionaries/english-italian/
// Italian to English:
// http://api.collinsdictionary.com/api/v1/dictionaries/italian-english/

// example translating "dog" from English to Italian:
// http://api.collinsdictionary.com/api/v1/dictionaries/english-italian/entries/dog_1
// http://dps.api-lib.idm.fr/libraries.html#js

const Collins = require("collins");
const serverName = "api.collinsdictionary.com";
const accessKey = process.env.API_KEY_COLLINS_DICTIONARY;

const dict = new Collins(serverName, accessKey);

// search
const Dictionary = () => {
    return(
        dict.search("dog", "english-italian", function(err, data) {
            console.log(data);
        })
    )
}

export default Dictionary; 