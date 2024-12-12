import Project from './project.js'

export const selectedProject = new Project("selectedProject");
export const inboxProject = new Project("inboxProject");
export const todayProject = new Project("todayProject");
export const upcomingProject = new Project("upcomingProject");

selectedProject.todoArr = inboxProject.todoArr;