import {setUpEventListeners, selectInbox, renderLevel} from './dom.js'
import {level, currentXP} from './xp.js'



setUpEventListeners();

selectInbox();

renderLevel(level, currentXP);

// localStorage.clear();




