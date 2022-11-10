import './App.css'

const Header = () =>{
  return (
    <header className='header'>
      <h1>Welcome to 30 Days of Coding Challenge</h1>
      <h3>Getting started in React</h3>
      <p>Javascript Library</p>
      <p>Date: oct 2, 2022</p>
    </header> 
  )
}

const Main = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techFormated = techs.map(tech => <li>{tech}</li>)

  return (
    <main className='main'>
      <h5>Prerequisite to get started in Reactjs</h5>
      <ul>{techFormated}</ul>
      <p>2 + 3 = {2 + 3}</p>     
      <p>Ekekwe Chinedu George is 30 years old</p>
    </main>
  )
}

const Footer = () => {
  return (
    <footer className='footer'>
      <p>&copy Copyrite 2022</p>
    </footer>
  )
}

const App = () => {

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}


export default App
