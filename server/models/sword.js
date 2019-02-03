let mongoose = require('mongoose');

// let KeyWordSchema = new mongoose.Schema({
//     //keywords such as: longsword, arming sword, cut-and-thrust, sidesword, etc
//     keyWord:{}
// },{timestamps:true});

// let FinishSchema = new mongoose.Schema({
//     name:{
//         type: String,
//         maxlength: 50,
//         required: true
//     },
//     description:{
//         type: String,
//         maxlength: 500,
//     },
//     material:{
//         type: String
//     },
//     cost:{
//         type:Number,
//         required:true,
//     },
// },{timestamps:true});

let options = { discriminatorKey: 'partType' };

let SwordPartSchema = new mongoose.Schema({
    // partType: {
    //     //blade, guard, grip, or pommel
    //     type: String,
    //     required: true,
    //     enum:['blade','guard','grip','pommel'],
    // },
    //Type, as in sword, dagger, falchion
    swordType: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
    },
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
    },
    description: {
        type: String,
        maxLength: 300,
    },
    cost: {
        type: Number,
    },
    keyWords: [String],
    imageURL: {
        type: String,
        required: true,
    },
    geometrySrc: {
        type: String,
        required: true,
    },

}, { timestamps: true, discriminatorKey: 'partType' });

let SwordPart = mongoose.model('SwordPart', SwordPartSchema);

SwordPart.discriminator("BladePart",
    new mongoose.Schema({
        //Purpose as in cutting-sharp or sparring-blunt
        purpose: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 50,
        },
        maxLength: {
            type: Number,
        },
        minLength: {
            type: Number,
        },
    }, options));

SwordPart.discriminator("GuardPart",
    new mongoose.Schema({}, options));

SwordPart.discriminator("GripPart",
    new mongoose.Schema({
        gripLength:{
            type: Number,
        },
        material:{
            type: String,
            required: true,
            minLength: 3,
            maxLength: 50,
        }
    },options));

let PommelPartSchema = SwordPart.discriminator("PommelPart",new mongoose.Schema({}, options));

// let PremadeSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         minlength: 5,
//     },
//     description: {
//         type: String,
//         required: true,
//         minlength: 15,
//         maxlength: 500
//     },
//     blade: {
//         required: true,
//         type: BladeSchema
//     },
//     bladeLength: {
//         type: Number,
//         required: true
//     },
//     guard: {
//         type: GuardSchema,
//         required: true
//     },
//     finish: {
//         type: String,
//         required: true
//     },
//     grip: {
//         type: GripSchema,
//         required: true
//     },
//     pommel: {
//         type: PommelSchema,
//         required: true
//     }
// }, { timestamps: true });

// mongoose.model('KeyWord',KeyWordSchema);
// mongoose.model('Finish',FinishSchema);

// mongoose.model('Premade', PremadeSchema);