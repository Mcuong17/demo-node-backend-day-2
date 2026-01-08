const posts = require('@/models/post.model')


const getAll = async (req, res) => {
    try {
      const page = +req.query.page || 1
      const limit = 10
      const offset = (page - 1) * limit
      const postsList =  await posts.findAll(limit, offset)
      const count = await posts.count()
      
      const pagination = {
        current_page: page,
        total: count,
        per_page: limit
      }
      if(posts.length) {
        pagination.from = offset + 1
        pagination.to = offset + limit
      }
       res.success(
        postsList,
        200,
        {
          pagination
        }
      )
    } catch (error) {
        res.error( 400, error )
    }
}

const getOnePost = async (req, res) => {
  try {
    const id = req.params.id;
    res.success(await posts.findOne(id), 200)
  } catch (error) {
    res.error( 400, error.message )
  }
};

const creatPost = async (req, res) => {
  try {
   const newPost = await posts.create(
    {
      title: req.body.title, 
      slug: req.body.slug,
      content: req.body.content,
      description: req.body.description,
      status: req.body.status
    }
  )
       if(newPost) {
         return res.success({
           message: `Add posts ${req.body.title.trim()} (${newPost.insertId}) successfully`
         }, 201)
       }
  } catch (error) {
    res.status(400).json({
      errorDesc: error.message,
    });
  }
};

const editPost = async (req, res) => {
  try {
     await posts.update({
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            content: req.body.content,
            status: req.body.status
        })
        res.success({
          message: `Update post (${req.params.id}) successfully`
        })
  } catch (error) {
    if(error.message == 'Not found post') {
         res.status(404).json({
        success: false,
        message: error.message,
        });
    } else {
        res.status(400).json({
          success: false,
          message: error.message,
        });
    }
  }
};

const delelePost = async (req, res) => {
    const idDelete = +req.params.id
    try {
        await posts.destroy(idDelete)
        res.status(204).json()
    } catch (error) {
        res.status(404).json({
          success: false,
          message: error.message,
        });
    }
}


module.exports = {getAll, getOnePost, creatPost, editPost, delelePost}