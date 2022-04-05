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
		{
			id: "photo",
			header: "",
			width: 40,
			template: (o) => `<img src=${o.photo} width="30px" alt='avatar'/>`,
		},
		{ id: "first_name", header: "First Name" },
		{ id: "last_name", header: "Last Name", fillspace: true },
		{ id: "email", header: "Email", fillspace: true },
		{ id: "country", header: "Country" },
		{ id: "birth_date", header: "Date of Birth" },
	],
	url: "models/students.json",
};
