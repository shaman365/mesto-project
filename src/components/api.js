const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort-24',
  headers: {
    authorization: 'ed711b57-be95-4829-8ba4-6b07c1de44be',
    'Content-Type': 'application/json'
  }
}

const getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

const getInitialCards = () => {
  return fetch(config.baseUrl.concat('/cards'), { headers: config.headers })
    .then(res => { return getResponseData(res) })
}

const postCard = (card) => {
  return fetch(config.baseUrl.concat('/cards'),
    {
      method: 'POST',
      body: JSON.stringify(card),
      headers: config.headers
    }
  )
    .then(res => {
      return getResponseData(res);
    })
}

const deleteCard = (id) => {
  return fetch(config.baseUrl.concat('/cards/').concat(id),
    {
      method: 'DELETE',
      headers: config.headers
    }
  )
    .then(res => {
      return getResponseData(res);
    })
}

const setLike = (id) => {
  return fetch(config.baseUrl.concat('/cards/likes/').concat(id),
    {
      method: 'PUT',
      headers: config.headers
    }
  )
    .then(res => {
      return getResponseData(res);
    })
}

const removeLike = (id) => {
  return fetch(config.baseUrl.concat('/cards/likes/').concat(id),
    {
      method: 'DELETE',
      headers: config.headers
    }
  )
    .then(res => {
      return getResponseData(res);
    })
}

const getUserInfo = () => {
  return fetch(config.baseUrl.concat('/users/me'), { headers: config.headers })
    .then(res => {
      return getResponseData(res);
    })
};

const updateUserInfo = (userInfo) => {
  const resourcePath = userInfo.avatar ? '/users/me/avatar' : '/users/me';
  return fetch(config.baseUrl.concat(resourcePath),
    {
      method: 'PATCH',
      body: JSON.stringify(userInfo),
      headers: config.headers
    }
  )
    .then(res => {
      return getResponseData(res);
    })
}

export { getInitialCards, postCard, deleteCard, getUserInfo, updateUserInfo, setLike, removeLike }
