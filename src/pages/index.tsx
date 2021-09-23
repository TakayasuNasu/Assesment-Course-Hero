import React, { useState, useEffect } from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Section = styled.section`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  width: min(96%, 765px);
  button: {
    display: block;
    height: 100%;
  }
  div.flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  div.input {
    width: 80%;
  }
  ul.ul {
    display: grid;
    grid-row-gap: 12px;
  }
`

const canSeparate = (input: any) => {
  const words = input.split(' ')
  if (words.length < 2) {
    return false
  } else {
    return true
  }
}

const validCase2 = (input: string) => {
  const result = /([0-9].*[a-zA-Z]|[a-zA-Z].*[0-9])/.test(input)
  return result
}

const validCase3 = (input: string[]) => {
  const f = input[0]
  const s = input[1]
  const t = input[2]
  if (/^[a-z]+$/i.test(f)) {
    if (!/^\d+$/.test(s)) return false
  }
  if (/^\d+$/.test(s)) {
    console.log(2)
    if (/^\d+$/.test(t)) return false
  }
  if (/^[a-z]+$/i.test(t)) {
    console.log(3)
    return isSemester(t)
  }
  if (/^\d+$/.test(t)) {
    console.log(4)
    return correctYear(t)
  }

  const splitString = splitFilter(t)
  console.log(splitString)
  if (splitString.length != 2) return false
  const l = splitString[0]
  const r = splitString[1]
  if (/^[a-z]+$/i.test(l)) {
    return isSemester(l)
  } else {
    if (!correctYear(l)) return false
  }

  if (/^[a-z]+$/i.test(r)) {
    return isSemester(r)
  } else {
    if (!correctYear(r)) return false
  }

  return true
}

const validCase4 = (input: string[]) => {
  const first = input[0]
  const second = input[1]
  const third = input[2]
  const fourth = input[3]

  if (!/^[a-z]+$/i.test(first)) return false
  if (!/^\d+$/.test(second)) return false

  if (/^[a-z]+$/i.test(third)) {
    return isSemester(third)
  } else {
    if (!correctYear(third)) return false
  }

  if (/^[a-z]+$/i.test(fourth)) {
    return isSemester(fourth)
  } else {
    if (!correctYear(fourth)) return false
  }

  if (/^[a-z]+$/i.test(third) && /^[a-z]+$/i.test(fourth)) return false

  if (/^\d+$/.test(third) && /^\d+$/.test(fourth)) return false
  return true
}

const isSemester = (w: string) => {
  return /^(Spring|Summer|Fall|Winter|S|Su|F|W)$/i.test(w)
}

const correctYear = (y: string) => {
  if (y.length != 2 && y.length != 4) {
    return false
  }
  return true
}

const splitFilter = (input: string) => {
  return input.split(/(\d+)/).filter((i: string) => i)
}

const divideer = (input: string[]) => {
  let result = true
  switch (input.length) {
    case 2:
      result = validCase2(input[0])
      break
    case 3:
      result = validCase3(input)
      break
    case 4:
      result = validCase4(input)
      break
    default:
  }
  return result
}

const add2 = (input: string[]) => {
  const student: Student = {
    department: '',
    courseNumber: '',
    year: '',
    semester: ''
  }
  const f = input[0]
  const s = input[1]
  const word = f.replace(/(:|-)/, '')
  const departmentAndNumber = splitFilter(word)
  student.department = departmentAndNumber[0]
  student.courseNumber = departmentAndNumber[1]

  const splitString = splitFilter(s)
  const l = splitString[0]
  const r = splitString[1]
  if (/^[a-z]+$/i.test(l)) {
    student.semester = l
  } else {
    student.year = l
  }

  if (/^[a-z]+$/i.test(r)) {
    student.semester = r
  } else {
    student.year = r
  }
  return student
}

const add3 = (input: string[]) => {
  const student: Student = {
    department: '',
    courseNumber: '',
    year: '',
    semester: ''
  }
  const f = input[0]
  const s = input[1]
  const t = input[2]

  if (/^[a-z]+$/i.test(f)) {
    student.department = f
    student.courseNumber = s
    const splitString = splitFilter(t)
    const l = splitString[0]
    const r = splitString[1]
    if (/^[a-z]+$/i.test(l)) {
      student.semester = l
    } else {
      student.year = l
    }

    if (/^[a-z]+$/i.test(r)) {
      student.semester = r
    } else {
      student.year = r
    }
  } else {
    const word = f.replace(/(:|-)/, '')
    const departmentAndNumber = splitFilter(word)
    student.department = departmentAndNumber[0]
    student.courseNumber = departmentAndNumber[1]

    if (/^\d+$/.test(s)) {
      student.year = s
      student.semester = t
    } else {
      student.year = t
      student.semester = s
    }
  }
  return student
}

const add4 = (input: string[]) => {
  const student: Student = {
    department: '',
    courseNumber: '',
    year: '',
    semester: ''
  }
  const first = input[0]
  const second = input[1]
  const third = input[2]
  const fourth = input[3]

  student.department = first
  student.courseNumber = second

  if (/^\d+$/.test(third)) {
    student.year = third
    student.semester = fourth
  } else {
    student.year = fourth
    student.semester = third
  }
  return student
}

const justfyInput = (input: string[]): Student => {
  switch (input.length) {
    case 2:
      return add2(input)
    case 3:
      return add3(input)
    case 4:
      return add4(input)
    default:
      const student: Student = {
        department: '',
        courseNumber: '',
        year: '',
        semester: ''
      }
      return student
  }
}

type Student = {
  department: string,
  courseNumber: string,
  year: string,
  semester: string,
}

const Home: FC = () => {
  const [input, setInput] = useState('')
  const [students, setStudents] = useState<Student[]>([])
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (error) {
      setMessage('Error: Could not parse Course')
    } else {
      setMessage('')
    }
  }, [error])

  const handleInput = (e: any) => {
    const text = e.target.value
    if (!canSeparate(text)) {
      setError(true)
      return
    }
    const words = text.split(' ')
    if (!divideer(words)) {
      setError(true)
      return
    }
    setInput(text)
    setError(false)
  }

  const handleClick = (e: any) => {
    e.preventDefault()
    console.log(input)
    if (!input) return
    const student:Student = justfyInput(input.split(' '))
    const studentList = students
    studentList.push(student)
    setStudents(studentList)
    setInput('')
  }

  const StudentList = students.map((s: Student, i: number) => {
    return (
      <Accordion key={i}>
        <AccordionSummary>
          <p>
            {s.department} {s.courseNumber}
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="ul">
            <li>Department: {s.department}</li>
            <li>Course Number: {s.courseNumber}</li>
            <li>Year: {s.year}</li>
            <li>Semester: {s.semester}</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    )
  })

  return (
    <Section>
      <p>Course</p>
      <div className="flex">
        <TextField
          className="input"
          error={error}
          helperText={message}
          variant="filled"
          onChange={handleInput}
          defaultValue={input}
        />
        <Button onClick={handleClick} variant="outlined" size="large" disabled={error}>
          Submit
        </Button>
      </div>
      {StudentList}
    </Section>
  )
}

export default Home
