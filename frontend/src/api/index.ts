export const fetchMarkovModel = async (learningData: string) =>
  fetch("./api/create_model", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ contents: learningData }),
  }).then(async (res) => {
    if (res.ok) {
      return res.text();
    } else {
      throw new Error(`${res.status}`);
    }
  });
