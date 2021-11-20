export const fetchMarkovModel = async (learningData: string) =>
  fetch("./api/create_model", {
    method: "POST",
    body: `contents=${encodeURIComponent(learningData)}`,
  }).then(async (res) => {
    if (res.ok) {
      return res.text();
    } else {
      throw new Error(`${res.status}`);
    }
  });
