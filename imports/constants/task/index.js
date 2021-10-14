import React from 'react';
export var tasks = [
  {
    title: "Task1",
    color: '#4e42c3',
    hasDescription: true,
    commentsCount: 2,
  },
  {
    title: "Task2",
    customFields: [
      <div className="custom-field custom-field-single">
        <p className="color-light has-color-tag">
          <span className="field-background" />
          <span className="field-title">Highest</span>
        </p>
      </div>
    ]
  },
  {
    title: "Task3",
    hasDescription: true,
    filesCount: 3,
  },
  {
    title: "Task4",
    hasDescription: true,
    commentsCount: 2,
    "icon-timer": 2,
  },
  {
    title: "Task5",
    status: "complete",
  },
  {
    title: "Task6",
    commentsCount: 2,
    status: "complete",
  }
];