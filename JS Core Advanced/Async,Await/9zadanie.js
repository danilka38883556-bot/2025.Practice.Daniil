async function runAsync() {
  const result = await delayedPromise();
  console.log(result);
}

runAsync(); 
