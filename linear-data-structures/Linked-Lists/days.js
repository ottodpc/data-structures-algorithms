const LinkedList = require('./LinkedList');

// NOTE Creating an instance of our list, and using our .printList() method to track the changes we made
const weekDays = new LinkedList();
// list head
weekDays.addToHead('Lundi');
weekDays.addToHead('Mardi');
weekDays.addToTail('Mercredi');
weekDays.addToTail('Jeudi');
weekDays.addToTail('Vendredi');
// tail
weekDays.addToTail('Samedi');
weekDays.addToTail('Dimanche');
// remove Monday
weekDays.removeHead();

weekDays.printList(); // " Mardi Mercredi Jeudi Vendredi Samedi Dimanche"
