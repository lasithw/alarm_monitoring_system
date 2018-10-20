import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

    public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public downSites: any[] = [50, 59, 80, 81, 56, 55, 40];
    public locations: any[] = [28, 48, 40, 50, 86, 27, 90];

}
