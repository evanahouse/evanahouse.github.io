const getPageURL = (page: any) => {
  switch (page) {
    case "CONTACT":
      return "/contact";
    case "ABOUT":
      return "/";
    case "PORTFOLIO":
      return "/portfolio";
    case "RESUME":
      return "/resume";
    default:
      return "/";
  }
};

export default getPageURL;
