import logo from './logo.svg';
import './App.css';
import image2 from './image2.jpg';
import ReactPlayer from 'react-player';

function App() {
  return (
    
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red">wassim</h1>

<br/>
<div className="picture">
<img className="image2" src={image2} ></img>

<br/>

<img className="image1"src="/image1.jpg" ></img>
</div>
<ReactPlayer url="https://youtu.be/7fPXI_MnBOY?t=21"></ReactPlayer>
</div>




  
  );
}

export default App;
