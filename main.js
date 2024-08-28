function App() {
	const [counters, setCounters] = React.useState([])

	let sum = counters.reduce( (accu , curr) =>{
		return accu +  curr.number
	},0 )
  
	function hdlClick(id, n) {
		// console.log(id, n)
		let index = counters.findIndex( item => item.id == id)
		const newCounter = [...counters]
		if( newCounter[index].number <1 && n == -1) {return}
		newCounter[index].number += n
		console.log(index , newCounter[index].number)
		setCounters(newCounter)

		
	}

	function hdlDelete(id){
		console.log(111,id)
		let index = counters.findIndex( item => item.id == id)
		const newCounter = [...counters]
		newCounter.splice(index,1)
		setCounters(newCounter)

	}

	function addCounter(){
		const newCounter = [...counters]
		// console.log(newCounter)
		let nextId = counters.length+1
		newCounter.push({id:{nextId},number:0})
		setCounters(newCounter)
	}
  
  
	return (
	  <div>
		<h1>Sum = {sum}</h1>
		<button onClick={addCounter}>Add Counter</button>
		<hr />
		{
			counters.map( (item) => (
				<Counter key={item.id} item={item} hdlDelete={hdlDelete} hdlClick={hdlClick}/>
			))
		}
	  </div>
	)
  }   
  
  function Counter(props) {
	  const { item, hdlClick , hdlDelete} = props
	  return (
		<div className="counter">
		  <button onClick={()=>hdlClick(item.id,-1)} className="btn btn-dec">-</button>
		  <h3 >{item.number}</h3>
		  <button onClick={()=>hdlClick(item.id,+1)} >+</button>
		  <button onClick={()=>hdlClick(item.id,-item.number)} className="btn btn-clr">C</button>
		  <button onClick={()=>hdlDelete(item.id)}>X</button>
		</div>
	  )
	}

  
  
  
  
  
  ReactDOM.createRoot(document.querySelector('#root'))
	.render(<App />)