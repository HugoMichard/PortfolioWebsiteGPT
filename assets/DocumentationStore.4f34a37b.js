import{aS as n}from"./entry.4fc44835.js";const i=n("DocumentationStore",{state:()=>({viewedPageMarkdown:"",pathToFile:""}),actions:{async getPageMarkdown(e){const o=await fetch("/PortfolioWebsiteGPT"+e+".md").then(function(t){return t.text()}).then(function(t){return t});this.viewedPageMarkdown=o,this.pathToFile=e}}});export{i as u};