/**
 * Responsible for storing Create Event state which is shared across the multi-step form / wizard process.
 */

import moment from 'moment';

import _ from 'lodash';

class CreateEvent {

    constructor(){
        this.id = null; // reserve for db id
        this.isPrivate = false;
        this.selectedId = null;
        this.selectedActivity = null;
        this.selectedCategory = null;
        this.selectedOptionId = null; // NOT CURRENTLY USED
        this.selectedOption = null; // NOT CURRENTLY USED - held options like "Need Transport"
        this.selectedLevelId = 0; // Experience level, default to first item
        this.selectedLevel = null;
        this.note = null;
        this.people = null;
        this.starts = null; // datetime when event starts
        this.ends = null; // datetime when event ends if not all day
        this.ageFrom = null;
        this.ageTo = null;
        this.repeats = null;
        this.allDay = true;
        this.location = null; // name of location / POI
        this.fullAddress = null;
        this.address = null;
        this.city = null;
        this.state = null;
        this.zip = null;
        this.country = null;
        this.latitude = null;
        this.longitude = null;
    }

    name(){
        return _.get(this.selectedActivity, 'name');
    }

    startDate(){
        // LL = January 16, 2018
        return moment(this.starts).format('LL');
    }

    repeatText(){
        if (this.repeats){
            return 'Repeats ' + this.repeats;
        }

        return null;
    }

    startTime(){
        // h:mm A = 3:30 PM
        return moment(this.starts).format('h:mm A');
    }

    endDate(){
        // LL = January 16, 2018
        return moment(this.ends).format('LL');
    }

    endTime(){
        // h:mm A = 3:30 PM
        return moment(this.ends).format('h:mm A');
    }

    ageGroup(){
        if (! this.ageFrom || ! this.ageFrom){
            return 'N/A';
        }
        return this.ageFrom + '-' + this.ageTo + ' YRS';
    }

    peopleNeeded(){
        if (! this.people){
            return 'Unlimited Attendees';
        }
        return this.people + ' People Needed';
    }

    cityStateZip(){
        //SANTA MONICA, CA 90053
        let parts = [
            this.city,
            (this.city && this.state ? ', ' : null),
            this.state,
            this.zip
        ];

        return parts.join(' ').toUpperCase();
    }

    activityIcon() {
        return {
            uri: this.selectedActivity.icon
        };
    }
}

// export const so we have a singleton
export const CreateEventState = new CreateEvent();