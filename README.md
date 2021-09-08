## Restaurant

This project is the front-end of a larger system. It will be used by a restaurant called `Canan Kafe`. Customers will be able to scan a QR code from tables in the restaurant, which will lead them to this website and do the following:

- Display the digital menu
- Add items to their carts
- Order the items that are in their carts.
- Request to pay what they have ordered.
- Create accounts and automatically login, if preferred.
- Change theme between light & dark

## Technical Information

This will be a `React` project. `Typescript` will be used to avoid type-inconsistencies of JavaScript.

As the design system, `material-ui` will be used.

Main target will be mobile devices. Desktop view is secondary and optional.

## Project Structure

```
|
|__ src
|   |__ components: common components used by different pages
|   |
|   |__ pages: various pages that users will see
|   |
|   |__ server: everything needed to communicate with the back-end server
|   |
|   |__ {top level files of the app}
|
|__ .prettierc.json: configuration file for the formatter used project-wide
|
|__ package.json
|
|__ tsconfig.json
|
|__ yarn.lock: yarn will be used to manage project dependencies
```
