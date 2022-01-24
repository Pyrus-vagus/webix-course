
export const grid = {
  view: "datatable",
  columns: [
    {
      id: "ch",
      header: { content: "masterCheckbox" },
      template: "{common.checkbox()}",
      width: 40,
    },
    { id: "name", header: "Name", fillspace: true },
    { id: "lesson", header: "Lesson" },
    { id: "topic", header: "Lesson Topic", width: 200 },
    { id: "grade", header: "Grade" },
    { id: "fgrade", header: "Final Grade" },
  ],
  data: [
    {
      id: 1,
      name: "Scott Munozz",
      lesson: 1,
      topic: 1.1,
      grade: 9,
      fgrade: 10,
    },
    {
      id: 2,
      name: "Christina Fields",
      lesson: 1,
      topic: 1.2,
      grade: 8,
      fgrade: 7,
    },
    {
      id: 3,
      name: "Scott Munozz",
      lesson: 1,
      topic: 1.1,
      grade: 9,
      fgrade: 10,
    },
  ],
};

