import { useParams } from "react-router-dom";
import { Component, useContext } from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext"; //1st way of using app level context
import Modal from "./Modal";

/* function component : 
const Details= ()=>{
    const {id} = useParams();
    return <h2>{`hi i'm ${id} lol omg bbq`}</h2>
} */

//class component :
class Details extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { loading: true };
  // }
  //writing above constructor code as class properties
  state = { loading: true, showModal: false };
  /*before ecma 2022 we had to include this by doing npm i -D @babel/plugin-proposal-class-properties 
  and would have to add 
  {
    "plugins":  ["@babel/plugin-proposal-class-properties"]
  }
  to .babelrc file
  */

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );

    const json = await res.json();

    /* this.setState({
      loading: false,
    });

    this.setState(json.pets[0]); */
    //above commented two setState can be written as below and it's better as calling setState multiple times will cause rerendring multiple times which will affect performance
    //this.setState(Object.assign({ loading: false }, json.pets[0]));
    //more better way of doing above line
    this.setState({ loading: false, ...json.pets[0] });
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }
    // throw new Error("lmao you crashed");

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images}></Carousel>
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} — {breed} — {city}, {state}
          </h2>
          {/* 1st way */}
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <a href="https://bit.ly/pet-adopt">Yes</a>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}
const WrappedDetails = () => {
  const params = useParams();
  const [theme] = useContext(ThemeContext); //2nd way / lazy way if you are using hooks
  return (
    <ErrorBoundary>
      <Details theme={theme} params={params}></Details>;
    </ErrorBoundary>
  );
};
export default WrappedDetails;
