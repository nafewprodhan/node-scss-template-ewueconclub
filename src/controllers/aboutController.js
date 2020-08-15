exports.getAboutPage = (req, res) => {
    res.render('about', {
        path: "/about"
    })
}