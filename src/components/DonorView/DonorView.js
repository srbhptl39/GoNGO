import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from '../../history';
import NavBar from '../Navbar/Navbar';
import Post from '../Post/Post';
import "./DonarView.css";
import postsdata from './postdata';

// const compo = postsdata.map(i=>{
//    <div> <Post title={i.title} des={i.description} date={i.date} imageurl={i.image} /> </div>
// })

// const compoo = ()=>{
//     return postsdata.map(i=>{
//         <div> <Post title={i.title} des={i.description} date={i.date} imageurl={i.image} /> </div>
//      })
// }

class DonorView extends Component {
     number= [1,2,3];
    compo = postsdata.map(i => {
        return<Post title={i.title} des={i.description} date={i.date} imageurl={i.image} /> 
        
    })

    

    render() {

        return (
            <div>
                <div>
                    <NavBar />
                </div>

                <div className='container px-4 gridd'>
                    <div className='row gx-5 gy-5 '>
                      
                        {/* {postsdata.map((i,o )=> {
                            <Post author={i.Author} title={i.title} des={i.description} date={i.date} imageurl={i.image} /> 
                        })} */}
                        {/* <Post author={postsdata[0].Author} title={postsdata[0].title} des={postsdata[0].description} date={postsdata[0].date} imageurl={postsdata[0].image}/> */}
                        {/* <Post />
                        
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post /> */}

                   {this.compo}
                    </div>
                </div>
            </div>

        );
    }
}

export default DonorView;