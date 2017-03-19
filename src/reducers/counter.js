const counter = (state = { count: 0 }, action) => {

    switch(action.type) {
	case 'COUNTER_ADD1':
	    return { count: state.count + 1 }
	case 'COUNTER_SUB1':
	    return { count: state.count - 1 }
	case 'COUNTER_RESET':
	    return { count: 0 }
	default:
	    return state
    }

}

export default counter
