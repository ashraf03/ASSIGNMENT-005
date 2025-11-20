1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

  getElementById:
  
   Selects a single element by ID

   Returns only one element

   ID is always unique

   getElementsByClassName:
   
   Selects one or more elements by class name

    Returns an HTMLCollection (array-like but not a real array)

    Live collection → It auto updates when the DOM changes

    querySelector:
    Returns the first matching element using CSS selector
    id, class, tag — all can be selected

    querySelectorAll:
    Returns all matching elements using CSS selector

    Returns a NodeList

    This is static (does not auto update when the DOM changes)

    How do you create and insert a new element into the DOM?

    1. createElement() creates a new HTML element
    2. innerText / innerHTML adds text or HTML
    3. appendChild() / prepend() / insertBefore() inserts an element into the DOM
    
    What is Event Bubbling and how does it work?
    When an event occurs on a child element, the event continues to rise from parent → body → document — this is called Event Bubbling.

    What is Event Delegation in JavaScript? Why is it useful?
    Instead of an event listener on each child element, you add a listener to a parent element, and use event bubbling + event.target to find out which child was clicked.                                          

    What is the difference between preventDefault() and stopPropagation() methods?
    preventDefault() → Stop browser behavior

stopPropagation() → Stop event bubbling to parent
