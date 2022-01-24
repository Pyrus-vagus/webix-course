export const grid = {
  view: "datatable",
  columns: [
    {
      id: "ch",
      header: { content: "masterCheckbox" },
      template: "{common.checkbox()}",
      width: 40,
    },
    { id: "id", header: "", width: 40 },
    { id: "name", header: "Name", fillspace: true },
    { id: "age", header: "Age" },
    { id: "city", header: "City", width: 200 },
  ],
  data: [
    { id: 1, name: "Scott Munozz", age: 18, city: "Belarus, Minsk" },
    { id: 2, name: "Christina Fields", age: 20, city: "Belarus, Minsk" },
  ],
};
