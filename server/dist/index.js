"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "CHOLE BHATURE",
            price: 15,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/chole_bhature.jpg",
            type: "lunch",
        },
        {
            name: "BHELPURI",
            price: 20,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/bhel.jpg",
            type: "dinner",
        },
        {
            name: "GOLGAPPE",
            price: 20,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/golgapper.jpeg",
            type: "dinner",
        },
        {
            name: "AALO TIKKI",
            price: 20,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/aalo.jpg",
            type: "dinner",
        },
        {
            name: "BURGER",
            price: 30,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/burger.jpeg",
            type: "dinner",
        },
        {
            name: "BANANA SHAKE",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/banana.jpeg",
            type: "breakfast",
        },
        {
            name: "MANGO SHAKE",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/mango.jpeg",
            type: "breakfast",
        },
        {
            name: "PANEER ROLE",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/paneer.jpeg",
            type: "lunch",
        },
        {
            name: "JALEBI",
            price: 30,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/jalebi.jpeg",
            type: "lunch",
        },
        {
            name: "SAMOSA",
            price: 15,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/samosa.jpeg",
            type: "lunch",
        },
        {
            name: "SOAN PAPDI",
            price: 30,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/soan.jpg",
            type: "dinner",
        },
        
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map