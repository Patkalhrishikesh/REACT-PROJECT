
import { AiOutlineSearch, AiOutlineTwitter } from 'react-icons/ai';
import {BiBell, BiHash, BiHomeCircle} from 'react-icons/bi';
import{MdBookmarkBorder, MdMailOutline } from 'react-icons/md';
import {BsCardText, BsGear} from 'react-icons/bs';

import {FaEllipsisH, FaUserCircle} from 'react-icons/fa';
import React from 'react'
import './App.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import 'bootstrap/dist/css/bootstrap.min.css';

import * as ReactBootStrap from "react-bootstrap"


import navbar from './components/navbar';





// ==navbar ==


<navbar/>


// use react icon extenstions https://react-icons.github.io/react-icons/ =====

function App() {
  return (
    <div className="App">
      <div className='Main'>
        <div className='Sidebar_Area'>
              <div className='Twitter'>
                <AiOutlineTwitter color='#1da1f2' fontSize="2.3 rem" />
                <div>Twitter</div>
              </div>

              <div className='Icons'>
                < BiHomeCircle  color='#1da1f2' fontSize="2 rem" />
                  <div>Home</div>
              </div>

              <div className='Icons'>
                < BiHash  color='#1da1f2' fontSize="2 rem" />
                  <div>Exploer</div>
              </div>

              <div className='Icons'>
                < BiBell  color='#1da1f2' fontSize="2 rem" />
                  <div>Notification</div>
              </div>

              <div className='Icons'>
                < MdMailOutline  color='#1da1f2' fontSize="2 rem" />
                  <div>Message</div>
              </div>

              <div className='Icons'>
                < MdBookmarkBorder  color='#1da1f2' fontSize="2 rem" />
                  <div>Bookmarks</div>
              </div>

              <div className='Icons'>
                < BsCardText  color='#1da1f2' fontSize="2 rem" />
                  <div>List</div>
              </div>


              <div className='Icons'>
                < FaUserCircle  color='#1da1f2' fontSize="2 rem" />
                  <div>Profiles</div>
              </div>

              <div className='Icons'>
                < FaEllipsisH  color='#1da1f2' fontSize="2 rem" />
                  <div>More</div>
              </div>


              <div className='Icons'>
               <button className="bt">Tweet</button>
              </div>


        </div>

        <div className='Main_Area'>
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />

        <Mycard />

        <Mycard />





        </div>

        <div className='left_Sidebar'>
          <div className='Search'>
            <AiOutlineSearch fontSize="1.5rem"style={{borderRedius:"50%"}} />
            <div className='Search_input'>
              <input type="Search" placeholder='Search Twitter' />

            </div>

          </div>
          <br /><br />
          <div className='Container'>

            <div className='Trends'>
              <div className='Trends_4u'>
                Trending...

              </div>

              <div className='Icons'>
                < BsGear  color='#1da1f2' fontSize="2 rem" />
                  <div>Setting</div>
              </div>
            </div>

            <div className='Trending_worldwide'>
              <div className='Trending_show' >
                trending world wide hello js 
              </div>
              <div className='tag'>
                #World_News
              </div>

              <div className='tweet_pepole'>
                125k
              </div>

              <div className="Tweets">
                5,055 pepole are tweeting this post 
              </div>

            </div>


             <div className='Trending_worldwide'>
              <div className='Trending_show' >
                trending world wide hello js 
              </div>
              <div className='tag'>
                #World_News
              </div>

              <div className='tweet_pepole'>
                125k
              </div>

              <div className="Tweets">
                5,055 pepole are tweeting this post 
              </div>

            </div>
            <div className='Trending_worldwide'>
              <div className='Trending_show' >
                trending world wide hello js 
              </div>
              <div className='tag'>
                #World_News
              </div>

              <div className='tweet_pepole'>
                125k
              </div>

              <div className="Tweets">
                5,055 pepole are tweeting this post 
              </div>

            </div>
            <div className='Trending_worldwide'>
              <div className='Trending_show' >
                trending world wide hello js 
              </div>
              <div className='tag'>
                #World_News
              </div>

              <div className='tweet_pepole'>
                125k
              </div>

              <div className="Tweets">
                5,055 pepole are tweeting this post 
              </div>

            </div>
            <div className='Trending_worldwide'>
              <div className='Trending_show' >
                trending world wide hello js 
              </div>
              <div className='tag'>
                #World_News
              </div>

              <div className='tweet_pepole'>
                125k
              </div>

              <div className="Tweets">
                5,055 pepole are tweeting this post 
              </div>

            </div>


          </div>
        </div>

      </div>

    </div>
  );
}

export default App;





//  ===================function ================


export function Mycard() {
  return (
    <div>
      <Card className="bg-dark text-light border border-danger">
        <Card.Title className=" border-bottom border-ligh p-2">
          viralinmaharashtra
        </Card.Title>
        <Card.Img
          className=" border-bottom-1 border-light p-1"
          variant="top"
          src="https://picsum.photos/400/200"
        />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="d-flex">
            <Button className="btn btn-dark  me-1 text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </Button>
            <Button className="btn btn-dark me-1 text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chat-dots"
                viewBox="0 0 16 16"
              >
                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
              </svg>
            </Button>
            <Button className="btn btn-dark me-1 text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-send"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}


