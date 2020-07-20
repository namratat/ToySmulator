
import { Injectable } from '@angular/core';
@Injectable()

export class tableData {
 
  data : any;
  XVal : any;
  YVal : any;

  constructor() {
      this.XVal = 5;
      this.YVal = 5;

    
          this.data = this.generateData(null,null);
    }

    public generateData(x,y){
        var xData = [];
            for(var i=0; i<this.XVal;i++)
            {
                var yData = [];
                for(var j=0; j<this.YVal; j++){
                    var val= null;
                    yData.push(val);
                }
                xData.push(yData);
            }
            this.data = xData;
            if(x!=null){
                this.data[x][y] = "../assets/imgs/logo.png";
            }
            return this.data;
    }
    

    public getTableData(){
        return this.data;
    }
}
