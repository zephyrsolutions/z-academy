import React from 'react'
import { useAppContext } from '../context/AppProvider';

function SubjectsList() {
    const { subjects } = useAppContext();

  return (
    <div>
      <h2>Subjects</h2>
      <ul>
        {subjects.map((subject) => (
          <li key={subject._id}>{subject.subjectName}</li>
        ))}
      </ul>
    </div>
  )
}

export default SubjectsList
