import type { ReactNode } from "react"

interface props {
    children: ReactNode
}

const Container = ({ children, }:props) => {
  return (
    <div className="m-2 p-2 flex flex-col gap-3 h-screen items-center justify-center bg-sky-200 border rounded-md shadow">
        { children }
    </div>
  )
}

export default Container