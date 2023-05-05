module.exports =  (role) => {
    return  async function (req, res, next) {
        if(req.user.role !== role){
            res.status(403).json({
                status:'failed',
                message : `kamu tidak ada akses karena kamu ${req.user.role}`
            })
        } else {
            next()
        }
    }
}