import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Images } from '../lib/snapseed.js'
import { Session } from 'meteor/session';
Images.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
Meteor.startup(() => {
console.log(Images.find().count());
if(Images.find().count()==0){
  for(var i = 1 ; i < 18 ; i ++){
    Images.insert({img_src: i + ".jpeg" ,
    img_alt:"image number" + i });
  }
}
});
