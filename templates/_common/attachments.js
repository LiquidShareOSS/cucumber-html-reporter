const selectionColor = '#F99';

$('a.toggle').on('click', function (e) {
    e.preventDefault();

    if ($(this).text().includes(' -')) {
        $(this).text($(this).text().replace(' -', ' +'));
    } else {
        $(this).text($(this).text().replace(' +', ' -'));
    }
});

$('a.screenshot-toggle').on('click', function (e) {
    e.preventDefault();

    const element = $(this);
    if (element.hasClass('collapsed')) {
        const placeholders = $(this.parentElement).find('screenshot-placeholder');
        if (placeholders.length) {
            // replace placeholders by img
            placeholders.each(function (o, element) {
                const newElement = $('<img/>');
                Array.prototype.slice.call(element.attributes).forEach(function (a) {
                    newElement.attr(a.name, a.value);
                });
                $(element).wrapInner(newElement).children(0).unwrap();
            });
        }

        element.siblings().css('color', '');
        element.css('color', selectionColor);
        $(this.parentElement).find('.attachment-container').collapse('hide');
        $(this.parentElement).find('.attachment-view').attr('data', '');
    } else {
        element.css('color', '');
    }
});

$('.attachment-link').on('click', function (event) {
    event.preventDefault();
    const element = $(this);
    const containerElement = $(this.parentElement).find('.attachment-container');
    const path = element.attr('href');
    const viewElement = containerElement.find('.attachment-view');

    if (path !== viewElement.attr('data')) {
        containerElement.collapse('show');
        viewElement.attr('data', path);

        $(this.parentElement).find('.screenshot').collapse('hide');
        element.siblings().css('color', '');
        element.css('color', selectionColor);
    } else {
        containerElement.collapse('hide');
        viewElement.attr('data', '');

        element.css('color', '');
    }
});
