import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
function Search() {
  return (
      <div className="input-group">
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Enter Product Name ..."
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn" >
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
  )
}

export default Search
