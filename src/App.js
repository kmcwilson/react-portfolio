
import React, {useState}  from 'react';
import './App.css';
import Header  from './components/Header';
import PageContent from './components/PageContent';
import Footer from './components/Footer';


function App() {
  const [currentPage, setCurrentPage]=  useState('home')
  return (
  <div className="page-background">
 <Header setCurrentPage= {setCurrentPage} currentPage={currentPage}/>
 <PageContent setCurrentPage= {setCurrentPage} currentPage={currentPage}/>
<Footer/>
 </div>


  );
}

export default App;
