
import './App.css';
import { CvImage } from "./components/image";
import { ContactInfo } from './components/ContactInfo';
import { WorkExp } from './components/WorkExp';

const photoLink ="https://s.abcnews.com/images/US/emoji-1-abc-221220_1671573538915_hpEmbed_1x1_992.jpg"



function App() {
  return (
    <div className="App">
   
    <CvImage imageLink = {photoLink} />
    <ContactInfo />
    <WorkExp />
    </div>
  );
}

export default App;
