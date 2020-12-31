export const isTokenCheck = (request)=>{
if(!request.id){
    return res.status(401).json({
        message: 'Login is needed',
    });
}
}