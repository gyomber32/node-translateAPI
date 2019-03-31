var express = require('express');
var router = express.Router();

var LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');

var languageTranslator = new LanguageTranslatorV3({
    version: '2018-05-01',
    iam_apikey: 'ZK3ZIq0ck8s9y3-Bem8xA35EQmardnU1ZR7IV7wALo5Y',
    url: 'https://gateway-lon.watsonplatform.net/language-translator/api'
});

/* GET english to hungarian */
router.get('/sl=en&tl=hu&word=:word', function (req, res, next) {

    var parameters = {
        text: req.params.word,
        model_id: 'en-hu'
    };

    languageTranslator.translate(parameters, function (error, response) {
        if (error) {
            res.status(404).send(error);
        } else {
            let word = (response.translations[0].translation).toLowerCase();
            res.status(200).send(word);
        }
    });
});

/* GET hungarian to english */
router.get('/sl=hu&tl=en&word=:word', function (req, res, next) {

    var parameters = {
        text: req.params.word,
        model_id: 'hu-en'
    };

    languageTranslator.translate(parameters, function (error, response) {
        if (error) {
            res.status(404).send(error);
        } else {
            let word = (response.translations[0].translation).toLowerCase();
            res.status(200).send(word);
        }
    }
    );
});

module.exports = router;

