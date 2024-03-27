const ListOfContacts = ({contactList}) => {
  return (
    <section>
      <h2>Name, Email, and Phone Number</h2>
    {
      contactList.map((users) => {return <li key = {users.id}>{users.name}, {users.email}, {users.phone}</li>})
    }
    </section>
  )
}

export default ListOfContacts