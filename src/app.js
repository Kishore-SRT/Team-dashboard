import React from 'react';
import './app.css';
import Sidebar from './components/sidebar section/sidebar'
import Body from './components/body section/body'



const App = () => {
    return (
        <div className='container'>
            <Sidebar/>
            <Body/>
        </div>
    )
}

export default App