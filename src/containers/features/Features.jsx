
import Feature from '../../components/feature/Feature';

const featuresData = [
{
	title: 'Background Fetch API',
	text: 'The Background Fetch API provides a method for managing downloads that may take a significant amount of time such as movies, audio files, and software.When a web application requires the user to download large files, this often presents a problem in that the user needs to stay connected to the page for the download to complete. If they lose connectivity, close the tab or navigate away from the page the download stops.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Background_Fetch_API',
},
{
	title: 'Background Tasks API',
	text: 'Note: This API is not available in Web Workers.The main thread of a Web browser is centered around its event loop. This code draws any pending updates to the Document currently being displayed, runs any JavaScript code the page needs to run, accepts events from input devices, and dispatches those events to the elements that should receive them. In addition, the event loop handles interactions with the operating system, updates to the browser s own user interface, and so forth. It s an extremely busy chunk of code, and your main JavaScript code may run right inside this thread along with all of this. Certainly most if not all code that is capable of making changes to the DOM is running in the main thread, since it s common for user interface changes to only be available to the main thread.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Background_Tasks_API',
},
{
	title: 'Barcode Detection API',
	text: 'Note: This feature is available in Web WorkersExperimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API',
},
{
	title: 'Battery Status API',
	text: 'Note: This API is not available in Web Workers (not exposed via WorkerNavigator).Provides information about the system s battery charge level.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API',
},
{
	title: 'Beacon API',
	text: 'The main use case for the Beacon API is to send analytics such as client-side events or session data to the server. Historically, websites have used XMLHttpRequest for this, but browsers do not guarantee to send these asynchronous requests in some circumstances (for example, if the page is about to be unloaded). To combat this, websites have resorted to various techniques, such as making the request synchronous, that have a bad effect on responsiveness. Because beacon requests are both asynchronous and guaranteed to be sent, they combine good performance characteristics and reliability.For more details about the motivation for and usage of this API, see the documentation for the navigator.sendBeacon() method.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API',
},
{
	title: 'Web Bluetooth API',
	text: 'The Web Bluetooth API provides the ability to connect and interact with Bluetooth Low Energy peripherals.Note: This API is not available in Web Workers (not exposed via WorkerNavigator).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API',
},
{
	title: 'Broadcast Channel API',
	text: 'Note: This feature is available in Web WorkersBy creating a BroadcastChannel object, you can receive any messages that are posted to it. You don t have to maintain a reference to the frames or workers you wish to communicate with: they can  subscribe  to a particular channel by constructing their own BroadcastChannel with the same name, and have bi-directional communication between all of them.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API',
},
{
	title: 'CSS Counter Styles',
	text: 'The CSS Counter Styles module allows to define custom counter styles, which can be used for CSS list-marker and generated-content counters.Represents an @counter-style rule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSS_Counter_Styles',
},
{
	title: 'CSS Font Loading API',
	text: 'Note: This feature is available in Web Workers (self.fonts provides access to FontFaceSet).Represents a single usable font face.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API',
},
{
	title: 'CSS Painting API',
	text: 'Essentially, the CSS Painting API contains functionality allowing developers to create custom values for paint(), a CSS <image> function. You can then apply these values to properties like background-image to set complex custom backgrounds on an element.For example:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API',
},
{
	title: 'CSS Typed Object Model API',
	text: 'Generally, CSS values can be read and written in JavaScript as strings, which can be slow and cumbersome. CSS Typed Object Model API provides interfaces to interact with underlying values, by representing them with specialized JS objects that can be manipulated and understood more easily and more reliably than string parsing and concatenation. This is easier for authors (for example, numeric values are reflected with actual JS numbers, and have unit-aware mathematical operations defined for them). It is also generally faster, as values can be directly manipulated and then cheaply translated back into underlying values without having to both build and parse strings of CSS.CSS Typed OM both allows for the performant manipulation of values assigned to CSS properties while enabling maintainable code that is both more understandable and easier to write.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API',
},
{
	title: 'CSS Object Model (CSSOM)',
	text: 'The values of CSS are represented untyped, that is using String objects.Several other interfaces are also extended by the CSSOM-related specifications: Document, Window, Element, HTMLElement, HTMLImageElement, Range, MouseEvent, and SVGElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model',
},
{
	title: 'Canvas API',
	text: 'The Canvas API largely focuses on 2D graphics. The WebGL API, which also uses the <canvas> element, draws hardware-accelerated 2D and 3D graphics.This simple example draws a green rectangle onto a canvas.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
},
{
	title: 'Channel Messaging API',
	text: 'Note: This feature is available in Web WorkersA message channel is created using the MessageChannel() constructor. Once created, the two ports of the channel can be accessed through the MessageChannel.port1 and MessageChannel.port2 properties (which both return MessagePort objects.) The app that created the channel uses port1, and the app at the other end of the port uses port2 — you send a message to port2, and transfer the port over to the other browsing context using window.postMessage along with two arguments (the message to send, and the object to transfer ownership of, in this case the port itself.)',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API',
},
{
	title: 'Clipboard API',
	text: 'Note: This API is not available in Web Workers (not exposed via WorkerNavigator).This API is designed to supersede accessing the clipboard using document.execCommand().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API',
},
{
	title: 'Console API',
	text: 'Note: This feature is available in Web WorkersThe Console API started as a largely proprietary API, with different browsers implementing it, albeit it in inconsistent ways. The Console API spec was created to define consistent behavior, and all modern browsers eventually settled on implementing this behavior — although some implementations still have their own additional proprietary functions. Find out about these at:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Console_API',
},
{
	title: 'Contact Picker API',
	text: 'The Contact Picker API allows users to select entries from their contact list and share limited details of the selected entries with a website or application.Note: This API is not available in Web Workers (not exposed via WorkerNavigator).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Contact_Picker_API',
},
{
	title: 'Content Index API',
	text: 'As it stands, offline web content is not easily discoverable by users. Content indexing allows developers to tell the browser about their specific offline content. This allows users to discover and view what is available, whilst giving developers the ability to add and manage this content. Examples could be a news website prefetching the latest articles in the background, or a content streaming app registering downloaded content.The Content Index API is an extension to service workers, which allows developers to add URLs and metadata of already cached pages, under the scope of the current service worker. The browser can then use these entries to display offline reading to a user. As a developer you can also display these entries within your application.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Content_Index_API',
},
{
	title: 'Credential Management API',
	text: 'The Credential Management API lets a website store and retrieve password, public key, and federated credentials. These capabilities allow users to sign in without typing passwords, see the federated account they used to sign in to a site, and resume a session without the explicit sign-in flow of an expired session.This API lets websites interact with a user agent s password system directly so that websites can deal in a uniform way with site credentials and user agents can provide better assistance with the management of their credentials. For example, user agents have a particularly hard time dealing with federated identity providers or esoteric sign-in mechanisms.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Credential_Management_API',
},
{
	title: 'Document Object Model (DOM)',
	text: 'The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document s structure, style, or content.Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model',
},
{
	title: 'Encoding API',
	text: 'The API provides four interfaces: TextDecoder, TextEncoder, TextDecoderStream and TextEncoderStream.Note: This feature is available in Web Workers',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API',
},
{
	title: 'Encrypted Media Extensions API',
	text: 'Contains the content and related data when the content decryption module (CDM) generates a message for the session.Represents a set of keys that an associated HTMLMediaElement can use for decryption of media data during playback.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Encrypted_Media_Extensions_API',
},
{
	title: 'EyeDropper API',
	text: 'The EyeDropper API provides a mechanism for creating an eyedropper tool. Using this tool, users can sample colors from their screens, including outside of the browser window.Creative applications often allow users to sample colors from drawings or shapes in the application to reuse. Web applications can use the EyeDropper API to provide a similar eyedropper mode, provided by the browser.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API',
},
{
	title: 'Fetch API',
	text: 'Note: This feature is available in Web WorkersFetch provides a generic definition of Request and Response objects (and other things involved with network requests). This will allow them to be used wherever they are needed in the future, whether it s for service workers, Cache API, and other similar things that handle or modify requests and responses, or any kind of use case that might require you to generate your responses programmatically (that is, the use of computer program or personal programming instructions).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
},
{
	title: 'File API',
	text: 'Web applications can access files when the user makes them available, either using a file <input> element or via drag and drop.Sets of files made available in this way are represented as FileList objects, which enable a web application to retrieve individual File objects. In turn File objects provide access to metadata such as the file s name, size, type, and last modified date.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/File_API',
},
{
	title: 'File System Access API',
	text: 'The File System Access API allows read, write and file management capabilities.This API allows interaction with files on a user s local device, or on a user-accessible network file system. Core functionality of this API includes reading files, writing or saving files, and access to directory structure.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API',
},
{
	title: 'File and Directory Entries API',
	text: 'There are two ways to get access to file systems defined in the current specification draft:The File and Directory Entries API includes the following interfaces:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API',
},
{
	title: 'Fullscreen API',
	text: 'See the article Guide to the Fullscreen API for details on how to use the API.Note: Support for this API varies somewhat across browsers, with many requiring vendor prefixes and/or not implementing the latest specification. See the Browser compatibility section below for details on support for this API. You may wish to consider using a library such as Fscreen for vendor agnostic access to the Fullscreen API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API',
},
{
	title: 'Gamepad API',
	text: 'The Gamepad API is a way for developers to access and respond to signals from gamepads and other game controllers in a simple, consistent way. It contains three interfaces, two events and one specialist function, to respond to gamepads being connected and disconnected, and to access other information about the gamepads themselves, and what buttons and other controls are currently being pressed.Represents a gamepad/controller connected to the computer.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API',
},
{
	title: 'Geolocation API',
	text: 'The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.WebExtensions that wish to use the Geolocation object must add the  geolocation  permission to their manifest. The user s operating system will prompt the user to allow location access the first time it is requested.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API',
},
{
	title: 'The HTML DOM API',
	text: 'The functional areas included in the HTML DOM API include:In this article, we ll focus on the parts of the HTML DOM that involve engaging with HTML elements. Discussion of other areas, such as Drag and Drop, WebSockets, Web Storage, etc. can be found in the documentation for those APIs.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API',
},
{
	title: 'HTML Drag and Drop API',
	text: 'The user may select draggable elements with a mouse, drag those elements to a droppable element, and drop them by releasing the mouse button. A translucent representation of the draggable elements follows the pointer during the drag operation.You can customize which elements can become draggable, the type of feedback the draggable elements produce, and the droppable elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API',
},
{
	title: 'HTML Sanitizer API',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.The HTML Sanitizer API allow developers to take untrusted strings of HTML and Document or DocumentFragment objects, and sanitize them for safe insertion into a document s DOM.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API',
},
{
	title: 'Performance API',
	text: 'Since a platform s system clock is subject to various skews (such as NTP adjustments), the interfaces support a monotonic clock i.e. a clock that is always increasing. As such, the Performance API defines a DOMHighResTimeStamp type rather than using the Date.now() interface.The DOMHighResTimeStamp type, as its name implies, represents a high resolution point in time. This type is a double and is used by the performance interfaces. The value could be a discrete point in time or the difference in time between two discrete points in time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance_API',
},
{
	title: 'History API',
	text: 'Moving backward and forward through the user s history is done using the back(), forward(), and go() methods.To move backward through history:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/History_API',
},
{
	title: 'MediaStream Image Capture API',
	text: 'The MediaStream Image Capture API is an API for capturing images or videos from a photographic device. In addition to capturing data, it also allows you to retrieve information about device capabilities such as image size, red-eye reduction and whether or not there is a flash and what they are currently set to. Conversely, the API allows the capabilities to be configured within the constraints what the device allows.The process of retrieving an image or video stream happens as described below. The example code is adapted from Chrome s Image Capture examples.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API',
},
{
	title: 'IndexedDB API',
	text: 'Note: This feature is available in Web WorkersNote: IndexedDB API is powerful, but may seem too complicated for simple cases. If you d prefer a simple API, try libraries in See also section that make IndexedDB more programmer-friendly.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
},
{
	title: 'Intersection Observer API',
	text: 'Historically, detecting visibility of an element, or the relative visibility of two elements in relation to each other, has been a difficult task for which solutions have been unreliable and prone to causing the browser and the sites the user is accessing to become sluggish. As the web has matured, the need for this kind of information has grown. Intersection information is needed for many reasons, such as:Implementing intersection detection in the past involved event handlers and loops calling methods like Element.getBoundingClientRect() to build up the needed information for every element affected. Since all this code runs on the main thread, even one of these can cause performance problems. When a site is loaded with these tests, things can get downright ugly.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API',
},
{
	title: 'Layout Instability API',
	text: 'A layout shift happens when any element that is visible in the viewport changes its start position between two frames. These elements are described as being unstable, and contribute to a poor Cumulative Layout Shift (CLS) score, indicating a lack of visual stability.The Layout Instability API provides a way to measure and report on these layout shifts. All tools for debugging layout shifts, including those in DevTools, use this API. The API can also be used to observe and debug layout shifts by logging the information to the console, to send the data to a server endpoint, or to Google Analytics.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Layout_Instability_API',
},
{
	title: 'Long Tasks API',
	text: 'Tasks that block the main thread for 50 ms or more cause, among other issues:Some key terms or ideas that are utilized by the Long Tasks API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Long_Tasks_API',
},
{
	title: 'Media Capabilities API',
	text: 'This example defines an audio configuration then checks to see if the user agent supports decoding that media configuration, and whether it will perform well in terms of smoothness and power efficiency.There are a myriad of video and audio codecs. Different browsers support different media types and new media types are always being developed. With the Media Capabilities API, developers can ensure each user is getting the best bitrate and storage savings for their browser, device, and OS capabilities.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Media_Capabilities_API',
},
{
	title: 'Media Capture and Streams API (Media Stream)',
	text: 'It provides the interfaces and methods for working with the streams and their constituent tracks, the constraints associated with data formats, the success and error callbacks when using the data asynchronously, and the events that are fired during the process.The API is based on the manipulation of a MediaStream object representing a flux of audio- or video-related data. See an example in Get the media stream.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API',
},
{
	title: 'Media Session API',
	text: 'It also provides action handlers that the browser can use to access platform media keys such as hardware keys found on keyboards, headsets, remote controls, and software keys found in notification areas and on lock screens of mobile devices. So you can seamlessly control web-provided media via your device, even when not looking at the web page.The aim is to allow users to know what s playing and to control it, without needing to open the specific page that launched it. To be able to support the Media Session API, a browser first needs a mechanism by which to access and be controlled by the OS-level media controls (such as Firefox s MediaControl).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Media_Session_API',
},
{
	title: 'Media Source API',
	text: 'Playing video and audio has been available in web applications without plugins for a few years now, but the basic features offered have really only been useful for playing single whole tracks. We can t, for example, combine/split arraybuffers. Streaming media has up until recently been the domain of Flash, with technologies like Flash Media Server serving video streams using the RTMP protocol.With Media Source Extensions (MSE), this is changing. MSE allows us to replace the usual single track src value fed to media elements with a reference to a MediaSource object, which is a container for information like the ready state of the media for being played, and references to multiple SourceBuffer objects that represent the different chunks of media that make up the entire stream. MSE gives us finer grained control over how much and how often content is fetched, and some control over memory usage details, such as when buffers are evicted. It lays the groundwork for adaptive bitrate streaming clients (such as those using DASH or HLS) to be built on its extensible API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API',
},
{
	title: 'MediaStream Recording API',
	text: 'The MediaStream Recording API is comprised of a single major interface, MediaRecorder, which does all the work of taking the data from a MediaStream and delivering it to you for processing. The data is delivered by a series of dataavailable events, already in the format you specify when creating the MediaRecorder. You can then process the data further or write it to file as desired.The process of recording a stream is simple:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API',
},
{
	title: 'Navigation Timing API',
	text: 'Note: This article currently describes Navigation Timing Level 1. There is a specification for Level 2, but it is not yet covered here.You can use the Navigation Timing API to gather performance data on the client side, which you can then transmit to a server using XMLHttpRequest or other techniques.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API',
},
{
	title: 'Network Information API',
	text: '\n  The Network Information API provides information about the system s connection in terms of general connection type (e.g.,  wifi,  cellular , etc.).\n  This can be used to select high definition content or low definition content based on the user s connection.\nThe interface consists of a single NetworkInformation object, an instance of which is returned by the Navigator.connection property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API',
},
{
	title: 'Page Visibility API',
	text: 'Note: The Page Visibility API is especially useful for saving resources and improving performance by letting a page avoid performing unnecessary tasks when the document isn t visible.When the user minimizes the window or switches to another tab, the API sends a visibilitychange event to let listeners know the state of the page has changed. You can detect the event and perform some actions or behave differently. For example, if your web app is playing a video, it can pause the video when the user puts the tab into the background, and resume playback when the user returns to the tab. The user doesn t lose their place in the video, the video s soundtrack doesn t interfere with audio in the new foreground tab, and the user doesn t miss any of the video in the meantime.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API',
},
{
	title: 'Payment Request API',
	text: 'The Payment Request API provides a consistent user experience for both merchants and users. It is not a new way for paying for things; rather, it s a way for users to select their preferred way of paying for things, and make that information available to a merchant.Many problems related to online shopping-cart abandonment can be traced to checkout forms, which can be difficult and time consuming to fill out and often require multiple steps to complete. The Payment Request API is meant to reduce the number of steps needed to complete a payment online, potentially doing away with checkout forms. It aims to make the checkout process easier, by having payment apps store a user s details, which are then passed along to a merchant, hopefully without requiring an HTML form.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API',
},
{
	title: 'Performance API',
	text: 'Since a platform s system clock is subject to various skews (such as NTP adjustments), the interfaces support a monotonic clock i.e. a clock that is always increasing. As such, the Performance API defines a DOMHighResTimeStamp type rather than using the Date.now() interface.The DOMHighResTimeStamp type, as its name implies, represents a high resolution point in time. This type is a double and is used by the performance interfaces. The value could be a discrete point in time or the difference in time between two discrete points in time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance_API',
},
{
	title: 'Performance Timeline',
	text: 'This document provides an overview of the standard s interfaces. For more details about the interfaces, see the reference pages and Using Performance Timeline.Note: This feature is available in Web Workers',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance_Timeline',
},
{
	title: 'Web Periodic Background Synchronization API',
	text: 'The Web Periodic Background Synchronization API provides a way to register tasks to be run in a service worker at periodic intervals with network connectivity. These tasks are referred to as periodic background sync requests.The Periodic Background Sync API allows web applications to alert their service worker to make any updates, at a periodic time interval. Uses may include fetching latest content whilst a device is connected to Wi-Fi, or allowing background updates to an application.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Periodic_Background_Synchronization_API',
},
{
	title: 'Permissions API',
	text: 'Note: This feature is available in Web Workers (although not current versions of Firefox, as WorkerNavigator.permissions is not implemented).Historically different APIs handle their own permissions inconsistently — for example the Notifications API allows for explicit checking of permission status and requesting permission, whereas the Geolocation API doesn t (which causes problems if the user denied the initial permission request). The Permissions API provides the tools to allow developers to implement a better user experience as far as permissions are concerned.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API',
},
{
	title: 'Picture-in-Picture API',
	text: 'Represents the floating video window; contains width and height properties, and an onresize event handler property.The Picture-in-Picture API adds methods to the HTMLVideoElement and Document interfaces to allow toggling of the floating video window.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API',
},
{
	title: 'Pointer events',
	text: 'Note: Pointer events are not available in Web Workers.Pointer events are DOM events that are fired for a pointing device. They are designed to create a single DOM event model to handle pointing input devices such as a mouse, pen/stylus or touch (such as one or more fingers).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events',
},
{
	title: 'Pointer Lock API',
	text: 'More than that, the API is useful for any applications that require significant mouse input to control movements, rotate objects, and change entries, for example allowing users to control the viewing angle by moving the mouse around without any button clicking. The buttons are then freed up for other actions. Other examples include apps for viewing maps or satellite imagery.Pointer lock lets you access mouse events even when the cursor goes past the boundary of the browser or screen. For example, your users can continue to rotate or manipulate a 3D model by moving the mouse without end. Without Pointer lock, the rotation or manipulation stops the moment the pointer reaches the edge of the browser or screen. Game players can now click buttons and swipe the mouse cursor back and forth without worrying about leaving the game play area and accidentally clicking another application that would take mouse focus away from the game.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API',
},
{
	title: 'Presentation API',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The Presentation API lets a user agent (such as a Web browser) effectively display web content through large presentation devices such as projectors and network-connected televisions. Supported types of multimedia devices include both displays which are wired using HDMI, DVI, or the like, or wireless, using DLNA, Chromecast, AirPlay, or Miracast.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Presentation_API',
},
{
	title: 'Prioritized Task Scheduling API',
	text: 'Note: This feature is available in Web WorkersThe Prioritized Task Scheduling API provides a standardized way to prioritize all tasks belonging to an application, whether they defined in a website developer s code, or in third party libraries and frameworks.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Prioritized_Task_Scheduling_API',
},
{
	title: 'Proximity Events',
	text: 'Warning: The Proximity Events APIs are not supported by any current major browser, and should not be used. This page is provided for historical interest.The proximity events are a handy way to know when a user is close to a device. These events make it possible to react to such a change, for example by shutting down the screen of a smartphone when the user is having a phone call with the device close to their ear.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Proximity_Events',
},
{
	title: 'Push API',
	text: 'Warning: When implementing PushManager subscriptions, it is vitally important that you protect against CSRF/XSRF issues in your app. See the following articles for more information:For an app to receive push messages, it has to have an active service worker. When the service worker is active, it can subscribe to push notifications, using PushManager.subscribe().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Push_API',
},
{
	title: 'Reporting API',
	text: 'The Reporting API provides a generic reporting mechanism for web applications to use to make reports available based on various platform features (for example Content Security Policy, Feature-Policy, or feature deprecation reports) in a consistent manner.There are a number of different features and problems on the web platform that generate information useful to web developers when they are trying to fix bugs or improve their websites in other ways. Such information can include:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Reporting_API',
},
{
	title: 'Resize Observer API',
	text: 'There are a whole raft of use cases for responsive design techniques (and others besides) that respond to changes in an element s size, but previously their implementations have often been hacky and/or brittle.For example, media queries / window.matchMedia are great for updating layouts at specific points when the viewport changes sizes, but what if you want to change layout in response to a specific element s size changing, which isn t the outer container?',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API',
},
{
	title: 'Resource Timing API',
	text: 'The interface s properties create a resource loading timeline with high-resolution timestamps for network events such as redirect start and end times, DNS lookup start and end times, request start, response start and end times, etc. The interface also includes other properties that provide data about the size of the fetched resource as well as the type of resource that initiated the fetch.This document provides an overview of the Resource Timing interfaces. For more details about the interfaces including examples see each interface s reference page, Using the Resource Timing API, and the references in the See also section. For a graphical representation of the resource timing processing model see the resource timing phases figure.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API',
},
{
	title: 'Screen Capture API',
	text: 'The Screen Capture API is relatively simple to use. Its sole method is MediaDevices.getDisplayMedia(), whose job is to ask the user to select a screen or portion of a screen to capture in the form of a MediaStream.To start capturing video from the screen, you call getDisplayMedia() on the instance of Media navigator.mediaDevices:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API',
},
{
	title: 'Screen Orientation API',
	text: '',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API',
},
{
	title: 'Screen Wake Lock API',
	text: 'Most devices by default turn off their screen after a specified amount of time to prolong the life of the hardware. Modern devices do this to save on battery power. Whilst this is a useful feature, some applications need the screen to stay awake to be their most useful.The Screen Wake Lock API prevents the screen from turning off, dimming or locking. It allows for a simple platform-based solution which up until now could only be achieved via workarounds which were potentially power hungry. Only visible (active) documents can acquire the screen wake lock.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API',
},
{
	title: 'Selection API',
	text: 'The Selection API enables developers to access and manipulate the portion of a document selected by the user.The Window.getSelection() and Document.getSelection() methods return a Selection object representing the portion of the document selected by the user. A Selection object provides methods to:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Selection_API',
},
{
	title: 'Sensor APIs',
	text: 'Although the Generic Sensor API specification defines a Sensor interface, as a web developer you will never use it. Instead you ll use one of its subclasses to retrieve specific kinds of sensor data. For example, the accelerometer interface returns the acceleration of the device along all three axes at the time it is read.Sensors may or may not correspond exactly to a physical device sensor. For example, the Gyroscope interface corresponds exactly to a physical device interface. Alternatively, the AbsoluteOrientationSensor interface provides information that is algorithmically aggregated from two or more device sensors. These sensor types are referred to as low-level and high-level respectively. The latter type of sensor is also called a fusion sensor (alternatively, virtual or synthetic sensors).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs',
},
{
	title: 'Server-sent events',
	text: 'Note: This feature is available in Web WorkersNote: Firefox does not currently support the use of server-sent events in service workers (it does support them in dedicated and shared workers). See bug 1681218.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events',
},
{
	title: 'Service Worker API',
	text: 'A service worker is an event-driven worker registered against an origin and a path. It takes the form of a JavaScript file that can control the web-page/site that it is associated with, intercepting and modifying navigation and resource requests, and caching resources in a very granular fashion to give you complete control over how your app behaves in certain situations (the most obvious one being when the network is not available).A service worker is run in a worker context: it therefore has no DOM access, and runs on a different thread to the main JavaScript that powers your app, so it is non-blocking. It is designed to be fully async; as a consequence, APIs such as synchronous XHR and Web Storage can t be used inside a service worker.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API',
},
{
	title: 'Storage API',
	text: 'Note: This feature is available in Web WorkersThe Storage Standard defines a common, shared storage system to be used by all APIs and technologies that store content-accessible data for individual Web sites. The Storage API gives sites  code the ability to find out how much space they can use, how much they are already using, and even control whether or not they need to be alerted before the user agent disposes of site data in order to make room for other things.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage_API',
},
{
	title: 'Storage Access API',
	text: 'The Storage Access API provides a way for embedded, cross-origin content to gain unrestricted access to storage that it would normally only have access to in a first-party context (we refer to this as an origin s first-party storage).The API provides methods that allow embedded resources to check whether they currently have access to their first-party storage, and to request access to their first-party storage from the user agent.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API',
},
{
	title: 'Streams API',
	text: 'Note: This feature is available in Web WorkersStreaming involves breaking a resource that you want to receive over a network down into small chunks, then processing it bit by bit. This is something browsers do anyway when receiving assets to be shown on webpages — videos buffer and more is gradually available to play, and sometimes you ll see images display gradually as more is loaded.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Streams_API',
},
{
	title: 'Touch events',
	text: 'The touch events interfaces are relatively low-level APIs that can be used to support application-specific multi-touch interactions such as a two-finger gesture. A multi-touch interaction starts when a finger (or stylus) first touches the contact surface. Other fingers may subsequently touch the surface and optionally move across the touch surface. The interaction ends when the fingers are removed from the surface. During this interaction, an application receives touch events during the start, move, and end phases.Touch events are similar to mouse events except they support simultaneous touches and at different locations on the touch surface. The TouchEvent interface encapsulates all of the touchpoints that are currently active. The Touch interface, which represents a single touchpoint, includes information such as the position of the touch point relative to the browser viewport.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Touch_events',
},
{
	title: 'UI Events',
	text: 'Passed into handlers for composition events. Composition events enable a user to enter characters that might not be available on the physical keyboard.Passed into handlers for focus events, which are associated with elements receiving or losing focus.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/UI_Events',
},
{
	title: 'URL API',
	text: 'Note: This feature is available in Web WorkersThe majority of the URL standard is taken up by the definition of a URL and how it is structured and parsed. Also covered are definitions of various terms related to addressing of computers on a network, and the algorithms for parsing IP addresses and DOM addresses are specified. More interesting to most developers is the API itself.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/URL_API',
},
{
	title: 'URL Pattern API',
	text: '\n  The pattern syntax is based on the syntax from the\n  path-to-regexp library. Patterns\n  can contain:\n\n  You can find details about the syntax in the pattern syntax\n  section below.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API',
},
{
	title: 'Vibration API',
	text: 'Vibration is described as a pattern of on-off pulses, which may be of varying lengths. The pattern may consist of either a single integer, describing the number of milliseconds to vibrate, or an array of integers describing a pattern of vibrations and pauses. Vibration is controlled with a single method: Navigator.vibrate().You may pulse the vibration hardware one time by specifying either a single value or an array consisting of only one value:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API',
},
{
	title: 'Visual Viewport API',
	text: 'The mobile web contains two viewports, the layout viewport and the visual viewport. The layout viewport covers all the elements on a page and the visual viewport is what is actually visible on the screen. When the user pinch-zooms into the page, the visual viewport shrinks but the layout viewport is unchanged. User-interface features like the on-screen keyboard (OSK) can shrink the visual viewport without affecting the layout viewport.What happens when a web page element needs to be visible on screen regardless of the visible portion of a web page? For example, what if you need a set of image controls to remain on screen regardless of the pinch zoom level of the device? Current browsers vary in how they handle this. The visual viewport lets web developers solve this by positioning elements relative to what s shown on screen.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API',
},
{
	title: 'Web Animations API',
	text: 'The Web Animations API provides a common language for browsers and developers to describe animations on DOM elements. To get more information on the concepts behind the API and how to use it, read Using the Web Animations API.Provides playback controls and a timeline for an animation node or source. Can take an object created with the KeyframeEffect() constructor.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API',
},
{
	title: 'Web Audio API',
	text: 'The Web Audio API involves handling audio operations inside an audio context, and has been designed to allow modular routing. Basic audio operations are performed with audio nodes, which are linked together to form an audio routing graph. Several sources — with different types of channel layout — are supported even within a single context. This modular design provides the flexibility to create complex audio functions with dynamic effects.Audio nodes are linked into chains and simple webs by their inputs and outputs. They typically start with one or more sources. Sources provide arrays of sound intensities (samples) at very small timeslices, often tens of thousands of them per second. These could be either computed mathematically (such as OscillatorNode), or they can be recordings from sound/video files (like AudioBufferSourceNode and MediaElementAudioSourceNode) and audio streams (MediaStreamAudioSourceNode). In fact, sound files are just recordings of sound intensities themselves, which come in from microphones or electric instruments, and get mixed down into a single, complicated wave.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
},
{
	title: 'Web Authentication API',
	text: 'The Web Authentication API is an extension of the Credential Management API that enables strong authentication with public key cryptography, enabling passwordless authentication and/or secure second-factor authentication without SMS texts.The Web Authentication API (also referred to as WebAuthn) uses asymmetric (public-key) cryptography instead of passwords or SMS texts for registering, authenticating, and second-factor authentication with websites. This has some benefits:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API',
},
{
	title: 'Web Crypto API',
	text: 'Note: This feature is available in Web WorkersWarning: The Web Crypto API provides a number of low-level cryptographic primitives. It s very easy to misuse them, and the pitfalls involved can be very subtle.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API',
},
{
	title: 'Web MIDI API',
	text: 'The Web MIDI API connects to and interacts with Musical Instrument Digital Interface (MIDI) Devices.The interfaces deal with the practical aspects of sending and receiving MIDI messages. Therefore, the API can be used for musical and non-musical uses, with any MIDI device connected to your computer.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API',
},
{
	title: 'Notifications API',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.The Notifications API allows web pages to control the display of system notifications to the end user. These are outside the top-level browsing context viewport, so therefore can be displayed even when the user has switched tabs or moved to a different app. The API is designed to be compatible with existing notification systems, across different platforms.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API',
},
{
	title: 'Web Share API',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.Note: This API is not available in Web Workers (not exposed via WorkerNavigator).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API',
},
{
	title: 'Web Speech API',
	text: '\n  The Web Speech API makes web apps able to handle voice data.\n  There are two components to this API:\nFor more details on using these features, see Using the Web Speech API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API',
},
{
	title: 'Web Storage API',
	text: 'The two mechanisms within Web Storage are as follows:These mechanisms are available via the Window.sessionStorage and Window.localStorage properties (to be more precise, in supporting browsers the Window object implements the WindowLocalStorage and WindowSessionStorage objects, which the localStorage and sessionStorage properties hang off) — invoking one of these will create an instance of the Storage object, through which data items can be set, retrieved and removed. A different Storage object is used for the sessionStorage and localStorage for each origin — they function and are controlled separately.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API',
},
{
	title: 'Web Workers API',
	text: 'A worker is an object created using a constructor (e.g. Worker()) that runs a named JavaScript file — this file contains the code that will run in the worker thread.In addition to the standard JavaScript set of functions (such as String, Array, Object, JSON, etc.), you can run almost any code you like inside a worker thread. There are some exceptions: for example, you can t directly manipulate the DOM from inside a worker, or use some default methods and properties of the window object. For information about the code that you can run see worker global context and functions, and supported web APIs below.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API',
},
{
	title: 'WebCodecs API',
	text: '\n  Many Web APIs use media codecs internally.\n  For example, the Web Audio API, and the WebRTC API.\n  However these APIs do not allow developers to work with individual frames of a video stream and unmuxed chunks of encoded audio or video.\n\n  Web developers have typically used WebAssembly in order to get around this limitation,\n  and to work with media codecs in the browser.\n  However, this requires additional bandwidth to download codecs that already exist in the browser,\n  reducing performance and power efficiency, and adding additional development overhead.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API',
},
{
	title: 'WebGL: 2D and 3D graphics for the web',
	text: 'Support for WebGL is present in Firefox 4+, Google Chrome 9+, Opera 12+, Safari 5.1+, Internet Explorer 11+, and Microsoft Edge build 10240+; however, the user s device must also have hardware that supports these features.The WebGL 2 API introduces support for much of the OpenGL ES 3.0 feature set; it s provided through the WebGL2RenderingContext interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API',
},
{
	title: 'WebHID API',
	text: 'A Human Interface Device (HID) is a type of device that takes input from or provides output to humans. It also refers to the HID protocol, a standard for bi-directional communication between a host and a device that is designed to simplify the installation procedure. The HID protocol was originally developed for USB devices but has since been implemented over many other protocols, including Bluetooth.Provides methods for connecting to HID devices, listing attached HID devices and event handlers for connected HID devices.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API',
},
{
	title: 'WebRTC API',
	text: 'WebRTC consists of several interrelated APIs and protocols which work together to achieve this. The documentation you ll find here will help you understand the fundamentals of WebRTC, how to set up and use both data and media connections, and more.Because implementations of WebRTC are still evolving, and because each browser has different levels of support for codecs and WebRTC features, you should strongly consider making use of the Adapter.js library provided by Google before you begin to write your code.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API',
},
{
	title: 'WebVR API',
	text: 'Note: WebVR API is replaced by WebXR API. WebVR was never ratified as a standard, was implemented and enabled by default in very few browsers and supported a small number of devices.WebVR provides support for exposing virtual reality devices — for example, head-mounted displays like the Oculus Rift or HTC Vive — to web apps, enabling developers to translate position and movement information from the display into movement around a 3D scene. This has numerous, interesting applications, from virtual product tours and interactive training apps to immersive first-person games.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API',
},
{
	title: 'Web Video Text Tracks Format (WebVTT)',
	text: 'The MIME type of WebVTT is text/vtt.A WebVTT file (.vtt) contains cues, which can be either a single line or multiple lines, as shown below:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API',
},
{
	title: 'WebXR Device API',
	text: 'WebXR is a group of standards which are used together to support rendering 3D scenes to hardware designed for presenting virtual worlds (virtual reality, or VR), or for adding graphical imagery to the real world, (augmented reality, or AR). The WebXR Device API implements the core of the WebXR feature set, managing the selection of output devices, render the 3D scene to the chosen device at the appropriate frame rate, and manage motion vectors created using input controllers.WebXR-compatible devices include fully-immersive 3D headsets with motion and orientation tracking, eyeglasses which overlay graphics atop the real world scene passing through the frames, and handheld mobile phones which augment reality by capturing the world with a camera and augment that scene with computer-generated imagery.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API',
},
{
	title: 'The WebSocket API (WebSockets)',
	text: 'Note: While a WebSocket connection is functionally somewhat similar to standard Unix-style sockets, they are not related.The primary interface for connecting to a WebSocket server and then sending and receiving data on the connection.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
},
{
	title: 'Window Controls Overlay API',
	text: '\n  The Window Controls Overlay API gives Progressive Web Apps installed on desktop operating systems the ability to hide the default window title bar and display their own content\n  over the full surface area of the app window, turning the control buttons (maximize, minimize, and close) into an overlay.\nBefore using this feature, the following conditions must be true:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window_Controls_Overlay_API',
},
{
	title: 'XMLHttpRequest',
	text: 'XMLHttpRequest is used heavily in AJAX programming.Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest',
},
{
	title: 'AbortController',
	text: 'You can create a new AbortController object using the AbortController() constructor. Communicating with a DOM request is done using an AbortSignal object.Creates a new AbortController object instance.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AbortController',
},
{
	title: 'AbortSignal',
	text: 'The AbortSignal interface also inherits properties from its parent interface, EventTarget.A Boolean that indicates whether the request(s) the signal is communicating with is/are aborted (true) or not (false).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal',
},
{
	title: 'AbsoluteOrientationSensor',
	text: 'To use this sensor, the user must grant permission to the  accelerometer ,  gyroscope , and  magnetometer  device sensors through the Permissions API.If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The Feature-Policy HTTP header article contains implementation instructions.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AbsoluteOrientationSensor',
},
{
	title: 'AbstractRange',
	text: 'Note: As an abstract interface, you will not directly instantiate an object of type AbstractRange. Instead, you will use the Range or StaticRange interfaces. To understand the difference between those two interfaces, and how to choose which is appropriate for your needs.A Boolean value which is true if the range is collapsed. A collapsed range is a range whose start position and end position are the same, resulting in a zero-character-long range.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AbstractRange',
},
{
	title: 'Accelerometer',
	text: 'The Accelerometer interface of the Sensor APIs provides on each reading the acceleration applied to the device along all three axes.To use this sensor, the user must grant permission to the  accelerometer , device sensor through the Permissions API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer',
},
{
	title: 'AddressErrors',
	text: 'AddressErrors is the type of the object returned by shippingAddressErrors in the object passed into PaymentRequestUpdateEvent.updateWith() by the shippingaddresschange event handler if a change to the address resulted in a validation error occurring.See the examples below to see how this works.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors',
},
{
	title: 'AesCbcParams',
	text: 'A string. This should be set to AES-CBC.An ArrayBuffer, a TypedArray, or a DataView. The initialization vector. Must be 16 bytes, unpredictable, and preferably cryptographically random. However, it need not be secret (for example, it may be transmitted unencrypted along with the ciphertext).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AesCbcParams',
},
{
	title: 'AesCtrParams',
	text: 'AES is a block cipher, meaning that it splits the message into blocks and encrypts it a block at a time. In CTR mode, every time a block of the message is encrypted, an extra block of data is mixed in. This extra block is called the  counter block .A given counter block value must never be used more than once with the same key:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AesCtrParams',
},
{
	title: 'AesGcmParams',
	text: 'For details of how to supply appropriate values for this parameter, see the specification for AES-GCM: NIST SP800-38D, in particular section 5.2.1.1 on Input Data.A string. This should be set to AES-GCM.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AesGcmParams',
},
{
	title: 'AesKeyGenParams',
	text: 'A string. This should be set to AES-CBC, AES-CTR, AES-GCM, or AES-KW, depending on the algorithm you want to use.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AesKeyGenParams',
},
{
	title: 'AmbientLightSensor',
	text: 'The AmbientLightSensor interface of the Sensor APIs returns the current light level or illuminance of the ambient light around the hosting device.To use this sensor, the user must grant permission to the  ambient-light-sensor  device sensor through the Permissions API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor',
},
{
	title: 'AnalyserNode',
	text: 'An AnalyserNode has exactly one input and one output. The node works even if the output is not connected.\n  \n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode',
},
{
	title: 'ANGLE_instanced_arrays',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is only available to WebGL1 contexts. In WebGL2, the functionality of this extension is available on the WebGL2 context by default and the constants and methods are available without the  ANGLE  suffix.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ANGLE_instanced_arrays',
},
{
	title: 'Animation',
	text: 'Creates a new Animation object instance.The current time value of the animation in milliseconds, whether running or paused. If the animation lacks a timeline, is inactive or hasn t been played yet, its value is null.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Animation',
},
{
	title: 'AnimationEffect',
	text: 'The AnimationEffect interface of the Web Animations API defines current and future animation effects like KeyframeEffect, which can be passed to Animation objects for playing, and KeyframeEffect (which is used by CSS Animations and Transitions).Returns the object associated with the animation containing all the animation s timing values.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect',
},
{
	title: 'AnimationEvent',
	text: 'Creates an AnimationEvent event with the given parameters.Also inherits properties from its parent Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent',
},
{
	title: 'AnimationPlaybackEvent',
	text: 'As animations play, they report changes to their playState through animation events.Constructs a new AnimationPlaybackEvent object instance.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AnimationPlaybackEvent',
},
{
	title: 'AnimationTimeline',
	text: 'The AnimationTimeline interface of the Web Animations API represents the timeline of an animation. This interface exists to define timeline features (inherited by DocumentTimeline and future timeline types) and is not itself directly used by developers. Anywhere you see AnimationTimeline, you should use DocumentTimeline or any other timeline type instead.Returns the time value in milliseconds for this timeline or null if this timeline is inactive.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AnimationTimeline',
},
{
	title: 'atob()',
	text: '\n  For use with Unicode or UTF-8 strings, see the note on  Unicode strings  in the page\n  for btoa().\nAn ASCII string containing decoded data from encodedData.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/atob',
},
{
	title: 'Attr',
	text: 'The core idea of an object of type Attr is the association between a name and a value. An attribute may also be part of a namespace and, in this case, it also has a URI identifying the namespace, and a prefix that is an abbreviation for the namespace.The name is deemed local when it ignores the eventual namespace prefix and deemed qualified when it includes the prefix of the namespace, if any, separated from the local name by a colon (:). We have three cases: an attribute outside of a namespace, an attribute inside a namespace without a prefix defined, an attribute inside a namespace with a prefix:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Attr',
},
{
	title: 'AudioBuffer',
	text: 'Objects of these types are designed to hold small audio snippets, typically less than 45 s. For longer sounds, objects implementing the MediaElementAudioSourceNode are more suitable. The buffer contains data in the following format: non-interleaved IEEE754 32-bit linear PCM with a nominal range between -1 and +1, that is, a 32-bit floating point buffer, with each sample between -1.0 and 1.0. If the AudioBuffer has multiple channels, they are stored in separate buffers.Creates and returns a new AudioBuffer object instance.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer',
},
{
	title: 'AudioBufferSourceNode',
	text: 'This interface is especially useful for playing back audio which has particularly stringent timing accuracy requirements, such as for sounds that must match a specific rhythm and can be kept in memory rather than being played from disk or the network. To play sounds which require accurate timing but must be streamed from the network or played from disk, use a AudioWorkletNode to implement its playback.An AudioBufferSourceNode has no inputs and exactly one output, which has the same number of channels as the AudioBuffer indicated by its buffer property. If there s no buffer set—that is, if buffer is null—the output contains a single channel of silence (every sample is 0).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode',
},
{
	title: 'AudioContext',
	text: 'An audio context controls both the creation of the nodes it contains and the execution of the audio processing, or decoding. You need to create an AudioContext before you do anything else, as everything happens inside a context. It s recommended to create one AudioContext and reuse it instead of initializing a new one each time, and it s OK to use a single AudioContext for several different audio sources and pipeline concurrently.Creates and returns a new AudioContext object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioContext',
},
{
	title: 'AudioData',
	text: 'AudioData is a transferable object.An audio track consists of a stream of audio samples, each sample representing a captured moment of sound. An AudioData object is a representation of such a sample. Working alongside the interfaces of the Insertable Streams API, you can break a stream into individual AudioData objects with MediaStreamTrackProcessor, or construct an audio track from a stream of frames with MediaStreamTrackGenerator.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioData',
},
{
	title: 'AudioDecoder',
	text: 'The AudioDecoder interface of the WebCodecs API decodes chunks of audio.Creates a new AudioDecoder object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioDecoder',
},
{
	title: 'AudioDestinationNode',
	text: 'AudioDestinationNode has no output (as it is the output, no more AudioNode can be linked after it in the audio graph) and one input. The number of channels in the input must be between 0 and the maxChannelCount value or an exception is raised.The AudioDestinationNode of a given AudioContext can be retrieved using the AudioContext.destination property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioDestinationNode',
},
{
	title: 'AudioEncoder',
	text: 'Creates a new AudioEncoder object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioEncoder',
},
{
	title: 'AudioListener',
	text: 'It is important to note that there is only one listener per context and that it isn t an AudioNode.\n  \n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioListener',
},
{
	title: 'AudioNode',
	text: 'Examples include:Note: An AudioNode can be target of events, therefore it implements the EventTarget interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioNode',
},
{
	title: 'AudioParam',
	text: 'An AudioParam can be set to a specific value or a change in value, and can be scheduled to happen at a specific time and following a specific pattern.Each AudioParam has a list of events, initially empty, that define when and how values change. When this list is not empty, changes using the AudioParam.value attributes are ignored. This list of events allows us to schedule changes that have to happen at very precise times, using arbitrary timeline-based automation curves. The time used is the one defined in AudioContext.currentTime.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioParam',
},
{
	title: 'AudioParamDescriptor',
	text: 'It is used to create custom AudioParams on an AudioWorkletNode. If the underlying AudioWorkletProcessor has a parameterDescriptors static getter, then the returned array of objects based on this dictionary is used internally by AudioWorkletNode constructor to populate its parameters property accordingly.The string which represents the name of the AudioParam. Under this name the AudioParam will be available in the parameters property of the node, and under this name the AudioWorkletProcessor.process method will acquire the calculated values of this AudioParam.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioParamDescriptor',
},
{
	title: 'AudioParamMap',
	text: 'The AudioParamMap object is accessed as a Map in which each parameter is identified by a name string which is mapped to an AudioParam containing the value of that parameter. In addition, there are the following properties available:?',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioParamMap',
},
{
	title: 'AudioProcessingEvent',
	text: 'The Web Audio API AudioProcessingEvent represents events that occur when a ScriptProcessorNode input buffer is ready to be processed.Note: As of the August 29 2014 Web Audio API spec publication, this feature has been marked as deprecated, and is soon to be replaced by AudioWorklet.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioProcessingEvent',
},
{
	title: 'AudioScheduledSourceNode',
	text: 'Note: You can t create an AudioScheduledSourceNode object directly. Instead, use the interface which extends it, such as AudioBufferSourceNode, OscillatorNode, and ConstantSourceNode.Unless stated otherwise, nodes based upon AudioScheduledSourceNode output silence when not playing (that is, before start() is called and after stop() is called). Silence is represented, as always, by a stream of samples with the value zero (0).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode',
},
{
	title: 'AudioTrack',
	text: 'The most common use for accessing an AudioTrack object is to toggle its enabled property in order to mute and unmute the track.A Boolean value which controls whether or not the audio track s sound is enabled. Setting this value to false mutes the track s audio.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack',
},
{
	title: 'AudioTrackList',
	text: 'Retrieve an instance of this object with HTMLMediaElement.audioTracks. The individual tracks can be accessed using array syntax.This interface also inherits properties from its parent interface, EventTarget.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList',
},
{
	title: 'AudioWorklet',
	text: 'The AudioWorklet interface of the Web Audio API is used to supply custom audio processing scripts that execute in a separate thread to provide very low latency audio processing.The worklet s code is run in the AudioWorkletGlobalScope global execution context, using a separate Web Audio thread which is shared by the worklet and other audio nodes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet',
},
{
	title: 'AudioWorkletGlobalScope',
	text: 'Each BaseAudioContext has a single AudioWorklet available under the audioWorklet property, which runs its code in a single AudioWorkletGlobalScope.As the global execution context is shared across the current BaseAudioContext, it s possible to define any other variables and perform any actions allowed in worklets — apart from defining AudioWorkletProcessor-derived classes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletGlobalScope',
},
{
	title: 'AudioWorkletNode',
	text: 'The AudioWorkletNode interface of the Web Audio API represents a base class for a user-defined AudioNode, which can be connected to an audio routing graph along with other nodes. It has an associated AudioWorkletProcessor, which does the actual audio processing in a Web Audio rendering thread.Creates a new instance of an AudioWorkletNode object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode',
},
{
	title: 'AudioWorkletProcessor',
	text: 'Note: The AudioWorkletProcessor and classes that derive from it cannot be instantiated directly from a user-supplied code. Instead, they are created only internally by the creation of an associated AudioWorkletNodes. The constructor of the deriving class is getting called with an options object, so you can perform a custom initialization procedures — see constructor page for details.Creates a new instance of an AudioWorkletProcessor object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor',
},
{
	title: 'AuthenticatorAssertionResponse',
	text: 'The AuthenticatorAssertionResponse interface of the Web Authentication API is returned by CredentialsContainer.get() when a PublicKeyCredential is passed, and provides proof to a service that it has a key pair and that the authentication request is valid and approved.This interface inherits from AuthenticatorResponse.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse',
},
{
	title: 'AuthenticatorAttestationResponse',
	text: 'The AuthenticatorAttestationResponse interface of the Web Authentication API is returned by CredentialsContainer.create() when a PublicKeyCredential is passed, and provides a cryptographic root of trust for the new key pair that has been generated. This response should be sent to the relying party s server to complete the creation of the credential.This interface inherits from AuthenticatorResponse.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse',
},
{
	title: 'AuthenticatorResponse',
	text: 'The AuthenticatorResponse interface of the Web Authentication API is the base interface for interfaces that provide a cryptographic root of trust for a key pair. The child interfaces include information from the browser such as the challenge origin and either may be returned from PublicKeyCredential.response.Below is a list of interfaces based on the AuthenticatorResponse interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorResponse',
},
{
	title: 'BackgroundFetchEvent',
	text: 'It is the event type passed to onbackgroundfetchabort and onbackgroundfetchclick.Creates a new BackgroundFetchEvent object. This constructor is not typically used, as the browser creates these objects itself and provides them to background fetch event callbacks.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchEvent',
},
{
	title: 'BackgroundFetchManager',
	text: 'None.Returns a Promise that resolves with a BackgroundFetchRegistration object for a supplied array of URLs and Request objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchManager',
},
{
	title: 'BackgroundFetchRecord',
	text: 'A BackgroundFetchRecord is created by the BackgroundFetchManager.fetch() method, therefore there is no constructor for this interface.There will be one BackgroundFetchRecord for each resource requested by fetch().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchRecord',
},
{
	title: 'BackgroundFetchRegistration',
	text: 'A BackgroundFetchRegistration instance is returned by the BackgroundFetchManager.fetch() or BackgroundFetchManager.get() methods, and therefore there has no constructor.The following properties are available synchronously, as convenience properties copied from those in the BackgroundFetchRegistration instance.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchRegistration',
},
{
	title: 'BackgroundFetchUpdateUIEvent',
	text: 'Creates a new BackgroundFetchUIEvent object. This constructor is not typically used, as the browser creates these objects itself for the backgroundfetchsuccess and backgroundfetchfail events.This interface doesn t implement any specific properties, but inherits properties from Event, and BackgroundFetchEvent.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchUpdateUIEvent',
},
{
	title: 'BarcodeDetector',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The BarcodeDetector interface of the Barcode Detection API allows detection of linear and two dimensional barcodes in images.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector',
},
{
	title: 'BarProp',
	text: 'The browser location bar.The browser menu bar.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BarProp',
},
{
	title: 'BaseAudioContext',
	text: 'A BaseAudioContext can be a target of events, therefore it implements the EventTarget interface.Returns the AudioWorklet object, which can be used to create and manage AudioNodes in which JavaScript code implementing the AudioWorkletProcessor interface are run in the background to process audio data.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext',
},
{
	title: 'BatteryManager',
	text: 'A Boolean value indicating whether the battery is currently being charged.A number representing the remaining time in seconds until the battery is fully charged, or 0 if the battery is already fully charged.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager',
},
{
	title: 'BeforeInstallPromptEvent',
	text: 'This interface inherits from the Event interface.Creates a new BeforeInstallPromptEvent object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent',
},
{
	title: 'BeforeUnloadEvent',
	text: 'When a non-empty string is assigned to the returnValue Event property, a dialog box appears, asking the users for confirmation to leave the page (see example below). When no value is provided, the event is processed silently. Some implementations only show the dialog box if the frame or any embedded frame receives a user gesture or user interaction. See Browser compatibility for more information.WebKit-derived browsers don t follow the spec for the dialog box. An almost-cross-browser working example would be close to the below example.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BeforeUnloadEvent',
},
{
	title: 'BiquadFilterNode',
	text: 'Creates a new instance of a BiquadFilterNode object.Inherits properties from its parent, AudioNode.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode',
},
{
	title: 'Blob',
	text: 'Blobs can represent data that isn t necessarily in a JavaScript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on the user s system.To construct a Blob from other non-blob objects and data, use the Blob() constructor. To create a blob that contains a subset of another blob s data, use the slice() method. To obtain a Blob object for a file on the user s file system, see the File documentation.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Blob',
},
{
	title: 'BlobBuilder',
	text: '\n  Note: The BlobBuilder interface has been\n  deprecated in favor of the newly introduced Blob constructor.\n  \n  The BlobBuilder interface provides an easy way to\n  construct Blob objects. Just create a BlobBuilder and append\n  chunks of data to it by calling the append() method. When you re done\n  building your blob, call getBlob() to retrieve a Blob\n  containing the data you sent into the blob builder.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BlobBuilder',
},
{
	title: 'BlobEvent',
	text: 'Creates a BlobEvent event with the given parameters.Inherits properties from its parent Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BlobEvent',
},
{
	title: 'Bluetooth',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.\n  The Bluetooth interface of the Web Bluetooth API returns a\n  Promise to a BluetoothDevice object with the specified\n  options.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth',
},
{
	title: 'BluetoothCharacteristicProperties',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The BluetoothCharacteristicProperties interface of the Web Bluetooth API provides the operations that are valid on the given BluetoothRemoteGATTCharacteristic.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BluetoothCharacteristicProperties',
},
{
	title: 'BluetoothDevice',
	text: '\n  The BluetoothDevice interface of the Web Bluetooth API represents a Bluetooth device inside a particular script execution\n  environment.\nA string that uniquely identifies a device.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice',
},
{
	title: 'BluetoothRemoteGATTCharacteristic',
	text: 'The BluetoothRemoteGattCharacteristic interface of the Web Bluetooth API represents a GATT Characteristic, which is a basic data element that provides further information about a peripheral s service.Returns the BluetoothRemoteGATTService this characteristic belongs to.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic',
},
{
	title: 'BluetoothRemoteGATTDescriptor',
	text: '\n  The BluetoothRemoteGATTDescriptor interface of the Web Bluetooth API provides a GATT Descriptor,\n  which provides further information about a characteristic s value.\n\n  Returns the BluetoothRemoteGATTCharacteristic this descriptor belongs\n  to.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor',
},
{
	title: 'BluetoothRemoteGATTServer',
	text: '\n  The BluetoothRemoteGATTServer interface of the Web Bluetooth API represents a GATT\n  Server on a remote device.\n\n  A boolean value that returns true while this script execution environment is\n  connected to this.device. It can be false while the user agent is\n  physically connected.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer',
},
{
	title: 'BluetoothRemoteGATTService',
	text: '\n  The BluetoothRemoteGATTService interface of the Web Bluetooth API represents a\n  service provided by a GATT server, including a device, a list of referenced services,\n  and a list of the characteristics of this service.\n\n  Returns information about a Bluetooth device through an instance of\n  BluetoothDevice.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService',
},
{
	title: 'BluetoothUUID',
	text: '\n  A UUID string is a 128-bit UUID, for example 00001818-0000-1000-8000-00805f9b34fb.\n  The Bluetooth registry contains lists of descriptors, services, and characteristics identified by these UUIDs in addition to a 16- or 32- bit alias, and a name.\nThe BluetoothUUID interface provides methods to retrieve these 128-bit UUIDs.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BluetoothUUID',
},
{
	title: 'BroadcastChannel',
	text: 'Note: This feature is available in Web WorkersCreates an object linking to the named channel.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel',
},
{
	title: 'btoa()',
	text: '\n  You can use this method to encode data which may otherwise cause communication\n  problems, transmit it, then use the atob() method to decode the data again. For example, you can encode control\n  characters such as ASCII values 0 through 31.\nThe binary string to encode.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/btoa',
},
{
	title: 'ByteLengthQueuingStrategy',
	text: 'The ByteLengthQueuingStrategy interface of the Streams API provides a built-in byte length queuing strategy that can be used when constructing streams.Creates a new ByteLengthQueuingStrategy object instance.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ByteLengthQueuingStrategy',
},
{
	title: 'Cache',
	text: 'An origin can have multiple, named Cache objects. You are responsible for implementing how your script (e.g. in a ServiceWorker) handles Cache updates. Items in a Cache do not get updated unless explicitly requested; they don t expire unless deleted. Use CacheStorage.open() to open a specific named Cache object and then call any of the Cache methods to maintain the Cache.You are also responsible for periodically purging cache entries. Each browser has a hard limit on the amount of cache storage that a given origin can use. Cache quota usage estimates are available via the StorageManager.estimate() method. The browser does its best to manage disk space, but it may delete the Cache storage for an origin. The browser will generally delete all of the data for an origin or none of the data for an origin. Make sure to version caches by name and use the caches only from the version of the script that they can safely operate on. See Deleting old caches for more information.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Cache',
},
{
	title: 'caches',
	text: '\n  The global caches read-only property returns the\n  CacheStorage object associated with the current context. This object\n  enables functionality such as storing assets for offline use, and generating custom\n  responses to requests.\nA CacheStorage object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/caches',
},
{
	title: 'CacheStorage',
	text: 'The CacheStorage interface represents the storage for Cache objects.The interface:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage',
},
{
	title: 'CanvasCaptureMediaStreamTrack',
	text: 'Part of the Media Capture and Streams API.This interface inherits the properties of its parent, MediaStreamTrack.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasCaptureMediaStreamTrack',
},
{
	title: 'CanvasGradient',
	text: 'It can be used as a fillStyle or strokeStyle.As an opaque object, there is no exposed property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient',
},
{
	title: 'CanvasPattern',
	text: 'It can be used as a fillStyle or strokeStyle.As an opaque object, this has no exposed property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern',
},
{
	title: 'CanvasRenderingContext2D',
	text: 'See the interface s properties and methods in the sidebar and below. The Canvas tutorial has more explanation, examples, and resources, as well.To get a CanvasRenderingContext2D instance, you must first have an HTML <canvas> element to work with:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D',
},
{
	title: 'CaretPosition',
	text: 'The CaretPosition interface represents the caret position, an indicator for the text insertion point. You can get a CaretPosition using the Document.caretPositionFromPoint() method.This interface doesn t inherit any properties.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CaretPosition',
},
{
	title: 'CDATASection',
	text: 'In XML, a CDATA section looks like:For example:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CDATASection',
},
{
	title: 'ChannelMergerNode',
	text: '\n  \nIf ChannelMergerNode has one single output, but as many inputs as there are channels to merge; the number of inputs is defined as a parameter of its constructor and the call to AudioContext.createChannelMerger(). In the case that no value is given, it will default to 6.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ChannelMergerNode',
},
{
	title: 'ChannelSplitterNode',
	text: '\n  \nIf your ChannelSplitterNode always has one single input, the amount of outputs is defined by a parameter on its constructor and the call to AudioContext.createChannelSplitter(). In the case that no value is given, it will default to 6. If there are fewer channels in the input than there are outputs, supernumerary outputs are silent.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ChannelSplitterNode',
},
{
	title: 'CharacterData',
	text: 'This interface also inherits properties from its parents, Node and EventTarget.A string representing the textual data contained in this object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CharacterData',
},
{
	title: 'clearInterval()',
	text: '\n  The identifier of the repeated action you want to cancel. This ID was returned by\n  the corresponding call to setInterval().\n  \n  It s worth noting that the pool of IDs used by\n  setInterval() and\n  setTimeout() are shared, which\n  means you can technically use clearInterval() and\n  clearTimeout() interchangeably.\n  However, for clarity, you should avoid doing so.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/clearInterval',
},
{
	title: 'clearTimeout()',
	text: '\n  If the parameter provided does not identify a previously established action,\n  this method does nothing.\n\n  The identifier of the timeout you want to cancel. This ID was returned by the\n  corresponding call to setTimeout().\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout',
},
{
	title: 'Client',
	text: 'Sends a message to the client.The universally unique identifier of the client as a string.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Client',
},
{
	title: 'Clients',
	text: 'Returns a Promise for a Client matching a given id.Returns a Promise for an array of Client objects. An options argument allows you to control the types of clients returned.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Clients',
},
{
	title: 'Clipboard',
	text: 'The Clipboard interface implements the Clipboard API, providing—if the user grants permission—both read and write access to the contents of the system clipboard. The Clipboard API can be used to implement cut, copy, and paste features within a web application.The system clipboard is exposed through the global Navigator.clipboard property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard',
},
{
	title: 'ClipboardEvent',
	text: 'Creates a ClipboardEvent event with the given parameters.Also inherits properties from its parent Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent',
},
{
	title: 'ClipboardItem',
	text: 'The benefit of having the ClipboardItem interface to represent data, is that it enables developers to cope with the varying scope of file types and data easily.Access to the contents of the clipboard is gated behind the Permissions API: The clipboard-write permission is granted automatically to pages when they are in the active tab. The clipboard-read permission must be requested, which you can do by trying to read data from the clipboard.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem',
},
{
	title: 'CloseEvent',
	text: 'Creates a new CloseEvent.This interface also inherits properties from its parent, Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent',
},
{
	title: 'Comment',
	text: 'Comments are represented in HTML and XML as content between  <!--  and  --> . In XML, like inside SVG or MathML markup, the character sequence  --  cannot be used within a comment.This interface has no specific property, but inherits those of its parent, CharacterData, and indirectly those of Node.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Comment',
},
{
	title: 'CompositionEvent',
	text: 'Creates a new CompositionEvent object instance.This interface also inherits properties of its parent, UIEvent, and its ancestor — Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent',
},
{
	title: 'CompressionStream',
	text: 'Creates a new CompressionStreamReturns the ReadableStream instance controlled by this object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CompressionStream',
},
{
	title: 'console',
	text: '\n  The console object can be accessed from any global object. Window on\n  browsing scopes and WorkerGlobalScope as specific variants in workers via the\n  property console. It s exposed as Window.console, and can be referenced as\n  console. For example:\n\n  This page documents the Methods available on the console object and\n  gives a few Usage examples.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/console',
},
{
	title: 'ConstantSourceNode',
	text: 'A ConstantSourceNode has no inputs and exactly one monaural (one-channel) output. The output s value is always the same as the value of the offset parameter.Creates and returns a new ConstantSourceNode instance, optionally specifying an object which establishes initial values for the object s properties. As an alternative, you can use the BaseAudioContext.createConstantSource() factory method; see Creating an AudioNode.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ConstantSourceNode',
},
{
	title: 'ContactAddress',
	text: 'The ContactAddress interface of the Contact Picker API represents a physical address. Instances of this interface are retrieved from the address property of the objects returned by ContactManager.getProperties().It may be useful to refer to the Universal Postal Union website s Addressing S42 standard materials, which provide information about international standards for postal addresses.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ContactAddress',
},
{
	title: 'ContactsManager',
	text: 'The ContactsManager interface of the Contact Picker API allows users to select entries from their contact list and share limited details of the selected entries with a website or application.The ContactsManager is available through the global navigator.contacts property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ContactsManager',
},
{
	title: 'ContentIndex',
	text: 'The ContentIndex interface of the Content Index API allows developers to register their offline enabled content with the browser.There are no properties of this interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ContentIndex',
},
{
	title: 'ContentIndexEvent',
	text: 'This event is sent to the global scope of a ServiceWorker. It contains the id of the indexed content to be removed.The contentdelete event is only fired when the deletion happens due to interaction with the browser s built-in user interface. It is not fired when the ContentIndex.delete method is called.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ContentIndexEvent',
},
{
	title: 'ConvolverNode',
	text: 'Note: For more information on the theory behind Linear Convolution, see the Convolution article on Wikipedia.Creates a new ConvolverNode object instance.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode',
},
{
	title: 'CookieChangeEvent',
	text: 'The CookieChangeEvent interface of the Cookie Store API is the event type passed to CookieStore.onchange() when any cookie changes have occurred. A cookie change consists of a cookie and a type (either  changed  or  deleted ).Cookie changes that will cause the CookieChangeEvent to be dispatched are:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CookieChangeEvent',
},
{
	title: 'CookieStore',
	text: 'The CookieStore interface of the Cookie Store API provides methods for getting and setting cookies asynchronously from either a page or a service worker.The CookieStore is accessed via attributes in the global scope in a Window or ServiceWorkerGlobalScope context. Therefore there is no constructor.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CookieStore',
},
{
	title: 'CookieStoreManager',
	text: 'The CookieStoreManager interface of the Cookie Store API allows service workers to subscribe to events for cookie changes. By using the subscribe() method a particular service worker registration can indicate that it is interested in change events.A CookieStoreManager has an associated ServiceWorkerRegistration. Each service worker registration has a cookie change subscription list, which is a list of cookie change subscriptions each containing a name and URL. The methods in this interface allow the service worker to add and remove subscriptions from this list, and to get a list of all subscriptions.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CookieStoreManager',
},
{
	title: 'CountQueuingStrategy',
	text: 'The CountQueuingStrategy interface of the Streams API provides a built-in chunk counting queuing strategy that can be used when constructing streams.Creates a new CountQueuingStrategy object instance.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CountQueuingStrategy',
},
{
	title: 'CrashReportBody',
	text: 'The CrashReportBody interface of the Reporting API represents the body of a crash report (the return value of its Report.body property).A crash report is generated when a document becomes unusable due to the browser (or one of its processes) crashing. For security reasons, no details of the crash are communicated in the body except for a general crash reason.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CrashReportBody',
},
{
	title: 'createImageBitmap()',
	text: '\n  An image source, which can be an <img>, SVG\n  <image>, <video>, <canvas>,\n  HTMLImageElement, SVGImageElement,\n  HTMLVideoElement,\n  HTMLCanvasElement, Blob, ImageData,\n  ImageBitmap, or OffscreenCanvas object.\n  \n  The x coordinate of the reference point of the rectangle from which the\n  ImageBitmap will be extracted.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/createImageBitmap',
},
{
	title: 'Credential',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.The Credential interface of the Credential Management API provides information about an entity (usually a user) as a prerequisite to a trust decision.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Credential',
},
{
	title: 'CredentialsContainer',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.The CredentialsContainer interface of the Credential Management API exposes methods to request credentials and notify the user agent when events such as successful sign in or sign out happen. This interface is accessible from Navigator.credentials.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer',
},
{
	title: 'crossOriginIsolated',
	text: '\n  The global crossOriginIsolated read-only property returns a boolean value that\n  indicates whether a SharedArrayBuffer can be sent via a\n  Window.postMessage() call.\n\n  This value is dependent on any Cross-Origin-Opener-Policy and\n  Cross-Origin-Embedder-Policy headers present in the response.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/crossOriginIsolated',
},
{
	title: 'Crypto',
	text: 'Note: This feature is available in Web WorkersThe Web Crypto API is accessed through the global crypto property, which is a Crypto object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto',
},
{
	title: 'CryptoKey',
	text: 'The CryptoKey interface of the Web Crypto API represents a cryptographic key obtained from one of the SubtleCrypto methods generateKey(), deriveKey(), importKey(), or unwrapKey().For security reasons, the CryptoKey interface can only be used in a secure context.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey',
},
{
	title: 'CryptoKeyPair',
	text: 'A CryptoKeyPair object can be obtained using SubtleCrypto.generateKey(), when the selected algorithm is one of the asymmetric algorithms: RSASSA-PKCS1-v1_5, RSA-PSS, RSA-OAEP, ECDSA, or ECDH.It contains two properties, which are both CryptoKey objects: a privateKey property containing the private key and a publicKey property containing the public key.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CryptoKeyPair',
},
{
	title: 'CSS',
	text: 'The CSS interface is a utility interface and no object of this type can be created: only static properties are defined on it.Provides access to the Worklet responsible for all the classes related to painting.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSS',
},
{
	title: 'CSSAnimation',
	text: 'The CSSAnimation interface of the Web Animations API represents an Animation object.Inherits methods from its ancestor Animation and adds animationName.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSAnimation',
},
{
	title: 'CSSConditionRule',
	text: 'Two objects derive from CSSConditionRule: CSSMediaRule and CSSSupportsRule.Inherits properties from its ancestors CSSRule and CSSGroupingRule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSConditionRule',
},
{
	title: 'CSSCounterStyleRule',
	text: 'This interface also inherits properties from its parent CSSRule.A string object that contains the serialization of the <custom-ident> defined as the name for the associated rule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSCounterStyleRule',
},
{
	title: 'CSSFontFaceRule',
	text: 'Inherits properties from its ancestor CSSRule.Returns a CSSStyleDeclaration.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSFontFaceRule',
},
{
	title: 'CSSGroupingRule',
	text: 'This interface also inherits properties from CSSRule.Returns a CSSRuleList of the CSS rules in the media rule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSGroupingRule',
},
{
	title: 'CSSImageValue',
	text: 'The CSSImageValue interface of the CSS Typed Object Model API represents values for properties that take an image, for example background-image, list-style-image, or border-image-source.The CSSImageValue object represents an <image> that involves a URL, such as url() or image(), but not linear-gradient() or element().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSImageValue',
},
{
	title: 'CSSImportRule',
	text: 'Inherits properties from its ancestor CSSRule.Returns the URL specified by the @import rule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSImportRule',
},
{
	title: 'CSSKeyframeRule',
	text: 'Inherits properties from its ancestor CSSRule.Represents the key of the keyframe, like  10% ,  75% . The from keyword maps to  0%  and the to keyword maps to  100% .',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSKeyframeRule',
},
{
	title: 'CSSKeyframesRule',
	text: 'Inherits properties from its ancestor CSSRule.Represents the name of the keyframes, used by the animation-name property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSKeyframesRule',
},
{
	title: 'CSSKeywordValue',
	text: 'The CSSKeywordValue interface of the CSS Typed Object Model API creates an object to represent CSS keywords and other identifiers.The interface instance name is a stringifier meaning that when used anywhere a string is expected it will return the value of CSSKeyword.value.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSKeywordValue',
},
{
	title: 'CSSMathInvert',
	text: 'The CSSMathInvert interface of the CSS_Object_Model#css_typed_object_model represents a CSS calc() used as calc(1 / <value>). It inherits properties and methods from its parent CSSNumericValue.Creates a new CSSMathInvert object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMathInvert',
},
{
	title: 'CSSMathMax',
	text: 'The CSSMathMax interface of the CSS_Object_Model#css_typed_object_model represents the CSS max() function. It inherits properties and methods from its parent CSSNumericValue.Creates a new CSSMathMax object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMathMax',
},
{
	title: 'CSSMathMin',
	text: 'The CSSMathMin interface of the CSS_Object_Model#css_typed_object_model represents the CSS min() function. It inherits properties and methods from its parent CSSNumericValue.Creates a new CSSMathMin object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMathMin',
},
{
	title: 'CSSMathNegate',
	text: 'The CSSMathNegate interface of the CSS_Object_Model#css_typed_object_model negates the value passed into it. It inherits properties and methods from its parent CSSNumericValue.Creates a new CSSMathNegate object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMathNegate',
},
{
	title: 'CSSMathProduct',
	text: 'The CSSMathProduct interface of the CSS_Object_Model#css_typed_object_model represents the result obtained by calling add(), sub(), or toSum() on CSSNumericValue. It inherits properties and methods from its parent CSSNumericValue.Creates a new CSSMathProduct object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMathProduct',
},
{
	title: 'CSSMathSum',
	text: 'The CSSMathSum interface of the CSS_Object_Model#css_typed_object_model represents the result obtained by calling add(), sub(), or toSum() on CSSNumericValue.A CSSMathSum is the object type returned when the StylePropertyMapReadOnly.get() method is used on a CSS property whose value is created with a calc() function.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMathSum',
},
{
	title: 'CSSMathValue',
	text: 'The CSSMathValue interface of the CSS_Object_Model#css_typed_object_model a base class for classes representing complex numeric values.Below is a list of interfaces based on the CSSMathValue interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMathValue',
},
{
	title: 'CSSMatrixComponent',
	text: 'The CSSMatrixComponent interface of the CSS_Object_Model#css_typed_object_model represents the matrix() and matrix3d() values of the individual transform property in CSS. It inherits properties and methods from its parent CSSTransformValue.Creates a new CSSMatrixComponent object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMatrixComponent',
},
{
	title: 'CSSMediaRule',
	text: 'Inherits properties from its ancestors CSSConditionRule, CSSGroupingRule, and CSSRule.Returns a MediaList representing the intended destination medium for style information.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMediaRule',
},
{
	title: 'CSSNamespaceRule',
	text: 'Inherits methods from its ancestor CSSRule.Returns a string containing the text of the URI of the given namespace.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSNamespaceRule',
},
{
	title: 'CSSNumericArray',
	text: 'The CSSNumericArray interface of the CSS_Object_Model#css_typed_object_model contains a list of CSSNumericValue objects.Returns how many CSSNumericValue objects are contained within the CSSNumericArray.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericArray',
},
{
	title: 'CSSNumericValue',
	text: 'The CSSNumericValue interface of the CSS Typed Object Model API represents operations that all numeric values can perform.Below is a list of interfaces based on the CSSNumericValue interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue',
},
{
	title: 'CSSPageRule',
	text: 'Inherits properties from its ancestor CSSRule.Represents the text of the page selector associated with the at-rule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSPageRule',
},
{
	title: 'CSSPerspective',
	text: 'The CSSPerspective interface of the CSS_Object_Model#css_typed_object_model represents the perspective() value of the individual transform property in CSS. It inherits properties and methods from its parent CSSTransformValue.Creates a new CSSPerspective object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSPerspective',
},
{
	title: 'CSSPositionValue',
	text: 'The CSSPositionValue interface of the CSS Typed Object Model API represents values for properties that take a position, for example object-position.Creates a new CSSPositionValue object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSPositionValue',
},
{
	title: 'CSSPrimitiveValue',
	text: 'The CSSPrimitiveValue interface derives from the CSSValue interface and represents the current computed value of a CSS property.\n  Note: This interface was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do\n  not implement it.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue',
},
{
	title: 'CSSPropertyRule',
	text: 'Inherits properties from its ancestor CSSRule.Returns the inherit flag of the custom property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSPropertyRule',
},
{
	title: 'CSSPseudoElement',
	text: 'The CSSPseudoElement interface represents a pseudo-element that may be the target of an event or animated using the Web Animations API. Instances of this interface may be obtained by calling Element.pseudo().Returns the originating/parent Element of the pseudo-element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement',
},
{
	title: 'CSSRotate',
	text: 'The CSSRotate interface of the CSS_Object_Model#css_typed_object_model represents the rotate value of the individual transform property in CSS. It inherits properties and methods from its parent CSSTransformValue.Creates a new CSSRotate object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSRotate',
},
{
	title: 'CSSRule',
	text: 'The CSSRule interface specifies the properties common to all rules, while properties unique to specific rule types are specified in the more specialized interfaces for those rules  respective types.Represents the textual representation of the rule, e.g.  h1,h2 { font-size: 16pt }  or  @import  url  . To access or modify parts of the rule (e.g. the value of  font-size  in the example) use the properties on the specialized interface for the rule s type.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSRule',
},
{
	title: 'CSSRuleList',
	text: 'While the CSSRuleList object is read-only, and cannot be directly modified, it is considered a live object, as the content can change over time.To edit the underlying rules returned by CSSRule objects, use CSSStyleSheet.insertRule() and CSSStyleSheet.deleteRule(), which are methods of CSSStyleSheet.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSRuleList',
},
{
	title: 'CSSScale',
	text: 'The CSSScale interface of the CSS_Object_Model#css_typed_object_model represents the scale() and scale3d() values of the individual transform property in CSS. It inherits properties and methods from its parent CSSTransformValue.Creates a new CSSScale object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSScale',
},
{
	title: 'CSSSkew',
	text: 'The CSSSkew interface of the CSS_Object_Model#css_typed_object_model is part of the CSSTransformValue interface. It represents the skew() value of the individual transform property in CSS.Creates a new CSSSkew object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSSkew',
},
{
	title: 'CSSSkewX',
	text: 'The CSSSkewX interface of the CSS_Object_Model#css_typed_object_model represents the skewX() value of the individual transform property in CSS. It inherits properties and methods from its parent CSSTransformValue.Creates a new CSSSkewX object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSSkewX',
},
{
	title: 'CSSSkewY',
	text: 'The CSSSkewY interface of the CSS_Object_Model#css_typed_object_model represents the skewY() value of the individual transform property in CSS. It inherits properties and methods from its parent CSSTransformValue.Creates a new CSSSkewY object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSSkewY',
},
{
	title: 'CSSStyleDeclaration',
	text: 'A CSSStyleDeclaration object can be exposed using three different APIs:Textual representation of the declaration block, if and only if it is exposed via HTMLElement.style. Setting this attribute changes the inline style. If you want a text representation of a computed declaration block, you can get it with JSON.stringify().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration',
},
{
	title: 'CSSStyleRule',
	text: 'Inherits properties from its ancestor CSSRule.Returns the textual representation of the selector for this rule, e.g.  h1,h2 .',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleRule',
},
{
	title: 'CSSStyleSheet',
	text: 'A stylesheet consists of a collection of CSSRule objects representing each of the rules in the stylesheet. The rules are contained in a CSSRuleList, which can be obtained from the stylesheet s cssRules property.For example, one rule might be a CSSStyleRule object containing a style such as:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet',
},
{
	title: 'CSSStyleValue',
	text: 'The CSSStyleValue interface of the CSS Typed Object Model API is the base class of all CSS values accessible through the Typed OM API. An instance of this class may be used anywhere a string is expected.Below is a list of interfaces based on the CSSStyleValue interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue',
},
{
	title: 'CSSSupportsRule',
	text: 'Inherits properties from its ancestors CSSConditionRule, CSSGroupingRule, and CSSRule.Inherits methods from its ancestors CSSConditionRule, CSSGroupingRule, and CSSRule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSSupportsRule',
},
{
	title: 'CSSTransformComponent',
	text: 'Returns a boolean indicting whether the transform is 2D or 3D.Returns a new DOMMatrix object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSTransformComponent',
},
{
	title: 'CSSTransformValue',
	text: 'The CSSTransformValue interface of the CSS_Object_Model#css_typed_object_model represents transform-list values as used by the CSS transform property.Below is a list of interfaces based on the CSSTransformValue interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSTransformValue',
},
{
	title: 'CSSTransition',
	text: 'The CSSTransition interface of the Web Animations API represents an Animation object used for a CSS Transition.Inherits methods from its ancestor Animation and adds transitionProperty.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSTransition',
},
{
	title: 'CSSTranslate',
	text: 'The CSSTranslate interface of the CSS_Object_Model#css_typed_object_model represents the translate() value of the individual transform property in CSS. It inherits properties and methods from its parent CSSTransformValue.Creates a new CSSTranslate object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSTranslate',
},
{
	title: 'CSSUnitValue',
	text: 'The CSSUnitValue interface of the CSS_Object_Model#css_typed_object_model represents values that contain a single unit type. For example,  42px  would be represented by a CSSNumericValue.Creates a new CSSUnitValue object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSUnitValue',
},
{
	title: 'CSSUnparsedValue',
	text: 'The CSSUnparsedValue interface of the CSS_Object_Model#css_typed_object_model represents property values that reference custom properties. It consists of a list of string fragments and variable references.Custom properties are represented by CSSUnparsedValue and var() references are represented using CSSVariableReferenceValue.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue',
},
{
	title: 'CSSValue',
	text: 'The CSSValue interface represents the current computed value of a CSS property.\n  Note: This interface was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do\n  not implement it.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSValue',
},
{
	title: 'CSSValueList',
	text: 'The CSSValueList interface derives from the CSSValue interface and provides the abstraction of an ordered collection of CSS values.\n  Note: This interface was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do\n  not implement it.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSValueList',
},
{
	title: 'CSSVariableReferenceValue',
	text: 'The CSSVariableReferenceValue interface of the CSS_Object_Model#css_typed_object_model allows you to create a custom name for a built-in CSS value. This object functionality is sometimes called a  CSS variable  and serves the same purpose as the var() function. The custom name must begin with two dashes.Creates a new CSSVariableReferenceValue object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSVariableReferenceValue',
},
{
	title: 'CustomElementRegistry',
	text: 'Defines a new custom element.Returns the constructor for the named custom element, or undefined if the custom element is not defined.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry',
},
{
	title: 'CustomEvent',
	text: 'Note: This feature is available in Web WorkersCreates a new CustomEvent.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent',
},
{
	title: 'CustomStateSet',
	text: 'An HTML form element, such as a checkbox has different states,  checked  and  unchecked . Likewise, developers creating custom elements need to assign possible states to these elements. The CustomStateList allows these states to be stored, and accessed from the custom element.A instance of CustomStateList is returned by ElementInternals.states. The CustomStateList object is described as setlike, and therefore the methods behave in a similar manner to those on a Set.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CustomStateSet',
},
{
	title: 'DataTransfer',
	text: 'This object is available from the dataTransfer property of all drag events.Creates and returns a new DataTransfer object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer',
},
{
	title: 'DataTransferItem',
	text: 'This interface has no constructor.The kind of drag data item, string or file.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem',
},
{
	title: 'DataTransferItemList',
	text: 'The individual items can be accessed using the array operator [].This interface has no constructor.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList',
},
{
	title: 'DecompressionStream',
	text: 'Creates a new DecompressionStreamReturns the ReadableStream instance controlled by this object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DecompressionStream',
},
{
	title: 'DedicatedWorkerGlobalScope',
	text: 'This interface inherits properties from the WorkerGlobalScope interface, and its parent EventTarget.The name that the Worker was (optionally) given when it was created using the Worker() constructor. This is mainly useful for debugging purposes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope',
},
{
	title: 'DelayNode',
	text: 'A DelayNode always has exactly one input and one output, both with the same amount of channels.\n  \n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DelayNode',
},
{
	title: 'DeprecationReportBody',
	text: 'The DeprecationReportBody interface of the Reporting API represents the body of a deprecation report.A deprecation report is generated when a deprecated feature (for example a deprecated API method) is used on a document being observed by a ReportingObserver. In addition to the support of this API, receiving useful deprecation warnings relies on browser vendors adding these warnings for deprecated features.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DeprecationReportBody',
},
{
	title: 'DeviceMotionEvent',
	text: 'Warning: Currently, Firefox and Chrome do not handle the coordinates the same way. Take care about this while using them.Creates a new DeviceMotionEvent.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent',
},
{
	title: 'DeviceMotionEventAcceleration',
	text: 'The DeviceMotionEventAcceleration object provides information about the amount of acceleration the device is experiencing along all three axes.The amount of acceleration along the X axis.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEventAcceleration',
},
{
	title: 'DeviceMotionEventRotationRate',
	text: 'A DeviceMotionEventRotationRate object provides information about the rate at which the device is rotating around all three axes.The amount of rotation around the Z axis, in degrees per second.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEventRotationRate',
},
{
	title: 'DeviceOrientationEvent',
	text: 'Creates a new DeviceOrientationEvent.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent',
},
{
	title: 'DeviceProximityEvent',
	text: 'Warning: DeviceProximityEvent is not supported by any current major browser, and should not be used.The DeviceProximityEvent interface provides information about the distance of a nearby physical object using the proximity sensor of a device.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DeviceProximityEvent',
},
{
	title: 'DirectoryEntrySync',
	text: 'The DirectoryEntrySync interface represents a directory in a file system. It includes methods for creating, reading, looking up, and recursively removing files in a directory.\n  Warning: This interface is deprecated and is no more on the standard track.\n  Do not use it anymore. Use the File and Directory Entries API instead.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DirectoryEntrySync',
},
{
	title: 'DirectoryReaderSync',
	text: 'The DirectoryReaderSync interface lets you read the entries in a directory.\n  Warning: This interface is deprecated and is no more on the standard track.\n  Do not use it anymore. Use the File and Directory Entries API instead.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DirectoryReaderSync',
},
{
	title: 'Document',
	text: 'The DOM tree includes elements such as <body> and <table>, among many others. It provides functionality globally to the document, like how to obtain the page s URL and create new elements in the document.The Document interface describes the common properties and methods for any kind of document. Depending on the document s type (e.g. HTML, XML, SVG, …), a larger API is available: HTML documents, served with the  text/html  content type, also implement the HTMLDocument interface, whereas XML and SVG documents implement the XMLDocument interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document',
},
{
	title: 'DocumentFragment',
	text: 'It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is due to the fact that the document fragment isn t part of the active document tree structure. Changes made to the fragment don t affect the document (even on reflow) or incur any performance impact when changes are made.Creates and returns a new DocumentFragment object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment',
},
{
	title: 'DocumentTimeline',
	text: 'The DocumentTimeline interface of the Web Animations API represents animation timelines, including the default document timeline (accessed via Document.timeline).Creates a new DocumentTimeline object associated with the active document of the current browsing context.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DocumentTimeline',
},
{
	title: 'DocumentType',
	text: 'Inherits properties from its parent, Node.A string of the internal subset, or null if there is none. Eg  <!ELEMENT foo (bar)> .',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DocumentType',
},
{
	title: 'DOMError',
	text: 'The DOMError interface describes an error object that contains an error name.Returns a string representing one of the error type names (see below).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMError',
},
{
	title: 'DOMException',
	text: 'Each exception has a name, which is a short  PascalCase -style string identifying the error or abnormal condition.DOMException is a Serializable object, so it can be cloned with structuredClone() or copied between Workers using postMessage().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMException',
},
{
	title: 'DOMHighResTimeStamp',
	text: 'This type can be used to describe a discrete point in time or a time interval (the difference in time between two discrete points in time).The time, given in milliseconds, should be accurate to 5 µs (microseconds), with the fractional part of the number indicating fractions of a millisecond. However, if the browser is unable to provide a time value accurate to 5 µs (due, for example, to hardware or software constraints), the browser can represent the value as a time in milliseconds accurate to a millisecond. Also note the section below on reduced time precision controlled by browser preferences to avoid timing attacks and fingerprinting.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp',
},
{
	title: 'DOMImplementation',
	text: 'This interface has no specific property and doesn t inherit any.No inherited method.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation',
},
{
	title: 'DOMMatrix (WebKitCSSMatrix)',
	text: 'WebKitCSSMatrix is an alias to DOMMatrix.This interface should be available inside web workers, though some implementations don t allow it yet.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix',
},
{
	title: 'DOMMatrixReadOnly',
	text: 'This interface should be available inside web workers, though some implementations doesn t allow it yet.Creates a new DOMMMatrixReadOnly object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrixReadOnly',
},
{
	title: 'DOMParser',
	text: '\n  You can perform the opposite operation—converting a DOM tree into XML or HTML\n  source—using the XMLSerializer interface.\n\n  In the case of an HTML document, you can also replace portions of the DOM with new DOM\n  trees built from HTML by setting the value of the Element.innerHTML and\n  outerHTML properties. These properties can also be\n  read to fetch HTML fragments corresponding to the corresponding DOM subtree.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMParser',
},
{
	title: 'DOMPoint',
	text: 'In general, a positive x component represents a position to the right of the origin, a positive y component is downward from the origin, and a positive z component extends outward from the screen (in other words, toward the user).Creates and returns a new DOMPoint object given the values of zero or more of its coordinate components and optionally the w perspective value. You can also use an existing DOMPoint or DOMPointReadOnly or an object to create a new point by calling the DOMPoint.fromPoint() static method.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint',
},
{
	title: 'DOMPointReadOnly',
	text: 'Note: This feature is available in Web WorkersThere are two ways to create a new DOMPointReadOnly instance. First, you can use its constructor, passing in the values of the parameters for each dimension and, optionally, the perspective:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly',
},
{
	title: 'DOMQuad',
	text: 'A DOMQuad is a collection of four DOMPoints defining the corners of an arbitrary quadrilateral. Returning DOMQuads lets getBoxQuads() return accurate information even when arbitrary 2D or 3D transforms are present. It has a handy bounds attribute returning a DOMRectReadOnly for those cases where you just want an axis-aligned bounding rectangle.Creates a new DOMQuad object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMQuad',
},
{
	title: 'DOMRect',
	text: 'The type of box represented by the DOMRect is specified by the method or property that returned it. For example, VREyeParameters.renderRect from the WebVR API specifies the viewport of a canvas into which visuals for one eye of a head mounted display should be rendered.It inherits from its parent, DOMRectReadOnly.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMRect',
},
{
	title: 'DOMRectReadOnly',
	text: 'Defined to create a new DOMRectReadOnly object. Note that this constructor cannot be called by 3rd party JavaScript; doing so returns an  Illegal constructor  TypeError.The x coordinate of the DOMRect s origin.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly',
},
{
	title: 'DOMStringList',
	text: 'Returns the length of the list.Returns a string.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMStringList',
},
{
	title: 'DOMStringMap',
	text: '',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMStringMap',
},
{
	title: 'DOMTimeStamp',
	text: '\n  Note: DOMTimeStamp has been removed from the WebIDL specification, but is referenced in other specifications.\n  In the High Resolution Time specification, DOMTimeStamp has been redefined as EpochTimeStamp.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMTimeStamp',
},
{
	title: 'DOMTokenList',
	text: 'A DOMTokenList is indexed beginning with 0 as with JavaScript Array objects. DOMTokenList is always case-sensitive.An integer representing the number of objects stored in the object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList',
},
{
	title: 'DragEvent',
	text: 'This interface inherits properties from MouseEvent and Event.The data that is transferred during a drag and drop interaction.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DragEvent',
},
{
	title: 'DynamicsCompressorNode',
	text: 'Creates a new instance of an DynamicsCompressorNode object.Inherits properties from its parent, AudioNode.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode',
},
{
	title: 'EcdhKeyDeriveParams',
	text: 'ECDH enables two people who each have a key pair consisting of a public and a private key to derive a shared secret. They exchange public keys and use the combination of their private key and the other entity s public key to derive a secret key that they — and no one else — share.The parameters for ECDH deriveKey() therefore include the other entity s public key, which is combined with this entity s private key to derive the shared secret.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EcdhKeyDeriveParams',
},
{
	title: 'EcdsaParams',
	text: 'A string. This should be set to ECDSA.A string. An identifier for the digest algorithm to use. This should be one of the following:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EcdsaParams',
},
{
	title: 'EcKeyGenParams',
	text: 'A string. This should be set to ECDSA or ECDH, depending on the algorithm you want to use.A string representing the name of the elliptic curve to use. This may be any of the following names for NIST-approved curves:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EcKeyGenParams',
},
{
	title: 'EcKeyImportParams',
	text: 'A string. This should be set to ECDSA or ECDH, depending on the algorithm you want to use.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EcKeyImportParams',
},
{
	title: 'Element',
	text: 'For example, the HTMLElement interface is the base interface for HTML elements, while the SVGElement interface is the basis for all SVG elements. Most functionality is specified further down the class hierarchy.Languages outside the realm of the Web platform, like XUL through the XULElement interface, also implement Element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Element',
},
{
	title: 'ElementInternals',
	text: 'This interface has no constructor. An ElementInternals object is returned when calling HTMLElement.attachInternals().Returns the ShadowRoot object associated with this element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals',
},
{
	title: 'EncodedAudioChunk',
	text: 'Creates a new EncodedAudioChunk object.Returns a string indicating whether this chunk of data is a key chunk.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EncodedAudioChunk',
},
{
	title: 'EncodedVideoChunk',
	text: 'Creates a new EncodedVideoChunk object.Returns a string indicating whether this chunk of data is a key chunk.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EncodedVideoChunk',
},
{
	title: 'EpochTimeStamp',
	text: 'This was previously known as DOMTimeStamp.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EpochTimeStamp',
},
{
	title: 'ErrorEvent',
	text: 'Also inherits properties from its parent Event.A string containing a human-readable error message describing the problem.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent',
},
{
	title: 'Event',
	text: 'An event can be triggered by the user action e.g. clicking the mouse button or tapping keyboard, or generated by APIs to represent the progress of an asynchronous task. It can also be triggered programmatically, such as by calling the HTMLElement.click() method of an element, or by defining the event, then sending it to a specified target using EventTarget.dispatchEvent().There are many types of events, some of which use other interfaces based on the main Event interface. Event itself contains the properties and methods which are common to all events.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Event',
},
{
	title: 'EventSource',
	text: 'An EventSource instance opens a persistent connection to an HTTP server, which sends events in text/event-stream format. The connection remains open until closed by calling EventSource.close().Once the connection is opened, incoming messages from the server are delivered to your code in the form of events. If there is an event field in the incoming message, the triggered event is the same as the event field value. If no event field is present, then a generic message event is fired.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EventSource',
},
{
	title: 'EventTarget',
	text: '\n  Element, and its children, as well as Document and Window, are the most common event targets,\n  but other objects can be event targets, too.\n  For example XMLHttpRequest, AudioNode, and AudioContext are also event targets.\nMany event targets (including elements, documents, and windows) also support setting event handlers via onevent properties and attributes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget',
},
{
	title: 'EXT_blend_minmax',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is only available to WebGL1 contexts. In WebGL2, the functionality of this extension is available on the WebGL2 context by default. The constants in WebGL2 are gl.MIN and gl.MAX.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_blend_minmax',
},
{
	title: 'EXT_color_buffer_float',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is available to WebGL 2 contexts only.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_color_buffer_float',
},
{
	title: 'EXT_color_buffer_half_float',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is available to both, WebGL1 and WebGL2 contexts. On WebGL 2, it s an alternative to using the EXT_color_buffer_float extension on platforms that support 16-bit floating point render targets but not 32-bit floating point render targets.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_color_buffer_half_float',
},
{
	title: 'EXT_disjoint_timer_query',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension should be available in WebGL1 contexts only. EXT_disjoint_timer_query_webgl2 is available in WebGL 2 contexts .',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query',
},
{
	title: 'EXT_float_blend',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is available to both, WebGL1 and WebGL2 contexts. However, to use it, you need to enable the use of 32-bit floating-point draw buffers by enabling the extension WEBGL_color_buffer_float (for WebGL1) or EXT_color_buffer_float (for WebGL2). Doing so automatically enables EXT_float_blend as well.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_float_blend',
},
{
	title: 'EXT_frag_depth',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is only available to WebGL1 contexts. In WebGL2, the functionality of this extension is available on the WebGL2 context by default. It requires GLSL #version 300 es.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_frag_depth',
},
{
	title: 'EXT_shader_texture_lod',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is only available to WebGL1 contexts. In WebGL2, the functionality of this extension is available on the WebGL2 context by default. It requires GLSL #version 300 es.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_shader_texture_lod',
},
{
	title: 'EXT_sRGB',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is only available to WebGL1 contexts. In WebGL2, the functionality of this extension is available on the WebGL2 context by default. The constants in WebGL2 are: gl.SRGB, gl.SRGB8, gl.SRGB8_ALPHA8 and gl.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_sRGB',
},
{
	title: 'EXT_texture_compression_bptc',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: Support depends on the system s graphics driver. There is no support on Windows.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_compression_bptc',
},
{
	title: 'EXT_texture_compression_rgtc',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: Support depends on the system s graphics driver. There is no support on Windows.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_compression_rgtc',
},
{
	title: 'EXT_texture_filter_anisotropic',
	text: 'AF improves the quality of mipmapped texture access when viewing a textured primitive at an oblique angle. Using just mipmapping, these lookups have a tendency to average to grey.WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_filter_anisotropic',
},
{
	title: 'EXT_texture_norm16',
	text: 'When this extension is enabled:WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_norm16',
},
{
	title: 'ExtendableCookieChangeEvent',
	text: 'The ExtendableCookieChangeEvent interface of the Cookie Store API is the event type passed to ServiceWorkerRegistration.oncookiechange() when any cookie changes have occurred. A cookie change event consists of a cookie and a type (either  changed  or  deleted .)Cookie changes that cause the ExtendableCookieChangeEvent to be dispatched are:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ExtendableCookieChangeEvent',
},
{
	title: 'ExtendableEvent',
	text: 'If waitUntil() is called outside of the ExtendableEvent handler, the browser should throw an InvalidStateError; note also that multiple calls will stack up, and the resulting promises will be added to the list of extend lifetime promises.Note: The behavior described in the above paragraph was fixed in Firefox 43 (see bug 1180274.)',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent',
},
{
	title: 'ExtendableMessageEvent',
	text: 'This interface inherits from the ExtendableEvent interface.Creates a new ExtendableMessageEvent object instance.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent',
},
{
	title: 'EyeDropper',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The EyeDropper interface represents an instance of an eyedropper tool that can be opened and used by the user to select colors from the screen.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper',
},
{
	title: 'FeaturePolicy',
	text: 'Returns a Boolean that indicates whether or not a particular feature is enabled in the specified context.Returns a list of names of all features supported by the User Agent. Feature whose name appears on the list might not be allowed by the Feature Policy of the current execution context and/or might not be accessible because of user s permissions.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FeaturePolicy',
},
{
	title: 'FederatedCredential',
	text: 'The FederatedCredential interface of the Credential Management API provides information about credentials from a federated identity provider. A federated identity provider is an entity that a website trusts to correctly authenticate a user, and that provides an API for that purpose. OpenID Connect is an example of a federated identity provider framework.In browsers that support it, an instance of this interface may be passed in the credential member of the init object for global fetch().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FederatedCredential',
},
{
	title: 'fetch()',
	text: '\n  The promise resolves to the Response object\n  representing the response to your request.\n\n  A fetch() promise only rejects when a\n  network error is encountered (which is usually when there s a permissions issue or\n  similar). A fetch() promise does\nnot reject on HTTP errors (404, etc.). Instead, a\n  then() handler must check the Response.ok and/or\n  Response.status properties.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/fetch',
},
{
	title: 'FetchEvent',
	text: 'Creates a new FetchEvent object. This constructor is not typically used. The browser creates these objects itself and provides them to fetch event callbacks.Inherits properties from its ancestor, Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent',
},
{
	title: 'File',
	text: 'File objects are generally retrieved from a FileList object returned as a result of a user selecting files using the <input> element, or from a drag and drop operation s DataTransfer object.A File object is a specific kind of Blob, and can be used in any context that a Blob can. In particular, FileReader, URL.createObjectURL(), createImageBitmap(), and XMLHttpRequest.send() accept both Blobs and Files.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/File',
},
{
	title: 'FileEntrySync',
	text: 'The FileEntrySync interface represents a file in a file system. It lets you write content to a file.\n  Warning: This interface is deprecated and is no more on the standard track.\n  Do not use it anymore. Use the File and Directory Entries API instead.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileEntrySync',
},
{
	title: 'FileList',
	text: 'All <input> element nodes have a files attribute of type FileList on them which allows access to the items in this list. For example, if the HTML includes the following file input:The following line of code fetches the first file in the node s file list as a File object:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileList',
},
{
	title: 'FileReader',
	text: 'File objects may be obtained from a FileList object returned as a result of a user selecting files using the <input> element, or from a drag and drop operation s DataTransfer object.FileReader can only access the contents of files that the user has explicitly selected, either using an HTML <input type= file > element or by drag and drop. It cannot be used to read a file by pathname from the user s file system. To read files on the client s file system by pathname, use the File System Access API. To read server-side files, use standard Ajax solutions, with CORS permission if reading cross-domain.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileReader',
},
{
	title: 'FileReaderSync',
	text: 'Note: This feature is available in Web WorkersWarning: This interface is only available in workers as it enables synchronous I/O that could potentially block.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileReaderSync',
},
{
	title: 'FileSystem',
	text: 'This interface will not grant you access to the users filesystem. Instead you will have a  virtual drive  within the browser sandbox. If you want to gain access to the users filesystem you need to invoke the user by eg. installing a Chrome extension. The relevant Chrome API can be found here.There are two ways to get access to a FileSystem object:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystem',
},
{
	title: 'FileSystemDirectoryEntry',
	text: 'You can create a new directory by calling getDirectory(). If you want to create subdirectories, create each child directory in sequence. If you try creating a directory using a full path that includes parent directories that do not exist yet, an error is returned. So create the hierarchy by recursively adding a new path after creating the parent directory.In the following code snippet, we create a directory called  Documents. ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry',
},
{
	title: 'FileSystemDirectoryHandle',
	text: 'The FileSystemDirectoryHandle interface of the File System Access API provides a handle to a file system directory. The interface is accessed via the window.showDirectoryPicker() method.Inherits properties from its parent, FileSystemHandle.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryHandle',
},
{
	title: 'FileSystemDirectoryReader',
	text: 'Returns an array containing some number of the directory s entries. Each item in the array is an object based on FileSystemEntry—typically either FileSystemFileEntry or FileSystemDirectoryEntry.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader',
},
{
	title: 'FileSystemEntry',
	text: 'You don t create FileSystemEntry objects directly. Instead, you will receive an object based on this interface through other APIs. This interface serves as a base class for the FileSystemFileEntry and FileSystemDirectoryEntry interfaces, which provide features specific to file system entries representing files and directories, respectively.The FileSystemEntry interface includes methods that you would expect for manipulating files and directories, but it also includes a convenient method for obtaining the URL of the entry: toURL(). It also introduces a new URL scheme: filesystem:.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry',
},
{
	title: 'FileSystemFileEntry',
	text: 'Inherits the properties of its parent interface, FileSystemEntry, but has no properties unique to this interface.Creates a new File object which can be used to read the file.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry',
},
{
	title: 'FileSystemFileHandle',
	text: 'The FileSystemFileHandle interface of the File System Access API represents a handle to a file system entry. The interface is accessed through the window.showOpenFilePicker() method.Note that read and write operations depend on file-access permissions that do not persist after a page refresh if no other tabs for that origin remain open. The queryPermission method of the FileSystemHandle interface can be used to verify permission state before accessing a file.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle',
},
{
	title: 'FileSystemHandle',
	text: 'The FileSystemHandle interface of the File System Access API is an object which represents a file or directory entry. Multiple handles can represent the same entry. For the most part you do not work with FileSystemHandle directly but rather its child interfaces FileSystemFileHandle and FileSystemDirectoryHandle.Below is a list of interfaces based on the FileSystemHandle interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemHandle',
},
{
	title: 'FileSystemSync',
	text: 'In the File and Directory Entries API, a FileSystemSync object represents a file system. It has two properties.\n  Warning: This interface is deprecated and is no more on the standard track.\n  Do not use it anymore. Use the File and Directory Entries API instead.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemSync',
},
{
	title: 'FileSystemWritableFileStream',
	text: 'The FileSystemWritableFileStream interface of the File System Access API is a WritableStream object with additional convenience methods, which operates on a single file on disk. The interface is accessed through the FileSystemFileHandle.createWritable() method.Inherits properties from its parent, WritableStream.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemWritableFileStream',
},
{
	title: 'FocusEvent',
	text: 'Creates a FocusEvent event with the given parameters.This interface also inherits properties from its parent UIEvent, and indirectly from Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent',
},
{
	title: 'FontFace',
	text: 'Constructs and returns a new FontFace object, built from an external resource described by a URL or from an ArrayBuffer.A string that retrieves or sets the ascent metric of the font. It is equivalent to the ascent-override descriptor.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FontFace',
},
{
	title: 'FontFaceSet',
	text: 'Indicates the font-face s loading status. It will be one of  loading  or  loaded .Promise which resolves once font loading and layout operations have completed.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet',
},
{
	title: 'FontFaceSetLoadEvent',
	text: 'The FontFaceSetLoadEvent interface of the CSS Font Loading API is fired whenever a FontFaceSet loads.Creates a new FontFaceSetLoadEvent object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSetLoadEvent',
},
{
	title: 'FormData',
	text: 'You can also pass it directly to the URLSearchParams constructor if you want to generate query parameters in the way a <form> would do if it were using simple GET submission.An object implementing FormData can directly be used in a for...of structure, instead of entries(): for (const p of myFormData) is equivalent to for (const p of myFormData.entries()).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FormData',
},
{
	title: 'FormDataEvent',
	text: 'This allows a FormData object to be quickly obtained in response to a formdata event firing, rather than needing to put it together yourself when you wish to submit form data via a method like XMLHttpRequest (see Using FormData objects).Creates a new FormDataEvent object instance.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FormDataEvent',
},
{
	title: 'GainNode',
	text: 'The gain is a unitless value, changing with time, that is multiplied to each corresponding sample of all input channels. If modified, the new gain is instantly applied, causing unaesthetic  clicks  in the resulting audio. To prevent this from happening, never change the value directly but use the exponential interpolation methods on the AudioParam interface.\n  \n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GainNode',
},
{
	title: 'Gamepad',
	text: 'The Gamepad interface of the Gamepad API defines an individual gamepad or other controller, allowing access to information such as button presses, axis positions, and id.A Gamepad object can be returned in one of two ways: via the gamepad property of the gamepadconnected and gamepaddisconnected events, or by grabbing any position in the array returned by the Navigator.getGamepads() method.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Gamepad',
},
{
	title: 'GamepadButton',
	text: 'The GamepadButton interface defines an individual button of a gamepad or other controller, allowing access to the current state of different types of buttons available on the control device.A GamepadButton object is returned by querying any value of the array returned by the buttons property of the Gamepad interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GamepadButton',
},
{
	title: 'GamepadEvent',
	text: 'The GamepadEvent interface of the Gamepad API contains references to gamepads connected to the system, which is what the gamepad events gamepadconnected and gamepaddisconnected are fired in response to.Returns a new GamepadEvent object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GamepadEvent',
},
{
	title: 'GamepadHapticActuator',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.The GamepadHapticActuator interface of the Gamepad API represents hardware in the controller designed to provide haptic feedback to the user (if available), most commonly vibration hardware.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator',
},
{
	title: 'GamepadPose',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The GamepadPose interface of the Gamepad API represents the pose of a WebVR controller at a given timestamp (which includes orientation, position, velocity, and acceleration information.)',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose',
},
{
	title: 'Geolocation',
	text: 'The Geolocation interface represents an object able to obtain the position of the device programmatically. It gives Web content access to the location of the device. This allows a website or app to offer customized results based on the user s location.An object with this interface is obtained using the navigator.geolocation property implemented by the Navigator object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation',
},
{
	title: 'GeolocationCoordinates',
	text: 'The GeolocationCoordinates interface represents the position and altitude of the device on Earth, as well as the accuracy with which these properties are calculated.The GeolocationCoordinates interface doesn t inherit any properties.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GeolocationCoordinates',
},
{
	title: 'GeolocationPosition',
	text: 'The GeolocationPosition interface represents the position of the concerned device at a given time. The position, represented by a GeolocationCoordinates object, comprehends the 2D position of the device, on a spheroid representing the Earth, but also its altitude and its speed.The GeolocationPosition interface doesn t inherit any properties.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition',
},
{
	title: 'GeolocationPositionError',
	text: 'The GeolocationPositionError interface represents the reason of an error occurring when using the geolocating device.The GeolocationPositionError interface doesn t inherit any property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError',
},
{
	title: 'GestureEvent',
	text: 'The GestureEvent is a proprietary interface specific to WebKit which gives information regarding multi-touch gestures. Events using this interface include gesturestart, gesturechange, and gestureend.GestureEvent derives from UIEvent, which in turn derives from Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GestureEvent',
},
{
	title: 'GlobalEventHandlers',
	text: 'Note: GlobalEventHandlers is a mixin and not an interface; you can t actually create an object of type GlobalEventHandlers.This interface doesn t include any properties except for the event handlers listed below.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers',
},
{
	title: 'GravitySensor',
	text: 'To use this sensor, the user must grant permission to the  accelerometer  device sensor through the Permissions API.Creates a new GravitySensor object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GravitySensor',
},
{
	title: 'Gyroscope',
	text: 'To use this sensor, the user must grant permission to the  gyroscope  device sensor through the Permissions API.If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The Feature-Policy HTTP header article contains implementation instructions.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope',
},
{
	title: 'HashChangeEvent',
	text: 'The fragment identifier is the part of the URL that follows (and includes) the # symbol.This interface also inherits the properties of its parent, Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent',
},
{
	title: 'Headers',
	text: 'A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs. You can add to this using methods like append() (see Examples.) In all methods of this interface, header names are matched by case-insensitive byte sequence.For security reasons, some headers can only be controlled by the user agent. These headers include the forbidden header names and forbidden response header names.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Headers',
},
{
	title: 'HID',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The HID interface provides methods for connecting to HID devices, listing attached HID devices and event handlers for connected HID devices.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HID',
},
{
	title: 'HIDConnectionEvent',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The HIDConnectionEvent interface of the WebHID API represents HID connection events, and is the event type passed to HID.onconnect and HID.ondisconnect when an input report is received.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HIDConnectionEvent',
},
{
	title: 'HIDDevice',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The HIDDevice interface of the WebHID API represents a HID Device. It provides properties for accessing information about the device, methods for opening and closing the connection, and the sending and receiving of reports.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HIDDevice',
},
{
	title: 'HIDInputReportEvent',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The HIDInputReportEvent interface of the WebHID API is passed to HIDDevice.inputreport_event when an input report is received from any associated HID device.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HIDInputReportEvent',
},
{
	title: 'History',
	text: 'The History interface doesn t inherit any property.Returns an Integer representing the number of elements in the session history, including the currently loaded page. For example, for a page loaded in a new tab this property returns 1.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/History',
},
{
	title: 'HkdfParams',
	text: 'A string. This should be set to HKDF.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HkdfParams',
},
{
	title: 'HmacImportParams',
	text: 'A string. This should be set to HMAC.A string representing the name of the digest function to use. The can take a value of SHA-256, SHA-384, or SHA-512.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HmacImportParams',
},
{
	title: 'HmacKeyGenParams',
	text: 'A string. This should be set to HMAC.A string representing the name of the digest function to use. You can pass any of SHA-1, SHA-256, SHA-384, or SHA-512 here.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HmacKeyGenParams',
},
{
	title: 'HMDVRDevice',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The HMDVRDevice interface of the WebVR API represents a head mounted display, providing access to information about each eye, and allowing us to modify the current field of view.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HMDVRDevice',
},
{
	title: 'HTMLAnchorElement',
	text: 'Inherits properties from its parent, HTMLElement.A string representing a single character that switches input focus to the hyperlink.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement',
},
{
	title: 'HTMLAreaElement',
	text: 'Inherits properties from its parent, HTMLElement.A string containing a single character that switches input focus to the control.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLAreaElement',
},
{
	title: 'HTMLAudioElement',
	text: 'This element is based on, and inherits properties and methods from, the HTMLMediaElement interface.Creates and returns a new HTMLAudioElement object, optionally starting the process of loading an audio file into it if the file URL is given.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement',
},
{
	title: 'HTMLBaseElement',
	text: 'Inherits properties from its parent, HTMLElement.A string that reflects the href HTML attribute, containing a base URL for relative URLs in the document.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLBaseElement',
},
{
	title: 'HTMLBaseFontElement',
	text: 'The HTMLBaseFontElement interface provides special properties (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating <basefont> elements.The <basefont> element has been deprecated in HTML4 and removed in HTML5. This latest specification requires that this element implements HTMLUnknownElement rather than HTMLBaseFontElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLBaseFontElement',
},
{
	title: 'HTMLBodyElement',
	text: 'Inherits properties from its parent, HTMLElement.A string that represents the color of active hyperlinks.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLBodyElement',
},
{
	title: 'HTMLBRElement',
	text: 'Inherits properties from its parent, HTMLElement.A string indicating the flow of text around floating objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLBRElement',
},
{
	title: 'HTMLButtonElement',
	text: 'Inherits properties from its parent, HTMLElement.A string indicating the single-character keyboard key to give access to the button.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement',
},
{
	title: 'HTMLCanvasElement',
	text: 'Inherits properties from its parent, HTMLElement.The height HTML attribute of the <canvas> element is a positive integer reflecting the number of logical pixels (or RGBA values) going down one column of the canvas. When the attribute is not specified, or if it is set to an invalid value, like a negative, the default value of 150 is used. If no [separate] CSS height is assigned to the <canvas>, then this value will also be used as the height of the canvas in the length-unit CSS Pixel.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement',
},
{
	title: 'HTMLCollection',
	text: 'Note: This interface is called HTMLCollection for historical reasons (before the modern DOM, collections implementing this interface could only have HTML elements as their items).An HTMLCollection in the HTML DOM is live; it is automatically updated when the underlying document is changed. For this reason it is a good idea to make a copy (eg. using Array.from) to iterate over if adding, moving, or removing nodes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection',
},
{
	title: 'HTMLContentElement',
	text: 'The HTMLContentElement interface represents a <content> HTML Element, which is used in Shadow DOM.This interface inherits the properties of HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLContentElement',
},
{
	title: 'HTMLDataElement',
	text: 'Inherits properties from its parent, HTMLElement.A string reflecting the value HTML attribute, containing a machine-readable form of the element s value.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement',
},
{
	title: 'HTMLDataListElement',
	text: 'Inherits properties from its parent, HTMLElementA HTMLCollection representing a collection of the contained option elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataListElement',
},
{
	title: 'HTMLDetailsElement',
	text: 'Inherits properties from its parent, HTMLElement.A boolean value reflecting the open HTML attribute, indicating whether or not the element s contents (not counting the <summary>) is to be shown to the user.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLDetailsElement',
},
{
	title: 'HTMLDialogElement',
	text: 'Inherits properties from its parent, HTMLElement.A boolean value reflecting the open HTML attribute, indicating whether the dialog is available for interaction.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement',
},
{
	title: 'HTMLDivElement',
	text: 'Inherits properties from its parent, HTMLElement.A string representing an enumerated property indicating alignment of the element s contents with respect to the surrounding context. The possible values are  left ,  right ,  justify , and  center .',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement',
},
{
	title: 'HTMLDListElement',
	text: 'Inherits properties from its parent, HTMLElement.A boolean value indicating that spacing between list items should be reduced.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLDListElement',
},
{
	title: 'HTMLDocument',
	text: '',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLDocument',
},
{
	title: 'HTMLElement',
	text: 'Inherits properties from its parent, Element, and implements those from GlobalEventHandlers.A string representing the access key assigned to the element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement',
},
{
	title: 'HTMLEmbedElement',
	text: 'Note: This topic describes the HTMLEmbedElement interface as defined in the standard. It does not address earlier, non-standardized version of the interface.Inherits properties from its parent, HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLEmbedElement',
},
{
	title: 'HTMLFieldSetElement',
	text: 'Inherits properties from its parent, HTMLElement.A boolean value reflecting the disabled HTML attribute, indicating whether the user can interact with the control.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement',
},
{
	title: 'HTMLFontElement',
	text: 'Implements the document object model (DOM) representation of the font element. The HTML Font Element <font> defines the font size, font face and color of text.Inherits properties from its parent, HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLFontElement',
},
{
	title: 'HTMLFormControlsCollection',
	text: 'It represents the lists returned by the HTMLFormElement interface s elements property and the HTMLFieldSetElement interface s elements property.This interface replaces one method from HTMLCollection, on which it is based.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection',
},
{
	title: 'HTMLFormElement',
	text: 'This interface also inherits properties from its parent, HTMLElement.A HTMLFormControlsCollection holding all form controls belonging to this form element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement',
},
{
	title: 'HTMLFrameSetElement',
	text: 'The HTMLFrameSetElement interface provides special properties (beyond those of the regular HTMLElement interface they also inherit) for manipulating <frameset> elements.Inherits properties from its parent, HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLFrameSetElement',
},
{
	title: 'HTMLHeadElement',
	text: 'Inherits properties from its parent, HTMLElement.A string representing the URIs of one or more metadata profiles (white space separated).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadElement',
},
{
	title: 'HTMLHeadingElement',
	text: 'Inherits properties from its parent, HTMLElement.A string representing an enumerated attribute indicating alignment of the heading with respect to the surrounding context. The possible values are  left ,  right ,  justify , and  center .',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement',
},
{
	title: 'HTMLHRElement',
	text: 'Inherits properties from its parent, HTMLElement.A string, an enumerated attribute indicating alignment of the rule with respect to the surrounding context.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLHRElement',
},
{
	title: 'HTMLHtmlElement',
	text: 'You can retrieve the HTMLHtmlElement object for a given document by reading the value of the document.documentElement property.Inherits properties from its parent, HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLHtmlElement',
},
{
	title: 'HTMLIFrameElement',
	text: 'Inherits properties from its parent, HTMLElement.A string that specifies the alignment of the frame with respect to the surrounding context.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement',
},
{
	title: 'HTMLImageElement',
	text: 'The Image() constructor creates and returns a new HTMLImageElement object representing an HTML <img> element which is not attached to any DOM tree. It accepts optional width and height parameters. When called without parameters, new Image() is equivalent to calling document.createElement( img ).Inherits properties from its parent, HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement',
},
{
	title: 'HTMLInputElement',
	text: 'Some properties only apply to input element types that support the corresponding attributes.string: Represents the alignment of the element. Use CSS instead.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement',
},
{
	title: 'HTMLKeygenElement',
	text: 'Note: This page describes the Keygen Element interface as specified, not as currently implemented by Gecko. See bug 101019 for details and status.The <keygen> elements expose the HTMLKeygenElement interface, which provides special properties and methods (beyond the regular element object interface they also have available to them by inheritance) for manipulating the layout and presentation of keygen elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLKeygenElement',
},
{
	title: 'HTMLLabelElement',
	text: 'Inherits properties from its parent, HTMLElement.A HTMLElement representing the control with which the label is associated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement',
},
{
	title: 'HTMLLegendElement',
	text: 'Inherits properties from its parent, HTMLElement.A HTMLFormElement representing the form that this legend belongs to. If the legend has a fieldset element as its parent, then this attribute returns the same value as the form attribute on the parent fieldset element. Otherwise, it returns null.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLLegendElement',
},
{
	title: 'HTMLLIElement',
	text: 'Inherits properties from its parent, HTMLElement.A string representing the type of the bullets,  disc ,  square  or  circle . As the standard way of defining the list type is via the CSS list-style-type property, use the CSSOM methods to set it via a script.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement',
},
{
	title: 'HTMLLinkElement',
	text: 'Inherits properties from its parent, HTMLElement.A string representing the type of content being loaded by the HTML link.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement',
},
{
	title: 'HTMLMapElement',
	text: 'Inherits properties from its parent, HTMLElement.A string representing the <map> element for referencing it other context. If the id attribute is set, this must have the same value; and it cannot be null or empty.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement',
},
{
	title: 'HTMLMarqueeElement',
	text: 'The HTMLMarqueeElement interface provides methods to manipulate <marquee> elements.It inherits properties and methods from the HTMLElement interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMarqueeElement',
},
{
	title: 'HTMLMediaElement',
	text: 'The HTMLVideoElement and HTMLAudioElement elements both inherit this interface.This interface also inherits properties from its ancestors HTMLElement, Element, Node, and EventTarget.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement',
},
{
	title: 'HTMLMenuElement',
	text: 'The HTMLMenuElement interface provides special properties (beyond those defined on the regular HTMLElement interface it also has available to it by inheritance) for manipulating <menu> elements.Returns a newly constructed HTMLMenuElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuElement',
},
{
	title: 'HTMLMenuItemElement',
	text: 'The HTMLMenuItemElement interface provides special properties (beyond those defined on the regular HTMLElement interface it also has available to it by inheritance) for manipulating <menuitem> elements.This feature is not part of any current specification. It is no longer on track to become a standard.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuItemElement',
},
{
	title: 'HTMLMetaElement',
	text: 'Inherits properties from its parent, HTMLElement.No specific method; inherits methods from its parent, HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement',
},
{
	title: 'HTMLMeterElement',
	text: 'Also inherits properties from its parent, HTMLElement.A double representing the value of the high boundary, reflecting the high attribute.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement',
},
{
	title: 'HTMLModElement',
	text: 'Inherits properties from its parent, HTMLElement.A string reflecting the cite HTML attribute, containing a URI of a resource explaining the change.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLModElement',
},
{
	title: 'HTMLObjectElement',
	text: 'Inherits properties from its parent, HTMLElement.A string representing an enumerated property indicating alignment of the element s contents with respect to the surrounding context. The possible values are  left ,  right ,  justify , and  center .',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement',
},
{
	title: 'HTMLOListElement',
	text: 'Inherits properties from its parent, HTMLElement.A boolean value reflecting the reversed and defining if the numbering is descending, that is its value is true, or ascending (false).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLOListElement',
},
{
	title: 'HTMLOptGroupElement',
	text: 'Inherits properties from its parent, HTMLElement.A boolean value representing whether or not the whole list of children <option> is disabled (true) or not (false).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptGroupElement',
},
{
	title: 'HTMLOptionElement',
	text: 'Returns a newly created HTMLOptionElement object. It has four parameters: the text to display, text, the value associated, value, the value of defaultSelected, and the value of selected. The last three parameters are optional.Inherits properties from its parent, HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement',
},
{
	title: 'HTMLOptionsCollection',
	text: 'unsigned long. As optionally allowed by the spec, this property isn t read-only. You can either remove options from the end by lowering the value, or add blank options at the end by raising the value. Mozilla allows this, while other implementations could potentially throw a DOMException.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionsCollection',
},
{
	title: 'HTMLOutputElement',
	text: 'This interface also inherits properties from its parent, HTMLElement.A string representing the default value of the element, initially the empty string.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement',
},
{
	title: 'HTMLParagraphElement',
	text: 'Inherits properties from its parent, HTMLElement.A string representing an enumerated property indicating alignment of the element s contents with respect to the surrounding context. The possible values are  left ,  right ,  justify , and  center .',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLParagraphElement',
},
{
	title: 'HTMLParamElement',
	text: 'The HTMLParamElement interface provides special properties (beyond those of the regular HTMLElement object interface it inherits) for manipulating <param> elements, representing a pair of a key and a value that acts as a parameter for an <object> element.Inherits properties from its parent, HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLParamElement',
},
{
	title: 'HTMLPictureElement',
	text: 'The HTMLPictureElement interface represents a <picture> HTML element. It doesn t implement specific properties or methods.No specific property, but inherits properties from its parent, HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLPictureElement',
},
{
	title: 'HTMLPreElement',
	text: 'Inherits properties from its parent, HTMLElement.A long value reflecting the obsolete width attribute, containing a fixed-size length for the <pre> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLPreElement',
},
{
	title: 'HTMLProgressElement',
	text: 'Inherits properties from its parent, HTMLElement.A double value reflecting the content attribute of the same name, limited to numbers greater than zero. Its default value is 1.0.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement',
},
{
	title: 'HTMLQuoteElement',
	text: 'Inherits properties from its parent, HTMLElement.A string reflecting the cite HTML attribute, containing a URL for the source of the quotation.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLQuoteElement',
},
{
	title: 'HTMLScriptElement',
	text: 'JavaScript files should be served with the application/javascript MIME type, but browsers are lenient and block them only if the script is served with an image type (image/*), video type (video/*), audio type (audio/*), or text/csv. If the script is blocked, its element receives an error event; otherwise, it receives a load event.Inherits properties from its parent, HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement',
},
{
	title: 'HTMLSelectElement',
	text: 'This interface inherits the properties of HTMLElement, and of Element and Node.A boolean value reflecting the autofocus HTML attribute, which indicates whether the control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement',
},
{
	title: 'HTMLShadowElement',
	text: 'The HTMLShadowElement interface represents a <shadow> HTML Element, which is used in Shadow DOM.This interface inherits the properties of HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLShadowElement',
},
{
	title: 'HTMLSlotElement',
	text: 'A string used to get and set the slot s name.Sets the manually assigned nodes for this slot to the given nodes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement',
},
{
	title: 'HTMLSourceElement',
	text: 'Inherits properties from its parent, HTMLElement.A string reflecting the media HTML attribute, containing the intended type of the media resource.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLSourceElement',
},
{
	title: 'HTMLSpanElement',
	text: 'This interface has no properties, but inherits properties from: HTMLElement.This interface has no methods, but inherits methods from: HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLSpanElement',
},
{
	title: 'HTMLStyleElement',
	text: 'This interface doesn t allow to manipulate the CSS it contains (in most case). To manipulate CSS, see Using dynamic styling information for an overview of the objects used to manipulate specified CSS properties using the DOM.Inherits properties from its parent, HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement',
},
{
	title: 'HTMLTableCaptionElement',
	text: 'Inherits properties from its parent, HTMLElement.A string which represents an enumerated attribute indicating alignment of the caption with respect to the table.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCaptionElement',
},
{
	title: 'HTMLTableCellElement',
	text: 'Inherits properties from its parent, HTMLElement.A string which can be used on <th> elements (not on <td>), specifying an alternative label for the header cell. This alternate label can be used in other contexts, such as when describing the headers that apply to a data cell. This is used to offer a shorter term for use by screen readers in particular, and is a valuable accessibility tool. Usually the value of abbr is an abbreviation or acronym, but can be any text that s appropriate contextually.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement',
},
{
	title: 'HTMLTableColElement',
	text: 'Inherits properties from its parent, HTMLElement.A string that indicates the horizontal alignment of the cell data in the column.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableColElement',
},
{
	title: 'HTMLTableElement',
	text: 'Inherits properties from its parent, HTMLElement.A HTMLTableCaptionElement representing the first <caption> that is a child of the element, or null if none is found. When set, if the object doesn t represent a <caption>, a DOMException with the HierarchyRequestError name is thrown. If a correct object is given, it is inserted in the tree as the first child of this element and the first <caption> that is a child of this element is removed from the tree, if any.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement',
},
{
	title: 'HTMLTableRowElement',
	text: 'Inherits properties from its parent, HTMLElement.Returns a live HTMLCollection containing the cells in the row. The HTMLCollection is live and is automatically updated when cells are added or removed.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement',
},
{
	title: 'HTMLTableSectionElement',
	text: 'Inherits properties from its parent, HTMLElement.A string containing an enumerated value reflecting the align attribute. It indicates the alignment of the element s contents with respect to the surrounding context. The possible values are  left ,  right , and  center .',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement',
},
{
	title: 'HTMLTemplateElement',
	text: 'This interface inherits the properties of HTMLElement.A read-only DocumentFragment which contains the DOM subtree representing the <template> element s template contents.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement',
},
{
	title: 'HTMLTextAreaElement',
	text: '\n    boolean: Returns whether the element is a\n    candidate for constraint validation. false if any\n    conditions bar it from constraint validation, including its\n    readOnly or disabled property is\n    true.\n    The two properties tabIndex and accessKey are inherited from HTMLElement from HTML5 on, but were defined on HTMLTextAreaElement in DOM Level 2 HTML and earlier specifications.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement',
},
{
	title: 'HTMLTimeElement',
	text: 'Inherits properties from its parent, HTMLElement.A string that reflects the datetime HTML attribute, containing a machine-readable form of the element s date and time value.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTimeElement',
},
{
	title: 'HTMLTitleElement',
	text: 'Inherits properties from its parent, HTMLElement.A string representing the text of the document s title, and only the text part. For example, consider this:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTitleElement',
},
{
	title: 'HTMLTrackElement',
	text: 'Inherits properties from its parent, HTMLElement.A string that reflects the kind HTML attribute, indicating how the text track is meant to be used. Possible values are: subtitles, captions, descriptions, chapters, or metadata.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement',
},
{
	title: 'HTMLUListElement',
	text: 'Inherits properties from its parent, HTMLElement.A string value reflecting the type and defining the kind of marker to be used to display. The values are browser dependent and have never been standardized.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLUListElement',
},
{
	title: 'HTMLUnknownElement',
	text: 'No specific property; inherits properties from its parent, HTMLElement.No specific method; inherits properties from its parent, HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLUnknownElement',
},
{
	title: 'HTMLVideoElement',
	text: 'The list of supported media formats varies from one browser to the other. You should either provide your video in a single format that all the relevant browsers supports, or provide multiple video sources in enough different formats that all the browsers you need to support are covered.Inherits properties from its ancestor interfaces, HTMLMediaElement, and HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement',
},
{
	title: 'IDBCursor',
	text: 'The IDBCursor interface of the IndexedDB API represents a cursor for traversing or iterating over multiple records in a database.The cursor has a source that indicates which index or object store it is iterating over. It has a position within the range, and moves in a direction that is increasing or decreasing in the order of record keys. The cursor enables an application to asynchronously process all the records in the cursor s range.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor',
},
{
	title: 'IDBCursorWithValue',
	text: 'The cursor has a source that indicates which index or object store it is iterating over. It has a position within the range, and moves in a direction that is increasing or decreasing in the order of record keys. The cursor enables an application to asynchronously process all the records in the cursor s range.You can have an unlimited number of cursors at the same time. You always get the same IDBCursorWithValue object representing a given cursor. Operations are performed on the underlying index or object store.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBCursorWithValue',
},
{
	title: 'IDBDatabase',
	text: 'Note: This feature is available in Web WorkersNote: Everything you do in IndexedDB always happens in the context of a transaction, representing interactions with data in the database. All objects in IndexedDB — including object stores, indexes, and cursors — are tied to a particular transaction. Thus, you cannot execute commands, access data, or open anything outside of a transaction.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase',
},
{
	title: 'IDBFactory',
	text: 'Note: This feature is available in Web WorkersThe current method to request opening a connection to a database.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory',
},
{
	title: 'IDBFileHandle',
	text: '\n  Note: The three non-standard interfaces IDBMutableFile, IDBFileHandle, and IDBFileRequest are disabled by default.\n  Consider using the File and Directory Entries API instead.\n  The IDBFileHandle interface provides tools to deal with a given file with all the necessary locks.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBFileHandle',
},
{
	title: 'IDBFileRequest',
	text: '\n  Note: The three non-standard interfaces IDBMutableFile, IDBFileHandle, and IDBFileRequest are disabled by default.\n  Consider using the File and Directory Entries API instead.\n  The IDBFileRequest interface provides some extra properties necessary for the IDBFileHandle objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBFileRequest',
},
{
	title: 'IDBIndex',
	text: 'You can retrieve records in an object store through the primary key or by using an index. An index lets you look up records in an object store using properties of the values in the object stores records other than the primary keyThe index is a persistent key-value storage where the value part of its records is the key part of a record in the referenced object store. The records in an index are automatically populated whenever records in the referenced object store are inserted, updated, or deleted. Each record in an index can point to only one record in its referenced object store, but several indexes can reference the same object store. When the object store changes, all indexes that refers to the object store are automatically updated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex',
},
{
	title: 'IDBKeyRange',
	text: 'A key range can be a single value or a range with upper and lower bounds or endpoints. If the key range has both upper and lower bounds, then it is bounded; if it has no bounds, it is unbounded. A bounded key range can either be open (the endpoints are excluded) or closed (the endpoints are included). To retrieve all keys within a certain range, you can use the following code constructs:A key is in a key range if the following conditions are true:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange',
},
{
	title: 'IDBLocaleAwareKeyRange',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The IDBLocaleAwareKeyRange interface of the IndexedDB API is a Firefox-specific version of IDBKeyRange — it functions in exactly the same fashion, and has the same properties and methods, but it is intended for use with IDBIndex objects when the original index had a locale value specified upon its creation (see createIndex() s optionalParameters) — that is, it has locale aware sorting enabled.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBLocaleAwareKeyRange',
},
{
	title: 'IDBMutableFile',
	text: '\n  Note: The three non-standard interfaces IDBMutableFile, IDBFileHandle, and IDBFileRequest are disabled by default.\n  Consider using the File and Directory Entries API instead.\n  The IDBMutableFile interface provides access in read or write mode to a file, dealing with all the necessary locks.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile',
},
{
	title: 'IDBObjectStore',
	text: 'Note: This feature is available in Web WorkersA list of the names of indexes on objects in this object store.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore',
},
{
	title: 'IDBOpenDBRequest',
	text: 'Note: This feature is available in Web WorkersAlso inherits methods from its parents IDBRequest and EventTarget.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest',
},
{
	title: 'IDBRequest',
	text: 'The request object does not initially contain any information about the result of the operation, but once information becomes available, an event is fired on the request, and the information becomes available through the properties of the IDBRequest instance.All asynchronous operations immediately return an IDBRequest instance. Each request has a readyState that is set to the  pending  state; this changes to  done  when the request is completed or fails. When the state is set to done, every request returns a result and an error, and an event is fired on the request. When the state is still pending, any attempt to access the result or error raises an InvalidStateError exception.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest',
},
{
	title: 'IDBTransaction',
	text: 'Note: This feature is available in Web WorkersTransactions are started when the transaction is created, not when the first request is placed; for example consider this:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction',
},
{
	title: 'IDBVersionChangeEvent',
	text: 'Note: This feature is available in Web WorkersCreates and returns a new IDBVersionChangeEvent object which is used to represent when a version of the database has changed.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeEvent',
},
{
	title: 'IdleDeadline',
	text: 'To learn more about how request callbacks work, see Collaborative Scheduling of Background Tasks.A Boolean whose value is true if the callback is being executed because the timeout specified when the idle callback was installed has expired.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IdleDeadline',
},
{
	title: 'IdleDetector',
	text: 'The IdleDetector interface of the Idle\nDetection API provides methods and events for detecting user activity on a device or screen.This interface requires a secure context.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IdleDetector',
},
{
	title: 'IIRFilterNode',
	text: 'Typically, it s best to use the BiquadFilterNode interface to implement higher-order filters. There are several reasons why:However, if you need to create an odd-ordered IIR filter, you ll need to use IIRFilterNode. You may also find this interface useful if you don t need automation, or for other reasons.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IIRFilterNode',
},
{
	title: 'ImageBitmap',
	text: 'ImageBitmap is a transferable object.An unsigned long representing the height, in CSS pixels, of the ImageData.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap',
},
{
	title: 'ImageBitmapRenderingContext',
	text: 'The ImageBitmapRenderingContext interface is a canvas rendering context that provides the functionality to replace the canvas s contents with the given ImageBitmap. Its context id (the first argument to HTMLCanvasElement.getContext() or OffscreenCanvas.getContext()) is  bitmaprenderer .This interface is available in both the window and the worker context.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmapRenderingContext',
},
{
	title: 'ImageCapture',
	text: 'Creates a new ImageCapture object which can be used to capture still frames (photos) from a given MediaStreamTrack which represents a video stream.Returns a reference to the MediaStreamTrack passed to the constructor.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture',
},
{
	title: 'ImageData',
	text: 'It is created using the ImageData() constructor or creator methods on the CanvasRenderingContext2D object associated with a canvas: createImageData() and getImageData(). It can also be used to set a part of the canvas by using putImageData().Note: This feature is available in Web Workers',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ImageData',
},
{
	title: 'ImageDecoder',
	text: 'The ImageDecoder interface of the WebCodecs API provides a way to unpack and decode encoded image data.Creates a new ImageDecoder object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ImageDecoder',
},
{
	title: 'ImageTrack',
	text: 'Returns a boolean indicating whether the track is animated and therefore has multiple frames.Returns an integer indicating the number of frames in the track.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ImageTrack',
},
{
	title: 'ImageTrackList',
	text: 'Returns a promise that resolves once the ImageTrackList has been populated with tracks.Returns an integer indicating the length of the ImageTrackList.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ImageTrackList',
},
{
	title: 'indexedDB',
	text: 'An IDBFactory object.\n  The following code creates a request for a database to be opened asynchronously, after\n  which the database is opened when the request s onsuccess handler is fired:\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/indexedDB',
},
{
	title: 'InputDeviceCapabilities',
	text: 'The InputDeviceCapabilities interface of the Input Device Capabilities API provides information about the physical device or a group of related devices responsible for generating input events. Events caused by the same physical input device get the same instance of this object, but the converse isn t true. For example, two mice with the same capabilities in a system may appear as a single InputDeviceCapabilities instance.In some instances, InputDeviceCapabilities represents the capabilities of logical devices rather than physical devices. This allows, for example, touchscreen keyboards and physical keyboards to be represented the same way when they produce the same input.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/InputDeviceCapabilities',
},
{
	title: 'InputDeviceInfo',
	text: 'InputDeviceInfo objects are returned by MediaDevices.enumerateDevices() if the returned device is an audio or video input device.Returns a MediaTrackCapabilities object describing the primary audio or video track of a device s MediaStream.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/InputDeviceInfo',
},
{
	title: 'InputEvent',
	text: 'Creates an InputEvent object.This interface inherits properties from its parents, UIEvent and Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/InputEvent',
},
{
	title: 'InstallEvent',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.The parameter passed into the oninstall handler, the InstallEvent interface represents an install action that is dispatched on the ServiceWorkerGlobalScope of a ServiceWorker. As a child of ExtendableEvent, it ensures that functional events such as FetchEvent are not dispatched during installation.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/InstallEvent',
},
{
	title: 'IntersectionObserver',
	text: 'When an IntersectionObserver is created, it s configured to watch for given ratios of visibility within the root. The configuration cannot be changed once the IntersectionObserver is created, so a given observer object is only useful for watching for specific changes in degree of visibility; however, you can watch multiple target elements with the same observer.Creates a new IntersectionObserver object which will execute a specified callback function when it detects that a target element s visibility has crossed one or more thresholds.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver',
},
{
	title: 'IntersectionObserverEntry',
	text: 'Instances of IntersectionObserverEntry are delivered to an IntersectionObserver callback in its entries parameter; otherwise, these objects can only be obtained by calling IntersectionObserver.takeRecords().Returns the bounds rectangle of the target element as a DOMRectReadOnly. The bounds are computed as described in the documentation for Element.getBoundingClientRect().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry',
},
{
	title: 'InterventionReportBody',
	text: 'The InterventionReportBody interface of the Reporting API represents the body of an intervention report.An intervention report is generated when usage of a feature in a web document has been blocked by the browser for reasons such as security, performance, or user annoyance. So for example, a script was been stopped because it was significantly slowing down the browser, or the browser s autoplay policy blocked audio from playing without a user gesture to trigger it.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/InterventionReportBody',
},
{
	title: 'isSecureContext',
	text: '\n  The global isSecureContext read-only property returns a boolean indicating whether\n  the current context is secure\n  (true) or not (false).\nBoolean true or false.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/isSecureContext',
},
{
	title: 'Keyboard',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.The Keyboard interface of the Keyboard API provides functions that retrieve keyboard layout maps and toggle capturing of key presses from the physical keyboard.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Keyboard',
},
{
	title: 'KeyboardEvent',
	text: 'Note: KeyboardEvent events just indicate what interaction the user had with a key on the keyboard at a low level, providing no contextual meaning to that interaction. When you need to handle text input, use the input event instead. Keyboard events may not be fired if the user is using an alternate means of entering text, such as a handwriting system on a tablet or graphics tablet.Creates a new KeyboardEvent object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent',
},
{
	title: 'KeyboardLayoutMap',
	text: 'The KeyboardLayoutMap interface of the Keyboard API is a map-like object with functions for retrieving the string associated with specific physical keys.A list of valid keys is found in the UI Events KeyboardEvent code Values specification.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap',
},
{
	title: 'KeyframeEffect',
	text: 'Returns a new KeyframeEffect object instance, and also allows you to clone an existing keyframe effect object instance.Gets and sets the element, or originating element of the pseudo-element, being animated by this object. This may be null for animations that do not target a specific element or pseudo-element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect',
},
{
	title: 'KHR_parallel_shader_compile',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.A GLenum.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/KHR_parallel_shader_compile',
},
{
	title: 'LargestContentfulPaint',
	text: 'This interface also inherits properties from PerformanceEntry.The element that is the current largest contentful paint.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/LargestContentfulPaint',
},
{
	title: 'LayoutShift',
	text: 'Returns the impact fraction (fraction of the viewport that was shifted) times the distance fraction (distance moved as a fraction of viewport).Returns true if there was a user input in the past 500 milliseconds.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift',
},
{
	title: 'LayoutShiftAttribution',
	text: 'Instances of LayoutShiftAttribution are returned in an array by calling LayoutShift.sources.Returns the element that has shifted (null if it has been removed).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/LayoutShiftAttribution',
},
{
	title: 'LinearAccelerationSensor',
	text: 'To use this sensor, the user must grant permission to the  accelerometer  device sensor through the Permissions API.If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The Feature-Policy HTTP header article contains implementation instructions.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor',
},
{
	title: 'Location',
	text: 'A static DOMStringList containing, in reverse order, the origins of all ancestor browsing contexts of the document associated with the given Location object.A stringifier that returns a string containing the entire URL. If changed, the associated document navigates to the new page. It can be set from a different origin than the associated document.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Location',
},
{
	title: 'Lock',
	text: '\n  The Lock interface of the Web Locks API provides the name and mode of a lock.\n  This may be a newly requested lock that is received in the callback to LockManager.request(), or a record of an active or queued lock returned by LockManager.query().\n\n  Returns the access mode passed to LockManager.request() when the lock was requested.\n  The mode is either  exclusive  (the default) or  shared .\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Lock',
},
{
	title: 'LockManager',
	text: 'The LockManager interface of the Web Locks API provides methods for requesting a new Lock object and querying for an existing Lock object. To get an instance of LockManager, call navigator.locks.Requests a Lock object with parameters specifying its name and characteristics.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/LockManager',
},
{
	title: 'Magnetometer',
	text: 'To use this sensor, the user must grant permission to the  magnetometer  device sensor through the Permissions API.If a feature policy blocks use of a feature, it s because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The Feature-Policy HTTP header article contains implementation instructions.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer',
},
{
	title: 'MathMLElement',
	text: 'Also inherits properties from: DocumentAndElementEventHandlers, Element, GlobalEventHandlersA StylePropertyMap representing the declarations of the element s style attribute.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MathMLElement',
},
{
	title: 'MediaCapabilities',
	text: 'The information is accessed through the mediaCapabilities property of the Navigator interface.When passed a valid media configuration, it returns a promise with information as to whether the media type is supported, and whether encoding such media would be smooth and power efficient.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaCapabilities',
},
{
	title: 'MediaDeviceInfo',
	text: 'The list of devices obtained by calling navigator.mediaDevices.enumerateDevices() is an array of MediaDeviceInfo objects, one per media device.Returns a string that is an identifier for the represented device that is persisted across sessions. It is un-guessable by other applications and unique to the origin of the calling application. It is reset when the user clears cookies (for Private Browsing, a different identifier is used that is not persisted across sessions).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo',
},
{
	title: 'MediaDevices',
	text: 'Inherits properties from its parent interface, EventTarget.Inherits methods from its parent interface, EventTarget.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices',
},
{
	title: 'MediaElementAudioSourceNode',
	text: 'A MediaElementAudioSourceNode has no inputs and exactly one output, and is created using the AudioContext.createMediaElementSource() method. The number of channels in the output equals the number of channels of the audio referenced by the HTMLMediaElement used in the creation of the node, or is 1 if the HTMLMediaElement has no audio.Creates a new MediaElementAudioSourceNode object instance.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaElementAudioSourceNode',
},
{
	title: 'MediaError',
	text: 'A MediaError object describes the error in general terms using a numeric code categorizing the kind of error, and a message, which provides specific diagnostics about what went wrong.This interface doesn t inherit any properties.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaError',
},
{
	title: 'MediaImage',
	text: 'Its contents can be displayed by the user agent in appropriate contexts like in a player interface to show the current playing video or audio track.The URL from which the user agent fetches the image s data.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaImage',
},
{
	title: 'MediaKeyMessageEvent',
	text: 'The MediaKeyMessageEvent interface of the EncryptedMediaExtensions API contains the content and related data when the content decryption module generates a message for the session.Creates a new instance of MediaKeyMessageEvent.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyMessageEvent',
},
{
	title: 'MediaKeys',
	text: 'The MediaKeys interface of EncryptedMediaExtensions API represents a set of keys that an associated HTMLMediaElement can use for decryption of media data during playback.None.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaKeys',
},
{
	title: 'MediaKeySession',
	text: 'Returns a Promise signaling when a MediaKeySession closes. This promise can only be fulfilled and is never rejected. Closing a session means that licenses and keys associated with it are no longer valid for decrypting media data.The time after which the keys in the current session can no longer be used to decrypt media data, or NaN if no such time exists. This value is determined by the CDM and measured in milliseconds since January 1, 1970, UTC. This value may change during a session lifetime, such as when an action triggers the start of a window.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession',
},
{
	title: 'MediaKeyStatusMap',
	text: 'The MediaKeyStatusMap interface of the EncryptedMediaExtensions API is a read-only map of media key statuses by key IDs.Returns the number of key/value pairs in the status map.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap',
},
{
	title: 'MediaKeySystemAccess',
	text: 'The MediaKeySystemAccess interface of the EncryptedMediaExtensions API provides access to a Key System for decryption and/or a content protection provider. You can request an instance of this object using the Navigator.requestMediaKeySystemAccess() method.Returns a string identifying the key system being used.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemAccess',
},
{
	title: 'MediaList',
	text: 'Note: MediaList is a live list; updating the list using properties or methods listed below will immediately update the behavior of the document.A stringifier that returns a string representing the MediaList as text, and also allows you to set a new MediaList.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaList',
},
{
	title: 'MediaMetadata',
	text: 'The MediaMetadata interface of the Media Session API allows a web page to provide rich media metadata for display in a platform UI.Creates a new MediaMetaData object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata',
},
{
	title: 'MediaQueryList',
	text: 'You can create a MediaQueryList by calling matchMedia() on the window object. The resulting object handles sending notifications to listeners when the media query state changes (i.e. when the media query test starts or stops evaluating to true).This is very useful for adaptive design, since this makes it possible to observe a document to detect when its media queries change, instead of polling the values periodically, and allows you to programmatically make changes to a document based on media query status.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList',
},
{
	title: 'MediaQueryListEvent',
	text: 'Creates a new MediaQueryListEvent instance.The MediaQueryListEvent interface inherits properties from its parent interface, Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent',
},
{
	title: 'MediaRecorder',
	text: 'Creates a new MediaRecorder object, given a MediaStream to record. Options are available to do things like set the container s MIME type (such as  video/webm  or  video/mp4 ) and the bit rates of the audio and video tracks or a single overall bit rate.Returns the MIME type that was selected as the recording container for the MediaRecorder object when it was created.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder',
},
{
	title: 'MediaRecorderErrorEvent',
	text: 'Inherits properties from its parent interface, Event.A DOMException containing information about the error that occurred. Read only.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorderErrorEvent',
},
{
	title: 'MediaSession',
	text: 'The MediaSession interface of the Media Session API allows a web page to provide custom behaviors for standard media playback interactions, and to report metadata that can be sent by the user agent to the device or operating system for presentation in standardized user interface elements.For example, a smartphone might have a standard panel in its lock screen that provides controls for media playback and information display. A browser on the device can use MediaSession to make browser playback controllable from that standard/global user interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaSession',
},
{
	title: 'MediaSource',
	text: 'The MediaSource interface of the Media Source Extensions API represents a source of media data for an HTMLMediaElement object. A MediaSource object can be attached to a HTMLMediaElement to be played in the user agent.Constructs and returns a new MediaSource object with no associated source buffers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaSource',
},
{
	title: 'MediaStream',
	text: 'You can obtain a MediaStream object either by using the constructor or by calling functions such as MediaDevices.getUserMedia(), MediaDevices.getDisplayMedia(), or HTMLCanvasElement.captureStream().Some user agents subclass this interface to provide more precise information or functionality, like in CanvasCaptureMediaStreamTrack.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStream',
},
{
	title: 'MediaStreamAudioDestinationNode',
	text: 'It is an AudioNode that acts as an audio destination, created using the AudioContext.createMediaStreamDestination() method.Creates a new MediaStreamAudioDestinationNode object instance.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode',
},
{
	title: 'MediaStreamAudioSourceNode',
	text: 'This media could be from a microphone (through getUserMedia()) or from a remote peer on a WebRTC call (using the RTCPeerConnection s audio tracks).A MediaStreamAudioSourceNode has no inputs and exactly one output, and is created using the AudioContext.createMediaStreamSource() method.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode',
},
{
	title: 'MediaStreamEvent',
	text: 'The MediaStreamEvent interface represents events that occurs in relation to a MediaStream. Two events of this type can be thrown: addstream and removestream.A MediaStreamEvent being an Event, this event also implements these properties.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamEvent',
},
{
	title: 'MediaStreamTrack',
	text: 'In addition to the properties listed below, MediaStreamTrack has constrainable properties which can be set using applyConstraints() and accessed using getConstraints() and getSettings(). See Capabilities, constraints, and settings to learn how to correctly work with constrainable properties. Not doing so correctly will result in your code being unreliable.A string that may be used by the web application to provide a hint as to what type of content the track contains to guide how it should be treated by API consumers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack',
},
{
	title: 'MediaStreamTrackAudioSourceNode',
	text: 'The audio itself might be input from a microphone or other audio sampling device, or might be received through a RTCPeerConnection, among other possible options.A MediaStreamTrackAudioSourceNode has no inputs and exactly one output, and is created using the AudioContext.createMediaStreamTrackSource() method. This interface is similar to MediaStreamAudioSourceNode, except it lets you specifically state the track to use, rather than assuming the first audio track on a stream.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackAudioSourceNode',
},
{
	title: 'MediaStreamTrackEvent',
	text: 'The events based on this interface are addtrack and removetrack.Also inherits properties from its parent interface, Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackEvent',
},
{
	title: 'MediaStreamTrackGenerator',
	text: 'Creates a new MediaStreamTrackGenerator object which accepts either VideoFrame or AudioFrame objects.This interface also inherits properties from MediaStreamTrack.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackGenerator',
},
{
	title: 'MediaStreamTrackProcessor',
	text: 'Creates a new MediaStreamTrackProcessor object.Returns a ReadableStream.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackProcessor',
},
{
	title: 'MediaTrackConstraints',
	text: 'The following types are used to specify a constraint for a property. They allow you to specify one or more exact values from which one must be the parameter s value, or a set of ideal values which should be used if possible. You can also specify a single value (or an array of values) which the user agent will do its best to match once all more stringent constraints have been applied.To learn more about how constraints work, see Capabilities, constraints, and settings.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints',
},
{
	title: 'MediaTrackSettings',
	text: 'To learn more about how constraints and settings work, see Capabilities, constraints, and settings.Some or all of the following will be included in the object, either because it s not supported by the browser or because it s not available due to context. For example, because RTP doesn t provide some of these values during negotiation of a WebRTC connection, a track associated with a RTCPeerConnection will not include certain values, such as facingMode or groupId.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings',
},
{
	title: 'MediaTrackSupportedConstraints',
	text: 'Because of the way interface definitions in WebIDL work, if a constraint is requested but not supported, no error will occur. Instead, the specified constraints will be applied, with any unrecognized constraints stripped from the request.That can lead to confusing and hard to debug errors, so be sure to use getSupportedConstraints() to retrieve this information before attempting to establish constraints if you need to know the difference between silently ignoring a constraint and a constraint being accepted.An actual constraint set is described using an object based on the MediaTrackConstraints dictionary.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints',
},
{
	title: 'MerchantValidationEvent',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent',
},
{
	title: 'MessageChannel',
	text: 'Note: This feature is available in Web WorkersReturns port1 of the channel.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel',
},
{
	title: 'MessageEvent',
	text: 'This is used to represent messages in:The action triggered by this event is defined in a function set as the event handler for the relevant message event (e.g. using an onmessage handler as listed above).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent',
},
{
	title: 'MessagePort',
	text: 'MessagePort is a transferable object.Note: This feature is available in Web Workers',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MessagePort',
},
{
	title: 'Metadata',
	text: 'The Metadata interface contains information about a file system entry. This metadata includes the file s size and modification date and time.Note: This interface isn t available through the global scope; instead, you obtain a Metadata object describing a FileSystemEntry using the method FileSystemEntry.getMetadata().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Metadata',
},
{
	title: 'MIDIAccess',
	text: 'The MIDIAccess interface of the Web MIDI API provides methods for listing MIDI input and output devices, and obtaining access to those devices.Returns an instance of MIDIInputMap which provides access to any available MIDI input ports.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess',
},
{
	title: 'MIDIConnectionEvent',
	text: 'The MIDIConnectionEvent interface of the Web MIDI API is the event passed to the statechange event of the MIDIAccess interface and the statechange event of the MIDIPort interface. This occurs any time a new port becomes available, or when a previously available port becomes unavailable. For example, this event is fired whenever a MIDI device is either plugged in to or unplugged from a computer.Creates a new MIDIConnectionEvent object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MIDIConnectionEvent',
},
{
	title: 'MIDIInput',
	text: 'The MIDIInput interface of the Web MIDI API receives messages from a MIDI input port.This interface doesn t implement any specific properties, but inherits properties from MIDIPort.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MIDIInput',
},
{
	title: 'MIDIInputMap',
	text: 'The MIDIInputMap read-only interface of the Web MIDI API provides a Map-like interface to the currently available MIDI input ports. Though it works generally like a map, because it is read-only it does not contain clear(), delete(), or set() functions.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MIDIInputMap',
},
{
	title: 'MIDIMessageEvent',
	text: 'The MIDIMessageEvent interface of the Web MIDI API represents the event passed to the midimessage event of the MIDIInput interface. A midimessage event is fired every time a MIDI message is sent from a device represented by a MIDIInput, for example when a MIDI keyboard key is pressed, a knob is tweaked, or a slider is moved.Creates a new MIDIMessageEvent object instance.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MIDIMessageEvent',
},
{
	title: 'MIDIOutput',
	text: 'The MIDIOutput interface of the Web MIDI API provides methods to add messages to the queue of an output device, and to clear the queue of messages.This interface doesn t implement any specific properties, but inherits properties from MIDIPort.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MIDIOutput',
},
{
	title: 'MIDIOutputMap',
	text: 'The MIDIOutputMap read-only interface of the Web MIDI API provides a Map-like interface to the currently available MIDI output ports. Although it works like a map, because it is read-only, it does not contain clear(), delete(), or set() functions.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MIDIOutputMap',
},
{
	title: 'MIDIPort',
	text: 'The MIDIPort interface of the Web MIDI API represents a MIDI input or output port.A MIDIPort instance is created when a new MIDI device is connected. Therefore it has no constructor.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MIDIPort',
},
{
	title: 'MimeType',
	text: 'The MimeType interface provides contains information about a MIME type associated with a particular plugin. Navigator.mimeTypes returns an array of this object.Returns the MIME type of the associated plugin.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MimeType',
},
{
	title: 'MimeTypeArray',
	text: 'The MimeTypeArray interface returns an array of MimeType instances, each of which contains information about a supported browser plugins. This object is returned by Navigator.mimeTypes.The number of items in the array.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MimeTypeArray',
},
{
	title: 'MouseEvent',
	text: '\n  MouseEvent derives from UIEvent, which in turn derives from Event.\n  Though the MouseEvent.initMouseEvent() method is kept for backward compatibility, creating of a MouseEvent object should be done using the MouseEvent() constructor.\nSeveral more specific events are based on MouseEvent, including WheelEvent, DragEvent, and PointerEvent.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent',
},
{
	title: 'MouseScrollEvent',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.The MouseScrollEvent interface represents events that occur due to the user moving a mouse wheel or similar input device.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MouseScrollEvent',
},
{
	title: 'MSGestureEvent',
	text: 'The MSGestureEvent is a proprietary interface specific to Internet Explorer and Microsoft Edge which represents events that occur due to touch gestures. Events using this interface include MSGestureStart, MSGestureEnd, MSGestureTap, MSGestureHold, MSGestureChange, and MSInertiaStart.MSGestureEvent derives from UIEvent, which in turn derives from Event. Though the MSGestureEvent.initGestureEvent() method is kept for backward compatibility, the creation of an MSGestureEvent object should be done using the MSGestureEvent() constructor.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MSGestureEvent',
},
{
	title: 'MSGraphicsTrust',
	text: '\n  The msGraphicsTrust() interface represents an object\n  that provides properties for info on protected video playback.\nThis proprietary method is specific to Internet Explorer and Microsoft Edge.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MSGraphicsTrust',
},
{
	title: 'MSManipulationEvent',
	text: 'MSManipulationEvent provides contextual information when contact is made to the screen and an element is manipulated.This proprietary method is specific to Internet Explorer.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MSManipulationEvent',
},
{
	title: 'MSSiteModeEvent',
	text: 'MSSiteModeEvent provides event properties that are specific to pinned site events.This proprietary method is specific to Internet Explorer and Microsoft Edge.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MSSiteModeEvent',
},
{
	title: 'msWriteProfilerMark',
	text: 'The msWriteProfilerMark method writes a profiling event.This proprietary method is specific to Internet Explorer and Microsoft Edge.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/msWriteProfilerMark',
},
{
	title: 'MutationEvent',
	text: 'Note: Mutation Events (W3C DOM Level 3 Events) have been deprecated in favor of Mutation Observers (W3C DOM4).The MutationEvent interface provides event properties that are specific to modifications to the Document Object Model (DOM) hierarchy and nodes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MutationEvent',
},
{
	title: 'MutationObserver',
	text: 'Creates and returns a new MutationObserver which will invoke a specified callback function when DOM changes occur.Stops the MutationObserver instance from receiving further notifications until and unless observe() is called again.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver',
},
{
	title: 'MutationRecord',
	text: '\n    The return value depends on the\n    MutationRecord.type.For\n    attributes, it is the value of the changed attribute\n    before the change.For characterData, it is the data\n    of the changed node before the change.For\n    childList, it is null.\n    \n    Note: For this to work as expected, attributeOldValue\n    or characterDataOldValue must be set to\n    true in the corresponding parameter of the MutationObserver\n    observe\n    method\n    ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord',
},
{
	title: 'NamedNodeMap',
	text: 'A NamedNodeMap object is live and will thus be auto-updated if changes are made to its contents internally or elsewhere.Note: Although called NamedNodeMap, this interface doesn t deal with Node objects but with Attr objects, which are a specialized class of Node objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap',
},
{
	title: 'NavigationPreloadManager',
	text: 'The NavigationPreloadManager interface of the Service Worker API provides methods for managing the preloading of resources in parallel with service worker bootup.\n  If supported, an object of this type is returned by ServiceWorkerRegistration.navigationPreload.\n  The result of a preload fetch request is waited on using the promise returned by FetchEvent.preloadResponse.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NavigationPreloadManager',
},
{
	title: 'Navigator',
	text: 'A Navigator object can be retrieved using the read-only window.navigator property.Doesn t inherit any properties.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Navigator',
},
{
	title: 'NavigatorUAData',
	text: 'An instance of this object is returned by calling Navigator.userAgentData. Therefore, this interface has no constructor.Note: The terms high entropy and low entropy refer to the amount of information these values reveal about the browser. The values returned as properties are deemed low entropy, and unlikely to identify a user. The values returned by NavigatorUAData.getHighEntropyValues() could potentially reveal more information. These values are therefore retrieved via a Promise, allowing time for the browser to request user permission, or make other checks.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData',
},
{
	title: 'NDEFMessage',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The NDEFMessage interface of the Web NFC API represents the content of an NDEF message that has been read from or could be written to an NFC tag. An instance is acquired by calling the NDEFMessage() constructor or from the NDEFReadingEvent.message property, which is passed to the reading event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NDEFMessage',
},
{
	title: 'NDEFReader',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The NDEFReader interface of the Web NFC API is used to read from and write data to compatible NFC devices, e.g. NFC tags supporting NDEF, when these devices are within the reader s magnetic induction field.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NDEFReader',
},
{
	title: 'NDEFReadingEvent',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NDEFReadingEvent',
},
{
	title: 'NDEFRecord',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The NDEFRecord interface of the Web NFC API provides data that can be read from, or written to, compatible NFC devices, e.g. NFC tags supporting NDEF.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NDEFRecord',
},
{
	title: 'NetworkInformation',
	text: '\n  The NetworkInformation interface of the Network Information API provides information about the connection a device is using to communicate with the network and provides a means for scripts to be notified if the connection type changes.\n  The NetworkInformation interface cannot be instantiated. It is instead accessed through the connection property of the Navigator interface.\nNote: This feature is available in Web Workers',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation',
},
{
	title: 'Node',
	text: '\n  In addition, every kind of DOM node is represented by an interface based on\n  Node. These include Attr, CharacterData\n  (which Text, Comment, CDATASection and\n  ProcessingInstruction are all based on), and DocumentType.\n\n  In some cases, a particular feature of the base Node interface may not\n  apply to one of its child interfaces; in that case, the inheriting node may\n  return null or throw an exception, depending on circumstances. For example,\n  attempting to add children to a node type that cannot have children will throw an\n  exception.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Node',
},
{
	title: 'NodeIterator',
	text: '\n  A NodeIterator can be created using the\n  Document.createNodeIterator() method, as follows:\nThis interface doesn t inherit any property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator',
},
{
	title: 'NodeList',
	text: 'Note: Although NodeList is not an Array, it is possible to iterate over it with forEach(). It can also be converted to a real Array using Array.from().However, some older browsers have not implemented NodeList.forEach() nor Array.from(). This can be circumvented by using Array.prototype.forEach() — see this document s Example.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NodeList',
},
{
	title: 'Notification',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.The Notification interface of the Notifications API is used to configure and display desktop notifications to the user.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Notification',
},
{
	title: 'NotificationEvent',
	text: 'This interface inherits from the ExtendableEvent interface.Creates a new NotificationEvent object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NotificationEvent',
},
{
	title: 'NotifyAudioAvailableEvent',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.The non-standard, obsolete, NotifyAudioAvailableEvent interface defines the event sent to audio elements when the audio buffer is full.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NotifyAudioAvailableEvent',
},
{
	title: 'OES_element_index_uint',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is only available to WebGL1 contexts. In WebGL2, the functionality of this extension is available on the WebGL2 context by default.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OES_element_index_uint',
},
{
	title: 'OES_fbo_render_mipmap',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.\n  Note: This extension is only available to WebGL 1.\n  In WebGL2, the functionality of this extension is available in the WebGL 2 context by default.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OES_fbo_render_mipmap',
},
{
	title: 'OES_standard_derivatives',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is only available to WebGL1 contexts. In WebGL2, the functionality of this extension is available on the WebGL2 context by default. In WebGL 2, the constant is available as gl.FRAGMENT_SHADER_DERIVATIVE_HINT and it requires GLSL #version 300 es.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OES_standard_derivatives',
},
{
	title: 'OES_texture_float',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is only available to WebGL1 contexts. In WebGL2, the functionality of this extension is available on the WebGL2 context by default.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OES_texture_float',
},
{
	title: 'OES_texture_float_linear',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is available to both, WebGL1 and WebGL2 contexts.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OES_texture_float_linear',
},
{
	title: 'OES_texture_half_float',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is only available to WebGL1 contexts. In WebGL2, the functionality of this extension is available on the WebGL2 context by default. The constant in WebGL2 is gl.HALF_FLOAT.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OES_texture_half_float',
},
{
	title: 'OES_texture_half_float_linear',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is available to both, WebGL1 and WebGL2 contexts.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OES_texture_half_float_linear',
},
{
	title: 'OES_vertex_array_object',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is only available to WebGL1 contexts. In WebGL2, the functionality of this extension is available on the WebGL2 context by default and the constants and methods are available without the  OES  suffix.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OES_vertex_array_object',
},
{
	title: 'OfflineAudioCompletionEvent',
	text: 'Note: This interface is marked as deprecated; it is still supported for legacy reasons, but it will soon be superseded when the promise version of OfflineAudioContext.startRendering is supported in browsers, which will no longer need it.Creates a new OfflineAudioCompletionEvent object instance.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioCompletionEvent',
},
{
	title: 'OfflineAudioContext',
	text: 'Creates a new OfflineAudioContext instance.Also inherits properties from its parent interface, BaseAudioContext.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext',
},
{
	title: 'OffscreenCanvas',
	text: 'The OffscreenCanvas interface provides a canvas that can be rendered off screen. It is available in both the window and worker contexts.OffscreenCanvas is a transferable object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas',
},
{
	title: 'OrientationSensor',
	text: 'If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The Feature-Policy HTTP header article contains implementation instructions.Below is a list of interfaces based on the OrientationSensor interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OrientationSensor',
},
{
	title: 'origin',
	text: '\n  The global origin read-only property returns the origin of the global\n  scope, serialized as a string.\nA string.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/origin',
},
{
	title: 'OscillatorNode',
	text: 'Creates a new instance of an OscillatorNode object, optionally providing an object specifying default values for the node s properties. As an alternative, you can use the BaseAudioContext.createOscillator() factory method; see Creating an AudioNode.Inherits properties from its parent, AudioScheduledSourceNode, and adds the following properties:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode',
},
{
	title: 'OTPCredential',
	text: 'The OTPCredential interface of the WebOTP API contains the attributes that are returned when a new one-time password is retrieved.This interface also inherits properties from Credential.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OTPCredential',
},
{
	title: 'OverconstrainedError',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The OverconstrainedError interface of the Media Capture and Streams API indicates that the set of desired capabilities for the current MediaStreamTrack cannot currently be met. When this event is thrown on a MediaStreamTrack, it is muted until either the current constraints can be established or until satisfiable constraints are applied.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError',
},
{
	title: 'OVR_multiview2',
	text: 'For more information, see also:WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OVR_multiview2',
},
{
	title: 'PageTransitionEvent',
	text: 'This interface also inherits properties from its parent, Event.Indicates if the document is loading from a cache.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PageTransitionEvent',
},
{
	title: 'PaintWorklet',
	text: 'The PaintWorklet interface of the CSS Painting API programmatically generates an image where a CSS property expects a file. Access this interface through CSS.paintWorklet.To avoid leaking visited links, this feature is currently disabled in Chrome-based browsers for <a> elements with an href attribute, and for children of such elements. For details, see the following:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet',
},
{
	title: 'PannerNode',
	text: 'A PannerNode always has exactly one input and one output: the input can be mono or stereo but the output is always stereo (2 channels); you can t have panning effects without at least two audio channels!\n  \n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PannerNode',
},
{
	title: 'PasswordCredential',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.The interface of the Credential Management API provides information about a username/password pair. In supporting browsers an instance of this class may be passed in the credential member of the init object for global fetch().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential',
},
{
	title: 'Path2D',
	text: 'Path2D constructor. Creates a new Path2D object.Adds a path to the current path.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Path2D',
},
{
	title: 'PaymentAddress',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress',
},
{
	title: 'PaymentMethodChangeEvent',
	text: 'The PaymentMethodChangeEvent interface of the Payment Request API describes the paymentmethodchange event which is fired by some payment handlers when the user switches payment instruments (e.g., a user selects a  store  card to make a purchase while using Apple Pay).Creates and returns a new PaymentMethodChangeEvent object, optionally initialized with values taken from a given PaymentMethodChangeEventInit dictionary.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent',
},
{
	title: 'PaymentRequest',
	text: 'The Payment Request API s PaymentRequest interface is the primary access point into the API, and lets web content and apps accept payments from the end user on behalf of the operator of the site or the publisher of the app.Creates a new PaymentRequest object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest',
},
{
	title: 'PaymentRequestEvent',
	text: 'The PaymentRequestEvent interface of the Payment Request API is the object passed to a payment handler when a PaymentRequest is made.Creates a new PaymentRequestEvent object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent',
},
{
	title: 'PaymentRequestUpdateEvent',
	text: 'The PaymentRequestUpdateEvent interface is used for events sent to a PaymentRequest instance when changes are made to shipping-related information for a pending PaymentRequest. Those events are:Dispatched whenever the user changes their shipping address.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestUpdateEvent',
},
{
	title: 'PaymentResponse',
	text: 'The PaymentResponse interface of the Payment Request API is returned after a user selects a payment method and approves a payment request.Returns a JSON-serializable object that provides a payment method specific message used by the merchant to process the transaction and determine successful fund transfer. The contents of the object depend on the payment method being used. Developers need to consult whomever controls the URL for the expected shape of the details object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse',
},
{
	title: 'Pbkdf2Params',
	text: 'A string. This should be set to PBKDF2.A string representing the digest algorithm to use. This may be one of:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Pbkdf2Params',
},
{
	title: 'Performance',
	text: 'An object of this type can be obtained by calling the window.performance read-only attribute.Note: This interface and its members are available in Web Workers via WorkerGlobalScope.performance , except where indicated below. Also, note that performance markers and measures are per context. If you create a mark on the main thread (or other worker), you cannot see it in a worker thread, and vice versa.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance',
},
{
	title: 'PerformanceElementTiming',
	text: 'An Element representing the element we are returning information about.A string which is the id of the element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceElementTiming',
},
{
	title: 'PerformanceEntry',
	text: 'PerformanceEntry instances will always be one of the following subtypes:Note: This feature is available in Web Workers',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry',
},
{
	title: 'PerformanceEventTiming',
	text: 'Returns the time at which event dispatch started.Returns the time at which the event dispatch ended.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEventTiming',
},
{
	title: 'PerformanceLongTaskTiming',
	text: 'The PerformanceLongTaskTiming interface of the Long Tasks API reports instances of long tasks.Returns a sequence of TaskAttributionTiming instances.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming',
},
{
	title: 'PerformanceMark',
	text: 'Note: This feature is available in Web WorkersThis interface has no properties but it extends the following PerformanceEntry properties by qualifying/constraining the properties as follows:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceMark',
},
{
	title: 'PerformanceMeasure',
	text: 'Note: This feature is available in Web WorkersThis interface defines:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceMeasure',
},
{
	title: 'PerformanceNavigation',
	text: 'The legacy PerformanceNavigation interface represents information about how the navigation to the current document was done.\n  Warning: This interface is deprecated in the Navigation Timing Level 2 specification.\n  Please use the PerformanceNavigationTiming interface instead.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation',
},
{
	title: 'PerformanceNavigationTiming',
	text: 'The PerformanceNavigationTiming interface provides methods and properties to store and retrieve metrics regarding the browser s document navigation events. For example, this interface can be used to determine how much time it takes to load or unload a document.This interface extends the following PerformanceEntry properties for navigation performance entry types by qualifying and constraining them as follows:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming',
},
{
	title: 'PerformanceObserver',
	text: 'Note: This feature is available in Web WorkersCreates and returns a new PerformanceObserver object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver',
},
{
	title: 'PerformanceObserverEntryList',
	text: 'Note: this interface is exposed to Window and Worker.Returns a list of explicitly observed PerformanceEntry objects based on the given filter.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserverEntryList',
},
{
	title: 'PerformancePaintTiming',
	text: 'An application can register a PerformanceObserver for  paint  performance entry types and the observer can retrieve the times that paint events occur. Use this information to help identify areas that take too long to provide a good user experience.This interface has no properties but it extends the following PerformanceEntry properties (for  paint  performance entry types) by qualifying and constraining the properties as follows:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformancePaintTiming',
},
{
	title: 'PerformanceResourceTiming',
	text: 'The interface s properties create a resource loading timeline with high-resolution timestamps for network events such as redirect start and end times, fetch start, DNS lookup start and end times, response start and end times, etc.. Additionally, the interface extends PerformanceEntry with other properties which provide data about the size of the fetched resource as well as the type of resource that initiated the fetch.Note: This feature is available in Web Workers',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming',
},
{
	title: 'PerformanceServerTiming',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.The PerformanceServerTiming interface surfaces server metrics that are sent with the response in the Server-Timing HTTP header.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceServerTiming',
},
{
	title: 'PerformanceTiming',
	text: 'Warning: This interface is deprecated in the Navigation Timing Level 2 specification. Please use the PerformanceNavigationTiming interface instead.The PerformanceTiming interface is a legacy interface kept for backwards compatibility and contains properties that offer performance timing information for various events which occur during the loading and use of the current page. You get a PerformanceTiming object describing your page using the window.performance.timing property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming',
},
{
	title: 'PeriodicSyncEvent',
	text: 'An instance of this event is passed to the periodicsync handler. This happens periodically, at an interval greater than or equal to that set in the PeriodicSyncManager.register() method. Other implementation-specific factors such as the user s engagement with the site decide the actual interval.Creates a new PeriodicSyncEvent object. This constructor is not typically used. The browser creates these objects itself and provides them to onperiodicsync callback.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PeriodicSyncEvent',
},
{
	title: 'PeriodicSyncManager',
	text: 'None.Registers a periodic sync request with the browser with the specified tag and options. Returns a Promise that resolves when the registration completes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PeriodicSyncManager',
},
{
	title: 'PeriodicWave',
	text: 'PeriodicWave has no inputs or outputs; it is used to define custom oscillators when calling OscillatorNode.setPeriodicWave(). The PeriodicWave itself is created/returned by BaseAudioContext.createPeriodicWave.Creates a new PeriodicWave object instance using the default values for all properties. If you wish to establish custom property values at the outset, use the BaseAudioContext.createPeriodicWave factory method instead.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PeriodicWave',
},
{
	title: 'Permissions',
	text: 'Returns the user permission status for a given API.Requests permission to use a given API. This is not currently supported in any browser.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Permissions',
},
{
	title: 'PermissionStatus',
	text: 'The PermissionStatus interface of the Permissions API provides the state of an object and an event handler for monitoring changes to said state.Returns the name of a requested permission, identical to the name passed to Permissions.query.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PermissionStatus',
},
{
	title: 'PictureInPictureEvent',
	text: 'Creates a PictureInPictureEvent event with the given parameters.This interface also inherits properties from its parent Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PictureInPictureEvent',
},
{
	title: 'PictureInPictureWindow',
	text: 'An object with this interface is obtained using the HTMLVideoElement.requestPictureInPicture() promise return value.The PictureInPictureWindow interface doesn t inherit any properties.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PictureInPictureWindow',
},
{
	title: 'Plugin',
	text: 'The Plugin interface provides information about a browser plugin.Note: Own properties of Plugin objects are no longer enumerable in the latest browser versions.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Plugin',
},
{
	title: 'PluginArray',
	text: 'The PluginArray interface is used to store a list of Plugin objects describing the available plugins; it s returned by the navigator.plugins property. The PluginArray is not a JavaScript array, but has the length property and supports accessing individual items using bracket notation (plugins[2]), as well as via item(index) and namedItem( name ) methods.Note: Own properties of PluginArray objects are no longer enumerable in the latest browser versions.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PluginArray',
},
{
	title: 'Point',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.Point is an interface which represents a point in 2-dimensional space. It is non-standard, not broadly compatible, and should not be used.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebKitPoint',
},
{
	title: 'PointerEvent',
	text: 'A pointer is a hardware agnostic representation of input devices (such as a mouse, pen or contact point on a touch-enable surface). The pointer can target a specific coordinate (or set of coordinates) on the contact surface such as a screen.A pointer s hit test is the process a browser uses to determine the target element for a pointer event. Typically, this is determined by considering the pointer s location and also the visual layout of elements in a document on screen media.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent',
},
{
	title: 'PopStateEvent',
	text: '\n  A popstate event is dispatched to the window every time the active history\n  entry changes between two history entries for the same document. If the history entry\n  being activated was created by a call to history.pushState() or was\n  affected by a call to history.replaceState(), the popstate\n  event s state property contains a copy of the history entry s state object.\nCreates a new PopStateEvent object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PopStateEvent',
},
{
	title: 'PositionSensorVRDevice',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The PositionSensorVRDevice interface of the WebVR API represents VR hardware s position sensor. You can access information such as the current position and orientation of the sensor in relation to the head mounted display through the PositionSensorVRDevice.getState() method.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PositionSensorVRDevice',
},
{
	title: 'Presentation',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.The Presentation can be defined as two possible user agents in the context: Controlling user agent and Receiving user agent.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Presentation',
},
{
	title: 'PresentationAvailability',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.A PresentationAvailability object is associated with available presentation displays and represents the presentation display availability for a presentation request. If the controlling user agent can monitor the list of available presentation displays in the background (without a pending request to start()), the PresentationAvailability object MUST be implemented in a controlling browsing context.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PresentationAvailability',
},
{
	title: 'PresentationConnection',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.The PresentationConnection interface of the Presentation API provides methods and properties for managing a single presentation. Each presentation connection is represented by a PresentationConnection object. Both the controlling user agent and receiving user agent MUST implement PresentationConnection.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection',
},
{
	title: 'PresentationConnectionAvailableEvent',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.The PresentationConnectionAvailableEvent interface of the Presentation API is fired on a PresentationRequest when a connection associated with the object is created.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnectionAvailableEvent',
},
{
	title: 'PresentationConnectionCloseEvent',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.The PresentationConnectionCloseEvent interface of the Presentation API is fired on a PresentationConnection when it is closed.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnectionCloseEvent',
},
{
	title: 'PresentationConnectionList',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.PresentationConnectionList is the collection of incoming presentation connections.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnectionList',
},
{
	title: 'PresentationReceiver',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The PresentationReceiver interface of the Presentation API provides a means for a receiving browsing context to access controlling browsing contexts and communicate with them.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PresentationReceiver',
},
{
	title: 'PresentationRequest',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.A PresentationRequest object is used to initiate or reconnect to a presentation made by a controlling browsing context. The PresentationRequest object MUST be implemented in a controlling browsing context provided by a controlling user agent.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest',
},
{
	title: 'ProcessingInstruction',
	text: 'Warning: ProcessingInstruction nodes are only supported in XML documents, not in HTML documents. In these, a process instruction will be considered as a comment and be represented as a Comment object in the tree.A processing instruction may be different than the XML declaration.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ProcessingInstruction',
},
{
	title: 'ProgressEvent',
	text: 'Creates a ProgressEvent event with the given parameters.Also inherits properties from its parent Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent',
},
{
	title: 'PromiseRejectionEvent',
	text: 'For details on promise rejection events, see Promise rejection events in Using Promises.Creates a PromiseRejectionEvent event, given the type of event (unhandledrejection or rejectionhandled) and other details.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent',
},
{
	title: 'PublicKeyCredential',
	text: 'The PublicKeyCredential interface provides information about a public key / private key pair, which is a credential for logging in to a service using an un-phishable and data-breach resistant asymmetric key pair instead of a password. It inherits from Credential, and was created by the Web Authentication API extension to the Credential Management API. Other interfaces that inherit from Credential are PasswordCredential and FederatedCredential.Note: This API is restricted to top-level contexts. Use from within an <iframe> element will not have any effect.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential',
},
{
	title: 'PublicKeyCredentialRequestOptions',
	text: 'The PublicKeyCredentialRequestOptions dictionary of the Web Authentication API holds the options passed to navigator.credentials.get() in order to fetch a given PublicKeyCredential.An ArrayBuffer, a TypedArray, or a DataView, emitted by the relying party s server and used as a cryptographic challenge. This value will be signed by the authenticator and the signature will be sent back as part of AuthenticatorAssertionResponse.signature.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions',
},
{
	title: 'PushEvent',
	text: 'The PushEvent interface of the Push API represents a push message that has been received. This event is sent to the global scope of a ServiceWorker. It contains the information sent from an application server to a PushSubscription.Creates a new PushEvent object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PushEvent',
},
{
	title: 'PushManager',
	text: 'This interface is accessed via the ServiceWorkerRegistration.pushManager property.Returns an array of supported content codings that can be used to encrypt the payload of a push message.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PushManager',
},
{
	title: 'PushMessageData',
	text: 'The PushMessageData interface of the Push API provides methods which let you retrieve the push data sent by a server in various formats.Unlike the similar methods in the Fetch API, which only allow the method to be invoked once, these methods can be called multiple times.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData',
},
{
	title: 'PushSubscription',
	text: 'The PushSubscription interface of the Push API provides a subscription s URL endpoint and allows unsubscribing from a push service.An instance of this interface can be serialized.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription',
},
{
	title: 'PushSubscriptionOptions',
	text: 'The read-only PushSubscriptionOptions object is returned by calling PushSubscription.options on a PushSubscription. This interface has no constructor of its own.\n  A boolean value indicating that the returned push\n  subscription will only be used for messages whose effect is made visible to the user.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PushSubscriptionOptions',
},
{
	title: 'queueMicrotask()',
	text: '\n  The microtask is a short function which will run after\n  the current task has completed its work and when there is no other code waiting to be\n  run before control of the execution context is returned to the browser s event loop.\n\n  This lets your code run without interfering with any other, potentially higher\n  priority, code that is pending, but before the browser regains control over the\n  execution context, potentially depending on work you need to complete. You can learn\n  more about how to use microtasks and why you might choose to do so in our microtask guide.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask',
},
{
	title: 'RadioNodeList',
	text: 'The RadioNodeList interface inherits the properties of NodeList.If the underlying element collection contains radio buttons, the value property represents the checked radio button. On retrieving the value property, the value of the currently checked radio button is returned as a string. If the collection does not contain any radio buttons or none of the radio buttons in the collection is in checked state, the empty string is returned. On setting the value property, the first radio button input element whose value property is equal to the new value will be set to checked.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RadioNodeList',
},
{
	title: 'Range',
	text: 'A range can be created by using the Document.createRange() method. Range objects can also be retrieved by using the getRangeAt() method of the Selection object or the caretRangeFromPoint() method of the Document object.There also is the Range() constructor available.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Range',
},
{
	title: 'ReadableByteStreamController',
	text: 'The ReadableByteStreamController interface of the Streams API represents a controller allowing control of a ReadableStream s state and internal queue. Byte stream controllers are for byte streams.None. ReadableByteStreamController instances are created automatically during ReadableStream construction.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController',
},
{
	title: 'ReadableStream',
	text: 'ReadableStream is a transferable object.Creates and returns a readable stream object from the given handlers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream',
},
{
	title: 'ReadableStreamBYOBReader',
	text: 'The ReadableStreamBYOBReader interface of the Streams API represents a BYOB ( bring your own buffer ) reader that can be used to read stream data supplied by the developer (e.g. a custom ReadableStream() constructor).Creates and returns a ReadableStreamBYOBReader object instance.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader',
},
{
	title: 'ReadableStreamBYOBRequest',
	text: 'The ReadableStreamBYOBRequest interface of the Streams API represents a pull request into a ReadableByteStreamController view.A view, as mentioned below, refers to a typed array representing the destination region to which the associated ReadableByteStreamController controller can write generated data.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBRequest',
},
{
	title: 'ReadableStreamDefaultController',
	text: 'None. ReadableStreamDefaultController instances are created automatically during ReadableStream construction.Returns the desired size required to fill the stream s internal queue.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController',
},
{
	title: 'ReadableStreamDefaultReader',
	text: 'Creates and returns a ReadableStreamDefaultReader object instance.Returns a Promise that fulfills when the stream closes, or rejects if the stream throws an error or the reader s lock is released. This property enables you to write code that responds to an end to the streaming process.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader',
},
{
	title: 'RelativeOrientationSensor',
	text: 'To use this sensor, the user must grant permission to the  accelerometer , and  gyroscope  device sensors through the Permissions API.If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The Feature-Policy HTTP header article contains implementation instructions.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RelativeOrientationSensor',
},
{
	title: 'RemotePlayback',
	text: 'Represents the RemotePlayback connection s state. One of:The user agent is attempting to initiate remote playback with the selected device.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback',
},
{
	title: 'Report',
	text: 'The Report interface of the Reporting API represents a single report.Reports can be accessed in a number of ways:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Report',
},
{
	title: 'ReportBody',
	text: 'The ReportBody interface of the Reporting API represents the body of a report. Individual report types inherit from this interface, adding specific attributes relevant to the particular report.An instance of ReportBody is returned as the value of Report.body. The interface has no constructor.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReportBody',
},
{
	title: 'reportError()',
	text: 'The reportError() global method may be used to report errors to the console or global event handlers, emulating an uncaught JavaScript exception.\n  This feature is primarily intended for custom event-dispatching or callback-manipulating libraries.\n  Libraries can use this feature to catch errors in callback code and re-throw them to the top level handler.\n  This ensures that an exception in one callback will not prevent others from being handled, while at the same time ensuring that stack trace information is still readily available for debugging at the top level.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/reportError',
},
{
	title: 'ReportingObserver',
	text: 'The ReportingObserver interface of the Reporting API allows you to collect and access reports.Creates a new ReportingObserver object instance, which can be used to collect and access reports.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReportingObserver',
},
{
	title: 'ReportingObserverOptions',
	text: 'The ReportingObserverOptions dictionary of the Reporting API allows options to be set in the constructor when creating a ReportingObserver.An array of strings representing the types of report to be collected by this observer. Available types include deprecation, intervention, and crash.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReportingObserverOptions',
},
{
	title: 'Request',
	text: 'You can create a new Request object using the Request() constructor, but you are more likely to encounter a Request object being returned as the result of another API operation, such as a service worker FetchEvent.request.Creates a new Request object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Request',
},
{
	title: 'ResizeObserver',
	text: 'Note: The content box is the box in which content can be placed, meaning the border box minus the padding and border width. The border box encompasses the content, padding, and border. See The box model for further explanation.ResizeObserver avoids infinite callback loops and cyclic dependencies that are often created when resizing via a callback function. It does this by only processing elements deeper in the DOM in subsequent frames. Implementations should, if they follow the specification, invoke resize events before paint and after layout.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver',
},
{
	title: 'ResizeObserverEntry',
	text: 'An object containing the new border box size of the observed element when the callback is run.An object containing the new content box size of the observed element when the callback is run.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry',
},
{
	title: 'ResizeObserverSize',
	text: 'Note: In multi-column layout, which is a fragmented context, the sizing returned by ResizeObserverSize will be the size of the first column.The length of the observed element s border box in the block dimension. For boxes with a horizontal writing-mode, this is the vertical dimension, or height; if the writing-mode is vertical, this is the horizontal dimension, or width.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverSize',
},
{
	title: 'Response',
	text: 'You can create a new Response object using the Response() constructor, but you are more likely to encounter a Response object being returned as the result of another API operation—for example, a service worker FetchEvent.respondWith, or a simple fetch().Creates a new Response object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Response',
},
{
	title: 'RsaHashedImportParams',
	text: 'A string. This should be set to RSASSA-PKCS1-v1_5, RSA-PSS, or RSA-OAEP, depending on the algorithm you want to use.A string representing the name of the digest function to use. This can be one of SHA-256, SHA-384, or SHA-512.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RsaHashedImportParams',
},
{
	title: 'RsaHashedKeyGenParams',
	text: 'A string. This should be set to RSASSA-PKCS1-v1_5, RSA-PSS, or RSA-OAEP, depending on the algorithm you want to use.A Number. The length in bits of the RSA modulus. This should be at least 2048: see for example see SP 800-131A Rev. 2. Some organizations are now recommending that it should be 4096.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RsaHashedKeyGenParams',
},
{
	title: 'RsaOaepParams',
	text: 'A string. This should be set to RSA-OAEP.An ArrayBuffer, a TypedArray, or a DataView — an array of bytes that does not itself need to be encrypted but which should be bound to the ciphertext. A digest of the label is part of the input to the encryption operation.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RsaOaepParams',
},
{
	title: 'RsaPssParams',
	text: 'A string. This should be set to RSA-PSS.A long integer representing the length of the random salt to use, in bytes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RsaPssParams',
},
{
	title: 'RTCCertificate',
	text: 'Returns the expiration date of the certificate.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCCertificate',
},
{
	title: 'RTCDataChannel',
	text: 'To create a data channel and ask a remote peer to join you, call the RTCPeerConnection s createDataChannel() method. The peer being invited to exchange data receives a datachannel event (which has type RTCDataChannelEvent) to let it know the data channel has been added to the connection.RTCDataChannel is a transferable object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel',
},
{
	title: 'RTCDataChannelEvent',
	text: 'Creates a new RTCDataChannelEvent.Also inherits properties from Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannelEvent',
},
{
	title: 'RTCDtlsTransport',
	text: 'A RTCDtlsTransport object is also used to provide information about SCTP packets transmitted and received by an connection s data channels.Features of the DTLS transport include the addition of security to the underlying transport; the RTCDtlsTransport interface can be used to obtain information about the underlying transport and the security added to it by the DTLS layer.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCDtlsTransport',
},
{
	title: 'RTCDTMFSender',
	text: 'The primary purpose for WebRTC s DTMF support is to allow WebRTC-based communication clients to be connected to a public-switched telephone network (PSTN) or other legacy telephone service, including extant voice over IP (VoIP) services. For that reason, DTMF can t be used between two WebRTC-based devices, because there is no mechanism provided by WebRTC for receiving DTMF codes.A string which contains the list of DTMF tones currently in the queue to be transmitted (tones which have already been played are no longer included in the string). See toneBuffer for details on the format of the tone buffer.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFSender',
},
{
	title: 'RTCDTMFToneChangeEvent',
	text: 'In addition to the properties of Event, this interface offers the following:A string specifying the tone which has begun playing, or an empty string (  ) if the previous tone has finished playing.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFToneChangeEvent',
},
{
	title: 'RTCError',
	text: 'Creates and returns a new RTCError object initialized with the different parameters and, optionally, a string to use as the value of the error s message property.In addition to the properties defined by the parent interface, DOMException, RTCError includes the following properties:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCError',
},
{
	title: 'RTCErrorEvent',
	text: 'Creates and returns a new RTCErrorEvent object.In addition to the standard properties available on the Event interface, RTCErrorEvent also includes the following:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCErrorEvent',
},
{
	title: 'RTCIceCandidate',
	text: 'An ICE candidate describes the protocols and routing needed for WebRTC to be able to communicate with a remote device. When starting a WebRTC peer connection, typically a number of candidates are proposed by each end of the connection, until they mutually agree upon one which describes the connection they decide will be best. WebRTC then uses that candidate s details to initiate the connection.For details on how the ICE process works, see Lifetime of a WebRTC session. The article WebRTC connectivity provides additional useful details.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate',
},
{
	title: 'RTCIceCandidatePair',
	text: 'An RTCIceCandidate describing the configuration of the local end of the connection.The RTCIceCandidate describing the configuration of the remote end of the connection.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePair',
},
{
	title: 'RTCIceCandidatePairStats',
	text: 'If a RTCStats-based object s type is candidate-pair, it s an RTCIceCandidatePairStats object.RTCIceCandidatePairStats is based upon RTCStats and inherits its properties. In addition, it adds the following new properties:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats',
},
{
	title: 'RTCIceCandidateStats',
	text: 'RTCIceCandidateStats is based upon the RTCStats dictionary, so it includes those properties in addition to the ones below.A string containing the address of the candidate. This value may be an IPv4 address, an IPv6 address, or a fully-qualified domain name. This property was previously named ip and only accepted IP addresses.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats',
},
{
	title: 'RTCIceParameters',
	text: 'During ICE negotiation, each peer s username fragment and password are recorded in an RTCIceParameters object, which can be obtained from the RTCIceTransport by calling its getLocalParameters() or getRemoteParameters() method, depending on which end interests you.A string specifying the value of the ICE session s username fragment field, ufrag.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCIceParameters',
},
{
	title: 'RTCIceServer',
	text: 'The credential to use when logging into the server. This is only used if the RTCIceServer represents a TURN server.If the RTCIceServer represents a TURN server, this attribute specifies what kind of credential is to be used when connecting. The default is password.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer',
},
{
	title: 'RTCIceTransport',
	text: 'The RTCIceTransport interface inherits properties from its parent, EventTarget. It also offers the following properties:The ICE component being used by the transport. The value is one of the strings from the RTCIceTransport enumerated type:  RTP  or  RTSP .',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport',
},
{
	title: 'RTCIdentityAssertion',
	text: 'The RTCIdentityAssertion interface of the WebRTC API represents the identity of a remote peer of the current connection. If no peer has yet been set and verified, then this interface returns null. Once set it can t be changed.Indicates the provider of the identity assertion.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCIdentityAssertion',
},
{
	title: 'RTCInboundRtpStreamStats',
	text: 'The RTCInboundRtpStreamStats dictionary is based on the RTCReceivedRtpStreamStats dictionary, whose properties are also available.A floating-point value indicating the average RTCP interval between two consecutive compound RTCP packets.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats',
},
{
	title: 'RTCOutboundRtpStreamStats',
	text: 'The RTCOutboundRtpStreamStats dictionary includes the following properties in addition to those it inherits from RTCSentRtpStreamStats, RTCRtpStreamStats, and RTCStats.A floating-point value indicating the average RTCP interval between two consecutive compound RTCP packets.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats',
},
{
	title: 'RTCPeerConnection',
	text: '\n  Returns a newly-created RTCPeerConnection,\n  which represents a connection between the local device and a remote peer.\n  \n  Creates an X.509 certificate and its corresponding private key,\n  returning a Promise that resolves with the new RTCCertificate once it is generated.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection',
},
{
	title: 'RTCPeerConnectionIceErrorEvent',
	text: 'Creates and returns a new RTCPeerConnectionIceErrorEvent object, with its type and other properties initialized as specified in the parameters. You will not normally create an object of this type yourself.The RTCPeerConnectionIceErrorEvent interface includes the properties found on the Event interface, as well as the following properties:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnectionIceErrorEvent',
},
{
	title: 'RTCPeerConnectionIceEvent',
	text: 'Only one event is of this type: icecandidate.A RTCPeerConnectionIceEvent being an Event, this event also implements these properties.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnectionIceEvent',
},
{
	title: 'RTCRemoteOutboundRtpStreamStats',
	text: 'In addition to the properties defined by RTCSentRtpStreamStats and its underlying RTCRtpStreamStats and RTCStats dictionaries, RTCRemoteOutboundRtpStreamStats defines the following properties.A string which is used to find the local RTCInboundRtpStreamStats object which shares the same Synchronization Source (SSRC).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRemoteOutboundRtpStreamStats',
},
{
	title: 'RTCRtcpParameters',
	text: 'The Canonical Name (CNAME) being used by RTCP. This is used, for example, in SDES (SDP security descriptions) messages, described in RFC 4568. This property cannot be changed once initialized.A Boolean value indicating whether or not reduced size RTCP is configured. If this value is true, reduced size RTCP (described in RFC 5506) is in effect. If false, compound RTCP is in use, as found in RFC 3550. This property cannot be changed once initialized.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtcpParameters',
},
{
	title: 'RTCRtpCapabilities',
	text: 'An RTCRtpCapabilities object contains an array of objects conforming to RTCRtpCodecCapability (each describing the capabilities of one codec) and an array of the supported RTP header extensions for that codec.An array of RTCRtpCodecCapability objects, each describing one of the codecs supported by the RTCRtpSender or RTCRtpReceiver. There are some special entries in this array, described below in the section The codecs array.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpCapabilities',
},
{
	title: 'RTCRtpCodecCapability',
	text: 'An unsigned integer value indicating the maximum number of channels supported by the codec; for example, a codec that supports only mono sound would have a value of 1; stereo codecs would have a 2, etc.An unsigned long integer specifying the codec s clock rate in Hertz (Hz). The IANA maintains a list of codecs and their parameters, including their clock rates.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpCodecCapability',
},
{
	title: 'RTCRtpCodecParameters',
	text: 'In addition to being the type of the RTCRtpParameters.codecs property, it s used when calling RTCRtpTransceiver.setCodecPreferences() to configure a transceiver s codecs before beginning the offer/answer process to establish a WebRTC peer connection.Most of the fields in this property take values which are defined and maintained by the Internet Assigned Numbers Authority (IANA). References to relevant IANA documents are provided in the see also section at the end of this article.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpCodecParameters',
},
{
	title: 'RTCRtpContributingSource',
	text: 'The information provided is based on the last ten seconds of media received.A double-precision floating-point value between 0 and 1 specifying the audio level contained in the last RTP packet played from this source.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpContributingSource',
},
{
	title: 'RTCRtpEncodingParameters',
	text: 'This dictionary is used in the RTCRtpSendParameters describing the configuration of an RTP sender s encodings; RTCRtpDecodingParameters is used to describe the configuration of an RTP receiver s encodings.If true, the described encoding is currently actively being used. That is, for RTP senders, the encoding is currently being used to send data, while for receivers, the encoding is being used to decode received data. The default value is true.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpEncodingParameters',
},
{
	title: 'RTCRtpParameters',
	text: 'To obtain the parameters of a sender or receiver, call its getParameters() method:An array of RTCRtpCodecParameters objects describing the set of codecs from which the sender or receiver will choose. This parameter cannot be changed once initially set.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpParameters',
},
{
	title: 'RTCRtpReceiveParameters',
	text: 'This dictionary currently has no properties of its own; it exists for future expansion. It inherits all of the properties of its parent, RTCRtpParameters.See RTCRtpReceiver.getParameters() for example code.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiveParameters',
},
{
	title: 'RTCRtpReceiver',
	text: 'Returns the MediaStreamTrack associated with the current RTCRtpReceiver instance.Returns the RTCDtlsTransport instance over which the media for the receiver s track is received.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver',
},
{
	title: 'RTCRtpSender',
	text: 'With it, you can configure the encoding used for the corresponding track, get information about the device s media capabilities, and so forth. You can also obtain access to an RTCDTMFSender which can be used to send DTMF codes (to simulate the user pressing buttons on a telephone s dial pad) to the remote peer.An RTCDTMFSender which can be used to send DTMF tones using telephone-event payloads on the RTP session represented by the RTCRtpSender object. If null, the track and/or the connection doesn t support DTMF. Only audio tracks can support DTMF.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender',
},
{
	title: 'RTCRtpSendParameters',
	text: 'In addition to the properties below, RTCRtpSendParameters inherits the properties from the RTCRtpParameters interface.An array of RTCRtpEncodingParameters objects, each specifying the parameters for a single codec that could be used to encode the track s media.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSendParameters',
},
{
	title: 'RTCRtpStreamStats',
	text: 'While the dictionary has a base set of properties that are present in each of these cases, there are also additional properties added depending on which interface the method is called on.RTCRtpStreamStats is the base class for all RTP-related statistics reports. It s based on RTCStats and adds the following additional fields.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats',
},
{
	title: 'RTCRtpTransceiver',
	text: 'Each SDP media section describes one bidirectional SRTP ( Secure Real Time Protocol ) stream (excepting the media section for RTCDataChannel, if present). This pairing of send and receive SRTP streams is significant for some applications, so RTCRtpTransceiver is used to represent this pairing, along with other important state from the media section. Each non-disabled SRTP media section is always represented by exactly one transceiver.A transceiver is uniquely identified using its mid property, which is the same as the media ID (mid) of its corresponding m-line. An RTCRtpTransceiver is associated with an m-line if its mid is non-null; otherwise it s considered disassociated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver',
},
{
	title: 'RTCSctpTransport',
	text: 'The RTCSctpTransport interface provides information which describes a Stream Control Transmission Protocol (SCTP) transport. This provides information about limitations of the transport, but also provides a way to access the underlying Datagram Transport Layer Security (DTLS) transport over which SCTP packets for all of an RTCPeerConnection s data channels are sent and received.You don t create RTCSctpTransport objects yourself; instead, you get access to the RTCSctpTransport for a given RTCPeerConnection through its sctp property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCSctpTransport',
},
{
	title: 'RTCSessionDescription',
	text: 'The RTCSessionDescription interface describes one end of a connection—or potential connection—and how it s configured. Each RTCSessionDescription consists of a description type indicating which part of the offer/answer negotiation process it describes and of the SDP descriptor of the session.The process of negotiating a connection between two peers involves exchanging RTCSessionDescription objects back and forth, with each description suggesting one combination of connection configuration options that the sender of the description supports. Once the two peers agree upon a configuration for the connection, negotiation is complete.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription',
},
{
	title: 'RTCStats',
	text: 'Specific classes of statistic are defined as dictionaries based on RTCStats. For example, statistics about a received RTP stream are represented by RTCReceivedRtpStreamStats.A string which uniquely identifies the object which was inspected to produce this object based on RTCStats.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCStats',
},
{
	title: 'RTCStatsReport',
	text: 'This statistics report contains a mapping of statistic category string names to objects containing the corresponding statistics data.Calling getStats() on an RTCPeerConnection lets you specify whether you wish to obtain statistics for outbound, inbound, or all streams on the connection. The RTCRtpReceiver and RTCRtpSender versions of getStats() specifically only return statistics available to the incoming or outgoing stream on which you call them.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCStatsReport',
},
{
	title: 'RTCTrackEvent',
	text: 'The target is the RTCPeerConnection object to which the track is being added.This event is sent by the WebRTC layer to the web site or application, so you will not typically need to instantiate an RTCTrackEvent yourself.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent',
},
{
	title: 'Sanitizer',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.\n  The Sanitizer interface of the HTML Sanitizer API provides methods to sanitize untrusted strings of HTML, Document and DocumentFragment objects.\n  After sanitization, unwanted elements or attributes are removed, and the returned objects can safely be inserted into a document s DOM.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Sanitizer',
},
{
	title: 'Scheduler',
	text: 'The Scheduler interface of the Prioritized Task Scheduling API provides the Scheduler.postTask() method that can be used for adding prioritized tasks to be scheduled.A Scheduler can be accessed from the global object Window or WorkerGlobalScope (this.scheduler).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Scheduler',
},
{
	title: 'Screen',
	text: 'Note that browsers determine which screen to report as current by detecting which screen has the center of the browser window.Also inherits properties from its parent EventTarget.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen',
},
{
	title: 'ScreenOrientation',
	text: 'A ScreenOrientation instance object can be retrieved using the screen.orientation property.Returns the document s current orientation type, one of  portrait-primary ,  portrait-secondary ,  landscape-primary , or  landscape-secondary .',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation',
},
{
	title: 'ScriptProcessorNode',
	text: 'The ScriptProcessorNode interface allows the generation, processing, or analyzing of audio using JavaScript.Note: This feature was replaced by AudioWorklets and the AudioWorkletNode interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode',
},
{
	title: 'SecurityPolicyViolationEvent',
	text: 'Creates a new SecurityPolicyViolationEvent object instance.A string representing the URI of the resource that was blocked because it violates a policy.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent',
},
{
	title: 'Selection',
	text: 'A user may make a selection from left to right (in document order) or right to left (reverse of document order). The anchor is where the user began the selection and the focus is where the user ends the selection. If you make a selection with a desktop mouse, the anchor is placed where you pressed the mouse button, and the focus is placed where you released the mouse button.Note: Anchor and focus should not be confused with the start and end positions of a selection. The anchor can be placed before the focus or vice-versa, depending on the direction you made your selection.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Selection',
},
{
	title: 'self.crypto',
	text: '\n  Although the property itself is read-only, all of its methods (and the methods of its\n  child object, SubtleCrypto) are not read-only, and therefore vulnerable\n  to attack by polyfill.\nAlthough crypto is available on all windows, the returned Crypto object only has one usable feature in insecure contexts: the getRandomValues() method. In general, you should use this API only in secure contexts.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/crypto_property',
},
{
	title: 'self.performance',
	text: '\n  A Performance object offering access to the performance and\n  timing-related information offered by the APIs it exposes.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/performance_property',
},
{
	title: 'Sensor',
	text: 'If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The Feature-Policy HTTP header article contains implementation instructions.When initially created, the Sensor object is idle, meaning it does not take measures. Once the start()} method is called, it prepares itself to read data and, once ready, the activate event is sent and the sensor becomes activated. It then sends a reading event each time new data is available.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Sensor',
},
{
	title: 'SensorErrorEvent',
	text: 'Creates a new SensorErrorEvent object.Returns the DOMException object passed in the event s constructor.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SensorErrorEvent',
},
{
	title: 'Serial',
	text: 'The Serial interface of the Web Serial API provides attributes and methods for finding and connecting to serial ports from a web page.Returns a Promise that resolves with an instance of SerialPort representing the device chosen by the user or rejects if no device was selected.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Serial',
},
{
	title: 'SerialPort',
	text: 'The SerialPort interface of the Web Serial API provides access to a serial port on the host device.Instances of this interface may be obtained by calling methods of the Serial interface, therefore it has no constructor of its own.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SerialPort',
},
{
	title: 'ServiceWorker',
	text: 'The ServiceWorker interface of the Service Worker API provides a reference to a service worker. Multiple browsing contexts (e.g. pages, workers, etc.) can be associated with the same service worker, each through a unique ServiceWorker object.A ServiceWorker object is available in the ServiceWorkerRegistration.active property, and the ServiceWorkerContainer.controller property — this is a service worker that has been activated and is controlling the page (the service worker has been successfully registered, and the controlled page has been reloaded.)',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker',
},
{
	title: 'ServiceWorkerContainer',
	text: 'Most importantly, it exposes the ServiceWorkerContainer.register() method used to register service workers, and the ServiceWorkerContainer.controller property used to determine whether or not the current page is actively controlled.Returns a ServiceWorker object if its state is activating or activated (the same object returned by ServiceWorkerRegistration.active). This property returns null during a force-refresh request (Shift + refresh) or if there is no active worker.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer',
},
{
	title: 'ServiceWorkerGlobalScope',
	text: 'Developers should keep in mind that the ServiceWorker state is not persisted across the termination/restart cycle, so each event handler should assume it s being invoked with a bare, default global state.Once successfully registered, a service worker can and will be terminated when idle to conserve memory and processor power. An active service worker is automatically restarted to respond to events, such as onfetch or onmessage.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope',
},
{
	title: 'ServiceWorkerRegistration',
	text: 'The lifetime of a service worker registration is beyond that of the ServiceWorkerRegistration objects that represent them within the lifetime of their corresponding service worker clients. The browser maintains a persistent list of active ServiceWorkerRegistration objects.Note: This feature is available in Web Workers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration',
},
{
	title: 'setInterval()',
	text: '\n  This method returns an interval ID which uniquely identifies the interval, so you\n  can remove it later by calling clearInterval().\nA function to be executed every delay milliseconds. The first execution happens after delay milliseconds.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/setInterval',
},
{
	title: 'setTimeout()',
	text: 'A function to be executed after the timer expires.\n  An alternative syntax that allows you to include a string instead of a function,\n  which is compiled and executed when the timer expires. This syntax is not\nrecommended for the same reasons that make using\n  eval() a security risk.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/setTimeout',
},
{
	title: 'ShadowRoot',
	text: 'You can retrieve a reference to an element s shadow root using its Element.shadowRoot property, provided it was created using Element.attachShadow() with the mode option set to open.Returns the Element within the shadow tree that has focus.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot',
},
{
	title: 'SharedWorker',
	text: 'Note: If SharedWorker can be accessed from several browsing contexts, all those browsing contexts must share the exact same origin (same protocol, host and port).Creates a shared web worker that executes the script at the specified URL.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker',
},
{
	title: 'SharedWorkerGlobalScope',
	text: 'This interface inherits properties from the WorkerGlobalScope interface, and its parent EventTarget.The name that the SharedWorker was (optionally) given when it was created using the SharedWorker() constructor. This is mainly useful for debugging purposes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope',
},
{
	title: 'SourceBuffer',
	text: 'Controls the timestamp for the end of the append window.Controls the timestamp for the start of the append window. This is a timestamp range that can be used to filter what media data is appended to the SourceBuffer. Coded media frames with timestamps within this range will be appended, whereas those outside the range will be filtered out.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer',
},
{
	title: 'SourceBufferList',
	text: 'The SourceBufferList interface represents a simple container list for multiple SourceBuffer objects.The source buffer list containing the SourceBuffers appended to a particular MediaSource can be retrieved using the MediaSource.sourceBuffers property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SourceBufferList',
},
{
	title: 'SpeechGrammar',
	text: 'The SpeechGrammar interface of the Web Speech API represents a set of words or patterns of words that we want the recognition service to recognize.Grammar is defined using JSpeech Grammar Format (JSGF.) Other formats may also be supported in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammar',
},
{
	title: 'SpeechGrammarList',
	text: 'The SpeechGrammarList interface of the Web Speech API represents a list of SpeechGrammar objects containing words or patterns of words that we want the recognition service to recognize.Grammar is defined using JSpeech Grammar Format (JSGF.) Other formats may also be supported in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammarList',
},
{
	title: 'SpeechRecognition',
	text: 'Note: On some browsers, like Chrome, using Speech Recognition on a web page involves a server-based recognition engine. Your audio is sent to a web service for recognition processing, so it won t work offline.Creates a new SpeechRecognition object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition',
},
{
	title: 'SpeechRecognitionAlternative',
	text: 'The SpeechRecognitionAlternative interface of the Web Speech API represents a single word that has been recognized by the speech recognition service.Returns a string containing the transcript of the recognized word.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionAlternative',
},
{
	title: 'SpeechRecognitionErrorEvent',
	text: 'The SpeechRecognitionErrorEvent interface of the Web Speech API represents error messages from the recognition service.SpeechRecognitionErrorEvent also inherits properties from its parent interface, Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionErrorEvent',
},
{
	title: 'SpeechRecognitionEvent',
	text: 'SpeechRecognitionEvent also inherits properties from its parent interface, Event.Returns an Extensible MultiModal Annotation markup language (EMMA) — XML — representation of the result.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent',
},
{
	title: 'SpeechRecognitionResult',
	text: 'The SpeechRecognitionResult interface of the Web Speech API represents a single recognition match, which may contain multiple SpeechRecognitionAlternative objects.A boolean value that states whether this result is final (true) or not (false) — if so, then this is the final time this result will be returned; if not, then this result is an interim result, and may be updated later on.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult',
},
{
	title: 'SpeechRecognitionResultList',
	text: 'The SpeechRecognitionResultList interface of the Web Speech API represents a list of SpeechRecognitionResult objects, or a single one if results are being captured in continuous mode.Returns the length of the  array  — the number of SpeechRecognitionResult objects in the list.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResultList',
},
{
	title: 'SpeechSynthesis',
	text: 'SpeechSynthesis also inherits properties from its parent interface, EventTarget.A boolean value that returns true if the SpeechSynthesis object is in a paused state.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis',
},
{
	title: 'SpeechSynthesisErrorEvent',
	text: 'The SpeechSynthesisErrorEvent interface of the Web Speech API contains information about any errors that occur while processing SpeechSynthesisUtterance objects in the speech service.SpeechSynthesisErrorEvent extends the SpeechSynthesisEvent interface, which inherits properties from its parent interface, Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisErrorEvent',
},
{
	title: 'SpeechSynthesisEvent',
	text: 'The SpeechSynthesisEvent interface also inherits properties from its parent interface, Event.Returns the index position of the character in the SpeechSynthesisUtterance.text that was being spoken when the event was triggered.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisEvent',
},
{
	title: 'SpeechSynthesisUtterance',
	text: 'Returns a new SpeechSynthesisUtterance object instance.SpeechSynthesisUtterance also inherits properties from its parent interface, EventTarget.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance',
},
{
	title: 'SpeechSynthesisVoice',
	text: 'A boolean value indicating whether the voice is the default voice for the current app language (true), or not (false.)Returns a BCP 47 language tag indicating the language of the voice.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice',
},
{
	title: 'StaticRange',
	text: 'This interface offers the same set of properties and methods as AbstractRange.AbstractRange and StaticRange are not available from web workers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/StaticRange',
},
{
	title: 'StereoPannerNode',
	text: 'The pan property takes a unitless value between -1 (full left pan) and 1 (full right pan). This interface was introduced as a much simpler way to apply a simple panning effect than having to use a full PannerNode.\n  \n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode',
},
{
	title: 'Storage',
	text: 'To manipulate, for instance, the session storage for a domain, a call to Window.sessionStorage is made; whereas for local storage the call is made to Window.localStorage.Returns an integer representing the number of data items stored in the Storage object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage',
},
{
	title: 'StorageEvent',
	text: 'Returns a newly constructed StorageEvent object.In addition to the properties listed below, this interface inherits the properties of its parent interface, Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent',
},
{
	title: 'StorageManager',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.The StorageManager interface of the Storage API provides an interface for managing persistence permissions and estimating available storage. You can get a reference to this interface using either navigator.storage or WorkerNavigator.storage.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/StorageManager',
},
{
	title: 'structuredClone()',
	text: '\n  The method also allows transferable objects in the original value to be transferred rather than cloned to the new object.\n  Transferred objects are detached from the original object and attached to the new object; they are no longer accessible in the original object.\n\n  The object to be cloned.\n  This can be any structured-clonable type.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/structuredClone',
},
{
	title: 'StylePropertyMap',
	text: 'The StylePropertyMap interface of the CSS Typed Object Model API provides a representation of a CSS declaration block that is an alternative to CSSStyleDeclaration.Inherits properties from its parent, StylePropertyMapReadOnly.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap',
},
{
	title: 'StylePropertyMapReadOnly',
	text: 'The StylePropertyMapReadOnly interface of the CSS Typed Object Model API provides a read-only representation of a CSS declaration block that is an alternative to CSSStyleDeclaration. Retrieve an instance of this interface using Element.computedStyleMap().Returns an unsigned long integer containing the size of the StylePropertyMapReadOnly object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly',
},
{
	title: 'StyleSheet',
	text: 'A boolean value representing whether the current stylesheet has been applied or not.Returns a string representing the location of the stylesheet.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet',
},
{
	title: 'StyleSheetList',
	text: 'It is an array-like object but can t be iterated over using Array methods. However it can be iterated over in a standard for loop over its indices, or converted to an Array.Returns the number of CSSStyleSheet objects in the collection.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/StyleSheetList',
},
{
	title: 'SubmitEvent',
	text: 'Creates and returns a new SubmitEvent object whose type and other options are configured as specified. Note that currently the only valid type for a SubmitEvent is submit.In addition to the properties listed below, this interface inherits the properties of its parent interface, Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SubmitEvent',
},
{
	title: 'SubtleCrypto',
	text: 'The SubtleCrypto interface of the Web Crypto API provides a number of low-level cryptographic functions. Access to the features of SubtleCrypto is obtained through the subtle property of the Crypto object you get from the crypto property.Warning: This API provides a number of low-level cryptographic primitives. It s very easy to misuse them, and the pitfalls involved can be very subtle.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto',
},
{
	title: 'SVGAElement',
	text: 'This interface also inherits properties from its parent, SVGGraphicsElement, and implements properties from HTMLHyperlinkElementUtils.See HTMLAnchorElement.download.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAElement',
},
{
	title: 'SVGAltGlyphDefElement',
	text: 'The SVGAltGlyphDefElement interface corresponds to the <altGlyphDef> element.Warning: This interface was removed in the SVG 2 specification.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAltGlyphDefElement',
},
{
	title: 'SVGAltGlyphElement',
	text: 'The SVGAltGlyphElement interface represents an <altglyph> element. This interface makes it possible to implement more sophisticated and particular glyph characters. For some textual representations as: ligatures (e.g. æ, ß, etc ), special-purpose fonts (e.g. musical symbols) or even alternate glyphs such as Asian text strings it is required that a different set of glyphs be used than the normal given character data.This interface also inherits properties from its parent interface, SVGGraphicsElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAltGlyphElement',
},
{
	title: 'SVGAltGlyphItemElement',
	text: 'The SVGAltGlyphItemElement interface corresponds to the <altGlyphItem> element.Warning: This interface was removed in the SVG 2 specification.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAltGlyphItemElement',
},
{
	title: 'SVGAngle',
	text: 'An SVGAngle object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.An SVGAngle object can be associated with a particular element. The associated element is used to determine which element s content attribute to update if the object reflects an attribute. Unless otherwise described, an SVGAngle object is not associated with any element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAngle',
},
{
	title: 'SVGAnimateColorElement',
	text: 'The SVGAnimateColorElement interface corresponds to the <animateColor> element.This interface has no properties but inherits properties from its parent, SVGAnimationElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimateColorElement',
},
{
	title: 'SVGAnimatedAngle',
	text: 'The SVGAnimatedAngle interface do not provide any specific methods.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedAngle',
},
{
	title: 'SVGAnimatedBoolean',
	text: 'The SVGAnimatedBoolean interface do not provide any specific methods.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedBoolean',
},
{
	title: 'SVGAnimatedEnumeration',
	text: 'The SVGAnimatedEnumeration interface do not provide any specific methods.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedEnumeration',
},
{
	title: 'SVGAnimatedInteger',
	text: 'The SVGAnimatedInteger interface do not provide any specific methods.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedInteger',
},
{
	title: 'SVGAnimatedLength',
	text: 'A SVGLength representing the base value of the given attribute before applying any animations.\n  If the given attribute or property is being animated,\n  a SVGLength containing the current animated value of the attribute or property.\n  If the given attribute or property is not currently being animated,\n  a SVGLength containing the same value as baseVal.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedLength',
},
{
	title: 'SVGAnimatedLengthList',
	text: 'The SVGAnimatedLengthList interface do not provide any specific methods.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedLengthList',
},
{
	title: 'SVGAnimatedNumber',
	text: 'The SVGAnimatedNumber interface do not provide any specific methods.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedNumber',
},
{
	title: 'SVGAnimatedNumberList',
	text: 'A SVGNumberList that represents the base value of the given attribute before applying any animations.A read only SVGNumberList that represents the current animated value of the given attribute. If the given attribute is not currently being animated, then the SVGNumberList will have the same contents as baseVal. The object referenced by animVal will always be distinct from the one referenced by baseVal, even when the attribute is not animated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedNumberList',
},
{
	title: 'SVGAnimatedPreserveAspectRatio',
	text: 'A SVGPreserveAspectRatio that represents the base value of the given attribute before applying any animations.A SVGPreserveAspectRatio that represents the current animated value of the given attribute. If the given attribute is not currently being animated, then the SVGPreserveAspectRatio will have the same contents as baseVal. The object referenced by animVal is always distinct from the one referenced by baseVal, even when the attribute is not animated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedPreserveAspectRatio',
},
{
	title: 'SVGAnimatedRect',
	text: 'The SVGAnimatedRect interface do not provide any specific methods.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedRect',
},
{
	title: 'SVGAnimatedString',
	text: 'This is a string representing the animation value. If the given attribute or property is being animated it contains the current animated value of the attribute or property. If the given attribute or property is not currently being animated, it contains the same value as baseVal.This is a string representing the base value. The base value of the given attribute before applying any animations. Setter throws DOMException.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedString',
},
{
	title: 'SVGAnimatedTransformList',
	text: 'The SVGAnimatedTransformList interface doesn t provide any specific methods.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedTransformList',
},
{
	title: 'SVGAnimateElement',
	text: 'This interface has no properties but inherits properties from its parent, SVGAnimationElement.This interface has no methods but inherits methods from its parent, SVGAnimationElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimateElement',
},
{
	title: 'SVGAnimateMotionElement',
	text: 'This interface has no properties but inherits properties from its parent, SVGAnimationElement.This interface has no methods but inherits methods from its parent, SVGAnimationElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimateMotionElement',
},
{
	title: 'SVGAnimateTransformElement',
	text: 'This interface has no properties but inherits properties from its parent, SVGAnimationElement.This interface has no methods but inherits methods from its parent, SVGAnimationElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimateTransformElement',
},
{
	title: 'SVGAnimationElement',
	text: 'This interface also inherits properties from its parent, SVGElement.An SVGStringList reflecting the requiredExtensions attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimationElement',
},
{
	title: 'SVGCircleElement',
	text: 'This interface also inherits properties from its parent, SVGGeometryElement.This property defines the x-coordinate of the center of the <circle> element. It is denoted by the cx attribute of the element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGCircleElement',
},
{
	title: 'SVGClipPathElement',
	text: 'This interface also inherits properties from its parent, SVGElement.An SVGAnimatedEnumeration corresponding to the clipPathUnits attribute of the given <clipPath> element. Takes one of the constants defined in SVGUnitTypes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGClipPathElement',
},
{
	title: 'SVGComponentTransferFunctionElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedEnumeration corresponding to the type attribute of the given element. It takes one of the SVG_FECOMPONENTTRANSFER_TYPE_* constants defined on this interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGComponentTransferFunctionElement',
},
{
	title: 'SVGCursorElement',
	text: 'The SVGCursorElement interface provides access to the properties of <cursor> elements, as well as methods to manipulate them.This interface also inherits properties from its parent, SVGElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGCursorElement',
},
{
	title: 'SVGDefsElement',
	text: 'This interface doesn t implement any specific properties, but inherits properties from its parent, SVGGraphicsElement.This interface doesn t implement any specific methods, but inherits properties from its parent, SVGGraphicsElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGDefsElement',
},
{
	title: 'SVGDescElement',
	text: 'This interface also inherits properties from its parent, SVGGeometryElement.This interface has no methods but inherits methods from its parent, SVGGeometryElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGDescElement',
},
{
	title: 'SVGElement',
	text: 'Also inherits properties from: DocumentAndElementEventHandlers, Element, GlobalEventHandlers, SVGElementInstanceA StylePropertyMap representing the declarations of the element s style attribute.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGElement',
},
{
	title: 'SVGEllipseElement',
	text: 'This interface also inherits properties from its parent interface, SVGGeometryElement.This property returns a SVGAnimatedLength reflecting the cx attribute of the given <ellipse> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGEllipseElement',
},
{
	title: 'SVGEvent',
	text: 'The SVGEvent interface represents the event object for most SVG-related events.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGEvent',
},
{
	title: 'SVGFEBlendElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedLength corresponding to the height attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEBlendElement',
},
{
	title: 'SVGFEColorMatrixElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedLength corresponding to the height attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEColorMatrixElement',
},
{
	title: 'SVGFEComponentTransferElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedLength corresponding to the height attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEComponentTransferElement',
},
{
	title: 'SVGFECompositeElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedLength corresponding to the height attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFECompositeElement',
},
{
	title: 'SVGFEConvolveMatrixElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedNumber corresponding to the bias attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEConvolveMatrixElement',
},
{
	title: 'SVGFEDiffuseLightingElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedNumber corresponding to the diffuseConstant attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEDiffuseLightingElement',
},
{
	title: 'SVGFEDisplacementMapElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedLength corresponding to the height attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEDisplacementMapElement',
},
{
	title: 'SVGFEDistantLightElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedNumber corresponding to the azimuth attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEDistantLightElement',
},
{
	title: 'SVGFEDropShadowElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedNumber corresponding to the dx attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEDropShadowElement',
},
{
	title: 'SVGFEFloodElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedLength corresponding to the height attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEFloodElement',
},
{
	title: 'SVGFEFuncAElement',
	text: 'This interface not provide any specific properties, but inherits properties from its parent interface, SVGComponentTransferFunctionElement.This interface does not provide any specific methods, but implements those of its parent, SVGComponentTransferFunctionElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEFuncAElement',
},
{
	title: 'SVGFEFuncBElement',
	text: 'This interface not provide any specific properties, but inherits properties from its parent interface, SVGComponentTransferFunctionElement.This interface does not provide any specific methods, but implements those of its parent, SVGComponentTransferFunctionElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEFuncBElement',
},
{
	title: 'SVGFEFuncGElement',
	text: 'This interface not provide any specific properties, but inherits properties from its parent interface, SVGComponentTransferFunctionElement.This interface does not provide any specific methods, but implements those of its parent, SVGComponentTransferFunctionElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEFuncGElement',
},
{
	title: 'SVGFEFuncRElement',
	text: 'This interface not provide any specific properties, but inherits properties from its parent interface, SVGComponentTransferFunctionElement.This interface does not provide any specific methods, but implements those of its parent, SVGComponentTransferFunctionElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEFuncRElement',
},
{
	title: 'SVGFEGaussianBlurElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedEnumeration corresponding to the edgeMode attribute of the given element. Takes one of the SVG_EDGEMODE_* constants defined on this interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEGaussianBlurElement',
},
{
	title: 'SVGFEImageElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedString reflects the crossorigin attribute of the given element, limited to only known values.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEImageElement',
},
{
	title: 'SVGFEMergeElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedLength corresponding to the height attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEMergeElement',
},
{
	title: 'SVGFEMergeNodeElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedString corresponding to the in attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEMergeNodeElement',
},
{
	title: 'SVGFEMorphologyElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedLength corresponding to the height attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEMorphologyElement',
},
{
	title: 'SVGFEOffsetElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedLength corresponding to the height attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEOffsetElement',
},
{
	title: 'SVGFEPointLightElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedNumber corresponding to the x attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEPointLightElement',
},
{
	title: 'SVGFESpecularLightingElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedLength corresponding to the height attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFESpecularLightingElement',
},
{
	title: 'SVGFESpotLightElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedNumber corresponding to the x attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFESpotLightElement',
},
{
	title: 'SVGFETileElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedLength corresponding to the height attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFETileElement',
},
{
	title: 'SVGFETurbulenceElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedNumber corresponding to the X component of the baseFrequency attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFETurbulenceElement',
},
{
	title: 'SVGFilterElement',
	text: 'An SVGAnimatedString that corresponds to the href or xlink:href attribute of the given <filter> element.An SVGAnimatedEnumeration that corresponds to the filterUnits attribute of the given <filter> element. Takes one of the constants defined in SVGUnitTypes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFilterElement',
},
{
	title: 'SVGFontElement',
	text: 'The SVGFontElement interface corresponds to the <font> elements.Object-oriented access to the attributes of the <font> element via the SVG DOM is not possible.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFontElement',
},
{
	title: 'SVGFontFaceElement',
	text: 'The SVGFontFaceElement interface corresponds to the <font-face> elements.Object-oriented access to the attributes of the <font-face> element via the SVG DOM is not possible.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFontFaceElement',
},
{
	title: 'SVGFontFaceFormatElement',
	text: 'The SVGFontFaceFormatElement interface corresponds to the <font-face-format> elements.Object-oriented access to the attributes of the <font-face-format> element via the SVG DOM is not possible.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFontFaceFormatElement',
},
{
	title: 'SVGFontFaceNameElement',
	text: 'The SVGFontFaceNameElement interface corresponds to the <font-face-name> elements.Object-oriented access to the attributes of the <font-face-name> element via the SVG DOM is not possible.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFontFaceNameElement',
},
{
	title: 'SVGFontFaceSrcElement',
	text: 'The SVGFontFaceSrcElement interface corresponds to the <font-face-src> elements.Object-oriented access to the attributes of the <font-face-src> element via the SVG DOM is not possible.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFontFaceSrcElement',
},
{
	title: 'SVGFontFaceUriElement',
	text: 'The SVGFontFaceUriElement interface corresponds to the <font-face-uri> elements.Object-oriented access to the attributes of the <font-face-uri> element via the SVG DOM is not possible.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFontFaceUriElement',
},
{
	title: 'SVGForeignObjectElement',
	text: 'This interface also inherits properties from its parent, SVGGraphicsElement.An SVGAnimatedLength corresponding to the x attribute of the given <foreignObject> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGForeignObjectElement',
},
{
	title: 'SVGGElement',
	text: 'This interface doesn t implement any specific properties, but inherits properties from its parent interface, SVGGraphicsElement.This interface doesn t implement any specific methods, but inherits methods from its parent interface, SVGGraphicsElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGGElement',
},
{
	title: 'SVGGeometryElement',
	text: 'This interface also inherits properties from its parent, SVGGraphicsElement.This property reflects the pathLength attribute.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement',
},
{
	title: 'SVGGlyphElement',
	text: 'The SVGGlyphElement interface corresponds to the <glyph> element.Object-oriented access to the attributes of the <glyph> element via the SVG DOM is not possible.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGGlyphElement',
},
{
	title: 'SVGGlyphRefElement',
	text: 'The SVGGlyphRefElement interface corresponds to the <glyphRef> elements.This interface also inherits properties from its parent, SVGElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGGlyphRefElement',
},
{
	title: 'SVGGradientElement',
	text: 'This interface also inherits properties from its parent, SVGElement.An SVGAnimatedString corresponding to the href or xlink:href attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGGradientElement',
},
{
	title: 'SVGGraphicsElement',
	text: 'This interface also inherits properties from its parent, SVGElement.An SVGStringList reflecting the requiredExtensions attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGGraphicsElement',
},
{
	title: 'SVGHKernElement',
	text: 'The SVGHKernElement interface corresponds to the <hkern> elements.Object-oriented access to the attributes of the <hkern> element via the SVG DOM is not possible.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGHKernElement',
},
{
	title: 'SVGImageElement',
	text: 'This interface also inherits properties from its parent, SVGGraphicsElement.An SVGAnimatedString corresponding to the href or xlink:href attribute of the given <image> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement',
},
{
	title: 'SVGLength',
	text: 'An SVGLength object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.Results on a desktop monitor (pixel units will be dpi-dependent):',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGLength',
},
{
	title: 'SVGLengthList',
	text: 'An SVGLengthList object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.Note: Starting in Gecko 5.0,the SVGLengthList DOM interface is now indexable and can be accessed like arrays',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGLengthList',
},
{
	title: 'SVGLinearGradientElement',
	text: 'This interface also inherits properties from its parent, SVGGradientElement.An SVGAnimatedLength corresponding to the x1 attribute of the given <linearGradient> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGLinearGradientElement',
},
{
	title: 'SVGLineElement',
	text: 'This interface also inherits properties from its parent, SVGGeometryElement.Returns an SVGAnimatedLength that corresponds to attribute x1 on the given <line> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGLineElement',
},
{
	title: 'SVGMarkerElement',
	text: 'The following properties and methods all return, or act on the attributes of the <marker> element represented by SVGMarkerElement.This interface also inherits properties from its parent, SVGElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGMarkerElement',
},
{
	title: 'SVGMaskElement',
	text: 'This interface also inherits properties from its parent, SVGElement.An SVGAnimatedEnumeration corresponding to the maskUnits attribute of the given <mask> element. Takes one of the constants defined in SVGUnitTypes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGMaskElement',
},
{
	title: 'SVGMatrix',
	text: 'Many of SVG s graphics operations utilize 2x3 matrices of the form:which, when expanded into a 3x3 matrix for the purposes of matrix arithmetic, become:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix',
},
{
	title: 'SVGMetadataElement',
	text: 'This interface doesn t implement any specific properties, but inherits properties from its parent interface, SVGElement.This interface doesn t implement any specific methods, but inherits methods from its parent interface, SVGElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGMetadataElement',
},
{
	title: 'SVGMissingGlyphElement',
	text: 'The SVGMissingGlyphElement interface corresponds to the <missing-glyph> elements.Object-oriented access to the attributes of the <missing-glyph> element via the SVG DOM is not possible.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGMissingGlyphElement',
},
{
	title: 'SVGMPathElement',
	text: 'This interface also inherits properties from its parent, SVGElement.An SVGAnimatedString that corresponds to the href or xlink:href attribute of the given <mpath> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGMPathElement',
},
{
	title: 'SVGNumber',
	text: 'An SVGNumber object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.A float representing the number.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGNumber',
},
{
	title: 'SVGNumberList',
	text: 'An SVGNumberList object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.Note: Starting in Gecko 5.0,the SVGNumberList DOM interface is now indexable and can be accessed like arrays.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGNumberList',
},
{
	title: 'SVGPathElement',
	text: 'Note: In SVG 2 the getPathSegAtLength() and createSVGPathSeg* methods were removed and the pathLength property and the getTotalLength() and getPointAtLength() methods were moved to SVGGeometryElement.This interface inherits properties from its parent, SVGGeometryElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement',
},
{
	title: 'SVGPatternElement',
	text: 'This interface also inherits properties from its parent, SVGElement and implements the ones from SVGFitToViewBox.An SVGAnimatedString corresponding to the href or xlink:href attribute of the given <pattern> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGPatternElement',
},
{
	title: 'SVGPoint',
	text: '\n  Warning: SVGPoint is deprecated.\n  Use DOMPoint or DOMPointReadOnly instead.\n  An SVGPoint represents a 2D or 3D point in the SVG coordinate system.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGPoint',
},
{
	title: 'SVGPointList',
	text: 'An SVGPointList can be designated as read-only, which means that attempts to modify the object will result in an exception being thrown.Returns the number of points in the list.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGPointList',
},
{
	title: 'SVGPolygonElement',
	text: 'This interface also inherits properties from its parent, SVGGeometryElement.A SVGPointList representing the animated value of the element s points attribute. If the points attribute is not being animated, it contains the same value as the points property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGPolygonElement',
},
{
	title: 'SVGPolylineElement',
	text: 'This interface also inherits properties from its parent, SVGGeometryElement.A SVGPointList representing the animated value of the element s points attribute. If the points attribute is not being animated, it contains the same value as the points property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGPolylineElement',
},
{
	title: 'SVGPreserveAspectRatio',
	text: 'An SVGPreserveAspectRatio object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.Exceptions on setting: a DOMException with code NO_MODIFICATION_ALLOWED_ERR is raised on an attempt to change the value of an attribute on a read only object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGPreserveAspectRatio',
},
{
	title: 'SVGRadialGradientElement',
	text: 'This interface also inherits properties from its parent, SVGGradientElement.An SVGAnimatedLength corresponding to the cx attribute of the given <RadialGradient> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGRadialGradientElement',
},
{
	title: 'SVGRect',
	text: 'An SVGRect object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.The exact effect of this coordinate depends on each element. If the attribute is not specified, the effect is as if a value of 0 were specified.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGRect',
},
{
	title: 'SVGRectElement',
	text: 'This interface also inherits properties from its parent, SVGGeometryElement.Returns an SVGAnimatedLength corresponding to the x attribute of the given <rect> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGRectElement',
},
{
	title: 'SVGRenderingIntent',
	text: 'The SVGRenderingIntent interface defines the enumerated list of possible values for rendering-intent attributes or descriptors.Warning: This interface was removed in the SVG 2 specification.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGRenderingIntent',
},
{
	title: 'SVGScriptElement',
	text: 'An SVGAnimatedString corresponding to the href or xlink:href attribute of the given <script> element.A string corresponding to the type attribute of the given <script> element. A DOMException is raised with the code NO_MODIFICATION_ALLOWED_ERR on an attempt to change the value of a read only attribute.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGScriptElement',
},
{
	title: 'SVGSetElement',
	text: 'This interface doesn t implement any specific properties, but inherits properties from its parent interface, SVGAnimationElement.This interface doesn t implement any specific methods, but inherits methods from its parent interface, SVGAnimationElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGSetElement',
},
{
	title: 'SVGStopElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGAnimatedNumber corresponding to the offset of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGStopElement',
},
{
	title: 'SVGStringList',
	text: 'An SVGStringList object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.\n    Clears all existing current items from the list, with the result being\n    an empty list.\n    ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGStringList',
},
{
	title: 'SVGStyleElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.A string corresponding to the type attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGStyleElement',
},
{
	title: 'SVGSVGElement',
	text: 'This interface also inherits properties from its parent, SVGGraphicsElement and also implements the ones from SVGFitToViewBox.An SVGAnimatedLength corresponding to the x attribute of the given <svg> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGSVGElement',
},
{
	title: 'SVGSwitchElement',
	text: 'This interface doesn t implement any specific properties, but inherits properties from its parent interface, SVGGraphicsElement.This interface doesn t implement any specific methods, but inherits methods from its parent interface, SVGGraphicsElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGSwitchElement',
},
{
	title: 'SVGSymbolElement',
	text: 'This interface doesn t implement any specific properties, but inherits properties from its parent interface, SVGGraphicsElement, and implements properties from SVGFitToViewBox.This interface doesn t implement any specific methods, but inherits methods from its parent interface, SVGGraphicsElement, and implements methods from SVGFitToViewBox.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGSymbolElement',
},
{
	title: 'SVGTextContentElement',
	text: 'This interface also inherits properties from its parent, SVGGraphicsElement.An SVGAnimatedLength reflecting the textLength attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTextContentElement',
},
{
	title: 'SVGTextElement',
	text: 'This interface doesn t implement any specific properties, but inherits properties from its parent interface, SVGTextPositioningElement.This interface doesn t implement any specific methods, but inherits methods from its parent interface, SVGTextPositioningElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTextElement',
},
{
	title: 'SVGTextPathElement',
	text: 'This interface also inherits properties from its parent interface, SVGTextContentElement.An SVGAnimatedString corresponding to the href or xlink:href attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTextPathElement',
},
{
	title: 'SVGTextPositioningElement',
	text: 'This interface also inherits properties from its parent, SVGTextContentElement.Returns an SVGAnimatedLengthList reflecting the x attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTextPositioningElement',
},
{
	title: 'SVGTitleElement',
	text: 'This interface doesn t implement any specific properties, but inherits properties from its parent interface, SVGElement.This interface doesn t implement any specific methods, but inherits methods from its parent interface, SVGElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTitleElement',
},
{
	title: 'SVGTransform',
	text: 'An SVGTransform object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.\n    The matrix that represents this transformation. The matrix object is\n    live, meaning that any changes made to the\n    SVGTransform object are immediately reflected in the\n    matrix object and vice versa. In case the matrix object is changed\n    directly (i.e., without using the methods on the\n    SVGTransform interface itself) then the type of the\n    SVGTransform changes to\n    SVG_TRANSFORM_MATRIX.\n    ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTransform',
},
{
	title: 'SVGTransformList',
	text: 'An SVGTransformList object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.Note: Starting in Gecko 9.0,the SVGTransformList DOM interface is now indexable and can be accessed like Arrays',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTransformList',
},
{
	title: 'SVGTRefElement',
	text: 'The SVGTRefElement interface corresponds to the <tref> elements.Object-oriented access to the attributes of the <tref> element via the SVG DOM is not possible.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTRefElement',
},
{
	title: 'SVGTSpanElement',
	text: 'This interface doesn t provide any specific properties, but inherits the properties from its parent, SVGTextPositioningElement.This interface doesn t provide any specific methods.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTSpanElement',
},
{
	title: 'SVGUnitTypes',
	text: 'This interface doesn t implement any specific properties.This interface doesn t implement any specific methods.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGUnitTypes',
},
{
	title: 'SVGUseElement',
	text: 'This interface also inherits properties from its parent interface, SVGGraphicsElement.An SVGAnimatedString corresponding to the href or xlink:href attribute of the given element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGUseElement',
},
{
	title: 'SVGViewElement',
	text: 'This interface also inherits properties from its parent interface, SVGElement.An SVGStringList corresponding to the viewTarget attribute of the given <view> element. A list of string values which contain the names listed in the viewTarget attribute. Each of the string values can be associated with the corresponding element using the getElementById() method call.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGViewElement',
},
{
	title: 'SVGVKernElement',
	text: 'The SVGVKernElement interface corresponds to the <vkern> elements.Object-oriented access to the attributes of the <vkern> element via the SVG DOM is not possible.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGVKernElement',
},
{
	title: 'SyncEvent',
	text: 'The SyncEvent interface represents a sync action that is dispatched on the ServiceWorkerGlobalScope of a ServiceWorker.This interface inherits from the ExtendableEvent interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent',
},
{
	title: 'SyncManager',
	text: 'None.Create a new sync registration and return a Promise.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SyncManager',
},
{
	title: 'TaskAttributionTiming',
	text: 'The TaskAttributionTiming interface of the Long Tasks API returns information about the work involved in a long task and its associate frame context. The frame context, also called the container, is the iframe, embed or object that is being implicated, on the whole, for a long task.Returns the type of frame container, one of iframe, embed, or object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TaskAttributionTiming',
},
{
	title: 'TaskController',
	text: '\n  The TaskController interface of the Prioritized Task Scheduling API represents a controller object that can be used to both abort and change the priority of one or more prioritized tasks.\n  If there is no need to change task priorities, then AbortController can be used instead.\n\n  A new TaskController instance is created using the TaskController() constructor, optionally specifying a priority for its associated signal (a TaskSignal).\n  If not specified, the signal will have a priority of  user-visible  by default.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TaskController',
},
{
	title: 'TaskPriorityChangeEvent',
	text: 'The TaskPriorityChangeEvent is the interface for the prioritychange event.Creates a new TaskPriorityChangeEvent object, setting an event name and previous priority.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TaskPriorityChangeEvent',
},
{
	title: 'TaskSignal',
	text: 'The TaskSignal interface of the Prioritized Task Scheduling API represents a signal object that allows you to communicate with a prioritized task, and abort it or change the priority (if required) via a TaskController object.\n  An object of this type is created, and associated with, a TaskController.\n  The initial priority of the signal may be set by specifying it as an argument to the TaskController constructor (by default it is  user-visible ).\n  The priority can be changed by calling TaskController.setPriority() on the controller.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TaskSignal',
},
{
	title: 'Text',
	text: 'To understand what a text node is, consider the following document:In that document, there are three text nodes, with the following contents:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Text',
},
{
	title: 'TextDecoder',
	text: 'Note: This feature is available in Web WorkersThis example shows how to decode a Chinese/Japanese character \n  , as represented by five different typed arrays: Uint8Array, Int8Array, Uint16Array, Int16Array, and Int32Array.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder',
},
{
	title: 'TextDecoderStream',
	text: 'Creates a new TextDecoderStream object.An encoding.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextDecoderStream',
},
{
	title: 'TextEncoder',
	text: 'Note: This feature is available in Web WorkersReturns a newly constructed TextEncoder that will generate a byte stream with UTF-8 encoding.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder',
},
{
	title: 'TextEncoderStream',
	text: 'Creates a new TextEncoderStream object.Always returns  utf-8 .',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextEncoderStream',
},
{
	title: 'TextMetrics',
	text: 'A double giving the calculated width of a segment of inline text in CSS pixels. It takes into account the current font of the context.A double giving the distance parallel to the baseline from the alignment point given by the CanvasRenderingContext2D.textAlign property to the left side of the bounding rectangle of the given text, in CSS pixels; positive numbers indicating a distance going left from the given alignment point.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics',
},
{
	title: 'TextTrack',
	text: 'This interface also inherits properties from EventTarget.A TextTrackCueList object listing the currently active set of text track cues. Track cues are active if the current playback position of the media is between the cues  start and end times. Thus, for displayed cues such as captions or subtitles, the active cues are currently being displayed.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextTrack',
},
{
	title: 'TextTrackCue',
	text: 'This interface also inherits properties from EventTarget.The TextTrack that this cue belongs to, or null if it doesn t belong to any.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue',
},
{
	title: 'TextTrackCueList',
	text: 'This interface has no constructor. Retrieve an instance of this object with TextTrack.cues which returns all of the cues in a TextTrack object.An unsigned long that is the number of cues in the list.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCueList',
},
{
	title: 'TextTrackList',
	text: 'Retrieve an instance of this object with the textTracks property of an HTMLMediaElement object.For a given HTMLMediaElement object media, the individual tracks can be accessed using:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList',
},
{
	title: 'TimeEvent',
	text: 'A long that specifies some detail information about the Event, depending on the type of the event. For this event type, indicates the repeat number for the animation.A WindowProxy that identifies the Window from which the event was generated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TimeEvent',
},
{
	title: 'TimeRanges',
	text: 'A TimeRanges object includes one or more ranges of time, each specified by a starting time offset and an ending time offset. You reference each time range by using the start() and end() methods, passing the index number of the time range you want to retrieve.Several members of HTMLMediaElement objects return a normalized TimeRanges object — which the spec describes as having the following characteristics:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges',
},
{
	title: 'Touch',
	text: 'The Touch.radiusX, Touch.radiusY, and Touch.rotationAngle describe the area of contact between the user and the screen, the touch area. This can be helpful when dealing with imprecise pointing devices such as fingers. These values are set to describe an ellipse that as closely as possible matches the entire area of contact (such as the user s fingertip). \n  Experimental\nNote: Many of the properties  values are hardware-dependent; for example, if the device doesn t have a way to detect the amount of pressure placed on the surface, the force value will always be 0. This may also be the case for radiusX and radiusY; if the hardware reports only a single point, these values will be 1.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Touch',
},
{
	title: 'TouchEvent',
	text: 'Touches are represented by the Touch object; each touch is described by a position, size and shape, amount of pressure, and target element. Lists of touches are represented by TouchList objects.Creates a TouchEvent object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent',
},
{
	title: 'TouchList',
	text: 'The number of Touch objects in the TouchList.Returns the Touch object at the specified index in the list.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TouchList',
},
{
	title: 'TrackEvent',
	text: 'It s important not to confuse TrackEvent with the RTCTrackEvent interface, which is used for tracks which are part of an RTCPeerConnection.Events based on TrackEvent are always sent to one of the media track list types:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TrackEvent',
},
{
	title: 'TransformStream',
	text: 'TransformStream is a transferable object.Creates and returns a transform stream object from the given handlers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TransformStream',
},
{
	title: 'TransformStreamDefaultController',
	text: 'When constructing a TransformStream, the TransformStreamDefaultController is created. It therefore has no constructor. The way to get an instance of TransformStreamDefaultController is via the callback methods of TransformStream().Returns the desired size to fill the readable side of the stream s internal queue.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TransformStreamDefaultController',
},
{
	title: 'TransitionEvent',
	text: 'The TransitionEvent interface represents events providing information related to transitions.Creates a TransitionEvent event with the given parameters.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent',
},
{
	title: 'TreeWalker',
	text: 'A TreeWalker can be created using the Document.createTreeWalker() method.This interface doesn t inherit any property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker',
},
{
	title: 'TrustedHTML',
	text: 'The value of a TrustedHTML object is set when the object is created and cannot be changed by JavaScript as there is no setter exposed.Returns a JSON representation of the stored data.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML',
},
{
	title: 'TrustedScript',
	text: 'The value of a TrustedScript object is set when the object is created and cannot be changed by JavaScript as there is no setter exposed.Returns a JSON representation of the stored data.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TrustedScript',
},
{
	title: 'TrustedScriptURL',
	text: 'The value of a TrustedScriptURL object is set when the object is created and cannot be changed by JavaScript as there is no setter exposed.Returns a JSON representation of the stored data.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TrustedScriptURL',
},
{
	title: 'TrustedTypePolicy',
	text: 'A TrustedTypePolicy object is created by TrustedTypePolicyFactory.createPolicy() to define a policy for enforcing security rules on input. Therefore, TrustedTypePolicy has no constructor.A string containing the name of the policy.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy',
},
{
	title: 'TrustedTypePolicyFactory',
	text: 'Returns a TrustedHTML object containing an empty string.Returns a TrustedScript object containing an empty string.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory',
},
{
	title: 'UIEvent',
	text: 'UIEvent derives from Event. Although the UIEvent.initUIEvent() method is kept for backward compatibility, you should create a UIEvent object using the UIEvent() constructor.Several interfaces are direct or indirect descendants of this one: MouseEvent, TouchEvent, FocusEvent, KeyboardEvent, WheelEvent, InputEvent, and CompositionEvent.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/UIEvent',
},
{
	title: 'URL',
	text: 'You normally create a new URL object by specifying the URL as a string when calling its constructor, or by providing a relative URL and a base URL. You can then easily read the parsed components of the URL or make changes to the URL.If a browser doesn t yet support the URL() constructor, you can access a URL object using the Window interface s URL property. Be sure to check to see if any of your target browsers require this to be prefixed.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/URL',
},
{
	title: 'URLPattern',
	text: '\n  More information about the syntax of patterns can be found on the API overview\n  page: URL Pattern API\nNote: This feature is available in Web Workers',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/URLPattern',
},
{
	title: 'URLSearchParams',
	text: 'An object implementing URLSearchParams can directly be used in a for...of structure to iterate over key/value pairs in the same order as they appear in the query string, for example the following two lines are equivalent:Note: This feature is available in Web Workers',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams',
},
{
	title: 'USB',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.The USB interface of the WebUSB API provides attributes and methods for finding and connecting USB devices from a web page.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USB',
},
{
	title: 'USBAlternateInterface',
	text: 'The USBAlternateInterface interface of the WebUSB API provides information about a particular configuration of an interface provided by the USB device. An interface includes one or more alternate settings which can configure a set of endpoints based on the operating mode of the device.Creates a new USBAlternateInterface object which will be populated with information about the alternate interface of the provided USBInterface with the given alternate setting number.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBAlternateInterface',
},
{
	title: 'USBConfiguration',
	text: 'The USBConfiguration interface of the WebUSB API provides information about a particular configuration of a USB device and the interfaces that it supports.Creates a new USBConfiguration object which contains information about the configuration on the provided USBDevice with the given configuration value.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBConfiguration',
},
{
	title: 'USBConnectionEvent',
	text: 'The USBConnectionEvent interface of the WebUSB API is the event type passed to USB.onconnect and USB.ondisconnect when the user agent detects that a new USB device has been connected or disconnected.Returns a USBConnectionEvent object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBConnectionEvent',
},
{
	title: 'USBDevice',
	text: 'The USBDevice interface of the WebUSB API provides access to metadata about a paired USB device and methods for controlling it.A USBConfiguration object for the currently selected interface for a paired USB device.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBDevice',
},
{
	title: 'USBEndpoint',
	text: 'The USBEndpoint interface of the WebUSB API provides information about an endpoint provided by the USB device. An endpoint represents a unidirectional data stream into or out of a device.Creates a new USBEndpoint object which will be populated with information about the endpoint on the provided USBAlternateInterface with the given endpoint number and transfer direction.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBEndpoint',
},
{
	title: 'USBInterface',
	text: 'The USBInterface interface of the WebUSB API provides information about an interface provided by the USB device. An interface represents a feature of the device which implements a particular protocol and may contain endpoints for bidirectional communication.Creates a new USBInterface object which will be populated with information about the interface on the provided USBConfiguration with the given interface number.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBInterface',
},
{
	title: 'USBInTransferResult',
	text: 'The USBInTransferResult interface of the WebUSB API provides the result from a call to the transferIn() and controlTransferIn() methods of the USBDevice interface. It represents the result from requesting a transfer of data from the USB device to the USB host.Creates a new USBInTransferResult object with the provided status and data fields.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBInTransferResult',
},
{
	title: 'USBIsochronousInTransferPacket',
	text: 'The USBIsochronousInTransferPacket interface of the WebUSB API is part of the response from a call to the isochronousTransferIn() method of the USBDevice interface. It represents the status of an individual packet from a request to transfer data from the USB device to the USB host over an isochronous endpoint.Creates a new USBIsochronousInTransferPacket object with the provided status and data fields.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBIsochronousInTransferPacket',
},
{
	title: 'USBIsochronousInTransferResult',
	text: 'The USBIsochronousInTransferResult interface of the WebUSB API provides the result from a call to the isochronousTransferIn() method of the USBDevice interface. It represents the result from requesting a transfer of data from the USB device to the USB host.Creates a new USBIsochronousInTransferResult object with the provided packets and data fields.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBIsochronousInTransferResult',
},
{
	title: 'USBIsochronousOutTransferPacket',
	text: 'The USBIsochronousOutTransferPacket interface of the WebUSB API is part of the response from a call to the isochronousTransferOut() method of the USBDevice interface. It represents the status of an individual packet from a request to transfer data from the USB host to the USB device over an isochronous endpoint.Creates a new USBIsochronousOutTransferPacket object with the provided status and bytesWritten fields.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBIsochronousOutTransferPacket',
},
{
	title: 'USBIsochronousOutTransferResult',
	text: 'The USBIsochronousOutTransferResult interface of the WebUSB API provides the result from a call to the isochronousTransferOut() method of the USBDevice interface. It represents the result from requesting a transfer of data from the USB host to the USB device.Creates a new USBIsochronousOutTransferResult object with the provided packet field.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBIsochronousOutTransferResult',
},
{
	title: 'USBOutTransferResult',
	text: 'The USBOutTransferResult interface of the WebUSB API provides the result from a call to the transferOut() and controlTransferOut() methods of the USBDevice interface. It represents the result from requesting a transfer of data from the USB host to the USB device.Creates a new USBOutTransferResult object with the provided status and bytesWritten fields.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBOutTransferResult',
},
{
	title: 'UserProximityEvent',
	text: 'Warning: UserProximityEvent is not supported by any current major browser, and should not be used.The UserProximityEvent indicates whether a nearby physical object is present by using the proximity sensor of a device.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/UserProximityEvent',
},
{
	title: 'ValidityState',
	text: 'For each of these Boolean properties, a value of true indicates that the specified reason validation may have failed is true, with the exception of the valid property, which is true if the element s value obeys all constraints.A boolean value that is true if the user has provided input that the browser is unable to convert.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ValidityState',
},
{
	title: 'VideoColorSpace',
	text: 'Creates a new VideoColorSpace object.A string containing the color primary describing the color gamut of a video sample.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VideoColorSpace',
},
{
	title: 'VideoDecoder',
	text: 'The VideoDecoder interface of the WebCodecs API decodes chunks of video.Creates a new VideoDecoder object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VideoDecoder',
},
{
	title: 'VideoEncoder',
	text: 'Creates a new VideoEncoder object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VideoEncoder',
},
{
	title: 'VideoFrame',
	text: 'VideoFrame is a transferable object.A VideoFrame object can be created or accessed in a number of ways. The MediaStreamTrackProcessor breaks a media track into individual VideoFrame objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VideoFrame',
},
{
	title: 'VideoPlaybackQuality',
	text: 'The VideoPlaybackQuality interface doesn t inherit properties from any other interfaces.A DOMHighResTimeStamp containing the time in milliseconds between the start of the navigation and the creation of the object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality',
},
{
	title: 'VideoTrack',
	text: 'The most common use for accessing a VideoTrack object is to toggle its selected property in order to make it the active video track for its <video> element.A Boolean value which controls whether or not the video track is active. Only a single video track can be active at any given time, so setting this property to true for one track while another track is active will make that other track inactive.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack',
},
{
	title: 'VideoTrackList',
	text: 'Retrieve an instance of this object with HTMLMediaElement.videoTracks. The individual tracks can be accessed using array syntax or functions such as forEach() for example.This interface also inherits properties from its parent interface, EventTarget.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList',
},
{
	title: 'VisualViewport',
	text: 'You can get a window s visual viewport using Window.visualViewport.Note: Only the top-level window has a visual viewport that s distinct from the layout viewport. Therefore, it s generally only the VisualViewport object of the top-level window that s useful. For an <iframe>, visual viewport metrics like VisualViewport.width always correspond to layout viewport metrics like document.documentElement.clientWidth.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport',
},
{
	title: 'VRDisplay',
	text: 'The VRDisplay interface of the WebVR API represents any VR device supported by this API. It includes generic information such as device IDs and descriptions, as well as methods for starting to present a VR scene, retrieving eye parameters and display capabilities, and other important functionality.Note: This interface was part of the old WebVR API. It has been superseded by the WebXR Device API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay',
},
{
	title: 'VRDisplayCapabilities',
	text: 'The VRDisplayCapabilities interface of the WebVR API describes the capabilities of a VRDisplay — its features can be used to perform VR device capability tests, for example can it return position information.Note: This interface was part of the old WebVR API. It has been superseded by the WebXR Device API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayCapabilities',
},
{
	title: 'VRDisplayEvent',
	text: 'The VRDisplayEvent interface of the WebVR API represents the event object of WebVR-related events (see the list of WebVR window extensions).Note: This interface was part of the old WebVR API. It has been superseded by the WebXR Device API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayEvent',
},
{
	title: 'VREyeParameters',
	text: 'The VREyeParameters interface of the WebVR API represents all the information required to correctly render a scene for a given eye, including field of view information.Note: This interface was part of the old WebVR API. It has been superseded by the WebXR Device API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters',
},
{
	title: 'VRFieldOfView',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.The VRFieldOfView interface of the WebVR API represents a field of view defined by 4 different degree values describing the view from a center point.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VRFieldOfView',
},
{
	title: 'VRFrameData',
	text: 'The VRFrameData interface of the WebVR API represents all the information needed to render a single frame of a VR scene; constructed by VRDisplay.getFrameData().Note: This interface was part of the old WebVR API. It has been superseded by the WebXR Device API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData',
},
{
	title: 'VRLayerInit',
	text: 'The VRLayerInit dictionary of the WebVR API represents a content layer (an HTMLCanvasElement or OffscreenCanvas) that you want to present in a VR display.Note: This dictionary was part of the old WebVR API. It has been superseded by the WebXR Device API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VRLayerInit',
},
{
	title: 'VRPose',
	text: 'The VRPose interface of the WebVR API represents the state of a VR sensor at a given timestamp (which includes orientation, position, velocity, and acceleration information.)Note: This interface was part of the old WebVR API. It has been superseded by the WebXR Device API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VRPose',
},
{
	title: 'VRStageParameters',
	text: 'The VRStageParameters interface of the WebVR API represents the values describing the stage area for devices that support room-scale experiences.Note: This interface was part of the old WebVR API. It has been superseded by the WebXR Device API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VRStageParameters',
},
{
	title: 'VTTCue',
	text: 'Returns a newly created VTTCue object that covers the given time range and has the given text.This interface also inherits properties from TextTrackCue.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VTTCue',
},
{
	title: 'VTTRegion',
	text: 'Returns a newly created VTTRegion object.A string that identifies the region.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VTTRegion',
},
{
	title: 'WakeLock',
	text: 'The WakeLock interface of the Screen Wake Lock API prevents device screens from dimming or locking when an application needs to keep running.The system wake lock is exposed through the global Navigator.wakeLock property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WakeLock',
},
{
	title: 'WakeLockSentinel',
	text: 'The WakeLockSentinel interface of the Screen Wake Lock API provides a handle to the underlying platform wake lock and can be manually released and reacquired. An Object representing the wake lock is returned via the navigator.wakelock.request() method.An acquired WakeLockSentinel can be released manually via the release() method, or automatically via the platform wake lock. This can happen if the document becomes inactive or looses visibility, if the device is low on power or the user turns on a power save mode. Releasing all WakeLockSentinel instances of a given wake lock type will cause the underlying platform wake lock to be released.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WakeLockSentinel',
},
{
	title: 'WaveShaperNode',
	text: 'It is an AudioNode that uses a curve to apply a wave shaping distortion to the signal. Beside obvious distortion effects, it is often used to add a warm feeling to the signal.A WaveShaperNode always has exactly one input and one output.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode',
},
{
	title: 'WEBGL_color_buffer_float',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is available to WebGL 1 contexts only. For WebGL 2, use the EXT_color_buffer_float extension.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_color_buffer_float',
},
{
	title: 'WEBGL_compressed_texture_astc',
	text: 'For more information, see the article Using ASTC Texture Compression for Game Assets by NVIDIA.WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_astc',
},
{
	title: 'WEBGL_compressed_texture_etc',
	text: 'Compressed textures reduce the amount of memory needed to store a texture on the GPU, allowing for higher resolution textures or more of the same resolution textures.WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_etc',
},
{
	title: 'WEBGL_compressed_texture_etc1',
	text: 'Compressed textures reduce the amount of memory needed to store a texture on the GPU, allowing for higher resolution textures or more of the same resolution textures.WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_etc1',
},
{
	title: 'WEBGL_compressed_texture_pvrtc',
	text: 'Compressed textures reduce the amount of memory needed to store a texture on the GPU, allowing for higher resolution textures or more of the same resolution textures.WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_pvrtc',
},
{
	title: 'WEBGL_compressed_texture_s3tc',
	text: 'Compressed textures reduce the amount of memory needed to store a texture on the GPU, allowing for higher resolution textures or more of the same resolution textures.WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_s3tc',
},
{
	title: 'WEBGL_compressed_texture_s3tc_srgb',
	text: 'Compressed textures reduce the amount of memory needed to store a texture on the GPU, allowing for higher resolution textures or more of the same resolution textures.WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb',
},
{
	title: 'WEBGL_debug_renderer_info',
	text: 'Depending on the privacy settings of the browser, this extension might only be available to privileged contexts. Generally, the graphics driver information should only be used in edge cases to optimize your WebGL content or to debug GPU problems. The WebGLRenderingContext.getParameter() method can help you to detect which features are supported and the failIfMajorPerformanceCaveat context attribute lets you control if a context should be returned at all, if the performance would be dramatically slow.WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_debug_renderer_info',
},
{
	title: 'WEBGL_debug_shaders',
	text: 'This extension is not directly available to web sites as the way of how the shader is translated may uncover personally-identifiable information to the web page about the kind of graphics card in the user s computer.WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_debug_shaders',
},
{
	title: 'WEBGL_depth_texture',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is only available to WebGL1 contexts. In WebGL2, the functionality of this extension is available on the WebGL2 context by default. The constant in WebGL2 is gl.UNSIGNED_INT_24_8.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_depth_texture',
},
{
	title: 'WEBGL_draw_buffers',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is only available to WebGL1 contexts. In WebGL2, the functionality of this extension is available on the WebGL2 context by default. In WebGL 2, the constants are available without the  WEBGL  suffix and the new GLSL built-ins require GLSL #version 300 es.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_draw_buffers',
},
{
	title: 'WEBGL_lose_context',
	text: 'WebGL extensions are available using the WebGLRenderingContext.getExtension() method. For more information, see also Using Extensions in the WebGL tutorial.Note: This extension is available to both, WebGL1 and WebGL2 contexts.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_lose_context',
},
{
	title: 'WEBGL_multi_draw',
	text: 'When this extension is enabled:\n  Note: This extension is available to both,\n  WebGL 1 and\n  WebGL 2 contexts.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_multi_draw',
},
{
	title: 'WebGL2RenderingContext',
	text: 'To get an object of this interface, call getContext() on a <canvas> element, supplying  webgl2  as the argument:Note: WebGL 2 is an extension to WebGL 1. The WebGL2RenderingContext interface implements all members of the WebGLRenderingContext interface. Some methods of the WebGL 1 context can accept additional values when used in a WebGL 2 context. You will find this info noted on the WebGL 1 reference pages.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext',
},
{
	title: 'WebGLActiveInfo',
	text: 'The read-only name of the requested variable.The read-only size of the requested variable.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLActiveInfo',
},
{
	title: 'WebGLBuffer',
	text: 'The WebGLBuffer object does not define any methods or properties of its own and its content is not directly accessible. When working with WebGLBuffer objects, the following methods of the WebGLRenderingContext are useful:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer',
},
{
	title: 'WebGLContextEvent',
	text: 'This interface inherits properties from its parent interface, Event.A read-only property containing additional information about the event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLContextEvent',
},
{
	title: 'WebGLFramebuffer',
	text: 'The WebGLFramebuffer object does not define any methods or properties of its own and its content is not directly accessible. When working with WebGLFramebuffer objects, the following methods of the WebGLRenderingContext are useful:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLFramebuffer',
},
{
	title: 'WebGLProgram',
	text: 'To create a WebGLProgram, call the GL context s createProgram() function. After attaching the shader programs using attachShader(), you link them into a usable program. This is shown in the code below.See WebGLShader for information on creating the vertexShader and fragmentShader in the above example.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram',
},
{
	title: 'WebGLQuery',
	text: 'Another kind of queries are disjoint timer queries, which allow you to measure performance and profiling of your GPU. Disjoint timer queries are available with the EXT_disjoint_timer_query extension only.When working with WebGLQuery objects, the following methods of the WebGL2RenderingContext are useful:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLQuery',
},
{
	title: 'WebGLRenderbuffer',
	text: 'The WebGLRenderbuffer object does not define any methods or properties of its own and its content is not directly accessible. When working with WebGLRenderbuffer objects, the following methods of the WebGLRenderingContext are useful:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderbuffer',
},
{
	title: 'WebGLRenderingContext',
	text: 'To get an access to a WebGL context for 2D and/or 3D graphics rendering, call getContext() on a <canvas> element, supplying  webgl  as the argument:Once you have the WebGL rendering context for a canvas, you can render within it. The WebGL tutorial has more information, examples, and resources on how to get started with WebGL.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext',
},
{
	title: 'WebGLSampler',
	text: 'When working with WebGLSampler objects, the following methods of the WebGL2RenderingContext are useful:in this example, gl must be a WebGL2RenderingContext. WebGLSampler objects are not available in WebGL 1.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLSampler',
},
{
	title: 'WebGLShader',
	text: 'To create a WebGLShader use WebGLRenderingContext.createShader, then hook up the GLSL source code using WebGLRenderingContext.shaderSource(), and finally invoke WebGLRenderingContext.compileShader() to finish and compile the shader. At this point the WebGLShader is still not in a usable form and must still be attached to a WebGLProgram.See WebGLProgram for information on attaching the shaders.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLShader',
},
{
	title: 'WebGLShaderPrecisionFormat',
	text: 'The base 2 log of the absolute value of the minimum value that can be represented.The base 2 log of the absolute value of the maximum value that can be represented.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat',
},
{
	title: 'WebGLSync',
	text: 'When working with WebGLSync objects, the following methods of the WebGL2RenderingContext are useful:in this example, gl must be a WebGL2RenderingContext. WebGLSync objects are not available in WebGL 1.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLSync',
},
{
	title: 'WebGLTexture',
	text: 'The WebGLTexture object does not define any methods or properties of its own and its content is not directly accessible. When working with WebGLTexture objects, the following methods of the WebGLRenderingContext are useful:See also the WebGL tutorial on Using textures in WebGL.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLTexture',
},
{
	title: 'WebGLTransformFeedback',
	text: 'When working with WebGLTransformFeedback objects, the following methods of the WebGL2RenderingContext are useful:in this example, gl must be a WebGL2RenderingContext. WebGLTransformFeedback objects are not available in WebGL 1.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLTransformFeedback',
},
{
	title: 'WebGLUniformLocation',
	text: 'The WebGLUniformLocation object does not define any methods or properties of its own and its content is not directly accessible. When working with WebGLUniformLocation objects, the following methods of the WebGLRenderingContext are useful:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLUniformLocation',
},
{
	title: 'WebGLVertexArrayObject',
	text: 'When working with WebGLVertexArrayObject objects, the following methods are useful:Note: The OES_vertex_array_object extension allows you to use vertex array objects in a WebGL 1 context.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLVertexArrayObject',
},
{
	title: 'WebSocket',
	text: 'To construct a WebSocket, use the WebSocket() constructor.Note: This feature is available in Web Workers',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket',
},
{
	title: 'WheelEvent',
	text: 'Note: This is the standard wheel event interface to use. Old versions of browsers implemented the non-standard and non-cross-browser-compatible MouseWheelEvent and MouseScrollEvent interfaces. Use this interface and avoid the non-standard ones.Note: Do not confuse the wheel event with the scroll event. The default action of a wheel event is implementation-defined. Thus, a wheel event doesn t necessarily dispatch a scroll event. Even when it does, that doesn t mean that the delta* values in the wheel event necessarily reflect the content s scrolling direction. Therefore, do not rely on delta* properties to get the content s scrolling direction. Instead, detect value changes to scrollLeft and scrollTop of the target in the scroll event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent',
},
{
	title: 'Window',
	text: 'A window for a given document can be obtained using the document.defaultView property.A global variable, window, representing the window in which the script is running, is exposed to JavaScript code.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window',
},
{
	title: 'WindowClient',
	text: 'WindowClient inherits methods from its parent interface, Client.Gives user input focus to the current client.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WindowClient',
},
{
	title: 'WindowControlsOverlay',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.\n  The WindowControlsOverlay interface of the Window Controls Overlay API exposes information about the geometry\n  of the title bar area in desktop Progressive Web Apps, and an event to know whenever it changes. This interface is accessible from Navigator.windowControlsOverlay.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WindowControlsOverlay',
},
{
	title: 'WindowControlsOverlayGeometryChangeEvent',
	text: 'Creates a WindowControlsOverlayGeometryChangeEvent event with the given parameters.Also inherits properties from its parent Event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WindowControlsOverlayGeometryChangeEvent',
},
{
	title: 'Worker',
	text: 'Creating a worker is done by calling the Worker( path/to/worker/script ) constructor.Workers may themselves spawn new workers, as long as those workers are hosted at the same origin as the parent page. (Note: nested workers are not yet implemented in WebKit).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Worker',
},
{
	title: 'WorkerGlobalScope',
	text: 'This interface is usually specialized by each worker type: DedicatedWorkerGlobalScope for dedicated workers, SharedWorkerGlobalScope for shared workers, and ServiceWorkerGlobalScope for ServiceWorker. The self property returns the specialized scope for each context.This interface inherits properties from the EventTarget interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope',
},
{
	title: 'WorkerLocation',
	text: 'This interface is only visible from inside a JavaScript script executed in the context of a Web worker.Returns a string containing the serialized URL for the worker s location.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WorkerLocation',
},
{
	title: 'WorkerNavigator',
	text: 'The WorkerNavigator interface doesn t inherit any property.Always returns  Mozilla , in any browser. This property is kept only for compatibility purposes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator',
},
{
	title: 'Worklet',
	text: 'The Worklet interface is a lightweight version of Web Workers and gives developers access to low-level parts of the rendering pipeline.With Worklets, you can run JavaScript and WebAssembly code to do graphics rendering or audio processing where high performance is required.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Worklet',
},
{
	title: 'WritableStream',
	text: 'WritableStream is a transferable object.Creates a new WritableStream object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WritableStream',
},
{
	title: 'WritableStreamDefaultController',
	text: 'None. WritableStreamDefaultController instances are created automatically during WritableStream construction.None.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultController',
},
{
	title: 'WritableStreamDefaultWriter',
	text: 'The WritableStreamDefaultWriter interface of the Streams API is the object returned by WritableStream.getWriter() and once created locks the writer to the WritableStream ensuring that no other streams can write to the underlying sink.Creates a new WritableStreamDefaultWriter object instance.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter',
},
{
	title: 'XMLDocument',
	text: 'Also inherits properties from: DocumentUsed with XMLDocument.load() to indicate an asynchronous request.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XMLDocument',
},
{
	title: 'XMLHttpRequest',
	text: 'XMLHttpRequest is used heavily in AJAX programming.Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest',
},
{
	title: 'XMLHttpRequestEventTarget',
	text: 'You don t use XMLHttpRequestEventTarget directly; instead you interact with the sub classes.The following events are made available to XMLHttpRequest:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget',
},
{
	title: 'XMLSerializer',
	text: 'Returns the serialized subtree of a string.The first, basic, example just serializes an entire document into a string containing XML.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer',
},
{
	title: 'XPathEvaluator',
	text: 'It is implemented by the Document interface.Creates a parsed XPath expression with resolved namespaces.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator',
},
{
	title: 'XPathException',
	text: 'In the DOM XPath API the XPathException interface represents exception conditions that can be encountered while performing XPath operations.Returns a short that contains one of the error code constants.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XPathException',
},
{
	title: 'XPathExpression',
	text: 'This is useful when an expression will be reused in an application, because it is just compiled once and all namespace prefixes which occur within the expression are preresolved.Objects of this type are created by calling XPathEvaluator.createExpression().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XPathExpression',
},
{
	title: 'XPathNSResolver',
	text: 'The XPathEvaluator interface can construct an implementation of XPathNSResolver from a node, or the interface may be implemented by any application.Looks up the namespace URI associated to the given namespace prefix.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XPathNSResolver',
},
{
	title: 'XPathResult',
	text: 'Since XPath expressions can result in a variety of result types, this interface makes it possible to determine and handle the type and value of the result.A boolean representing the value of the result if resultType is BOOLEAN_TYPE.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XPathResult',
},
{
	title: 'XRAnchor',
	text: 'The XRAnchor interface creates anchors which keep track of the pose that is fixed relative to the real world. With anchors, you can specify poses in the world that need to be updated to correctly reflect the evolving understanding of the world, such that the poses remain aligned with the same place in the physical world. That helps to build an illusion that the placed objects are really present in the user s environment.Returns an XRSpace object to locate the anchor relative to other XRSpace objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRAnchor',
},
{
	title: 'XRAnchorSet',
	text: 'See Set for details.See Set for details.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRAnchorSet',
},
{
	title: 'XRBoundedReferenceSpace',
	text: 'The WebXR Device API s XRBoundedReferenceSpace interface describes a virtual world reference space which has preset boundaries. This extends XRReferenceSpace, which describes an essentially unrestricted space around the viewer s position. These bounds are defined using an array of points, each of which defines a vertex in a polygon inside which the user is allowed to move.This is typically used when the XR system is capable of tracking the user s physical movement within a limited distance of their starting position. The specified bounds may, in fact, describe the shape and size of the room the user is located in, in order to let the WebXR site or application prevent the user from colliding with the walls or other obstacles in the real world. At a minimum, the boundaries indicate the area in which the XR device is capable of tracking the user s movement. See the article Using bounded reference spaces for details on how bounded spaces work and why they re useful.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRBoundedReferenceSpace',
},
{
	title: 'XRCompositionLayer',
	text: 'The XRCompositionLayer interface of the WebXR Device API is a base class that defines a set of common properties and behaviors for WebXR layer types. It is not constructable on its own.Several layer types inherit from XRCompositionLayer:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRCompositionLayer',
},
{
	title: 'XRCPUDepthInformation',
	text: 'The XRCPUDepthInformation interface contains depth information from the CPU (returned by XRFrame.getDepthInformation()).This interface inherits properties from its parent, XRDepthInformation.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRCPUDepthInformation',
},
{
	title: 'XRCubeLayer',
	text: 'The XRCubeLayer interface of the WebXR Device API is a layer that renders directly from a cubemap and projects it onto the inside faces of a cube.XRCubeLayer requires the layers feature to be enabled for the XRSession. You can request it in XRSystem.requestSession().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRCubeLayer',
},
{
	title: 'XRCylinderLayer',
	text: 'The XRCylinderLayer interface of the WebXR Device API is a layer that takes up a curved rectangular space in the virtual environment. Only the front of the layer is visible.XRCylinderLayer requires the layers feature to be enabled for the XRSession. You can request it in XRSystem.requestSession().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRCylinderLayer',
},
{
	title: 'XRDepthInformation',
	text: 'The XRDepthInformation interface contains information about the distance from the user s device to the real-world geometry in the user s environment.This interface is the parent of:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRDepthInformation',
},
{
	title: 'XREquirectLayer',
	text: 'The XREquirectLayer interface of the WebXR Device API is a layer that maps equirectangular coded data onto the inside of a sphere.XREquirectLayer requires the layers feature to be enabled for the XRSession. You can request it in XRSystem.requestSession().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XREquirectLayer',
},
{
	title: 'XRFrame',
	text: 'A WebXR Device API XRFrame object is passed into the requestAnimationFrame() callback function and provides access to the information needed in order to render a single frame of animation for an XRSession describing a VR or AR scene. Events which communicate the tracking state of objects also provide an XRFrame reference as part of their structure.In addition to providing a reference to the XRSession for which this frame is to be rendered, the getViewerPose() method is provided to obtain the XRViewerPose describing the viewer s position and orientation in space, and getPose() can be used to create an XRPose describing the relative position of one XRSpace relative to another.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRFrame',
},
{
	title: 'XRHand',
	text: 'XRHand is returned by XRInputSource.hand.Returns 25, the size of the pair iterator.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRHand',
},
{
	title: 'XRHitTestResult',
	text: 'The XRHitTestResult interface of the WebXR Device API contains a single result of a hit test. You can get an array of XRHitTestResult objects for a frame by calling XRFrame.getHitTestResults().None.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRHitTestResult',
},
{
	title: 'XRHitTestSource',
	text: 'The XRHitTestSource interface of the WebXR Device API handles hit test subscriptions. You can get an XRHitTestSource object by using the XRSession.requestHitTestSource() method.This object doesn t itself contain hit test results, but it is used to compute hit tests for each XRFrame by calling XRFrame.getHitTestResults(), which returns XRHitTestResult objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRHitTestSource',
},
{
	title: 'XRInputSource',
	text: 'The WebXR Device API s XRInputSource interface describes a single source of control input which is part of the user s WebXR-compatible virtual or augmented reality system. The device is specific to the platform being used, but provides the direction in which it is being aimed and optionally may generate events if the user triggers performs actions using the device.A Gamepad object describing the state of the buttons and axes on the XR input source, if it is a gamepad or comparable device. If the device isn t a gamepad-like device, this property s value is null.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRInputSource',
},
{
	title: 'XRInputSourceArray',
	text: 'The interface XRInputSourceArray represents a live list of WebXR input sources, and is used as the return value of the XRSession property inputSources. Each entry is an XRInputSource representing one input device connected to the WebXR system.In addition to being able to access the input sources in the list using standard array notation (that is, with index numbers inside square brackets), methods are available to allow the use of iterators and the forEach() method is also available.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRInputSourceArray',
},
{
	title: 'XRInputSourceEvent',
	text: 'The WebXR Device API s XRInputSourceEvent interface describes an event which has occurred on a WebXR user input device such as a hand controller, gaze tracking system, or motion tracking system. More specifically, they represent a change in the state of an XRInputSource.To learn more about handling inputs in a WebXR project, see the article Inputs and input sources.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRInputSourceEvent',
},
{
	title: 'XRInputSourcesChangeEvent',
	text: 'The WebXR Device API interface XRInputSourcesChangeEvent is used to represent the inputsourceschange event sent to an XRSession when the set of available WebXR input controllers changes.Creates and returns a new XRInputSourcesChangeEvent object. The specified type must be inputsourceschange, which is the only event that uses this interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRInputSourcesChangeEvent',
},
{
	title: 'XRJointPose',
	text: 'The radius (distance from skin) for a joint.Call XRFrame.getJointPose() with an XRJointSpace and an XRReferenceSpace to get an XRJointPose object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRJointPose',
},
{
	title: 'XRJointSpace',
	text: 'The name of the joint that is tracked. See XRHand for possible hand joint names.You can use an XRJointSpace object and an XRReferenceSpace to get an XRJointPose by calling XRFrame.getJointPose().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRJointSpace',
},
{
	title: 'XRLayer',
	text: 'The XRLayer interface of the WebXR Device API is the base class for WebXR layer types. It inherits methods from EventTarget.Below is a list of interfaces based on the XRLayer interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRLayer',
},
{
	title: 'XRLayerEvent',
	text: 'The XRLayerEvent interface of the WebXR Device API is the event type for events related to a change of state of an XRLayer object. These events occur, for example, when the layer needs to be redrawn.Creates and returns a new XRLayerEvent object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRLayerEvent',
},
{
	title: 'XRLightEstimate',
	text: 'The XRLightEstimate interface of the WebXR Device API provides the estimated lighting values for an XRLightProbe at the time represented by an XRFrame.To get an XRLightEstimateobject, call the XRFrame.getLightEstimate() method.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRLightEstimate',
},
{
	title: 'XRLightProbe',
	text: 'The XRLightProbe interface of the WebXR Device API contains lighting information at a given point in the user s environment. You can get an XRLighting object using the XRSession.requestLightProbe() method.This object doesn t itself contain lighting values, but it is used to collect lighting states for each XRFrame. See XRLightEstimate for the estimated lighting values for an XRLightProbe.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRLightProbe',
},
{
	title: 'XRMediaBinding',
	text: 'The XRMediaBinding interface is used to create layers that display the content of an HTMLVideoElement.\n  Note:\n  Only the video frames will be displayed in the layer. Video controls need to be implemented separately and must be drawn in another layer.\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRMediaBinding',
},
{
	title: 'XRPermissionStatus',
	text: 'The XRPermissionStatus interface defines the object returned by calling navigator.permissions.query() for the xr permission name; it indicates whether or not the app or site has permission to use WebXR, and may be monitored over time for changes to that permissions tate.In addition to the properties listed below, XRPermissionStatus includes the properties defined by its parent interface, PermissionStatus.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRPermissionStatus',
},
{
	title: 'XRPose',
	text: 'XRPose is a WebXR API interface representing a position and orientation in the 3D space, relative to the XRSpace within which it resides. The XRSpace—which is either an XRReferenceSpace or an XRBoundedReferenceSpace—defines the coordinate system used for the pose and, in the case of an XRViewerPose, its underlying views.To obtain the XRPose for the XRSpace used as the local coordinate system of an object, call XRFrame.getPose(), specifying that local XRSpace and the space to which you wish to convert:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRPose',
},
{
	title: 'XRProjectionLayer',
	text: 'The XRProjectionLayer interface of the WebXR Device API is a layer that fills the entire view of the observer and is refreshed close to the device s native frame rate.XRProjectionLayer is supported by all XRSession objects (no layers feature descriptor is needed).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRProjectionLayer',
},
{
	title: 'XRQuadLayer',
	text: 'The XRQuadLayer interface of the WebXR Device API is a layer that takes up a flat rectangular space in the virtual environment. An XRQuadLayer has no thickness. It is a two-dimensional object positioned and oriented in 3D space. The position of a quad refers to the center of the quad. Only the front of the layer is visible.XRQuadLayer requires the layers feature to be enabled for the XRSession. You can request it in XRSystem.requestSession().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRQuadLayer',
},
{
	title: 'XRRay',
	text: 'The XRRay interface of the WebXR Device API is a geometric ray described by an origin point and a direction vector.XRRay objects can be passed to XRSession.requestHitTestSource() or XRSession.requestHitTestSourceForTransientInput() to perform hit testing.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRRay',
},
{
	title: 'XRReferenceSpace',
	text: 'The WebXR Device API s XRReferenceSpace interface describes the coordinate system for a specific tracked entity or object within the virtual world using a specified tracking behavior. The tracking behavior is defined by the selected reference space type. It expands upon the base class, XRSpace, by adding support for several different tracking behaviors as well as to request a new reference space which describes the offset transform between the tracked object and another location in the world.All reference spaces—with the sole exception being bounded reference spaces—are described using the XRReferenceSpace type. Bounded spaces are implemented as XRBoundedReferenceSpace objects. These are special spaces which let you establish a perimeter within which it s  safe  for the viewer to move. For XR systems that allow the user to physically move around, such as those that track movement with a real-world camera, this boundary establishes the edges of the area the user is able to move around in, whether due to physical obstacles or due to limitations of the XR hardware. See the article Using bounded reference spaces to protect the viewer for more on using boundaries to keep the user from colliding with obstacles both physical and virtual.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpace',
},
{
	title: 'XRReferenceSpaceEvent',
	text: 'The WebXR Device API interface XRReferenceSpaceEvent represents an event sent to an XRReferenceSpace. Currently, the only event that uses this type is the reset event.Returns a new XRReferenceSpaceEvent with the specified type and configuration.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceEvent',
},
{
	title: 'XRRenderState',
	text: 'The XRRenderState interface of the WebXR Device API contains configurable values which affect how the imagery generated by an XRSession gets composited. These properties include the range of distances from the viewer within which content should be rendered, the vertical field of view (for inline presentations), and a reference to the XRWebGLLayer being used as the target for rendering the scene prior to it being presented on the XR device s display or displays.When you apply changes using the XRSession method updateRenderState(), the specified changes take effect after the current animation frame has completed, but before the next one begins.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRRenderState',
},
{
	title: 'XRRigidTransform',
	text: 'XRRigidTransform is used to specify transforms throughout the WebXR APIs, including:Using XRRigidTransform in these places rather than bare arrays that provide the matrix data has an advantage. It automatically computes the inverse of the transform and even caches it making subsequent requests significantly faster.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRRigidTransform',
},
{
	title: 'XRSession',
	text: 'The WebXR Device API s XRSession interface represents an ongoing XR session, providing methods and properties used to interact with and control the session. To open a WebXR session, use the XRSystem interface s requestSession() method.With XRSession methods, you can poll the viewer s position and orientation (the XRViewerPose), gather information about the user s environment, and present imagery to the user. XRSession supports both inline and immersive virtual and augmented reality modes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRSession',
},
{
	title: 'XRSessionEvent',
	text: 'Creates and returns a new XRSessionEvent object.In addition to properties inherited from its parent interface, Event, XRSessionEvent provides the following:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRSessionEvent',
},
{
	title: 'XRSpace',
	text: 'The XRSpace interface of the WebXR Device API is an abstract interface providing a common basis for every class which represents a virtual coordinate system within the virtual world, in which its origin corresponds to a physical location. Spatial data in WebXR is always expressed relative to an object based upon one of the descendant interfaces of XRSpace, at the time at which a given XRFrame takes place.Numeric values such as pose positions are thus coordinates in the corresponding XRSpace, relative to that space s origin.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRSpace',
},
{
	title: 'XRSubImage',
	text: 'The XRSubImage interface of the WebXR Device API represents what viewport of the GPU texture to use for rendering.Below is a list of interfaces based on the XRSubImage interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRSubImage',
},
{
	title: 'XRSystem',
	text: 'The WebXR Device API interface XRSystem provides methods which let you get access to an XRSession object representing a WebXR session. With that XRSession in hand, you can use it to interact with the Augmented Reality (AR) or Virtual Reality (VR) device.While XRSystem directly offers no properties, it does inherit properties from its parent interface, EventTarget.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRSystem',
},
{
	title: 'XRTransientInputHitTestResult',
	text: 'The XRTransientInputHitTestResult interface of the WebXR Device API contains an array of results of a hit test for transient input, grouped by input source.You can get an array of XRHitTestResult objects for a frame by calling XRFrame.getHitTestResultsForTransientInput().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRTransientInputHitTestResult',
},
{
	title: 'XRTransientInputHitTestSource',
	text: 'The XRTransientInputHitTestSource interface of the WebXR Device API handles transient input hit test subscriptions. You can get an XRTransientInputHitTestSource object by calling the XRSession.requestHitTestSourceForTransientInput().This object doesn t itself contain transient input hit test results, but it is used to compute hit tests for each XRFrame by calling XRFrame.getHitTestResultsForTransientInput(), which returns XRTransientInputHitTestResult objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRTransientInputHitTestSource',
},
{
	title: 'XRView',
	text: 'The WebXR Device API s XRView interface describes a single view into the XR scene for a specific frame, providing orientation and position information for the viewpoint. You can think of it as a description of a specific eye or camera and how it views the world. A 3D frame will involve two views, one for each eye, separated by an appropriate distance which approximates the distance between the viewer s eyes. This allows the two views, when projected in isolation into the appropriate eyes, to simulate a 3D world.Which of the two eyes (left) or (right) for which this XRView represents the perspective. This value is used to ensure that any content which is pre-rendered for presenting to a specific eye is distributed or positioned correctly. The value can also be none if the XRView is presenting monoscopic data (such as a 2D image, a fullscreen view of text. or a close-up view of something that doesn t need to appear in 3D).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRView',
},
{
	title: 'XRViewerPose',
	text: 'This view can represent anything from the point-of-view of a user s XR headset to the viewpoint represented by a player s movement of an avatar using mouse and keyboard, presented on the screen, to a virtual camera capturing the scene for a spectator.In addition to the properties inherited from XRPose, XRViewerPose includes the following:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRViewerPose',
},
{
	title: 'XRViewport',
	text: 'The WebXR Device API s XRViewport interface provides properties used to describe the size and position of the current viewport within the XRWebGLLayer being used to render the 3D scene.The height, in pixels, of the viewport.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRViewport',
},
{
	title: 'XRWebGLBinding',
	text: 'The XRWebGLBinding interface is used to create layers that have a GPU backend.Creates a new XRWebGLBinding object for the specified XR session and WebGL rendering context.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRWebGLBinding',
},
{
	title: 'XRWebGLDepthInformation',
	text: 'The XRWebGLDepthInformation interface contains depth information from the GPU/WebGL (returned by XRWebGLBinding.getDepthInformation()).This interface inherits properties from its parent, XRDepthInformation.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRWebGLDepthInformation',
},
{
	title: 'XRWebGLLayer',
	text: 'The XRWebGLLayer interface of the WebXR Device API provides a linkage between the WebXR device (or simulated XR device, in the case of an inline session) and a WebGL context used to render the scene for display on the device. In particular, it provides access to the WebGL framebuffer and viewport to ease access to the context.Although XRWebGLLayer is currently the only type of framebuffer layer supported by WebGL, it s entirely possible that future updates to the WebXR specification may allow for other layer types and corresponding image sources.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRWebGLLayer',
},
{
	title: 'XRWebGLSubImage',
	text: 'The XRWebGLSubImage interface is used during rendering of WebGL layers.Inherits properties from its parent, XRSubImage.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRWebGLSubImage',
},
{
	title: 'XSLTProcessor',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.\n  An XSLTProcessor applies an XSLT stylesheet transformation to an XML document to\n  produce a new XML document as output. It has methods to load the XSLT stylesheet, to\n  manipulate <xsl:param> parameter values, and to apply the\n  transformation to documents.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor',
},
{
	title: 'Event reference',
	text: 'Each event is represented by an object that is based on the Event interface, and may have additional custom fields and/or functions to provide information about what happened. The documentation for every event has a table (near the top) that includes a link to the associated event interface, and other relevant information. A full list of the different event types is given in Event > Interfaces based on Event.This topic provides an index to the main sorts of events you might be interested in (animation, clipboard, workers etc.) along with the main classes that implement those sorts of events. At the end is a flat list of all documented events.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/Events',
},
];

const Features = () => (
  <div className="landingpage1__features section__padding" id="features">
    <div className="landingpage1__features-heading">
      <h1 className="gradient__text">Interfaces</h1>
      <p>solicite acceso anticipado para comenzar</p>
    </div>
    <div className="landingpage1__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} url={item.url} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

