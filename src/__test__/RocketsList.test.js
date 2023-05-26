import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import RocketList from '../components/RocketsList';
import store from '../redux/store';
import { reservation } from '../redux/Rockets/rocketsSlice';

describe('Component render testing', () => {
  it('RocketList page renders correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <RocketList />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

jest.mock('react-redux');

describe('render rockets', () => {
  const rockets = {
    RocketList: [
      {
        id: 1,
        name: 'Falcon 1',
        disc: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        images: 'https://imgur.com/azYafd8.jpg',
        reserved: true,
      },
      {
        id: 2,
        name: 'Falcon 9',
        disc: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
        images: 'https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg',
        reserved: false,
      },
      {
        id: 3,
        name: 'Falcon Heavy',
        disc: 'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
        images: 'https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg',
        reserved: false,
      },
      {
        id: 4,
        name: 'Starship',
        disc: 'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
        images: 'https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg',
        reserved: false,
      },
    ],
  };
  test('The reservation state of the Falcon 1 should be true', () => {
    store.dispatch(reservation(1));

    expect(rockets.RocketList[0].reserved).toBe(true);
  });

  test('The reservation state of the Falcon 9 should be False', () => {
    store.dispatch(reservation(2));
    store.dispatch(reservation(2));

    expect(rockets.RocketList[1].reserved).toBe(false);
  });
  test('The reservation state of the Starship should be False', () => {
    store.dispatch(reservation(4));
    store.dispatch(reservation(4));
    expect(rockets.RocketList[3].reserved).toBe(false);
  });
});
