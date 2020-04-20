import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { CAMPSITES } from '../shared/campsites';

// Main will be a container component that will be the parent to presentational components
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    render() {
        return <Directory campsites={this.state.campsites} />;
    }

}

export default Main; 