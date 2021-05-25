const openingBrackets = '<([{';
const closingBrackets = '>)]}';
const quotes = '"`\'';
const stack = [];

let bracketSymbolIndex = -1;
let quoteSymbolIndex = -1;
let isOpening = false;

const isPairBracket = () => bracketSymbolIndex >= 0;
const isPairQuote = () => quoteSymbolIndex >= 0;
const isPairSymbol = () => isPairBracket() || isPairQuote();

function isComparedSymbol() {
  const lastStackElem = stack[stack.length - 1];

  if (!lastStackElem) {
    return false;
  }

  return (
    lastStackElem == openingBrackets[bracketSymbolIndex] ||
    lastStackElem == quotes[quoteSymbolIndex]
  );
}

function setVars(localIsOpening, isBracket = true) {
  if (isBracket) {
    quoteSymbolIndex = -1;
  } else {
    bracketSymbolIndex = -1;
  }

  isOpening = localIsOpening;
}

function findPairSymbolIndex(symbol) {
  bracketSymbolIndex = openingBrackets.indexOf(symbol);

  if (isPairBracket()) {
    setVars(true);
    return;
  }

  bracketSymbolIndex = closingBrackets.indexOf(symbol);

  if (isPairBracket()) {
    setVars(false);
    return;
  }

  quoteSymbolIndex = quotes.indexOf(symbol);

  if (isPairQuote()) {
    if (!isComparedSymbol()) {
      setVars(true, false);
    } else {
      setVars(false, false);
    }
  }
}

function parsePairSymbols(str) {
  let curSymbol;

  stack.length = 0;

  for (let i = 0; i < str.length; i++) {
    curSymbol = str[i];

    findPairSymbolIndex(curSymbol);

    console.log(curSymbol);
    console.log(bracketSymbolIndex);
    console.log(quoteSymbolIndex);
    console.log(isOpening);
    console.log(stack);
    console.log(isComparedSymbol());

    if (isPairSymbol()) {
      if (isOpening) {
        stack.push(curSymbol);
      } else if (isComparedSymbol()) {
        if (!stack.pop(curSymbol)) {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
}

const str = '[](([ghjghjg]"hjghjdfg"))';

console.log(parsePairSymbols(str));
