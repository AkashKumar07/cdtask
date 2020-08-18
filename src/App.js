import React, {useState, useEffect} from 'react';
import * as classes from './App.module.css';
import Loader from 'react-loader-spinner';

import data from './db/colleges.json'
import Card from './CollegeCard/CollegeCard';

function App() {

  const [posts, setPosts] = useState(Array.from(Array(10).keys(),n=>data[n+1]))
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchMoreListItems = async() => {
      console.log(posts.length)
      if(posts.length>= data.length - 1){
      setIsFetching(false);
    }else{
        await setPosts(prevState => ([...prevState, ...Array.from(Array(10).keys(), n => data[n + prevState.length + 1])]));
        setIsFetching(false);
    }
    }
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching, posts]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setIsFetching(true);
  }

  return (
    <div className={classes.main} >
      <p className={classes.title}>Colleges in North India</p>
      <div className={classes.cards}>
          {posts.map((data)=>(
            <Card data={data} />
          ))}
      </div>
      {isFetching ? <div style={{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}><Loader type="ThreeDots" color="#00BFFF" height={80} width={80} /></div>: null}
    </div>
  );
}

export default App;
