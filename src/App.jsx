import { useState, useEffect } from 'react' 
import ListOfContacts from './ContactChart'
import './App.css'

function App() {
  const [contactList, setContactList] = useState([]);

  const API_ContactList = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    const getContactList = async() => {
      const response = await fetch(API_ContactList)
      const jsonFile = await response.json()
      const users = jsonFile
      console.log(users)
      setContactList(users)
    }
    getContactList()
  }, [])

  return (
    <>
      <h1>Contact List</h1>
      < ListOfContacts contactList={contactList}/>
    </>
  )
}

export default App
