import React from "react";
import play from "../assets/images/icon-play.svg";
import { useAudio } from "../Hooks/useAudio";

const Word = ({ response }) => {
  const { isPlaying, handlePlay, hasAudio } = useAudio(response);
  if (!response?.meanings?.[0]) return null;

  return (
    <div className="container-result-word">
      <div className="container-result-header">
        <div className="container-result-header-texts">
          <h1>{response.word}</h1>
          <p>{response.phonetic}</p>
        </div>

        {hasAudio && (
          <div className="container-result-header-audio">
            <button
              onClick={handlePlay}
              className={isPlaying ? "playing" : ""}
              disabled={isPlaying}
            >
              <img src={play} alt="play" />
            </button>
          </div>
        )}
      </div>

      <div className="container-result-noun">
        <div className="container-result-noun-header">
          <h2>
            <strong>noun</strong>
          </h2>
          <div className="container-result-noun-line"></div>
        </div>

        <div className="container-result-noun-body">
          <p>Meaning</p>
          <ul>
            {response.meanings[0].definitions.map((def, i) => (
              <li key={i}>{def.definition}</li>
            ))}
          </ul>
        </div>

        {response.meanings[0].synonyms.length > 0 && (
          <div className="container-result-noun-footer">
            <p>Synonyms</p>
            <div className="container-result-noun-footer-synonyms">
              {response.meanings[0].synonyms.map((synonym, i) => (
                <strong key={i}>{synonym}</strong>
              ))}
            </div>
          </div>
        )}
      </div>

      {response.meanings[1] && (
        <div className="container-result-verb">
          <div className="container-result-noun-header">
            <h2>
              <strong>verb</strong>
            </h2>
            <div className="container-result-noun-line"></div>
          </div>

          <div className="container-result-noun-body">
            <p>Meaning</p>
            <ul>
              {response.meanings[1].definitions.map((def, i) => (
                <li key={i}>
                  {def.definition}
                  {def.example && (
                    <p className="text-example">"{def.example}"</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="container-result-verb-footer">
            <div className="container-result-verb-footer-line"></div>
            <div className="container-result-verb-footer-source">
              <p>Source</p>
              <div className="container-result-verb-footer-source-link">
                <a
                  href={response.sourceUrls[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {response.sourceUrls[0]}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Word;
