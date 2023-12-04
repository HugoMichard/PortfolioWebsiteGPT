Your AI Assistant will be able to answer your users questions based on:
- your **website data**
- **documents**
- **specific Question and Answers**

You can explore the capabilities of your Assistant using the playground or by building a step-by-step integration outlined in the API section. At a high level, a typical integration of an Assistant has the following flow:

- Define your Assistant basic information (name and description)
- Add custom knowledge to your assistant by adding specific Question & Answers, documents or websites
- Validate your Assistant in the playground
- Generate your API Key
- Send a POST request to our API when a user asks a question

# Setting up your Assistant

## Give basic information to your Assistant

An Assistant can be configured to respond to users’ questions. To personnalize it, you can define it's name and give it a description. This can be done in the [Assistant tab](/app/assistant).

We highly recommend to detail, in the description, your company field and the purpose you are building this Assistant for (giving advices to clients, helping summarize documents, providing context ...). You may also indicate in the description the personality you wish for it to take on (such as professional, joyful, creative ...).


## Add custom knowledge to your assistant

The Assistant currently supports three sources of data: Website, Document, and Question & Answer. These sources can be added in the [Assistant tab](/app/assistant). Each source can be deleted, activated or deactivated (in which case, the Assistant does not consider it) in a single click at any time.

### Question & Answer

With specific Question & Answer, you can detail precise answers you want your Assistant to give back when faced with a certain question. You can easily add multiple Question & Answer. Question & Answer will be prioritized when generating an answer over any other type of data.


### Document

Documents enable you to feed large amounts of data to your Assistant. The Assistant will identify the relevant sections of the documents provided when answering the question of a user and will use it to generate an appropriate answer. Currently, only PDF documents are supported. CSV support will be added soon for premium members. 


### Website

The data of a website page can be used to generate answers. To do so, you only have to input the URLs of the websites you wish your Assistant to know. The data contained on those pages will be automatically retrieved and used by your Assistant. It will be refreshed often as well, based on your premium subscription.

# Generating answers

## Playground

Once your Assistant properly customized, you can validate its answers in the [Playground tab](/app/playground). The answers given by the Assistant will match exactly the ones you would receive using the API. Please note that the messages sent in the Playground are counted in your monthly message rate limits.

## API

Once your Assistant customized, you can use the API to connect to it and generate answers. You will first need an API key which will enable you to send requests to our API.

### API keys

To generate API keys, you can access the [Personal > API keys tab](/app/keys). A simple click will generate a key that you can name. Please note that once created, you will not be able to display the full key again.

### Requests

To generate an answer with the API, you must send a `POST` request to `https://websitegpt.vercel.com:8000/assistants/generate` containing your `key` and a `question`. Here is an example of such curl request:

```curl
curl -X POST https://websitegpt.vercel.com:8000/assistants/generate \
  -d '{"key": $WEBSITEGPT_API_KEY, "question": "a question"}'
```

You will receive a response with the answer given by ChatGPT.

# Limitations

During this beta, there are several known limitations we are looking to address in the coming weeks and months. We will publish a changelog on this page when we add support for additional functionality.

- Support for streaming output
- Support for user message creation with images
- Support for code usage
- Support for external API requesting
- Support for memory
- Support for CSV documents