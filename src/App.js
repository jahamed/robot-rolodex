import './App.css'
import CardList from './components/CardList'
import Search from './components/Search'
import { useEffect, useState } from 'react'

function App() {
  const [robots, setRobots] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setRobots(data))
  }, [])

  // search filters robots
  const filteredRobots = robots.filter((robot) => {
    console.log(robot.name)
    return robot.name.toLowerCase().includes(search.toLowerCase())
  })

  console.log(filteredRobots)
  return (
    <div>
      <Search setSearch={setSearch} />
      {search}
      <CardList robots={filteredRobots} />
    </div>
  )
}

export default App
