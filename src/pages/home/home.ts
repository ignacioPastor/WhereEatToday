import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	places: string[] = [];
	myNewPlace: string = "";

	constructor(public navCtrl: NavController) {

	}	
	ionViewWillEnter(){
		console.log("ionViewWillEnter");
		// this.places.push("Place1");
		// this.places.push("Place2");
		// this.places.push("Place3");
		// this.places.push("Place4");
		// this.places.push("Place5");
	}

	onClickPlace(place: string){
		console.log("onClickPlace");
		console.log(place);
	}

	onClickChoose(){
		console.log("onClickChoose");
		if(this.places.length == 0)
			return;
		this.selectedPlace = "";
		//this.randomice();
		this.periodicOperation();
		//this.selectPlace();
	}
	selectedPlace:string = "";
	selectPlace(){
		this.selectedPlace = this.places[0];
	}

	giveColor(){
		let center = this.places.length / 2;
		//this.places[center].removeAttribute("center")
	}

	onClickAdd(){
		console.log("onClickAdd");
		if(this.myNewPlace == "")
			return;
		this.places.push(this.myNewPlace);
		this.myNewPlace = "";
	}

	periodicOperation(){
		console.log("periodicOperation");
		// let n = Math.floor(Math.random() * 50) + 1;
		let n = Math.floor(Math.random() * 20) + 10;
		console.log(n);
		let cont = 0;
		var myRandomThread = Observable.interval(200).subscribe(x => {
			console.log("operation");
			this.places.push(this.places.shift());
			cont++;
			console.log(cont);
			if(cont == n){
				console.log("inThaIf");
				myRandomThread.unsubscribe();
				this.selectPlace();
			}
		});
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
			//this.places.push(this.places.shift());
			//this.wait(2000);
			//this.expensiveOperation();
			//this.periodicOperation();
		}
	}

	

	tmp: string[] = [];
	changeArray(){
		console.log("changeArray");
		this.places.push(this.places.shift());
		this.tmp = this.places;
		this.places = [];
		this.places = this.tmp;
	}
	expensiveOperation(){
		console.log("expensiveOperation");
		//this.places.push(this.places.shift());
		let j = 0;
		this.changeArray();
		for(let i=0;i<1000000000; i++){
			j++;
		}
		console.log(j);
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
