const userModel = require('@/models/user.model')
const usersService = require('@/services/posts.service')


const getAll = async (req, res) => {
    try {
      const page = +req.query.page || 1
      const result = await usersService.pagination(page)
      res.paginate(result)
    } catch (error) {
        res.error( 400, error.message )
    }
}

const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    res.success(await Users.findOne(id), 200)
  } catch (error) {
    res.error( 400, error.message )
  }
};

const creatUser = async (req, res) => {
  try {
   const newUser = await Users.create(
    {
      title: req.body.title, 
      slug: req.body.slug,
      content: req.body.content,
      description: req.body.description,
      status: req.body.status
    }
  )
       if(newUser) {
         return res.success({
           message: `Add Users ${req.body.title.trim()} (${newUser.insertId}) successfully`
         }, 201)
       }
  } catch (error) {
    res.status(400).json({
      errorDesc: error.message,
    });
  }
};

const editUser = async (req, res) => {
  try {
     await Users.update({
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            content: req.body.content,
            status: req.body.status
        })
        res.success({
          message: `Update User (${req.params.id}) successfully`
        })
  } catch (error) {
    if(error.message == 'Not found User') {
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

const deleleUser = async (req, res) => {
    const idDelete = +req.params.id
    try {
        await Users.destroy(idDelete)
        res.status(204).json()
    } catch (error) {
        res.status(404).json({
          success: false,
          message: error.message,
        });
    }
}


module.exports = {getAll, getOneUser, creatUser, editUser, deleleUser}