# Getting Started

To start the development server, follow these steps:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can begin editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project utilizes [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## About Gaudiy Assessment

The total time taken from starting to completing the task was approximately 5 hours.

### Additions:
1. Initial state reading the location of the IP address.

### Enhancements:
1. Loading indicator for improved UX.
2. Styled-components for readability and componentization.
3. Zustand for state management across screens.
4. Axios for HTTP requests.
5. Date-fns for easy date manipulation.
6. Region and country display for better UX.

### Deployment:
Deployed to: [https://weather-app-phi-one-82.vercel.app/](https://weather-app-phi-one-82.vercel.app/)

### Note on Zustand:
This is my first time using Zustand. While I'm more familiar with Xstate and Redux, Zustand feels much easier to set up and use.

### Pending Tests:
I acknowledge that I did not have enough time to write test code. The cases I would like to test are:
1. Rendering of Home Component
2. Initial State Value
3. handleSearch action
4. setQuery and setDate actions
5. WeatherAPI Valid Search (e.g., Sapporo)
6. WeatherAPI Invalid Search (e.g., sdgdsfg)

Please note that testing is a crucial part of the development process and would be added in future iterations.
