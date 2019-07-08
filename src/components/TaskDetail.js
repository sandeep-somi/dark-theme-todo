import React from 'react';
import { Button, Form, ProgressBar } from 'react-bootstrap';

const TaskDetail = () => {

  return (
    <div className="detail">
      <div className="detail-header">
        <p>Megacorp</p>
        <h1>Upgrade positioning module</h1>
        <div className="tags">
          <Button size="sm">Upgrade</Button>
          <Button size="sm">Dev</Button>
          <Button size="sm">VR</Button>
        </div>
      </div>
      <div className="task-desc">
        <p>Strategic dashboard benifit from static snapshot of data (daily, weekly, monthly and quarterly) that are not constantly changing from one moment to the next.</p>
      </div>
      <div className="task-checklist">
        <ul>
          <li>
            <Form.Check>
              <Form.Check.Input />
              <Form.Check.Label>Ability to identify and correct negative trends</Form.Check.Label>
            </Form.Check>
          </li>
          <li>
            <Form.Check>
              <Form.Check.Input />
              <Form.Check.Label>Visual presentation of performance measures</Form.Check.Label>
            </Form.Check>
          </li>
          <li>
            <Form.Check>
              <Form.Check.Input />
              <Form.Check.Label>Measure Efficiencies/Inefficiencies</Form.Check.Label>
            </Form.Check>
          </li>
          <li>
            <Form.Check>
              <Form.Check.Input />
              <Form.Check.Label>Ability to generate detailed reports showing new trends</Form.Check.Label>
            </Form.Check>
          </li>
        </ul>
      </div>
      <div className="detail-footer">
        <hr />
        <div className="misc-detail">
          <div className="assignee-detail">
            <p>Assigned By</p>
            <h5>Johnathan Ive</h5>
          </div>
          <div className="task-due">
            <p>Task Due</p>
            <h5>Today, 16:30</h5>
          </div>
          <div className="task-detail-status">
            <p>Task Status</p>
            <ProgressBar striped variant="success" now={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskDetail;