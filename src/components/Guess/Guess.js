import React from "react";

function Guess({ handleAddWord, gameStatus }) {
	const [guess, setGuess] = React.useState(" ");
	function handleSubmit(event) {
		event.preventDefault();
		handleAddWord(guess);
		setGuess("");
	}

	return (
		<div>
			<form className="guess-input-wrapper" onSubmit={handleSubmit}>
				<label htmlFor="guess-input">Enter guess:</label>

				<input
					required
					disabled={gameStatus !== "running"}
					id="guess-input"
					title="5 letter word"
					pattern="[a-zA-Z]{5}"
					type="text"
					value={guess}
					onChange={(event) => {
						setGuess(event.target.value.toUpperCase().trim());
					}}
				/>
			</form>
		</div>
	);
}

export default Guess;
