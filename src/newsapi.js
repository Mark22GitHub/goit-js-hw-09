//NEWS API KEY!!!

const list = document.querySelector(".fetch-posts");
const apiKey = "0b94267f02e949528f5e2039825f3f98";
const mainUrl = "https://newsapi.org/";
const backVersion = "v2";
const endpoint = "/everything";
const endpoint1 = "/top-headlines";
const endpoint2 = "/sources";
const query = "bitcoin";
const query1 = "space";
const query2 = "galaxy";
const options = {
  method: "GET", //"POST", "PUT" , "PATCH" , DELETE
  headers: {
    // "X-Api-Key": apiKey,
    Authorization: apiKey,
  },
  //   body: {
  //     //
  //   },
};

const url = `${mainUrl}/${backVersion}/${endpoint}?q=${query}&from=2020-09-02&sortBy=publishedAt&apiKey=${apiKey}`;
const url1 = `${mainUrl}/${backVersion}/${endpoint1}?q=${query1}&from=2020-09-02&sortBy=publishedAt&apiKey=${apiKey}`;
const url2 = `${mainUrl}/${backVersion}/${endpoint2}?q=${query2}&from=2020-09-02&sortBy=publishedAt&apiKey=${apiKey}`;
const url3 = `${mainUrl}/${backVersion}/${endpoint}?q=${query}&from=2020-09-02&sortBy=publishedAt`;

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// fetch(url1)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// fetch(url2)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

fetch(url3, options)
  .then((res) => res.json())
  .then((data) => data.articles)
  .then((articles) => createItem(articles));

function createItem(data) {
  data.map((obj) => {
    const title = document.createElement("h2");
    title.textContent = obj.title;

    const link = document.createElement("a");
    link.setAttribute("href", obj.url);
    link.append(title);

    const content = document.createElement("p");
    content.textContent = obj.content;

    const author = document.createElement("p");
    author.textContent = obj.author;

    const published = document.createElement("p");
    published.textContent = obj.publishedAt;

    const source = document.createElement("p");
    source.textContent = obj.source.name;

    const item = document.createElement("li");
    item.append(link, content, author, published, source);

    list.append(item);
  });
}

{
  /* <template>
  <ul>
    <li>
      <a href="url">
        <h2>title</h2>
      </a>
      <p>content</p>
      <p>author</p>
      <p>published</p>
      <p>source.name</p>
    </li>
  </ul>
</template> */
}
