# How-to-make-swipeable-tabs-in-ionic


Have you ever come across this feature if yes then this article is for you. In this article i will show you how to make swipeable tabs in ionic. To achieve this we will use two ionic component one is ionic tabs & other is ionic slides. As we know tab are used to switch views & ionic slides has swipeable feature by default. So, we will combine the feature of both the component & will make one new component. By default the ionic tab is used to fetch the views keeping tabs as a abstract view but we will not use this technique. We will only use the user interface of tab.

1. Steps to acheive this feature
2. use ion-tabs directive to render tabs
3. use ion-slide-box directive to render ionic slide box
4. you can change ionic slide with swipe gesture
5. use ion-content directive inside the ion-slide-box for scrollable content
6. call a function on-slide-changed event which will set the tab index
7. when user click on tab call a function which will set the slide index
8. now when user click on tab the respective slide got activated & when user swipe on slide the respective tab got activated
9. yeah our swipeable tabs component is ready to use

#### To remove bouncing effect from ion-slide-box directive use bounce="false",  although this is not listed in official documentation but it is available in directive scope

#### If you have any query kindly comment below in comment box

#### Note: I am not sharing my css styles here, its up to you how you want your design to be. Write your own css for header, tabs & slide box 
