export const usercontroller=(req, res) => {
  const username= req.params.username
  res.send(`user profile for ${username}`);
}

export const searchcontroller=(req, res) => {
  const keyword= req.query.keyword;
  res.send(`search for: ${keyword}`);
}

export const userlogin=(req,res)=>{
    res.send('user login route')
}

export const usersignup=(req,res)=>{
    res.send('user signup route')
}
