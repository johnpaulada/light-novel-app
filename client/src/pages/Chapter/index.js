import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CenterConstraint,
  ChapterMenu,
  ChapterMenuButton,
  ChapterParagraph,
  ChapterTitle,
  NovelContainer
} from "../../components";
import { fetchChapter } from "../../redux/actions";
const { REACT_APP_API_URL: API_URL } = process.env;

class Chapter extends Component {
  state = {
    dark: false
  };

  loadChapter = () => {
    const { novelId, id } = this.props;
    const url = `${API_URL}/novels/${novelId}/chapters/${id}`;
    this.props.getChapter(url);
  };

  componentDidMount() {
    this.loadChapter();
  }

  toggleTheme = () => {
    this.setState({ dark: !this.state.dark });
  };

  backgroundColor = () => (this.state.dark ? "#272d33" : "#FAFAFA");

  renderContent = (content, props) => {
    return [content]
      .map(contentText => contentText.split("\n"))
      .map(contentText => {
        return contentText.map((text, index) => {
          return (
            <ChapterParagraph key={index} {...props}>
              {text}
            </ChapterParagraph>
          );
        });
      })[0];
  };

  render() {
    const { selectedChapter } = this.props;

    if (selectedChapter) {
      console.log(selectedChapter.content.split("\n").length);
    }

    const { dark } = this.state;

    return (
      <NovelContainer backgroundColor={this.backgroundColor()}>
        <ChapterMenu>
          <ChapterMenuButton dark={dark} onClick={this.toggleTheme}>
            Toggle Theme
          </ChapterMenuButton>
        </ChapterMenu>
        <CenterConstraint width="50vw">
          <ChapterTitle dark={dark}>
            Chapter {selectedChapter && selectedChapter.number}
          </ChapterTitle>
          {selectedChapter &&
            this.renderContent(selectedChapter.content, { dark })}
        </CenterConstraint>
      </NovelContainer>
    );
  }
}

const mapStateAsProps = ({ selectedChapter }) => ({
  selectedChapter
});

const mapDispatchAsProps = dispatch => ({
  getChapter: url => dispatch(fetchChapter(url))
});

export default connect(
  mapStateAsProps,
  mapDispatchAsProps
)(Chapter);
