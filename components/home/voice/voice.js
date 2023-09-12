import React, { useState, useEffect } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import { useContext } from "react";
import { sideBarContext } from "../sidebar/context";
import "./voice.css";

const Example = () => {
  const [isCircleVisible, setIsCircleVisible] = useState(true);
  const { category, setCategory } = useContext(sideBarContext);
  const [lang, setLang] = useState("en-AU");
  const [value, setValue] = useState("");
  const [blocked, setBlocked] = useState(false);
  const [voiceCard, setVoiceCard] = useState(false);
  const onEnd = () => {
    // You could do something here after listening has finished
    setVoiceCard(false);
    setLang("");
    setCategory(value);
  };

  const onResult = (result) => {
    setValue(result);
  };
  // const changeLang = (event) => {
  //     setLang(event.target.value);
  // };

  const onError = (event) => {
    if (event.error === "not-allowed") {
      setBlocked(true);
    }
  };

  const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult,
    onEnd,
    onError,
  });

  const toggle = listening
    ? stop
    : () => {
        setBlocked(false);
        listen({ lang });
        setVoiceCard(true);
      };
  useEffect(() => {
    // Toggle the circle visibility every 1 second
    const intervalId = setInterval(() => {
      setIsCircleVisible((prevIsCircleVisible) => !prevIsCircleVisible);
    }, 1000); // 1000ms = 1 second

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="">
      <form id="speech-recognition-form">
        {!supported && (
          <p>
            Oh no, it looks like your browser doesn&#39;t support Speech
            Recognition.
          </p>
        )}
        {supported && (
          <React.Fragment>
            <button disabled={blocked} type="button" onClick={toggle}>
              {listening ? (
                "Stop"
              ) : (
                <div
                  style={{ backgroundColor: "#F9F9F9" }}
                  className="md:h-14 md:w-14  flex items-center justify-center rounded-full "
                >
                  <img src="/images/navbar/mice.png" alt="" />
                </div>
              )}
            </button>
            {blocked && (
              <p style={{ color: "red" }}>
                The microphone is blocked for this site in your browser.
              </p>
            )}
          </React.Fragment>
        )}
      </form>
      {voiceCard ? (
        <div className="voiceCard fixed top-0 h-48 w-80 right-0 bg-white z-30 shadow-2xl rounded-lg">
          <div className="voiceCardWrapper">
            <div
              onClick={toggle}
              className={`circle absolute bottom-14 flex items-center justify-center left-32 ${
                isCircleVisible ? "circleAnimation" : ""
              }`}
            >
              <span className="voice_mice h-20 w-20 bg-red-800 flex items-center justify-center rounded-full cursor-pointer text-white left-32">
                <i
                  className="fa fa-microphone text-white text-4xl"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
            <span className="listening absolute bottom-8 left-36">
              Listening
            </span>
            <textarea
              id="transcript"
              name="transcript"
              placeholder="Waiting to take notes ..."
              value={value}
              rows={3}
              disabled
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Example;
