import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface ILesson {
  id: string
  title: string
}

function App() {
  const { data } = useQuery<{ lessons: ILesson[]}>(GET_LESSONS_QUERY)

  console.log(data)

  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY
  //   }).then(console.log)
  // }, [])

  return (
    <ul>
      {data?.lessons.map(lesson => <li key={lesson.id}>{lesson.title}</li>)}
    </ul>
  )
}

export default App
