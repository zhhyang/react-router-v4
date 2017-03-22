/**
 * Created by Freeman on 2017/3/22.
 */
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../actions'
import Home from './Home'

const mapStateToProps = state => {
  return {
    home: state.home,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)