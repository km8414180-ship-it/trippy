import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Login from "./pages/Login"
import Auth from "./pages/Auth"
import SignUp from "./pages/SignUp"
import Root from "./pages/Root"
import Services from "./pages/Services"

function App () {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Root/>}>
          <Route path="" element = {<Home />}  />
          <Route path="about" element = {<About />}  />
          <Route path="contact" element = {<Contact />}  />
          <Route path="service" element = {<Services />}  >
            <Route path=":id/:name" element = {<Service/>} />
          </Route>
        </Route>
        <Route path="/auth" element = {<Auth />}>
          <Route path="login" element = {<Login />}  />
          <Route path="signup" element = {<SignUp />}  />
        </Route>
      </Routes>
    </>
  )
}

export default App
