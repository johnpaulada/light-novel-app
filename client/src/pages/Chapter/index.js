import React, { Component } from "react";
import {
  CenterConstraint,
  ChapterMenu,
  ChapterMenuButton,
  ChapterParagraph,
  ChapterTitle,
  NovelContainer
} from "../../components";

class Chapter extends Component {
  state = {
    dark: false
  };

  toggleTheme = () => {
    this.setState({ dark: !this.state.dark });
  };

  backgroundColor = () => (this.state.dark ? "#272d33" : "#FAFAFA");

  render() {
    const { dark } = this.state;

    return (
      <NovelContainer backgroundColor={this.backgroundColor()}>
        <ChapterMenu>
          <ChapterMenuButton dark={dark} onClick={this.toggleTheme}>
            Toggle Theme
          </ChapterMenuButton>
        </ChapterMenu>
        <CenterConstraint width="50vw">
          <ChapterTitle dark={dark}>Overlord</ChapterTitle>
          <ChapterParagraph dark={dark}>
            Life has its fortunes and its hardships. I believe these words of
            the old man of Mito is a wise saying. Life has its mountains and
            valleys. It is exactly because one climbed over adversity that one
            could sail down, and if one keeps taking the easy way down one would
            soon find oneself surrounded by rising slopes. The conclusion is
            therefore, a person should persevere through life’s climbs, but I
            think different.
          </ChapterParagraph>
        </CenterConstraint>
      </NovelContainer>
    );
  }
}

export default Chapter;
