import _ from 'underscore';
// console.log(_)

const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
const chars = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Kn', 'Q', 'K', 'A'];
export const deck = [];

suits.forEach((suit )=>{
    console.log(suit);

    chars.forEach((char, i)=>{
        console.log(char, i+2);

        deck.push({
            suit: suit,
            char: char,
            value: i+2
        })
    })
})
console.log(deck)

const shuffledDeck = _.shuffle(deck);
console.log(shuffledDeck);

// random nummer från 10 till 90
// const number = Math.round(Math.random()*80)+10;
const rand = _.random(10, 90);
console.log(rand);

// tA UT FEM RANDOM KORT FRÅN KORTLEKEN
const randomCard = _.sample(deck);
console.log(randomCard)
// console.log(shuffledDeck)

const deckWithout = _.without(deck, randomCard);
console.log(deckWithout);

const randomHand = _.sample(deckWithout, 5);
console.log(randomHand);

const deckWithoutHand = _.without(deckWithout, ...randomHand);
console.log(deckWithoutHand);