let hamburger = document.querySelector('.hamburger')
let times = document.querySelector('.times')
let mobileNav = document.querySelector('.mobile-nav')
let contactButton = document.querySelector('#contact-button')

hamburger.addEventListener('click', function() {
    mobileNav.classList.add('open');
});

times.addEventListener('click', function() {
    mobileNav.classList.remove('open');
});

contactButton.addEventListener('click', function() {
    mobileNav.classList.remove('open');
});

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search-keyword');
    filter = input.value.toUpperCase();
    ul = document.getElementById("pub-list");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function myFunction2() {
    // Declare variables
    var input, filter, articles, article, a, i, txtValue;
    input = document.getElementById('search-keyword-sm');
    filter = input.value.toUpperCase();
    articles = document.getElementById("articles");
    article = articles.getElementsByTagName('div');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < article.length; i++) {
        a = article[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            article[i].style.display = "";
        } else {
            article[i].style.display = "none";
        }
    }
}