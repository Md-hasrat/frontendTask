import React from 'react'

function Message({message}) {
  return (
   <p>{message&&`${message}🙏 `}</p>
  )
}
export default Message