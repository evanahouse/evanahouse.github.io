import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../../config/firebase";

const db = getFirestore(app);

export const createMail = async (
  name: string,
  email: string,
  message: string
) => {
  try {
    const collectionRef = collection(db, "mail");
    const mailObject = {
      to: "evanahouse@gmail.com",
      template: {
        name: "contactFormInquiry",
        data: {
          name: name,
          email: email,
          message: message,
        },
      },
    };
    await addDoc(collectionRef, mailObject);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
