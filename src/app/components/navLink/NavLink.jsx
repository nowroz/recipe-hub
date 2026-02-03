"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ navpath }) => {
  const pathname = usePathname()

  const { name, path } = navpath

  return (
    <li>
      <Link href={path} className={`${pathname === path && "text-red-400"} text-lg font-bold`}>{name}</Link>
    </li>
  )
}

export default NavLink
