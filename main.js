function App() {
	const [counters, setCounters] = React.useState([
		{ id: 1, number:9 },
		{ id: 2, number:7 },
		{ id: 3, number:2 },
		{ id: 4, number:3 },
		{ id: 5, number:5 },
		{ id: 6, number:0 },
	])

	const updateCounter = (id ,n ) => {
		console.log('id = ',id,)
		let idx = counters.findIndex( el => el.id === id)
		console.log('counters array no.', idx)
		const newCounters = [...counters]
        if(newCounters[idx].number <=0 && n == -1 ) return
		newCounters[idx].number +=n
		console.log(newCounters)
		setCounters(newCounters)
	}
	return (
		<div className='app'>
			<h1 className="show-sum">Sum = 0 </h1>
			<button className="btn-add">Add Counter</button>
			<hr />
			{ counters.map( el => (
				<Counter key={el.id} item={el} updateCounter={updateCounter}/>
			))

			}
		</div>
	)
}

function Counter(props) {
	// console.log(props)
	const {item, updateCounter} = props
	return (
		<div className="counter">
			<button onClick={()=>updateCounter(item.id,-1)} className="btn btn-dec">-</button>
			<h3 className="number">{item.number}</h3>
			<button  onClick={()=>updateCounter(item.id,1)} className="btn btn-inc">+</button>
			<button  onClick={()=>updateCounter(item.id,-item.number)} className="btn btn-clr">C</button>
		</div>
	)
}



ReactDOM.createRoot(document.querySelector('#root'))
	.render(<App />)