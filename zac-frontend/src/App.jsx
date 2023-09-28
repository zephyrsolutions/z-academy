import './App.css'
import { AppProvider } from './context/AppState';
import DepartmentList from './DepartmentList';
import CourseList from './CourseList';

function App() {  

  return (
    <>
      <AppProvider>
        {/* <div className="w-[15%] h-20 border-4 border-blue-400 rounded-md flex flex-col justify-center items-center">
          <p className="contentClass"> School Website </p>
          <p className="priceClass"> Rs.5999/- only </p>
        </div> */}
        <DepartmentList />
        <CourseList />
      </AppProvider>      
    </>
  )
}

export default App

