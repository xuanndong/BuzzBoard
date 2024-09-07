const date = new Date();
const month = date.toLocaleString('default', { month: 'long' });
let hours = date.getHours();
let newformat = hours >=12 ? 'PM': 'AM';
hours = hours % 12;


//messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: `${date.getDate()} ${month} ${date.getFullYear()} ${hours}: ${date.getMinutes()} ${newformat}`
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: `${date.getDate()} ${month} ${date.getFullYear()} ${hours}: ${date.getMinutes()} ${newformat}`
  }
];

module.exports  =  messages;