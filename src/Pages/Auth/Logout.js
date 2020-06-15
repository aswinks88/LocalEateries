import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {logout} from '../../actions/Authactions'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
 class Logout extends Component {
     static propTypes = {
         logout: PropTypes.func.isRequired
     }
    render() {
        return (
            <Fragment>
            <div>
                <Link onClick={this.props.logout} to='#'>Logout</Link>
            </div>
            </Fragment>
           
        )
    }
}

export default connect(logout)(Logout)
