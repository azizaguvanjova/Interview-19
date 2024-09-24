import React, { useEffect, useState } from "react";

const BASE_IMG_URL = "https://picsum.photos/seed/sameimage/300";

function App() {
  return <CustomBlur />;
}

const CustomBlur = () => {
const [blur,setBlur] = useState(0)
const [imgUrl, setImageUrl] =useState({BASE_IMG_URL})


useEffect(()=>{
  if(blur > 0){
    setImageUrl(`${BASE_IMG_URL}?blur=${blur}`)
  }else {
    setImageUrl(BASE_IMG_URL)
  }

},[blur])
return (
  <div className="flex flex-col gap-4 p-4 items-center h-screen">
    <img src={imgUrl} alt="photo blur effect"  className="rounded-md border border-gray-300 shadow-md" />
    <label htmlFor="blur-slider">
      Blur için kaydırın
    </label>
<input type="range"
id="blur-slider"
min="2"
max="10"
value={blur}
onChange={(e) => setBlur(e.target.value)}
/>
  </div>
)

};

export default App;
