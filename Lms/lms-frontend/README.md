#LMS Frontend


###setup  instruction 


1.clone the project
``` github-clone  https://github.com/Adarshlpu/Lms-frontend-hm.git
```


2.move into the directory
```
cd lms-frontend

```
3. install dependency

```
npm i
```

4.run the server

```
npm run dev

```

<!-- how to add something after making changes is : git add . and then git commit -m "updated" -->


###setup  instructions for tailwind
1. install tailwindcss

```
 npm install -D tailwindcss
 ```
 2.create tailwind config file

 ```

npx tailwindcss init
```
3.Add file extension to tailwind config file

```
"./src/**/*.{html,js,jsx,ts,tsx}"
```
4.add the tailwind directives at the top of the 'index.css' file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### set up instruction for all dependency 
```
npm install @reduxjs/toolkit react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```