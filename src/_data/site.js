const siteConfig = {
  name: "rizaldy.today",
  repo: "https://github.com/faultables/rizaldy.today",
  last_commit: process.env.LAST_COMMIT || "main",
  author: {
    name: "Rizaldy",
    avatar: "/assets/img/avatar.jpg",
  },
};

module.exports = () => {
  return siteConfig;
};
