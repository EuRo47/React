
import './App.css';
import { CvImage } from "./components/image";
import { ContactInfo } from './components/ContactInfo';
import  WorkExpList  from './components/WorkExpList';
import Counter from './components/counter';
import { useState } from 'react';

const photoLink ="https://s.abcnews.com/images/US/emoji-1-abc-221220_1671573538915_hpEmbed_1x1_992.jpg"






function App() {
  

  const [jobs, showExp] = useState(
    [
    {title: "Process engineer",
    description:"Responsible for maintaining quality of product and providing technological support for any kind of issues. Executing tests on polymers. Make sure that sales-managers acquire sense of responsibility.",
    name:`"ТОВ"ХАРКІВСЬКИЙ ЗАВОД "ПОЛІМЕРКОНТЕЙНЕР"`,
    link: "https://hzpk.ua/" },
  
    // {title: "Test engineer",
    // description:"Testing two-stroke, opposed cylinder dieselengines.Executing tests on engines",
    // name:` ДЕРЖАВНЕ ПІДПРИЄМСТВО «ЗАВОД ІМЕНІ В.О.МАЛИШЕВА»`,
    // link: "https://uk.wikipedia.org/wiki/%D0%97%D0%B0%D0%B2%D0%BE%D0%B4_%D1%96%D0%BC%D0%B5%D0%BD%D1%96_%D0%92._%D0%9E._%D0%9C%D0%B0%D0%BB%D0%B8%D1%88%D0%B5%D0%B2%D0%B0"
    // },
  
    // {title: "Public purchasing technical expert",
    // description:"Preparing all required technical data and documents for public purchasings.Making claims about missing required technical data and documents ofour opponents.",
    // name:`Prozzoro`,
    // link: "https://prozorro.gov.ua/en/about" },
  ]);

 
  return (

    <div className="App">
   
    <CvImage imageLink = {photoLink} />
    <ContactInfo />
    <WorkExpList jobs = {jobs} />
    <AddWorkExpForm  showExp = {showExp}/>
    <Counter />
    </div>
  );
}

function AddWorkExpForm(props) {
  const [title,setTitle]= useState ();
  const [name,setName]= useState ();
  const [description,setDescription]= useState ();
  const [link,setLink]= useState();
  
  function handleSubmit(e){
   // Що форма не оновлювала таблицю
    e.preventDefault()

    props.showExp(prev=> prev.concat({title, name, description, link}));
    
    setTitle("");
    setName("");
    setDescription("");
    setLink("");
  }
  return (
    // Єдина кнопка для відправки!!
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New work experience</legend>
        <input value={title} onChange={e=> setTitle(e.target.value)} placeholder="Job's title" />
        <input value={description} onChange={e=> setDescription(e.target.value)} placeholder="Job's description" />
        <input value ={name} onChange={e=> setName(e.target.value)} placeholder= "Employer's name" />
        <input value ={link} onChange={e=> setLink(e.target.value)} placeholder= "Employer's site link" />
        <button>Add work experience</button>
      </fieldset>
    </form>
  )
}

export default App;
