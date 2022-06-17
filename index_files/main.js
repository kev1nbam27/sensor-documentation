var known = { en: true, de: true};
var lang = 'en';

$(document).ready(function() {

    SyntaxHighlighter.defaults['toolbar'] = false;
    SyntaxHighlighter.all();
    
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.querySelector('html').classList.toggle('dark', true);
    }
    
    lang  = ((navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || 'en').substr(0, 2);

    if(!known[lang])
        lang = 'en';

    $('div[lang='  + lang + ']').show();

    if (lang == "en") {
        $('div[lang=' + "de" + ']').hide();
        document.querySelector('html').classList.toggle('en', false);
    } else if (lang == "de") {
        $('div[lang=' + "en" + ']').hide();
        document.querySelector('html').classList.toggle('en', true);
    }
});
