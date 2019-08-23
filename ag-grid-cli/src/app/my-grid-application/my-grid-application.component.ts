import { Component, OnInit } from "@angular/core";
import { GridOptions } from "ag-grid-community";
import { RedComponentComponent } from "../red-component/red-component.component";
import { DatatService } from '../services/data.service'

@Component({
  selector: 'app-my-grid-application',
  templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent {
  private gridOptions: GridOptions;
  private data = [];
  private gridApi;

  constructor(private dataService: DatatService) {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
      {
        headerName: "ID",
        field: "id",
        width: 100
      },
      {
        headerName: "Value",
        field: "value",
        cellRendererFramework: RedComponentComponent,
        width: 100
      },

    ];
    this.gridOptions.rowData = this.data;
  }

  ngOnInit () {
    console.log(this);
    this.dataService.getVideos().subscribe(data =>{
      console.log(data);
      this.gridApi.setRowData([{id: 45, value: 42}]);
    })
  }

  onGridReady(params) {
    this.gridApi = params.api;
    
  };
}
