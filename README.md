


> Sorry for my bad English 😢

![class-diagram](class-diagram.png)

(Image Source : Head First Design Pattern [O'Reilly Media] )


https://howsmyanimeprofilepicture.github.io/mvc-pattern-example/
# **C**ontroller
![controller](controller.png)

- The controller implement the Strategy Pattern.
- The controller can change the state of the application.
- So, the view can be only concerned with the visual aspects, and the model can do its role as the core of application.


# **M**odel
![model](model.png)

- The model is the core of application, and has all of the application's state informations.
- However, it delegates to the controller for changing the state, and to the view for the visual aspects.
- And whenever the model's state is changed, the model notifies this information to the view. 
- In ohter words, the model and the view implement the Observer Pattern where the view is the observer of the model.


# **V**iew
![view](view.png)
- The view consists of a nested set of UIs.
- So, you can say that the view implements the composite pattern.
- In my case, I apply the Abstract Factory Pattern here to abstract a creation of UI elements.


# UML Diagram
![UML](MVC-pattern.png)




# Reference

- Head First Design Pattern (O'Reilly Media)




