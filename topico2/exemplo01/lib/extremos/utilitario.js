const { when, ifElse } = require('ramda');

const reduceMaior = (mAtual, currentValue, currentIndex) => when(
    mAtual => currentValue > mAtual.maior,
    () => ({
        maior: currentValue,
        indiceMaior: currentIndex
    })
)(mAtual);

const reduceMenor = (mAtual, currentValue, currentIndex) => when(
    mAtual => currentValue < mAtual.menor,
    () => ({
        menor: currentValue,
        indiceMenor: currentIndex
    })
)(mAtual);

exports.acharExtremos = arr => ifElse(
    arr => arr == null || arr.length === 0,
    () => ({}),
    arr => ({
        ...arr.reduce(reduceMaior, { maior: arr[0], indiceMaior: 0 }),
        ...arr.reduce(reduceMenor, { menor: arr[0], indiceMenor: 0 })
    })
)(arr);