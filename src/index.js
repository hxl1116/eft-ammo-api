$(document).ready(() => {
    if (module.hot) module.hot.accept();

    $('body').append(
        $('<p/>').text('Hello Webpack!'),
        $('<button/>')
            .text('Show Credentials')
            .click(() => {
                // $.getJSON('/credentials', (data) => {
                //     $('#username').text(`Username: ${data.username}`);
                //     $('#password').text(`Password: ${data.password}`)
                // });
            }),
        $('<p id="username"/>'),
        $('<p id="password"/>')
    )
});
