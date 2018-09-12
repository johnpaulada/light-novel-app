import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";

import {
  LandingContainer,
  LandingTitleContainer,
  MainTitle,
  Showcase,
  ShowcaseCard
} from "../../components";

import { fetchHotNovels } from "../../redux/actions";

const novels = [
  {
    link: "/",
    cover:
      "https://vignette.wikia.nocookie.net/genjitsushugisha-no-oukokukaizouki/images/4/43/Genjitsushugiyuusha-Oukokusaikenki.Vol2.2.png/revision/latest?cb=20180610002641"
  },
  {
    link: "/",
    cover:
      "https://wallpapersmug.com/download/1224x1224/7affbf/albedo-overlord-anime-girl.jpg"
  },
  {
    link: "/",
    cover:
      "https://derf9v1xhwwx1.cloudfront.net/image/upload/oth/FunimationStoreFront/1758832/English/1758832_English_ShowDetailHeroPhone_3b93bef1-d153-e811-8175-020165574d09.jpg"
  },
  {
    link: "/",
    cover:
      "https://derf9v1xhwwx1.cloudfront.net/image/upload/oth/FunimationStoreFront/1723930/English/1723930_English_ShowDetailHeroPhone_fc78f966-fc01-e811-8175-020165574d09.jpg"
  },
  {
    link: "/",
    cover:
      "https://scontent-atl3-1.cdninstagram.com/vp/69dfab6b0389ece10c897108e51606db/5BF9E816/t51.2885-15/e35/31070899_1035200819962569_4826245357421723648_n.jpg"
  },
  {
    link: "/",
    cover:
      "https://stmed.net/sites/default/files/styles/1024x1024/public/toaru-majutsu-no-index-wallpapers-26158-2245464.jpg?itok=LgsrDoUG"
  }
];

class Landing extends PureComponent {
  componentDidMount() {
    this.props.fetchHotNovels();
  }

  novelToCard = ({ link, cover }) => (
    <Link key={cover} to={link}>
      <ShowcaseCard image={cover} />
    </Link>
  );

  render() {
    return (
      <LandingContainer>
        <header>
          <LandingTitleContainer>
            <MainTitle>La=Nobe</MainTitle>
            <MainTitle fontSize="1.5em">
              Light Novels for Everyone to Enjoy!
            </MainTitle>
          </LandingTitleContainer>
        </header>
        <section>
          <Showcase>{novels.map(this.novelToCard)}</Showcase>
        </section>
      </LandingContainer>
    );
  }
}

const mapStateToProps = ({ hotNovels }) => ({
  hotNovels
});

const mapDispatchToProps = dispatch => ({
  fetchHotNovels: () => dispatch(fetchHotNovels())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
