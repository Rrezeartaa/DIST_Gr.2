const uploadFile = require("../upload");
const fs = require("fs");
const baseUrl = "http://localhost:3000/files/";


const upload = async (req, res) => {
  try {
    await uploadFile(req, res);

  } catch (err) {
    console.log(err);
    
  if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 2MB!",
      });
    }
  res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/resources/static/assets/uploads/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        
        
        
        
         message: "Unable to scan files!",
      });
    }

    
    
    
    let fileInfos = [];

     files.forEach((file) => {
       
      fileInfos.push({
        
        name: file,
        
        url: baseUrl + file,
        
      });
       
    });
    
    
    res.status(200).send(fileInfos);
    
  });
  
};

const download = (req, res) => {
  
  const fileName = req.params.name;
  
   const directoryPath = "C:/Users/Admin/DIST_PROJECT_Gr.2/uploads/";
  
   res.download(directoryPath + fileName, fileName, (err) => {
     
    if (err) {
      res.status(500).send({
        
        message: "Could not download the file. " + err,
      });
      
    }
     
  });
  
};



module.exports = {
  
  upload,
  
  getListFiles,
  
  download,
  
  
  
  
  
  
};
        
