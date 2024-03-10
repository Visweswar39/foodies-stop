import React from 'react'
import { useRouteError } from 'react-router'

function Error() {
    const err = useRouteError();
    // console.log(err);
  return (
    <>
    <div>oops something went wrong</div>
    <h1>{err.data+ ' : '+err.status}</h1>
    </>
  )
}

export default Error