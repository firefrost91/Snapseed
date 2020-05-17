import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import { Mongo } from 'meteor/mongo';
import '../lib/snapseed.js';
import { Images } from '../lib/snapseed.js';
import { Session } from 'meteor/session';
console.log('Running on Client');
console.log(Images.find().count());
Accounts.ui.config({
  passwordSignupFields:"USERNAME_AND_EMAIL"
})
Router.configure({
  layoutTemplate : 'ApplicationLayout'
});
// Template.images.helpers({images:imagedata});
Router.route('/', function () {
  this.render('front' ,  {
    to:"main"
  } );
});
Router.route('/images', function () {
  this.render('navbar' , {
    to:"navbar"   });
  this.render('welcome' , {
    to:"welcome"   });
  this.render('images' , {
    to:"main"   }
  );
});
Router.route('/slideshow', function () {
  this.render('slideshow' , {
    to:"slideshow"   });
});
Router.route('/images/:_id', function () {
  this.render('navbar' , {
    to:"navbar"   });
  this.render('image' , {
    to:"main" ,
  data:function(){
    return Images.findOne({_id:this.params._id})
  }  }
  );
});

Session.set("imageLimit" , 8 );
var lastScrollTop = 0 ;
$(window).scroll(function(event){

  if($(window).scrollTop() + $(window).height() > $(document).height()-100 ) {
  var scrollTop = $(this).scrollTop();
   // console.log("Screen ends");
   if(scrollTop>lastScrollTop){
     console.log("going down ");
     Session.set("imageLimit" , Session.get("imageLimit")+4 )
   }
   lastScrollTop = scrollTop;
  }


} ,)
// Template.body.helpers()
// Template.slideshow.helpers({
//
// })
Template.images.helpers({
    images : function(){
       if(Session.get("userfilter")) {
          return Images.find({createdBy:Session.get("userfilter")} , {sort:{createdOn:-1 ,rating:-1} ,  limit:Session.get("imageLimit") }
        )
       }
       else {
          return Images.find({} , {sort:{createdOn:-1 ,rating:-1} , limit:Session.get("imageLimit")})};
        } ,
        username : function(){
         if(Meteor.user()){
           return Meteor.user().username;
         }
         else{
           return "anonymous user"
         }
       } ,
        imagesFilter : function(){
           if(Session.get("userfilter")) {
              return true ;
           }
           else {
              return false ;
            }}  ,
            unimagesFilter : function(){
               if(Session.get("userfilter")) {
                  return false;
               }
               else {
                  return true;
                }},
    getUser : function(user_id)
    {
      var user = Meteor.users.findOne({_id:user_id});
        if(user){
        return user.username ;
        }
        else{
        return "anonymous"
        }
     },
     getFilterUser : function(){
       if(Session.get("userfilter")) {
            var user = Meteor.users.findOne({_id:Session.get("userfilter")});
          return user.username ;
       }
       else {
          return false ;
        }
     }
});
Template.images.events(
{'click .js-image': function(event){
;
},
'click .js-del-image': function(event){
    var img_id = this._id ;
      $("#"+img_id).animate( {opacity: '0' , height : '0vh' , width : '0vh'} , function(){
          Images.remove(img_id);
      });}  ,
'click .js-rate-image' : function(event){
    var getRating =   $("#"+img_id+"Rating").html();
    console.log("Old Rating : " +  getRating);
  var rating = $(event.currentTarget).data("userrating");
    console.log(rating);
    var img_id = this.id;
    Images.update({_id:img_id} , {$set:{rating:rating}});
} ,
 'click .js-set-image-filter' :  function(event){
   Session.set("userfilter" ,  this.createdBy );
 } ,
 'click .js-unset-image-filter' :  function(event){
   Session.set("userfilter" ,  undefined );
 } ,

}
)
Template.image_add_form.events({
  'submit .js-add-image':function(){
    if(Meteor.user()){
      var img_src = event.target.img_src.value ;
      console.log(img_src);
      Images.insert({
        img_src:img_src ,
      img_alt:"anything" ,
      createdOn:new Date() ,
      createdBy:Meteor.user()._id
    });
    return false;
    }
    else(alert('Login first'));

  }
})
