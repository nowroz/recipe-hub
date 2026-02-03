import { navpaths } from "@/app/utils/navpaths"
import Logo from "../logo/Logo"
import NavLink from "../navLink/NavLink"

const Navbar = () => {
  return (
    <nav className="custom-container py-4 flex justify-between items-center">
      <Logo></Logo>

      <ul className="flex items-center gap-4">
        {
          navpaths.map(navpath => (
            <NavLink key={navpath.id} navpath={navpath}></NavLink>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar
