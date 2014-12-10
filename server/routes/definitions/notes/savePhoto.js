'use strict';

var Note = require('../../../models/note');

module.exports = {
  description: 'Save a Photo',
  tags:['notes'],
  handler: function(request, reply){
    Note.savePhoto(request.payload.pic, request.params.noteId, request.auth.credentials.token, function(err){
      reply().code(err ? 400 : 200);
    });
  }
};
