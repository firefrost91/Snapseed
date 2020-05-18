# Snapseed

Full Stack development of a Reactive Image sharing platform using Meteor JS , Mongo serves as the database
***Note*** - *Meteor Apps cannot be deployed on gh-pages hence to see the features of App scroll down* 

**Github does not allows users to post gifs of size greater than 10 MB hence gifs are recorded at lower fps due to which the animations does not appear smooth**

## Home-page
Animations are made using CSS  . Iron router is used to route from Home page to the Main page. Main page implements conditional rendering using components of Iron Router

![Home](https://user-images.githubusercontent.com/49150875/82208049-76da9700-9928-11ea-8f4f-85a2d11fcbc1.gif)

## Salient Features of the Application

###  1.Infinite Scroll
The main page of the website has Infinite Scroll as you reach the bottom of the window new content will get loaded until the page runs out of content it has been implemented using Jquery and Javascript .

![Anon](https://user-images.githubusercontent.com/49150875/82209139-675c4d80-992a-11ea-923d-ee8386ed4c7f.gif)

### 2.User Login and Authentication 
Users can create new accounts , login using Google accounts and can also avail the forgot password feature .
Meteor accounts-ui , accounts-google and accounts-password packages have been used . It takes care of the fact that account with same username and same email Id doesn't get created and rejects the login form if mandatory fields are left empty.
There is a reactive component which says Welcome <Username> which gets updated as soon as you log in along with that buttons of Add image and Delete are only visible to logged in users . Add image adds the Image source and caption to the Mongo Database along with the credentials of its creator and date of creation . Bootstrap modal is used as pop-up of Add image .
Delete image deletes the image from the database . 

![User](https://user-images.githubusercontent.com/49150875/82210186-2ebd7380-992c-11ea-8fe9-d7c5bc4c8074.gif)

### 3. Rating and Sorting
Each Image can be rated by the client and the rating gets stored in the Mongo database . Barbatus:star-rating has been used to enable this feature. By default Images are sorted in the order of the date of creation with most recent images coming on the top but by using Sort by Rating filter you can sort Images by their Rating , as soon as this filter is turned on unsort button appears( conditional rendering ) to switch to default mode.
![RatingSorting](https://user-images.githubusercontent.com/49150875/82209723-61b33780-992b-11ea-8bee-7667e0088f2a.gif)

### 4. Filtering Images by Username
Images can be filtered on the basis of who created them . When switched to this mode it automatically sorts the Images in the order of highest to lowest rating . Hence Sort by Rating button is of no use here . 
![Filter](https://user-images.githubusercontent.com/49150875/82210413-ab505200-992c-11ea-83ee-514186716941.gif)

### 5.Addition and Deletion
Logged in users can add and delete images . In Add Image feature users have to enter Image source and caption which gets added into Mongo Database almost instantly. 
![Add](https://user-images.githubusercontent.com/49150875/82208393-11d37100-9929-11ea-80bb-b03103c040d3.gif)

### 6.Responsiveness
This web application is made responsive i.e. the size of images and their layout dynamically changes with change in screen size . This application has a collapsible Bootstrap navbar.
![Responsiveness](https://user-images.githubusercontent.com/49150875/82210584-f9655580-992c-11ea-991e-84ec1d1f641d.gif)

### 7.Basic Security 
The application has a basic layer of security which prevents users from accessing the database collections using browser console. It does have its vulnerabilities . Publish and Subscribe feature has to be added in the future . 
![Security](https://user-images.githubusercontent.com/49150875/82208254-d5077a00-9928-11ea-8db1-045fe3e58d42.gif)



