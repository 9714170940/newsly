export const LineChart = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2004", 1000, 400, 600],
  ["2005", 1170, 460, 900],
  ["2006", 660, 1120, 2000],
  ["2007", 1030, 540, 2500],
  ["2008", 30, 840, 1800],
  ["2009", 1230, 1840, 2800],
];

export const lineOption = {
  title: "Company Performance",
  colors: ["#5d00a9", "#b0b0b0", "#ffdc5c"],
  curveType: "function",
  legend: {
    position: "bottom"
  }
};

export const pieOption = {
  title: "Popularity of Types of Pizza",
  sliceVisibilityThreshold: 0.05,
  is3D: true,
  colors: ["#5d00a9", "#b0b0b0", "#ffdc5c"],
  legend: {
    position: "right"
  }
};

export const pieChart = [
  ["Reached", "Target"],
  ["Desktop", 70],
  ["Mobile", 22],
  ["Clouds", 8],
];
