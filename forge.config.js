require("dotenv").config();

process.env.GITHUB_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

module.exports = {
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: process.env.GITHUB_USER_NAME,
          name: process.env.GITHUB_REPOSITORY_NAME,
        },
        prerelease: false,
        draft: true,
      },
    },
  ],
  packagerConfig: {
    asar: true,
    //TODO: 認証の設定をする（ https://www.electronforge.io/guides/code-signing/code-signing-macos ）
    // osxSign: {},
    // osxNotarize: {
    //   tool: "notarytool",
    //   appleId: process.env.APPLE_ID,
    //   appleIdPassword: process.env.APPLE_PASSWORD,
    //   teamId: process.env.APPLE_TEAM_ID,
    // },
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
};
