let mongoose = require('mongoose');

let KeyWordSchema = new mongoose.Schema({
    //keywords such as: longsword, arming sword, cut-and-thrust, sidesword, etc
    keyWord:{}
},{timestamps:true});

let FinishSchema = new mongoose.Schema({
    name:{
        type: String,
        maxlength: 50,
        required: true
    },
    description:{
        type: String,
        maxlength: 500,
    },
    material:{
        type: String
    },
    cost:{
        type:Number,
        required:true,
    },
},{timestamps:true});

let BladeSchema = new mongoose.Schema({
    //Type, as in sword, dagger, falchion
    swordType:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50,
    },
    //Purpose as in cutting-sharp or sparring-blunt
    purpose:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50,
    },
    //Oakeshott Types
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50,
    },
    description:{
        type:String,
        minLength:10,
        maxLength:300,
    },
    maxLength:{
        type:Number,
    },
    minLength:{
        type:Number,
    },
    keyWords:[KeyWordSchema],
    imageURL:{
        type:String,
        required:true,
    },
},{timestamps:true});

let GuardSchema = new mongoose.Schema({
    swordType:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50,
    },
    //Oakeshott Types
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50,
    },
    description:{
        type:String,
        minLength:10,
        maxLength:300,
    },
    keyWords:[KeyWordSchema],
    imageURL:{
        type:String,
        required:true,
    },
},{timestamps:true});

let GripSchema = new mongoose.Schema({
    swordType:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50,
    },
    //Shape, basically
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50,
    },
    length:{
        type:Number,
    },
    //color will be here too - for now
    material:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50,
    },
    description:{
        type:String,
        minLength:10,
        maxLength:300,
    },
    keyWords:[KeyWordSchema],
    imageURL:{
        type:String,
        required:true,
    },
},{timestamps:true});

let PommelSchema = new mongoose.Schema({
    swordType:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50,
    },
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50,
    },
    description:{
        type:String,
        minLength:10,
        maxLength:300,
    },
    keyWords:[KeyWordSchema],
    imageURL:{
        type:String,
        required:true,
    },
},{timestamps:true});

let PremadeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:5,
    },
    description:{
        type: String,
        required: true,
        minlength:15,
        maxlength: 500
    },
    blade:{
        required:true,
        type:BladeSchema
    },
    bladeLength:{
        type:Number,
        required:true
    },
    guard:{
        type:GuardSchema,
        required: true
    },
    finish:{
        type:FinishSchema,
        required: true
    },
    grip:{
        type:GripSchema,
        required:true
    },
    pommel:{
        type:PommelSchema,
        required: true
    }
},{timestamps:true});

mongoose.model('KeyWord',KeyWordSchema);
mongoose.model('Finish',FinishSchema);
mongoose.model('Blade',BladeSchema);
mongoose.model('Guard',GuardSchema);
mongoose.model('Grip',GripSchema);
mongoose.model('Pommel',PommelSchema);
mongoose.model('Premade',PremadeSchema);