import { EventEmitter } from 'events';

import { Meteor } from 'meteor/meteor';
// import _ from 'underscore';
//
// if (!_.isArray([])) {
//     console.log(_);
// }

export const SettingsEvents = new EventEmitter();
export const settings = {};