const fetchToken = async (id: string | undefined) => {
    try {
      const res = await fetch(
        "https://techclub-6c39263b7807.herokuapp.com/tooken/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ unique_id: id }),
        }
      );
      const data = await res.json();

      return data
    } catch (e) {
      console.error(e);
    }
  };

  export default fetchToken