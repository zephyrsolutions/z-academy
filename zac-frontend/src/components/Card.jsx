import React from 'react'

const Card = () => {
  return (
    <div>
        <div className="">
            <div className="p-6 max-w-sm mx-auto bg- rounded-xl shadow-lg flex items-center space-x-4">
                <div>
                    <img className="h-16 w-28" src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=626&ext=jpg"
                    alt="" />

                </div>
                <div>
                    <div className="text-2xl font-medium text-blue-900">
                        Tailwind CSS
                        <p className="text-slate-500 text-base">By Ankur Goswami</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
