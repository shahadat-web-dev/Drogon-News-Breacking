
import Header from '../components/Header';
import RightAside from '../homelayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';
import { useEffect, useState } from 'react';

const NewsDetails = () => {
  const data = useLoaderData();
  const {id} = useParams();
  const [news , setNews] = useState({})
  // console.log(data, id, news);

  useEffect(()=> {
  const newsDetails = data.find(singleNews => singleNews.id == id);
  setNews(newsDetails)

  }, [data, id]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className='container px-4 mx-auto gap-8 grid md:grid-cols-12'>
        <section className='md:col-span-9'>
          <h2 className='font-bold mb-5'>News Details</h2>
          <NewsDetailsCard news={news} />
        </section>
        <aside className='md:col-span-3'>
          <RightAside/>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;