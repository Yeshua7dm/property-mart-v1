import React from 'react'
import { Link } from 'react-router-dom';

const AddProperty = () => {
  return (
    <div>
      <header>
        <h2>Property Mart v1</h2>
        <nav>
          <Link className="link" to="/">
            All Properties
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default AddProperty