import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', newUser)  
    .then(response => {
      return response.data
    })
}

export const login = user => {
    return axios
      .post('users/login', user)
      .then(response => {
        localStorage.setItem('usertoken', response.data)
        return response.data
      })
}

export const getProfile = () => {
  return axios
    .get('users/profile')
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.warn(err)
    })
}

export const validateToken = () => {
  return axios
    .get('users/validateToken')
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.warn(err)
    })
}

export const submitPost = post => {
  return axios
    .post('posts/submit', post)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.warn(err)
    })
}

export const getPosts = () => {
  return axios  
    .get('posts/fetch')
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.warn(err)
    })
}

export const removePost = postId => {
  console.log(postId)
  return axios
    .delete('posts/delete/' + postId)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.warn(err)
    })
}