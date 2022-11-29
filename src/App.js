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

  const [blur, setBlur] = useState(false)
  const [sended, setSended] = useState(false)


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={handleSetInput} onBlur={handleBlur} className={!text && blur ? "error" : "norm"}/>
        <button  type='submit'>
          Отправить
        </button>
      </form>
      {sended && <div className='text right'>Сообщение успешно отправлено</div>}
      {(!text && blur) && <div className='text wrong'>Поле ввода не должно быть пустым</div>}
    </div>
  );
}

export default App;
