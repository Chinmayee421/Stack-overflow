import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]

        let deocdeData = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = deocdeData?.id 

        next()
    } catch (error) {
        console.log(error)
    }
}

export default auth;