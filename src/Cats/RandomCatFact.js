import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

//https://alexwohlbruck.github.io/cat-facts/docs/

function RandomCatFact(props) {
  const [catFact, setCatFact] = React.useState(null);
  const [catFactUrl, setCatFactUrl] = React.useState("");

  React.useEffect(() => {
    fetch("http://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1")
      .then((response) => {
        setCatFactUrl("http://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1")
        return response.json();
      })
      .then((data) => {
        setCatFact(data.text)
      });
  }, []);

  if (catFact == null) return <div> Loading </div>;

  return (
    <MainContainer>
      <div>
        <h1>{catFactUrl}</h1>
        "{catFact}"
      </div>
    </MainContainer>
  );
}

export default RandomCatFact;
