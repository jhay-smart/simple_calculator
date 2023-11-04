
import './App.css';

const buttons = [
  {
    'AC':{
      type:'clear'
    }},
    {'<-':{
      type :'back'
    }},

   { "%":{
      type:'Math'
    }},

    {"/":{
      type:'Math'
    }},

    {7: {
      type: Number
    }},

   { 8: {
      type: Number
    }},

    {9: {
      type: Number
    }},

    {"*": {
      type: 'Math'
    }},

   { 4: {
      type: Number
    }},

   { 5: {
      type: Number
    }},

    {6: {
      type: Number
    }},
    {
    "-": {
      type: 'Math'
    }},

    {1: {
      type: Number
    }},

    {2: {
      type: Number
    }},

    {3: {
      type: Number
    }},

{    "+": {
      type: 'Math'
    }},
    {
    "": {
      type: 'none'
    }},

    {0: {
      type: Number
    }},

    {".": {
      type: Number
    }},
    {
    "=": {
      type: 'result'
    }

  }
]

const datas = buttons.map((data) => Object.entries(data)[0])

const Header = () =>{
  return(
    <header className='text-right bg-gray-700 p-8 text-2xl text-white'>
      <div>10*4</div>
      <div>40</div>
    </header>
  );
}

const Body = () =>{
  return(
    <div className=' flex-grow grid grid-cols-4 text-gray-500 text-lg'>
      
        {datas.map(([key, value]) => (
          <button key={key}>{key}</button>
        ))
  
      }
    </div>
  )
}

function App() {
  return (
    <div >
      <main className='h-screen bg-gray-900 flex flex-col'>
        <Header/>
        <Body/>
      </main>
    </div>
  );
}

export default App;
