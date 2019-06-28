module.exports = {
  title: "web3-ss.js",
  base: "/web3-ss.js/",
  themeConfig: {
    nav: [
      {
        text: "Quickstart",
        link: "/"
      },
      { text: "API", link: "/api/" }
    ],
    sidebar: [
      "/",
      {
        title: "API Reference",
        collapsable: false,
        children: [
          ["api/", "web3"],
          "api/ss",
          "api/validator",
          "api/governance"
        ]
      }
    ],
    sidebarDepth: 1,

    repo: "SecondState/web3-ss.js",
    repoLabel: "GitHub"
  }
}
