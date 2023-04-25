import PropTypes from 'prop-types'

function Card({children, reverse, role}) {
    return (
        <div className={`card ${role}`} style = {{
          backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
          color: reverse ? '#fff' : '#000'
        }}> 
          {children}
        </div>
      )
}

Card.defaultProps ={
    reverse: false ,
    role: 'hola',
  }
  
  Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
    role: PropTypes.string.isRequired,
  }

export default Card