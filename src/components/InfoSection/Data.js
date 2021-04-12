import ImageOne from '../../images/Image1.svg'
import ImageTwo from '../../images/Image2.svg'
import ImageThree from '../../images/Image3.svg'




export const homeObjOne = {
    id :'about',
    lightBg: false,
    lightText:true,
    lightTextDesc:false,
    topLine: '1일 1커밋',
    headLine : 'ImNM',
    description: 'https://github.com/ImNM/react-fullSmoothScrooll',
    buttonLabel: 'ImNM',
    imgStart: true,
    img: ImageOne,
    alt : 'img',
    dark:true,
    primary:true,
    darkText:false,
};


export const homeObjTwo = {
    id :'discover',
    lightBg: true,
    lightText:false,
    lightTextDesc:false,
    topLine: '1일 1커밋',
    headLine : '2번째 scroll',
    description: '홍익대학교 컴공과 2학년 휴학중 맥북으로 작업중 키보드도 삼 ',
    buttonLabel: '2번째',
    imgStart: false,
    img: ImageTwo,
    alt : 'img',
    dark:true,
    primary:true,
    darkText:true,
};


export const homeObjThree = {
    id :'rentals',
    lightBg: false,
    lightText:true,
    lightTextDesc:true,
    topLine: '1일 1커밋',
    headLine : '3번째 3croll',
    description: '다음으로 할건 기존 프로젝트 마무리와 칼럼구역 나누기에 집중하고, 네이버 지도 api 학습을 시도해 보겠어요.',
    buttonLabel: '3번째',
    imgStart: true,
    img: ImageThree,
    alt : 'img',
    dark:true,
    primary:true,
    darkText:false,
};