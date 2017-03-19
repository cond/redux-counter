import { connect } from 'react-redux'
import CounterView from '../components/CounterView'
import { counter_add1, counter_sub1, counter_reset } from '../actions'

const mapStateToProps = (state) => {
    return {
	count: state.counter.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
	onClickAdd1: () => {
	    dispatch(counter_add1())
	},
	onClickSub1: () => {
	    dispatch(counter_sub1())
	},
	onClickReset: () => {
	    dispatch(counter_reset())
	}
    }
}

const Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterView)

export default Counter
