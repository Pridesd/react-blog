import Responsive from "../components/common/Responsive";
import TagBoxContainer from '../containers/write/TagBoxContainer';
import EditorContainer from "../containers/write/EditorContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonContainer";

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer/>
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
