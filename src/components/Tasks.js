import React from 'react';
import { DropdownButton, Dropdown, ButtonToolbar, Form, ProgressBar } from 'react-bootstrap';

const tasks = [
  {
    id: '123',
    company: 'Protozoa Inc.',
    title: 'Implement graph API',
    description: 'Digital dashboard allow managers to monitor the contribution of the various departments in their organizations.',
    progress: 60
  },
  {
    id: '124',
    company: 'Megacorp',
    title: 'Upgrade positioning module',
    description: 'The fruit of the orange tree can be eaten fresh or processed for its juice or fragrant peel.',
    progress: 40
  },
  {
    id: '125',
    company: 'Megacorp',
    title: 'Remove positioning module',
    description: 'The fruit of the orange tree can be eaten fresh or processed for its juice or fragrant peel.',
    progress: 100
  },
  {
    id: '126',
    company: 'Protozoa Inc.',
    title: 'Implement graph UI',
    description: 'Digital dashboard allow managers to monitor the contribution of the various departments in their organizations.',
    progress: 90
  },
]

const Task = ({task = {}, checked = false}) => {
  const { id, company, title, description, progress } = task;
  
  return (
    <div className={`task ${checked ? 'active' : '' }`}>
      <div className="select">
        <Form.Group >
          <Form.Check type="checkbox" checked={checked} onChange={() => console.log(id)}/>
        </Form.Group>
      </div>
      <div className="task-item">
        <div className="name-status">
          <div className="title">
            <p>{company}</p>
            <h4>{title}</h4>
          </div>
          <div className="status">
            {progress === 100 ? <p>All Done</p> : <ProgressBar striped variant="success" now={progress} /> }
          </div>
        </div>
        <div className="task-desc">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

const Tasks = () => {

  return (
    <div className="menu-listing">
      <div className="tasks-title">
        <div className="details">
          <div className="title">
            <h2>Tuesday, 15 November</h2>
            <p>Showing all tasks for today</p>
          </div>
          <div className="view-types">
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-th"></i>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="filters">
          <div>
            <ButtonToolbar>
              <DropdownButton id="dropdown-basic-button" title="All tasks" variant="outline-secondary">
                <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Active</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Blocked</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Archived</Dropdown.Item>
              </DropdownButton>
              <DropdownButton id="dropdown-basic-button" title="Assigned to me" variant="outline-secondary">
                <Dropdown.Item href="#/action-1">Assigned to me</Dropdown.Item>
                <Dropdown.Item href="#/action-2">All</Dropdown.Item>
              </DropdownButton>
            </ButtonToolbar>
          </div>
          <div>
            <span title="Toggele List View"><i className="fas fa-th"></i></span>
          </div>
        </div>
      </div>
      <div className="tasks">
        {tasks && tasks.length ? tasks.map((task, index) => <Task task={task} checked={index === 0 ? true : false} key={task.id} />) : null }
      </div>
      <div className="tasks-title bottom">
        <div className="details">
          <div className="title">
            <h2>Monday, 14 November</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks;