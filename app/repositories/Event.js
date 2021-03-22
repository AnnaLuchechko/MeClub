/**
 * Responsible for handling MeClub events.
 */

import firebase from 'react-native-firebase';
import _ from 'lodash';

export class Event {

    constructor(data) {
        _.assignIn(this, data);
    }

    coordinates(){
        return {
            latitude: this.latlng.latitude,
            longitude: this.latlng.longitude
        };
    }

    activityName(){
        return this.activity
            .get()
            .then(doc => { return doc.data().name; });
    }

    quickFacts(){
        let arr = _.merge([], this.categories, this.levels);

        return _.without(arr).join(', ');
    }

    cityStateZip(){
        let parts = [
            this.city,
            (this.city && this.state ? ', ' : null),
            this.state,
            this.zip
        ];

        return parts.join(' ').toUpperCase();
    }

    getFullAddress(){
        if (this.fullAddress){
            return this.fullAddress;
        }

        let arr = [this.address, this.city, this.state + ' ' + this.zip];

        return arr.join(', ');
    }

    alert(){
        return alert(this.name);
    }
}

class Repository {

    constructor(){
        this.collection = firebase.firestore().collection('events');
    }

    find(id){
        return this.collection.doc(id).get().then((doc) => { return new Event(_.merge(doc.data(), {id: doc.id})); });
    }

    all(){
        return this.collection.get().then(function(querySnapshot) {
            let collection = [];

            querySnapshot.forEach(function(doc) {
                collection.push(new Event(_.merge(doc.data(), {"id": doc.id})));
            });

            return collection;
        });
    }

    upsert(id, doc){
        return this.collection.doc(id).set(_.omit(doc, ['id']), { merge: true });
    }
}

// export const so we have a singleton
export const EventRepository = new Repository();