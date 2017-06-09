import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	places: string[] = [];
	constructor(public navCtrl: NavController) {

	}	
	ionViewWillEnter(){
		console.log("ionViewWillEnter");
		this.places.push("Place1");
		this.places.push("Place2");
		this.places.push("Place3");
		this.places.push("Place4");
		this.places.push("Place5");
	}

	onClickPlace(place: string){
		console.log("onClickPlace");
		console.log(place);
	}

	onClickChoose(){
		console.log("onClickChoose");
		this.randomice();
	}
	iterate(){
		console.log("iterate");
		this.places.push(this.places.shift());
	}
	randomice(){
		console.log("randomice");
		let n = Math.floor(Math.random() * 6) + 1;
		console.log(n);
		for(let i=0; i<n; i++){
			var millisecondsToWait = 500;
			// setTimeout(this.iterate, millisecondsToWait);
			this.places.push(this.places.shift());
			this.wait(2000);
			
			
		}
	}
	wait(ms){
		console.log("wait");
		var start = new Date().getTime();
		var end = start;
		while(end < start + ms) {
			end = new Date().getTime();
		}
	}
}
