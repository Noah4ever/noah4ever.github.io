# [🌐 thiering.org](thiering.org)

This project is a personal website built using React, TypeScript, and Vite. The website is designed to be responsive, providing an optimal viewing experience across various devices and screen sizes.

## ✨ Features

- **Modern Technology Stack:** Utilizes React, TypeScript, Vite with SWC ensuring a robust and efficient development process.
- **Responsive Design:** The website layout adjusts seamlessly to different devices, providing an excellent user experience on desktops, tablets, and smartphones.

## 🚀 Getting Started

### 🎯 Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/))

### 💾 Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Noah4ever/noah4ever.github.io.git
   ```

2. Navigate to the project directory:

   ```bash
   cd noah4ever.github.io
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### 🚧 Development

To start the development server, run the following command:

```bash
npm run dev
```

This will start the development server, and you can view your website at `http://localhost:5173`.

## 📨 Deployment

Once you have merged into the `main` branch, GitHub Pages will automatically build and deploy your app to [thiering.org](https://thiering.org).

## 🎨 Customization

1. **Edit Content:** Modify the content of the website by updating pages in the `src/pages` and the components `src/components` directory.

2. **Styling:** Customize the styles by modifying the SCSS files in the `src/styles` directory.

3. **Assets** Add assets to the `src/assets` directory.

To import any components or scss files you can use the aliases:

```ts
alias: {
   "@": "/src",
   "@components": "/src/components",
   "@pages": "/src/pages",
   "@styles": "/src/styles",
   "@utils": "/src/utils",
   "@types": "/src/types",
   "@assets": "/src/assets",
},
```

## 📋 Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

## ✒️ License

This project is licensed under the [MIT License](LICENSE).

---

**Happy coding!** 👨🏻‍💻🚀
