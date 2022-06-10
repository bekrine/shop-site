
export  function nextImg(index,setindex,imgs){
    console.log(imgs)
if(index===imgs-1){
return setindex(index=0)
}
setindex(index+1)
}


export  function previousImg(index , setindex){
    if(index===0){
      return  setindex(index=2)  
        }
    setindex(index-1)
    }

export function sliderDots(e,setFactor,factor){
    setFactor(parseInt( e.target.id))
}    