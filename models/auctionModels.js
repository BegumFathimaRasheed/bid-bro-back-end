import mongoose from "mongoose";

const auctionSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    startingPrice: { type: Number, required: true },
    noOfUnits: { type: Number, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

const Auction = mongoose.model('Auction', auctionSchema);

export default Auction;