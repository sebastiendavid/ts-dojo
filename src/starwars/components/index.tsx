import * as React from 'react';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { AppState } from '../../state';
import {
  StarWarsDispatchProps,
  StarWarsProps,
  StarWarsStateProps,
} from '../types';
import './index.css';

const mapStateToProps: MapStateToProps<
  StarWarsStateProps,
  {},
  AppState
> = state => ({
  text: state.starWars.text,
});

const mapDispatchToProps: MapDispatchToProps<StarWarsDispatchProps, {}> = {
  resetText: () => ({ type: 'RESET_TEXT' }),
  updateText: payload => ({ type: 'UPDATE_TEXT', payload }),
};

class StarWarsComponent extends React.Component<StarWarsProps> {
  public onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.updateText(event.target.value);
  };

  public onReset = () => this.props.resetText();

  public render() {
    return (
      <>
        <div className="starwars-demo">
          <img src="/star.svg" className="star" alt="Star" />
          <img src="/wars.svg" className="wars" alt="Wars" />
          <h2 className="byline" id="byline">
            {this.props.text}
          </h2>
        </div>
        <div className="starwars-actions">
          <input
            className="starwars-input"
            type="text"
            value={this.props.text}
            onChange={this.onChange}
          />
          <button className="starwars-reset" onClick={this.onReset}>
            Reset
          </button>
        </div>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarWarsComponent);
