import React from 'react'

function Title({children}:{children:string}) {
  return (
    <h1 className="font-semibold text-xl py-3">
        {children}
    </h1>
  )
}

export default Title