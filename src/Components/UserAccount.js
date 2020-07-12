import React ,{Component} from 'react';

//import css
import './../css/UserAccount.css';


import MainCard from "./MainCard";


//import images
import Grid1 from './../images/Grid1.png';
import Grid2 from './../images/Grid2.png';
import Grid3 from './../images/Grid3.png';
import Grid4 from './../images/Grid4.png';
import Grid5 from './../images/Grid5.png';



class UserAccount extends Component{

    state={
        posters:[
            {
                id:1,
                name:Grid1,
                source:Grid1
            },
            {
                id:2,
                name:Grid2,
                source:Grid2
            },
            {
                id:3,
                name:Grid3,
                source:Grid3
            },
            {
                id:4,
                name:Grid4,
                source:Grid4
            },
            {
                id:5,
                name:Grid5,
                source:Grid5
            },
        ]
    }

    render(){
        return(
            <div className="container">
              <MainCard>
              </MainCard>
                <div className="row games">
                    {this.state.posters.map(item=>(
                           <div className="game col-3" key={item.id}>
                               <img src={item.source} alt={item.name} className="game-image"></img>
                           </div>
                    ))}
                 
                </div>
            </div>
        )
    }
}

export default UserAccount;