import PropTypes from 'prop-types'

const Button = ({ type, text, onClick }) => {
  return (
    <div 
        className={type}
        onClick={onClick}
    >
        {text}
    </div>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button