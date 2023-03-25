import asyncHandler from "express-async-handler";

//@desc Get goals
//@route GET /api/goals
//@access Private
export const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

//@desc Set goal
//@route POST /api/goals
//@access Private
export const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  //   console.log(req.body);
  res.status(200).json({ message: "Set Goals" });
});

//@desc Update goals
//@route PUT /api/goals/:id
//@access Private
export const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goals ${req.params.id}` });
});

//@desc Delete goals
//@route Delete /api/goals/:id
//@access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goals ${req.params.id}` });
});
