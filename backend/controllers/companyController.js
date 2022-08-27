const Company = require("../models/formModel");

exports.submitTheForm = async (req, res) => {
  const {
    name,
    address,
    city,
    state,
    email,
    mobile,
    company,
    teamstory,
    productstory,
    problemstory,
    uniquestory,
    valuestory,
    compstory,
    revenuestory,
    marketStory,
    marketplan,
    proposal,
  } = req.body;

  const saveResult = await new Company({
    name,
    address,
    city,
    state,
    email,
    mobile,
    company,
    teamstory,
    productstory,
    problemstory,
    uniquestory,
    valuestory,
    compstory,
    revenuestory,
    marketStory,
    marketplan,
    proposal,
  });
  await saveResult.save();
  if (saveResult) {
    res.status(201).json({ message: "company details saved" });
  } else {
    res.status(400).json({ message: "error encountered, recheck the code" });
  }
};
