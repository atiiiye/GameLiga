import http from "./httpService";
import config from "./../config.json";

export function addNews(news) {
  const formData = new FormData(document.getElementById("addNews"));

  console.log("Services : ", news.file)
  console.log("FormData : ", formData)

  formData.append("file", news.file);

  const configHeader = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  return http.post(
    config.AddNewsApi,
    JSON.stringify(
      {
        title: news.title,
        description: news.description,
        // file: news.file,
        formData
      }
    )
    ,
    configHeader
  );
}

export function news() { }
