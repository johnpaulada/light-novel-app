import React, { PureComponent } from "react";
import {
  LandingContainer,
  LandingTitleContainer,
  MainTitle,
  Showcase,
  ShowcaseCard
} from "../../components";
import { Link } from "@reach/router";

const novels = [
  {
    link: "/",
    image:
      "https://vignette.wikia.nocookie.net/genjitsushugisha-no-oukokukaizouki/images/4/43/Genjitsushugiyuusha-Oukokusaikenki.Vol2.2.png/revision/latest?cb=20180610002641"
  },
  {
    link: "/",
    image:
      "https://wallpapersmug.com/download/1224x1224/7affbf/albedo-overlord-anime-girl.jpg"
  },
  {
    link: "/",
    image:
      "https://derf9v1xhwwx1.cloudfront.net/image/upload/oth/FunimationStoreFront/1758832/English/1758832_English_ShowDetailHeroPhone_3b93bef1-d153-e811-8175-020165574d09.jpg"
  },
  {
    link: "/",
    image:
      "https://derf9v1xhwwx1.cloudfront.net/image/upload/oth/FunimationStoreFront/1723930/English/1723930_English_ShowDetailHeroPhone_fc78f966-fc01-e811-8175-020165574d09.jpg"
  },
  {
    link: "/",
    image:
      "https://scontent-atl3-1.cdninstagram.com/vp/69dfab6b0389ece10c897108e51606db/5BF9E816/t51.2885-15/e35/31070899_1035200819962569_4826245357421723648_n.jpg"
  },
  {
    link: "/",
    image:
      "https://stmed.net/sites/default/files/styles/1024x1024/public/toaru-majutsu-no-index-wallpapers-26158-2245464.jpg?itok=LgsrDoUG"
  }
];

class Landing extends PureComponent {
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
          <Showcase>
            {novels.map(({ link, image }) => (
              <Link to={link}>
                <ShowcaseCard image={image} />
              </Link>
            ))}
          </Showcase>
        </section>
      </LandingContainer>
    );
  }
}

export default Landing;
