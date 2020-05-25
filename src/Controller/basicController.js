import { firestore } from "../firebase";

export const homeController = async (req, res) => {
  let memoList = [];

  try {
    await firestore
      .collection("memo")
      .get()
      .then(docs => {
        docs.forEach(doc => {
          memoList.push({
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description
          });
        });
      });
  } catch (error) {
    console.log(error);
  }
  res.render("home", { memoList });
};

export const writeController = (req, res) => {
  res.render("write");
};

export const writeControllerPost = async (req, res) => {
  const {
    body: { title, desc }
  } = req;

  try {
    await firestore.collection("memo").add({
      title: title,
      description: desc
    });
  } catch (error) {
    console.log(error);
  }

  homeController(req, res);
};

export const deleteControllerPost = async (req, res) => {
  const {
    body: { id }
  } = req;

  console.log(`삭제할 아이디는 :${id} 입니다.`);

  try {
    await firestore
      .collection("memo")
      .doc(id)
      .delete();
  } catch (error) {
    console.log(error);
  }

  homeController(req, res);
};
