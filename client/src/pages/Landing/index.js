import { Link } from "@reach/router";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  LandingContainer,
  LandingTitleContainer,
  MainTitle,
  Showcase,
  ShowcaseCard
} from "../../components";
import { fetchHotNovels } from "../../redux/actions";
const { REACT_APP_API_URL: API_URL } = process.env;

class Landing extends PureComponent {
  componentDidMount() {
    const novelsUrl = `${API_URL}/novels`;
    this.props.fetchHotNovels(novelsUrl);
  }

  novelToCard = ({ id, cover }) => (
    <Link key={id} to={`/novels/${id}`}>
      <ShowcaseCard image={cover} />
    </Link>
  );

  render() {
    const { hotNovels } = this.props;

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
          <Showcase id="showcase">{hotNovels.map(this.novelToCard)}</Showcase>
        </section>
      </LandingContainer>
    );
  }
}

const mapStateToProps = ({ hotNovels }) => ({
  hotNovels
});

const mapDispatchToProps = dispatch => ({
  fetchHotNovels: url => dispatch(fetchHotNovels(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
