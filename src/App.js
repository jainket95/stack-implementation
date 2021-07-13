import React, { useState } from "react";

const App = () => {
	const [stack, setStack] = useState([]);
	const [stateInput, setStateInput] = useState("");
	const [text, setText] = useState("");

	let [counter, setCounter] = useState(stack.length - 1);

	const handleChange = (e) => {
		setStateInput(e.target.value);
	};

	const enter = (params) => {
		if (stateInput.length > 0) {
			setStack([...stack, stateInput]);
		}
		setCounter(++counter);
	};

	const previous = (params) => {
		if (counter > 0) {
			const tempState = stack[counter - 1];

			setStateInput(tempState);
			setCounter(--counter);
		}
	};

	const next = (params) => {
		if (counter < stack.length) {
			const tempState = stack[counter + 1];

			setStateInput(tempState);
			setCounter(++counter);
		}
	};

	console.log(stack, counter);

	return (
		<div>
			<button onClick={previous}>previous</button>
			<button onClick={next}>next</button>
			<input
				type="text"
				name="url"
				value={stateInput}
				onChange={handleChange}
			/>
			<button onClick={enter}>enter</button>
			<div>{stateInput}</div>
		</div>
	);
};

export default App;

// Puneeth P9:22 PM
// https://drive.google.com/file/d/1W2rYCeAuP69AG3QCy_x0tH-D_s0eDfGH/view
// Puneeth P9:45 PM
// https://cdn.dribbble.com/users/283725/screenshots/3666641/attachments/820069/habu_design_resources_-_product.png
// puneeth.p@wazirx.com
