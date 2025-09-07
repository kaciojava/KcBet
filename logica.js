// detectar a lingua do usuario
document.addEventListener('DOMContentLoaded', function () {
    document.documentElement.lang = navigator.language || navigator.userLanguage;
});
