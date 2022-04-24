import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/Home/Home';
import Country from './components/Country/Country';

export default function App() {
  const HomePage = "Home";
  const CountryPage = "Country";
  const [page, setPage] = useState(HomePage);
  const [country, setCountry] = useState(0);

  const handleClickToCountry = (id) => {
    setCountry(id);
    setPage(CountryPage);
  }

  const handleClickToHome = () => {
    setPage(HomePage);
  }

  const navBar = (
    <nav className="Nav navbar navbar-dark bg-primary">
      <a className="navbar-brand" href = "#" onClick = {handleClickToHome}>Home</a>
    </nav>
  );

  let mainBody = null;
  
  if(page === HomePage){
    mainBody = (
      <Home handleClickToCountry = {handleClickToCountry}/>
    );
  }
  else if(page === CountryPage){
    mainBody = (
      <Country
        id = {country}
      />
    );
  }

  return (
    <React.Fragment>
      {navBar}
      {mainBody}
    </React.Fragment>
  )
}
