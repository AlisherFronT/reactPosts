import React, {useState} from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'


const Form = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})
    

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
          ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

  return (
    <form>

        <MyInput 
        type="text" 
        placeholder="Введите название поста"
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        />

        <MyInput 
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type="text"
        placeholder="Введите описание поста"
        />


        <MyButton onClick={addNewPost} >Создать Пост</MyButton>
    </form>
  )
}

export default Form