const mongoose = require('mongoose');

// let KeyWord = mongoose.model('KeyWord');
// let Finish = mongoose.model('Finish');

// let Premade = mongoose.model('Premade');
let Part;
let Blade = mongoose.model('BladePart');
let Guard = mongoose.model('GuardPart');
let Grip = mongoose.model('GripPart');
let Pommel = mongoose.model('PommelPart');

function checkType(name){
    switch (name) {
        case "blade":
            Part = Blade;
            break;
        case "guard":
            Part = Guard;
            break;
        case "grip":
            Part = Grip;
            break;
        case "pommel":
            Part = Pommel;
            break;
    }
}


module.exports = {
    // Sword part CRUD
    getAllParts: (req, res) => {
        checkType(req.params.part);
        Part.find({}, (error, parts) => {
            if (error) { res.json(error); }
            else { res.json(parts) }
        });
    },

    makeNewPart: (req, res) => {
        checkType(req.params.part);
        Part.find({ geometrySrc: req.body.geometrySrc }, (err, result) => {
            if (result.length) {
                res.json({ error: "Model file already in use." })
            }
            else {
                let part = new Part(req.body);
                part.save((err) => {
                    if (err) { res.json(err); }
                    else { res.json({ message: "Successfully added a new " + req.params.part }); }
                });
            }

        });
    },
    requestOnePart: (req, res) => {
        checkType(req.params.part);
        Part.findById(req.params.id, (error, part) => {
            if (error) {
                res.json(error);
            }
            else {
                res.json(part);
            }
        });
    },
    editPart: (req, res) => {
        checkType(req.params.part);
        Part.find({ geometrySrc: req.body.geometrySrc }, (error, parts) => {
            if ((parts.length > 0) && (result[0]._id != req.params.id)) {
                res.json({ error: "Another "+req.params.part+" is using this model." })
            }
            else {
                Part.updateOne({_id:req.params.id},req.body, (err, raw) => {
                    if (err) { res.json(err); }
                    else { res.json(raw); }
                });
            }
        });
    },
    deletePart: (req, res) => {
        checkType(req.params.part);
        Part.findOneAndDelete({ _id: req.params.id }, (err, result) => {
            if (err) { res.json(err); }
            else {
                res.json({ message: "Deleted "+ req.params.part});
            }
        });
    },

}