# Profile Form with Summary Card Page
A simple Vue 3 project scaffolded with Vite. This app demonstrates form handling, state management, and routing in Vue.

# Project Overview
This is a basic Vue 3 application that allows users to fill out a profile form and view a summary of their input. It uses Vite for development and build tooling, and includes features like form validation, state management with Pinia (or Vuex), and routing with Vue Router.

## Features
- Form input and validation
- State management with Pinia (or Vuex)
- Routing with Vue Router
- Component-based architecture

## Project Structure
```
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── vite.svg
├── src/
│   ├── App.vue
│   ├── main.js
│   ├── style.css
│   ├── assets/
│   │   └── vue.svg
│   ├── components/
│   │   ├── ProfileForm.vue
│   │   └── SummaryCard.vue
│   ├── router/
│   │   └── index.js
│   ├── stores/
│   │   └── FormDataStore.js
│   └── views/
│       ├── FormView.vue
│       └── SummaryView.vue
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```sh
npm install
```

### Running the App
```sh
npm run dev
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT