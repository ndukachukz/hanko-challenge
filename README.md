redesign with AI

## How it works

It uses an ML model called [ControlNet](https://github.com/lllyasviel/ControlNet) to generate variations of rooms. This application gives you the ability to upload a photo of any room, which will send it through this ML Model using a Next.js API route, and return your generated room. The ML Model is hosted on [Replicate](https://replicate.com), [Bytescale](https://www.bytescale.com/) is used for image storage, [supabase](https://www.supabase.com) is used to save users generated images, and [hanko](https://www.hanko.io) is for Authentication.

## Running Locally

### Cloning the repository on your local machine.

```bash
git clone https://github.com/ndukachuks/hanko-challenge-nextjs
```

### Creating an account on Replicate to get an API key.

1. Go to [Replicate](https://replicate.com/) to make an account.
2. Click on your profile picture in the top left corner, and click on "API Tokens".
3. Here you can find your API token. Copy it.

### Creating an account on Supabase to get an API key.
1. Go to [Supabase NextJS Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

### Storing the API keys in .env

Create a .env file in the root directory of this project. And store your API key in it, as shown in the .example.env file.

If you'd also like to do rate limiting, create an account on UpStash, create a Redis database, and populate the two environment variables in `.env` as well. If you don't want to do rate limiting, you don't need to make any changes.

### Installing the dependencies.

```bash
npm install
```
or 
```bash
npm i
```

### Running the application.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```
