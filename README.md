# Welcome to PortfolioWebsiteGPT

**Important Note**: WebsiteGPT development has been stopped after the release of GPTs by OpenAI as it provides the same features. 


WebsiteGPT is a platform to conceive your own custom assistant powered by ChatGPT in only a few clicks.
An Assistant can leverage specific knowledge you introduce to respond to user queries. The Assistant currently supports three types of data: Website, Document, and specific Question & Answer. In the future, we plan to release more types of data to allow you to provide a more diverse flux of incoming knowledge to your assistant on our platform.

This repository contains the landing page and part of the documentation of the project WebsiteGPT. **The app itself is currently not deployed anymore**.

# Developer guide

To launch in local, just download the git repo, and run `npm install`, followed by `npm run dev`.

# Static Landing Website

To deploy easily to github pages, you can build this project with `nuxt generate` followed by `gh-pages --dotfiles -d .output/public`. This will push a branch to `gh-pages` to github. Select that branch in `Settings` > `Pages`.
