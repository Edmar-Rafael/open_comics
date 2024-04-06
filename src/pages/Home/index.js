import React,{ useState, useEffect } from 'react';
import { Header, HorizonScroll, Latest, ShowContent} from '../../components';
import { Container } from './styles'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { requestLastsComics } from '../../store/ducks/lastsComics';

function Home() {
  const [seeAll, setSeeAll] = useState(false)
  const [limit] = useState('30')
  const {data: comicsData} = useSelector((lastsComicsState) => lastsComicsState)

  const dispatch = useDispatch()

  const location = useLocation().pathname
 
  useEffect(()=>{
    dispatch(requestLastsComics(limit))
  },[dispatch, limit, seeAll])

  function handleClick(){
    console.warn('You clicked me!')
  }

  function showAll(){
    setSeeAll(!seeAll)
  }

  return (
    <Container>
      <Header  hendleClick={handleClick}/>
      { seeAll ? (
        <ShowContent items={comicsData} location={location} seeAll={seeAll} setSeeAll={showAll}/>
      ) : (
        <>
          <HorizonScroll/>
          <Latest setSeeAll={showAll}/>
        </>
      )}
    </Container>
  );
}

export default Home;