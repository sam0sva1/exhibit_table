import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleFilter, createItem } from 'actions'
import autobind from 'autobind-decorator'
import Checkbox from 'components/Checkbox'
import './Form.sss'
/*
const Input = ({ label, onChange }) => {
  return (
    <div className="form__group">
      <label className="form__label">
        {label}
        <input type="text" className="form__input" onInput={onChange} />
      </label>
    </div>
  )
}*/

const Input = ({ label, value, onChange, textarea }) => {
  return (
    <div className="form__group">
      <label className="form__label">
        {label}
        {textarea ? <textarea className="form__textarea" value={value} onChange={onChange}  /> : <input type="text" value={value} className="form__input" onInput={onChange} />}
      </label>
    </div>
  )
}

@connect(
    (state) => ({...state}),
    (dispatch) => {
        return {
            createItemHandler: (item) => {
                dispatch(createItem(item))
            }
        }
    }
)
@autobind
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      name: '',
      city: '',
      country: '',
      organization: '',
      description: ''
    }
  }

  handleChange(name, input) {
    this.setState({[name]: input})
  }

  handleSubmit(event) {
    const { name, city, country, organization, description } = this.state
    const item = { name, city, country, organization, description }
    this.cleanTheForm()
    this.props.createItemHandler(item)
  }

  cleanTheForm() {
    this.setState({
      name: '',
      city: '',
      country: '',
      organization: '',
      description: ''
    })
  }

  onSwitcherClick() {
    this.setState({ visible: !this.state.visible })
    this.cleanTheForm()
  }

  getForm() {
    const { name, city, country, organization, description, visible } = this.state
    return (
      <div className="form__wrapper">
        <div className="form__title">Новый экспонат</div>

        <Input label='Название'     value={name}          onChange={(e) => this.handleChange('name', e.target.value)} />
        <Input label='Город'        value={city}          onChange={(e) => this.handleChange('city', e.target.value)} />
        <Input label='Страна'       value={country}       onChange={(e) => this.handleChange('country', e.target.value)} />
        <Input label='Организация'  value={organization}  onChange={(e) => this.handleChange('organization', e.target.value)} />
        <Input label='Описание'     value={description}   onChange={(e) => this.handleChange('description', e.target.value)} textarea />

        <div className="form__group">
          <div className="form__control">
            <button onClick={this.handleSubmit} className="form__btn btn">Добавить</button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { visible } = this.state
    return (
      <div className='form'>
        <button onClick={this.onSwitcherClick} className="btn">{visible ? 'Скрыть форму' : 'Добавить экспонат'}</button>
        { visible ? this.getForm() : ''}
      </div>
    )
  }
}

Form.propTypes = {
    filters: PropTypes.array
}

export default Form