import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-appolo'

const LAUNCHES_QUERY = gql `
    query LaunchesQuery {
        launches {
            name 
            height
            mass
            gender
            
        }
    }
`;

export class Launches extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4 my-3" > People</h1>
            </div>
        )
    }
}

export default People