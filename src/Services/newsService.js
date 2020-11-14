import http from "./httpService";
import config from "./../config.json";

export function addNews(news) {
    const formData = new FormData();
    //  formData.append("name", name);
    //  formData.append("ext", ext);
  formData.append("file", news.file);

  const configHeader = {
    headers: {
      "content-type": "multipart/form-data",
    },
    };
    
    console.log(formData);

  return http.post(
    config.newsApi,
     JSON.stringify({
      title: news.title,
      description: news.description,
      formData,
    }),
    configHeader
  );
}

export function news() {}
