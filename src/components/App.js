import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Table from './Table'
import Form from './Form'

const App = () => {
    return (
        <div>
            <Form />
            <Table />
        </div>
    )
}

export default App
