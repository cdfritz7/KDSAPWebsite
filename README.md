## KDSAPWebsite
A website for the Kidney Disease Screening and Awareness Program at UT Austin. Hosted at texaskdsap.com


### How the Website Works
This is a relatively simple website, mainly built using HTML/CSS with a little bit of javascript. The website is contained in the ```index.html``` document, which in turn uses styling defined by the files in the ```/css/``` folder and images in the ```img``` folder. All of these files are deployed to Amazon Web Services (AWS), which links the files to the texaskdsap.com domain. The texaskdsap.com domain is registered using route53 - an AWS service.

You can view the domain by navigating to https://console.aws.amazon.com/route53/v2/home then clicking on "hosted zones"

If you'd like to learn more about html/css, and web design, here are some good tutorials :
1) css : https://www.codecademy.com/learn/learn-css
2) html : https://www.codecademy.com/learn/learn-html

### Making Changes
To change the content of the website, you'll need to make changes to the ```index.html``` document. To change the design of the website, you'll probably also need to make changes to the ```.css``` files in the ```/css/``` folder.

You can view the results of your changes by opening the ```index.html``` file in your browser. To do this, simple double click on the ```index.html``` file using your file explorer. This should automatically open it in your browser. If it does not, you may need to right click the ```index.html``` file, and use the "open with" option. After clicking the "open with" option, choose your browser program of choice, such as chrome or firefox.

### Walking Through Making a Change
Suppose you wanted to change the 'Who We Are' subsection to simply say "we are texas kdsap", while also making the font size of that section larger. You could do this my performing the following steps.

1) Open ```index.html``` using a text editor such as [Notepad++](https://notepad-plus-plus.org/) or [Atom](atom.io)
2) Find the part of ```index.html``` responsible for the 'Who We Are' subsection. Right now, it looks like this :
```html
<p class="centered subtitle">Who We Are</p>
<div class="pink-blue-bar" style="margin-bottom:20px"></div>
<p class="body">
  The Kidney Disease Screening and Awareness Program (KDSAP) chapter at The University of Texas at Austin aims to
  engage, expose, and educate dedicated students and community members to growing healthcare crises, with
  particular attention to chronic kidney disease. KDSAP strives to develop students' career interests in
  healthcare by offering students the opportunity to interact with nephrologists and other healthcare providers,
  build leadership skills, and give back to the community. Through the community outreach branch, KDSAP members
  will actively participate in a number of volunteer opportunities and further engage with the community by
  running free kidney disease screenings alongside licensed physicians in medically underserved areas. Texas has a
  higher chronic kidney disease rate than the national average, and KDSAP at The University of Texas at Austin
  hopes to help change this unfortunate reality one step, one screening, and one educational event at a time.
</p>
```

3) Because we want to change the content of the subsection, we'll edit that large paragraph surrounded by
```html
<p class="body"> ... </p>
```
here's what we could change it to :
```html
<p class="centered subtitle">Who We Are</p>
<div class="pink-blue-bar" style="margin-bottom:20px"></div>
<p class="body">
   We are texas kdsap
</p>
```

4) We also wanted to change the font size of this section to make it appear larger. We can do that by editing the styling of the large paragraph by adding a new css class. To do this, open ```/css/main.css``` in another text editor. To add a new css class with a large font size, we could add the following to the bottom of the file.
```css
.who-we-are-content{
    font-size: 24px;
}
```

5) FInal step! We would then need to link our new css class with our paragraph. This takes only a small change . Afterwards, our html would look like this:
```html
<p class="centered subtitle">Who We Are</p>
<div class="pink-blue-bar" style="margin-bottom:20px"></div>
<p class="body we-we-are-content">
   We are texas kdsap
</p>
```


### Deploying Changes
After updating the ```index.html```, ```.css``` and images to make your changes, you still need to upload these changes to AWS so they can be viewable on texaskdsap.com. To deploy, follow the steps below.

1) Navigate to the s3 console at https://s3.console.aws.amazon.com/s3/home
2) Click on the "texaskdsap.com" link, this will open the bucket that holds the website content
3) Click "upload"
4) Add the files and folders that were updated (or you can add all website content - including ```index.html```, ```/css/``` and ```/img/``` if that's easier)
5) scroll down and hit the "upload" button
6) After a small amount of time, the changes should be reflected on texaskdsap.com


This document outlines the entire process used to buy the domain and deploy the website for the first time : https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-custom-domain-walkthrough.html
