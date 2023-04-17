const getAllCoins = async () => {
  const response = await fetch("https://api.coincap.io/v2/assets#");
  const data = await response.json();
  return data.splice(0, 14);
};

export default getAllCoins;
