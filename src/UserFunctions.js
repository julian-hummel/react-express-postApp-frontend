import axios from 'axios'

export const register = newUser => {
  return axios
    .post('https://glacial-fortress-07261.herokuapp.com/users/register', newUser)  
    .then(response => {
      return response.data
    })
}

export const login = user => {
    return axios
      .post('https://glacial-fortress-07261.herokuapp.com/users/login', user)
      .then(response => {
        localStorage.setItem('usertoken', response.data)
        return response.data
      })
}

export const getProfile = () => {
  return axios
    .get('https://glacial-fortress-07261.herokuapp.com/users/profile')
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.warn(err)
    })
}

export const validateToken = () => {
  return axios
    .get('https://glacial-fortress-07261.herokuapp.com/users/validateToken')
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.warn(err)
    })
}

export const submitPost = post => {
  return axios
    .post('https://glacial-fortress-07261.herokuapp.com/posts/submit', post)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.warn(err)
    })
}

export const getPosts = () => {
  return axios  
    .get('https://glacial-fortress-07261.herokuapp.com/posts/fetch')
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.warn(err)
    })
}

export const removePost = postId => {
  return axios
    .delete('https://glacial-fortress-07261.herokuapp.com/posts/delete/' + postId)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.warn(err)
    })
}

export const sendEmails = email => {
  return axios
    .post('https://glacial-fortress-07261.herokuapp.com/emails/sendemail', email)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.warn(err)
    })
}

export const updateUser = user => {
  return axios
    .put('https://glacial-fortress-07261.herokuapp.com/users/update/' + user.email + '/' + user.notification)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.warn(err)
    })
}

export const submitComment = comment => {
  return axios
    .post('https://glacial-fortress-07261.herokuapp.com/posts/submitComment', comment)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.warn(err)
    })
}

export const getRelatedComments = post => {
  return axios  
    .get('https://glacial-fortress-07261.herokuapp.com/posts/fetchComments/' + post)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.warn(err)
    })
}



