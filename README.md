# DJS08 Project Brief: React Router 

YOUTUBE PRESENTATION LINK: https://youtu.be/xh6ewERX1H8


### Question 1: Explain the Setup and Basic Configuration of React Router

- What is the purpose of using React Router in a React application?
    - It allows navigating a Single Page Application. The browser loads a single page, which is never refreshed or navigated away form (most common scenario), but "hotloads" the components it needs at specific states.

- How do you set up React Router using `BrowserRouter` as shown in the lessons?
    - By using it as a toplevel component of the App. Routes are nested inside, linked to the different components to render at each of these "paths".

- Describe the role of the `<Routes>` and `<Route>` components in defining the navigation structure.
    - `<Routes>` is the parent component that matches a path to a specified `<Route>`. The `<Route>` component links a UI (jsx, or any single HTML fragment) component to a specific path within the App.

### Question 2: Application of Route Parameters and Nested Routes

**Key Points to Cover:**
- Explain what route parameters are and how they are used in React Router, including the use of `useParams()` to access these parameters.
    - Route parameters allows dynamic "path" creation and access. For example, having a general "product" template, it can be populated by a specific product accessed by ID (example) without having to specify what those ID's may be. Or a blog post, that is identified by some descriptive string, wihout having to statically list out every blog post. Route parameters allows the application component to dynamically determine what it should render.

- Discuss the concept of nested routes as introduced in the lessons. What are nested routes, and how do they benefit the structure of a React application?
    - Nested routes creates a "navigation tree" that orders content by some selected semantic scheme. Its key feature from a rendering perspective is the succesive building of the UI, sharing layout components (if the developer wants to take advantage of that) through the `<Outlet>` component.

- Provide an example, such as the configuration for nested routes in the VanLife project.
    - (See presentation)

### Question 3: Implementation of Navigation Controls and Dynamic Linking

**Key Points to Cover:**
- How does the `<Link>` component enhance navigation within a React application?
    - It renders an anchor `<a>` tag just like normal HTML, but intercepts the call to the server, that would trigger a reload of the document, instead rendering in place whatever component it links to (unless specified otherwise).

- Describe the use of `NavLink` for active styling. What makes `NavLink` different from the basic `Link` component?
    - Its `className` and `style` props can accept a function (where `<Link>` can only accept a static object), that may read an additional props object passed by ReactRouter that provides context of the `<NavLink>`'s status. Most often the `isActive` property is utilized for styling, indicating to the User their current location within the Application's "navigation tree".

- Discuss the use of search parameters and the `useSearchParams` hook to dynamically filter content, as seen in the VanLife project challenges.
    - It allows the App to grab query params included in the URL, that may trigger conditional logic within the component and affect what is displayed on screen. For example, filtering through a list of products by a specific property. The use of query parameters, if implemented in a functional manner, will provide a consistent User experience, for example when a user shares a link with a search query included, the App can interpret this and return the same page the user expected to share.
