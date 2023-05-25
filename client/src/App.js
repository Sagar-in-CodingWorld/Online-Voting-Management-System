import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './component/Homepage'
import { Citizen } from './component/Citizen'
import { Admin } from './component/Admin'
import { ElectorRegistration } from './component/Admin/ElectorRegistration'
import Verified from './component/Admin/Verified'
import { Rejected } from './component/Admin/Rejected'
import Home from './CITIZEN/Home'
import About from './component/About'
import Contact from './component/Contact'
import Readmore1 from './component/Readmore1'
import Readmore2 from './component/Readmore2'
import Readmore3 from './component/Readmore3'
import Election from './component/Election'
import Userinfo from './component/Userinfo'
import Voterlist from './component/Voterlist'
import Status from './component/Status'
import Login from './component/Login'
import Forgot from './component/Forgot'
import VoterRegistration from './CITIZEN/VoterRegistration'
import UpdateVoterId from './CITIZEN/UpdateVoterId'
import RegisterComplain from './CITIZEN/RegisterComplain'
import ElectoralRoll from './CITIZEN/ElectoralRoll'
import ShowStatus from './CITIZEN/ShowStatus'
import LoginA from './component/LoginA'
import SignUp from './component/SignUp'
import Poll from './CITIZEN/Poll'
import Trackform from './component/Trackform'
import DownloadCard from './CITIZEN/DownloadCard'
import Candidate from './component/Admin/Candidate'
import CandidateView from './component/Admin/CandidateView'

function App() {
  return (
    <div className="App">
       {/* 2. Wrap ChakraProvider at the root of your app */}
      <ChakraProvider>
        {/* <TheRestOfYourApplication /> */}
        <BrowserRouter>
          <Routes>

            <Route exact path='/' element={<Homepage />}></Route>

            <Route exact path='/sign-up' element={<SignUp />}></Route>
            <Route exact path='/citizen/login' element={<Login />}></Route>
            <Route exact path='/Forgot' element={<Forgot />}></Route>
            <Route exact path='/citizen' element={<Home />}></Route>
            <Route exact path='/show-status' element={<ShowStatus />} />
            <Route exact path='/register-complain' element={<RegisterComplain />} />
            <Route exact path='/citizen/voter-registration' element={<VoterRegistration />} />
            <Route exact path='/citizen/update-or-correction' element={<UpdateVoterId />} />
            <Route exact path='/citizen/electoral-roll' element={<ElectoralRoll />} />
            <Route exact path='/citizen/poll' element={<Poll />} />
            <Route exact path='/citizen/download-e-voter-card' element={<DownloadCard/>}></Route>



            <Route exact path='/unavailable' element={<DownloadCard/>}></Route>
            <Route exact path='/track-application' element={<Trackform/>}></Route>



            <Route exact path='/admin/login' element={<LoginA />}></Route>
            <Route exact path='/admin' element={<Admin />}></Route>
            <Route exact path='/verify-electors/elector-registration' element={<ElectorRegistration />}></Route>
            <Route exact path='/verify-electors/verified' element={<Verified />}></Route>
            <Route exact path='/verify-electors/rejected' element={<Rejected />}></Route>
            <Route exact path='/About' element={<About />}></Route>
            <Route exact path='/Contact' element={<Contact />}></Route>
            <Route exact path='/Readmore1' element={<Readmore1 />}></Route>
            <Route exact path='/Readmore2' element={<Readmore2 />}></Route>
            <Route exact path='/Readmore3' element={<Readmore3 />}></Route>
            <Route exact path='/Candidate' element={<Candidate />}></Route>
            {/* <Route exact path='/Election' element={<Election />}></Route> */}
            <Route exact path='/Userinfo' element={<Userinfo />}></Route>
            <Route exact path='/Voterlist' element={<Voterlist />}></Route>
            <Route exact path='/view-candidate-details' element={<CandidateView />}></Route>
            
          </Routes>
        </BrowserRouter>
      </ChakraProvider>

    </div>
  )
}

export default App;
