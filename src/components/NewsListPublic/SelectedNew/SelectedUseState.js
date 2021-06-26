import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import { NewsContext } from '../NewsContext'

const SelectedUseState = () => {

  /*
    When a element is clicked in /novedades path
    this route (/novedades/:id) capture that id
    to bring and pass it to the function findNew,
    which is explained in the context file
  */

  const { findNew } = useContext(NewsContext)

  const [post, setPost] = useState({})
  const { id } = useParams()
  const result = findNew(id)[0]

  useEffect(() => {
    setPost(result)
  }, [])

  return [post]
}

export default SelectedUseState
