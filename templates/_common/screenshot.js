$('a.toggle').on('click', function(e) {
    e.preventDefault();

    if (!$(this).hasClass('collapse')) {
        if ($(this).text() === 'Screenshot -') {
            $(this.parentElement).find('img').hide();
        } else if ($(this).text() === 'Screenshot +') {
            const placeholders = $(this.parentElement).find('screenshot-placeholder');
            if (placeholders.length) {
                // replace placeholders by img
                placeholders.each(function (o, element) {
                    const newElement = $('<img/>');
                    Array.prototype.slice.call(element.attributes).forEach(function(a) {
                      newElement.attr(a.name, a.value);
                    });
                    $(element).wrapInner(newElement).children(0).unwrap();
                  });
            }
            $(this.parentElement).find('img').show();
        }
    }

    if ($(this).text().includes(' -')) {
        $(this).text($(this).text().replace(' -', ' +'));
    } else {
        $(this).text($(this).text().replace(' +', ' -'));
    }
});
