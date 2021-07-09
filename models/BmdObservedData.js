const { Schema, model } = require("mongoose");

const BmdObservedDataSchema = new Schema(
  {
    st: { type: String, required: true },
    tm: { type: Date, required: true },
    submit: { type: Date, required: true },
    user: { type: String },

    t: { type: Number, required: true },
    tmx: { type: Number },
    tmn: { type: Number },
    p: { type: Number, default: 0 },
    rh: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = model("bmd-observed-data", BmdObservedDataSchema);
