import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Header = () => {
    return (
        <thead>
            <tr>
                <th>Название</th>
                <th>Место создания</th>
                <th>Организания</th>
                <th>Описание</th>
            </tr>
        </thead>
    )
}

const getRows = (items) => {
    return items.map(({name, description, organization, city, country}) => {
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>{city}, {country}</td>
                <td>{organization}</td>
                <td>{description}</td>
            </tr>
        )
    })
}

@connect(
    (state) => ({...state}),
    null
)
class Table extends Component {
    render() {
        return (
            <table className="table table-bordered">
                <Header />
                <tbody>
                    {getRows(this.props.items)}
                </tbody>
            </table>
        )
    }
}

Table.propTypes = {
    items: PropTypes.array
}

export default Table
