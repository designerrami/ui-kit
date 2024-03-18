"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button = ({ onPress, title, ...props }) => {
    return (<react_native_1.TouchableOpacity onPress={onPress} {...props}>
      <react_native_1.Text>{title}</react_native_1.Text>
    </react_native_1.TouchableOpacity>);
};
exports.default = Button;
