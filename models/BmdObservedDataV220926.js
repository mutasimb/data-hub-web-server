const { Schema, model } = require("mongoose");

const BmdObservedDataSchemaV220926 = new Schema(
  {
    st: { type: String, required: true },
    tm: { type: Date, required: true },
    submit: { type: Date, required: true },
    user: { type: String },

    tmn: { type: Number },
    tmx: { type: Number },
    t: { type: Number, required: true },
    rh: { type: Number, required: true },
    pType: { type: String, default: "n", enum: ["n", "m", "t"] },
    p: { type: Number },
    ws: { type: Number },
    wd: { type: Number },
    prMsl: { type: Number, required: true },
    cldTot: { type: Number, default: 0 },

    sm05: { type: Number },
    sm10: { type: Number },
    sm20: { type: Number },
    sm30: { type: Number },
    sm50: { type: Number },
    st05: { type: Number },
    st10: { type: Number },
    st20: { type: Number },
    st30: { type: Number },
    st50: { type: Number }
  },
  { timestamps: true }
);

module.exports = model(
  "bmd-observed-data-v220926",
  BmdObservedDataSchemaV220926,
  "bmd-observed-data-v220926"
);
