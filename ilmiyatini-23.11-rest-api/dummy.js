const getAllQuotes = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/quotes");
    console.log("quotes:", response.data.quotes);
  } catch (error) {
    console.log(error);
  }
};
getAllQuotes();
