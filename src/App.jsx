import Input from "./components/Input"
import FormItem from "./components/FormItem"
import Parent from "./components/Parent"
import { useState, useEffect, useRef } from 'react'

const App = () => {
  const [data, setData] = useState({
    first_name: '',
  })

  const [todos, setTodos] = useState([
    {
      id: 1,
      name: 'name1',
    },
    {
      id: 2,
      name: 'name2',
    }
  ])
  console.log('APP component')

  const onChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  return (
    <div style={{margin: '100px'}}>
      <div>{ JSON.stringify(data) }</div>
      <FormItem
        label="Tên"
      >
        <Input
          name="first_name"
          value={data.first_name}
          onChange={onChange}
        />
      </FormItem>
      <Parent/>

      { todos.map((item) =>
        (<div key={item.id}>{item.name}</div>)
      )}
    </div>
  )
}

export default App
