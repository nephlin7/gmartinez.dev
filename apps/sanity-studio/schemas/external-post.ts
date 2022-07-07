export default {
    name: "externalPost",
    type: "document",
    title: "External Post",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
      },
      {
        title: "URL",
        name: "url",
        type: "url",
        description: "The main site url. Used to create canonical url",
      },
      {
        title: 'Emoji',
        type: 'string',
        name: 'emoji'
      }
    ],
  };
  