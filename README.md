Local setup steps:

1. Install netlify cli tools, `npm install netlify-cli --global`.
2. Check version `ntl --version`.
3. Create a file `netlify.toml` in root directory with below content.

```
[build]
	command = "npm run build" //specifies the command that Netlify runs to build your site before deployment
	functions = "netlify/functions" //specifies the directory where your Netlify Functions are located
	publish = "public" //specifies the  directory that Netlify will serve as your website

[functions]
        node_bundler = "esbuild" //tells Netlify to use esbuild for bundling your functions
```

5. npm i
6. Setup .env with below variables

- WEATHER_API_KEY={your_api_key}
- WEATHER_API_BASE_URL=https://api.openweathermap.org/data/2.5/weather
- WEATHER_DATA_UNIT=metric

7. Run `npm run dev`
