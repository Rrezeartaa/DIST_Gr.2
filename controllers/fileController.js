const uploadFile = require("../upload");
const fs = require("fs");
const baseUrl = "http://localhost:3000/files/";


const upload = async (req, res) => {
  try {
    await uploadFile(req, res);

    // if (req.file == undefined) {
    //   return res.status(400).send({ message: "Please upload a file!" });
    // }
