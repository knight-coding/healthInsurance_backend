import mongoose from 'mongoose';

const insuranceLeadsSchema  = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    zipCode: {
        type: String,
        trim: true
    },
    countryCode: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        match: [/^\d{7,15}$/, 'Invalid phone number'],
    },
    state: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    dateOfBirth: {
        type: Date
    },

    status:{
        type: Boolean,
        default: false
    }
}, {timestamps: true});

/* 👇 INDEX DEFINITIONS */
insuranceLeadsSchema.index({ createdAt: -1 });    // descending

const InsuranceLeads = mongoose.models.InsuranceLeads || mongoose.model("InsuranceLeads", insuranceLeadsSchema);

export default InsuranceLeads;