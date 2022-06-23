import { OCCUPATIONS } from './constants.js';
import { Character } from './Character.js';

const character = new Character();
$.when( $.ready ).then(() => {
    //generate occupations
    generateOccupations(character.occupation.id);
    //generate avail traits
    generateAvailTraits()
    //repaint Chosen Traits and Skills
});

function chooseOccupation(id) {
console.log(id);
}

function addTrait(id) {

}

function removeTrait(id) {

}

function generateOccupations(activeId) {
    const occupationListEl = $('#occupations');
    const occupationListEls = [];
    Object.entries(OCCUPATIONS).forEach(([key, occupation]) => {
        const name_Pascal = key.replace(' ', '');
        const container = $('<div/>', {id: key}).on('click', () => chooseOccupation(key));
        if (key !== 'Unemployed') {
            $('<img/>').attr('src', `images/occupations/${name_Pascal}.png`).appendTo(container);
        }
        container.append(`<span>${key}</span>`);
        if (key === activeId) {
            container.addClass("active")
        }
        occupationListEls.push(container);
    });
    occupationListEl.append(occupationListEls);
}