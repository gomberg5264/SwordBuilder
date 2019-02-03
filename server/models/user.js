let mongoose = require('mongoose');

let OrderSchema = new mongoose.Schema({
    itemCode:{
        type:String,
        required:true,
    },
    imageURL:{
        type:String,
    },
    totalPrice:{
        type:Number,
    },
    notes:{
        type:String
    },
},{timestamps:true});

// let AddressSchema = new mongoose.Schema({
//     houseNumber:{},
//     streetName:{},
//     apartment:{},
//     city:{},
//     state:{},
//     zip:{},
//     nickName:{},
// },{timestamps:true});

let UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50,
    },
    lastName:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50,
    },
    email:{
        type:String,
        required:true,
        minlength:5,
        maxlength:100,
        unique:true,
        validate:{
            validator:function(val){
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(val).toLowerCase());
            }
        }
    },
    address:{
        type: String,
    },
    password:{
        type: String,
        required: true,
    },
    accessLevel:{
        type:Number,
        default: 1,
    },
    notes:{
        type: String,
        maxlength: 500
    },
    orders:[OrderSchema],
},{timestamps:true});

mongoose.model('Order',UserSchema);
mongoose.model('User',UserSchema);