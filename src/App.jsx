import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(0);

  const { id, image, job, name, text } = people[index];

  function prevPerson() {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
  }

  function nextPerson() {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  }

  function randomPerson() {
    const rand = Math.floor(Math.random() * people.length);
    if (rand === index) {
      prevPerson();
    } else {
      setIndex(rand);
    }
  }

  return (
    <main>
      <article className="review" key={id}>
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>

        <button className="btn" onClick={randomPerson}>
          Random Person
        </button>
      </article>
    </main>
  );
}
export default App;
