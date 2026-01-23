# Instructions for React App

## This will cover
* [Setting up](#setting-up)
* [Creating the card](#creating-the-card)
* [Styling the card](#styling-the-card)
* [UseState and useEffect](#usestate-and-useeffect)


## Setting up
    npm create vite@latest
    choose react 
    typescript 
    cd my-project
    npm install
    npm run dev
    ctrl c or cmd c to clear terminal
    Install the ES7+ React/Redux/GraphQL/React-Native snippets extension in VS Code.

in make containers and components folder

In Navigation.tsx do rafce

(write how to add to git)

## Creating the card

Then create makeupCard first

![alt text](/src/instructions/images/image-1.png)

## Styling the card

Style the makeup card to your liking

![alt text](/src/instructions/images/image-2.png)

To install sass do npm install -D sass-embedded

Then add sass 

.makeup-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: rgb(255, 255, 255);
    height: 500px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 10px;
    align-items: center;
    

    &_description {
    font-size: 12px;
    color: #666;
}
    &_price {
        font-size: 1.2em;
        color: #000;
        font-weight: bold;
        margin-top: 12px;
    }
}

## UseState and useEffect
Add the useEffect function and the useState hook to get and set the makeupdata. 

![alt text](/src/instructions/images/image-3.png)

Pass the makeup data as a prop to the dashboard

![alt text](/src/instructions/images/image-4.png)

To get rid of the intrinsic error issue inside dashboard add type Dashboardprops...
and use makeupdta.map so that for evry makeup product ther is a makeup card
retrieve values for each makeup item

![alt text](/src/instructions/images/image-5.png)

Lots of foundations should appear
![alt text](/src/instructions/images/image-6.png)









