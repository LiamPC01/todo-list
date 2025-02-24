import {setUpEventListeners, selectInbox, renderLevel, welcomePrompt} from './dom.js'
import {level, currentXP} from './xp.js'

welcomePrompt();

setUpEventListeners();

selectInbox();

renderLevel(level, currentXP);

localStorage.clear();




