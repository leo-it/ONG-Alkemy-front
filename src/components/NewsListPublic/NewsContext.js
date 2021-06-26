
// this is a context to the News in the page

import React, { createContext, useState } from 'react'
import clientAxios from '../../services/Axios/axios'

// export the constante that contain the context variable
export const NewsContext = createContext()

const NewsContextProvider = (props) => {

  const [news, setNews] = useState([])

  /*
    Function to iterate an array of objects and
    set them in the state to consume and render
    on screen.
  */

  const getNews = async () => {
    const res = await clientAxios.get('/news')
    const data = res.data.data
    console.log(data);
    setNews([...data])
  }

  // Function to find the clicked item iterating in the state
  // eslint-disable-next-line eqeqeq
  const findNew = (id) => news.filter(element => element.id == id)

  //functions to childrens can consume it
  return (
    <NewsContext.Provider value={{
      news,
      findNew,
      getNews
    }}>
      {props.children}
    </NewsContext.Provider>
  )
}

export default NewsContextProvider
