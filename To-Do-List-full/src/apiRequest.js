const apiRequest = async (url = '', optionsObj = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error("Please reload the app");

    if (optionsObj?.method === 'DELETE') return null;
    return await response.json();

  } catch (err) {
    return err.message;
  }
};

export default apiRequest;
