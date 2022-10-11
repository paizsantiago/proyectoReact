# Proyecto Inventflix

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Descripción

Inventflix es un proyecto e-commerce realizado en `ReactJS` de venta de peliculas. Las mismas son sacadas de la api [TMB](https://www.themoviedb.org/).

El proyecto cuenta con `4` secciones de peliculas, carrito y formulario de confirmacion de compra asi como tambien adaptacion a todos los dispositivos.

La información es almacenada en `firebase` (tanto las peliculas, como las ordenes de compra.)

## Librerias utilizadas

[Material-UI](https://mui.com/)

Tomé la decisión de utilizar Material-UI ya que queria darle un aspecto más profesional y tenia como meta personal estilizar todo el proyecto utilizando la misma.

[React-Toastify](https://www.npmjs.com/package/react-toastify)

Genera los pop-ups a la hora de agregar un item al carrito o no completar el formulario.

[React-Spinners](https://www.davidhu.io/react-spinners/)

Spinners de carga cuando se hace el llamado a firebase.





