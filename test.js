import React from 'react'

const Row = ({children}) => (<div style={{display:'flex'}} >{children}</div>)
                             
const Flex = (props) => {
  return (<div style={{display:"flex"}}>{props.children}</div>)
}
const FlexCol = (props) => {
  return (<div style={{display:"flex",flexDirection:"column",margin:"30px"}}>{props.children}</div>)
}
const Around = (props) => {
  return (<div style={{width:"100%",display:"flex",justifyContent:"space-around",border:"1px solid grey"}}>{props.children}</div>)
}
const Between = (props) => {
  return (<div style={{width:"100%",display:"flex",justifyContent:"space-between",border:"1px solid grey"}}>{props.children}</div>)
}
const Center = (props) => {
  return (<div style={{width:"100%",display:"flex",justifyContent:"center",border:"1px solid grey"}}>{props.children}</div>)
}
const Type = (props) {
  return <p style={{fontSize:props.fs}}>{props.children}</p>
}
