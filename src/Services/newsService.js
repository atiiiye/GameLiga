import http from "./httpService";
import config from "./../config.json";

export function addNews(news) {
  const formData = new FormData(document.getElementById("addNews"));
  formData.append("title", news.title);
  formData.append("text", news.description);
  formData.append("file", news.file);

  console.log("Services : ", news.file);
  console.log("FormData : ", formData);

  const configHeader = {
    headers: {
      "content-type": "multipart/form-data",
      // Accept: "application/json",
    },
  };

  return http.post(
   config.AddNewsApi,
    JSON.stringify({
      // title : news.title,
      // text : news.description,
      // file : news.file,
      formData,
    }),
    configHeader
  );
}

export function news() {}
