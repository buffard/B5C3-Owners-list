import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './AnimalList/AnimalList'
import LocationList from './LocationList/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'

class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Doodles" },
        { id: 2, name: "Jack" },
        { id: 3, name: "Angus" },
        { id: 4, name: "Henley" },
        { id: 5, name: "Derkins" },
        { id: 6, name: "Checkers" }
    ]

    ownersFromAPI = [
      {id:1, phoneNumber:"123-456-7890", name: "Samuel"},
      {id:2, phoneNumber:"111-222-3333", name:"Leslie"},
      {id:3, phoneNumber:"666-666-6666", name:"John"},
      {id:4, phoneNumber:"198-198-1981", name:"Jase"}
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                  return <OwnersList owners={this.state.owners}/>
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews