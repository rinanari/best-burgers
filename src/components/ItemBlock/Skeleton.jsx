import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={357}
    viewBox="0 0 280 357"
    backgroundColor="#faf9f9"
    foregroundColor="#ecebeb"
    
  >
    <rect x="210" y="416" rx="36" ry="36" width="230" height="69" /> 
    <rect x="20" y="430" rx="0" ry="0" width="60" height="32" /> 
    <rect x="70" y="443" rx="0" ry="0" width="4" height="11" /> 
    <rect x="59" y="90" rx="0" ry="0" width="0" height="1" /> 
    <rect x="44" y="440" rx="0" ry="0" width="7" height="1" /> 
    <rect x="-3" y="11" rx="0" ry="0" width="250" height="250" /> 
    <rect x="1" y="273" rx="0" ry="0" width="250" height="27" /> 
    <rect x="2" y="315" rx="0" ry="0" width="40" height="27" /> 
    <rect x="112" y="312" rx="24" ry="24" width="130" height="42" />
  </ContentLoader>
)

export default Skeleton