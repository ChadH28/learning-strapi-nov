# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

OR

[Follow this youtube video](https://www.youtube.com/watch?v=RceLeh9D85o&ab_channel=CodingAfterThirty)


# Installation Process

```
npx create-strapi-app@latest my-project --quickstart
```

The quick start installation sets up Strapi with a SQLite database. Other databases and installation options are available (see CLI installation guide). [Command Line Interface](https://docs.strapi.io/dev-docs/quick-start#_1-install-strapi-and-create-a-new-project)

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop or dev
# or
yarn develop or dev
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## Making a backup dump folder

```
"backup": "strapi export --no-encrypt -f backup-dump
```
- add this in the package.json under build 
- youll find backup file on root level of app 


## ⚙️ Key plugins

- strapi-plugin-populate-deep
- @exfabrica/strapi-plugin-awesome-seo
- custom-slug

## Accesss to api routes

Settings
-> USERS & PERMISSIONS PLUGIN
-> Roles
-> Public

- Select single or collection type
- Check the 'find' checkbox if single
- Check the 'find' and 'findOne' checkboxes if collection type

## Viewing api route

- Can use postmans or open in your browser, preferably firefox because it has a built in json viewer
- http://localhost:1337/api/homepage
- so to break it down its whichever localhost port youre on followed by '/api' then followed by your '/API ID' which is just below your single type or collection type Main Title

## Implementing relational level fields like reusable compos and media
- need to implement deep populating
- first run `npm run strapi generate`, then run generate middleware, name it page-populating and then add it to existing api
- then under routes folder 
add in:
```
    module.exports = createCoreRouter("api::homepage.homepage", {
    config: {
        find: {
        middlewares: ["api::homepage.page-populating"],
        },
        findOne: {
        middlewares: ["api::homepage.page-populating"],
        },
    },
    });
```
- the `api::homepage.page-populating` is the middleware filename of that specific page its populating
- [more info on populating here](https://strapi.io/blog/demystifying-strapi-s-populate-and-filtering)


## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

---
