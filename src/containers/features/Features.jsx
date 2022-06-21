
import Feature from '../../components/feature/Feature';

const featuresData = [
{
	title: 'Background Fetch API',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Background_Fetch_API',
},
{
	title: 'Background Tasks API',
	text: 'The Cooperative Scheduling of Background Tasks API (also referred to as the Background Tasks API or the requestIdleCallback() API) provides the ability to queue tasks to be executed automatically by the user agent when it determines that there is free time to do so.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Background_Tasks_API',
},
{
	title: 'Barcode Detection API',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API',
},
{
	title: 'Battery Status API',
	text: 'The Battery Status API, more often referred to as the Battery API, provides information about the system s battery charge level and lets you be notified by events that are sent when the battery level or charging status change. This can be used to adjust your app s resource usage to reduce battery drain when the battery is low, or to save changes before the battery runs out in order to prevent data loss.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API',
},
{
	title: 'Beacon API',
	text: 'The Beacon API is used to send an asynchronous and non-blocking request to a web server. The request does not expect a response. Unlike requests made using XMLHttpRequest or the Fetch API, the browser guarantees to initiate beacon requests before the page is unloaded and to run them to completion.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API',
},
{
	title: 'Web Bluetooth API',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API',
},
{
	title: 'Broadcast Channel API',
	text: 'The Broadcast Channel API allows basic communication between browsing contexts (that is, windows, tabs, frames, or iframes) and workers on the same origin.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API',
},
{
	title: 'CSS Counter Styles',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSS_Counter_Styles',
},
{
	title: 'CSS Font Loading API',
	text: 'The CSS Font Loading API provides events and interfaces for dynamically loading font resources.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API',
},
{
	title: 'CSS Painting API',
	text: 'The CSS Painting API — part of the CSS Houdini umbrella of APIs — allows developers to write JavaScript functions that can draw directly into an element s background, border, or content.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API',
},
{
	title: 'CSS Typed Object Model API',
	text: 'The CSS Typed Object Model API simplifies CSS property manipulation by exposing CSS values as typed JavaScript objects rather than strings. This not only simplifies CSS manipulation, but also lessens the negative impact on performance as compared to HTMLElement.style.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API',
},
{
	title: 'CSS Object Model (CSSOM)',
	text: 'The CSS Object Model is a set of APIs allowing the manipulation of CSS from JavaScript. It is much like the DOM, but for the CSS rather than the HTML. It allows users to read and modify CSS style dynamically.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model',
},
{
	title: 'Canvas API',
	text: 'The Canvas API provides a means for drawing graphics via JavaScript and the HTML <canvas> element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
},
{
	title: 'Channel Messaging API',
	text: 'The Channel Messaging API allows two separate scripts running in different browsing contexts attached to the same document (e.g., two IFrames, or the main document and an IFrame, two documents via a SharedWorker, or two workers) to communicate directly, passing messages between one another through two-way channels (or pipes) with a port at each end.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API',
},
{
	title: 'Clipboard API',
	text: 'The Clipboard API provides the ability to respond to clipboard commands (cut, copy, and paste) as well as to asynchronously read from and write to the system clipboard.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API',
},
{
	title: 'Console API',
	text: 'The Console API provides functionality to allow developers to perform debugging tasks, such as logging messages or the values of variables at set points in your code, or timing how long an operation takes to complete.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Console_API',
},
{
	title: 'Contact Picker API',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Contact_Picker_API',
},
{
	title: 'Content Index API',
	text: 'The Content Index API allows developers to register their offline enabled content with the browser.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Content_Index_API',
},
{
	title: 'Credential Management API',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Credential_Management_API',
},
{
	title: 'Document Object Model (DOM)',
	text: 'The Document Object Model (DOM) connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model',
},
{
	title: 'Encoding API',
	text: 'The Encoding API provides a mechanism for handling text in various character encodings, including legacy non-UTF-8 encodings.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API',
},
{
	title: 'Encrypted Media Extensions API',
	text: 'The Encrypted Media Extensions API provides interfaces for controlling the playback of content which is subject to a digital restrictions management scheme.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Encrypted_Media_Extensions_API',
},
{
	title: 'EyeDropper API',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API',
},
{
	title: 'Fetch API',
	text: 'The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
},
{
	title: 'File API',
	text: 'The File API enables web applications to access files and their contents.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/File_API',
},
{
	title: 'File System Access API',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API',
},
{
	title: 'File and Directory Entries API',
	text: 'The File and Directory Entries API simulates a local file system that web apps can navigate within and access files in. You can develop apps which read, write, and create files and/or directories in a virtual, sandboxed file system.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API',
},
{
	title: 'Fullscreen API',
	text: 'The Fullscreen API adds methods to present a specific Element (and its descendants) in fullscreen mode, and to exit fullscreen mode once it is no longer needed. This makes it possible to present desired content—such as an online game—using the user s entire screen, removing all browser user interface elements and other applications from the screen until fullscreen mode is shut off.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API',
},
{
	title: 'Gamepad API',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API',
},
{
	title: 'Geolocation API',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API',
},
{
	title: 'The HTML DOM API',
	text: 'The HTML DOM API is made up of the interfaces that define the functionality of each of the elements in HTML, as well as any supporting types and interfaces they rely upon.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API',
},
{
	title: 'HTML Drag and Drop API',
	text: 'HTML Drag and Drop interfaces enable applications to use drag-and-drop features in browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API',
},
{
	title: 'HTML Sanitizer API',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API',
},
{
	title: 'Performance API',
	text: 'The High Resolution Time standard defines a Performance interface that supports client-side latency measurements within applications. The Performance interfaces are considered high resolution because they are accurate to a thousandth of a millisecond (subject to hardware or software constraints). The interfaces support a number of use cases including calculating frame-rates (potentially important in animations) and benchmarking (such as the time to load a resource).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance_API',
},
{
	title: 'History API',
	text: 'The DOM Window object provides access to the browser s session history (not to be confused for WebExtensions history) through the history object. It exposes useful methods and properties that let you navigate back and forth through the user s history, and manipulate the contents of the history stack.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/History_API',
},
{
	title: 'MediaStream Image Capture API',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API',
},
{
	title: 'IndexedDB API',
	text: 'IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data. While Web Storage is useful for storing smaller amounts of data, it is less useful for storing larger amounts of structured data. IndexedDB provides a solution. This is the main landing page for MDN s IndexedDB coverage — here we provide links to the full API reference and usage guides, browser support details, and some explanation of key concepts.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
},
{
	title: 'Intersection Observer API',
	text: 'The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document s viewport.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API',
},
{
	title: 'Layout Instability API',
	text: 'The Layout Instability API provides interfaces for measuring and reporting layout shifts.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Layout_Instability_API',
},
{
	title: 'Long Tasks API',
	text: '\n  The experimental Long Tasks API gives us visibility into tasks that take 50 milliseconds or more.\n  The 50 ms threshold comes from the RAIL Model, in particular the  Response: process events in under 50 ms  section.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Long_Tasks_API',
},
{
	title: 'Media Capabilities API',
	text: 'The Media Capabilities API allows developers to determine decoding and encoding abilities of the device, exposing information such as whether media is supported and whether playback should be smooth and power efficient, with real time feedback about playback to better enable adaptive streaming, and access to display property information.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Media_Capabilities_API',
},
{
	title: 'Media Capture and Streams API (Media Stream)',
	text: 'The Media Capture and Streams API, often called the Media Streams API or MediaStream API, is an API related to WebRTC which provides support for streaming audio and video data.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API',
},
{
	title: 'Media Session API',
	text: 'The Media Session API provides a way to customize media notifications. It does this by providing metadata for display by the user agent for the media your web app is playing.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Media_Session_API',
},
{
	title: 'Media Source API',
	text: 'The Media Source API, formally known as Media Source Extensions (MSE), provides functionality enabling plugin-free web-based streaming media. Using MSE, media streams can be created via JavaScript, and played using <audio> and <video> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API',
},
{
	title: 'MediaStream Recording API',
	text: 'The MediaStream Recording API, sometimes referred to as the Media Recording API or the MediaRecorder API, is closely affiliated with the Media Capture and Streams API and the WebRTC API. The MediaStream Recording API makes it possible to capture the data generated by a MediaStream or HTMLMediaElement object for analysis, processing, or saving to disk. It s also surprisingly easy to work with.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API',
},
{
	title: 'Navigation Timing API',
	text: 'The Navigation Timing API provides data that can be used to measure the performance of a web site. Unlike JavaScript-based libraries that have historically been used to collect similar information, the Navigation Timing API can be much more accurate and reliable.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API',
},
{
	title: 'Network Information API',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API',
},
{
	title: 'Page Visibility API',
	text: 'The Page Visibility API provides events you can watch for to know when a document becomes visible or hidden, as well as features to look at the current visibility state of the page.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API',
},
{
	title: 'Payment Request API',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API',
},
{
	title: 'Performance API',
	text: 'The High Resolution Time standard defines a Performance interface that supports client-side latency measurements within applications. The Performance interfaces are considered high resolution because they are accurate to a thousandth of a millisecond (subject to hardware or software constraints). The interfaces support a number of use cases including calculating frame-rates (potentially important in animations) and benchmarking (such as the time to load a resource).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance_API',
},
{
	title: 'Performance Timeline',
	text: 'The Performance Timeline API defines extensions to the Performance interface to support client-side latency measurements within applications. The extensions provide interfaces to retrieve performance entry metrics based on specific filter criteria. The standard also includes interfaces that allow an application to define performance observer callbacks that are notified when specific performance events are added to the browser s performance timeline.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance_Timeline',
},
{
	title: 'Web Periodic Background Synchronization API',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Periodic_Background_Synchronization_API',
},
{
	title: 'Permissions API',
	text: 'The Permissions API provides a consistent programmatic way to query the status of API permissions attributed to the current context. For example, the Permissions API can be used to determine if permission to access a particular API has been granted or denied.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API',
},
{
	title: 'Picture-in-Picture API',
	text: 'The Picture-in-Picture API allow websites to create a floating video window always on top of other windows so that users may continue consuming media while they interact with other content sites, or applications on their device.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API',
},
{
	title: 'Pointer events',
	text: 'Much of today s web content assumes the user s pointing device will be a mouse. However, since many devices support other types of pointing input devices, such as pen/stylus and touch surfaces, extensions to the existing pointing device event models are needed. Pointer events address that need.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events',
},
{
	title: 'Pointer Lock API',
	text: 'The Pointer Lock API (formerly called Mouse Lock API) provides input methods based on the movement of the mouse over time (i.e., deltas), not just the absolute position of the mouse cursor in the viewport. It gives you access to raw mouse movement, locks the target of mouse events to a single element, eliminates limits on how far mouse movement can go in a single direction, and removes the cursor from view. It is ideal for first person 3D games, for example.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API',
},
{
	title: 'Presentation API',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Presentation_API',
},
{
	title: 'Prioritized Task Scheduling API',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Prioritized_Task_Scheduling_API',
},
{
	title: 'Proximity Events',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Proximity_Events',
},
{
	title: 'Push API',
	text: 'The Push API gives web applications the ability to receive messages pushed to them from a server, whether or not the web app is in the foreground, or even currently loaded, on a user agent. This lets developers deliver asynchronous notifications and updates to users that opt in, resulting in better engagement with timely new content.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Push_API',
},
{
	title: 'Reporting API',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Reporting_API',
},
{
	title: 'Resize Observer API',
	text: 'The Resize Observer API provides a performant mechanism by which code can monitor an element for changes to its size, with notifications being delivered to the observer each time the size changes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API',
},
{
	title: 'Resource Timing API',
	text: 'The Resource Timing interfaces enable retrieving and analyzing detailed network timing data regarding the loading of an application s resource(s). An application can use the timing metrics to determine, for example, the length of time it takes to load a specific resource, such as an XMLHttpRequest, <SVG>, image, or script.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API',
},
{
	title: 'Screen Capture API',
	text: 'The Screen Capture API introduces additions to the existing Media Capture and Streams API to let the user select a screen or portion of a screen (such as a window) to capture as a media stream. This stream can then be recorded or shared with others over the network.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API',
},
{
	title: 'Screen Orientation API',
	text: 'The Screen Orientation API provides information about the orientation of the screen.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API',
},
{
	title: 'Screen Wake Lock API',
	text: 'The Screen Wake Lock API provides a way to prevent devices from dimming or locking the screen when an application needs to keep running.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API',
},
{
	title: 'Selection API',
	text: 'Note: This API is not available in Web Workers (not exposed via WorkerNavigator).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Selection_API',
},
{
	title: 'Sensor APIs',
	text: 'The Sensor APIs are a set of interfaces built to a common design that expose device sensors in a consistent way to the web platform.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs',
},
{
	title: 'Server-sent events',
	text: 'Traditionally, a web page has to send a request to the server to receive new data; that is, the page requests data from the server. With server-sent events, it s possible for a server to send new data to a web page at any time, by pushing messages to the web page. These incoming messages can be treated as Events + data inside the web page.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events',
},
{
	title: 'Service Worker API',
	text: 'Service workers essentially act as proxy servers that sit between web applications, the browser, and the network (when available). They are intended, among other things, to enable the creation of effective offline experiences, intercept network requests and take appropriate action based on whether the network is available, and update assets residing on the server. They will also allow access to push notifications and background sync APIs.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API',
},
{
	title: 'Storage API',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage_API',
},
{
	title: 'Storage Access API',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API',
},
{
	title: 'Streams API',
	text: 'The Streams API allows JavaScript to programmatically access streams of data received over the network and process them as desired by the developer.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Streams_API',
},
{
	title: 'Touch events',
	text: 'To provide quality support for touch-based user interfaces, touch events offer the ability to interpret finger (or stylus) activity on touch screens or trackpads.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Touch_events',
},
{
	title: 'UI Events',
	text: 'The UI Events API defines a system for handling user interactions such as mouse and keyboard input. This includes:',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/UI_Events',
},
{
	title: 'URL API',
	text: 'The URL API is a component of the URL standard, which defines what constitutes a valid Uniform Resource Locator and the API that accesses and manipulates URLs. The URL standard also defines concepts such as domains, hosts, and IP addresses, and also attempts to describe in a standard way the legacy application/x-www-form-urlencoded MIME type used to submit web forms  contents as a set of key/value pairs.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/URL_API',
},
{
	title: 'URL Pattern API',
	text: '\n  The URL Pattern API defines a syntax that is used to create URL pattern\n  matchers. These patterns can be matched against URLs or individual URL\n  components. The URL Pattern API is used by the URLPattern\n  interface.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API',
},
{
	title: 'Vibration API',
	text: 'Most modern mobile devices include vibration hardware, which lets software code provide physical feedback to the user by causing the device to shake. The Vibration API offers Web apps the ability to access this hardware, if it exists, and does nothing if the device doesn t support it.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API',
},
{
	title: 'Visual Viewport API',
	text: 'The Visual Viewport API provides an explicit mechanism for querying and modifying the properties of the window s visual viewport. The visual viewport is the visual portion of a screen excluding on-screen keyboards, areas outside of a pinch-zoom area, or any other on-screen artifact that doesn t scale with the dimensions of a page.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API',
},
{
	title: 'Web Animations API',
	text: 'The Web Animations API allows for synchronizing and timing changes to the presentation of a Web page, i.e. animation of DOM elements. It does so by combining two models: the Timing Model and the Animation Model.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API',
},
{
	title: 'Web Audio API',
	text: 'The Web Audio API provides a powerful and versatile system for controlling audio on the Web, allowing developers to choose audio sources, add effects to audio, create audio visualizations, apply spatial effects (such as panning) and much more.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
},
{
	title: 'Web Authentication API',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API',
},
{
	title: 'Web Crypto API',
	text: 'The Web Crypto API is an interface allowing a script to use cryptographic primitives in order to build systems using cryptography.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API',
},
{
	title: 'Web MIDI API',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API',
},
{
	title: 'Notifications API',
	text: 'Note: This feature is available in Web Workers',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API',
},
{
	title: 'Web Share API',
	text: 'The Web Share API provides a mechanism for sharing text, links, files, and other content to an arbitrary share target selected by the user.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API',
},
{
	title: 'Web Speech API',
	text: '\n  The Web Speech API enables you to incorporate voice data into web apps.\n  The Web Speech API has two parts: SpeechSynthesis (Text-to-Speech), and SpeechRecognition (Asynchronous Speech Recognition.)\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API',
},
{
	title: 'Web Storage API',
	text: 'The Web Storage API provides mechanisms by which browsers can store key/value pairs, in a much more intuitive fashion than using cookies.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API',
},
{
	title: 'Web Workers API',
	text: 'Web Workers makes it possible to run a script operation in a background thread separate from the main execution thread of a web application. The advantage of this is that laborious processing can be performed in a separate thread, allowing the main (usually the UI) thread to run without being blocked/slowed down.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API',
},
{
	title: 'WebCodecs API',
	text: '\n  The WebCodecs API gives web developers low-level access to the individual frames of a video stream and chunks of audio.\n  It is useful for web applications that require full control over the way media is processed.\n  For example, video or audio editors, and video conferencing.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API',
},
{
	title: 'WebGL: 2D and 3D graphics for the web',
	text: 'WebGL (Web Graphics Library) is a JavaScript API for rendering high-performance interactive 3D and 2D graphics within any compatible web browser without the use of plug-ins. WebGL does so by introducing an API that closely conforms to OpenGL ES 2.0 that can be used in HTML5 <canvas> elements. This conformance makes it possible for the API to take advantage of hardware graphics acceleration provided by the user s device.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API',
},
{
	title: 'WebHID API',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API',
},
{
	title: 'WebRTC API',
	text: 'WebRTC (Web Real-Time Communication) is a technology that enables Web applications and sites to capture and optionally stream audio and/or video media, as well as to exchange arbitrary data between browsers without requiring an intermediary. The set of standards that comprise WebRTC makes it possible to share data and perform teleconferencing peer-to-peer, without requiring that the user install plug-ins or any other third-party software.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API',
},
{
	title: 'WebVR API',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API',
},
{
	title: 'Web Video Text Tracks Format (WebVTT)',
	text: 'Web Video Text Tracks Format (WebVTT) is a format for displaying timed text tracks (such as subtitles or captions) using the <track> element. The primary purpose of WebVTT files is to add text overlays to a <video>. WebVTT is a text based format, which must be encoded using UTF-8. Where you can use spaces you can also use tabs. There is also a small API available to represent and manage these tracks and the data needed to perform the playback of the text at the correct times.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API',
},
{
	title: 'WebXR Device API',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API',
},
{
	title: 'The WebSocket API (WebSockets)',
	text: 'The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user s browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
},
{
	title: 'Window Controls Overlay API',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window_Controls_Overlay_API',
},
{
	title: 'XMLHttpRequest',
	text: 'XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest',
},
{
	title: 'AbortController',
	text: 'The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AbortController',
},
{
	title: 'AbortSignal',
	text: 'The AbortSignal interface represents a signal object that allows you to communicate with a DOM request (such as a fetch request) and abort it if required via an AbortController object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal',
},
{
	title: 'AbsoluteOrientationSensor',
	text: 'The AbsoluteOrientationSensor interface of the Sensor APIs describes the device s physical orientation in relation to the Earth s reference coordinate system.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AbsoluteOrientationSensor',
},
{
	title: 'AbstractRange',
	text: 'The AbstractRange abstract interface is the base class upon which all DOM range types are defined. A range is an object that indicates the start and end points of a section of content within the document.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AbstractRange',
},
{
	title: 'Accelerometer',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer',
},
{
	title: 'AddressErrors',
	text: 'The AddressErrors dictionary is used by the Payment Request API to report validation errors in a physical address (typically a billing address or a shipping address). Any members which are present indicate that a validation error occurred for the member of the same name in an address described using PaymentAddress.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors',
},
{
	title: 'AesCbcParams',
	text: 'The AesCbcParams dictionary of the Web Crypto API represents the object that should be passed as the algorithm parameter into SubtleCrypto.encrypt(), SubtleCrypto.decrypt(), SubtleCrypto.wrapKey(), or SubtleCrypto.unwrapKey(), when using the AES-CBC algorithm.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AesCbcParams',
},
{
	title: 'AesCtrParams',
	text: 'The AesCtrParams dictionary of the Web Crypto API represents the object that should be passed as the algorithm parameter into SubtleCrypto.encrypt(), SubtleCrypto.decrypt(), SubtleCrypto.wrapKey(), or SubtleCrypto.unwrapKey(), when using the AES-CTR algorithm.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AesCtrParams',
},
{
	title: 'AesGcmParams',
	text: 'The AesGcmParams dictionary of the Web Crypto API represents the object that should be passed as the algorithm parameter into SubtleCrypto.encrypt(), SubtleCrypto.decrypt(), SubtleCrypto.wrapKey(), or SubtleCrypto.unwrapKey(), when using the AES-GCM algorithm.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AesGcmParams',
},
{
	title: 'AesKeyGenParams',
	text: '',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AesKeyGenParams',
},
{
	title: 'AmbientLightSensor',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor',
},
{
	title: 'AnalyserNode',
	text: 'The AnalyserNode interface represents a node able to provide real-time frequency and time-domain analysis information. It is an AudioNode that passes the audio stream unchanged from the input to the output, but allows you to take the generated data, process it, and create audio visualizations.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode',
},
{
	title: 'ANGLE_instanced_arrays',
	text: 'The ANGLE_instanced_arrays extension is part of the WebGL API and allows to draw the same object, or groups of similar objects multiple times, if they share the same vertex data, primitive count and type.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ANGLE_instanced_arrays',
},
{
	title: 'Animation',
	text: 'The Animation interface of the Web Animations API represents a single animation player and provides playback controls and a timeline for an animation node or source.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Animation',
},
{
	title: 'AnimationEffect',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect',
},
{
	title: 'AnimationEvent',
	text: 'The AnimationEvent interface represents events providing information related to animations.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent',
},
{
	title: 'AnimationPlaybackEvent',
	text: 'The AnimationPlaybackEvent interface of the Web Animations API represents animation events.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AnimationPlaybackEvent',
},
{
	title: 'AnimationTimeline',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AnimationTimeline',
},
{
	title: 'atob()',
	text: '\n  The atob() function decodes a\n  string of data which has been encoded using Base64 encoding. You can use\n  the btoa() method to encode and transmit\n  data which may otherwise cause communication problems, then transmit it and use the\n  atob() method to decode the data again. For example, you can encode,\n  transmit, and decode control characters such as ASCII values 0 through 31.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/atob',
},
{
	title: 'Attr',
	text: 'The Attr interface represents one of an element s attributes as an object. In most situations, you will directly retrieve the attribute value as a string (e.g., Element.getAttribute()), but certain functions (e.g., Element.getAttributeNode()) or means of iterating return Attr instances.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Attr',
},
{
	title: 'AudioBuffer',
	text: 'The AudioBuffer interface represents a short audio asset residing in memory, created from an audio file using the AudioContext.decodeAudioData() method, or from raw data using AudioContext.createBuffer(). Once put into an AudioBuffer, the audio can then be played by being passed into an AudioBufferSourceNode.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer',
},
{
	title: 'AudioBufferSourceNode',
	text: 'The AudioBufferSourceNode interface is an AudioScheduledSourceNode which represents an audio source consisting of in-memory audio data, stored in an AudioBuffer.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode',
},
{
	title: 'AudioContext',
	text: 'The AudioContext interface represents an audio-processing graph built from audio modules linked together, each represented by an AudioNode.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioContext',
},
{
	title: 'AudioData',
	text: 'The AudioData interface of the WebCodecs API represents an audio sample.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioData',
},
{
	title: 'AudioDecoder',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioDecoder',
},
{
	title: 'AudioDestinationNode',
	text: 'The AudioDestinationNode interface represents the end destination of an audio graph in a given context — usually the speakers of your device. It can also be the node that will  record  the audio data when used with an OfflineAudioContext.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioDestinationNode',
},
{
	title: 'AudioEncoder',
	text: '\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioEncoder',
},
{
	title: 'AudioListener',
	text: 'The AudioListener interface represents the position and orientation of the unique person listening to the audio scene, and is used in audio spatialization. All PannerNodes spatialize in relation to the AudioListener stored in the BaseAudioContext.listener attribute.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioListener',
},
{
	title: 'AudioNode',
	text: 'The AudioNode interface is a generic interface for representing an audio processing module.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioNode',
},
{
	title: 'AudioParam',
	text: 'The Web Audio API s AudioParam interface represents an audio-related parameter, usually a parameter of an AudioNode (such as GainNode.gain).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioParam',
},
{
	title: 'AudioParamDescriptor',
	text: 'The AudioParamDescriptor dictionary of the Web Audio API specifies properties for AudioParam objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioParamDescriptor',
},
{
	title: 'AudioParamMap',
	text: 'The Web Audio API interface AudioParamMap represents a set of multiple audio parameters, each described as a mapping of a string identifying the parameter to the AudioParam object representing its value.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioParamMap',
},
{
	title: 'AudioProcessingEvent',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioProcessingEvent',
},
{
	title: 'AudioScheduledSourceNode',
	text: 'The AudioScheduledSourceNode interface—part of the Web Audio API—is a parent interface for several types of audio source node interfaces which share the ability to be started and stopped, optionally at specified times. Specifically, this interface defines the start() and stop() methods, as well as the ended event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode',
},
{
	title: 'AudioTrack',
	text: 'The AudioTrack interface represents a single audio track from one of the HTML media elements, <audio> or <video>.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack',
},
{
	title: 'AudioTrackList',
	text: 'The AudioTrackList interface is used to represent a list of the audio tracks contained within a given HTML media element, with each track represented by a separate AudioTrack object in the list.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList',
},
{
	title: 'AudioWorklet',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet',
},
{
	title: 'AudioWorkletGlobalScope',
	text: 'The AudioWorkletGlobalScope interface of the Web Audio API represents a global execution context for user-supplied code, which defines custom AudioWorkletProcessor-derived classes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletGlobalScope',
},
{
	title: 'AudioWorkletNode',
	text: 'Note: Although the interface is available outside secure contexts, the BaseAudioContext.audioWorklet property is not, thus custom AudioWorkletProcessors cannot be defined outside them.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode',
},
{
	title: 'AudioWorkletProcessor',
	text: 'The AudioWorkletProcessor interface of the Web Audio API represents an audio processing code behind a custom AudioWorkletNode. It lives in the AudioWorkletGlobalScope and runs on the Web Audio rendering thread. In turn, an AudioWorkletNode based on it runs on the main thread.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor',
},
{
	title: 'AuthenticatorAssertionResponse',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse',
},
{
	title: 'AuthenticatorAttestationResponse',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse',
},
{
	title: 'AuthenticatorResponse',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorResponse',
},
{
	title: 'BackgroundFetchEvent',
	text: 'The BackgroundFetchEvent interface of the Background Fetch API is the event type for background fetch events dispatched on the service worker global scope.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchEvent',
},
{
	title: 'BackgroundFetchManager',
	text: 'The BackgroundFetchManager interface of the Background Fetch API is a map where the keys are background fetch IDs and the values are BackgroundFetchRegistration objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchManager',
},
{
	title: 'BackgroundFetchRecord',
	text: 'The BackgroundFetchRecord interface of the Background Fetch API represents an individual request and response.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchRecord',
},
{
	title: 'BackgroundFetchRegistration',
	text: 'The BackgroundFetchRegistration interface of the Background Fetch API represents an individual background fetch.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchRegistration',
},
{
	title: 'BackgroundFetchUpdateUIEvent',
	text: 'The BackgroundFetchUpdateUIEvent interface of the Background Fetch API is an event type for the backgroundfetchsuccess and backgroundfetchfail events, and provides a method for updating the title and icon of the app to inform a user of the success or failure of a background fetch.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchUpdateUIEvent',
},
{
	title: 'BarcodeDetector',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector',
},
{
	title: 'BarProp',
	text: 'The BarProp interface of the Document Object Model represents the web browser user interface elements that are exposed to scripts in web pages. Each of the following interface elements are represented by a BarProp object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BarProp',
},
{
	title: 'BaseAudioContext',
	text: 'The BaseAudioContext interface of the Web Audio API acts as a base definition for online and offline audio-processing graphs, as represented by AudioContext and OfflineAudioContext respectively. You wouldn t use BaseAudioContext directly — you d use its features via one of these two inheriting interfaces.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext',
},
{
	title: 'BatteryManager',
	text: 'The BatteryManager interface of the Battery Status API provides information about the system s battery charge level. The navigator.getBattery() method returns a promise that resolves with a BatteryManager interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager',
},
{
	title: 'BeforeInstallPromptEvent',
	text: 'The BeforeInstallPromptEvent is the interface of the beforeinstallprompt event fired at the Window object before a user is prompted to  install  a website to a home screen on mobile.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent',
},
{
	title: 'BeforeUnloadEvent',
	text: 'The beforeunload event is fired when the window, the document and its resources are about to be unloaded.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BeforeUnloadEvent',
},
{
	title: 'BiquadFilterNode',
	text: 'The BiquadFilterNode interface represents a simple low-order filter, and is created using the BaseAudioContext/createBiquadFilter method. It is an AudioNode that can represent different kinds of filters, tone control devices, and graphic equalizers. A BiquadFilterNode always has exactly one input and one output.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode',
},
{
	title: 'Blob',
	text: 'The Blob object represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Blob',
},
{
	title: 'BlobBuilder',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BlobBuilder',
},
{
	title: 'BlobEvent',
	text: 'The BlobEvent interface represents events associated with a Blob. These blobs are typically, but not necessarily, associated with media content.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BlobEvent',
},
{
	title: 'Bluetooth',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth',
},
{
	title: 'BluetoothCharacteristicProperties',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BluetoothCharacteristicProperties',
},
{
	title: 'BluetoothDevice',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice',
},
{
	title: 'BluetoothRemoteGATTCharacteristic',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic',
},
{
	title: 'BluetoothRemoteGATTDescriptor',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor',
},
{
	title: 'BluetoothRemoteGATTServer',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer',
},
{
	title: 'BluetoothRemoteGATTService',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService',
},
{
	title: 'BluetoothUUID',
	text: '\n  The BluetoothUUID interface of the Web Bluetooth API provides a way to look up Universally Unique Identifier (UUID) values by name in the\n  registry maintained by the Bluetooth SIG.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BluetoothUUID',
},
{
	title: 'BroadcastChannel',
	text: 'The BroadcastChannel interface represents a named channel that any browsing context of a given origin can subscribe to. It allows communication between different documents (in different windows, tabs, frames or iframes) of the same origin. Messages are broadcasted via a message event fired at all BroadcastChannel objects listening to the channel.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel',
},
{
	title: 'btoa()',
	text: '\n  The btoa() method creates a\n  Base64-encoded ASCII string from a binary string (i.e., a\n  string in which each character in the string is treated as a byte\n  of binary data).\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/btoa',
},
{
	title: 'ByteLengthQueuingStrategy',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ByteLengthQueuingStrategy',
},
{
	title: 'Cache',
	text: 'The Cache interface provides a persistent storage mechanism for Request / Response object pairs that are cached in long lived memory. How long a Cache object lives is browser dependent, but a single origin s scripts can typically rely on the presence of a previously populated Cache object. Note that the Cache interface is exposed to windowed scopes as well as workers. You don t have to use it in conjunction with service workers, even though it is defined in the service worker spec.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Cache',
},
{
	title: 'caches',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/caches',
},
{
	title: 'CacheStorage',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage',
},
{
	title: 'CanvasCaptureMediaStreamTrack',
	text: 'The CanvasCaptureMediaStreamTrack interface represents the video track contained in a MediaStream being generated from a <canvas> following a call to HTMLCanvasElement.captureStream().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasCaptureMediaStreamTrack',
},
{
	title: 'CanvasGradient',
	text: 'The CanvasGradient interface represents an opaque object describing a gradient. It is returned by the methods CanvasRenderingContext2D.createLinearGradient(), CanvasRenderingContext2D.createConicGradient() or CanvasRenderingContext2D.createRadialGradient().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient',
},
{
	title: 'CanvasPattern',
	text: 'The CanvasPattern interface represents an opaque object describing a pattern, based on an image, a canvas, or a video, created by the CanvasRenderingContext2D.createPattern() method.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern',
},
{
	title: 'CanvasRenderingContext2D',
	text: 'The CanvasRenderingContext2D interface, part of the Canvas API, provides the 2D rendering context for the drawing surface of a <canvas> element. It is used for drawing shapes, text, images, and other objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D',
},
{
	title: 'CaretPosition',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CaretPosition',
},
{
	title: 'CDATASection',
	text: '\n  The CDATASection interface represents a CDATA section\n  that can be used within XML to include extended portions of unescaped text.\n  When inside a CDATA section, the symbols < and & don t need escaping\n  as they normally do.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CDATASection',
},
{
	title: 'ChannelMergerNode',
	text: 'The ChannelMergerNode interface, often used in conjunction with its opposite, ChannelSplitterNode, reunites different mono inputs into a single output. Each input is used to fill a channel of the output. This is useful for accessing each channels separately, e.g. for performing channel mixing where gain must be separately controlled on each channel.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ChannelMergerNode',
},
{
	title: 'ChannelSplitterNode',
	text: 'The ChannelSplitterNode interface, often used in conjunction with its opposite, ChannelMergerNode, separates the different channels of an audio source into a set of mono outputs. This is useful for accessing each channel separately, e.g. for performing channel mixing where gain must be separately controlled on each channel.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ChannelSplitterNode',
},
{
	title: 'CharacterData',
	text: 'The CharacterData abstract interface represents a Node object that contains characters. This is an abstract interface, meaning there aren t any objects of type CharacterData: it is implemented by other interfaces like Text, Comment, CDATASection, or ProcessingInstruction, which aren t abstract.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CharacterData',
},
{
	title: 'clearInterval()',
	text: '\n  The global clearInterval() method cancels a timed, repeating action which\n  was previously established by a call to setInterval().\n  If the parameter provided does not identify a previously established action,\n  this method does nothing.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/clearInterval',
},
{
	title: 'clearTimeout()',
	text: '\n  The global clearTimeout() method cancels a timeout previously established\n  by calling setTimeout().\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout',
},
{
	title: 'Client',
	text: 'The Client interface represents an executable context such as a Worker, or a SharedWorker. Window clients are represented by the more-specific WindowClient. You can get Client/WindowClient objects from methods such as Clients.matchAll() and Clients.get().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Client',
},
{
	title: 'Clients',
	text: 'The Clients interface provides access to Client objects. Access it via self.clients within a service worker.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Clients',
},
{
	title: 'Clipboard',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard',
},
{
	title: 'ClipboardEvent',
	text: 'The ClipboardEvent interface represents events providing information related to modification of the clipboard, that is cut, copy, and paste events.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent',
},
{
	title: 'ClipboardItem',
	text: 'The ClipboardItem interface of the Clipboard API represents a single item format, used when reading or writing data via the Clipboard API. That is clipboard.read() and clipboard.write() respectively.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem',
},
{
	title: 'CloseEvent',
	text: 'A CloseEvent is sent to clients using WebSockets when the connection is closed. This is delivered to the listener indicated by the WebSocket object s onclose attribute.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent',
},
{
	title: 'Comment',
	text: 'The Comment interface represents textual notations within markup; although it is generally not visually shown, such comments are available to be read in the source view.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Comment',
},
{
	title: 'CompositionEvent',
	text: 'The DOM CompositionEvent represents events that occur due to the user indirectly entering text.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent',
},
{
	title: 'CompressionStream',
	text: 'The CompressionStream interface of the Compression Streams API is an API for compressing a stream of data.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CompressionStream',
},
{
	title: 'console',
	text: '\n  The console object provides access to the browser s\n  debugging console (e.g. the Web console in Firefox).\n  The specifics of how it works varies from browser to browser, but there is a de facto\n  set of features that are typically provided.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/console',
},
{
	title: 'ConstantSourceNode',
	text: 'The ConstantSourceNode interface—part of the Web Audio API—represents an audio source (based upon AudioScheduledSourceNode) whose output is single unchanging value. This makes it useful for cases in which you need a constant value coming in from an audio source. In addition, it can be used like a constructible AudioParam by automating the value of its offset or by connecting another node to it; see Controlling multiple parameters with ConstantSourceNode.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ConstantSourceNode',
},
{
	title: 'ContactAddress',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ContactAddress',
},
{
	title: 'ContactsManager',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ContactsManager',
},
{
	title: 'ContentIndex',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ContentIndex',
},
{
	title: 'ContentIndexEvent',
	text: 'The ContentIndexEvent interface of the content index defines the object used to represent the contentdelete event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ContentIndexEvent',
},
{
	title: 'ConvolverNode',
	text: 'The ConvolverNode interface is an AudioNode that performs a Linear Convolution on a given AudioBuffer, often used to achieve a reverb effect. A ConvolverNode always has exactly one input and one output.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode',
},
{
	title: 'CookieChangeEvent',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CookieChangeEvent',
},
{
	title: 'CookieStore',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CookieStore',
},
{
	title: 'CookieStoreManager',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CookieStoreManager',
},
{
	title: 'CountQueuingStrategy',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CountQueuingStrategy',
},
{
	title: 'CrashReportBody',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CrashReportBody',
},
{
	title: 'createImageBitmap()',
	text: '\n  The createImageBitmap() method creates a bitmap from a\n  given source, optionally cropped to contain only a portion of that source. The method\n  exists on the global scope in both windows and workers. It accepts a variety of\n  different image sources, and returns a Promise which resolves to an\n  ImageBitmap.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/createImageBitmap',
},
{
	title: 'Credential',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Credential',
},
{
	title: 'CredentialsContainer',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer',
},
{
	title: 'crossOriginIsolated',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/crossOriginIsolated',
},
{
	title: 'Crypto',
	text: '\n  The Crypto interface represents basic cryptography features available in the current context.\n  It allows access to a cryptographically strong random number generator and to cryptographic primitives.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto',
},
{
	title: 'CryptoKey',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey',
},
{
	title: 'CryptoKeyPair',
	text: 'The CryptoKeyPair dictionary of the Web Crypto API represents a key pair for an asymmetric cryptography algorithm, also known as a public-key algorithm.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CryptoKeyPair',
},
{
	title: 'CSS',
	text: 'The CSS interface holds useful CSS-related methods. No objects with this interface are implemented: it contains only static methods and is therefore a utilitarian interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSS',
},
{
	title: 'CSSAnimation',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSAnimation',
},
{
	title: 'CSSConditionRule',
	text: 'An object implementing the CSSConditionRule interface represents a single condition CSS at-rule, which consists of a condition and a statement block.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSConditionRule',
},
{
	title: 'CSSCounterStyleRule',
	text: 'The CSSCounterStyleRule interface represents an @counter-style at-rule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSCounterStyleRule',
},
{
	title: 'CSSFontFaceRule',
	text: 'The CSSFontFaceRule interface represents an @font-face at-rule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSFontFaceRule',
},
{
	title: 'CSSGroupingRule',
	text: 'The CSSGroupingRule interface of the CSS Object Model represents any CSS at-rule that contains other rules nested within it.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSGroupingRule',
},
{
	title: 'CSSImageValue',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSImageValue',
},
{
	title: 'CSSImportRule',
	text: 'The CSSImportRule interface represents an @import at-rule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSImportRule',
},
{
	title: 'CSSKeyframeRule',
	text: 'The CSSKeyframeRule interface describes an object representing a set of styles for a given keyframe. It corresponds to the contents of a single keyframe of a @keyframes at-rule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSKeyframeRule',
},
{
	title: 'CSSKeyframesRule',
	text: 'The CSSKeyframesRule interface describes an object representing a complete set of keyframes for a CSS animation. It corresponds to the contents of a whole @keyframes at-rule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSKeyframesRule',
},
{
	title: 'CSSKeywordValue',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSKeywordValue',
},
{
	title: 'CSSMathInvert',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMathInvert',
},
{
	title: 'CSSMathMax',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMathMax',
},
{
	title: 'CSSMathMin',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMathMin',
},
{
	title: 'CSSMathNegate',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMathNegate',
},
{
	title: 'CSSMathProduct',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMathProduct',
},
{
	title: 'CSSMathSum',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMathSum',
},
{
	title: 'CSSMathValue',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMathValue',
},
{
	title: 'CSSMatrixComponent',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMatrixComponent',
},
{
	title: 'CSSMediaRule',
	text: 'The CSSMediaRule interface represents a single CSS @media rule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSMediaRule',
},
{
	title: 'CSSNamespaceRule',
	text: 'The CSSNamespaceRule interface describes an object representing a single CSS @namespace at-rule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSNamespaceRule',
},
{
	title: 'CSSNumericArray',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericArray',
},
{
	title: 'CSSNumericValue',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue',
},
{
	title: 'CSSPageRule',
	text: 'CSSPageRule represents a single CSS @page rule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSPageRule',
},
{
	title: 'CSSPerspective',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSPerspective',
},
{
	title: 'CSSPositionValue',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSPositionValue',
},
{
	title: 'CSSPrimitiveValue',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue',
},
{
	title: 'CSSPropertyRule',
	text: 'The CSSPropertyRule interface of the CSS_Properties_and_Values_API represents a single CSS @property rule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSPropertyRule',
},
{
	title: 'CSSPseudoElement',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement',
},
{
	title: 'CSSRotate',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSRotate',
},
{
	title: 'CSSRule',
	text: 'The CSSRule interface represents a single CSS rule. There are several types of rules which inherit properties from CSSRule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSRule',
},
{
	title: 'CSSRuleList',
	text: 'A CSSRuleList represents an ordered collection of read-only CSSRule objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSRuleList',
},
{
	title: 'CSSScale',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSScale',
},
{
	title: 'CSSSkew',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSSkew',
},
{
	title: 'CSSSkewX',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSSkewX',
},
{
	title: 'CSSSkewY',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSSkewY',
},
{
	title: 'CSSStyleDeclaration',
	text: 'The CSSStyleDeclaration interface represents an object that is a CSS declaration block, and exposes style information and various style-related methods and properties.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration',
},
{
	title: 'CSSStyleRule',
	text: 'The CSSStyleRule interface represents a single CSS style rule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleRule',
},
{
	title: 'CSSStyleSheet',
	text: 'The CSSStyleSheet interface represents a single CSS stylesheet, and lets you inspect and modify the list of rules contained in the stylesheet. It inherits properties and methods from its parent, StyleSheet.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet',
},
{
	title: 'CSSStyleValue',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue',
},
{
	title: 'CSSSupportsRule',
	text: 'The CSSSupportsRule interface represents a single CSS @supports at-rule.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSSupportsRule',
},
{
	title: 'CSSTransformComponent',
	text: 'The CSSTransformComponent interface of the CSS_Object_Model#css_typed_object_model is part of the CSSTransformValue interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSTransformComponent',
},
{
	title: 'CSSTransformValue',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSTransformValue',
},
{
	title: 'CSSTransition',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSTransition',
},
{
	title: 'CSSTranslate',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSTranslate',
},
{
	title: 'CSSUnitValue',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSUnitValue',
},
{
	title: 'CSSUnparsedValue',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue',
},
{
	title: 'CSSValue',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSValue',
},
{
	title: 'CSSValueList',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSValueList',
},
{
	title: 'CSSVariableReferenceValue',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSSVariableReferenceValue',
},
{
	title: 'CustomElementRegistry',
	text: 'The CustomElementRegistry interface provides methods for registering custom elements and querying registered elements. To get an instance of it, use the window.customElements property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry',
},
{
	title: 'CustomEvent',
	text: 'The CustomEvent interface represents events initialized by an application for any purpose.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent',
},
{
	title: 'CustomStateSet',
	text: 'The CustomStateSet interface of the Document_Object_Model stores a list of possible states for a custom element to be in, and allows states to be added and removed from the set.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/CustomStateSet',
},
{
	title: 'DataTransfer',
	text: 'The DataTransfer object is used to hold the data that is being dragged during a drag and drop operation. It may hold one or more data items, each of one or more data types. For more information about drag and drop, see HTML Drag and Drop API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer',
},
{
	title: 'DataTransferItem',
	text: 'The DataTransferItem object represents one drag data item. During a drag operation, each drag event has a dataTransfer property which contains a list of drag data items. Each item in the list is a DataTransferItem object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem',
},
{
	title: 'DataTransferItemList',
	text: 'The DataTransferItemList object is a list of DataTransferItem objects representing items being dragged. During a drag operation, each DragEvent has a dataTransfer property and that property is a DataTransferItemList.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList',
},
{
	title: 'DecompressionStream',
	text: 'The DecompressionStream interface of the Compression Streams API is an API for decompressing a stream of data.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DecompressionStream',
},
{
	title: 'DedicatedWorkerGlobalScope',
	text: 'The DedicatedWorkerGlobalScope object (the Worker global scope) is accessible through the self keyword. Some additional global functions, namespaces objects, and constructors, not typically associated with the worker global scope, but available on it, are listed in the JavaScript Reference. See also: Functions available to workers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope',
},
{
	title: 'DelayNode',
	text: 'The DelayNode interface represents a delay-line; an AudioNode audio-processing module that causes a delay between the arrival of an input data and its propagation to the output.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DelayNode',
},
{
	title: 'DeprecationReportBody',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DeprecationReportBody',
},
{
	title: 'DeviceMotionEvent',
	text: 'The DeviceMotionEvent interface provides web developers with information about the speed of changes for the device s position and orientation.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent',
},
{
	title: 'DeviceMotionEventAcceleration',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEventAcceleration',
},
{
	title: 'DeviceMotionEventRotationRate',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEventRotationRate',
},
{
	title: 'DeviceOrientationEvent',
	text: '\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent',
},
{
	title: 'DeviceProximityEvent',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DeviceProximityEvent',
},
{
	title: 'DirectoryEntrySync',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DirectoryEntrySync',
},
{
	title: 'DirectoryReaderSync',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DirectoryReaderSync',
},
{
	title: 'Document',
	text: 'The Document interface represents any web page loaded in the browser and serves as an entry point into the web page s content, which is the DOM tree.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document',
},
{
	title: 'DocumentFragment',
	text: 'The DocumentFragment interface represents a minimal document object that has no parent.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment',
},
{
	title: 'DocumentTimeline',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DocumentTimeline',
},
{
	title: 'DocumentType',
	text: 'The DocumentType interface represents a Node containing a doctype.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DocumentType',
},
{
	title: 'DOMError',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMError',
},
{
	title: 'DOMException',
	text: 'The DOMException interface represents an abnormal event (called an exception) that occurs as a result of calling a method or accessing a property of a web API. This is how error conditions are described in web APIs.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMException',
},
{
	title: 'DOMHighResTimeStamp',
	text: 'The DOMHighResTimeStamp type is a double and is used to store a time value in milliseconds.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp',
},
{
	title: 'DOMImplementation',
	text: 'The DOMImplementation interface represents an object providing methods which are not dependent on any particular document. Such an object is returned by the Document.implementation property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation',
},
{
	title: 'DOMMatrix (WebKitCSSMatrix)',
	text: 'The DOMMatrix interface represents 4×4 matrices, suitable for 2D and 3D operations including rotation and translation. It is a mutable version of the DOMMatrixReadOnly interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix',
},
{
	title: 'DOMMatrixReadOnly',
	text: 'The DOMMatrixReadOnly interface represents a read-only 4×4 matrix, suitable for 2D and 3D operations. The DOMMatrix interface — which is based upon DOMMatrixReadOnly—adds mutability, allowing you to alter the matrix after creating it.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrixReadOnly',
},
{
	title: 'DOMParser',
	text: '\n  The DOMParser interface provides\n  the ability to parse XML or HTML source code from a\n  string into a DOM Document.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMParser',
},
{
	title: 'DOMPoint',
	text: 'A DOMPoint object represents a 2D or 3D point in a coordinate system; it includes values for the coordinates in up to three dimensions, as well as an optional perspective value. DOMPoint is based on DOMPointReadOnly but allows its properties  values to be changed.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint',
},
{
	title: 'DOMPointReadOnly',
	text: 'The DOMPointReadOnly interface specifies the coordinate and perspective fields used by DOMPoint to define a 2D or 3D point in a coordinate system.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly',
},
{
	title: 'DOMQuad',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMQuad',
},
{
	title: 'DOMRect',
	text: 'A DOMRect describes the size and position of a rectangle.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMRect',
},
{
	title: 'DOMRectReadOnly',
	text: 'The DOMRectReadOnly interface specifies the standard properties used by DOMRect to define a rectangle whose properties are immutable.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly',
},
{
	title: 'DOMStringList',
	text: 'A type returned by some APIs which contains a list of DOMString (strings).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMStringList',
},
{
	title: 'DOMStringMap',
	text: 'The DOMStringMap interface is used for the HTMLElement.dataset/SVGElement.dataset attribute, to represent data for custom attributes added to elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMStringMap',
},
{
	title: 'DOMTimeStamp',
	text: 'The DOMTimeStamp type represents an absolute or relative number of milliseconds, depending on the specification in which it appears.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMTimeStamp',
},
{
	title: 'DOMTokenList',
	text: 'The DOMTokenList interface represents a set of space-separated tokens. Such a set is returned by Element.classList or HTMLLinkElement.relList, and many others.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList',
},
{
	title: 'DragEvent',
	text: 'The DragEvent interface is a DOM event that represents a drag and drop interaction. The user initiates a drag by placing a pointer device (such as a mouse) on the touch surface and then dragging the pointer to a new location (such as another DOM element). Applications are free to interpret a drag and drop interaction in an application-specific way.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DragEvent',
},
{
	title: 'DynamicsCompressorNode',
	text: 'The DynamicsCompressorNode interface provides a compression effect, which lowers the volume of the loudest parts of the signal in order to help prevent clipping and distortion that can occur when multiple sounds are played and multiplexed together at once. This is often used in musical production and game audio. DynamicsCompressorNode is an AudioNode that has exactly one input and one output.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode',
},
{
	title: 'EcdhKeyDeriveParams',
	text: 'The EcdhKeyDeriveParams dictionary of the Web Crypto API represents the object that should be passed as the algorithm parameter into SubtleCrypto.deriveKey(), when using the ECDH algorithm.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EcdhKeyDeriveParams',
},
{
	title: 'EcdsaParams',
	text: 'The EcdsaParams dictionary of the Web Crypto API represents the object that should be passed as the algorithm parameter into SubtleCrypto.sign() or SubtleCrypto.verify() when using the ECDSA algorithm.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EcdsaParams',
},
{
	title: 'EcKeyGenParams',
	text: 'The EcKeyGenParams dictionary of the Web Crypto API represents the object that should be passed as the algorithm parameter into SubtleCrypto.generateKey(), when generating any elliptic-curve-based key pair: that is, when the algorithm is identified as either of ECDSA or ECDH.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EcKeyGenParams',
},
{
	title: 'EcKeyImportParams',
	text: '',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EcKeyImportParams',
},
{
	title: 'Element',
	text: 'Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Element',
},
{
	title: 'ElementInternals',
	text: 'The ElementInternals interface of the Document_Object_Model gives web developers a way to allow custom elements to fully participate in HTML forms. It provides utilities for working with these elements in the same way you would work with any standard HTML form element, and also exposes the Accessibility Object Model to the element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals',
},
{
	title: 'EncodedAudioChunk',
	text: 'The EncodedAudioChunk interface of the WebCodecs API represents a chunk of encoded audio data.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EncodedAudioChunk',
},
{
	title: 'EncodedVideoChunk',
	text: 'The EncodedVideoChunk interface of the WebCodecs API represents a chunk of encoded video data.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EncodedVideoChunk',
},
{
	title: 'EpochTimeStamp',
	text: 'The EpochTimeStamp type represents a timestamp value in milliseconds (excluding leap seconds), relative to 01 January, 1970 00:00:00 UTC.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EpochTimeStamp',
},
{
	title: 'ErrorEvent',
	text: 'The ErrorEvent interface represents events providing information related to errors in scripts or in files.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent',
},
{
	title: 'Event',
	text: 'The Event interface represents an event which takes place in the DOM.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Event',
},
{
	title: 'EventSource',
	text: 'The EventSource interface is web content s interface to server-sent events.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EventSource',
},
{
	title: 'EventTarget',
	text: '\n  The EventTarget interface is implemented by objects that can receive events and may have listeners for them.\n  In other words, any target of events implements the three methods associated with this interface.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget',
},
{
	title: 'EXT_blend_minmax',
	text: 'The EXT_blend_minmax extension is part of the WebGL API and extends blending capabilities by adding two new blend equations: the minimum or maximum color components of the source and destination colors.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_blend_minmax',
},
{
	title: 'EXT_color_buffer_float',
	text: 'The EXT_color_buffer_float extension is part of WebGL and adds the ability to render a variety of floating point formats.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_color_buffer_float',
},
{
	title: 'EXT_color_buffer_half_float',
	text: 'The EXT_color_buffer_half_float extension is part of the WebGL API and adds the ability to render to 16-bit floating-point color buffers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_color_buffer_half_float',
},
{
	title: 'EXT_disjoint_timer_query',
	text: 'The EXT_disjoint_timer_query extension is part of the WebGL API and provides a way to measure the duration of a set of GL commands, without stalling the rendering pipeline.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query',
},
{
	title: 'EXT_float_blend',
	text: 'The WebGL API s EXT_float_blend extension allows blending and draw buffers with 32-bit floating-point components.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_float_blend',
},
{
	title: 'EXT_frag_depth',
	text: 'The EXT_frag_depth extension is part of the WebGL API and enables to set a depth value of a fragment from within the fragment shader.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_frag_depth',
},
{
	title: 'EXT_shader_texture_lod',
	text: 'The EXT_shader_texture_lod extension is part of the WebGL API and adds additional texture functions to the OpenGL ES Shading Language which provide the shader writer with explicit control of LOD (Level of detail).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_shader_texture_lod',
},
{
	title: 'EXT_sRGB',
	text: 'The EXT_sRGB extension is part of the WebGL API and adds sRGB support to textures and framebuffer objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_sRGB',
},
{
	title: 'EXT_texture_compression_bptc',
	text: 'The EXT_texture_compression_bptc extension is part of the WebGL API and exposes 4 BPTC compressed texture formats. These compression formats are called BC7 and BC6H in Microsoft s DirectX API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_compression_bptc',
},
{
	title: 'EXT_texture_compression_rgtc',
	text: 'The EXT_texture_compression_rgtc extension is part of the WebGL API and exposes 4 RGTC compressed texture formats. RGTC is a block-based texture compression format suited for unsigned and signed red and red-green textures (Red-Green Texture Compression).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_compression_rgtc',
},
{
	title: 'EXT_texture_filter_anisotropic',
	text: 'The EXT_texture_filter_anisotropic extension is part of the WebGL API and exposes two constants for anisotropic filtering (AF).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_filter_anisotropic',
},
{
	title: 'EXT_texture_norm16',
	text: 'The EXT_texture_norm16 extension is part of the WebGL API and provides a set of new 16-bit signed normalized and unsigned normalized formats (fixed-point texture, renderbuffer and texture buffer).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_norm16',
},
{
	title: 'ExtendableCookieChangeEvent',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ExtendableCookieChangeEvent',
},
{
	title: 'ExtendableEvent',
	text: 'The ExtendableEvent interface extends the lifetime of the install and activate events dispatched on the global scope as part of the service worker lifecycle. This ensures that any functional events (like FetchEvent) are not dispatched until it upgrades database schemas and deletes the outdated cache entries.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent',
},
{
	title: 'ExtendableMessageEvent',
	text: 'The ExtendableMessageEvent interface of the Service Worker API represents the event object of a message event fired on a service worker (when a message is received on the ServiceWorkerGlobalScope from another context) — extends the lifetime of such events.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent',
},
{
	title: 'EyeDropper',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper',
},
{
	title: 'FeaturePolicy',
	text: 'The FeaturePolicy interface of the Feature Policy API represents the set of policies applied to the current execution context.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FeaturePolicy',
},
{
	title: 'FederatedCredential',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FederatedCredential',
},
{
	title: 'fetch()',
	text: '\n  The global fetch() method starts the process of fetching a\n  resource from the network, returning a promise which is fulfilled once the response is\n  available.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/fetch',
},
{
	title: 'FetchEvent',
	text: 'This is the event type for fetch events dispatched on the service worker global scope. It contains information about the fetch, including the request and how the receiver will treat the response. It provides the event.respondWith() method, which allows us to provide a response to this fetch.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent',
},
{
	title: 'File',
	text: 'The File interface provides information about files and allows JavaScript in a web page to access their content.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/File',
},
{
	title: 'FileEntrySync',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileEntrySync',
},
{
	title: 'FileList',
	text: 'An object of this type is returned by the files property of the HTML <input> element; this lets you access the list of files selected with the <input type= file > element. It s also used for a list of files dropped into web content when using the drag and drop API; see the DataTransfer object for details on this usage.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileList',
},
{
	title: 'FileReader',
	text: 'The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user s computer, using File or Blob objects to specify the file or data to read.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileReader',
},
{
	title: 'FileReaderSync',
	text: 'The FileReaderSync interface allows to read File or Blob objects synchronously.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileReaderSync',
},
{
	title: 'FileSystem',
	text: 'The File and Directory Entries API interface FileSystem is used to represent a file system. These objects can be obtained from the filesystem property on any file system entry. Some browsers offer additional APIs to create and manage file systems, such as Chrome s requestFileSystem() method.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystem',
},
{
	title: 'FileSystemDirectoryEntry',
	text: 'The FileSystemDirectoryEntry interface of the File and Directory Entries API represents a directory in a file system. It provides methods which make it possible to access and manipulate the files in a directory, as well as to access the entries within the directory.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry',
},
{
	title: 'FileSystemDirectoryHandle',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryHandle',
},
{
	title: 'FileSystemDirectoryReader',
	text: 'The FileSystemDirectoryReader interface of the File and Directory Entries API lets you access the FileSystemFileEntry-based objects (generally FileSystemFileEntry or FileSystemDirectoryEntry) representing each entry in a directory.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader',
},
{
	title: 'FileSystemEntry',
	text: 'The FileSystemEntry interface of the File and Directory Entries API represents a single entry in a file system. The entry can be a file or a directory (directories are represented by the FileSystemDirectoryEntry interface). It includes methods for working with files—including copying, moving, removing, and reading files—as well as information about a file it points to—including the file name and its path from the root to the entry.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry',
},
{
	title: 'FileSystemFileEntry',
	text: 'The FileSystemFileEntry interface of the File and Directory Entries API represents a file in a file system. It offers properties describing the file s attributes, as well as the file() method, which creates a File object that can be used to read the file.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry',
},
{
	title: 'FileSystemFileHandle',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle',
},
{
	title: 'FileSystemHandle',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemHandle',
},
{
	title: 'FileSystemSync',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemSync',
},
{
	title: 'FileSystemWritableFileStream',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileSystemWritableFileStream',
},
{
	title: 'FocusEvent',
	text: 'The FocusEvent interface represents focus-related events, including focus, blur, focusin, and focusout.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent',
},
{
	title: 'FontFace',
	text: 'The FontFace interface represents a single usable font face. It allows control of the source of the font face, being a URL to an external resource, or a buffer; it also allows control of when the font face is loaded and its current status.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FontFace',
},
{
	title: 'FontFaceSet',
	text: 'The FontFaceSet interface of the CSS Font Loading API manages the loading of font-faces and querying of their download status. It is available as Document.fonts.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet',
},
{
	title: 'FontFaceSetLoadEvent',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSetLoadEvent',
},
{
	title: 'FormData',
	text: 'The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the fetch() or XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to  multipart/form-data .',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FormData',
},
{
	title: 'FormDataEvent',
	text: 'The FormDataEvent interface represents a formdata event — such an event is fired on an HTMLFormElement object after the entry list representing the form s data is constructed. This happens when the form is submitted, but can also be triggered by the invocation of a FormData() constructor.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/FormDataEvent',
},
{
	title: 'GainNode',
	text: 'The GainNode interface represents a change in volume. It is an AudioNode audio-processing module that causes a given gain to be applied to the input data before its propagation to the output. A GainNode always has exactly one input and one output, both with the same number of channels.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GainNode',
},
{
	title: 'Gamepad',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Gamepad',
},
{
	title: 'GamepadButton',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GamepadButton',
},
{
	title: 'GamepadEvent',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GamepadEvent',
},
{
	title: 'GamepadHapticActuator',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator',
},
{
	title: 'GamepadPose',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose',
},
{
	title: 'Geolocation',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation',
},
{
	title: 'GeolocationCoordinates',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GeolocationCoordinates',
},
{
	title: 'GeolocationPosition',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition',
},
{
	title: 'GeolocationPositionError',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError',
},
{
	title: 'GestureEvent',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GestureEvent',
},
{
	title: 'GlobalEventHandlers',
	text: 'The GlobalEventHandlers mixin describes the event handlers common to several interfaces like HTMLElement, Document, or Window. Each of these interfaces can, of course, add more event handlers in addition to the ones listed below.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers',
},
{
	title: 'GravitySensor',
	text: 'The GravitySensor interface of the Sensor APIs provides on each reading the gravity applied to the device along all three axes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/GravitySensor',
},
{
	title: 'Gyroscope',
	text: 'The Gyroscope interface of the Sensor APIs provides on each reading the angular velocity of the device along all three axes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope',
},
{
	title: 'HashChangeEvent',
	text: 'The HashChangeEvent interface represents events that fire when the fragment identifier of the URL has changed.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent',
},
{
	title: 'Headers',
	text: 'The Headers interface of the Fetch API allows you to perform various actions on HTTP request and response headers. These actions include retrieving, setting, adding to, and removing headers from the list of the request s headers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Headers',
},
{
	title: 'HID',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HID',
},
{
	title: 'HIDConnectionEvent',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HIDConnectionEvent',
},
{
	title: 'HIDDevice',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HIDDevice',
},
{
	title: 'HIDInputReportEvent',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HIDInputReportEvent',
},
{
	title: 'History',
	text: 'The History interface allows manipulation of the browser session history, that is the pages visited in the tab or frame that the current page is loaded in.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/History',
},
{
	title: 'HkdfParams',
	text: '',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HkdfParams',
},
{
	title: 'HmacImportParams',
	text: 'The HmacImportParams dictionary of the Web Crypto API represents the object that should be passed as the algorithm parameter into SubtleCrypto.importKey() or SubtleCrypto.unwrapKey(), when generating a key for the HMAC algorithm.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HmacImportParams',
},
{
	title: 'HmacKeyGenParams',
	text: 'The HmacKeyGenParams dictionary of the Web Crypto API represents the object that should be passed as the algorithm parameter into SubtleCrypto.generateKey(), when generating a key for the HMAC algorithm.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HmacKeyGenParams',
},
{
	title: 'HMDVRDevice',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HMDVRDevice',
},
{
	title: 'HTMLAnchorElement',
	text: 'The HTMLAnchorElement interface represents hyperlink elements and provides special properties and methods (beyond those of the regular HTMLElement object interface that they inherit from) for manipulating the layout and presentation of such elements. This interface corresponds to <a> element; not to be confused with <link>, which is represented by HTMLLinkElement)',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement',
},
{
	title: 'HTMLAreaElement',
	text: 'The HTMLAreaElement interface provides special properties and methods (beyond those of the regular object HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of <area> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLAreaElement',
},
{
	title: 'HTMLAudioElement',
	text: 'The HTMLAudioElement interface provides access to the properties of <audio> elements, as well as methods to manipulate them.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement',
},
{
	title: 'HTMLBaseElement',
	text: 'The HTMLBaseElement interface contains the base URI for a document. This object inherits all of the properties and methods as described in the HTMLElement interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLBaseElement',
},
{
	title: 'HTMLBaseFontElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLBaseFontElement',
},
{
	title: 'HTMLBodyElement',
	text: 'The HTMLBodyElement interface provides special properties (beyond those inherited from the regular HTMLElement interface) for manipulating <body> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLBodyElement',
},
{
	title: 'HTMLBRElement',
	text: 'The HTMLBRElement interface represents an HTML line break element (<br>). It inherits from HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLBRElement',
},
{
	title: 'HTMLButtonElement',
	text: 'The HTMLButtonElement interface provides properties and methods (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating <button> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement',
},
{
	title: 'HTMLCanvasElement',
	text: 'The HTMLCanvasElement interface provides properties and methods for manipulating the layout and presentation of <canvas> elements. The HTMLCanvasElement interface also inherits the properties and methods of the HTMLElement interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement',
},
{
	title: 'HTMLCollection',
	text: 'The HTMLCollection interface represents a generic collection (array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection',
},
{
	title: 'HTMLContentElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLContentElement',
},
{
	title: 'HTMLDataElement',
	text: 'The HTMLDataElement interface provides special properties (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating <data> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement',
},
{
	title: 'HTMLDataListElement',
	text: 'The HTMLDataListElement interface provides special properties (beyond the HTMLElement object interface it also has available to it by inheritance) to manipulate <datalist> elements and their content.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataListElement',
},
{
	title: 'HTMLDetailsElement',
	text: 'The HTMLDetailsElement interface provides special properties (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating <details> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLDetailsElement',
},
{
	title: 'HTMLDialogElement',
	text: 'The HTMLDialogElement interface provides methods to manipulate <dialog> elements. It inherits properties and methods from the HTMLElement interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement',
},
{
	title: 'HTMLDivElement',
	text: 'The HTMLDivElement interface provides special properties (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating <div> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement',
},
{
	title: 'HTMLDListElement',
	text: 'The HTMLDListElement interface provides special properties (beyond those of the regular HTMLElement interface it also has available to it by inheritance) for manipulating definition list (<dl>) elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLDListElement',
},
{
	title: 'HTMLDocument',
	text: 'For historical reasons, Window objects have a window.HTMLDocument property whose value is the Document interface. So you can think of HTMLDocument as an alias for Document, and you can find documentation for HTMLDocument members under the documentation for the Document interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLDocument',
},
{
	title: 'HTMLElement',
	text: 'The HTMLElement interface represents any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement',
},
{
	title: 'HTMLEmbedElement',
	text: 'The HTMLEmbedElement interface provides special properties (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating <embed> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLEmbedElement',
},
{
	title: 'HTMLFieldSetElement',
	text: 'The HTMLFieldSetElement interface provides special properties and methods (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of <fieldset> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement',
},
{
	title: 'HTMLFontElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLFontElement',
},
{
	title: 'HTMLFormControlsCollection',
	text: 'The HTMLFormControlsCollection interface represents a collection of HTML form control elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection',
},
{
	title: 'HTMLFormElement',
	text: 'The HTMLFormElement interface represents a <form> element in the DOM. It allows access to—and, in some cases, modification of—aspects of the form, as well as access to its component elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement',
},
{
	title: 'HTMLFrameSetElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLFrameSetElement',
},
{
	title: 'HTMLHeadElement',
	text: 'The HTMLHeadElement interface contains the descriptive information, or metadata, for a document. This object inherits all of the properties and methods described in the HTMLElement interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadElement',
},
{
	title: 'HTMLHeadingElement',
	text: 'The HTMLHeadingElement interface represents the different heading elements, <h1> through <h6>. It inherits methods and properties from the HTMLElement interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement',
},
{
	title: 'HTMLHRElement',
	text: 'The HTMLHRElement interface provides special properties (beyond those of the HTMLElement interface it also has available to it by inheritance) for manipulating <hr> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLHRElement',
},
{
	title: 'HTMLHtmlElement',
	text: 'The HTMLHtmlElement interface serves as the root node for a given HTML document. This object inherits the properties and methods described in the HTMLElement interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLHtmlElement',
},
{
	title: 'HTMLIFrameElement',
	text: 'The HTMLIFrameElement interface provides special properties and methods (beyond those of the HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of inline frame elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement',
},
{
	title: 'HTMLImageElement',
	text: 'The HTMLImageElement interface represents an HTML <img> element, providing the properties and methods used to manipulate image elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement',
},
{
	title: 'HTMLInputElement',
	text: 'The HTMLInputElement interface provides special properties and methods for manipulating the options, layout, and presentation of <input> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement',
},
{
	title: 'HTMLKeygenElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLKeygenElement',
},
{
	title: 'HTMLLabelElement',
	text: 'The HTMLLabelElement interface gives access to properties specific to <label> elements. It inherits methods and properties from the base HTMLElement interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement',
},
{
	title: 'HTMLLegendElement',
	text: 'The HTMLLegendElement is an interface allowing to access properties of the <legend> elements. It inherits properties and methods from the HTMLElement interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLLegendElement',
},
{
	title: 'HTMLLIElement',
	text: 'The HTMLLIElement interface exposes specific properties and methods (beyond those defined by regular HTMLElement interface it also has available to it by inheritance) for manipulating list elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement',
},
{
	title: 'HTMLLinkElement',
	text: 'The HTMLLinkElement interface represents reference information for external resources and the relationship of those resources to a document and vice-versa (corresponds to <link> element; not to be confused with <a>, which is represented by HTMLAnchorElement). This object inherits all of the properties and methods of the HTMLElement interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement',
},
{
	title: 'HTMLMapElement',
	text: 'The HTMLMapElement interface provides special properties and methods (beyond those of the regular object HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of map elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement',
},
{
	title: 'HTMLMarqueeElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMarqueeElement',
},
{
	title: 'HTMLMediaElement',
	text: 'The HTMLMediaElement interface adds to HTMLElement the properties and methods needed to support basic media-related capabilities that are common to audio and video.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement',
},
{
	title: 'HTMLMenuElement',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuElement',
},
{
	title: 'HTMLMenuItemElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuItemElement',
},
{
	title: 'HTMLMetaElement',
	text: 'The HTMLMetaElement interface contains descriptive metadata about a document. It inherits all of the properties and methods described in the HTMLElement interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement',
},
{
	title: 'HTMLMeterElement',
	text: 'The HTML <meter> elements expose the HTMLMeterElement interface, which provides special properties and methods (beyond the HTMLElement object interface they also have available to them by inheritance) for manipulating the layout and presentation of <meter> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement',
},
{
	title: 'HTMLModElement',
	text: 'The HTMLModElement interface provides special properties (beyond the regular methods and properties available through the HTMLElement interface they also have available to them by inheritance) for manipulating modification elements, that is <del> and <ins>.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLModElement',
},
{
	title: 'HTMLObjectElement',
	text: 'The HTMLObjectElement interface provides special properties and methods (beyond those on the HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of <object> element, representing external resources.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement',
},
{
	title: 'HTMLOListElement',
	text: 'The HTMLOListElement interface provides special properties (beyond those defined on the regular HTMLElement interface it also has available to it by inheritance) for manipulating ordered list elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLOListElement',
},
{
	title: 'HTMLOptGroupElement',
	text: 'The HTMLOptGroupElement interface provides special properties and methods (beyond the regular HTMLElement object interface they also have available to them by inheritance) for manipulating the layout and presentation of <optgroup> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptGroupElement',
},
{
	title: 'HTMLOptionElement',
	text: 'The HTMLOptionElement interface represents <option> elements and inherits all properties and methods of the HTMLElement interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement',
},
{
	title: 'HTMLOptionsCollection',
	text: '',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionsCollection',
},
{
	title: 'HTMLOutputElement',
	text: 'The HTMLOutputElement interface provides properties and methods (beyond those inherited from HTMLElement) for manipulating the layout and presentation of <output> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement',
},
{
	title: 'HTMLParagraphElement',
	text: 'The HTMLParagraphElement interface provides special properties (beyond those of the regular HTMLElement object interface it inherits) for manipulating <p> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLParagraphElement',
},
{
	title: 'HTMLParamElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLParamElement',
},
{
	title: 'HTMLPictureElement',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLPictureElement',
},
{
	title: 'HTMLPreElement',
	text: 'The HTMLPreElement interface exposes specific properties and methods (beyond those of the HTMLElement interface it also has available to it by inheritance) for manipulating a block of preformatted text (<pre>).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLPreElement',
},
{
	title: 'HTMLProgressElement',
	text: 'The HTMLProgressElement interface provides special properties and methods (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of <progress> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement',
},
{
	title: 'HTMLQuoteElement',
	text: 'The HTMLQuoteElement interface provides special properties and methods (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating quoting elements, like <blockquote> and <q>, but not the <cite> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLQuoteElement',
},
{
	title: 'HTMLScriptElement',
	text: 'HTML <script> elements expose the HTMLScriptElement interface, which provides special properties and methods for manipulating the behavior and execution of <script> elements (beyond the inherited HTMLElement interface).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement',
},
{
	title: 'HTMLSelectElement',
	text: 'The HTMLSelectElement interface represents a <select> HTML Element. These elements also share all of the properties and methods of other HTML elements via the HTMLElement interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement',
},
{
	title: 'HTMLShadowElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLShadowElement',
},
{
	title: 'HTMLSlotElement',
	text: 'The HTMLSlotElement interface of the Shadow DOM API enables access to the name and assigned nodes of an HTML <slot> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement',
},
{
	title: 'HTMLSourceElement',
	text: 'The HTMLSourceElement interface provides special properties (beyond the regular HTMLElement object interface it also has available to it by inheritance) for manipulating <source> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLSourceElement',
},
{
	title: 'HTMLSpanElement',
	text: 'The HTMLSpanElement interface represents a <span> element and derives from the HTMLElement interface, but without implementing any additional properties or methods.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLSpanElement',
},
{
	title: 'HTMLStyleElement',
	text: 'The HTMLStyleElement interface represents a <style> element. It inherits properties and methods from its parent, HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement',
},
{
	title: 'HTMLTableCaptionElement',
	text: 'The HTMLTableCaptionElement interface provides special properties (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating table caption elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCaptionElement',
},
{
	title: 'HTMLTableCellElement',
	text: 'The HTMLTableCellElement interface provides special properties and methods (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of table cells, either header or data cells, in an HTML document.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement',
},
{
	title: 'HTMLTableColElement',
	text: 'The HTMLTableColElement interface provides properties for manipulating single or grouped table column elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableColElement',
},
{
	title: 'HTMLTableElement',
	text: 'The HTMLTableElement interface provides special properties and methods (beyond the regular HTMLElement object interface it also has available to it by inheritance) for manipulating the layout and presentation of tables in an HTML document.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement',
},
{
	title: 'HTMLTableRowElement',
	text: 'The HTMLTableRowElement interface provides special properties and methods (beyond the HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of rows in an HTML table.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement',
},
{
	title: 'HTMLTableSectionElement',
	text: 'The HTMLTableSectionElement interface provides special properties and methods (beyond the HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of sections, that is headers, footers and bodies, in an HTML table.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement',
},
{
	title: 'HTMLTemplateElement',
	text: 'The HTMLTemplateElement interface enables access to the contents of an HTML <template> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement',
},
{
	title: 'HTMLTextAreaElement',
	text: 'The HTMLTextAreaElement interface provides special properties and methods for manipulating the layout and presentation of <textarea> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement',
},
{
	title: 'HTMLTimeElement',
	text: 'The HTMLTimeElement interface provides special properties (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating <time> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTimeElement',
},
{
	title: 'HTMLTitleElement',
	text: 'The HTMLTitleElement interface contains the title for a document. This element inherits all of the properties and methods of the HTMLElement interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTitleElement',
},
{
	title: 'HTMLTrackElement',
	text: 'The HTMLTrackElement interface represents an HTML <track> element within the DOM. This element can be used as a child of either <audio> or <video> to specify a text track containing information such as closed captions or subtitles.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement',
},
{
	title: 'HTMLUListElement',
	text: 'The HTMLUListElement interface provides special properties (beyond those defined on the regular HTMLElement interface it also has available to it by inheritance) for manipulating unordered list elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLUListElement',
},
{
	title: 'HTMLUnknownElement',
	text: 'The HTMLUnknownElement interface represents an invalid HTML element and derives from the HTMLElement interface, but without implementing any additional properties or methods.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLUnknownElement',
},
{
	title: 'HTMLVideoElement',
	text: 'The HTMLVideoElement interface provides special properties and methods for manipulating video objects. It also inherits properties and methods of HTMLMediaElement and HTMLElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement',
},
{
	title: 'IDBCursor',
	text: 'Note: Not to be confused with IDBCursorWithValue which is just an IDBCursor interface with an additional value property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor',
},
{
	title: 'IDBCursorWithValue',
	text: 'The IDBCursorWithValue interface of the IndexedDB API represents a cursor for traversing or iterating over multiple records in a database. It is the same as the IDBCursor, except that it includes the value property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBCursorWithValue',
},
{
	title: 'IDBDatabase',
	text: 'The IDBDatabase interface of the IndexedDB API provides a connection to a database; you can use an IDBDatabase object to open a transaction on your database then create, manipulate, and delete objects (data) in that database. The interface provides the only way to get and manage versions of the database.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase',
},
{
	title: 'IDBFactory',
	text: 'The IDBFactory interface of the IndexedDB API lets applications asynchronously access the indexed databases. The object that implements the interface is window.indexedDB. You open — that is, create and access — and delete a database with this object, and not directly with IDBFactory.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory',
},
{
	title: 'IDBFileHandle',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBFileHandle',
},
{
	title: 'IDBFileRequest',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBFileRequest',
},
{
	title: 'IDBIndex',
	text: 'IDBIndex interface of the IndexedDB API provides asynchronous access to an index in a database. An index is a kind of object store for looking up records in another object store, called the referenced object store. You use this interface to retrieve data.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex',
},
{
	title: 'IDBKeyRange',
	text: 'The IDBKeyRange interface of the IndexedDB API represents a continuous interval over some data type that is used for keys. Records can be retrieved from IDBObjectStore and IDBIndex objects using keys or a range of keys. You can limit the range using lower and upper bounds. For example, you can iterate over all values of a key in the value range A–Z.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange',
},
{
	title: 'IDBLocaleAwareKeyRange',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBLocaleAwareKeyRange',
},
{
	title: 'IDBMutableFile',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile',
},
{
	title: 'IDBObjectStore',
	text: 'The IDBObjectStore interface of the IndexedDB API represents an object store in a database. Records within an object store are sorted according to their keys. This sorting enables fast insertion, look-up, and ordered retrieval.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore',
},
{
	title: 'IDBOpenDBRequest',
	text: 'The IDBOpenDBRequest interface of the IndexedDB API provides access to the results of requests to open or delete databases (performed using IDBFactory.open and IDBFactory.deleteDatabase), using specific event handler attributes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest',
},
{
	title: 'IDBRequest',
	text: 'The IDBRequest interface of the IndexedDB API provides access to results of asynchronous requests to databases and database objects using event handler attributes. Each reading and writing operation on a database is done using a request.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest',
},
{
	title: 'IDBTransaction',
	text: 'The IDBTransaction interface of the IndexedDB API provides a static, asynchronous transaction on a database using event handler attributes. All reading and writing of data is done within transactions. You use IDBDatabase to start transactions, IDBTransaction to set the mode of the transaction (e.g. is it readonly or readwrite), and you access an IDBObjectStore to make a request. You can also use an IDBTransaction object to abort transactions.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction',
},
{
	title: 'IDBVersionChangeEvent',
	text: 'The IDBVersionChangeEvent interface of the IndexedDB API indicates that the version of the database has changed, as the result of an onupgradeneeded event handler function.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeEvent',
},
{
	title: 'IdleDeadline',
	text: 'The IdleDeadline interface is used as the data type of the input parameter to idle callbacks established by calling Window.requestIdleCallback(). It offers a method, timeRemaining(), which lets you determine how much longer the user agent estimates it will remain idle and a property, didTimeout, which lets you determine if your callback is executing because its timeout duration expired.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IdleDeadline',
},
{
	title: 'IdleDetector',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IdleDetector',
},
{
	title: 'IIRFilterNode',
	text: 'The IIRFilterNode interface of the Web Audio API is a AudioNode processor which implements a general infinite impulse response (IIR) filter; this type of filter can be used to implement tone control devices and graphic equalizers as well. It lets the parameters of the filter response be specified, so that it can be tuned as needed.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IIRFilterNode',
},
{
	title: 'ImageBitmap',
	text: 'The ImageBitmap interface represents a bitmap image which can be drawn to a <canvas> without undue latency. It can be created from a variety of source objects using the createImageBitmap() factory method. ImageBitmap provides an asynchronous and resource efficient pathway to prepare textures for rendering in WebGL.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap',
},
{
	title: 'ImageBitmapRenderingContext',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmapRenderingContext',
},
{
	title: 'ImageCapture',
	text: 'The ImageCapture interface of the MediaStream Image Capture API provides methods to enable the capture of images or photos from a camera or other photographic device. It provides an interface for capturing images from a photographic device referenced through a valid MediaStreamTrack.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture',
},
{
	title: 'ImageData',
	text: 'The ImageData interface represents the underlying pixel data of an area of a <canvas> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ImageData',
},
{
	title: 'ImageDecoder',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ImageDecoder',
},
{
	title: 'ImageTrack',
	text: 'The ImageTrack interface of the WebCodecs API represents an individual image track.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ImageTrack',
},
{
	title: 'ImageTrackList',
	text: 'The ImageTrackList interface of the WebCodecs API represents a list of image tracks.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ImageTrackList',
},
{
	title: 'indexedDB',
	text: '\n  The global indexedDB read-only property provides a mechanism for applications to\n  asynchronously access the capabilities of indexed databases.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/indexedDB',
},
{
	title: 'InputDeviceCapabilities',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/InputDeviceCapabilities',
},
{
	title: 'InputDeviceInfo',
	text: 'The InputDeviceInfo interface of the Media Streams API gives access to the capabilities of the input device that it represents.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/InputDeviceInfo',
},
{
	title: 'InputEvent',
	text: 'The InputEvent interface represents an event notifying the user of editable content changes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/InputEvent',
},
{
	title: 'InstallEvent',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/InstallEvent',
},
{
	title: 'IntersectionObserver',
	text: 'The IntersectionObserver interface of the Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document s viewport. The ancestor element or viewport is referred to as the root.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver',
},
{
	title: 'IntersectionObserverEntry',
	text: 'The IntersectionObserverEntry interface of the Intersection Observer API describes the intersection between the target element and its root container at a specific moment of transition.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry',
},
{
	title: 'InterventionReportBody',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/InterventionReportBody',
},
{
	title: 'isSecureContext',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/isSecureContext',
},
{
	title: 'Keyboard',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Keyboard',
},
{
	title: 'KeyboardEvent',
	text: 'KeyboardEvent objects describe a user interaction with the keyboard; each event describes a single interaction between the user and a key (or combination of a key with modifier keys) on the keyboard. The event type (keydown, keypress, or keyup) identifies what kind of keyboard activity occurred.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent',
},
{
	title: 'KeyboardLayoutMap',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap',
},
{
	title: 'KeyframeEffect',
	text: 'The KeyframeEffect interface of the Web Animations API lets us create sets of animatable properties and values, called keyframes. These can then be played using the Animation() constructor.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect',
},
{
	title: 'KHR_parallel_shader_compile',
	text: 'The KHR_parallel_shader_compile extension is part of the WebGL API and enables a non-blocking poll operation, so that compile/link status availability (COMPLETION_STATUS_KHR) can be queried without potentially incurring stalls. In other words you can check the status of your shaders compiling without blocking the runtime.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/KHR_parallel_shader_compile',
},
{
	title: 'LargestContentfulPaint',
	text: 'The LargestContentfulPaint interface of the Largest Contentful Paint API provides details about the largest image or text paint before user input on a web page. The timing of this paint is a good heuristic for when the main page content is available during load.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/LargestContentfulPaint',
},
{
	title: 'LayoutShift',
	text: 'The LayoutShift interface of the Layout Instability API provides insights into the stability of web pages based on movements of the elements on the page.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift',
},
{
	title: 'LayoutShiftAttribution',
	text: 'The LayoutShiftAttribution interface of the Layout Instability API provides debugging information about elements which have shifted.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/LayoutShiftAttribution',
},
{
	title: 'LinearAccelerationSensor',
	text: 'The LinearAccelerationSensor interface of the Sensor APIs provides on each reading the acceleration applied to the device along all three axes, but without the contribution of gravity.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor',
},
{
	title: 'Location',
	text: 'The Location interface represents the location (URL) of the object it is linked to. Changes done on it are reflected on the object it relates to. Both the Document and Window interface have such a linked Location, accessible via Document.location and Window.location respectively.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Location',
},
{
	title: 'Lock',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Lock',
},
{
	title: 'LockManager',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/LockManager',
},
{
	title: 'Magnetometer',
	text: 'The Magnetometer interface of the Sensor APIs provides information about the magnetic field as detected by the device s primary magnetometer sensor.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer',
},
{
	title: 'MathMLElement',
	text: 'The MathMLElement interface represents any MathML element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MathMLElement',
},
{
	title: 'MediaCapabilities',
	text: 'The MediaCapabilities interface of the Media Capabilities API provides information about the decoding abilities of the device, system and browser. The API can be used to query the browser about the decoding abilities of the device based on codecs, profile, resolution, and bitrates. The information can be used to serve optimal media streams to the user and determine if playback should be smooth and power efficient.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaCapabilities',
},
{
	title: 'MediaDeviceInfo',
	text: 'The MediaDeviceInfo interface contains information that describes a single media input or output device.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo',
},
{
	title: 'MediaDevices',
	text: 'The MediaDevices interface provides access to connected media input devices like cameras and microphones, as well as screen sharing. In essence, it lets you obtain access to any hardware source of media data.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices',
},
{
	title: 'MediaElementAudioSourceNode',
	text: 'The MediaElementAudioSourceNode interface represents an audio source consisting of an HTML5 <audio> or <video> element. It is an AudioNode that acts as an audio source.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaElementAudioSourceNode',
},
{
	title: 'MediaError',
	text: 'The MediaError interface represents an error which occurred while handling media in an HTML media element based on HTMLMediaElement, such as <audio> or <video>.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaError',
},
{
	title: 'MediaImage',
	text: 'The Media Session API s MediaImage dictionary describes the images associated with a media resource s MediaMetadata.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaImage',
},
{
	title: 'MediaKeyMessageEvent',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyMessageEvent',
},
{
	title: 'MediaKeys',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaKeys',
},
{
	title: 'MediaKeySession',
	text: 'The MediaKeySession interface of the EncryptedMediaExtensions API represents a context for message exchange with a content decryption module (CDM).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession',
},
{
	title: 'MediaKeyStatusMap',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap',
},
{
	title: 'MediaKeySystemAccess',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemAccess',
},
{
	title: 'MediaList',
	text: 'The MediaList interface represents the media queries of a stylesheet, e.g. those set using a <link> element s media attribute.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaList',
},
{
	title: 'MediaMetadata',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata',
},
{
	title: 'MediaQueryList',
	text: 'A MediaQueryList object stores information on a media query applied to a document, with support for both immediate and event-driven matching against the state of the document.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList',
},
{
	title: 'MediaQueryListEvent',
	text: 'The MediaQueryListEvent object stores information on the changes that have happened to a MediaQueryList object — instances are available as the event object on a function referenced by a change event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent',
},
{
	title: 'MediaRecorder',
	text: 'The MediaRecorder interface of the MediaStream Recording API provides functionality to easily record media. It is created using the MediaRecorder() constructor.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder',
},
{
	title: 'MediaRecorderErrorEvent',
	text: 'The MediaRecorderErrorEvent interface represents errors returned by the MediaStream Recording API. It is an Event object that encapsulates a reference to a DOMException describing the error that occurred.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorderErrorEvent',
},
{
	title: 'MediaSession',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaSession',
},
{
	title: 'MediaSource',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaSource',
},
{
	title: 'MediaStream',
	text: 'The MediaStream interface represents a stream of media content. A stream consists of several tracks, such as video or audio tracks. Each track is specified as an instance of MediaStreamTrack.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStream',
},
{
	title: 'MediaStreamAudioDestinationNode',
	text: 'The MediaStreamAudioDestinationNode interface represents an audio destination consisting of a WebRTC MediaStream with a single AudioMediaStreamTrack, which can be used in a similar way to a MediaStream obtained from navigator.mediaDevices.getUserMedia().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode',
},
{
	title: 'MediaStreamAudioSourceNode',
	text: 'The MediaStreamAudioSourceNode interface is a type of AudioNode which operates as an audio source whose media is received from a MediaStream obtained using the WebRTC or Media Capture and Streams APIs.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode',
},
{
	title: 'MediaStreamEvent',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamEvent',
},
{
	title: 'MediaStreamTrack',
	text: 'The MediaStreamTrack interface represents a single media track within a stream; typically, these are audio or video tracks, but other track types may exist as well.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack',
},
{
	title: 'MediaStreamTrackAudioSourceNode',
	text: 'The MediaStreamTrackAudioSourceNode interface is a type of AudioNode which represents a source of audio data taken from a specific MediaStreamTrack obtained through the WebRTC or Media Capture and Streams APIs.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackAudioSourceNode',
},
{
	title: 'MediaStreamTrackEvent',
	text: 'The MediaStreamTrackEvent interface represents events which indicate that a MediaStream has had tracks added to or removed from the stream through calls to Media Stream API methods. These events are sent to the stream when these changes occur.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackEvent',
},
{
	title: 'MediaStreamTrackGenerator',
	text: '\n  The MediaStreamTrackGenerator interface of the Insertable Streams for MediaStreamTrack API creates a WritableStream that acts as a MediaStreamTrack source.\n  The object consumes a stream of media frames as input, which can be audio or video frames.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackGenerator',
},
{
	title: 'MediaStreamTrackProcessor',
	text: 'The MediaStreamTrackProcessor interface of the Insertable Streams for MediaStreamTrack API consumes a MediaStreamTrack object s source and generates a stream of media frames.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackProcessor',
},
{
	title: 'MediaTrackConstraints',
	text: 'The MediaTrackConstraints dictionary is used to describe a set of capabilities and the value or values each can take on. A constraints dictionary is passed into applyConstraints() to allow a script to establish a set of exact (required) values or ranges and/or preferred values or ranges of values for the track, and the most recently-requested set of custom constraints can be retrieved by calling getConstraints().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints',
},
{
	title: 'MediaTrackSettings',
	text: 'The MediaTrackSettings dictionary is used to return the current values configured for each of a MediaStreamTrack s settings. These values will adhere as closely as possible to any constraints previously described using a MediaTrackConstraints object and set using applyConstraints(), and will adhere to the default constraints for any properties whose constraints haven t been changed, or whose customized constraints couldn t be matched.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings',
},
{
	title: 'MediaTrackSupportedConstraints',
	text: 'The MediaTrackSupportedConstraints dictionary establishes the list of constrainable properties recognized by the user agent or browser in its implementation of the MediaStreamTrack object. An object conforming to MediaTrackSupportedConstraints is returned by MediaDevices.getSupportedConstraints().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints',
},
{
	title: 'MerchantValidationEvent',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent',
},
{
	title: 'MessageChannel',
	text: 'The MessageChannel interface of the Channel Messaging API allows us to create a new message channel and send data through it via its two MessagePort properties.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel',
},
{
	title: 'MessageEvent',
	text: 'The MessageEvent interface represents a message received by a target object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent',
},
{
	title: 'MessagePort',
	text: 'The MessagePort interface of the Channel Messaging API represents one of the two ports of a MessageChannel, allowing messages to be sent from one port and listening out for them arriving at the other.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MessagePort',
},
{
	title: 'Metadata',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Metadata',
},
{
	title: 'MIDIAccess',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess',
},
{
	title: 'MIDIConnectionEvent',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MIDIConnectionEvent',
},
{
	title: 'MIDIInput',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MIDIInput',
},
{
	title: 'MIDIInputMap',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MIDIInputMap',
},
{
	title: 'MIDIMessageEvent',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MIDIMessageEvent',
},
{
	title: 'MIDIOutput',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MIDIOutput',
},
{
	title: 'MIDIOutputMap',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MIDIOutputMap',
},
{
	title: 'MIDIPort',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MIDIPort',
},
{
	title: 'MimeType',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MimeType',
},
{
	title: 'MimeTypeArray',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MimeTypeArray',
},
{
	title: 'MouseEvent',
	text: '\n  The MouseEvent interface represents events that occur due to the user interacting with a pointing device (such as a mouse).\n  Common events using this interface include click, dblclick, mouseup, mousedown.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent',
},
{
	title: 'MouseScrollEvent',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MouseScrollEvent',
},
{
	title: 'MSGestureEvent',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MSGestureEvent',
},
{
	title: 'MSGraphicsTrust',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MSGraphicsTrust',
},
{
	title: 'MSManipulationEvent',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MSManipulationEvent',
},
{
	title: 'MSSiteModeEvent',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MSSiteModeEvent',
},
{
	title: 'msWriteProfilerMark',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/msWriteProfilerMark',
},
{
	title: 'MutationEvent',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MutationEvent',
},
{
	title: 'MutationObserver',
	text: 'The MutationObserver interface provides the ability to watch for changes being made to the DOM tree. It is designed as a replacement for the older Mutation Events feature, which was part of the DOM3 Events specification.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver',
},
{
	title: 'MutationRecord',
	text: 'A MutationRecord represents an individual DOM mutation. It is the object that is inside the array passed to MutationObserver s callback.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord',
},
{
	title: 'NamedNodeMap',
	text: 'The NamedNodeMap interface represents a collection of Attr objects. Objects inside a NamedNodeMap are not in any particular order, unlike NodeList, although they may be accessed by an index as in an array.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap',
},
{
	title: 'NavigationPreloadManager',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NavigationPreloadManager',
},
{
	title: 'Navigator',
	text: 'The Navigator interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Navigator',
},
{
	title: 'NavigatorUAData',
	text: 'The NavigatorUAData interface of the User-Agent Client Hints API returns information about the browser and operating system of a user.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData',
},
{
	title: 'NDEFMessage',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NDEFMessage',
},
{
	title: 'NDEFReader',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NDEFReader',
},
{
	title: 'NDEFReadingEvent',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NDEFReadingEvent',
},
{
	title: 'NDEFRecord',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NDEFRecord',
},
{
	title: 'NetworkInformation',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation',
},
{
	title: 'Node',
	text: '\n  The DOM Node interface is an abstract base\n  class upon which many other DOM API objects are based, thus letting those object types\n  to be used similarly and often interchangeably. As an abstract class, there is\n  no such thing as a plain Node object. All objects that implement\n  Node functionality are based on one of its subclasses. Most notable are\n  Document, Element, and DocumentFragment.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Node',
},
{
	title: 'NodeIterator',
	text: '\n  The NodeIterator interface\n  represents an iterator over the members of a list of the nodes in a subtree of the\n  DOM. The nodes will be returned in document order.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator',
},
{
	title: 'NodeList',
	text: 'NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NodeList',
},
{
	title: 'Notification',
	text: 'Note: This feature is available in Web Workers',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Notification',
},
{
	title: 'NotificationEvent',
	text: 'The parameter passed into the onnotificationclick handler, the NotificationEvent interface represents a notification click event that is dispatched on the ServiceWorkerGlobalScope of a ServiceWorker.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NotificationEvent',
},
{
	title: 'NotifyAudioAvailableEvent',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/NotifyAudioAvailableEvent',
},
{
	title: 'OES_element_index_uint',
	text: 'The OES_element_index_uint extension is part of the WebGL API and adds support for gl.UNSIGNED_INT types to WebGLRenderingContext.drawElements().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OES_element_index_uint',
},
{
	title: 'OES_fbo_render_mipmap',
	text: 'The OES_fbo_render_mipmap extension is part of the WebGL API and makes it possible to attach any level of a texture to a framebuffer object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OES_fbo_render_mipmap',
},
{
	title: 'OES_standard_derivatives',
	text: 'The OES_standard_derivatives extension is part of the WebGL API and adds the GLSL derivative functions dFdx, dFdy, and fwidth.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OES_standard_derivatives',
},
{
	title: 'OES_texture_float',
	text: 'The OES_texture_float extension is part of the WebGL API and exposes floating-point pixel types for textures.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OES_texture_float',
},
{
	title: 'OES_texture_float_linear',
	text: 'The OES_texture_float_linear extension is part of the WebGL API and allows linear filtering with floating-point pixel types for textures.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OES_texture_float_linear',
},
{
	title: 'OES_texture_half_float',
	text: 'The OES_texture_half_float extension is part of the WebGL API and adds texture formats with 16- (aka half float) and 32-bit floating-point components.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OES_texture_half_float',
},
{
	title: 'OES_texture_half_float_linear',
	text: 'The OES_texture_half_float_linear extension is part of the WebGL API and allows linear filtering with half floating-point pixel types for textures.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OES_texture_half_float_linear',
},
{
	title: 'OES_vertex_array_object',
	text: 'The OES_vertex_array_object extension is part of the WebGL API and provides vertex array objects (VAOs) which encapsulate vertex array states. These objects keep pointers to vertex data and provide names for different sets of vertex data.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OES_vertex_array_object',
},
{
	title: 'OfflineAudioCompletionEvent',
	text: 'The Web Audio API OfflineAudioCompletionEvent interface represents events that occur when the processing of an OfflineAudioContext is terminated. The complete event uses this interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioCompletionEvent',
},
{
	title: 'OfflineAudioContext',
	text: 'The OfflineAudioContext interface is an AudioContext interface representing an audio-processing graph built from linked together AudioNodes. In contrast with a standard AudioContext, an OfflineAudioContext doesn t render the audio to the device hardware; instead, it generates it, as fast as it can, and outputs the result to an AudioBuffer.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext',
},
{
	title: 'OffscreenCanvas',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas',
},
{
	title: 'OrientationSensor',
	text: 'The OrientationSensor interface of the Sensor APIs is the base class for orientation sensors. This interface cannot be used directly. Instead it provides properties and methods accessed by interfaces that inherit from it.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OrientationSensor',
},
{
	title: 'origin',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/origin',
},
{
	title: 'OscillatorNode',
	text: 'The OscillatorNode interface represents a periodic waveform, such as a sine wave. It is an AudioScheduledSourceNode audio-processing module that causes a specified frequency of a given wave to be created—in effect, a constant tone.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode',
},
{
	title: 'OTPCredential',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OTPCredential',
},
{
	title: 'OverconstrainedError',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError',
},
{
	title: 'OVR_multiview2',
	text: 'The OVR_multiview2 extension is part of the WebGL API and adds support for rendering into multiple views simultaneously. This especially useful for virtual reality (VR) and WebXR.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/OVR_multiview2',
},
{
	title: 'PageTransitionEvent',
	text: 'The PageTransitionEvent event object is available inside handler functions for the pageshow and pagehide events, fired when a document is being loaded or unloaded.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PageTransitionEvent',
},
{
	title: 'PaintWorklet',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet',
},
{
	title: 'PannerNode',
	text: 'The PannerNode interface defines an audio-processing object that represents the location, direction, and behavior of an audio source signal in a simulated physical space. This AudioNode uses right-hand Cartesian coordinates to describe the source s position as a vector and its orientation as a 3D directional cone.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PannerNode',
},
{
	title: 'PasswordCredential',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential',
},
{
	title: 'Path2D',
	text: 'The Path2D interface of the Canvas 2D API is used to declare a path that can then be used on a CanvasRenderingContext2D object. The path methods of the CanvasRenderingContext2D interface are also present on this interface, which gives you the convenience of being able to retain and replay your path whenever desired.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Path2D',
},
{
	title: 'PaymentAddress',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress',
},
{
	title: 'PaymentMethodChangeEvent',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent',
},
{
	title: 'PaymentRequest',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest',
},
{
	title: 'PaymentRequestEvent',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent',
},
{
	title: 'PaymentRequestUpdateEvent',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestUpdateEvent',
},
{
	title: 'PaymentResponse',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse',
},
{
	title: 'Pbkdf2Params',
	text: 'The Pbkdf2Params dictionary of the Web Crypto API represents the object that should be passed as the algorithm parameter into SubtleCrypto.deriveKey(), when using the PBKDF2 algorithm.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Pbkdf2Params',
},
{
	title: 'Performance',
	text: 'The Performance interface provides access to performance-related information for the current page. It s part of the High Resolution Time API, but is enhanced by the Performance Timeline API, the Navigation Timing API, the User Timing API, and the Resource Timing API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance',
},
{
	title: 'PerformanceElementTiming',
	text: 'The PerformanceElementTiming interface of the Element Timing API reports timing information on a specific element identified by the page author. For example it could report timing information about the main image in an article.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceElementTiming',
},
{
	title: 'PerformanceEntry',
	text: 'The PerformanceEntry object encapsulates a single performance metric that is part of the performance timeline. A performance entry can be directly created by making a performance mark or measure (for example by calling the mark() method) at an explicit point in an application. Performance entries are also created in indirect ways such as loading a resource (such as an image).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry',
},
{
	title: 'PerformanceEventTiming',
	text: 'The PerformanceEventTiming interface of the Event Timing API provides timing information for the event types listed below.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEventTiming',
},
{
	title: 'PerformanceLongTaskTiming',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming',
},
{
	title: 'PerformanceMark',
	text: 'PerformanceMark is an abstract interface for PerformanceEntry objects with an entryType of  mark . Entries of this type are created by calling performance.mark() to add a named DOMHighResTimeStamp (the mark) to the browser s performance timeline.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceMark',
},
{
	title: 'PerformanceMeasure',
	text: 'PerformanceMeasure is an abstract interface for PerformanceEntry objects with an entryType of  measure . Entries of this type are created by calling performance.measure() to add a named DOMHighResTimeStamp (the measure) between two marks to the browser s performance timeline.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceMeasure',
},
{
	title: 'PerformanceNavigation',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation',
},
{
	title: 'PerformanceNavigationTiming',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming',
},
{
	title: 'PerformanceObserver',
	text: 'The PerformanceObserver interface is used to observe performance measurement events and be notified of new performance entries as they are recorded in the browser s performance timeline.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver',
},
{
	title: 'PerformanceObserverEntryList',
	text: 'The PerformanceObserverEntryList interface is a list of performance events that were explicitly observed via the observe() method.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserverEntryList',
},
{
	title: 'PerformancePaintTiming',
	text: 'The PerformancePaintTiming interface of the Paint Timing API provides timing information about  paint  (also called  render ) operations during web page construction.  Paint  refers to conversion of the render tree to on-screen pixels.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformancePaintTiming',
},
{
	title: 'PerformanceResourceTiming',
	text: 'The PerformanceResourceTiming interface enables retrieval and analysis of detailed network timing data regarding the loading of an application s resources. An application can use the timing metrics to determine, for example, the length of time it takes to fetch a specific resource, such as an XMLHttpRequest, <SVG>, image, or script.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming',
},
{
	title: 'PerformanceServerTiming',
	text: 'Note: This feature is available in Web Workers',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceServerTiming',
},
{
	title: 'PerformanceTiming',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming',
},
{
	title: 'PeriodicSyncEvent',
	text: 'The PeriodicSyncEvent interface of the Web Periodic Background Synchronization API provides a way to run tasks in the service worker with network connectivity.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PeriodicSyncEvent',
},
{
	title: 'PeriodicSyncManager',
	text: 'The PeriodicSyncManager interface of the Web Periodic Background Synchronization API provides a way to register tasks to be run in a service worker at periodic intervals with network connectivity. These tasks are referred to as periodic background sync requests. Access PeriodicSyncManager through the ServiceWorkerRegistration.periodicSync.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PeriodicSyncManager',
},
{
	title: 'PeriodicWave',
	text: 'The PeriodicWave interface defines a periodic waveform that can be used to shape the output of an OscillatorNode.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PeriodicWave',
},
{
	title: 'Permissions',
	text: 'The Permissions interface of the Permissions API provides the core Permission API functionality, such as methods for querying and revoking permissions',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Permissions',
},
{
	title: 'PermissionStatus',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PermissionStatus',
},
{
	title: 'PictureInPictureEvent',
	text: 'The PictureInPictureEvent interface represents picture-in-picture-related events, including enterpictureinpicture, leavepictureinpicture and resize',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PictureInPictureEvent',
},
{
	title: 'PictureInPictureWindow',
	text: 'The PictureInPictureWindow interface represents an object able to programmatically obtain the width and height and resize event of the floating video window.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PictureInPictureWindow',
},
{
	title: 'Plugin',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Plugin',
},
{
	title: 'PluginArray',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PluginArray',
},
{
	title: 'Point',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebKitPoint',
},
{
	title: 'PointerEvent',
	text: 'The PointerEvent interface represents the state of a DOM event produced by a pointer such as the geometry of the contact point, the device type that generated the event, the amount of pressure that was applied on the contact surface, etc.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent',
},
{
	title: 'PopStateEvent',
	text: 'PopStateEvent is an interface for the popstate event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PopStateEvent',
},
{
	title: 'PositionSensorVRDevice',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PositionSensorVRDevice',
},
{
	title: 'Presentation',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Presentation',
},
{
	title: 'PresentationAvailability',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PresentationAvailability',
},
{
	title: 'PresentationConnection',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection',
},
{
	title: 'PresentationConnectionAvailableEvent',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnectionAvailableEvent',
},
{
	title: 'PresentationConnectionCloseEvent',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnectionCloseEvent',
},
{
	title: 'PresentationConnectionList',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnectionList',
},
{
	title: 'PresentationReceiver',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PresentationReceiver',
},
{
	title: 'PresentationRequest',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest',
},
{
	title: 'ProcessingInstruction',
	text: 'The ProcessingInstruction interface represents a processing instruction; that is, a Node which embeds an instruction targeting a specific application but that can be ignored by any other applications which don t recognize the instruction.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ProcessingInstruction',
},
{
	title: 'ProgressEvent',
	text: 'The ProgressEvent interface represents events measuring progress of an underlying process, like an HTTP request (for an XMLHttpRequest, or the loading of the underlying resource of an <img>, <audio>, <video>, <style> or <link>).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent',
},
{
	title: 'PromiseRejectionEvent',
	text: 'The PromiseRejectionEvent interface represents events which are sent to the global script context when JavaScript Promises are rejected. These events are particularly useful for telemetry and debugging purposes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent',
},
{
	title: 'PublicKeyCredential',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential',
},
{
	title: 'PublicKeyCredentialRequestOptions',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions',
},
{
	title: 'PushEvent',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PushEvent',
},
{
	title: 'PushManager',
	text: 'The PushManager interface of the Push API provides a way to receive notifications from third-party servers as well as request URLs for push notifications.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PushManager',
},
{
	title: 'PushMessageData',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData',
},
{
	title: 'PushSubscription',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription',
},
{
	title: 'PushSubscriptionOptions',
	text: 'The PushSubscriptionOptions interface of the Push API represents the options associated with a push subscription.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/PushSubscriptionOptions',
},
{
	title: 'queueMicrotask()',
	text: '\n  The queueMicrotask() method,\n  which is exposed on the Window or Worker interface,\n  queues a microtask to be executed at a safe time prior to control returning to the\n  browser s event loop.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask',
},
{
	title: 'RadioNodeList',
	text: 'The RadioNodeList interface represents a collection of radio elements in a <form> or a <fieldset> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RadioNodeList',
},
{
	title: 'Range',
	text: 'The Range interface represents a fragment of a document that can contain nodes and parts of text nodes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Range',
},
{
	title: 'ReadableByteStreamController',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController',
},
{
	title: 'ReadableStream',
	text: 'The ReadableStream interface of the Streams API represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream',
},
{
	title: 'ReadableStreamBYOBReader',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader',
},
{
	title: 'ReadableStreamBYOBRequest',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBRequest',
},
{
	title: 'ReadableStreamDefaultController',
	text: 'The ReadableStreamDefaultController interface of the Streams API represents a controller allowing control of a ReadableStream s state and internal queue. Default controllers are for streams that are not byte streams.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController',
},
{
	title: 'ReadableStreamDefaultReader',
	text: 'The ReadableStreamDefaultReader interface of the Streams API represents a default reader that can be used to read stream data supplied from a network (e.g. a fetch request).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader',
},
{
	title: 'RelativeOrientationSensor',
	text: 'The RelativeOrientationSensor interface of the Sensor APIs describes the device s physical orientation without regard to the Earth s reference coordinate system.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RelativeOrientationSensor',
},
{
	title: 'RemotePlayback',
	text: 'The RemotePlayback interface of the Remote Playback API allows the page to detect availability of remote playback devices, then connect to and control playing on these devices.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback',
},
{
	title: 'Report',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Report',
},
{
	title: 'ReportBody',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReportBody',
},
{
	title: 'reportError()',
	text: 'Note: This feature is available in Web Workers',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/reportError',
},
{
	title: 'ReportingObserver',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReportingObserver',
},
{
	title: 'ReportingObserverOptions',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ReportingObserverOptions',
},
{
	title: 'Request',
	text: 'The Request interface of the Fetch API represents a resource request.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Request',
},
{
	title: 'ResizeObserver',
	text: 'The ResizeObserver interface reports changes to the dimensions of an Element s content or border box, or the bounding box of an SVGElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver',
},
{
	title: 'ResizeObserverEntry',
	text: 'The ResizeObserverEntry interface represents the object passed to the ResizeObserver() constructor s callback function, which allows you to access the new dimensions of the Element or SVGElement being observed.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry',
},
{
	title: 'ResizeObserverSize',
	text: 'The ResizeObserverSize interface of the Resize Observer API is used by the ResizeObserverEntry interface to access the box sizing properties of the element being observed.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverSize',
},
{
	title: 'Response',
	text: 'The Response interface of the Fetch API represents the response to a request.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Response',
},
{
	title: 'RsaHashedImportParams',
	text: 'The RsaHashedImportParams dictionary of the Web Crypto API represents the object that should be passed as the algorithm parameter into SubtleCrypto.importKey() or SubtleCrypto.unwrapKey(), when importing any RSA-based key pair: that is, when the algorithm is identified as any of RSASSA-PKCS1-v1_5, RSA-PSS, or RSA-OAEP.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RsaHashedImportParams',
},
{
	title: 'RsaHashedKeyGenParams',
	text: 'The RsaHashedKeyGenParams dictionary of the Web Crypto API represents the object that should be passed as the algorithm parameter into SubtleCrypto.generateKey(), when generating any RSA-based key pair: that is, when the algorithm is identified as any of RSASSA-PKCS1-v1_5, RSA-PSS, or RSA-OAEP.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RsaHashedKeyGenParams',
},
{
	title: 'RsaOaepParams',
	text: 'The RsaOaepParams dictionary of the Web Crypto API represents the object that should be passed as the algorithm parameter into SubtleCrypto.encrypt(), SubtleCrypto.decrypt(), SubtleCrypto.wrapKey(), or SubtleCrypto.unwrapKey(), when using the RSA_OAEP algorithm.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RsaOaepParams',
},
{
	title: 'RsaPssParams',
	text: 'The RsaPssParams dictionary of the Web Crypto API represents the object that should be passed as the algorithm parameter into SubtleCrypto.sign() or SubtleCrypto.verify(), when using the RSA-PSS algorithm.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RsaPssParams',
},
{
	title: 'RTCCertificate',
	text: 'The interface of the WebRTC API provides an object represents a certificate that an RTCPeerConnection uses to authenticate.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCCertificate',
},
{
	title: 'RTCDataChannel',
	text: 'The RTCDataChannel interface represents a network channel which can be used for bidirectional peer-to-peer transfers of arbitrary data. Every data channel is associated with an RTCPeerConnection, and each peer connection can have up to a theoretical maximum of 65,534 data channels (the actual limit may vary from browser to browser).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel',
},
{
	title: 'RTCDataChannelEvent',
	text: '\n  The RTCDataChannelEvent interface\n  represents an event related to a specific RTCDataChannel.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannelEvent',
},
{
	title: 'RTCDtlsTransport',
	text: 'The RTCDtlsTransport interface provides access to information about the Datagram Transport Layer Security (DTLS) transport over which a RTCPeerConnection s RTP and RTCP packets are sent and received by its RTCRtpSender and RTCRtpReceiver objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCDtlsTransport',
},
{
	title: 'RTCDTMFSender',
	text: 'The RTCDTMFSender interface provides a mechanism for transmitting DTMF codes on a WebRTC RTCPeerConnection. You gain access to the connection s RTCDTMFSender through the RTCRtpSender.dtmf property on the audio track you wish to send DTMF with.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFSender',
},
{
	title: 'RTCDTMFToneChangeEvent',
	text: 'The RTCDTMFToneChangeEvent interface represents events sent to indicate that DTMF tones have started or finished playing. This interface is used by the tonechange event.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFToneChangeEvent',
},
{
	title: 'RTCError',
	text: 'The RTCError interface describes an error which has occurred while handling WebRTC operations. It s based upon the standard DOMException interface that describes general DOM errors.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCError',
},
{
	title: 'RTCErrorEvent',
	text: 'The WebRTC API s RTCErrorEvent interface represents an error sent to a WebRTC object. It s based on the standard Event interface, but adds RTC-specific information describing the error, as shown below.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCErrorEvent',
},
{
	title: 'RTCIceCandidate',
	text: 'The RTCIceCandidate interface—part of the WebRTC API—represents a candidate Interactive Connectivity Establishment (ICE) configuration which may be used to establish an RTCPeerConnection.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate',
},
{
	title: 'RTCIceCandidatePair',
	text: 'The RTCIceCandidatePair dictionary describes a pair of ICE candidates which together comprise a description of a viable connection between two WebRTC endpoints. It is used as the return value from RTCIceTransport.getSelectedCandidatePair() to identify the currently-selected candidate pair identified by the ICE agent.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePair',
},
{
	title: 'RTCIceCandidatePairStats',
	text: 'The WebRTC RTCIceCandidatePairStats dictionary reports statistics which provide insight into the quality and performance of an RTCPeerConnection while connected and configured as described by the specified pair of ICE candidates.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats',
},
{
	title: 'RTCIceCandidateStats',
	text: 'The WebRTC API s RTCIceCandidateStats dictionary provides statistics related to an RTCIceCandidate.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats',
},
{
	title: 'RTCIceParameters',
	text: 'The RTCIceParameters dictionary specifies the username fragment and password assigned to an ICE session.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCIceParameters',
},
{
	title: 'RTCIceServer',
	text: 'The RTCIceServer dictionary defines how to connect to a single ICE server (such as a STUN or TURN server). Objects of this type are provided in the configuration of an RTCPeerConnection, in the iceServers array.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer',
},
{
	title: 'RTCIceTransport',
	text: '\n  The RTCIceTransport interface provides access to information about the ICE transport layer over which the data is being sent and received.\n  This is particularly useful if you need to access state information about the connection.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport',
},
{
	title: 'RTCIdentityAssertion',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCIdentityAssertion',
},
{
	title: 'RTCInboundRtpStreamStats',
	text: 'The WebRTC API s RTCInboundRtpStreamStats dictionary, based upon RTCReceivedRtpStreamStats and RTCStats, contains statistics related to the receiving end of an RTP stream on the local end of the RTCPeerConnection.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats',
},
{
	title: 'RTCOutboundRtpStreamStats',
	text: 'The RTCOutboundRtpStreamStats dictionary is the RTCStats-based object which provides metrics and statistics related to an outbound RTP stream being sent by an RTCRtpSender.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats',
},
{
	title: 'RTCPeerConnection',
	text: 'The RTCPeerConnection interface represents a WebRTC connection between the local computer and a remote peer. It provides methods to connect to a remote peer, maintain and monitor the connection, and close the connection once it s no longer needed.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection',
},
{
	title: 'RTCPeerConnectionIceErrorEvent',
	text: 'The RTCPeerConnectionIceErrorEvent interface—based upon the Event interface—provides details pertaining to an ICE error announced by sending an icecandidateerror event to the RTCPeerConnection object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnectionIceErrorEvent',
},
{
	title: 'RTCPeerConnectionIceEvent',
	text: 'The RTCPeerConnectionIceEvent interface represents events that occur in relation to ICE candidates with the target, usually an RTCPeerConnection.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnectionIceEvent',
},
{
	title: 'RTCRemoteOutboundRtpStreamStats',
	text: 'The WebRTC statistics model s RTCRemoteOutboundRtpStreamStats dictionary extends the underlying RTCSentRtpStreamStats dictionary with properties measuring metrics specific to outgoing RTP streams.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRemoteOutboundRtpStreamStats',
},
{
	title: 'RTCRtcpParameters',
	text: 'The RTCRtcpParameters dictionary provides parameters of an RTCP connection. It s used as the value of the rtcp property of the parameters of an RTCRtpSender or RTCRtpReceiver.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtcpParameters',
},
{
	title: 'RTCRtpCapabilities',
	text: 'The RTCRtpCapabilities dictionary is a data type used to describe the capabilities of an RTCRtpSender or RTCRtpReceiver in response to a call to the RTCRtpSender.getCapabilities() or RTCRtpReceiver.getCapabilities() static functions, both of which return an array of RTCRtpCapabilities objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpCapabilities',
},
{
	title: 'RTCRtpCodecCapability',
	text: 'The WebRTC API s RTCRtpCodecCapability dictionary provides information describing the capabilities of a single media codec.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpCodecCapability',
},
{
	title: 'RTCRtpCodecParameters',
	text: 'The RTCRtpCodecParameters dictionary, part of the WebRTC API, is used to describe the configuration parameters for a single media codec.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpCodecParameters',
},
{
	title: 'RTCRtpContributingSource',
	text: 'The RTCRtpContributingSource dictionary of the WebRTC API is used by getContributingSources() to provide information about a given contributing source (CSRC), including the most recent time a packet that the source contributed was played out.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpContributingSource',
},
{
	title: 'RTCRtpEncodingParameters',
	text: 'An instance of the WebRTC API s RTCRtpEncodingParameters dictionary describes a single configuration of a codec for an RTCRtpSender.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpEncodingParameters',
},
{
	title: 'RTCRtpParameters',
	text: 'The RTCRtpParameters dictionary is the basic object describing the parameters of an RTP transport. It is extended separately for senders and receivers in the form of the RTCRtpSendParameters and RTCRtpReceiveParameters dictionaries.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpParameters',
},
{
	title: 'RTCRtpReceiveParameters',
	text: 'The RTCRtpReceiveParameters dictionary, based upon the RTCRtpParameters dictionary, is returned by the RTCRtpReceiver method getParameters(). It describes the parameters being used by the receiver s RTP connection to the remote peer.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiveParameters',
},
{
	title: 'RTCRtpReceiver',
	text: 'The RTCRtpReceiver interface of the WebRTC API manages the reception and decoding of data for a MediaStreamTrack on an RTCPeerConnection.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver',
},
{
	title: 'RTCRtpSender',
	text: 'The RTCRtpSender interface provides the ability to control and obtain details about how a particular MediaStreamTrack is encoded and sent to a remote peer.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender',
},
{
	title: 'RTCRtpSendParameters',
	text: 'The WebRTC API s RTCRtpSendParameters dictionary is used to specify the parameters for an RTCRtpSender when calling its setParameters() method.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSendParameters',
},
{
	title: 'RTCRtpStreamStats',
	text: 'The RTCRtpStreamStats dictionary is returned by the RTCPeerConnection.getStats(), RTCRtpSender.getStats(), and RTCRtpReceiver.getStats() methods to provide detailed statistics about WebRTC connectivity.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats',
},
{
	title: 'RTCRtpTransceiver',
	text: 'The WebRTC interface RTCRtpTransceiver describes a permanent pairing of an RTCRtpSender and an RTCRtpReceiver, along with some shared state.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver',
},
{
	title: 'RTCSctpTransport',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCSctpTransport',
},
{
	title: 'RTCSessionDescription',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription',
},
{
	title: 'RTCStats',
	text: 'The RTCStats dictionary is the basic statistics object used by WebRTC s statistics monitoring model, providing the properties required of all statistics data objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCStats',
},
{
	title: 'RTCStatsReport',
	text: 'The RTCStatsReport interface provides a statistics report obtained by calling one of the RTCPeerConnection.getStats(), RTCRtpReceiver.getStats(), and RTCRtpSender.getStats() methods.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCStatsReport',
},
{
	title: 'RTCTrackEvent',
	text: 'The WebRTC API interface RTCTrackEvent represents the track event, which is sent when a new MediaStreamTrack is added to an RTCRtpReceiver which is part of the RTCPeerConnection.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent',
},
{
	title: 'Sanitizer',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Sanitizer',
},
{
	title: 'Scheduler',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Scheduler',
},
{
	title: 'Screen',
	text: 'The Screen interface represents a screen, usually the one on which the current window is being rendered, and is obtained using window.screen.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen',
},
{
	title: 'ScreenOrientation',
	text: 'The ScreenOrientation interface of the Screen Orientation API provides information about the current orientation of the document.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation',
},
{
	title: 'ScriptProcessorNode',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode',
},
{
	title: 'SecurityPolicyViolationEvent',
	text: 'The SecurityPolicyViolationEvent interface inherits from Event, and represents the event object of an event sent on a document or worker when its content security policy is violated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent',
},
{
	title: 'Selection',
	text: 'A Selection object represents the range of text selected by the user or the current position of the caret. To obtain a Selection object for examination or manipulation, call window.getSelection().',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Selection',
},
{
	title: 'self.crypto',
	text: 'The global read-only crypto property returns the Crypto object associated to the global object. This object allows web pages access to certain cryptographic related services.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/crypto_property',
},
{
	title: 'self.performance',
	text: 'The global performance property returns a Performance object, which can be used to gather performance information about the current document. It serves as the point of exposure for the Performance Timeline API, the High Resolution Time API, the Navigation Timing API, the User Timing API, and the Resource Timing API.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/performance_property',
},
{
	title: 'Sensor',
	text: 'The Sensor interface of the Sensor APIs is the base class for all the other sensor interfaces. This interface cannot be used directly. Instead it provides properties, event handlers, and methods accessed by interfaces that inherit from it.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Sensor',
},
{
	title: 'SensorErrorEvent',
	text: 'The SensorErrorEvent interface of the Sensor APIs provides information about errors thrown by a Sensor or derived interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SensorErrorEvent',
},
{
	title: 'Serial',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Serial',
},
{
	title: 'SerialPort',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SerialPort',
},
{
	title: 'ServiceWorker',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker',
},
{
	title: 'ServiceWorkerContainer',
	text: 'The ServiceWorkerContainer interface of the Service Worker API provides an object representing the service worker as an overall unit in the network ecosystem, including facilities to register, unregister and update service workers, and access the state of service workers and their registrations.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer',
},
{
	title: 'ServiceWorkerGlobalScope',
	text: 'The ServiceWorkerGlobalScope interface of the Service Worker API represents the global execution context of a service worker.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope',
},
{
	title: 'ServiceWorkerRegistration',
	text: 'The ServiceWorkerRegistration interface of the Service Worker API represents the service worker registration. You register a service worker to control one or more pages that share the same origin.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration',
},
{
	title: 'setInterval()',
	text: '\n  The setInterval() method,\n  offered on the Window and Worker interfaces, repeatedly\n  calls a function or executes a code snippet, with a fixed time delay between each\n  call.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/setInterval',
},
{
	title: 'setTimeout()',
	text: '\n  The global setTimeout() method sets a timer which executes a function or specified\n  piece of code once the timer expires.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/setTimeout',
},
{
	title: 'ShadowRoot',
	text: 'The ShadowRoot interface of the Shadow DOM API is the root node of a DOM subtree that is rendered separately from a document s main DOM tree.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot',
},
{
	title: 'SharedWorker',
	text: 'The SharedWorker interface represents a specific kind of worker that can be accessed from several browsing contexts, such as several windows, iframes or even workers. They implement an interface different than dedicated workers and have a different global scope, SharedWorkerGlobalScope.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker',
},
{
	title: 'SharedWorkerGlobalScope',
	text: 'The SharedWorkerGlobalScope object (the SharedWorker global scope) is accessible through the self keyword. Some additional global functions, namespaces objects, and constructors, not typically associated with the worker global scope, but available on it, are listed in the JavaScript Reference. See the complete list of functions available to workers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope',
},
{
	title: 'SourceBuffer',
	text: 'The SourceBuffer interface represents a chunk of media to be passed into an HTMLMediaElement and played, via a MediaSource object. This can be made up of one or several media segments.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer',
},
{
	title: 'SourceBufferList',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SourceBufferList',
},
{
	title: 'SpeechGrammar',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammar',
},
{
	title: 'SpeechGrammarList',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammarList',
},
{
	title: 'SpeechRecognition',
	text: 'The SpeechRecognition interface of the Web Speech API is the controller interface for the recognition service; this also handles the SpeechRecognitionEvent sent from the recognition service.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition',
},
{
	title: 'SpeechRecognitionAlternative',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionAlternative',
},
{
	title: 'SpeechRecognitionErrorEvent',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionErrorEvent',
},
{
	title: 'SpeechRecognitionEvent',
	text: 'The SpeechRecognitionEvent interface of the Web Speech API represents the event object for the result and nomatch events, and contains all the data associated with an interim or final speech recognition result.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent',
},
{
	title: 'SpeechRecognitionResult',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult',
},
{
	title: 'SpeechRecognitionResultList',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResultList',
},
{
	title: 'SpeechSynthesis',
	text: 'The SpeechSynthesis interface of the Web Speech API is the controller interface for the speech service; this can be used to retrieve information about the synthesis voices available on the device, start and pause speech, and other commands besides.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis',
},
{
	title: 'SpeechSynthesisErrorEvent',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisErrorEvent',
},
{
	title: 'SpeechSynthesisEvent',
	text: 'The SpeechSynthesisEvent interface of the Web Speech API contains information about the current state of SpeechSynthesisUtterance objects that have been processed in the speech service.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisEvent',
},
{
	title: 'SpeechSynthesisUtterance',
	text: '\n  The SpeechSynthesisUtterance interface of the Web Speech API represents a speech request.\n  It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance',
},
{
	title: 'SpeechSynthesisVoice',
	text: '\n  The SpeechSynthesisVoice interface of the Web Speech API represents a voice that the system supports.\n  Every SpeechSynthesisVoice has its own relative speech service including information about language, name and URI.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice',
},
{
	title: 'StaticRange',
	text: 'The DOM StaticRange interface extends AbstractRange to provide a method to specify a range of content in the DOM whose contents don t update to reflect changes which occur within the DOM tree.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/StaticRange',
},
{
	title: 'StereoPannerNode',
	text: 'The StereoPannerNode interface of the Web Audio API represents a simple stereo panner node that can be used to pan an audio stream left or right. It is an AudioNode audio-processing module that positions an incoming audio stream in a stereo image using a low-cost equal-power panning algorithm.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode',
},
{
	title: 'Storage',
	text: 'The Storage interface of the Web Storage API provides access to a particular domain s session or local storage. It allows, for example, the addition, modification, or deletion of stored data items.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage',
},
{
	title: 'StorageEvent',
	text: '\n  The StorageEvent interface is implemented by the storage event, which is\n  sent to a window\n  when a storage area the window has access to is changed within the context of another document.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent',
},
{
	title: 'StorageManager',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/StorageManager',
},
{
	title: 'structuredClone()',
	text: 'The global structuredClone() method creates a deep clone of a given value using the structured clone algorithm.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/structuredClone',
},
{
	title: 'StylePropertyMap',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap',
},
{
	title: 'StylePropertyMapReadOnly',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly',
},
{
	title: 'StyleSheet',
	text: 'An object implementing the StyleSheet interface represents a single style sheet. CSS style sheets will further implement the more specialized CSSStyleSheet interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet',
},
{
	title: 'StyleSheetList',
	text: 'The StyleSheetList interface represents a list of CSSStyleSheet objects. An instance of this object can be returned by Document.styleSheets.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/StyleSheetList',
},
{
	title: 'SubmitEvent',
	text: 'The SubmitEvent interface defines the object used to represent an HTML form s submit event. This event is fired at the <form> when the form s submit action is invoked.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SubmitEvent',
},
{
	title: 'SubtleCrypto',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto',
},
{
	title: 'SVGAElement',
	text: 'The SVGAElement interface provides access to the properties of an <a> element, as well as methods to manipulate them.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAElement',
},
{
	title: 'SVGAltGlyphDefElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAltGlyphDefElement',
},
{
	title: 'SVGAltGlyphElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAltGlyphElement',
},
{
	title: 'SVGAltGlyphItemElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAltGlyphItemElement',
},
{
	title: 'SVGAngle',
	text: 'The SVGAngle interface is used to represent a value that can be an <angle> or <number> value. An SVGAngle reflected through the animVal attribute is always read only.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAngle',
},
{
	title: 'SVGAnimateColorElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimateColorElement',
},
{
	title: 'SVGAnimatedAngle',
	text: 'The SVGAnimatedAngle interface is used for attributes of basic type <angle> which can be animated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedAngle',
},
{
	title: 'SVGAnimatedBoolean',
	text: 'The SVGAnimatedBoolean interface is used for attributes of type boolean which can be animated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedBoolean',
},
{
	title: 'SVGAnimatedEnumeration',
	text: 'The SVGAnimatedEnumeration interface is used for attributes whose value must be a constant from a particular enumeration and which can be animated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedEnumeration',
},
{
	title: 'SVGAnimatedInteger',
	text: 'The SVGAnimatedInteger interface is used for attributes of basic type <integer> which can be animated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedInteger',
},
{
	title: 'SVGAnimatedLength',
	text: 'The SVGAnimatedLength interface represents attributes of type <length> which can be animated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedLength',
},
{
	title: 'SVGAnimatedLengthList',
	text: 'The SVGAnimatedLengthList interface is used for attributes of type SVGLengthList which can be animated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedLengthList',
},
{
	title: 'SVGAnimatedNumber',
	text: 'The SVGAnimatedNumber interface is used for attributes of basic type <Number> which can be animated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedNumber',
},
{
	title: 'SVGAnimatedNumberList',
	text: 'The SVGAnimatedNumber interface is used for attributes which take a list of numbers and which can be animated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedNumberList',
},
{
	title: 'SVGAnimatedPreserveAspectRatio',
	text: 'The SVGAnimatedPreserveAspectRatio interface is used for attributes of type SVGPreserveAspectRatio which can be animated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedPreserveAspectRatio',
},
{
	title: 'SVGAnimatedRect',
	text: 'The SVGAnimatedRect interface is used for attributes of basic SVGRect which can be animated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedRect',
},
{
	title: 'SVGAnimatedString',
	text: 'The SVGAnimatedString interface represents string attributes which can be animated from each SVG declaration. You need to create SVG attribute before doing anything else, everything should be declared inside this.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedString',
},
{
	title: 'SVGAnimatedTransformList',
	text: 'The SVGAnimatedTransformList interface is used for attributes which take a list of numbers and which can be animated.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedTransformList',
},
{
	title: 'SVGAnimateElement',
	text: 'The SVGAnimateElement interface corresponds to the <animate> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimateElement',
},
{
	title: 'SVGAnimateMotionElement',
	text: 'The SVGAnimateMotionElement interface corresponds to the <animateMotion> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimateMotionElement',
},
{
	title: 'SVGAnimateTransformElement',
	text: 'The SVGAnimateTransformElement interface corresponds to the <animateTransform> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimateTransformElement',
},
{
	title: 'SVGAnimationElement',
	text: 'The SVGAnimationElement interface is the base interface for all of the animation element interfaces: SVGAnimateElement, SVGSetElement, SVGAnimateColorElement, SVGAnimateMotionElement and SVGAnimateTransformElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimationElement',
},
{
	title: 'SVGCircleElement',
	text: 'The SVGCircleElement interface is an interface for the <circle> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGCircleElement',
},
{
	title: 'SVGClipPathElement',
	text: 'The SVGClipPathElement interface provides access to the properties of <clipPath> elements, as well as methods to manipulate them.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGClipPathElement',
},
{
	title: 'SVGComponentTransferFunctionElement',
	text: 'The SVGComponentTransferFunctionElement interface defines a base interface used by the component transfer function interfaces.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGComponentTransferFunctionElement',
},
{
	title: 'SVGCursorElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGCursorElement',
},
{
	title: 'SVGDefsElement',
	text: 'The SVGDefsElement interface corresponds to the <defs> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGDefsElement',
},
{
	title: 'SVGDescElement',
	text: 'The SVGDescElement interface corresponds to the <desc> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGDescElement',
},
{
	title: 'SVGElement',
	text: 'All of the SVG DOM interfaces that correspond directly to elements in the SVG language derive from the SVGElement interface.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGElement',
},
{
	title: 'SVGEllipseElement',
	text: 'The SVGEllipseElement interface provides access to the properties of <ellipse> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGEllipseElement',
},
{
	title: 'SVGEvent',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGEvent',
},
{
	title: 'SVGFEBlendElement',
	text: 'The SVGFEBlendElement interface corresponds to the <feBlend> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEBlendElement',
},
{
	title: 'SVGFEColorMatrixElement',
	text: 'The SVGFEColorMatrixElement interface corresponds to the <feColorMatrix> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEColorMatrixElement',
},
{
	title: 'SVGFEComponentTransferElement',
	text: 'The SVGFEComponentTransferElement interface corresponds to the <feComponentTransfer> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEComponentTransferElement',
},
{
	title: 'SVGFECompositeElement',
	text: 'The SVGFECompositeElement interface corresponds to the <feComposite> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFECompositeElement',
},
{
	title: 'SVGFEConvolveMatrixElement',
	text: 'The SVGFEConvolveMatrixElement interface corresponds to the <feConvolveMatrix> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEConvolveMatrixElement',
},
{
	title: 'SVGFEDiffuseLightingElement',
	text: 'The SVGFEDiffuseLightingElement interface corresponds to the <feDiffuseLighting> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEDiffuseLightingElement',
},
{
	title: 'SVGFEDisplacementMapElement',
	text: 'The SVGFEDisplacementMapElement interface corresponds to the <feDisplacementMap> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEDisplacementMapElement',
},
{
	title: 'SVGFEDistantLightElement',
	text: 'The SVGFEDistantLightElement interface corresponds to the <feDistantLight> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEDistantLightElement',
},
{
	title: 'SVGFEDropShadowElement',
	text: 'The SVGFEDropShadowElement interface corresponds to the <feDropShadow> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEDropShadowElement',
},
{
	title: 'SVGFEFloodElement',
	text: 'The SVGFEFloodElement interface corresponds to the <feFlood> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEFloodElement',
},
{
	title: 'SVGFEFuncAElement',
	text: 'The SVGFEFuncAElement interface corresponds to the <feFuncA> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEFuncAElement',
},
{
	title: 'SVGFEFuncBElement',
	text: 'The SVGFEFuncBElement interface corresponds to the <feFuncB> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEFuncBElement',
},
{
	title: 'SVGFEFuncGElement',
	text: 'The SVGFEFuncGElement interface corresponds to the <feFuncG> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEFuncGElement',
},
{
	title: 'SVGFEFuncRElement',
	text: 'The SVGFEFuncRElement interface corresponds to the <feFuncR> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEFuncRElement',
},
{
	title: 'SVGFEGaussianBlurElement',
	text: 'The SVGFEGaussianBlurElement interface corresponds to the <feGaussianBlur> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEGaussianBlurElement',
},
{
	title: 'SVGFEImageElement',
	text: 'The SVGFEImageElement interface corresponds to the <feImage> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEImageElement',
},
{
	title: 'SVGFEMergeElement',
	text: 'The SVGFEMergeElement interface corresponds to the <feMerge> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEMergeElement',
},
{
	title: 'SVGFEMergeNodeElement',
	text: 'The SVGFEMergeNodeElement interface corresponds to the <feMergeNode> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEMergeNodeElement',
},
{
	title: 'SVGFEMorphologyElement',
	text: 'The SVGFEMorphologyElement interface corresponds to the <feMorphology> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEMorphologyElement',
},
{
	title: 'SVGFEOffsetElement',
	text: 'The SVGFEOffsetElement interface corresponds to the <feOffset> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEOffsetElement',
},
{
	title: 'SVGFEPointLightElement',
	text: 'The SVGFEPointLightElement interface corresponds to the <fePointLight> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFEPointLightElement',
},
{
	title: 'SVGFESpecularLightingElement',
	text: 'The SVGFESpecularLightingElement interface corresponds to the <feSpecularLighting> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFESpecularLightingElement',
},
{
	title: 'SVGFESpotLightElement',
	text: 'The SVGFESpotLightElement interface corresponds to the <feSpotLight> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFESpotLightElement',
},
{
	title: 'SVGFETileElement',
	text: 'The SVGFETileElement interface corresponds to the <feTile> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFETileElement',
},
{
	title: 'SVGFETurbulenceElement',
	text: 'The SVGFETurbulenceElement interface corresponds to the <feTurbulence> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFETurbulenceElement',
},
{
	title: 'SVGFilterElement',
	text: 'The SVGFilterElement interface provides access to the properties of <filter> elements, as well as methods to manipulate them.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFilterElement',
},
{
	title: 'SVGFontElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFontElement',
},
{
	title: 'SVGFontFaceElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFontFaceElement',
},
{
	title: 'SVGFontFaceFormatElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFontFaceFormatElement',
},
{
	title: 'SVGFontFaceNameElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFontFaceNameElement',
},
{
	title: 'SVGFontFaceSrcElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFontFaceSrcElement',
},
{
	title: 'SVGFontFaceUriElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGFontFaceUriElement',
},
{
	title: 'SVGForeignObjectElement',
	text: 'The SVGForeignObjectElement interface provides access to the properties of <foreignObject> elements, as well as methods to manipulate them.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGForeignObjectElement',
},
{
	title: 'SVGGElement',
	text: 'The SVGGElement interface corresponds to the <g> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGGElement',
},
{
	title: 'SVGGeometryElement',
	text: 'The SVGGeometryElement interface represents SVG elements whose rendering is defined by geometry with an equivalent path, and which can be filled and stroked. This includes paths and the basic shapes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement',
},
{
	title: 'SVGGlyphElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGGlyphElement',
},
{
	title: 'SVGGlyphRefElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGGlyphRefElement',
},
{
	title: 'SVGGradientElement',
	text: 'The SVGGradient interface is a base interface used by SVGLinearGradientElement and SVGRadialGradientElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGGradientElement',
},
{
	title: 'SVGGraphicsElement',
	text: 'The SVGGraphicsElement interface represents SVG elements whose primary purpose is to directly render graphics into a group.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGGraphicsElement',
},
{
	title: 'SVGHKernElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGHKernElement',
},
{
	title: 'SVGImageElement',
	text: 'The SVGImageElement interface corresponds to the <image> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement',
},
{
	title: 'SVGLength',
	text: 'The SVGLength interface correspond to the <length> basic data type.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGLength',
},
{
	title: 'SVGLengthList',
	text: 'The SVGLengthList defines a list of SVGLength objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGLengthList',
},
{
	title: 'SVGLinearGradientElement',
	text: 'The SVGLinearGradientElement interface corresponds to the <linearGradient> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGLinearGradientElement',
},
{
	title: 'SVGLineElement',
	text: 'The SVGLineElement interface provides access to the properties of <line> elements, as well as methods to manipulate them.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGLineElement',
},
{
	title: 'SVGMarkerElement',
	text: 'The SVGMarkerElement interface provides access to the properties of <marker> elements, as well as methods to manipulate them. The <marker> element defines the graphics used for drawing marks on a shape.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGMarkerElement',
},
{
	title: 'SVGMaskElement',
	text: 'The SVGMaskElement interface provides access to the properties of <mask> elements, as well as methods to manipulate them.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGMaskElement',
},
{
	title: 'SVGMatrix',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix',
},
{
	title: 'SVGMetadataElement',
	text: 'The SVGMetadataElement interface corresponds to the <metadata> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGMetadataElement',
},
{
	title: 'SVGMissingGlyphElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGMissingGlyphElement',
},
{
	title: 'SVGMPathElement',
	text: 'The SVGMPathElement interface corresponds to the <mpath> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGMPathElement',
},
{
	title: 'SVGNumber',
	text: 'The SVGNumber interface corresponds to the <number> basic data type.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGNumber',
},
{
	title: 'SVGNumberList',
	text: 'The SVGNumberList defines a list of SVGNumber objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGNumberList',
},
{
	title: 'SVGPathElement',
	text: 'The SVGPathElement interface corresponds to the <path> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement',
},
{
	title: 'SVGPatternElement',
	text: 'The SVGPatternElement interface corresponds to the <pattern> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGPatternElement',
},
{
	title: 'SVGPoint',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGPoint',
},
{
	title: 'SVGPointList',
	text: 'The SVGPointList interface represents a list of SVGPoint objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGPointList',
},
{
	title: 'SVGPolygonElement',
	text: 'The SVGPolygonElement interface provides access to the properties of <polygon> elements, as well as methods to manipulate them.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGPolygonElement',
},
{
	title: 'SVGPolylineElement',
	text: 'The SVGPolylineElement interface provides access to the properties of <polyline> elements, as well as methods to manipulate them.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGPolylineElement',
},
{
	title: 'SVGPreserveAspectRatio',
	text: 'The SVGPreserveAspectRatio interface corresponds to the preserveAspectRatio attribute, which is available for some of SVG s elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGPreserveAspectRatio',
},
{
	title: 'SVGRadialGradientElement',
	text: 'The SVGRadialGradientElement interface corresponds to the <RadialGradient> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGRadialGradientElement',
},
{
	title: 'SVGRect',
	text: 'The SVGRect represents a rectangle. Rectangles consist of an x and y coordinate pair identifying a minimum x value, a minimum y value, and a width and height, which are constrained to be non-negative.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGRect',
},
{
	title: 'SVGRectElement',
	text: 'The SVGRectElement interface provides access to the properties of <rect> elements, as well as methods to manipulate them.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGRectElement',
},
{
	title: 'SVGRenderingIntent',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGRenderingIntent',
},
{
	title: 'SVGScriptElement',
	text: 'The SVGScriptElement interface corresponds to the SVG <script> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGScriptElement',
},
{
	title: 'SVGSetElement',
	text: 'The SVGSetElement interface corresponds to the <set> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGSetElement',
},
{
	title: 'SVGStopElement',
	text: 'The SVGStopElement interface corresponds to the <stop> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGStopElement',
},
{
	title: 'SVGStringList',
	text: 'The SVGStringList defines a list of strings.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGStringList',
},
{
	title: 'SVGStyleElement',
	text: 'The SVGStyleElement interface corresponds to the SVG <style> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGStyleElement',
},
{
	title: 'SVGSVGElement',
	text: 'The SVGSVGElement interface provides access to the properties of <svg> elements, as well as methods to manipulate them. This interface contains also various miscellaneous commonly-used utility methods, such as matrix operations and the ability to control the time of redraw on visual rendering devices.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGSVGElement',
},
{
	title: 'SVGSwitchElement',
	text: 'The SVGSwitchElement interface corresponds to the <switch> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGSwitchElement',
},
{
	title: 'SVGSymbolElement',
	text: 'The SVGSymbolElement interface corresponds to the <symbol> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGSymbolElement',
},
{
	title: 'SVGTextContentElement',
	text: 'The SVGTextContentElement interface is implemented by elements that support rendering child text content. It is inherited by various text-related interfaces, such as SVGTextElement, SVGTSpanElement, SVGTRefElement, SVGAltGlyphElement and SVGTextPathElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTextContentElement',
},
{
	title: 'SVGTextElement',
	text: 'The SVGTextElement interface corresponds to the <text> elements.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTextElement',
},
{
	title: 'SVGTextPathElement',
	text: 'The SVGTextPathElement interface corresponds to the <textPath> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTextPathElement',
},
{
	title: 'SVGTextPositioningElement',
	text: 'The SVGTextPositioningElement interface is implemented by elements that support attributes that position individual text glyphs. It is inherited by SVGTextElement, SVGTSpanElement, SVGTRefElement and SVGAltGlyphElement.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTextPositioningElement',
},
{
	title: 'SVGTitleElement',
	text: 'The SVGTitleElement interface corresponds to the <title> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTitleElement',
},
{
	title: 'SVGTransform',
	text: 'SVGTransform is the interface for one of the component transformations within an SVGTransformList; thus, an SVGTransform object corresponds to a single component (e.g., scale(…) or matrix(…)) within a transform attribute.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTransform',
},
{
	title: 'SVGTransformList',
	text: 'The SVGTransformList defines a list of SVGTransform objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTransformList',
},
{
	title: 'SVGTRefElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTRefElement',
},
{
	title: 'SVGTSpanElement',
	text: 'The SVGTSpanElement interface represents a <tspan> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGTSpanElement',
},
{
	title: 'SVGUnitTypes',
	text: 'The SVGUnitTypes interface defines a commonly used set of constants used for reflecting gradientUnits, patternContentUnits and other similar attributes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGUnitTypes',
},
{
	title: 'SVGUseElement',
	text: 'The SVGUseElement interface corresponds to the <use> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGUseElement',
},
{
	title: 'SVGViewElement',
	text: 'The SVGViewElement interface provides access to the properties of <view> elements, as well as methods to manipulate them.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGViewElement',
},
{
	title: 'SVGVKernElement',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SVGVKernElement',
},
{
	title: 'SyncEvent',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent',
},
{
	title: 'SyncManager',
	text: 'The SyncManager interface of the ServiceWorker API provides an interface for registering and listing sync registrations.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/SyncManager',
},
{
	title: 'TaskAttributionTiming',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TaskAttributionTiming',
},
{
	title: 'TaskController',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TaskController',
},
{
	title: 'TaskPriorityChangeEvent',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TaskPriorityChangeEvent',
},
{
	title: 'TaskSignal',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TaskSignal',
},
{
	title: 'Text',
	text: 'The Text interface represents a text node in a DOM tree.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Text',
},
{
	title: 'TextDecoder',
	text: 'The TextDecoder interface represents a decoder for a specific text encoding, such as UTF-8, ISO-8859-2, KOI8-R, GBK, etc. A decoder takes a stream of bytes as input and emits a stream of code points.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder',
},
{
	title: 'TextDecoderStream',
	text: 'The TextDecoderStream interface of the Encoding API converts a stream of strings into bytes in the UTF-8 encoding. It is the streaming equivalent of TextDecoder.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextDecoderStream',
},
{
	title: 'TextEncoder',
	text: 'The TextEncoder interface takes a stream of code points as input and emits a stream of UTF-8 bytes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder',
},
{
	title: 'TextEncoderStream',
	text: 'The TextEncoderStream interface of the Encoding API converts a stream of strings into bytes in the UTF-8 encoding. It is the streaming equivalent of TextEncoder.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextEncoderStream',
},
{
	title: 'TextMetrics',
	text: 'The TextMetrics interface represents the dimensions of a piece of text in the canvas; a TextMetrics instance can be retrieved using the CanvasRenderingContext2D.measureText() method.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics',
},
{
	title: 'TextTrack',
	text: 'The TextTrack interface—part of the API for handling WebVTT (text tracks on media presentations)—describes and controls the text track associated with a particular <track> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextTrack',
},
{
	title: 'TextTrackCue',
	text: 'TextTrackCue is an abstract class which is used as the basis for the various derived cue types, such as VTTCue; you will instead work with those derived types. These cues represent strings of text presented for some duration of time during the performance of a TextTrack. The cue includes the start time (the time at which the text will be displayed) and the end time (the time at which it will be removed from the display), as well as other information.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue',
},
{
	title: 'TextTrackCueList',
	text: 'The TextTrackCueList array-like object represents a dynamically updating list of TextTrackCue objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCueList',
},
{
	title: 'TextTrackList',
	text: 'The TextTrackList interface is used to represent a list of the text tracks defined by the <track> element, with each track represented by a separate textTrack object in the list.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList',
},
{
	title: 'TimeEvent',
	text: 'The TimeEvent interface, a part of SVG SMIL animation, provides specific contextual information associated with Time events.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TimeEvent',
},
{
	title: 'TimeRanges',
	text: 'When loading a media resource for use by an <audio> or <video> element, the TimeRanges interface is used for representing the time ranges of the media resource that have been buffered, the time ranges that have been played, and the time ranges that are seekable.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges',
},
{
	title: 'Touch',
	text: 'The Touch interface represents a single contact point on a touch-sensitive device. The contact point is commonly a finger or stylus and the device may be a touchscreen or trackpad.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Touch',
},
{
	title: 'TouchEvent',
	text: 'The TouchEvent interface represents an UIEvent which is sent when the state of contacts with a touch-sensitive surface changes. This surface can be a touch screen or trackpad, for example. The event can describe one or more points of contact with the screen and includes support for detecting movement, addition and removal of contact points, and so forth.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent',
},
{
	title: 'TouchList',
	text: 'The TouchList interface represents a list of contact points on a touch surface. For example, if the user has three fingers on the touch surface (such as a screen or trackpad), the corresponding TouchList object would have one Touch object for each finger, for a total of three entries.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TouchList',
},
{
	title: 'TrackEvent',
	text: 'The TrackEvent interface, which is part of the HTML DOM specification, is used for events which represent changes to a set of available tracks on an HTML media element; these events are addtrack and removetrack.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TrackEvent',
},
{
	title: 'TransformStream',
	text: 'The TransformStream interface of the Streams API represents a set of transformable data.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TransformStream',
},
{
	title: 'TransformStreamDefaultController',
	text: 'The TransformStreamDefaultController interface of the Streams API provides methods to manipulate the associated ReadableStream and WritableStream.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TransformStreamDefaultController',
},
{
	title: 'TransitionEvent',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent',
},
{
	title: 'TreeWalker',
	text: 'The TreeWalker object represents the nodes of a document subtree and a position within them.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker',
},
{
	title: 'TrustedHTML',
	text: 'The TrustedHTML interface of the Trusted Types API represents a string that a developer can insert into an injection sink that will render it as HTML. These objects are created via TrustedTypePolicy.createHTML() and therefore have no constructor.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML',
},
{
	title: 'TrustedScript',
	text: 'The TrustedScript interface of the Trusted Types API represents a string with an uncompiled script body that a developer can insert into an injection sink that might execute the script. These objects are created via TrustedTypePolicy.createScript() and therefore have no constructor.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TrustedScript',
},
{
	title: 'TrustedScriptURL',
	text: 'The TrustedScriptURL interface of the Trusted Types API represents a string that a developer can insert into an injection sink that will parse it as a URL of an external script. These objects are created via TrustedTypePolicy.createScriptURL() and therefore have no constructor.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TrustedScriptURL',
},
{
	title: 'TrustedTypePolicy',
	text: 'The TrustedTypePolicy interface of the Trusted Types API defines a group of functions which create TrustedType objects.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy',
},
{
	title: 'TrustedTypePolicyFactory',
	text: 'The TrustedTypePolicyFactory interface of the Trusted Types API creates policies and allows the verification of Trusted Type objects against created policies.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory',
},
{
	title: 'UIEvent',
	text: 'The UIEvent interface represents simple user interface events.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/UIEvent',
},
{
	title: 'URL',
	text: 'The URL interface is used to parse, construct, normalize, and encode URLs. It works by providing properties which allow you to easily read and modify the components of a URL.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/URL',
},
{
	title: 'URLPattern',
	text: '\n  The URLPattern interface matches URLs or parts of URLs against a pattern.\n  The pattern can contain capturing groups that extract parts of the matched URL.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/URLPattern',
},
{
	title: 'URLSearchParams',
	text: 'The URLSearchParams interface defines utility methods to work with the query string of a URL.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams',
},
{
	title: 'USB',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USB',
},
{
	title: 'USBAlternateInterface',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBAlternateInterface',
},
{
	title: 'USBConfiguration',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBConfiguration',
},
{
	title: 'USBConnectionEvent',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBConnectionEvent',
},
{
	title: 'USBDevice',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBDevice',
},
{
	title: 'USBEndpoint',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBEndpoint',
},
{
	title: 'USBInterface',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBInterface',
},
{
	title: 'USBInTransferResult',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBInTransferResult',
},
{
	title: 'USBIsochronousInTransferPacket',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBIsochronousInTransferPacket',
},
{
	title: 'USBIsochronousInTransferResult',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBIsochronousInTransferResult',
},
{
	title: 'USBIsochronousOutTransferPacket',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBIsochronousOutTransferPacket',
},
{
	title: 'USBIsochronousOutTransferResult',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBIsochronousOutTransferResult',
},
{
	title: 'USBOutTransferResult',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/USBOutTransferResult',
},
{
	title: 'UserProximityEvent',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/UserProximityEvent',
},
{
	title: 'ValidityState',
	text: 'The ValidityState interface represents the validity states that an element can be in, with respect to constraint validation. Together, they help explain why an element s value fails to validate, if it s not valid.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/ValidityState',
},
{
	title: 'VideoColorSpace',
	text: 'The VideoColorSpace interface of the WebCodecs API represents the color space of a video.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VideoColorSpace',
},
{
	title: 'VideoDecoder',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VideoDecoder',
},
{
	title: 'VideoEncoder',
	text: '\n  ',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VideoEncoder',
},
{
	title: 'VideoFrame',
	text: 'The VideoFrame interface of the Web Codecs API represents a frame of a video.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VideoFrame',
},
{
	title: 'VideoPlaybackQuality',
	text: 'A VideoPlaybackQuality object is returned by the HTMLVideoElement.getVideoPlaybackQuality() method and contains metrics that can be used to determine the playback quality of a video.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality',
},
{
	title: 'VideoTrack',
	text: 'The VideoTrack interface represents a single video track from a <video> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack',
},
{
	title: 'VideoTrackList',
	text: 'The VideoTrackList interface is used to represent a list of the video tracks contained within a <video> element, with each track represented by a separate VideoTrack object in the list.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList',
},
{
	title: 'VisualViewport',
	text: 'The VisualViewport interface of the Visual Viewport API represents the visual viewport for a given window. For a page containing iframes, each iframe, as well as the containing page, will have a unique window object. Each window on a page will have a unique VisualViewport representing the properties associated with that window.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport',
},
{
	title: 'VRDisplay',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay',
},
{
	title: 'VRDisplayCapabilities',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayCapabilities',
},
{
	title: 'VRDisplayEvent',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayEvent',
},
{
	title: 'VREyeParameters',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters',
},
{
	title: 'VRFieldOfView',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VRFieldOfView',
},
{
	title: 'VRFrameData',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData',
},
{
	title: 'VRLayerInit',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VRLayerInit',
},
{
	title: 'VRPose',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VRPose',
},
{
	title: 'VRStageParameters',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VRStageParameters',
},
{
	title: 'VTTCue',
	text: 'The VTTCue interface—part of the API for handling WebVTT (text tracks on media presentations)—describes and controls the text track associated with a particular <track> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VTTCue',
},
{
	title: 'VTTRegion',
	text: 'The VTTRegion interface—part of the API for handling WebVTT (text tracks on media presentations)—describes a portion of the video to render a VTTCue onto.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/VTTRegion',
},
{
	title: 'WakeLock',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WakeLock',
},
{
	title: 'WakeLockSentinel',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WakeLockSentinel',
},
{
	title: 'WaveShaperNode',
	text: 'The WaveShaperNode interface represents a non-linear distorter.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode',
},
{
	title: 'WEBGL_color_buffer_float',
	text: 'The WEBGL_color_buffer_float extension is part of the WebGL API and adds the ability to render to 32-bit floating-point color buffers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_color_buffer_float',
},
{
	title: 'WEBGL_compressed_texture_astc',
	text: 'The WEBGL_compressed_texture_astc extension is part of the WebGL API and exposes Adaptive Scalable Texture Compression (ASTC) compressed texture formats to WebGL.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_astc',
},
{
	title: 'WEBGL_compressed_texture_etc',
	text: 'The WEBGL_compressed_texture_etc extension is part of the WebGL API and exposes 10 ETC/EAC compressed texture formats.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_etc',
},
{
	title: 'WEBGL_compressed_texture_etc1',
	text: 'The WEBGL_compressed_texture_etc1 extension is part of the WebGL API and exposes the ETC1 compressed texture format.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_etc1',
},
{
	title: 'WEBGL_compressed_texture_pvrtc',
	text: 'The WEBGL_compressed_texture_pvrtc extension is part of the WebGL API and exposes four PVRTC compressed texture formats.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_pvrtc',
},
{
	title: 'WEBGL_compressed_texture_s3tc',
	text: 'The WEBGL_compressed_texture_s3tc extension is part of the WebGL API and exposes four S3TC compressed texture formats.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_s3tc',
},
{
	title: 'WEBGL_compressed_texture_s3tc_srgb',
	text: 'The WEBGL_compressed_texture_s3tc_srgb extension is part of the WebGL API and exposes four S3TC compressed texture formats for the sRGB colorspace.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb',
},
{
	title: 'WEBGL_debug_renderer_info',
	text: 'The WEBGL_debug_renderer_info extension is part of the WebGL API and exposes two constants with information about the graphics driver for debugging purposes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_debug_renderer_info',
},
{
	title: 'WEBGL_debug_shaders',
	text: 'The WEBGL_debug_shaders extension is part of the WebGL API and exposes a method to debug shaders from privileged contexts.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_debug_shaders',
},
{
	title: 'WEBGL_depth_texture',
	text: 'The WEBGL_depth_texture extension is part of the WebGL API and defines 2D depth and depth-stencil textures.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_depth_texture',
},
{
	title: 'WEBGL_draw_buffers',
	text: 'The WEBGL_draw_buffers extension is part of the WebGL API and enables a fragment shader to write to several textures, which is useful for deferred shading, for example.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_draw_buffers',
},
{
	title: 'WEBGL_lose_context',
	text: 'The WEBGL_lose_context extension is part of the WebGL API and exposes functions to simulate losing and restoring a WebGLRenderingContext.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_lose_context',
},
{
	title: 'WEBGL_multi_draw',
	text: '\n  The WEBGL_multi_draw extension is part of the\n  WebGL API and allows to render more\n  than one primitive with a single function call. This can improve a WebGL application s performance\n  as it reduces binding costs in the renderer and speeds up GPU thread time with uniform data.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_multi_draw',
},
{
	title: 'WebGL2RenderingContext',
	text: 'The WebGL2RenderingContext interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML <canvas> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext',
},
{
	title: 'WebGLActiveInfo',
	text: 'The WebGLActiveInfo interface is part of the WebGL API and represents the information returned by calling the WebGLRenderingContext.getActiveAttrib() and WebGLRenderingContext.getActiveUniform() methods.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLActiveInfo',
},
{
	title: 'WebGLBuffer',
	text: 'The WebGLBuffer interface is part of the WebGL API and represents an opaque buffer object storing data such as vertices or colors.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer',
},
{
	title: 'WebGLContextEvent',
	text: 'The WebContextEvent interface is part of the WebGL API and is an interface for an event that is generated in response to a status change to the WebGL rendering context.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLContextEvent',
},
{
	title: 'WebGLFramebuffer',
	text: 'The WebGLFramebuffer interface is part of the WebGL API and represents a collection of buffers that serve as a rendering destination.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLFramebuffer',
},
{
	title: 'WebGLProgram',
	text: 'The WebGLProgram is part of the WebGL API and is a combination of two compiled WebGLShaders consisting of a vertex shader and a fragment shader (both written in GLSL).',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram',
},
{
	title: 'WebGLQuery',
	text: 'The WebGLQuery interface is part of the WebGL 2 API and provides ways to asynchronously query for information. By default, occlusion queries and primitive queries are available.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLQuery',
},
{
	title: 'WebGLRenderbuffer',
	text: 'The WebGLRenderbuffer interface is part of the WebGL API and represents a buffer that can contain an image, or that can be a source or target of a rendering operation.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderbuffer',
},
{
	title: 'WebGLRenderingContext',
	text: 'The WebGLRenderingContext interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML <canvas> element.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext',
},
{
	title: 'WebGLSampler',
	text: 'The WebGLSampler interface is part of the WebGL 2 API and stores sampling parameters for WebGLTexture access inside of a shader.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLSampler',
},
{
	title: 'WebGLShader',
	text: 'The WebGLShader is part of the WebGL API and can either be a vertex or a fragment shader. A WebGLProgram requires both types of shaders.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLShader',
},
{
	title: 'WebGLShaderPrecisionFormat',
	text: 'The WebGLShaderPrecisionFormat interface is part of the WebGL API and represents the information returned by calling the WebGLRenderingContext.getShaderPrecisionFormat() method.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat',
},
{
	title: 'WebGLSync',
	text: 'The WebGLSync interface is part of the WebGL 2 API and is used to synchronize activities between the GPU and the application.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLSync',
},
{
	title: 'WebGLTexture',
	text: 'The WebGLTexture interface is part of the WebGL API and represents an opaque texture object providing storage and state for texturing operations.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLTexture',
},
{
	title: 'WebGLTransformFeedback',
	text: 'The WebGLTransformFeedback interface is part of the WebGL 2 API and enables transform feedback, which is the process of capturing primitives generated by vertex processing. It allows to preserve the post-transform rendering state of an object and resubmit this data multiple times.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLTransformFeedback',
},
{
	title: 'WebGLUniformLocation',
	text: 'The WebGLUniformLocation interface is part of the WebGL API and represents the location of a uniform variable in a shader program.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLUniformLocation',
},
{
	title: 'WebGLVertexArrayObject',
	text: 'The WebGLVertexArrayObject interface is part of the WebGL 2 API, represents vertex array objects (VAOs) pointing to vertex array data, and provides names for different sets of vertex data.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGLVertexArrayObject',
},
{
	title: 'WebSocket',
	text: 'The WebSocket object provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket',
},
{
	title: 'WheelEvent',
	text: 'The WheelEvent interface represents events that occur due to the user moving a mouse wheel or similar input device.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent',
},
{
	title: 'Window',
	text: 'The Window interface represents a window containing a DOM document; the document property points to the DOM document loaded in that window.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window',
},
{
	title: 'WindowClient',
	text: 'The WindowClient interface of the ServiceWorker API represents the scope of a service worker client that is a document in a browsing context, controlled by an active worker. The service worker client independently selects and uses a service worker for its own loading and sub-resources.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WindowClient',
},
{
	title: 'WindowControlsOverlay',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WindowControlsOverlay',
},
{
	title: 'WindowControlsOverlayGeometryChangeEvent',
	text: 'The WindowControlsOverlayGeometryChangeEvent interface of the Window Controls Overlay API is passed to geometrychange when the size or visibility of a desktop Progress Web App s title bar region changes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WindowControlsOverlayGeometryChangeEvent',
},
{
	title: 'Worker',
	text: 'The Worker interface of the Web Workers API represents a background task that can be created via script, which can send messages back to its creator.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Worker',
},
{
	title: 'WorkerGlobalScope',
	text: 'The WorkerGlobalScope interface of the Web Workers API is an interface representing the scope of any worker. Workers have no browsing context; this scope contains the information usually conveyed by Window objects — in this case event handlers, the console or the associated WorkerNavigator object. Each WorkerGlobalScope has its own event loop.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope',
},
{
	title: 'WorkerLocation',
	text: 'The WorkerLocation interface defines the absolute location of the script executed by the Worker. Such an object is initialized for each worker and is available via the WorkerGlobalScope.location property obtained by calling self.location.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WorkerLocation',
},
{
	title: 'WorkerNavigator',
	text: 'The WorkerNavigator interface represents a subset of the Navigator interface allowed to be accessed from a Worker. Such an object is initialized for each worker and is available via the self.navigator property.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator',
},
{
	title: 'Worklet',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/Worklet',
},
{
	title: 'WritableStream',
	text: '\n  The WritableStream interface of the Streams API provides a standard abstraction for writing streaming data to a destination, known as a sink.\n  This object comes with built-in backpressure and queuing.\n',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WritableStream',
},
{
	title: 'WritableStreamDefaultController',
	text: 'The WritableStreamDefaultController interface of the Streams API represents a controller allowing control of a WritableStream s state. When constructing a WritableStream, the underlying sink is given a corresponding WritableStreamDefaultController instance to manipulate.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultController',
},
{
	title: 'WritableStreamDefaultWriter',
	text: 'Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter',
},
{
	title: 'XMLDocument',
	text: 'The XMLDocument interface represents an XML document. It inherits from the generic Document and does not add any specific methods or properties to it: nevertheless, several algorithms behave differently with the two types of documents.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XMLDocument',
},
{
	title: 'XMLHttpRequest',
	text: 'XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest',
},
{
	title: 'XMLHttpRequestEventTarget',
	text: 'XMLHttpRequestEventTarget is the interface that describes the event handlers shared on XMLHttpRequest and XMLHttpRequestUpload.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget',
},
{
	title: 'XMLSerializer',
	text: 'The XMLSerializer interface provides the serializeToString() method to construct an XML string representing a DOM tree.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer',
},
{
	title: 'XPathEvaluator',
	text: 'The XPathEvaluator interface allows to compile and evaluate XPath expressions.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator',
},
{
	title: 'XPathException',
	text: 'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XPathException',
},
{
	title: 'XPathExpression',
	text: 'This interface is a compiled XPath expression that can be evaluated on a document or specific node to return information from its DOM tree.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XPathExpression',
},
{
	title: 'XPathNSResolver',
	text: 'The XPathNSResolver interface permits prefix strings in an XPath expression to be properly bound to namespace URI strings.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XPathNSResolver',
},
{
	title: 'XPathResult',
	text: 'The XPathResult interface represents the results generated by evaluating an XPath expression within the context of a given node.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XPathResult',
},
{
	title: 'XRAnchor',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRAnchor',
},
{
	title: 'XRAnchorSet',
	text: 'The XRAnchorSet interface exposes a collection of anchors. It is returned by XRFrame.trackedAnchors and is a Set-like object.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRAnchorSet',
},
{
	title: 'XRBoundedReferenceSpace',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRBoundedReferenceSpace',
},
{
	title: 'XRCompositionLayer',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRCompositionLayer',
},
{
	title: 'XRCPUDepthInformation',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRCPUDepthInformation',
},
{
	title: 'XRCubeLayer',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRCubeLayer',
},
{
	title: 'XRCylinderLayer',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRCylinderLayer',
},
{
	title: 'XRDepthInformation',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRDepthInformation',
},
{
	title: 'XREquirectLayer',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XREquirectLayer',
},
{
	title: 'XRFrame',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRFrame',
},
{
	title: 'XRHand',
	text: 'The XRHand interface is pair iterator (an ordered map) with the key being the hand joints and the value being an XRJointSpace.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRHand',
},
{
	title: 'XRHitTestResult',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRHitTestResult',
},
{
	title: 'XRHitTestSource',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRHitTestSource',
},
{
	title: 'XRInputSource',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRInputSource',
},
{
	title: 'XRInputSourceArray',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRInputSourceArray',
},
{
	title: 'XRInputSourceEvent',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRInputSourceEvent',
},
{
	title: 'XRInputSourcesChangeEvent',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRInputSourcesChangeEvent',
},
{
	title: 'XRJointPose',
	text: 'The XRJointPose interface is an XRPose with additional information about the size of the skeleton joint it represents.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRJointPose',
},
{
	title: 'XRJointSpace',
	text: 'The XRJointSpace interface is an XRSpace and represents the position and orientation of an XRHand joint.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRJointSpace',
},
{
	title: 'XRLayer',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRLayer',
},
{
	title: 'XRLayerEvent',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRLayerEvent',
},
{
	title: 'XRLightEstimate',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRLightEstimate',
},
{
	title: 'XRLightProbe',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRLightProbe',
},
{
	title: 'XRMediaBinding',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRMediaBinding',
},
{
	title: 'XRPermissionStatus',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRPermissionStatus',
},
{
	title: 'XRPose',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRPose',
},
{
	title: 'XRProjectionLayer',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRProjectionLayer',
},
{
	title: 'XRQuadLayer',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRQuadLayer',
},
{
	title: 'XRRay',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRRay',
},
{
	title: 'XRReferenceSpace',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpace',
},
{
	title: 'XRReferenceSpaceEvent',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceEvent',
},
{
	title: 'XRRenderState',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRRenderState',
},
{
	title: 'XRRigidTransform',
	text: 'The XRRigidTransform is a WebXR API interface that represents the 3D geometric transform described by a position and orientation.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRRigidTransform',
},
{
	title: 'XRSession',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRSession',
},
{
	title: 'XRSessionEvent',
	text: 'The WebXR Device API s XRSessionEvent interface describes an event which indicates the change of the state of an XRSession. These events occur, for example, when the session ends or the visibility of its context changes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRSessionEvent',
},
{
	title: 'XRSpace',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRSpace',
},
{
	title: 'XRSubImage',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRSubImage',
},
{
	title: 'XRSystem',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRSystem',
},
{
	title: 'XRTransientInputHitTestResult',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRTransientInputHitTestResult',
},
{
	title: 'XRTransientInputHitTestSource',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRTransientInputHitTestSource',
},
{
	title: 'XRView',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRView',
},
{
	title: 'XRViewerPose',
	text: 'The WebXR Device API interface XRViewerPose represents the pose (the position and orientation) of a viewer s point of view on the scene. Each XRViewerPose can have multiple views to represent, for example, the slight separation between the left and right eye.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRViewerPose',
},
{
	title: 'XRViewport',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRViewport',
},
{
	title: 'XRWebGLBinding',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRWebGLBinding',
},
{
	title: 'XRWebGLDepthInformation',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRWebGLDepthInformation',
},
{
	title: 'XRWebGLLayer',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRWebGLLayer',
},
{
	title: 'XRWebGLSubImage',
	text: 'Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XRWebGLSubImage',
},
{
	title: 'XSLTProcessor',
	text: 'Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor',
},
{
	title: 'Event reference',
	text: 'Events are fired to notify code of  interesting changes  that may affect code execution. These can arise from user interactions such as using a mouse or resizing a window, changes in the state of the underlying environment (e.g. low battery or media events from the operating system), and other causes.',
	url: 'https://developer.mozilla.org/en-US/docs/Web/Events',
}
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

