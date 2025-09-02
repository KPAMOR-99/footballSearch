import type { ReactNode } from "react"

interface props {
    children: ReactNode
}

const Rowcontainer = ({children}: props) => {
  return (
    <div className='p-2 flex flex-row gap-1 items-center justify-center bg-red-500'>{children}</div>
  )
}

export default Rowcontainer