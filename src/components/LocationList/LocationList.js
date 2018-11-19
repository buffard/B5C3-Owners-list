import React, { Component } from 'react'

export default class LocationList extends Component {
  render() {
    return (
      <section className="locations">
        <h2>Locations:</h2>
          {this.props.locations.map(locations => 
            <div key={locations.id}>
              <p>Name: {locations.name}</p>
              <p>Address: {locations.address}</p>
            </div>
          )}
      </section>
    )
  }
}