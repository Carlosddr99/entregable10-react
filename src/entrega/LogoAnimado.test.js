import renderer from 'react-test-renderer';
import LogoAnimado from './LogoAnimado';

it('render logo', () => {
    const tree = renderer
    .create(<LogoAnimado />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});