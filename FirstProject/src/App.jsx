// styles / css
import './App.css'

// components
import FirstComponent from './components/FirstComponent'
import MyComponents from './components/MyComponents'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import Challange from './components/Challange'


function App() {
  return (
    <div className="App">
      <h1>Fundamentos react</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponents/>
      <Events/>
      <Challange/>
    </div>
  )
}

export default App
