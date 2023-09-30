import { useState, useEffect } from "react";
import { quotes } from "./quotes";
import { colorsArray } from "./color";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Card({ randomNumber }) {
  const [quote, setQuote] = useState(quotes[randomNumber].quote);
  const [author, setAuthor] = useState(quotes[randomNumber].author);

  function handleClick() {
    window.location.reload();
  }

  return (
    <>
      <div className="quoteText">
        <span></span>
        {quote}
      </div>
      <div className="authorText">-{author}</div>
      <a
        href={"https://twitter.com/intent/tweet?text=" + quote + "-" + author}
        id="tweet-quote"
      >
        <button
          style={{ background: colorsArray[randomNumber].bgColor }}
          className="twitter-icon"
        >
          <AiOutlineTwitter />
        </button>
      </a>
      <button
        style={{ background: colorsArray[randomNumber].bgColor }}
        className="next"
        onClick={handleClick}
      >
        New Quote
      </button>
    </>
  );
}
