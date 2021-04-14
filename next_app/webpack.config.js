module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader?attrs[]=video:src",
          },
        ],
      },
      {
        test: /\.mp4$/,
        use: [
          {
            loader: "url?limit=10000&mimetype=video/mp4",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
