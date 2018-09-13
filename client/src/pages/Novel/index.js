import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  Banner,
  CenterConstraint,
  ChapterList,
  ChapterListItem,
  MainTitle,
  NovelContainer,
  UnstyledLink
} from "../../components";
import { fetchNovel } from "../../redux/actions";
const { REACT_APP_API_URL: API_URL } = process.env;

class Novel extends PureComponent {
  componentDidMount() {
    const { id, getNovel } = this.props;
    const novelUrl = `${API_URL}/novels/${id}`;
    getNovel(novelUrl);
  }

  renderChapterList = selectedNovel => {
    const novelHasChapters =
      selectedNovel &&
      "chapters" in selectedNovel &&
      Array.isArray(selectedNovel.chapters) &&
      selectedNovel.chapters.length > 0;

    if (!novelHasChapters) {
      return <p>No Chapters Were Loaded!</p>;
    }

    const { id } = this.props;

    return selectedNovel.chapters.map((chapter, index) => (
      <UnstyledLink key={index} to={`/novels/${id}/chapters/${chapter}`}>
        <ChapterListItem>
          <p>Chapter {index + 1}</p>
        </ChapterListItem>
      </UnstyledLink>
    ));
  };

  render() {
    const { selectedNovel } = this.props;
    const { title, cover } = selectedNovel;

    return (
      <NovelContainer backgroundColor="#f4f7fb">
        <Banner height="25vh" image={cover} />
        <CenterConstraint>
          <MainTitle color="#272d33" fontSize="3.375em" textAlign="center">
            {title}
          </MainTitle>
          <ChapterList>{this.renderChapterList(selectedNovel)}</ChapterList>
        </CenterConstraint>
      </NovelContainer>
    );
  }
}

const mapStateToProps = ({ selectedNovel }) => ({
  selectedNovel
});

const mapDispatchToProps = dispatch => ({
  getNovel: url => dispatch(fetchNovel(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Novel);
