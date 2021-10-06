import React, { useEffect } from 'react';
import {Link} from "react-router-dom"
import { capitalizeFirstLetter } from '../../utils/helpers';

import "./style.css"

function Nav(props) {
  // destructure everything passed in
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    setHeaderTitle
  } = props;

  useEffect(() => {
    setHeaderTitle(capitalizeFirstLetter(currentCategory.name))
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [setHeaderTitle, currentCategory]);

  return (
      <nav id="Nav">
        <ul>
          {categories.map((category) => (
            <li
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Nav