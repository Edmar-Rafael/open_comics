import React,{ useState, useEffect } from 'react';
import { Header, ShowContent } from '../../components';
import { Container } from './styles'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { requestMovies } from '../../store/ducks/movies';

function Movies() {
  const [limit, setLimit] = useState('1')
  const [size] = useState('9')
  const {data: moviesData} = useSelector((moviesState) => moviesState)

  const dispatch = useDispatch()

  const location = useLocation()
 
  useEffect(()=>{
    dispatch(requestMovies(limit))
  },[dispatch, limit, size])

  function handleClick(){
    setLimit('1')
  }

  return (
    <Container>
      <Header handleClick={handleClick}/>
      <ShowContent items={moviesData} location={location.pathname}/>
    </Container>
  );
}

export default Movies;