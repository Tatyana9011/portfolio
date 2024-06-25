import animation from "./animation.js"


function handleInput(keyCode) {

    switch(keyCode) {

        case 'ArrowUp':

        animation('up');

            break;

        case 'ArrowDown':

        animation('down');

            break;

        case 'ArrowLeft':

        animation('left');

            break;

        case 'ArrowRight':

        animation('right');

            break;

    }

}

export default handleInput;
