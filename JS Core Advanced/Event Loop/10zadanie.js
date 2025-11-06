function randomDelayPromise() {
  const randomSeconds = Math.floor(Math.random() * 10) + 1;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomSeconds <= 5) {
        resolve(`Успех! Задержка составила ${randomSeconds} секунд.`);
      } else {
        reject(new Error(`Ошибка! Задержка составила ${randomSeconds} секунд.`));
      }
    }, randomSeconds * 1000);
  });
}

randomDelayPromise()
  .then(result => console.log(result))
  .catch(error => console.error(error.message));
