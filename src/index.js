$(document).ready(() => {
    if (module.hot) module.hot.accept();

    $('body').append(
        $('<h2/>').text('Welcome to the EFT Ammo REST API'),
        $('<p/>').text('This website serves as an endpoint for the API; The data can be explored below:'),
        $('<button id="types"/>')
            .text('Ammo Types')
            .click(() => window.location.href = '/ammo/types'),
        $('<button id="pdw"/>')
            .text('PDW Cartridges')
            .click(() => window.location.href = '/ammo/pdw'),
        $('<button id="pistol"/>')
            .text('Pistol Cartridges')
            .click(() => window.location.href = '/ammo/pistol'),
        $('<button id="rifle"/>')
            .text('Rifle Cartridges')
            .click(() => window.location.href = '/ammo/rifle'),
        $('<button id="shotgun"/>')
            .text('Shotgun Cartridges')
            .click(() => window.location.href = '/ammo/shotgun'),
    );
});
