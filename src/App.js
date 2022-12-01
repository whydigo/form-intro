import { useState } from 'react';
import './style.css'
function App() {
  const [text, setText] = useState('')

  const handleSetInput = (e) => {
    setText(e.target.value)
    setSended(false)
  }

  const handleSubmit = (e) => {
    console.log(text)
    e.preventDefault()
    setText('')
    setSended(true)
    setBlur(false)
  }

  const handleBlur = () => {
    setBlur(true)
    setSended(false)
  }

  const addTags = () => {
    setTag([
      ...tag,
      {
        text: text
      }
    ]);
    setText('')
  }

  const handleDelete = (i) => {
    const filtered = tag.filter((tag, index) => {
      if (index === i) {
        return false
      } else {
        return true
      }
    })
    setTag(filtered)
  }


  const [blur, setBlur] = useState(false)
  const [sended, setSended] = useState(false)
  const [tag, setTag] = useState([
    {
      text: 'JavaScript'
    },
    {
      text: 'TypeScript'
    },
    {
      text: 'MySQL'
    }
  ])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' 
        value={text} 
        onChange={handleSetInput} 
        onBlur={handleBlur} 
        className={!text && blur ? "error" : "norm"}/>
        <button  type='submit' disabled={!text && true} className={text ? 'sub' : 'notsub'} onClick={addTags}>
          Отправить
        </button>
      </form>
      {sended && <div className='text right'>Сообщение успешно отправлено</div>}
      {(!text && blur) && <div className='text wrong'>Поле ввода не должно быть пустым</div>}
      <div className='tags'>
      {tag.map((item, index) => <div className="tag">{item.text} <button className="dlt" onClick={() => {handleDelete(index)}}>x</button> </div>)}
      </div>
    </div>
  );
}

export default App;