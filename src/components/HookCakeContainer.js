import React from 'react'
import { connect } from 'react-redux'
// hooks
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HookCakeContainer(props) {
    // similar to mapStateToProps
    const noOfCakes = useSelector(state => state.noOfCakes);
     // similar to mapDispatchToProps
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Functional componet</h1>
            <h3>No of cakes - {noOfCakes}</h3>
            <button onClick={() => dispatch(buyCake(2))}>Buy cakes</button>
        </div>
    )
}

// // it will link global state to local props
// const mapStateToProps = (state) => {
//     return {
//         noOfCakes : state.noOfCakes
//     }
// }
// // it will link actions to local props
// const mapDispatchToProps = (dispatch) => {
//     return {
//         buyCake: (val) => dispatch(buyCake(val))
//     }
// }

export default HookCakeContainer