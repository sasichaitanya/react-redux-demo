import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../redux'

class IceCreamContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <h1>Class componet</h1>
                <h3>No of icecreams - {this.props.noOfIcecreams}</h3>
                <button onClick={() => this.props.buyIcecream(2)}>Buy icecreams</button>
            </div>
        )
    }
}

// it will link global state to local props
const mapStateToProps = (state) => {
    return {
        noOfIcecreams: state.icecream.noOfIcecreams
    }
}
// it will link actions to local props
const mapDispatchToProps = (dispatch) => {
    return {
        buyIcecream: (val) => dispatch(buyIcecream(val))
    }
}

// connect is predefined HOC
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)