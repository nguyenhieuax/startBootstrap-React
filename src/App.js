import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './component/TopMenu';
import Header from './component/Header';
import Section from './component/Section';

function App() {
  return (
    <div className="top">
     <TopMenu/>
     <Header/>
    .<div className="container">
      <div className="row pt-5">
    
        <Section 
          heading="For those about to rock..."
          paragraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
          image = "img/01.jpg"
        />
        <Section 
          heading="For those about to rock..."
          paragraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
          image = "img/02.jpg"
        />
        <Section 
          heading="For those about to rock..."
          paragraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
          image = "img/03.jpg"
        />
       </div>
     </div>
    
    </div>
  );
}

export default App;
