import './App.css'
import Navigation from './components/Navigation'
import PeopleToFollow from './components/PeopleToFollow'
import TopicsList from './components/TopicList'
import TrendsList from './components/TrendsList'


function App() {

  return (
    <>
      <Navigation/>
      <div className="flex justify-center mt-[1rem]">
        <div className='w-[30%]'>
          <PeopleToFollow/>
          <TrendsList/>
          <TopicsList/>
        </div>
      </div>
    </> 
  )
}

export default App
