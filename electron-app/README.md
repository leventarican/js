an electron app (desktop)

# run
```bash
npm start
```

# build
* pre-requirements: nodejs and npm
    * on linux you can also use linuxbrew to install it: `brew install nodejs` 
* app created with electron forge
    * https://www.electronforge.io/templates/typescript-+-webpack-template
```bash
npm init electron-app@latest my-new-app -- --template=webpack-typescript
# integrate react
npm install --save react react-dom
npm install --save-dev @types/react @types/react-dom
```