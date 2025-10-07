import React from 'react'

const searchpopup = () => {
  return (
    <div>
      <div className="search-popup">
  <button className="close-search style-two">
    <i className="fas fa-times" />
  </button>
  <button className="close-search">
    <i className="fas fa-arrow-up" />
  </button>
  <form method="post" action="#">
    <div className="form-group">
      <input
        type="search"
        name="search-field"
        defaultValue=""
        placeholder="Search Here"
        required=""
      />
      <button type="submit">
        <i className="fas fa-search" />
      </button>
    </div>
  </form>
</div>

    </div>
  )
}

export default searchpopup
