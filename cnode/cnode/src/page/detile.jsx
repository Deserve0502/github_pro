import React, { Component, useState } from 'react'
import IndexNav from '../components/indexNav'
import store from '../store'
import {
    observer
} from 'mobx-react';

@observer
export default class Detile extends Component {
    render() {
        return (
            <>
            <IndexNav />
{
    store.detile.title
}
            </>
)
}
}