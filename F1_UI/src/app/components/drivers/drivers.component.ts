import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../../services/endpoints.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css'],
})
export class DriversComponent implements OnInit {
  drivers: any;
  loading: boolean | undefined;

  constructor(private endPoints: EndpointsService) {}

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.getDriversStanding();
    });
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  getDriversStanding(year = '2023') {
    this.endPoints.getAllDriver(year).subscribe((res) => {
      this.drivers = res;
      console.log(this.drivers);
    });
  }

  getTeamColorClasses(teamName: string): string {
    switch (teamName?.replace(/\s/g, '').toUpperCase()) {
      case 'ALPHATAURI':
        return 'alphatauri-color';

      case 'WILLIAMS':
        return 'williams-color';

      case 'FERRARI':
        return 'ferrari-color';

      case 'HAASF1TEAM':
        return 'haas-color';

      case 'ALFAROMEO':
        return 'alfaromeo-color';

      case 'ALPINEF1TEAM':
        return 'alpine-color';

      case 'ASTONMARTIN':
        return 'astonmartin-color';

      case 'MCLAREN':
        return 'mclaren-color';

      case 'REDBULL':
        return 'redbull-color';

      case 'MERCEDES':
        return 'mercedes-color';

      default:
        return '';
    }
  }

  countryFlag(nationality: any) {
    const country = nationality.replace(/\s/g, '').toLowerCase();
    return `assets/images/Countries/${country}.png`;
  }

  teamLogoSrc(teamName: string) {
    return `assets/images/Team_Logos/${teamName?.replace(/\s/g, '').toUpperCase()}.png`;
  }

  teamLogoClasses(teamName: string) {
    return `${teamName?.replace(/\s/g, '').toUpperCase()}-logo`;
  }
}
