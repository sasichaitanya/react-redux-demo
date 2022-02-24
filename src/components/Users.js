import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../redux'

function Users({ userData, fetchUsers }) {

    useEffect(() => {
        fetchUsers()
    }, []);
    // console.log('========', userData.users)
    return userData.loading ?
        <div>loading</div> : userData.errMessage ?
            <div>userData.errMessage</div> : <div>
                <h1>List of users</h1>
                {
                    userData && userData.users && userData.users.map((ele, ind) => {
                        return <p key={ind}>{ele.title}</p>
                    })
                }
            </div>
}


// it will link global state to local props
const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}
// it will link actions to local props
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Users)