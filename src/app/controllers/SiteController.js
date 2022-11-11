class SiteController{

    //[get]->path:/
    index(req,res){
        res.render('home')
    }
    //[GET]->path:/search
    search(req,res){
        res.render('search')
    }
}


module.exports = new SiteController