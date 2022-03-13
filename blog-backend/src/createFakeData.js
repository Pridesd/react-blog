import Post from './models/post';

export default function createFakeData() {
  // 0~ 39로 이루어진 배열을 생성하고 포스트로 변환함

  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body: 'fhkjdshfkjdshfskdjhfdskjfdskbdjgs,zbjsnfdsfsdnb,jdsbvdzkjbvzds,bgk.gbkjfd.bgkjfdzbgkj`jbknfbjfdbvkjdbvhjdsbvsjdvbnmvbzm,vndsnvnbdvkjfdghsdjdskfjdslksdflksndfkdsnfskjdbfksdnfsjdnfslkdvnsdlkghslkfjsfsjfsuijfhhdsjfsgflisurjfeiusdcmndsijsdugrejfsglsehliijihguregjlhfirejsdlvuslfjsdnviefjsalkhgowpefhudsijuftso;ghsdnmcsoidhfewo;fsdjfhsiudhfsiufhljskdfgsidhfgsdhfsdfjhsgdufjshdfjshdyfujsdhyfujdshyfusjdhyfusjdyfujshyfuikdsjufikdsjufikdsjufikdsjufikdsjyfukdsnfhudskmfudskfj',
    tags: ['가짜', '데이터'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
