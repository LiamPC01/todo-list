import loadInbox from './loadInbox.js';
import loadToday from './loadToday.js';
import loadUpcoming from './loadUpcoming.js'




loadInbox();

const inboxBtn = document.getElementById('inbox-btn');
inboxBtn.addEventListener('click', loadInbox);

const todayBtn = document.getElementById('today-btn');
todayBtn.addEventListener('click', loadToday);

const upcomingBtn = document.getElementById("upcoming-btn");
upcomingBtn.addEventListener('click',loadUpcoming);
