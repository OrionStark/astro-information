import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { NasaService } from '../services/nasa.service';
import { LookUpModel, ApproachDataModel } from '../model/NEO';

@Component({
  selector: 'app-neo-information',
  templateUrl: './neo-information.component.html',
  styleUrls: ['./neo-information.component.scss']
})
export class NeoInformationComponent implements OnInit, AfterViewInit {

  displayedColumns = ['No', 'Orbiting Body', 'Date', 'Miss Distance'];
  neo_data: LookUpModel;
  dataSource = new MatTableDataSource<ApproachDataModel>();
  sub: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor( private _activeRoute: ActivatedRoute,
    private _nasaService: NasaService,
    private _router: Router ) {
    this.sub = this._activeRoute.params.subscribe(
      params => {
        this.getData(params['id']);
      }
    );
  }

  ngOnInit() {
  }

  getData( param: string ) {
    this._nasaService.getNEOLookUp(param)
      .subscribe(
        data => {
          this.neo_data = JSON.parse(data.text());
          this.dataSource = new MatTableDataSource<ApproachDataModel>(this.neo_data.close_approach_data);
          this.dataSource.paginator = this.paginator;
        },
        err => {
          console.log(err);
        }
      );
  }

  ngAfterViewInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
