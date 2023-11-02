const getPriorityName = (priority) => {
  switch (priority) {
    case 4:
      return "Urgent";
    case 3:
      return "High";
    case 2:
      return "Medium";
    case 1:
      return "Low";
    case 0:
      return "No Priority";
    default:
      return "No Priority";
  }
};

const userAvailabilityColor = (available) => {
  if (available) {
    return "#e8b603";
  } else {
    return "#dfe1e4";
  }
}

export { getPriorityName, userAvailabilityColor };
