# Sortable Paper

In essence, it is a sortable component made to work with React. The catch is – it acts as Material Paper is supposed to (almost).
 When detaching from the list, the item gets bumped up. While moving, the movement is fluid and the sorting likewise, with keeping a nice shadow and grouping with grouped items (to the left and right of the selected item), making a nice same-level paper.  In the demo I’ve added a small border to make the views more apparent, even though it is not necessary for production. It’s entirely up to the person to decide what to put inside a window (pane / paper).

Demo: 

```js
    import Window from “window”;
    import WindowGroup from “window”;

    import YourComponent from “wherever”;

    <WindowGroup>
        {Array.apply(null, Array(4)).map((it, index) => {
                return <Window index={index} width={index === 2 && 400 || 200}><YourComponent /></Window>
            }
        )}
    </WindowGroup>
```