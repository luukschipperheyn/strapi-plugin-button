# Strapi Plugin Button

> Adds a custom button that requests a configurable url. Good for triggering static site builds.

## How to Install

Copy the following code and run from your terminal

```
#yarn
yarn add strapi-plugin-button
```

```
#npm
npm install strapi-plugin-button
```

## configuration

add something like this in the `config/plugins.js` file (replace <URL> with the url that should be requested when button is clicked):

```
'button': {
  config: {
    url: <URL>,
    method: "POST",
    name: "Build",
    buttonName: "Build now",
  },
}
```

The plugin should now be active and show the button.

## How to use

After activation of the Plugin, click the Button in the sidebar.
