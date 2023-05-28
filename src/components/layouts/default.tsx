import type { ReactElement } from "react"

type layoutProps = {
  children: ReactElement
}

const Layout = ({children}:layoutProps) => {
  return (
    <>
      <div> default layout<div>
      </div>{ children }</div>
    </>
  )
}

export default Layout