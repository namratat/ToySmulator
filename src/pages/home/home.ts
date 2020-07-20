import { Component ,ViewChild} from '@angular/core';
import { NavController , Content} from 'ionic-angular';
import {tableData} from '../../data/tableData';
import { AlertController } from 'ionic-angular';

export enum CommandTypes {
  PLACE = 'PLACE',
  MOVE = 'MOVE',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  REPORT = 'REPORT'
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;
  X :number;
  Y : number;
  directionArray : any;
  currentDirection : String;
  rotate : any;
  placeObj : boolean;
  xmax : number;
  ymax : number;
  data : any;
  tableData :any;
  input : any;

  constructor(public navCtrl: NavController, public  tData : tableData, public show: AlertController) {
          this.X = 0;
          this.Y = 0;
          this.directionArray = ["NORTH","SOUTH","WEST","EAST"];
          this.currentDirection = "NORTH";
          this.rotate = 0;
          this.placeObj = false;
          this.xmax = 4;
          this.ymax = 4;

          this.tableData = this.tData.generateData(null,null);
          this.input = '';
  }
// Robot Commands
  public CommandFunction () {
    if(!this.placeObj){
      alert('Click place to start the move');
      return;
    }
    
    switch (this.currentDirection) {
        case 'NORTH':
          this.checkForBondaries('Y', this.ymax, 'increment');
          break;
        case 'SOUTH':
          this.checkForBondaries('Y', this.ymax, 'decrement');
          break;
        case 'EAST':
          this.checkForBondaries('X', this.xmax, 'increment');
          break;
        case 'WEST':
          this.checkForBondaries('X', this.xmax, 'decrement');
          break;
    }
  }

  
  public isValid(img){
    if(img!=null){
      return true;
    }
    else{
      return false;
    }

  }
//Check for Robot Bondaries
  public checkForBondaries(axis, maxVal ,value){
        switch(axis){
              case 'X':{
                  if(value == 'increment'){
                    if(this.X!=maxVal)
                      this.X = this.X+1;
                    else
                      this.showAlert();
                  }else if(value == 'decrement'){
                    if(this.X != 0)
                      this.X = this.X-1;
                    else
                      this.showAlert();
                  }
                  break;  
              }
          
              case 'Y':{
                if(value == 'increment'){
                  if(this.Y!=maxVal)
                    this.Y = this.Y+1;
                  else
                  this.showAlert();
                }else if(value == 'decrement'){
                  if(this.Y != 0)
                    this.Y= this.Y-1;
                  else
                    this.showAlert();
                }
                break;  
              }
    }
      
      this.tableData = this.tData.generateData(this.X,this.Y);
    }
  
 // Rotate Robot to given direction
  public rotateLeftRight(side){
    if(!this.placeObj){
      alert('Click place to start the move');
      return;
    }
    const currDi = this.currentDirection;
    if(side == "LEFT"){
      switch(this.currentDirection){
        case 'SOUTH':
          this.currentDirection = 'EAST';
          break;
        case 'EAST':
          this.currentDirection = 'NORTH';
          break;
        case 'WEST':
          this.currentDirection = 'SOUTH';
          break;
          case 'NORTH':
          this.currentDirection = 'WEST';
          break;
      }
      this.rotate = this.rotate-90;
    }else{
      switch(this.currentDirection){
        case 'SOUTH':
          this.currentDirection = 'WEST';
          break;
        case 'EAST':
          this.currentDirection = 'SOUTH';
          break;
        case 'WEST':
          this.currentDirection = 'NORTH';
          break;
          case 'NORTH':
          this.currentDirection = 'EAST';
          break;
      }
      this.rotate = this.rotate+90;
    }
  }

  //Place Robot on the Table
  public Place(){
    this.placeObj = true;
    if(this.input !=''){
      var val  = this.input.split(',');
      this.X = Number(val[0]);
      this.Y = Number(val[1]);
      this.currentDirection = val[2].toUpperCase();
    }else{
      this.X = 0;
      this.Y = 0;
    }
    if(this.X>=5 || this.Y>=5){
      this.showAlert(); 
    }else{
      this.tableData = this.tData.generateData(this.X,this.Y);
    }
  };

  // Reset All values

  public Reset(){
    this.content.resize();
    this.placeObj = false;
    this.setDefault();
    this.input = '';
    this.tableData = this.tData.generateData(null,null);  
  }

  // Set Default Values

  public setDefault(){
    this.X = 0;
    this.Y = 0;
    this.currentDirection = 'NORTH';
  }

  // Show Alert if Robot Moves out of Boundaries

  showAlert() {
    const alert = this.show.create({
      subTitle: 'ROBOT will fall',
      buttons: ['OK']
    });
    alert.present();
  }
  
 
  
  
}
