import React, { useState } from 'react'
import PageWrapper from '../pagewrapper/PageWrapper';
import ChangeBtn from '../components/changeBtn/ChangeBtn';
import Modification from '../components/modification/Modification';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  function handleClick() {
    setOpen(!isOpen);
  }
  return (
      <div>
          <h1>Home</h1>
          <ChangeBtn onClick={handleClick}/>
          <Modification isOpen = {isOpen} />
      </div>
  )
}

