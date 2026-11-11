import indexPage from "./pages/index.js";

const pages = {
    "/index.html": indexPage,
};


const getPageContext = (pagePath) => pages[pagePath] ?? indexPage;

export default getPageContext;
