const { Firestore } = require("@google-cloud/firestore");
const db = new Firestore();

const savePrediction = async (id, data) => {
  await db.collection("predictions").doc(id).set(data);
};

const getPredictionHistories = async () => {
  try {
    const snapshot = await db.collection("predictions").get();
    const histories = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      histories.push({
        id: doc.id,
        history: {
          result: data.result,
          createdAt: data.createdAt,
          suggestion: data.suggestion,
          id: doc.id,
        },
      });
    });

    return histories;
  } catch (error) {
    throw new Error("Error retrieving prediction histories: " + error.message);
  }
};

module.exports = { savePrediction, getPredictionHistories };
