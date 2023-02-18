import React from 'react'
import './Home.css'
import Workspace from '../Workspace/Workspace'
import Panel from '../Panel/Panel'


function Home() {

  return (
    <div className='Home'>
        <div className='Home-main-activity'> 
            <div className='Home-panel'>
                <Panel/>
            </div>
            <div className='Home-workspace'> 
                <Workspace/>    
            </div>
        </div>
    </div>
  )
}

export default Home