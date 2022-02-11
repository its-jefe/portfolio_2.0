import React, { useEffect } from 'react';
import { capitalizeFirstLetter, capitalizeWord } from '../../utils/helpers';

import "./style.css"

function Header(props) {
  // destructure everything passed in
  const {
    categories,
    category,
    setCategory,
  } = props;

  useEffect(() => {
    // on category change...
    // 1) Update document.title to current category
    document.title = capitalizeFirstLetter(category.name);
  }, [category]);

  return (
    <header>
      <section className="name-container">
        <div className="name">
          <div className="scanner"></div>
          <div className="jeff goldman">JEFF</div>
          <div className="timson-container">TIMSON
            <div className="timson-overlay goldman">TIMSON</div>
            <div className="timson-underlay goldman">TIMSON</div>
          </div>
        </div>
      </section>
      <nav className="goldman">
        <ul>
          {categories.map((category) => (
            <li
              key={category.name}
            >
              <span
                onClick={() => {
                  setCategory(category);
                }}
              >
                {capitalizeWord(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header