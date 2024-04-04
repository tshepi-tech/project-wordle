import React from "react";
import GuessGrid from "../GuessGrid";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessList({ guessList, answer }) {
	return (
		<div>
			<div className="guess-results">
				{range(NUM_OF_GUESSES_ALLOWED).map((num) => (
					<GuessGrid answer={answer} key={num} value={guessList[num]} />
				))}
			</div>
		</div>
	);
}

export default GuessList;
