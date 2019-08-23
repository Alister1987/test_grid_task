import { Component } from "@angular/core";
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
  private dataObject = [];

  constructor(private dataService: DatatService) {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
      {
        headerName: "Title",
        field: "title",
        width: 100
      },
      {
        headerName: "Description",
        field: "description",
        cellRendererFramework: RedComponentComponent,
        width: 100
      },

    ];
    this.gridOptions.rowData = this.data;
  }

  fetchGrid() {
    this.dataService.getVideos().subscribe((data: Object[]) =>{
      if ('items' in data) {
        data['items'].forEach((res, index) => {
          console.log(res.snippet.description);
          this.dataObject.push({title: 45, description: res.snippet.description});
        })
        this.gridApi.setRowData(this.dataObject);
      }
    })
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.fetchGrid();
  };
}
