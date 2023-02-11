
import './App.css';
import ComponentA from './components/ComponentA';
import { ComponentB } from './components/ComponentB';
import ComponentC from './components/ComponentC';
import { ComponentF } from './components/ComponentF';
import ComponentG from './components/ComponentG';
import { ComponentH } from './components/ComponentH';
import ComponentI from './components/ComponentI';
import { ComponentJ } from './components/ComponentJ';
import { ComponentO } from './components/ComponentO';
import ComponentS from './components/ComponentS';
import ComponentX from './components/ComponentX';

function App() {
  //const imageUrl = "https://c8.alamy.com/comp/HP0RC5/google-logo-HP0RC5.jpg"
  const leftArrowimg = "https://cdn-icons-png.flaticon.com/512/109/109618.png"
  const rightArrowimg = "https://cdn-icons-png.flaticon.com/512/109/109617.png"
  const reloadImg = "https://cdn3.iconfinder.com/data/icons/user-interface-1-10/24/icon-ui-1-reload-512.png"
  const pages = ["reactJS", "w3school", "facebook", "github", "New tab"]
  const pinnedTab = {
    gmail:"https://cdn.iconscout.com/icon/free/png-256/gmail-2981844-2476484.png",
    uTube:"https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png",
    map:"https://i.pinimg.com/originals/66/1e/98/661e98a8e38f681575da93d0a1c3f4fc.png",
    linkdIn:"https://cdn-icons-png.flaticon.com/512/174/174857.png"
  }
  const googleLogoData = {
    imageUrl:"https://e7.pngegg.com/pngimages/1019/288/png-clipart-google-adwords-google-logo-behavioral-retargeting-google-search-engine-optimization-company.png",
    altValue:"googleLogo"
    }
  return (
    <div className="App">
      <h1 className = "main-head">Hello EveryOne Today We Are going to use "Props" while building A website </h1>
      <hr className = "hori-line" />
      <div className = "heder-cont">
        <ComponentA page = {pages[0]}/>
        <ComponentA page = {pages[1]}/>
        <ComponentA page = {pages[2]}/>
        <ComponentA page = {pages[3]}/>
        <ComponentA page = {pages[4]}/>
        <button className = "add-btn" type = "button">+</button>
        <div className='comp-b-cont'>
          <ComponentB />
      </div>
      </div>
      <ComponentC leftIcon = {leftArrowimg} rightIcon = {rightArrowimg} reloadIcon = {reloadImg} />
      <ComponentF pinTab = {pinnedTab}/>
      <hr className = "hori-line-new" />
      <ComponentG />
      <div>
        <ComponentH logoData = {googleLogoData} />
      </div>
      <ComponentI />
      <ComponentJ />
      <ComponentO />
      <ComponentS />
      <ComponentX />
    </div>
  );
}

export default App;
