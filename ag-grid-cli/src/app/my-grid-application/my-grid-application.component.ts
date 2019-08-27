import { Component } from "@angular/core";
import { GridOptions } from "ag-grid-community";
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
    this.gridOptions = <GridOptions>{
      rowSelection: "multiple",
      rowMultiSelectWithClick: true,
      onSelectionChanged: function () {
        console.log('asd', this.api.getSelectedRows().length);
      },
      columnDefs: [
        {
          headerCheckboxSelection: true,
          headerName: "Select/Unselect All",
          field: "checkbox",
          checkboxSelection: true,
          width: 170
        },
        {
          headerName: "Title",
          field: "title",
          width: 220
        },
        {
          headerName: "Description",
          field: "description",
          width: 150
        },
        {
          headerName: "Published At",
          field: "publishedAt",
          width: 150
        },
        {
          headerName: "Video URL",
          field: "url",
          width: 300,
          cellRenderer: function(params) {
            return '<a href="'+params.value+'" target="_blank">'+ params.value+'</a>'
          }
        },
      ],
      rowData: this.data
    };
  }

  fetchGrid() {
    this.dataService.getVideos().subscribe((data: Object[]) =>{
      if ('items' in data) {
        data['items'].forEach((res, index) => {
          this.dataObject.push({
            title: res.snippet.title,
            description: res.snippet.description,
            publishedAt: res.snippet.publishedAt,
            url: 'https://www.youtube.com/watch?v='+res.id.videoId,
          });
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
