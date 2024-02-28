# learn-angular
1. Components in Angular - building blocks to see on the UI
2. They are the core in the angular
3. Each component has - HTML, CSS and the ts class
4. To create a component run - 'ng generate component <component-name>'
5. Need to provide details like where the HTMl and css files located in @Component section
6. selector uniquely identify the component
7. Interpolation - Dynamic accessing of the string values into the app
    - We can pass the properties of a class into the app using the {{}} format
8. We can display the array items using interpolation
9. ng-directives - if, for, switch
10. Sharing the data between parent and child component cn be done through @input and @output
11. @Input() decorative is used to recieve the data from the parent.
12. Property Binding - Sending a property from the parent to the child
13. Syntax - <Parent Component><Child Component [childProperty] = "parentProperty">
14. Event binding - To execute the code based on the events like click - We use () to bind the events - Example: (click) = "clickMe()"
15. We can also declare custom events like (notify). They should of the type EventEmitter
16. If the implementations are in parent and the triggers are in child, we have use the concept of event binding to bind the events between the child and the parent.
17. ng-templates are used to create templates or few lines of HTML and render based on the condition.
18. Template variables - denoted with #. We can use these templates to render particular template.
19. We use if-then-else to porvide the conditions.
20. We wrap these conditions in the ng-container tag.
21. We use bootstrap for styling. After installing it we have to add bootstrap.min.css, query.min.js and bootstrap.min.js files into angular.json file.
22. Routing is used to build single page applications and enable navigation between multiple views
23. app.route.ts file is where we provide configs for routing
24. routes[] array takes two values - [{path,component}] - path represents the destination page and the component represents the component that should be loaded
25. We import Routes into NgModule and then export it across the project
26. We use [routerLink] for anchor tags to connect to the routing module.
27. <router-outlet> tag is used to handover the navigation task to the router class. If we use it in our main html file, navigation of the pages will be taken over by the Router class







