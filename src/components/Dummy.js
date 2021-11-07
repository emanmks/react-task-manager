import PropTypes from 'prop-types'

// Simple props
// const Dummy = (props) => {
//     return (
//         <>
//           <h3>Hey, { props.name }</h3>  
//         </>
//     )
// }

// props with default attribute
// const Dummy = (props) => {
//     return (
//         <>
//           <h3>Hey, { props.name }</h3>  
//         </>
//     )
// }

// Dummy.defaultProps = {
//     name: 'Eman'
// }


// Desctructured props
// const Dummy = ({ name }) => {
//     return (
//         <>
//           <h3>Hey, { name }</h3>  
//         </>
//     )
// }

// Desctructured props with default value
// const Dummy = ({ name = 'John' }) => {
//     return (
//         <>
//           <h3>Hey, { name }</h3>  
//         </>
//     )
// }


// Props with prop type
// ToDo: Create a TS version
const Dummy = (props) => {
    return (
        <>
          <h3 style={textStyle}>Hey, { props.name }</h3>  
        </>
    )
}

Dummy.defaultProps = {
    name: 'Eman'
}

Dummy.propTypes = {
    name: PropTypes.string,
}

const textStyle = {
    color: 'white',
    backgroundColor: 'grey'
}

export default Dummy
