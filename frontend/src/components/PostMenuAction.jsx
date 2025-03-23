import React from 'react'

const PostMenuAction = ()=> {
  return (
    <div className=''>
        <h1>Actions</h1>
        <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48" 
          width="20px" 
          height="20px"
        >
        <path
          d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3H12z"
          stroke="black"
          strokeWidth="2"
        />
        </svg>
        <span>Save this Post</span>
        </div>
        <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50" 
          width="20px" 
          height="20px"
        >
        <path
          //d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 0 0 0 9.984375 6.9863201 A 1.0001 1.0001 0 0 0 9."
           d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 0 0 0 9.984375 6.9863201 A 1.0001 1.0001 0 0 0 9 7 L 9 39 C 9 39.5522847 9.4477153 40 10 40 H 40 C 40.5522847 40 41 39.5522847 41 39 L 41 7 C 41 6.4477153 40.5522847 6 40 6 L 30 6 L 30 4 C 30 3.4477153 29.5522847 3 29 3 H 21 C 20.4477153 3 20 3.4477153 20 4 L 20 6 L 12 6 C 11.4477153 6 11 6.4477153 11 7 L 11 39 C 11 39.5522847 11.4477153 40 12 40 H 38 C 38.5522847 40 39 39.5522847 39 39 L 39 7 C 39 6.4477153 38.5522847 6 38 6 L 28 6 L 28 4 C 28 3.4477153 27.5522847 3 27 3 H 21 C 20.4477153 3 20 3.4477153 20 4 L 20 6 L 12 6 L 12 4 L 21 4 L 21 2 Z"
          stroke="black"
          strokeWidth="2"
        />
        </svg>
        <span>Delete this Post</span>
        </div>
    </div>
  )
}

export default PostMenuAction