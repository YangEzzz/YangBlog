const {getText} = require("../service/article");
const router = require('koa-router')()
router.prefix('/publictext')

router.post('/getText',async (ctx)=>{
    const {category}=ctx.request.body
    console.log('get',category)
    let res=await getText(category)
    ctx.body=res.data
})//获取文章

module.exports = router