/**
 * Created by Freeman on 2017/3/22.
 */
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../actions'
import About from './About'

const mapStateToProps = state => {
  return {
    about: state.about,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)