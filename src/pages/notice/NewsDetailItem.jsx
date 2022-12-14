import React, { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import newsData from '../../db/newsList.json';
import columnData from '../../db/column.json';
import '../../styles/notice/newsDetail.scss';
import contentImg from '../../img/notice/thumbnail_zeta.png';
import PageBase from '../../components/common/Darkmode/PageBase';

const NewsDetailItem = ({ setHdSubStyle }) => {
  const { category, id } = useParams();
  const [data, setData] = useState([]);

  const [detailData, setDetailData] = useState(null);

  const getDataByCategory = () => {
    switch (category) {
    case 'news':
      return newsData;
    case 'column':
    default:
      return columnData;
    }
  }

  useEffect(() => {
    setData(getDataByCategory());
  }, [category])

  useEffect(() => {
    const filteredData = data.find((element) => element.id === parseInt(id));
    setDetailData(filteredData);
  }, [data])

  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  const setBreadThreeDepth = () => {
    if (category === undefined) {
      return 'NEWS';
    } else if (category === 'news') {
      return 'NEWS';
    } else if (category === 'column') {
      return 'COLUMN';
    }
  }

  const title = 'ZETA PLAN만의\n다양하고 전문적인 정보를 제공해드립니다';
  const oneDepth='소식 · 자료';
  const oneDepthLink='/news/news';
  const twoDepth='소식';
  const twoDepthLink = '/news/news';
  const linkActive='threeDepth';

  if (!detailData) {
    return <div></div>
  }

  return (
    <div>
      <SubBanner title={title} img={subBg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink= {twoDepthLink} threeDepth={setBreadThreeDepth()} threeDepthLink={category === undefined ? '/news/news' : `/news/${category}`} linkActive={linkActive} />
      <PageBase>
        <div className="newsDetailInner">
          <div className="detailTitle darkText">
            <p>소식</p>
          </div>
          <div className="detailItemBox">
            <p className="detailItemTitle darkText">{detailData.title}</p>
            <div className="contentBox">
              {
                detailData.img.length === 0 ? <img className="zetaLogoThumb" src={contentImg} alt="zeta 대표 이미지" /> : <img src={detailData.img} alt={detailData.alt} />
              }
              <div className="content" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }} dangerouslySetInnerHTML={{ __html: detailData.content }}></div>
            </div>
          </div>
          <Link to={`/news/${category}`} className="newsListBtn">목록</Link>
        </div>
      </PageBase>
    </div>
  );
};

export default NewsDetailItem;
