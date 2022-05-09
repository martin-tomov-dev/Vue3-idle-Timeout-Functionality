const sum = (a, b) => a + b;

<button onClick={(): void => console.log('clicked')}>Click here</button>>

const sum = function<number>(a: number, b: number) => { 
  return a+b
}

const promise = new Promise<void>((resolveRetunFn, rejectReturnFn) => {
  const result = sum(4, '5');
  if(typeof result === 'number') {
    resolveRetunFn(result);
  } else {
    rejectReturnFn('failed ' + result);
  }
  console.log(result);
  return "Hello";
});

promise
.then(result => console.log(result))
.catch(error => console.log(error))

const arr = [1,2,35];

console.log(arr.map(item => {
  console.log(item);
  return item;
}));
