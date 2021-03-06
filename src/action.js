import axios from 'axios';

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export const REQUEST_MUSICS = 'REQUEST_MUSICS'
export const RECEIVE_MUSICS = 'RECEIVE_MUSICS'
export const ADD_NEW_MUSIC = 'ADD_NEW_MUSIC'

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return axios.get(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.data)
      .then(data => dispatch(receivePosts(subreddit, data)))
  }
}

export function fetchMusics() {
  return dispatch => {
    dispatch({
      type: REQUEST_MUSICS
    });
    return axios.get(`https://music-serer-api-1310.herokuapp.com/music`)
      .then(response => response.data)
      .then(data => dispatch({
        type: RECEIVE_MUSICS,
        data
      }))
  }
}

export function addNewMusic(title, artist, music) {
  return dispatch => {
    dispatch({
      type: ADD_NEW_MUSIC,
      title,
      artist,
      music,
    });
    let formData = new FormData()

    formData.append('title', title)
    formData.append('artist', artist)
    formData.append('music', music)
    return axios.post(`https://music-serer-api-1310.herokuapp.com/music`, formData)
      .then(response => {
        console.log('response =====>', response)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}