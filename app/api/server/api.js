import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { DDPCommon } from 'meteor/ddp-common';
import { DDP } from 'meteor/ddp';
import { Accounts } from 'meteor/accounts-base';
import { Restivus } from 'meteor/nimble:restivus';
import { RateLimiter } from 'meteor/rate-limit';
import _ from 'underscore';



export let API = {};
console.log(Random.fraction())