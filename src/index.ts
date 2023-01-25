import express from 'express';
import toLower, { toUpper } from './modules/test';

interface Message {
  message: string;
}

function printHi({ message }: Message) {
  console.log(message);
}

const lowerMessage = {
  message: toLower('Hello'),
};

const upperMessage = {
  message: toUpper('Hello'),
};

printHi(lowerMessage);
printHi(upperMessage);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello express');
});

app.listen(port);
