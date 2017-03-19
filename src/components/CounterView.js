import React from 'react'

const CounterView = ({count, onClickAdd1, onClickSub1, onClickReset}) => {
    return (
	<div>
	    <div>
	    {count}
	    </div>
	    <button onClick={() => {onClickAdd1()}}>+1</button>
	    <button onClick={() => onClickSub1()}>-1</button>
	    <button onClick={() => onClickReset()}>>Reset</button>
	</div>
    )
}

export default CounterView
