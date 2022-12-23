import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';
function App() {
  const [doc,setDoc]=useState("");
  useEffect(()=>{
    fetch(
      "https://cms.summitsignage.com/pub/plugins/ratings.html?fbs_url=https://apps.summitsignage.com&username=Summit%20Vision&bg_color=bgimage&fontfam=Verdana&fontCol=FFFFFF&display_list=63577cc60ef7923a846eb390,63577cdb0ef7923a846eb399,63577cea0ef7923a846eb3a2,63577d060ef7923a846eb3b7,63577d180ef7923a846eb3c0,63577d5a0ef7923a846eb3eb,635d275e0ef7923a846ec512,635d27b00ef7923a846ec57d,635d27c50ef7923a846ec586,635d27d90ef7923a846ec58f,635d27f00ef7923a846ec59a,635d28140ef7923a846ec5b1,635d28300ef7923a846ec5bc,635d284e0ef7923a846ec5cf,635d286e0ef7923a846ec5ec")
                  .then((res) =>{return res.text()} ).then((res)=>{
                    console.log(res);
                    setDoc(res);
                  });
                  
                  
  },[]);
  function WebView(props) {
    return (
      <div className="WebView">
        <iframe 
          title='WebView'
          src={props.src} 
          height={props.height} 
          width={props.width} 
          scrolling={props.scroll} 
          frameBorder='0' 
          marginHeight='0'
          marginWidth='0'
          padding='0'
        />
      </div>
    )
  }
  return (
    <div className="App">
   <WebView src="https://cms.summitsignage.com/pub/plugins/ratings.html?fbs_url=https://apps.summitsignage.com&username=Summit%20Vision&bg_color=bgimage&fontfam=Verdana&fontCol=FFFFFF&display_list=63577cc60ef7923a846eb390,63577cdb0ef7923a846eb399,63577cea0ef7923a846eb3a2,63577d060ef7923a846eb3b7,63577d180ef7923a846eb3c0,63577d5a0ef7923a846eb3eb,635d275e0ef7923a846ec512,635d27b00ef7923a846ec57d,635d27c50ef7923a846ec586,635d27d90ef7923a846ec58f,635d27f00ef7923a846ec59a,635d28140ef7923a846ec5b1,635d28300ef7923a846ec5bc,635d284e0ef7923a846ec5cf,635d286e0ef7923a846ec5ec" height="700" width="60%"></WebView>
    </div>
  );
}

export default App;
