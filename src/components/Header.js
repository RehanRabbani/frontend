import React from 'react';
import './../index.css'

class Header extends React.Component{
    render()
    {
        return (
           <div className= "StyleHead">
             
           <p>About</p>
           <p>Home</p>
           <p>CMS</p>
            
           <input type="search" placeholder="search" />
           <button>login</button>
           <a href="#"> Become Seller</a>
           </div>
        )
    }
}


export default Header