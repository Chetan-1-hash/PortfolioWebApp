import { Component } from '@angular/core';
import { data } from './data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {

  copyrightdata = data;
  drivetooltiptext!: string;

  showDriveToolTip(i: number) {
    const driveUrl = this.copyrightdata[i].copyrightlinks.drive;
    if (driveUrl) {
      this.drivetooltiptext = "Copyright file"
    }
    else {
      this.drivetooltiptext = "No Link";
    }
  }

  opentab(i: number) {
    const driveUrl = this.copyrightdata[i].copyrightlinks.drive;
    if (driveUrl) {
      window.open(driveUrl, '_blank');
    }
    else {
      console.log("ERROR at url")
    }
  }

}
