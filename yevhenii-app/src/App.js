import React from 'react';
import './App.css';
import { CvImage } from "./components/image";
import { ContactInfo } from './components/ContactInfo';
import { WorkExp } from './components/WorkExp';

const photoLink ="https://s.abcnews.com/images/US/emoji-1-abc-221220_1671573538915_hpEmbed_1x1_992.jpg"

let bendToMyWill = photoLink.toString()
console.log(bendToMyWill)

function App() {
  return (
    <div className="App">
   
    <CvImage a = {bendToMyWill} />
    <ContactInfo />
    <WorkExp />
    </div>
  );
}

export default App;
