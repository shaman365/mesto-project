const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort-24',
  headers: {
    authorization: 'ed711b57-be95-4829-8ba4-6b07c1de44be',
    'Content-Type': 'application/json'
  }
}

const getInitialCards = () => {
  return new Promise((resolve, reject) => {
    fetch(config.baseUrl.concat('/cards'), { headers: config.headers })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .then(cardList => {
        resolve(cardList)
      })
      .catch(err => {
        console.error('getInitialCards err:', err)
        reject(err)
      })
  })
}

export { getInitialCards }
