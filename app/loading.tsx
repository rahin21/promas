import React from 'react'
import { ImSpinner9 } from 'react-icons/im'

export default function loading() {
  return (
    <div className="flex h-screen items-center justify-center" role="status">
      <div>
        <ImSpinner9 className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-primary" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}