import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import linzicon from '../images/linzmain.png'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`, /* Changed from default gatsby starter rebeccapurple */
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >

    {/* Title/logo area */}
      <span style={{display: 'flex', alignItems: 'center'}}>  
        <img src={linzicon} alt="Land Information New Zealand (LINZ)-Toitū te whenua."
                            title="Land Information New Zealand (LINZ)-Toitū te whenua."
                            style={{border: '1px solid darkgreen',
                                    borderRadius: '25%',
                                    margin: '0 30px', 
                                    width: '200px'}}/>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `darkgreen`, /* Changed from white */
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </span>      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
