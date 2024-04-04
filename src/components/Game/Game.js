import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessList from "../GuessList";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [gameStatus, setGameStatus] = React.useState("running");
	const [guessList, setGuessList] = React.useState([]);

	function handleAddWord(word) {
		/* const newWord = {
			word,
			id: Math.random(),
		}; 
	*/
		//to reduce complexity, we don't need to create object for new word. we can use index for key
		const nextWords = [...guessList, word];
		setGuessList(nextWords);

		if (word.toUpperCase() === answer) {
			setGameStatus("won");
		} else if (nextWords.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus("lost");
		}
	}
	return (
		<>
			<GuessList guessList={guessList} answer={answer} />
			<Guess handleAddWord={handleAddWord} gameStatus={gameStatus} />
			{gameStatus === "won" && <WonBanner numOfGuesses={guessList.length} />}
			{gameStatus === "lost" && <LostBanner answer={answer} />}
		</>
	);
}

export default Game;
