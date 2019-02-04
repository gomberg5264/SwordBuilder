const users=require('../controllers/users.js');
const swords=require('../controllers/swords.js');

module.exports = function(app){
    //Sword part access
    app.get('/api/sword/:part',(req,res)=>{
        swords.getAllParts(req,res);
    });

    app.post('/api/sword/:part',(req,res)=>{
        swords.makeNewPart(req,res);
    });

    app.get('/api/sword/:part/:id',(req,res)=>{
        swords.requestOnePart(req,res);
    });

    app.post('/api/sword/:part/:id',(req,res)=>{
        swords.editPart(req,res);
    });

    app.delete('/api/sword/:part/:id',(req,res)=>{
        swords.deletePart(req,res);
    });

}