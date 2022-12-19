import jwt from "jsonwebtoken";

//wants to like a post
//click the like button =>auth middleware(next)=>like controller

export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export const organizerauth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");
      console.log(decodedData);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    
    if (decodedData.userType=="Organizer")
    {
      next();
    }
    else {
      return res
      .status(404)
      .json({ message: "YOu are unauthorized for this page." });
    }
  } catch (error) {
    console.log(error);
  }
};
export const adminauth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    if (decodedData.userType=="Admin")
    {
      next();
    }
    else {
      return res
      .status(404)
      .json({ message: "You are unauthorized for this page." });
    }
  } catch (error) {
    console.log(error);
  }
};

// export default auth;
