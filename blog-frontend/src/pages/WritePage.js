import Responsive from "../components/common/Responsive";
import TagBoxContainer from '../containers/write/TagBoxContainer';
import EditorContainer from "../containers/write/EditorContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonContainer";
import { Helmet } from "react-helmet-async";

const WritePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기</title>
      </Helmet>
      <EditorContainer/>
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
