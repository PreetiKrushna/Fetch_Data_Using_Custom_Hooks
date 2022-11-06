import React from 'react';
import { useState } from 'react';
import useFetch from "./useFetch";
// import {sppiner} from './sppiner.gif'


const Home = () => {
  const[cat, setCategory]=useState('all')
  const Base_URL=`https://inshorts.deta.dev/news?category=${cat}`;
  const {data, loading, error} = useFetch(Base_URL);
  console.log(data)


  return (
    <div className='container mt-3'>
      <div className="row ms-2">
        <div className="col-12">
        <h1 className='text-center'>{cat.toUpperCase()}</h1>
          <select onChange={(e)=>{setCategory(e.target.value)}}
          className='form-select mb-3'
          >
            <option value="all">All</option>
            <option value="national">National</option>
            <option value="politics">Politics</option>
            <option value="science">Science</option>
            <option value="technology">Technology</option>
            <option value="business">Business</option>
            <option value="world">World</option>
            <option value="startup">Startup</option>
            <option value="miscellaneous">Miscellaneous</option>
            <option value="automobile">Automobile</option>
            <option value="entertainment">Entertainment</option>
            <option value="hatke">Hatke</option>
            <option value="sports">Sports</option>
          </select>
          { loading && <img className='ms-5 p-3' src='https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C/image-size/large/is-moderation-mode/true?v=v2&px=999'/>}
          { error && <h3>{error}</h3>}
          {
            data.map((value, i)=>{
              return(
                <div key={i}>
                  <div className="card p-3 mt-3 shadow" style={{width: '20rem'}}>
                    <p><b>{value.date}</b> <span>{value.time}</span></p>
                      <img src={value.imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.content}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home;