"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const subjectSchema = new Schema({
    subjectName: {
        type: String,
        required: true
    },
    exams: {
        type: Array,
        required: true
    },
    textInfo: {
        type: Object,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    picture: {
        type: String,
        required: false
    },
    teacherName: {
        type: String,
        required: false
    },
});
const SubjectItem = mongoose_1.default.model('allexams', subjectSchema);
exports.default = SubjectItem;
