// JavaScript source code

function updateUrl(url) {
    //if ('history' in window) {
    //    window.history.pushState(url, url, url);
    //} else {
    window.location.hash = url;
    //}
}

var $pages;
var $links;

function navigateToPage(page) {
    $this = $links.filter("[href='" + page + "']");
    $links.removeClass("active");
    $this.addClass("active")

    $pages.hide();
    $page = $pages.filter("[data-page='" + page + "']")
    if ($page.length == 0)
        $page = $pages.filter("[data-page='not-found']");

    $page.show();
    updateUrl("/" + page);
}

$(function () {

    $pages = $("[data-page]");
    $links = $(".menu-item").click(function (e) {
        e.preventDefault();

        $this = $(this);
        navigateToPage($this.attr('href'));
    });

    var page = window.location.hash;
    if (page == null || page == '')
        page = 'chromium-updater';

    navigateToPage(page);

});
