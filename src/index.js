import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
class HE extends React.Component{
    render()
    {
        return(
            <div>
           
            <Header/>
            </div>
        )
    }
}

ReactDOM.render(<HE />, document.getElementById('app'));


