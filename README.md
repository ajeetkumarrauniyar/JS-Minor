## Events

| Project Number | Project Title                                           | Source Code                                | Live Demo Link                                                                       |
| -------------- | ------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------ |
| 01             | [Mouse Tracking](#mouse-tracking)                       | [Source Code](./MouseTracking/index.html)  | [Live Demo](https://ajeetkumarrauniyar.github.io/JS-Minor/MouseTracking/index.html)  |
| 02             | [Form Validation](#form-validation)                     | [Source Code](./FormValidation/index.html) | [Live Demo](https://ajeetkumarrauniyar.github.io/JS-Minor/FormValidation/index.html) |
| 03             | [Event Delegation](#event-delegation)                   | [Source Code]                              | [Live Demo]                                                                          |
| 04             | [Interactive Image Gallery](#interactive-image-gallery) | [Source Code]                              | [Live Demo]                                                                          |
| 05             | [Image Slider](#image-slider)                           | [Source Code]                              | [Live Demo]                                                                          |
| 06             | [Custom Tooltips](#custom-tooltips)                     | [Source Code]                              | [Live Demo]                                                                          |
| 07             | [Drag and Drop Game](#drag-and-drop-game)               | [Source Code]                              | [Live Demo]                                                                          |
| 08             | [Drag and Drop Interface](#drag-and-drop-interface)     | [Source Code]                              | [Live Demo]                                                                          |
| 09             | [Infinite Scroll](#infinite-scroll)                     | [Source Code]                              | [Live Demo]                                                                          |

## Date & Time

| Project Number | Project Title           | Source Code                              | Live Demo Link                                                                     |
| -------------- | ----------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------- |
| 10             | [PixelTime](#pixeltime) | [Source Code](./DigitalClock/index.html) | [Live Demo](https://ajeetkumarrauniyar.github.io/JS-Minor/DigitalClock/index.html) |

##

| Project Number | Project Title  | Source Code                               | Live Demo Link                                                                     |
| -------------- | -------------- | ----------------------------------------- | ---------------------------------------------------------------------------------- |
| 11             | [BMI Master](#bmimaster) | [Source Code](./BMICalculator/index.html) | [Live Demo](https://ajeetkumarrauniyar.github.io/JS-Minor/BMICalculator/index.html) |

### Mouse Tracking

- **Description**: Create a web page that tracks the mouse movement of the user. Displays the current position of the mouse (X, Y coordinates) on the page. Use mouse events such as mousemove to capture the movement and update the display dynamically.
- **Events covered**: `mousemove`
- **Use case**: Mouse tracking can be useful for analytics purposes or for creating interactive experiences on a website.

### Form Validation

- **Task Description**: Design a registration/login form inclusive of input fields for name, email, and password. Utilize client-side validation mechanisms such as input, change, blur, and submit events to provide real-time feedback on the validity of user inputs. Implement dynamic error message display to guide users as they interact with the form.
- **Events covered**: `keyup`, `blur`, `input`,`change`, `submit`, `focus`
- **Use case**: Form validation is crucial for ensuring data integrity and providing a user-friendly experience in web applications.

### Event Delegation

- **Description**: Design a dynamic list where users can add and remove items. Use event delegation to handle events efficiently, especially for dynamically added elements. Attach event listeners to a parent element and utilize event bubbling to handle events triggered by child elements. Implement functionality to add new items to the list and remove existing items by clicking on them.
- **Events covered**: `click`
- **Use case**: Event delegation optimizes event handling, particularly for large lists or dynamically generated content, improving performance and scalability.

### Interactive Image Gallery

- **Description**: Create a simple image gallery where users can navigate through images using keyboard events (e.g., arrow keys) or mouse events (e.g., click, hover).
- **Events covered**: `keydown`, `keyup`, `click`, `mouseover`, `mouseout`
- **Use case**: Image galleries are commonly used on websites to showcase portfolios, products, or visual content.

### Image Slider

- **Description**: Develop an image slider that allows users to navigate through a set of images using buttons or arrow keys. Utilize keyboard events (keydown, keyup) to enable navigation via arrow keys and mouse events (click) for button-based navigation. Implement event listeners to handle user interactions and update the displayed image accordingly.
- **Events covered**: `keydown`, `keyup`, `click`
- **Use case**: Image sliders are commonly used on websites to showcase multiple images in a compact space, such as product galleries or photo albums.

### Custom Tooltips

- **Description**: Create a reusable tooltip component that displays additional information or instructions when the user hovers over or clicks on specific elements, using events like `mouseover`, `mouseout`, `click`, and `focus`.
- **Events covered**: `mouseover`, `mouseout`, `click`, `focus`, `blur`
- **Use case**: Tooltips are widely used in user interfaces to provide contextual information or guidance to users without cluttering the main content area.

### Drag and Drop Game

- **Description**: Create a simple drag-and-drop game where users can drag objects and drop them into specified targets. Use drag-and-drop events (dragstart, dragenter, dragover, dragleave, drop, dragend) to detect drag actions and update the UI accordingly. Implement event handlers to track the state of draggable objects and their positions relative to drop targets.
- **Events covered**: `dragstart`, `dragenter`, `dragover`, `dragleave`, `drop`, `dragend`
- **Use case**: Drag-and-drop games are interactive and engaging, making them suitable for educational purposes or entertainment on websites.

### Drag and Drop Interface

- **Description**: Develop a drag and drop interface where users can move elements around the page using mouse events like `mousedown`, `mousemove`, and `mouseup`.
- **Events covered**: `mousedown`, `mousemove`, `mouseup`, `dragstart`, `dragover`, `drop`
- **Use case**: Drag and drop interfaces are useful for creating interactive interfaces, such as task managers, file explorers, or layout builders.

### Infinite Scroll

- **Description**: Implement an infinite scroll feature on a website, where new content is loaded dynamically as the user scrolls down the page, utilizing the `scroll` event.
- **Events covered**: `scroll`, `resize`
- **Use case**: Infinite scroll is commonly used on social media feeds, news websites, and e-commerce platforms to enhance the user experience by loading content seamlessly without page refreshes.

### PixelTime

- **Description**: PixelTime is a digital clock that displays the current time and date. It provides a simple yet effective way to keep track of time.
- **Topics covered**: Date object, setInterval function, DOM manipulation
- **Use case**: PixelTime can be used on websites or applications where displaying real-time information is necessary, such as dashboards, admin panels, or personal websites.

### BMI Master

- **Description**: BMI Master is a web application that calculates the Body Mass Index (BMI) based on the user's height and weight inputs. It provides real-time feedback on the BMI value and interpretation.
- **Topics covered**:  Event handling, form submission, conditional statements, DOM manipulation
- **Use case**: BMI Master can be used in healthcare websites, fitness applications, or personal wellness trackers to help users monitor their body composition and make informed decisions about their health.
