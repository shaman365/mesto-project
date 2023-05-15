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
};

const postCard = (card) => {
  return new Promise((resolve, reject) => {
    fetch(config.baseUrl.concat('/cards'),
      {
        method: 'POST',
        body: JSON.stringify(card),
        headers: config.headers
      }
    )
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .then(card => {
        resolve(card)
      })
      .catch(err => {
        console.error('postCard err:', err)
        reject(err)
      })
  })
}

const deleteCard = (id) => {
  return new Promise((resolve, reject) => {
    fetch(config.baseUrl.concat('/cards/').concat(id),
      {
        method: 'DELETE',
        headers: config.headers
      }
    )
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .then(card => {
        resolve(card)
      })
      .catch(err => {
        console.error('postCard err:', err)
        reject(err)
      })
  })
}

const setLike = (id) => {
  return new Promise((resolve, reject) => {
    fetch(config.baseUrl.concat('/cards/likes/').concat(id),
      {
        method: 'PUT',
        headers: config.headers
      }
    )
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .then(card => {
        resolve(card)
      })
      .catch(err => {
        console.error('setLike err:', err)
        reject(err)
      })
  })
}

const removeLike = (id) => {
  return new Promise((resolve, reject) => {
    fetch(config.baseUrl.concat('/cards/likes/').concat(id),
      {
        method: 'DELETE',
        headers: config.headers
      }
    )
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .then(card => {
        resolve(card)
      })
      .catch(err => {
        console.error('removeLike err:', err)
        reject(err)
      })
  })
}

export { getInitialCards, postCard, deleteCard }
