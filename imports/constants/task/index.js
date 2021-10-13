import React from 'react';
export const tasks = [
  {
    title: "Task1",
    isColorTag: true,
    defaultChecked: false,
    indicators: [
      "icon-description",
      "icon-chat",
    ],
  },
  {
    title: "Task2",
    isColorTag: false,
    defaultChecked: false,
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
    isColorTag: false,
    defaultChecked: false,
    indicators: [
      "icon-description",
      "icon-attach",
    ]
  },
  {
    title: "Task4",
    isColorTag: false,
    defaultChecked: false,
    indicators: [
      "icon-description",
      "icon-chat",
      "icon-timer",
    ]
  },
  {
    title: "Task5",
    isColorTag: false,
    defaultChecked: true,
  },
  {
    title: "Task6",
    isColorTag: false,
    defaultChecked: true,
    indicators: [
      "icon-chat",
    ]
  }
];