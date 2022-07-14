import React from 'react';
import {useState} from 'react';
import './../../styles/zeta/zetaNetwork.scss';

const ZetaNetwork = () => {
  // './../../img/zeta/network/korea.png'
  const ztNtListSrc =['korea.png','china.png','asia_europe.png']

  const ztNtList= [...ztNtListSrc];

  const [ztNtImg,setZtNtImg]=useState(ztNtList[0]);
  //console.log(ztNtImg);

  return (
    <div className='ztNetWorkBox'>
      <div className='ztNtInner'>
        <h2 className='ztTitle'>
            제휴네트워크
        </h2>
        <div className='ztRedTabBox'>
          <div className='ztRedTabInner'>
            <div className='ztRedTab ztFixed' >
              <p onClick={() => setZtNtImg(ztNtList[0])} className={ztNtImg===ztNtList[0]? 'ztRedTabFirst active':'ztRedTabFirst'}>Korea</p>
              <p onClick={() => setZtNtImg(ztNtList[1])} className={ztNtImg===ztNtList[1]? 'ztRedTabTwo active':'ztRedTabTwo'}>China</p>
              <p onClick={() => setZtNtImg(ztNtList[2])} className={ztNtImg===ztNtList[2]? 'ztRedTabThr active':'ztRedTabThr'}>Asia · Europe</p>
            </div>
            <div className= 'ztRedTabTitle ztFixed'>
              <p className='ztRedTabTitleTop'>Network</p>
              <p className='ztRedTabTitleTxt'>제타 플랜과 함께 하는 기업들</p>
            </div>
            <div className='ztRedTabContent'>
              <div className="ztRedTabList ztNetWorkImgBig">
                <img src={require('./../../img/zeta/network/'+ztNtImg)} alt='zetanetwork' width="100%"/>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default ZetaNetwork;