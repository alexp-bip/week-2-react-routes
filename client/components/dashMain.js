import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Main</div>
          <Link to="/dashboard/profile/3d1e3339-7a86-4aa4-b1c2-55bcff0817bc"> Go To Profile</Link>
          <Link to="/dashboard">Go to Root</Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
