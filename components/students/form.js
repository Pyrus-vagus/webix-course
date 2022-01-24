const form = {
  view: "form",
  elements: [
    { template: "<img src='../assets/lady.svg' alt='picture'/>" },
    { view: "text", label: "First Name", placeholder: "First Name" },
    { view: "text", label: "Last Name", placeholder: "Last Name" },
    { view: "datepicker", label: "Birthday" },
    {
      view: "richselect",
      label: "City",
      placeholder: "Click to select",
      options: [
        { id: 1, value: "Belarus, Minsk" },
        { id: 2, value: "Belarus, Grodno" },
        { id: 3, value: "Belarus, Vitebsk" },
      ],
    },
    {
      cols: [
        {},
        { view: "button", value: "Reset" },
        { view: "button", value: "Add" },
      ],
    },
  ],
};
export const formSection = {
  rows: [{ template: "Add new students", type: "header" }, form],
};
