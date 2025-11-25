import { Link, Outlet } from "react-router-dom"

const Services = () => {
  return (
    <div>
      <Link to="/service/1/front">front service</Link>
      <Link to="/service/2/back">back service</Link>
      <Outlet />
    </div>
  )
}

export default Services
