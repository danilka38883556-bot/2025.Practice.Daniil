function delayedPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Готово через 2 секунды");
    }, 2000);
  });
}
