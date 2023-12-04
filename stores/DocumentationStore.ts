export const useDocumentationStore = defineStore('DocumentationStore', {
  state: () => ({
    viewedPageMarkdown: '',
    pathToFile: ''
  }),
  actions: {
    async getPageMarkdown(pathToFile: string) {
      const data = await fetch(pathToFile + '.md')
      .then(function (response) {
        return response.text()
      })
      .then(function (data) {
        return data // this will be a string
      })
      this.viewedPageMarkdown = data;
      this.pathToFile = pathToFile;
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDocumentationStore, import.meta.hot));
}
