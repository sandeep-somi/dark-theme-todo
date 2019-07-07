import React from 'react';

const Sidebar = () => {

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <div>
          <ul>
            <li>
              <i className="fas fa-bars"></i>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li><i className="fas fa-home"></i></li>
            <li className="active"><i className="fas fa-bullseye"></i></li>
            <li><i className="far fa-list-alt"></i></li>
            <li><i className="far fa-comments"></i></li>
            <li><i className="fas fa-align-left"></i></li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <i className="far fa-comment-alt"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;