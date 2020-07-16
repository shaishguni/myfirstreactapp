import React from "react";
import classnames from 'classnames'

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  id,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="htmlFor">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={classnames('form-control form-control-lg',{
            'is-invalid': error
        })}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">This is incorrect</div>}
    </div>
  );
};


// TextInputGroup.propTypes ={
//     name: PropTypes.string.isRequired,
//     placeholder:  PropTypes.string.isRequired,
//     label:  PropTypes.string.isRequired,
//     value:  PropTypes.string.isRequired,
//     type:  PropTypes.string.isRequired,
//     onChange:  PropTypes.func.isRequired,
// }

// TextInputGroup.defaultProps = {
//     type: 'text'
// }

export default TextInputGroup;
