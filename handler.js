'use strict';

module.exports.endpoint = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message1: `Hello, the current time is ${new Date().toTimeString()}.`,
      message2: 'this is updated by howard',
    }),
  };

  callback(null, response);
};
