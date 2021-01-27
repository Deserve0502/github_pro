import React, { Component, useState } from 'react'
import IndexNav from '../components/indexNav'
import IndexInvi from '../components/indexInvi'
export default class Index extends Component {
   
    render() {
        return (
            <>

            <IndexNav />
            <IndexInvi history={this.props}/>
          
            </>
)
}
}
