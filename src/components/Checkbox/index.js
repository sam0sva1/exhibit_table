import React from 'react'

const Checkbox = ({ label, isChecked, toggleFilter }) => (
    <div>
        <label>
            <input
                type="checkbox"
                className="checkbox"
                value={label}
                checked={isChecked}
                onChange={() => toggleFilter(label)}
            />
            {label}
        </label>
    </div>
)

export default Checkbox
