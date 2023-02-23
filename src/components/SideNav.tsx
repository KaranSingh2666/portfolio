import Link from "next/link"
import { navLinks } from "../utils/data"


type Props = {}

const SideNav = (props: Props) => {
  return (
    <div className="fixed  left-0 top-0 bottom-0 w-16">
         <div className="flex flex-col h-full items-center gap-7 justify-center">
            {navLinks.map((nl,i)=>(
                <a key={i} title={nl.text} className='w-4 h-4 rotate-45 hover:rotate-0 transition-all ease-linear hover:bg-secondary border border-secondary' href={nl.url}>
                    
                </a>
            ))}
         </div>
    </div>
  )
}

export default SideNav