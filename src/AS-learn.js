// Функция, которая возвращает Promise и имитирует задержку в выполнении
function sleep(ms) {
  return new Promise(resolve => {
    console.log('start function with', ms);
    setTimeout(resolve, ms);
    console.log('finish function with', ms);
  });
}

async function asyncFunction() {
  console.log('Начало выполнения асинхронной функции');
  
  // const sleep1 = sleep(2000); // Запускаем первую задержку
  // const sleep2 = sleep(3000); // Запускаем вторую задержку
  const timer1 = Date.now();
  await getRequest('https://random-data-api.com/api/users/random_user');
  const timer2 = Date.now();
  console.log(Date.now() - timer1);
  await getRequest('https://random-data-api.com/api/users/random_user');
  console.log(Date.now() - timer2);
  console.log('total: ', Date.now() - timer1);

  const request1 = getRequest('https://random-data-api.com/api/users/random_user');
  const request2 = getRequest('https://random-data-api.com/api/users/random_user');
  const datae = Date.now();
  await Promise.all([request1, request2]);
  console.log(Date.now() - datae);

  return true;
}


// Вызываем асинхронную функцию
asyncFunction()
  .then(result => {
    console.log(result); // Выведет "Готово!"
  })
  .catch(error => {
    console.log('vse slomalos')
    console.error(error.message);
  });


  async function getRequest(URL) {
    const responce = await fetch(URL);
    return responce.json();
  }

  



