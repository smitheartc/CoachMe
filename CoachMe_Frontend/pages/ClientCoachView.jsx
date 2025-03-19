import React from "react";
import {Link, useLocation} from "react-router-dom"

export default function ClientCoachView() {
  const coachData = useLocation().state;
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-xl text-center font-bold">{coachData.name}</h1>
      <main className="mt-6 flex flex-col items-center w-full max-w-4xl">
        <div className="w-full p-4 grid grid-flow-col gap-4">
          <div className="w-full flex items-center justify-center">
            <img src={"data:image/jpg;base64," + coachData.image} alt="TestTest" className="object-cover" />
          </div>
          <p>{coachData.blurb}</p>
        </div>
        <div className="mt-4 text-center w-full">
          <div className="grid grid-cols-2 gap-4 text-sm font-bold">
            <span>Rate: {coachData.rate}</span> <span>SportType: {coachData.sport}</span>
            <span>Location: {coachData.location}</span> <span>Speciality: {coachData.speciality}</span>
          </div>
        </div>

        <div className="mt-4 flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Message</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Book Lesson</button>
        </div>
      </main>
    </div>
  );
}
