import React, { PureComponent } from "react";
import {
  Banner,
  CenterConstraint,
  ChapterList,
  ChapterListItem,
  MainTitle,
  NovelContainer,
  UnstyledLink
} from "../../components";

class Novel extends PureComponent {
  render() {
    return (
      <NovelContainer backgroundColor="#f4f7fb">
        <Banner
          height="25vh"
          image="https://vignette.wikia.nocookie.net/overlordmaruyama/images/d/d5/Overlord_Characters.png/revision/latest?cb=20160619122954"
        />
        <CenterConstraint>
          <MainTitle color="#272d33" fontSize="3.375em" textAlign="center">
            Genjitsu Oukokukaizoukin
          </MainTitle>
          <ChapterList>
            <UnstyledLink to="/">
              <ChapterListItem>
                <p>Chapter 1</p>
              </ChapterListItem>
            </UnstyledLink>
            <ChapterListItem>
              <p>Chapter 2</p>
            </ChapterListItem>
            <ChapterListItem>
              <p>Chapter 3</p>
            </ChapterListItem>
          </ChapterList>
        </CenterConstraint>
      </NovelContainer>
    );
  }
}

export default Novel;
