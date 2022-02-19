export class AlarmCodes {
  code: string;
  locationName: string;
  isSelected: boolean;

  constructor(code: string, locationName: string) {
    this.code = code;
    this.locationName = locationName;
    this.isSelected = false;
  }

}
