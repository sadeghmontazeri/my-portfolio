import React from "react";
import { useState, useEffect } from "react";
import questions from "./questions";
import Score from "../score";

export default function Quiz({ onName }) {
  const [Endgame, setEndgame] = useState(false);
  const [CurrentQ, setCurrentQ] = useState(questions[0].answer);
  const [UserAnswer, setUserAnswer] = useState(null);
  const [Point, setPoint] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(1);
  const nextQuestion = (e) => {
    e.preventDefault();
    setQuestionIndex((prev) => prev + 1);
    console.log(questionIndex);
    if (CurrentQ == UserAnswer) {
      setPoint((prev) => prev + 1);
    } else {
      return;
    }
  };
  useEffect(
    (e) => {
      setCurrentQ(questions[questionIndex - 1].answer);
    },
    [questionIndex]
  );
  return !Endgame ? (
    <div className="w-100 h-100 flex-col flex items-center justify-center">
      <h1 className="w-[250px] text-center my-4">questions</h1>
      <h1>Dear {onName} Lets Try This</h1>
      {questions
        .filter((e) => questionIndex == e.id)
        .map((e) => (
          <form
            className="w-[500px] flex-col flex justify-center items-center"
            action=""
            key={e.id}
          >
            <h5 className="text-center">{e.question}</h5>
            <button
              type="button"
              className="w-[340px] h-[40px] my-1 bg-blue-300 "
              onClick={(e) => {
                setUserAnswer(e.target.value);
                console.log(UserAnswer);
              }}
              value={e.A}
            >
              {e.A}
            </button>
            <br />
            <button
              type="button"
              className="w-[340px] h-[40px] my-1 text-center bg-blue-300"
              value={e.B}
              onClick={(e) => {
                setUserAnswer(e.target.value);
                console.log(UserAnswer);
              }}
            >
              {e.B}
            </button>
            <br />
            <button
              type="button"
              className="w-[340px] h-[40px] my-1 text-center bg-blue-300"
              value={e.C}
              onClick={(e) => {
                setUserAnswer(e.target.value);
                console.log(UserAnswer);
              }}
            >
              {e.C}
            </button>
            <br />
            <button
              type="button"
              className="w-[340px] h-[40px] my-1 text-center bg-blue-300"
              value={e.D}
              onClick={(e) => {
                setUserAnswer(e.target.value);
                console.log(UserAnswer);
              }}
            >
              {e.D}
            </button>
            {questionIndex < 4 ? (
              <>
                <button
                  type="button"
                  onClick={nextQuestion}
                  className="bg-green-300 w-[340px] h-[40px] my-3"
                >
                  Next
                </button>
              </>
            ) : questionIndex == 4 ? (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setEndgame((prev) => !prev);
                  }}
                  className="bg-green-300 w-[340px] h-[40px] my-3"
                >
                  Finish The Quiz !!
                </button>
              </>
            ) : (
              <></>
            )}
          </form>
        ))}
    </div>
  ) : (
    <Score onPoint={Point} />
  );
}
