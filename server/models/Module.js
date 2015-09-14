var mongoose = require('mongoose');

var moduleSchema = mongoose.Schema(
    {
        _id: {type: String, required: true, unique: true},
        name: {type: String, default: null},
        workloadHours: {type: Number, default: null},
        contactHours: {type: Number, default: null},
        independentHours: {type: Number, default: null},
        assignmentHours: {type: Number, default: null}
    },
    {
        collection: 'modules'
    }
);

var moduleModel = mongoose.model('Module', moduleSchema);
exports.moduleModel = moduleModel;