import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

class CakeContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <h1>Class componet</h1>
                <h3>No of cakes - {this.props.noOfCakes}</h3>
                <button onClick={() => this.props.buyCake(2)}>Buy cakes</button>
            </div>
        )
    }
}

// it will link global state to local props
const mapStateToProps = (state) => {
    return {
        noOfCakes: state.noOfCakes
    }
}
// it will link actions to local props
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (val) => dispatch(buyCake(val))
    }
}

// connect is predefined HOC
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)