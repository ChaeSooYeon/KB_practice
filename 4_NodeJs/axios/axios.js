const axios = require('axios'); //axios 임포트
const url =
  'https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json';

const fetchMovieList = async () => {
  try {
    const { data } = await axios.get(url);
    if (!data.articleList || data.articleList.size == 0) {
      throw new Error('데이터가 없습니다');
    }
    return data.articleList;
  } catch (err) {
    console.error(err);
  }
};

const getMovieList = async () => {
  const articleList = await fetchMovieList();
  return articleList.map((article, idx) => {
    return { title: article.title, rank: idx + 1 };
  });
};

const printMovieList = async () => {
  const movieInfos = await getMovieList();
  for (let movieinfo of movieInfos) {
    console.log(`${movieinfo.rank}위 ${movieinfo.title}`);
  }
};

printMovieList();

/** axios
  .get(url) //GET요청
  .then((result) => {
    //결과처리
    if (result.status != 200) {
      throw new Error('요청에 실패하였습니다.');
    }
    if (result.data) {
      return result.data; //result.data가 있으면 결과를 반환
    }
    throw new Error('전송받은 데이터가 없습니다');
  })
  .then((data) => {
    if (!data.articleList && data.articleList.size == 0) {
      throw new Error('데이터가 없습니다');
    }
    return data.articleList; //영화리스트 반환
  })
  .then((articles) => {
    return articles.map((article, idx) => {
      return { title: article.title, rank: idx + 1 };
    });
  })
  .then((results) => {
    for (let movieinfo of results) {
      console.log(`${movieinfo.rank}위 ${movieinfo.title}`);
    }
  })
  .catch((err) => {
    console.log('<<에러 발생>>');
    console.error(err);
  });
   */

/**
   * const axios = require('axios'); //axios 임포트

async function getTop20Movies() {
  //await를 사용하여 동기화 시키기 위해 async 붙임

  const url =
    'https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json';

  //http 네트워크에서 데이터를 받아오므로 await로 기다려야 한다.
  try {
    const result = await axios.get(url);
    const { data } = result;
    if (!data.articleList || data.articleList.size == 0) {
      throw new Error('데이터가 없습니다.');
    }

    //data에서 필요한 영화 제목과 순위를 정보를 뽑아내자
    const movieInfos = data.articleList.map((article, index) => {
      return { title: article.title, rank: index + 1 };
    });

    //(데이터) 영화정보 출력
    for (let movieinfo of movieInfos) {
      console.log(`[${movieinfo.rank}위]  ${movieinfo.title}`);
    }
  } catch (error) {
    throw new Error(error);
  }
}

getTop20Movies();
   */
