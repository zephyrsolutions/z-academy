import React from 'react'
import { useAppContext } from '../context/App/AppProvider';

const SyllabusList = () => {
    const {syllabus} = useAppContext()

  return (
    <div>
        <h2>Syllabus</h2>
        <ul>
            {syllabus.map((s) => (
                <img src={s.syllabusImage} />
            ))}
        </ul>
    </div>
  )
}

export default SyllabusList
