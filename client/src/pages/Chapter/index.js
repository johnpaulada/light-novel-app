import React, { Component } from "react";
import {
  CenterConstraint,
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
    return (
      <NovelContainer backgroundColor={this.backgroundColor()}>
        <div
          style={{
            backgroundColor: "none",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "10px",
            paddingBottom: "10px"
          }}
        >
          <button
            style={{
              marginLeft: "10px",
              background: "none",
              border: "none",
              color: "#333",
              margin: "10px",
              cursor: "pointer"
            }}
            onClick={this.toggleTheme}
          >
            Toggle Theme
          </button>
        </div>
        <CenterConstraint width="50vw">
          <ChapterTitle dark={this.state.dark}>Overlord</ChapterTitle>
          <ChapterParagraph dark={this.state.dark}>
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
