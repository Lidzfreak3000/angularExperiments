import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as CanvasJS from '../assets/canvasjs.min';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	ngOnInit() {
	let chart = new CanvasJS.Chart("chartContainer", {
		theme: "light2",
		animationEnabled: true,
		exportEnabled: true,
		title:{
			text: "Monthly Expense"
		},
		data: [{
			type: "pie",
			showInLegend: true,
			toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
			indexLabel: "{name} - #percent%",
			dataPoints: [
				{ y: 450, name: "Food" },
				{ y: 120, name: "Insurance" },
				{ y: 300, name: "Traveling" },
				{ y: 800, name: "Housing" },
				{ y: 150, name: "Education" },
				{ y: 150, name: "Shopping"},
				{ y: 250, name: "Others" }
			]
		}]
	});

	chart.render();
    }
}
