import { inter } from "@/app/layout"
import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image width={48} height={48} src="/logo.png" alt="Recipe Hub logo"></Image>
      <h3 className={`${inter.className} text-4xl font-black`}>Recipe Hub</h3>
    </Link>
  )
}

export default Logo
