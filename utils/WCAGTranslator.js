const credentials =  require('../utils/translator_key.json');
const {Translate} = require('@google-cloud/translate').v2;
/*
class  WCAGTranslator {

    constructor() {
    }

    static translationApi = new Translate({
        projectId:'wcarg-362221',
        credentials:credentials
    });

    static translateText  = async(text)  => {
        // Translates the text into the target language. "text" can be a string for
        // translating a single piece of text, or an array of strings for translating
        // multiple texts.
        let [translations] = await WCAGTranslator.translationApi.translate(text, 'es');
        translations = Array.isArray(translations) ? translations : [translations];
        console.log('Translations:' + translations);
        return translations;
    }
}*/
const translationApi = new Translate({
    projectId:'wcarg-362221',
    credentials:credentials
});

async function translateText(text) {
    // Translates the text into the target language. "text" can be a string for
    // translating a single piece of text, or an array of strings for translating
    // multiple texts.
    let [translations] = await translationApi.translate(text, 'es');
    translations = Array.isArray(translations) ? translations : [translations];
    return translations;
}

module.exports = {
    "translateText": translateText
}







