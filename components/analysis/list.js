export const studentsList = {
	view: "list",
	type: {
		template: (o) =>
			`<div class='listContainer'><img src=${o.photo} alt='avatar'/><span style='margin:0'>${o.first_name} ${o.last_name} <br/> Country: ${o.country}, Date of birth: ${o.birth_date}</span></div>`,
		height: "auto",
	},
	url: "models/students.json",
};
