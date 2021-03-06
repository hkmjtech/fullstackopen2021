import React from 'react'
import phoneServices from '../services/phones'

const Person = ({pid, name, number, persons, setPersons}) => {

	const handleDelete = () => {
		const res = window.confirm(`Are you sure you want to delete ${name}?`)
		console.log(pid)
		if (res === true) {
			phoneServices.deletePerson(pid)
			const newPeople = persons.filter((person) => {
				return person.id !== pid
			})
			// console.log(newPeople)
			setPersons(newPeople)
		}
	}

	return(
		<li key={pid}>
				{name} - {number}
				<button key={pid} onClick={handleDelete}>Delete</button>
		</li>
	)
}

export default Person