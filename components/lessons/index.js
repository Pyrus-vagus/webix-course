import { lessons } from "../variables.js";

const gridToolbar = {
  view: "toolbar",
  type: "clean",
  elements: [
    { template: "Lessons" },
    {},
    { view: "text", placeholder: "Search" },
    { view: "button", width: 40, value: "+" },
    { view: "button", width: 40, value: "-" },
  ],
};
const lessonGrid = {
  view: "treetable",
  select: true,
  columns: [
    {
      id: "value",
      header: "Topic",
      fillspace: true,
      template: "{common.treetable()} #value#",
    },
  ],

  data: [
    {
      id: 1,
      value: "Lesson 1 Data Presentation",
      open: true,
      data: [
        { id: 1.1, value: "Comments" },
        { id: 1.2, value: "DataTable" },
        { id: 1.3, value: "DataView" },
        { id: 1.4, value: "GroupList" },
        { id: 1.5, value: "Filter" },
        { id: 1.6, value: "Tree" },
      ],
    },
    {
      id: 2,
      value: "Lesson 2 Windows and Popups",
      open: false,
      data: [
        { id: 2.1, value: "Windows" },
        { id: 2.2, value: "Popups" },
      ],
    },
    {
      id: 3,
      value: "Lesson-3 Complex Widgets",
      open: true,
      data: [
        { id: 3.1, value: "Pivot" },
        { id: 3.2, value: "Query" },
        { id: 3.3, value: "File Manager" },
        { id: 4.4, value: "Document Manager" },
      ],
    },
  ],
};
export const lessonTree = {
  id: lessons,
  rows: [gridToolbar, lessonGrid],
};
