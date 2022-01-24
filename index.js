import { header } from "./components/header/index.js";
import { side } from "./components/side/index.js";
import { studentsTab } from "./components/students/index.js";
import { lessonTree } from "./components/lessons/index.js";
import { analysisTab } from "./components/analysis/index.js";
import {side_list, students} from "./components/variables.js"

webix.ready(function () {
  webix.ui({
    rows: [
      header,
      {
        cols: [side, { view: "resizer" }, {  cells: [studentsTab, lessonTree, analysisTab], gravity: 8}]
      },
    ],
  });
   $$(side_list).select(students);  
});
