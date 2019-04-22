import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor() { }

  columnHeaders: any[];
  tabledata: String[];
  lec: any[];
  schedule: any[];
  dayschedule: any[];
  slots: any[];
  lectures: any[];
  timeslots: any[];
  duration: any;

  // Driver method to format data, returns an array containing column header and formatted data
  generateTimeTable(rawData) {
    this.lec = rawData;
    // initailizing column headers
    this.columnHeaders = [{day: 'Days', colspanValue: 1},
                          {day: 'Monday', colspanValue: 1},
                          {day: 'Tuesday', colspanValue: 1},
                          {day: 'Wednesday', colspanValue: 1},
                          {day: 'Thursday', colspanValue: 1},
                          {day: 'Friday', colspanValue: 1}];
    this.timeslots = [];
    console.log(rawData);
    this.schedule = [];
    let start_time = '24:00:00';
    let end_time = '00:00:00';
    let duration = 1000;
    let calc_duration = 0;
    let lunchstart;

    // calculation of start_time and end_time, lunch_start_time and standard duration of one lecture
    for (let a = 0; a < this.lec.length; a++) {
      if (this.lec[a].type === 'Lecture') {

        calc_duration = this.convertedTime(this.lec[a].to) - this.convertedTime(this.lec[a].from);
        if (calc_duration < duration) {
          duration = calc_duration;
        }
      }
      if (this.convertedTime(this.lec[a].from) < this.convertedTime(start_time)) {
        start_time = this.lec[a].from;
      }
      if (this.convertedTime(this.lec[a].to) > this.convertedTime(end_time)) {
        end_time = this.lec[a].to;
      }
      if(this.lec[a].type === 'Lunch') {
        lunchstart = this.lec[a].from;
        console.log(lunchstart);
      }
    }


    this.duration = duration;
    var lecture_start = start_time;
    var lecture_end = start_time;

    // Iterartions for building reference timeSlot array containing [startTime , endTime] for each lecture
    while (lecture_start !== end_time) {
      if(lecture_start === lunchstart) {
        lecture_end = this.addTimes(lecture_start, 60);
      }
      else {
        lecture_end = this.addTimes(lecture_start, duration);
      }
      this.timeslots.push([lecture_start, lecture_end]);
      lecture_start = lecture_end;
    }

    console.log(this.timeslots);
    /* creating a schedule array consisting of timeslots,each timeslot corresponds an array containing 7 arrays
    which consists array of objects for the classes scheduled, 0th index for timeslot and 6 for week days */
    for (let i = 0; i < this.timeslots.length; i++) {
      this.dayschedule = [];
      for (let k = 0; k < this.columnHeaders.length; k++) {
        this.lectures = [];
        for (let j = 0; j < this.lec.length; j++) {
          if (k === 0) {
            this.lectures = [String(this.timeslots[i][0]) + '-' + String(this.timeslots[i][1])];
          } else if (this.lec[j].from === this.timeslots[i][0] && this.lec[j].day === this.columnHeaders[k].day) {
            var flag = 0;
            for (let l = 0; l < this.lectures.length; l++) {
              // tslint:disable-next-line:max-line-length
              if (this.lec[j].subjectCode === this.lectures[l].subjectCode && this.lec[j].location === this.lectures[l].location) {
                flag = 1;
                this.lectures[l].batch = [this.lectures[l].batch, this.lec[j].batch];
              }
            }
            if (flag === 0) {
              this.lectures.push(this.lec[j]);
            }
          }
        }
        this.dayschedule.push(this.lectures);
        // Adjusting column span for the column as per maximum numberof cells in the column till now.
        if (this.lectures.length > this.columnHeaders[k].colspanValue) {
          this.columnHeaders[k].colspanValue = this.lectures.length;
        }
      }
      this.schedule.push(this.dayschedule);
    }
    console.log(this.schedule);

    /* Formatting the schedule array for column span and row spans, assigning null values to the cells if the
    lecture cell above it has duration greater than standard duration*/
    for (let i = 0; i < this.schedule.length; i++) {
      for (let j = 1; j < this.schedule[i].length; j++) {
        var check = 0;
        for (let k = 0; k < this.schedule[i][j].length; k++) {
          // tslint:disable-next-line:max-line-length
          if ( this.schedule[i][j][k] !== null && this.schedule[i][j][k].length !== 0  && this.schedule[i][j][k].from !== lunchstart && (this.convertedTime(this.schedule[i][j][k].to)-this.convertedTime(this.schedule[i][j][k].from))/this.duration > 1) {
            check = 1;
            break;
          }
        }
        if (check === 1) {
          for (let k = 0; k < this.schedule[i][j].length; k++) {
            // tslint:disable-next-line:max-line-length
            if ( this.schedule[i][j][k] !== null && this.schedule[i][j][k].length !== 0 && this.schedule[i][j][k].from !== lunchstart  && (this.convertedTime(this.schedule[i][j][k].to)-this.convertedTime(this.schedule[i][j][k].from))/this.duration > 1) {
              this.schedule[i + 1][j].push(null);
            } else {
              this.schedule[i + 1][j].push([]);
          }
          }
        }
      }
    }
    console.log(this.schedule);

    return [this.columnHeaders, this.schedule];
  }

  /* method to assign higher weight values to the greater time value.
  Used for comparision between time values */
  tconv(n1) {
    let t1 = 0;
    if (Number(n1.slice(0, 2)) > 7) {
      t1 = Number(n1.slice(0, 2)) * 100 + Number(n1.slice(3, 5));
    } else {
      t1 = Number(n1.slice(0, 2) + 12) * 100 + Number(n1.slice(3, 5));
    }
    return t1;
  }

  // method to compare two time values
  tsort(n1, n2) {
    if ((this.tconv(n1) - this.tconv(n2)) > 0) {
      return 1;
    } else if ((this.tconv(n1) - this.tconv(n2)) < 0) {
      return -1;
    } else {
      return 0;
    }
 }

 // method to check if data is an object
 isObject(val) {
   return typeof val === 'object';
 }

 // method to check if data is a string
 isString(val) {
   return typeof val === 'string';
 }

// method to add standard duration to the lecture time
 addTimes(time1, duration) {
  var hh = Number(time1.slice(0, 2));
  var mm = Number(time1.slice(3, 5));
  mm = mm + duration;
  if (mm >= 60) {
    mm = mm - 60;
    hh += 1;
    if (hh > 12) {
      hh -= 12;
    }
  }
  return ((hh < 10) ? '0' + String(hh) : String(hh)) + ':' + ((mm === 0) ? '00' : String(mm)) + ':00';
 }

 // method to convert time into minutes
 convertedTime(time) {
  var hh = Number(time.slice(0, 2));
  var mm = Number(time.slice(3, 5));
  if (hh < 7) {
    return ((hh + 12) * 60 + mm);
  } else {
    return (hh * 60 + mm);
  }
 }

// method to return standard duration
getDuration() {
  return this.duration;
}

}
